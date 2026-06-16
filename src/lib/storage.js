/* ═══════════════════════════════════════════
   STORAGE MODULE
   ═══════════════════════════════════════════ */

const STORAGE_KEY = "anagramGame_progress";
const GAME_STORAGE_KEY = "englishGames_progress";

let state = {};
let gameState = {};

function progKey() { return state.currentTense + "." + state.currentForm; }

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const all = JSON.parse(raw);
    const saved = all[progKey()];
    if (!saved) return;
    state.score = saved.score ?? 0;
    state.attempts = saved.attempts ?? 0;
    state.streak = saved.streak ?? 0;
    state.bestStreak = saved.bestStreak ?? 0;
    state.completed = saved.completed ?? 0;
    state.usedSentences = saved.usedSentences ?? [];
  } catch(e) { /* ignore corrupt data */ }
}

function saveProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const all = raw ? JSON.parse(raw) : {};
    all[progKey()] = {
      score: state.score,
      attempts: state.attempts,
      streak: state.streak,
      bestStreak: state.bestStreak,
      completed: state.completed,
      usedSentences: state.usedSentences,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch(e) { /* ignore storage errors */ }
}

function loadGameState() {
  try {
    const raw = localStorage.getItem(GAME_STORAGE_KEY);
    if (raw) gameState = JSON.parse(raw);
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
}

export { STORAGE_KEY, GAME_STORAGE_KEY, state, gameState, loadProgress, saveProgress, loadGameState, saveGameState, saveGameScore };
