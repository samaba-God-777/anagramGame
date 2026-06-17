/* ═══════════════════════════════════════════
   STORAGE MODULE
   Hybrid: localStorage (fast) + Supabase (persistent)
   ═══════════════════════════════════════════ */

import { 
  loadTenseProgress, saveTenseProgress,
  loadGameScores, saveGameScore as saveGameScoreToDb,
  syncFromSupabase, updateUserStreak
} from './hybridStorage.js';

const STORAGE_KEY = "anagramGame_progress";
const GAME_STORAGE_KEY = "englishGames_progress";

let state = {};
let gameState = {};

function progKey() { return state.currentTense + "." + state.currentForm; }

function loadProgress() {
  try {
    // Load from hybrid storage (localStorage + Supabase)
    const saved = loadTenseProgress(state.currentTense, state.currentForm);
    if (saved) {
      state.score = saved.score ?? 0;
      state.attempts = saved.attempts ?? 0;
      state.streak = saved.streak ?? 0;
      state.bestStreak = saved.bestStreak ?? 0;
      state.completed = saved.completed ?? 0;
      state.usedSentences = saved.usedSentences ?? [];
    }
  } catch(e) { /* ignore corrupt data */ }
}

function saveProgress() {
  try {
    // Save to hybrid storage (localStorage + Supabase)
    saveTenseProgress(state.currentTense, state.currentForm, {
      score: state.score,
      attempts: state.attempts,
      streak: state.streak,
      bestStreak: state.bestStreak,
      completed: state.completed,
      usedSentences: state.usedSentences,
      time_spent_seconds: 0
    });
  } catch(e) { /* ignore storage errors */ }
}

function loadGameState() {
  try {
    // Load from hybrid storage
    const scores = loadGameScores();
    gameState = scores;
  } catch (e) { gameState = {}; }
}

function saveGameState() {
  try { localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(gameState)); } catch (e) {}
}

function saveGameScore(game, score) {
  loadGameState();
  if (!gameState[game]) gameState[game] = { bestScore: 0, totalScore: 0, gamesPlayed: 0 };
  gameState[game].totalScore += score;
  gameState[game].gamesPlayed++;
  if (score > gameState[game].bestScore) gameState[game].bestScore = score;
  saveGameState();
  
  // Save to Supabase
  saveGameScoreToDb(game, {
    score: score,
    level: 'normal',
    completed: true
  });
}

// Initialize: sync from Supabase on first load
let syncDone = false;
async function initStorage() {
  if (syncDone) return;
  syncDone = true;
  try {
    await syncFromSupabase();
    await updateUserStreak();
  } catch (e) {
    console.warn('Storage init failed:', e);
  }
}

// Run sync on import
initStorage();

export { STORAGE_KEY, GAME_STORAGE_KEY, state, gameState, loadProgress, saveProgress, loadGameState, saveGameState, saveGameScore };
