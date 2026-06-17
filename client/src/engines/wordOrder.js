/* ═══════════════════════════════════════════
   WORD ORDER CHALLENGE ENGINE MODULE
   ═══════════════════════════════════════════ */

import { saveGameScore } from '../lib/storage.js';
import { shuffle } from '../lib/utils.js';
import { WORD_ORDER_EXERCISES } from '../data/games.js';

function initWordOrderGame() {
  const wordArea = document.getElementById("woWords");
  const dropArea = document.getElementById("woDrop");
  const checkBtn = document.getElementById("woCheck");
  const nextBtn = document.getElementById("woNext");
  const resultEl = document.getElementById("woResult");
  const scoreEl = document.getElementById("woScore");
  const patternEl = document.getElementById("woPattern");
  const hintBtn = document.getElementById("woHint");

  if (!wordArea) return;

  let currentEx = null;
  let score = 0;

  function loadExercise() {
    currentEx = WORD_ORDER_EXERCISES[Math.floor(Math.random() * WORD_ORDER_EXERCISES.length)];
    wordArea.innerHTML = "";
    dropArea.innerHTML = `<div class="drop-placeholder">Click a word to add it here…</div>`;
    shuffle(currentEx.words).forEach(w => {
      const el = document.createElement("div");
      el.className = "word";
      el.textContent = w;
      el.addEventListener("click", () => moveToDrop(el));
      wordArea.appendChild(el);
    });
    if (patternEl) patternEl.textContent = `Pattern: ${currentEx.pattern}`;
    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }
  }

  function moveToDrop(el) {
    const ph = dropArea.querySelector(".drop-placeholder");
    if (ph) ph.remove();
    const clone = document.createElement("div");
    clone.className = "word droppable-word";
    clone.textContent = el.textContent;
    clone.addEventListener("click", () => {
      const newEl = document.createElement("div");
      newEl.className = "word";
      newEl.textContent = clone.textContent;
      newEl.addEventListener("click", () => moveToDrop(newEl));
      wordArea.appendChild(newEl);
      clone.remove();
    });
    dropArea.appendChild(clone);
    el.remove();
  }

  checkBtn?.addEventListener("click", () => {
    if (!currentEx) return;
    const words = Array.from(dropArea.children).filter(c => !c.classList.contains("drop-placeholder")).map(c => c.textContent);
    const userAnswer = words.join(" ");
    // Normalize: remove trailing period from both, then compare
    const normalize = s => s.replace(/[.,!?;:]+$/, "").trim().toLowerCase();
    if (normalize(userAnswer) === normalize(currentEx.answer)) {
      score++;
      if (scoreEl) scoreEl.textContent = score;
      if (resultEl) { resultEl.textContent = `✓ Correct! "${currentEx.answer}"`; resultEl.className = "result-message success"; }
      saveGameScore("wordOrder", 1);
    } else {
      if (resultEl) { resultEl.textContent = `✗ Incorrect. The correct order: "${currentEx.answer}"`; resultEl.className = "result-message error"; }
    }
  });

  nextBtn?.addEventListener("click", loadExercise);
  hintBtn?.addEventListener("click", () => {
    if (!currentEx) return;
    if (resultEl) { resultEl.textContent = `Hint: Pattern is ${currentEx.pattern}. Correct answer: "${currentEx.answer}"`; resultEl.className = "result-message info"; }
  });

  loadExercise();
}

export { initWordOrderGame };
