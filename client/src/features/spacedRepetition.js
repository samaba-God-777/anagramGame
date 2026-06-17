/* ═══════════════════════════════════════════
   SPACED REPETITION SYSTEM MODULE
   Uses hybrid storage (localStorage + Supabase)
   ═══════════════════════════════════════════ */

/**
 * Spaced repetition system (SM-2 variant) for tracking which sentences
 * and exercises the user got wrong, and prioritizing them in game selection.
 * @module features/spacedRepetition
 */

import { loadSpacedRepetition, saveSpacedRepetition } from '../lib/hybridStorage.js';

const STORAGE_KEY = "spacedRepetition";

/** Default initial values for a new review item */
const DEFAULT_ITEM = {
  wrongCount: 0,
  correctCount: 0,
  streak: 0,
  nextReview: null,
  lastSeen: null,
  easeFactor: 2.5,
  interval: 1,
};

/**
 * Loads all spaced repetition data from localStorage.
 * @returns {Object} Map of item IDs to review data objects
 */
function loadAll() {
  return loadSpacedRepetition();
}

/**
 * Saves all spaced repetition data to localStorage and Supabase.
 * @param {Object} data - The complete SR data to save
 */
function saveAll(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    /* ignore storage errors */
  }
}

/**
 * Records an answer for a given item (sentence, exercise, etc.).
 * Updates wrongCount, correctCount, streak, easeFactor, interval, and nextReview
 * based on the SM-2 algorithm.
 *
 * @param {string} id - Unique identifier for the item (e.g., sentence text or exercise hash)
 * @param {boolean} correct - Whether the answer was correct
 * @param {Object} [meta] - Optional metadata to store (e.g., tense, form, game type)
 */
export function recordAnswer(id, correct, meta = {}) {
  const all = loadAll();
  if (!all[id]) {
    all[id] = { ...DEFAULT_ITEM, id, meta };
  }

  const item = all[id];
  const now = new Date().toISOString();
  item.lastSeen = now;

  if (correct) {
    item.correctCount++;
    item.streak++;
    // SM-2 ease factor adjustment
    if (item.streak >= 3) {
      item.easeFactor = Math.min(item.easeFactor + 0.1, 3.0);
    }
    // Increase interval based on streak
    if (item.streak === 1) {
      item.interval = 1;
    } else if (item.streak === 2) {
      item.interval = 3;
    } else {
      item.interval = Math.round(item.interval * item.easeFactor);
    }
  } else {
    item.wrongCount++;
    item.streak = 0;
    // Reset interval and lower ease factor on wrong answer
    item.easeFactor = Math.max(item.easeFactor - 0.2, 1.3);
    item.interval = 1;
  }

  // Calculate next review date
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + item.interval);
  item.nextReview = nextDate.toISOString();

  all[id] = item;
  saveAll(all);
  
  // Sync to Supabase via hybrid storage
  saveSpacedRepetition(id, item);
}

/**
 * Gets items that are due for review (nextReview is in the past or today).
 * @param {number} [limit=20] - Maximum number of items to return
 * @returns {Array<Object>} Array of review items sorted by priority (most overdue first)
 */
export function getReviewDue(limit = 20) {
  const all = loadAll();
  const now = new Date();

  return Object.values(all)
    .filter(item => {
      if (!item.nextReview) return false;
      return new Date(item.nextReview) <= now;
    })
    .sort((a, b) => {
      // Priority: higher wrongCount first, then more overdue first
      const overdueA = now - new Date(a.nextReview);
      const overdueB = now - new Date(b.nextReview);
      if (b.wrongCount !== a.wrongCount) return b.wrongCount - a.wrongCount;
      return overdueB - overdueA;
    })
    .slice(0, limit);
}

/**
 * Gets high-priority sentences for game selection.
 * Returns sentences the user has gotten wrong most frequently,
 * sorted by wrong count (highest first).
 *
 * @param {string[]} [sentencePool] - Optional pool of sentences to filter against
 * @param {number} [limit=10] - Maximum number of sentences to return
 * @returns {Array<Object>} Priority items sorted by wrongCount descending
 */
export function getPrioritySentences(sentencePool, limit = 10) {
  const all = loadAll();

  let items = Object.values(all)
    .filter(item => item.wrongCount > 0)
    .sort((a, b) => {
      // Score = wrongCount weighted by recency
      const scoreA = a.wrongCount * (itemAgeDays(a) < 7 ? 2 : 1);
      const scoreB = b.wrongCount * (itemAgeDays(b) < 7 ? 2 : 1);
      return scoreB - scoreA;
    });

  if (sentencePool && Array.isArray(sentencePool)) {
    const poolSet = new Set(sentencePool);
    items = items.filter(item => poolSet.has(item.id));
  }

  return items.slice(0, limit);
}

/**
 * Calculates how many days since an item was last seen.
 * @param {Object} item - A review item
 * @returns {number} Days since last seen (Infinity if never seen)
 */
function itemAgeDays(item) {
  if (!item.lastSeen) return Infinity;
  const diff = Date.now() - new Date(item.lastSeen).getTime();
  return diff / (1000 * 60 * 60 * 24);
}

/**
 * Gets stats summary for the spaced repetition system.
 * @returns {Object} Summary with totalItems, itemsWithErrors, itemsDueForReview, averageEaseFactor
 */
export function getSRStats() {
  const all = loadAll();
  const items = Object.values(all);
  const now = new Date();

  const itemsWithErrors = items.filter(i => i.wrongCount > 0).length;
  const itemsDue = items.filter(i => i.nextReview && new Date(i.nextReview) <= now).length;
  const avgEF = items.length > 0
    ? items.reduce((sum, i) => sum + (i.easeFactor || 2.5), 0) / items.length
    : 2.5;

  return {
    totalItems: items.length,
    itemsWithErrors,
    itemsDueForReview: itemsDue,
    averageEaseFactor: Math.round(avgEF * 100) / 100,
  };
}

/**
 * Resets all spaced repetition data (for testing or fresh start).
 */
export function resetSR() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    /* ignore */
  }
}

/**
 * Gets the review data for a specific item.
 * @param {string} id - The item identifier
 * @returns {Object|null} The review item, or null if not found
 */
export function getItem(id) {
  const all = loadAll();
  return all[id] || null;
}

/**
 * Selects sentences for a game session, prioritizing items with errors.
 * Mixes priority items with random new sentences for balanced practice.
 *
 * @param {string[]} allSentences - Complete list of available sentences
 * @param {number} [count=10] - Number of sentences to select for the session
 * @param {number} [priorityRatio=0.4] - Fraction of selections that should be priority items (0-1)
 * @returns {string[]} Shuffled array of selected sentences
 */
export function selectGameSentences(allSentences, count = 10, priorityRatio = 0.4) {
  const all = loadAll();
  const poolSet = new Set(allSentences);

  // Get priority items that are in the current pool
  const priorityItems = Object.values(all)
    .filter(item => item.wrongCount > 0 && poolSet.has(item.id))
    .sort((a, b) => b.wrongCount - a.wrongCount);

  const priorityCount = Math.min(Math.round(count * priorityRatio), priorityItems.length);
  const randomCount = count - priorityCount;

  // Select priority sentences
  const selected = [];
  const usedIds = new Set();

  for (let i = 0; i < priorityCount && i < priorityItems.length; i++) {
    selected.push(priorityItems[i].id);
    usedIds.add(priorityItems[i].id);
  }

  // Fill remaining with random sentences (prefer ones not yet seen)
  const candidates = allSentences.filter(s => !usedIds.has(s));
  const unseen = candidates.filter(s => !all[s]);
  const seen = candidates.filter(s => all[s]);

  // Shuffle both pools
  const shuffledUnseen = shuffleArray(unseen);
  const shuffledSeen = shuffleArray(seen);
  const fillPool = [...shuffledUnseen, ...shuffledSeen];

  for (let i = 0; i < randomCount && i < fillPool.length; i++) {
    selected.push(fillPool[i]);
  }

  // If we still need more, just pick any from the full pool
  while (selected.length < count) {
    const remaining = allSentences.filter(s => !usedIds.has(s));
    if (remaining.length === 0) break;
    const pick = remaining[Math.floor(Math.random() * remaining.length)];
    selected.push(pick);
    usedIds.add(pick);
  }

  return shuffleArray(selected);
}

/**
 * Fisher-Yates shuffle for arrays.
 * @param {Array} arr - Array to shuffle (does not mutate original)
 * @returns {Array} Shuffled copy
 */
function shuffleArray(arr) {
  const r = [...arr];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}
