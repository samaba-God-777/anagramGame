/* ═══════════════════════════════════════════
   ENGLISH LEARNING HUB — Main Entry Point
   Ties together all modules, handles page
   detection, and initializes games/engines.
   ═══════════════════════════════════════════ */

/**
 * Main entry point for the English Learning Hub.
 * Detects the current page, initializes the appropriate game/engine,
 * sets up event listeners for sidebar, theme, keyboard shortcuts,
 * and handles quiz click handlers.
 * @module main
 */

import { initTheme, toggleTheme } from './lib/theme.js';
import { buildGlobalSidebar, closeSidebar, toggleSidebar } from './lib/sidebar.js';
import { initOnboarding } from './ux/onboarding.js';
import { $, shuffle, spawnConfetti, showFeedback } from './lib/utils.js';
import { state, loadProgress, saveProgress, loadGameState } from './lib/storage.js';
import { renderTheoryHTML, renderClauseFullLesson, renderClauseTheory } from './lib/renderers.js';
import { check as checkAchievements, initAchievements } from './features/achievements.js';

/* ── SENTENCE DATA ── */
const SENTENCES = {
  "Present Simple": {
    affirmative: ["I play tennis every Sunday","She works in a hospital","They live in New York","He reads the newspaper every morning","We eat dinner at seven o clock"],
    negative: ["I do not like spicy food","She does not speak Japanese","They do not live in this city","He does not drive to work","We do not watch TV in the morning"],
    questions: ["Do you like chocolate","Does she work on weekends","Do they live near the park","Does he speak English fluently","Do we need to bring anything"],
  },
  "Present Continuous": {
    affirmative: ["I am reading a book right now","She is cooking dinner in the kitchen","They are playing soccer in the park","He is studying for his exam today","We are watching a movie at home"],
    negative: ["I am not sleeping at the moment","She is not working today","They are not playing outside right now","He is not listening to music","We are not watching the news"],
    questions: ["Are you listening to me","Is she coming to the party","Are they playing outside now","Is he working on the project","Are we meeting them tonight"],
  },
  "Present Perfect": {
    affirmative: ["I have finished my homework already","She has visited Paris three times","They have arrived at the airport","He has bought a new car","We have seen that movie before"],
    negative: ["I have not seen that movie yet","She has not called me back","They have not eaten breakfast","He has not finished the report","We have not traveled abroad this year"],
    questions: ["Have you ever been to London","Has she finished her work","Have they arrived at the hotel","Has he ever tried sushi","Have we met before"],
  },
  "Present Perfect Continuous": {
    affirmative: ["I have been waiting for an hour","She has been studying all morning","They have been working since eight o clock","He has been living here for five years","We have been planning this trip for months"],
    negative: ["I have not been sleeping well lately","She has not been feeling good","They have not been exercising regularly","He has not been attending classes","We have not been using that software"],
    questions: ["Have you been waiting long","Has she been feeling better","Have they been working on this project","Has he been learning English","Have we been driving for too long"],
  },
  "Past Simple": {
    affirmative: ["I visited my grandmother yesterday","She bought a new dress last week","They went to the beach on Saturday","He wrote a letter to his friend","We had dinner at a nice restaurant"],
    negative: ["I did not go to school yesterday","She did not like the movie","They did not arrive on time","He did not finish his homework","We did not eat breakfast this morning"],
    questions: ["Did you see the accident","Did she call you last night","Did they enjoy the party","Did he pass the exam","Did we miss the bus"],
  },
  "Past Continuous": {
    affirmative: ["I was watching TV at eight PM","She was cooking when I arrived","They were playing outside all afternoon","He was sleeping during the movie","We were driving home when it started to rain"],
    negative: ["I was not sleeping when you called","She was not listening to the teacher","They were not playing video games","He was not paying attention","We were not expecting this result"],
    questions: ["Were you sleeping when I called","Was she working yesterday morning","Were they playing in the garden","Was he studying for the test","Were we driving too fast"],
  },
  "Past Perfect": {
    affirmative: ["I had already eaten when she arrived","She had finished her work before noon","They had left before I called","He had never seen snow before that day","We had booked the tickets in advance"],
    negative: ["I had not seen her before that day","She had not finished cooking yet","They had not heard the news","He had not prepared for the meeting","We had not met each other before"],
    questions: ["Had you ever been there before","Had she finished the report on time","Had they already left when you arrived","Had he ever tried Thai food","Had we met somewhere earlier"],
  },
  "Past Perfect Continuous": {
    affirmative: ["I had been waiting for two hours when she arrived","She had been studying for months before the exam","They had been working there for five years","He had been living in London before he moved","We had been traveling for six hours when we stopped"],
    negative: ["I had not been feeling well before the trip","She had not been sleeping well before the move","They had not been working there for very long","He had not been studying enough before the test","We had not been waiting long before the bus came"],
    questions: ["Had you been waiting long before the bus arrived","Had she been working there before she moved","Had they been living in that house before the fire","Had he been feeling sick before the diagnosis","Had we been driving for long before we stopped"],
  },
  "Future Simple": {
    affirmative: ["I will call you tomorrow morning","She will arrive next week","They will help us with the project","He will be a great doctor someday","We will visit you during the holidays"],
    negative: ["I will not forget your birthday","She will not come to the party","They will not accept the offer","He will not give up on his dream","We will not leave without you"],
    questions: ["Will you come to my birthday party","Will she pass the driving test","Will they arrive before dinner","Will he join us for the trip","Will we finish on time"],
  },
  "Future Continuous": {
    affirmative: ["I will be waiting for you at the airport","She will be working at five PM","They will be traveling across Europe next summer","He will be attending the conference next week","We will be celebrating our anniversary in June"],
    negative: ["I will not be sleeping at midnight","She will not be attending the meeting","They will not be using the old system","He will not be joining us for dinner","We will not be staying at a hotel"],
    questions: ["Will you be working tomorrow afternoon","Will she be joining us for dinner","Will they be staying at a hotel","Will he be attending the ceremony","Will we be using the new software"],
  },
  "Future Perfect": {
    affirmative: ["I will have finished the report by Friday","She will have graduated by next year","They will have arrived by noon","He will have saved enough money by December","We will have completed the project by March"],
    negative: ["I will not have finished by Monday","She will not have saved enough money yet","They will not have left by the time you arrive","He will not have recovered by next week","We will not have reached the destination by night"],
    questions: ["Will you have finished by five PM","Will she have arrived by the time we get there","Will they have completed the work by Friday","Will he have graduated by next summer","Will we have driven two hundred miles by then"],
  },
  "Future Perfect Continuous": {
    affirmative: ["I will have been working here for ten years next month","She will have been studying for three hours by the time we arrive","They will have been traveling for twenty four hours by then","He will have been living in Japan for a year in April","We will have been building this house for six months by October"],
    negative: ["I will not have been living there for very long","She will not have been waiting for more than an hour","They will not have been working on this project for long","He will not have been studying English for very long","We will not have been driving for more than two hours"],
    questions: ["Will you have been waiting long by the time we arrive","Will she have been studying for five hours by noon","Will they have been living here for a year next month","Will he have been working there for a decade next spring","Will we have been traveling for eight hours by the time we stop"],
  },
};

/* ── CONSTANTS ── */
const FORMS = ["affirmative", "negative", "questions"];
const FORM_LABELS = { affirmative: "Affirmative", negative: "Negative", questions: "Questions" };
const TENSE_ORDER = [
  "Present Simple", "Present Continuous", "Present Perfect", "Present Perfect Continuous",
  "Past Simple", "Past Continuous", "Past Perfect", "Past Perfect Continuous",
  "Future Simple", "Future Continuous", "Future Perfect", "Future Perfect Continuous",
];

/* ── STATE ── */
state.currentTense = window.PAGE_TENSE || "Present Simple";
state.currentForm = "affirmative";
state.currentSentence = "";
state.correctWords = [];
state.score = 0;
state.attempts = 0;
state.streak = 0;
state.bestStreak = 0;
state.completed = 0;
state.usedSentences = [];
state.hintLevel = 0;
state.isComplete = false;

/* ── DOM REFS ── */
const wordsArea = $("wordsArea");
const dropArea = $("dropArea");
const checkBtn = $("checkBtn");
const resetBtn = $("resetBtn");
const newSentenceBtn = $("newSentenceBtn");
const hintBtn = $("hintBtn");
const resultDiv = $("result");
const scoreSpan = $("score");
const attemptsSpan = $("attempts");
const streakDisplay = $("streakDisplay");
const completedDisplay = $("completedDisplay");
const accuracyDisplay = $("accuracyDisplay");
const bestStreakDisplay = $("bestStreakDisplay");
const hintArea = $("hintArea");
const hintText = $("hintText");
const progressBar = $("progressBar");
const progressText = $("progressText");
const themeToggle = $("themeToggle");
const wordCount = $("wordCount");
const dropCount = $("dropCount");
const tenseLabel = $("tenseLabel");
const formLabel = $("formLabel");
const sidebarToggle = $("sidebarToggle");
const sidebarOverlay = $("sidebarOverlay");
const sidebarClose = $("sidebarClose");
const sidebarNav = $("sidebarNav");

let draggedItem = null;
let dropTarget = null;
let feedbackTimeout = null;
let isTensePage = typeof window.PAGE_TENSE !== "undefined" && window.PAGE_TENSE !== "Hub";

/* ── PROGRESS PERSISTENCE ── */
const STORAGE_KEY = "anagramGame_progress";
function progKey() { return state.currentTense + "." + state.currentForm; }

/* ── UTILITY FUNCTIONS ── */
function getSentencesFor(t, f) { return SENTENCES[t]?.[f] || []; }

function pickSentence() {
  const p = getSentencesFor(state.currentTense, state.currentForm);
  const a = p.filter(s => !state.usedSentences.includes(s));
  const src = a.length > 0 ? a : p;
  return src[Math.floor(Math.random() * src.length)];
}

/* ── THEORY RENDERING ── */
function renderTheoryHTMLLocal(tense) {
  return renderTheoryHTML(tense);
}

function showTheory(tense) {
  state.currentTense = tense;
  state.view = "theory";
  const tv = $("theoryView"); const gv = $("gameView");
  if (tv) { tv.innerHTML = renderTheoryHTMLLocal(tense); tv.hidden = false; }
  if (gv) { gv.hidden = true; }
  if (tenseLabel) tenseLabel.textContent = tense;
  if (formLabel) formLabel.textContent = "Theory";
  updateSidebarActive();
  setActiveTab("theory");
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showGame() {
  state.view = "game";
  const tv = $("theoryView"); const gv = $("gameView");
  if (tv) tv.hidden = true;
  if (gv) gv.hidden = false;
  if (tenseLabel) tenseLabel.textContent = state.currentTense;
  if (formLabel) formLabel.textContent = FORM_LABELS[state.currentForm];
  updateSidebarActive();
  setActiveTab(state.currentForm);
}

/* ── SIDEBAR ACTIVE STATE ── */
function updateSidebarActive() {
  if (!sidebarNav) return;
  if (isTensePage) {
    sidebarNav.querySelectorAll(".tense-title").forEach(el => el.classList.toggle("active", el.dataset.tense === state.currentTense));
    sidebarNav.querySelectorAll(".form-btn").forEach(el => el.classList.toggle("active", el.dataset.tense === state.currentTense && el.dataset.form === state.currentForm));
    sidebarNav.querySelectorAll(".tense-group").forEach(g => {
      const t = g.querySelector(".tense-title");
      if (t && t.dataset.tense === state.currentTense) { g.classList.add("open"); t.setAttribute("aria-expanded", "true"); }
      else if (t) { g.classList.remove("open"); t.setAttribute("aria-expanded", "false"); }
    });
  }
}

/* ── GAME LOGIC ── */
function createWordEl(text, opts = {}) {
  const { droppable = false, correct = false } = opts;
  const el = document.createElement("div");
  el.className = "word"; el.textContent = text; el.setAttribute("data-word", text);
  if (correct) el.classList.add("correct");
  if (droppable) el.classList.add("droppable-word");
  if (!correct) { el.setAttribute("draggable", "true"); el.addEventListener("dragstart", onDragStart); el.addEventListener("dragend", onDragEnd); }
  if (droppable) { el.addEventListener("click", () => returnWord(el, text)); }
  return el;
}

function returnWord(el, text) {
  if (state.isComplete) return;
  const n = createWordEl(text);
  wordsArea.appendChild(n);
  el.remove();
  updateWordCounts();
  resultDiv.textContent = "";
  resultDiv.className = "result-message";
  showFeedback(`"${text}" moved back`, "info");
}

function onDragStart(e) {
  if (this.getAttribute("draggable") !== "true") return;
  draggedItem = this;
  e.dataTransfer.setData("text/plain", this.textContent);
  e.dataTransfer.effectAllowed = "move";
  this.classList.add("dragging");
}

function onDragEnd() {
  if (draggedItem) { draggedItem.classList.remove("dragging"); draggedItem = null; dropTarget = null; }
}

function setupDropZone() {
  dropArea.addEventListener("dragover", e => {
    e.preventDefault(); e.dataTransfer.dropEffect = "move"; dropArea.classList.add("drag-over");
    const t = e.target.closest(".word");
    if (t && t.parentElement === dropArea && t !== draggedItem) { dropTarget = t; } else if (!e.target.closest(".word")) { dropTarget = null; }
  });
  dropArea.addEventListener("dragleave", () => dropArea.classList.remove("drag-over"));
  dropArea.addEventListener("drop", e => {
    e.preventDefault(); dropArea.classList.remove("drag-over");
    if (!draggedItem || state.isComplete) return;
    const fromWords = draggedItem.parentElement === wordsArea;
    const fromDrop = draggedItem.parentElement === dropArea;
    if (fromDrop) {
      if (dropTarget && dropTarget !== draggedItem) { dropArea.insertBefore(draggedItem, dropTarget); }
      dropTarget = null; updateWordCounts(); return;
    }
    if (fromWords) {
      const t = draggedItem.textContent; const el = createWordEl(t, { droppable: true });
      if (dropTarget && dropTarget.parentElement === dropArea) { dropArea.insertBefore(el, dropTarget); }
      else { dropArea.appendChild(el); }
      const ph = dropArea.querySelector(".drop-placeholder");
      if (ph && dropArea.children.length > 1) ph.remove();
      draggedItem.remove(); dropTarget = null; updateWordCounts();
    }
  });
}

function enableDraggable(on) {
  document.querySelectorAll(".word").forEach(el => {
    if (on && !el.classList.contains("correct")) { el.setAttribute("draggable", "true"); el.style.cursor = "grab"; }
    else { el.setAttribute("draggable", "false"); el.style.cursor = "default"; }
  });
}

function updateWordCounts() {
  const wc = wordsArea.children.length;
  const dc = dropArea.children.length - (dropArea.querySelector(".drop-placeholder") ? 1 : 0);
  if (wordCount) wordCount.textContent = `${wc} word${wc !== 1 ? "s" : ""}`;
  if (dropCount) dropCount.textContent = `${dc} word${dc !== 1 ? "s" : ""}`;
}

function updateStats() {
  if (scoreSpan) scoreSpan.textContent = state.score;
  if (attemptsSpan) attemptsSpan.textContent = state.attempts;
  if (streakDisplay) streakDisplay.textContent = state.streak;
  if (completedDisplay) completedDisplay.textContent = state.completed;
  if (bestStreakDisplay) bestStreakDisplay.textContent = state.bestStreak;
  if (accuracyDisplay) { const p = state.attempts > 0 ? Math.round((state.score / state.attempts) * 100) : 0; accuracyDisplay.textContent = p + "%"; }
}

function updateProgress() {
  const pool = getSentencesFor(state.currentTense, state.currentForm);
  const total = pool.length;
  const done = state.usedSentences.filter(s => pool.includes(s)).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  if (progressBar) progressBar.style.width = Math.min(pct, 100) + "%";
  if (progressText) progressText.textContent = `${Math.min(done, total)} / ${total} completed`;
}

function loadGame() {
  wordsArea.innerHTML = "";
  dropArea.innerHTML = "";
  resultDiv.textContent = ""; resultDiv.className = "result-message";
  hintArea?.setAttribute("hidden", "");
  state.hintLevel = 0; state.isComplete = false;
  const ph = document.createElement("div"); ph.className = "drop-placeholder"; ph.textContent = "Drop words here to build your sentence…"; dropArea.appendChild(ph);
  state.currentSentence = pickSentence();
  if (state.currentForm === "questions") state.currentSentence += " ?";
  state.correctWords = state.currentSentence.split(" ");
  shuffle(state.correctWords).forEach(w => wordsArea.appendChild(createWordEl(w)));
  updateWordCounts(); enableDraggable(true); updateStats(); updateProgress();
}

function checkAnswer() {
  if (state.isComplete) { showFeedback("Sentence already complete! Try a new one.", "info"); return; }
  const dw = Array.from(dropArea.children).filter(c => !c.classList.contains("drop-placeholder")).map(c => c.textContent);
  if (dw.length === 0) { showFeedback("Drag some words to the drop area first!", "info"); return; }
  const us = dw.join(" ");
  const correct = us === state.currentSentence;
  state.attempts++; updateStats();
  if (correct) {
    state.score++; state.streak++; state.completed++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
    state.isComplete = true; updateStats(); updateProgress();
    resultDiv.textContent = "Perfect! Correct sentence!"; resultDiv.className = "result-message success";
    dropArea.classList.add("success-pulse"); setTimeout(() => dropArea.classList.remove("success-pulse"), 500);
    document.querySelectorAll("#dropArea .word").forEach(el => { el.classList.add("correct"); el.setAttribute("draggable", "false"); el.style.cursor = "default"; });
    enableDraggable(false);
    showFeedback("Great job! Try a new sentence.", "success");
    spawnConfetti();
    // Record correct answer in spaced repetition
    try {
      import('./features/spacedRepetition.js').then(sr => sr.recordAnswer(state.currentSentence, true, { tense: state.currentTense, form: state.currentForm }));
    } catch (e) { /* SR module not available */ }
  } else {
    state.streak = 0; updateStats();
    resultDiv.textContent = "Not quite right. Try again!"; resultDiv.className = "result-message error";
    dropArea.classList.add("shake"); setTimeout(() => dropArea.classList.remove("shake"), 400);
    const c = dw.length; const n = state.correctWords.length;
    if (c !== n) { showFeedback(`You placed ${c} word${c !== 1 ? "s" : ""}, but need ${n}.`, "info"); }
    else { showFeedback("All words are there, but the order is wrong.", "info"); }
    // Record wrong answer in spaced repetition
    try {
      import('./features/spacedRepetition.js').then(sr => sr.recordAnswer(state.currentSentence, false, { tense: state.currentTense, form: state.currentForm }));
    } catch (e) { /* SR module not available */ }
  }
  saveProgress();
  checkAchievements({ type: 'sentence-complete', state: { ...state }, tense: state.currentTense });
}

function resetGame() {
  if (state.isComplete) { loadGame(); return; }
  dropArea.innerHTML = "";
  const ph = document.createElement("div"); ph.className = "drop-placeholder"; ph.textContent = "Drop words here to build your sentence…"; dropArea.appendChild(ph);
  wordsArea.innerHTML = "";
  shuffle(state.correctWords).forEach(w => wordsArea.appendChild(createWordEl(w)));
  resultDiv.textContent = ""; resultDiv.className = "result-message";
  hintArea?.setAttribute("hidden", "");
  state.hintLevel = 0; updateWordCounts();
  showFeedback("Reset! Arrange the words again.", "info");
}

function loadNewSentence() {
  const s = state.currentSentence.replace(/ \?$/, "");
  state.usedSentences.push(s); saveProgress(); loadGame();
  showFeedback("New sentence! Try to arrange it correctly.", "info");
}

function giveHint() {
  if (state.isComplete) { showFeedback("Sentence is already complete!", "info"); return; }
  const w = state.correctWords;
  state.hintLevel = Math.min(state.hintLevel + 1, w.length);
  const hw = w.map((word, i) => {
    if (i < state.hintLevel) return word;
    return word.split("").map((ch, j) => (j === 0 && ch.match(/[a-zA-Z]/) ? ch : "_")).join("");
  });
  if (hintText) hintText.textContent = hw.join(" ");
  hintArea?.removeAttribute("hidden");
}

/* ── FORM SELECTION ── */
function selectTenseForm(tense, form) {
  saveProgress();
  state.currentTense = tense;
  state.currentForm = form;
  state.hintLevel = 0;
  loadProgress();
  showGame();
  closeSidebar();
  loadGame();
  showFeedback(`Now practicing: ${tense} — ${FORM_LABELS[form]}`, "info");
}

/* ── TABS ── */
function setActiveTab(view) {
  document.querySelectorAll(".tab").forEach(t => {
    const v = t.dataset.view;
    t.classList.toggle("active", v === view);
    t.setAttribute("aria-selected", v === view ? "true" : "false");
  });
}

function initTabs() {
  document.querySelector(".tab-bar")?.addEventListener("click", e => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    const view = tab.dataset.view;
    if (view === "theory") { showTheory(state.currentTense); }
    else { selectTenseForm(state.currentTense, view); }
  });
}

/* ── QUIZ CLICK HANDLER ── */
function setupQuizHandler() {
  document.addEventListener("click", function (e) {
    const opt = e.target.closest(".quiz-option");
    if (!opt) return;
    // Skip if it's a final quiz option (handled separately)
    if (opt.classList.contains("fq-option")) return;

    const qid = parseInt(opt.dataset.qid);
    const selected = parseInt(opt.dataset.opt);
    const container = opt.closest(".quiz-container");
    if (!container) return;

    // Determine which quiz set we're in
    let exercises = [];
    let feedbackId = "";
    let scoreId = "";

    if (document.querySelector('[data-page="prepositions"]')) {
      exercises = getPrepositionExercises();
      feedbackId = `prepQuizFeedback${qid}`;
      scoreId = "prepQuizScore";
    } else if (document.querySelector('[data-page="adjective-positions"]')) {
      exercises = getAdjectivePositionExercises();
      feedbackId = `adjQuizFeedback${qid}`;
      scoreId = "adjQuizScore";
    } else if (document.querySelector('[data-page="adverb-positions"]')) {
      exercises = getAdverbPositionExercises();
      feedbackId = `advQuizFeedback${qid}`;
      scoreId = "advQuizScore";
    } else if (document.querySelector('[data-page="conjunctions"]')) {
      exercises = getConjunctionExercises();
      feedbackId = `conjQuizFeedback${qid}`;
      scoreId = "conjQuizScore";
    } else if (document.querySelector('[data-page="phrasal-verbs"]')) {
      exercises = getPhrasalVerbExercises();
      feedbackId = `pvQuizFeedback${qid}`;
      scoreId = "pvQuizScore";
    } else if (document.querySelector('[data-page="idiomatic-expressions"]')) {
      exercises = getIdiomaticExpressionExercises();
      feedbackId = `ieQuizFeedback${qid}`;
      scoreId = "ieQuizScore";
    } else if (document.querySelector('[data-page="clauses"]')) {
      const clauseType = document.querySelector('[data-page="clauses"]')?.dataset.clauseType;
      exercises = getClauseExercises(clauseType);
      feedbackId = `quizFeedback${qid}`;
      scoreId = "quizScore";
    }

    if (!exercises[qid]) return;

    const fb = document.getElementById(feedbackId);
    if (!fb) return;
    if (fb.dataset.answered === "1") return;

    const parent = opt.closest(".quiz-question");
    parent.querySelectorAll(".quiz-option").forEach(b => b.disabled = true);
    fb.dataset.answered = "1";

    if (selected === exercises[qid].answer) {
      fb.textContent = "✓ Correct!";
      fb.className = "quiz-feedback correct";
      opt.classList.add("correct-answer");
      const scoreEl = document.getElementById(scoreId);
      if (scoreEl) scoreEl.textContent = parseInt(scoreEl.textContent) + 1;
    } else {
      fb.textContent = `✗ Incorrect. The answer was: ${exercises[qid].options[exercises[qid].answer]}`;
      fb.className = "quiz-feedback incorrect";
      opt.classList.add("wrong-answer");
      parent.querySelectorAll(".quiz-option")[exercises[qid].answer]?.classList.add("show-correct");
    }
  });
}

/* ── FINAL QUIZ HANDLER ── */
function setupFinalQuizHandler() {
  document.addEventListener("click", function (e) {
    const opt = e.target.closest(".fq-option");
    if (!opt) return;
    const qi = parseInt(opt.dataset.fq);
    const selected = parseInt(opt.dataset.opt);
    const clauseType = document.querySelector("html")?.getAttribute("data-clause-type");
    const lesson = getClauseLesson(clauseType);
    if (!lesson) return;
    const qs = lesson.finalQuiz50;
    if (!qs || !qs[qi]) return;
    const ex = qs[qi];
    const fb = document.getElementById(`fqFeedback${qi}`);
    if (!fb || fb.dataset.answered === "1") return;
    const parent = opt.closest(".quiz-question");
    parent.querySelectorAll(".fq-option").forEach(b => b.disabled = true);
    fb.dataset.answered = "1";
    const key = clauseType.replace(/\s/g, '');
    if (selected === ex.answer) {
      fb.textContent = `✓ Correct! ${ex.explanation}`;
      fb.className = "quiz-feedback correct";
      opt.classList.add("correct-answer");
      const scoreEl = document.getElementById(`fqScore${key}`);
      if (scoreEl) {
        const newScore = parseInt(scoreEl.textContent) + 1;
        scoreEl.textContent = newScore;
        const total = qs.length;
        const bar = document.getElementById(`fqBar${key}`);
        if (bar) bar.style.width = `${(newScore / total) * 100}%`;
      }
    } else {
      fb.textContent = `✗ Incorrect. The answer was: ${ex.options[ex.answer]}. ${ex.explanation}`;
      fb.className = "quiz-feedback incorrect";
      opt.classList.add("wrong-answer");
      parent.querySelectorAll(".fq-option")[ex.answer]?.classList.add("show-correct");
    }
  });
}

/* ── QUIZ DATA LAZY LOADERS ── */
function getPrepositionExercises() {
  return window.__PREPOSITION_EXERCISES || [];
}

function getAdjectivePositionExercises() {
  return window.__ADJECTIVE_POSITION_EXERCISES || [];
}

function getAdverbPositionExercises() {
  return window.__ADVERB_POSITION_EXERCISES || [];
}

function getConjunctionExercises() {
  return window.__CONJUNCTION_EXERCISES || [];
}

function getPhrasalVerbExercises() {
  return window.__PHRASAL_VERB_EXERCISES || [];
}

function getIdiomaticExpressionExercises() {
  return window.__IDIOMATIC_EXPRESSION_EXERCISES || [];
}

function getClauseExercises(clauseType) {
  return window.__CLAUSE_EXERCISES?.[clauseType] || [];
}

function getClauseLesson(clauseType) {
  return window.__CLAUSE_FULL_LESSONS?.[clauseType] || null;
}

/* ── GAME ENGINE LAZY LOADERS ── */
async function loadGameEngine(engineName) {
  try {
    switch (engineName) {
      case 'anagram':
        const { initAnagramGame } = await import('./engines/anagram.js');
        return initAnagramGame;
      case 'verbTense':
        const { initVerbTenseGame } = await import('./engines/verbTense.js');
        return initVerbTenseGame;
      case 'errorCorrection':
        const { initErrorCorrectionGame } = await import('./engines/errorCorrection.js');
        return initErrorCorrectionGame;
      case 'wordOrder':
        const { initWordOrderGame } = await import('./engines/wordOrder.js');
        return initWordOrderGame;
      case 'preposition':
        const { initPrepositionChallengeGame } = await import('./engines/prepositionChallenge.js');
        return initPrepositionChallengeGame;
      case 'adverbPlacement':
        const { initAdverbPlacementGame } = await import('./engines/adverbPlacement.js');
        return initAdverbPlacementGame;
      case 'clauseIdentification':
        const { initClauseIdentificationGame } = await import('./engines/clauseIdentification.js');
        return initClauseIdentificationGame;
      default:
        return null;
    }
  } catch (e) {
    console.warn(`Failed to load engine: ${engineName}`, e);
    return null;
  }
}

/* ── PAGE DETECTION ── */
function detectPage() {
  const path = window.location.pathname;
  const page = document.querySelector("html")?.getAttribute("data-page");
  const clauseType = document.querySelector("html")?.getAttribute("data-clause-type");

  return {
    isAnagramPage: path.includes("game-anagram"),
    isVerbTensePage: path.includes("game-verb-tense"),
    isErrorCorrectionPage: path.includes("game-error-correction"),
    isWordOrderPage: path.includes("game-word-order"),
    isPrepositionPage: path.includes("game-preposition"),
    isUnscramblePage: path.includes("game-unscramble"),
    isAdverbPlacementPage: path.includes("game-adverb-placement"),
    isClauseIdentificationPage: path.includes("game-clause-identification"),
    isDashboardPage: path.includes("dashboard"),
    isTensePage: typeof window.PAGE_TENSE !== "undefined" && window.PAGE_TENSE !== "Hub",
    page,
    clauseType,
  };
}

/* ── INIT ── */
async function init() {
  initTheme();
  buildGlobalSidebar(state, isTensePage);
  initOnboarding();
  initAchievements();

  const pageInfo = detectPage();

  if (isTensePage) {
    setupDropZone();
    initTabs();
    document.title = state.currentTense + " — English Tenses";
    loadProgress();
    showTheory(state.currentTense);

    document.addEventListener("click", e => {
      const btn = e.target.closest(".practice-btn");
      if (btn) selectTenseForm(btn.dataset.tense || state.currentTense, "affirmative");
    });
    $("theoryBtn")?.addEventListener("click", () => showTheory(state.currentTense));
    checkBtn?.addEventListener("click", checkAnswer);
    resetBtn?.addEventListener("click", resetGame);
    newSentenceBtn?.addEventListener("click", loadNewSentence);
    hintBtn?.addEventListener("click", giveHint);

    updateStats();
    updateProgress();
  } else {
    // Auto-render theory for grammar topic pages
    const tv = $("theoryView");
    if (tv && !tv.hasChildNodes()) {
      const theoryRenderers = {
        "adjective-positions": () => window.__renderAdjectivePositionTheory?.() || "",
        "prepositions": null,
        "adverb-positions": () => window.__renderAdverbPositionTheory?.() || "",
        "conjunctions": () => window.__renderConjunctionTheory?.() || "",
        "phrasal-verbs": () => window.__renderPhrasalVerbTheory?.() || "",
        "idiomatic-expressions": () => window.__renderIdiomaticExpressionTheory?.() || "",
        "clauses": pageInfo.clauseType && typeof window.__renderClauseFullLesson === "function"
          ? () => window.__renderClauseFullLesson(pageInfo.clauseType)
          : null,
      };
      const fn = theoryRenderers[pageInfo.page] || theoryRenderers[pageInfo.clauseType ? "clauses" : ""];
      if (fn) {
        const result = fn();
        if (result instanceof Promise) {
          result.then(html => { if (html) tv.innerHTML = html; });
        } else if (result) {
          tv.innerHTML = result;
        }
      }
    }

    // Render dashboard if on dashboard page
    if (pageInfo.isDashboardPage) {
      try {
        const { initDashboard } = await import('./features/dashboard.js');
        initDashboard();
      } catch (e) {
        console.warn("Dashboard module not available:", e);
      }
    }

    const sd = $("streakDisplay");
    const cd = $("completedDisplay");
    if (sd || cd) {
      try {
        const raw = localStorage.getItem("anagramGame_progress");
        if (raw) {
          const all = JSON.parse(raw);
          let totalCompleted = 0;
          let totalScore = 0;
          Object.values(all).forEach(p => { totalCompleted += p.completed || 0; totalScore += p.score || 0; });
          if (sd) sd.textContent = totalScore;
          if (cd) cd.textContent = totalCompleted;
        }
      } catch (e) { /* ignore */ }
    }
  }

  // Load game engines based on page
  if (pageInfo.isAnagramPage) {
    const initFn = await loadGameEngine('anagram');
    if (initFn) initFn();
  } else if (pageInfo.isVerbTensePage) {
    const initFn = await loadGameEngine('verbTense');
    if (initFn) initFn();
  } else if (pageInfo.isErrorCorrectionPage) {
    const initFn = await loadGameEngine('errorCorrection');
    if (initFn) initFn();
  } else if (pageInfo.isWordOrderPage) {
    const initFn = await loadGameEngine('wordOrder');
    if (initFn) initFn();
  } else if (pageInfo.isPrepositionPage) {
    const initFn = await loadGameEngine('preposition');
    if (initFn) initFn();
  } else if (pageInfo.isAdverbPlacementPage) {
    const initFn = await loadGameEngine('adverbPlacement');
    if (initFn) initFn();
  } else if (pageInfo.isClauseIdentificationPage) {
    const initFn = await loadGameEngine('clauseIdentification');
    if (initFn) initFn();
  }

  // Set up quiz handlers
  setupQuizHandler();
  setupFinalQuizHandler();

  // Sidebar event listeners
  sidebarToggle?.addEventListener("click", toggleSidebar);
  sidebarOverlay?.addEventListener("click", closeSidebar);
  sidebarClose?.addEventListener("click", closeSidebar);
  sidebarNav?.addEventListener("click", e => {
    const btn = e.target.closest(".form-btn");
    if (btn && isTensePage) selectTenseForm(btn.dataset.tense, btn.dataset.form);
  });

  // Theme toggle
  themeToggle?.addEventListener("click", toggleTheme);

  // Keyboard shortcuts
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeSidebar();
    if (isTensePage) {
      if (e.key === "Enter" && !e.ctrlKey && !e.metaKey && !e.shiftKey) { e.preventDefault(); checkAnswer(); }
      if ((e.key === "r" || e.key === "R") && !e.ctrlKey && !e.metaKey) { e.preventDefault(); resetGame(); }
      if ((e.key === "n" || e.key === "N") && !e.ctrlKey && !e.metaKey) { e.preventDefault(); loadNewSentence(); }
      if ((e.key === "h" || e.key === "H") && !e.ctrlKey && !e.metaKey) { e.preventDefault(); giveHint(); }
      if ((e.key === "t" || e.key === "T") && !e.ctrlKey && !e.metaKey) { e.preventDefault(); showTheory(state.currentTense); }
    }
  });
}

document.addEventListener("DOMContentLoaded", init);

export default init;
