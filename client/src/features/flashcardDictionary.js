/* ═══════════════════════════════════════════
   FLASHCARD DICTIONARY MODULE
   Study vocabulary with spaced repetition
   ═══════════════════════════════════════════ */

import { recordAnswer, getReviewDue, getSRStats } from './spacedRepetition.js';

const SESSION_SIZE = 20;

let state = {
  deck: 'all',
  allCards: [],
  sessionCards: [],
  currentIndex: 0,
  isFlipped: false,
  stats: { studied: 0, correct: 0, wrong: 0 }
};

let els = {};

export function initFlashcardDictionary() {
  els = {
    deckTabs: document.getElementById('deckTabs'),
    cardContainer: document.getElementById('flashcardContainer'),
    cardInner: document.getElementById('flashcardInner'),
    cardFront: document.getElementById('cardFront'),
    cardBack: document.getElementById('cardBack'),
    knowItBtn: document.getElementById('knowItBtn'),
    studyAgainBtn: document.getElementById('studyAgainBtn'),
    progressBar: document.getElementById('progressBar'),
    progressText: document.getElementById('progressText'),
    statsBar: document.getElementById('statsBar'),
    emptyState: document.getElementById('emptyState'),
    controls: document.getElementById('flashcardControls'),
    newSessionBtn: document.getElementById('newSessionBtn'),
    loader: document.getElementById('flashcardLoader'),
    errorState: document.getElementById('errorState'),
    errorMsg: document.getElementById('errorMsg'),
    sessionComplete: document.getElementById('sessionComplete'),
  };

  // Click card to flip
  els.cardContainer.addEventListener('click', (e) => {
    if (e.target.closest('.flashcard-controls')) return;
    flipCard();
  });

  // Know It / Study Again
  els.knowItBtn.addEventListener('click', () => rateCard(true));
  els.studyAgainBtn.addEventListener('click', () => rateCard(false));

  // New session
  els.newSessionBtn.addEventListener('click', () => {
    const activeTab = els.deckTabs.querySelector('.deck-tab.active');
    startSession(activeTab ? activeTab.dataset.deck : 'all');
  });

  // Deck tabs
  els.deckTabs.querySelectorAll('.deck-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      startSession(tab.dataset.deck);
    });
  });

  loadAllData()
    .then(() => {
      initDeck('all');
      updateStatsBar();
    })
    .catch(err => showError(err));
}

async function loadAllData() {
  // Dictionary (fetch JSON)
  let dictCards = [];
  try {
    const resp = await fetch('/dictionary/dictionary.json');
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const dictData = await resp.json();
    dictCards = Object.entries(dictData).map(([word, trans]) => ({
      front: word,
      back: trans,
      source: 'dictionary'
    }));
  } catch (e) {
    console.warn('Failed to load dictionary.json:', e);
  }

  // Phrasal verbs (global `data` from pv500-data.js script tag)
  const pvCards = (window.data || []).map(item => ({
    front: item.phrasal,
    back: `${item.meaning}`,
    example: item.example,
    source: 'phrasal'
  }));

  // Idioms (global `window.IDIOMS_500` from script tag)
  const idiomCards = (window.IDIOMS_500 || []).map(item => ({
    front: item.idiom,
    back: `${item.meaning}`,
    example: item.example,
    source: 'idiom',
    category: item.category
  }));

  state.allCards = [...dictCards, ...pvCards, ...idiomCards];
}

function initDeck(deckType) {
  // Activate tab
  els.deckTabs.querySelectorAll('.deck-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.deck === deckType);
  });

  state.deck = deckType;
  state.currentIndex = 0;
  state.isFlipped = false;
  state.stats = { studied: 0, correct: 0, wrong: 0 };

  // Filter cards for this deck
  let pool;
  if (deckType === 'due') {
    const dueItems = getReviewDue(SESSION_SIZE * 2);
    const dueIds = new Set(dueItems.map(i => i.id));
    pool = state.allCards.filter(c => dueIds.has(c.front));
  } else if (deckType === 'phrasal') {
    pool = state.allCards.filter(c => c.source === 'phrasal');
  } else if (deckType === 'idioms') {
    pool = state.allCards.filter(c => c.source === 'idiom');
  } else {
    // 'all' deck: mix dictionary, phrasal, idioms
    pool = state.allCards;
  }

  if (pool.length === 0) {
    showEmpty(deckType);
    return;
  }

  // Efficient random sample (don't shuffle all 100k)
  state.sessionCards = randomSample(pool, SESSION_SIZE);

  els.loader.hidden = true;
  showCard();
}

function showCard() {
  if (state.currentIndex >= state.sessionCards.length) {
    showSessionComplete();
    return;
  }

  const card = state.sessionCards[state.currentIndex];

  // Reset flip
  state.isFlipped = false;
  els.cardInner.classList.remove('flipped');

  // Set content
  els.cardFront.textContent = card.front;

  let backHtml = card.back;
  if (card.example) {
    backHtml += `<br><br><em class="flashcard-example">“${card.example}”</em>`;
  }
  els.cardBack.innerHTML = backHtml;

  // Show/hide sections
  els.controls.hidden = false;
  els.emptyState.hidden = true;
  els.sessionComplete.hidden = true;
  els.cardContainer.hidden = false;
  els.errorState.hidden = true;

  updateProgress();
}

function flipCard() {
  if (!els.cardContainer || els.cardContainer.hidden) return;
  state.isFlipped = !state.isFlipped;
  els.cardInner.classList.toggle('flipped', state.isFlipped);
}

function rateCard(knowIt) {
  if (state.currentIndex >= state.sessionCards.length) return;

  const card = state.sessionCards[state.currentIndex];
  recordAnswer(card.front, knowIt, { type: card.source });

  state.stats.studied++;
  if (knowIt) state.stats.correct++;
  else state.stats.wrong++;

  state.currentIndex++;
  state.isFlipped = false;

  updateStatsBar();
  showCard();
}

function updateProgress() {
  const total = state.sessionCards.length;
  const done = state.currentIndex;
  const pct = total > 0 ? (done / total) * 100 : 0;
  els.progressBar.style.width = `${pct}%`;
  els.progressText.textContent = `Card ${done + 1} of ${total}`;
}

function updateStatsBar() {
  const srStats = getSRStats();
  const total = state.stats.studied;
  const rate = total > 0 ? Math.round((state.stats.correct / total) * 100) : 0;

  els.statsBar.innerHTML = `
    <span class="flashcard-stat">📊 Studied: <strong>${total}</strong></span>
    <span class="flashcard-stat">✅ Correct: <strong>${rate}%</strong></span>
    <span class="flashcard-stat">⏰ Due: <strong>${srStats.itemsDueForReview}</strong></span>
    <span class="flashcard-stat">📚 Total: <strong>${srStats.totalItems}</strong></span>
  `;
}

function showSessionComplete() {
  els.cardContainer.hidden = true;
  els.controls.hidden = true;
  els.emptyState.hidden = true;
  els.sessionComplete.hidden = false;
  els.sessionComplete.innerHTML = `
    <div class="flashcard-empty-icon">🎉</div>
    <h3>Session Complete!</h3>
    <p>${state.stats.correct}/${state.stats.studied} correct (${state.stats.studied > 0 ? Math.round(state.stats.correct / state.stats.studied * 100) : 0}%)</p>
  `;
}

function showEmpty(deckType) {
  const labels = { all: 'All Words', phrasal: 'Phrasal Verbs', idioms: 'Idioms', due: 'Due for Review' };
  els.cardContainer.hidden = true;
  els.controls.hidden = true;
  els.sessionComplete.hidden = true;
  els.emptyState.hidden = false;
  els.emptyState.innerHTML = `
    <div class="flashcard-empty-icon">📭</div>
    <h3>No cards available</h3>
    <p>${deckType === 'due' ? 'No words due for review. Start a study session with any deck!' : `The "${labels[deckType]}" deck is empty.`}</p>
  `;
}

function showError(err) {
  els.loader.hidden = true;
  els.errorState.hidden = false;
  els.errorMsg.textContent = err.message || 'Failed to load flashcard data';
}

function randomSample(arr, n) {
  if (arr.length <= n) return shuffleArray(arr);
  const result = arr.slice(0, n);
  // Fisher-Yates partial shuffle
  for (let i = 0; i < n; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    result[i] = arr[j];
  }
  return result;
}

function shuffleArray(arr) {
  const r = arr.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}
