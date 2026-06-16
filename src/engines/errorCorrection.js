/* ═══════════════════════════════════════════
   ERROR CORRECTION ENGINE MODULE
   ═══════════════════════════════════════════ */

import { saveGameScore } from '../lib/storage.js';
import { ERROR_CORRECTION_DATA } from '../data/games.js';

function initErrorCorrectionGame() {
  const questionEl = document.getElementById("ecQuestion");
  const inputEl = document.getElementById("ecInput");
  const checkBtn = document.getElementById("ecCheck");
  const nextBtn = document.getElementById("ecNext");
  const resultEl = document.getElementById("ecResult");
  const scoreEl = document.getElementById("ecScore");
  const progressEl = document.getElementById("ecProgress");
  const typeFilter = document.getElementById("ecTypeFilter");

  if (!questionEl) return;

  let currentIndex = 0;
  let score = 0;
  let total = 0;
  let filteredData = [...ERROR_CORRECTION_DATA];

  function filterData() {
    const type = typeFilter ? typeFilter.value : "all";
    if (type === "all") {
      filteredData = [...ERROR_CORRECTION_DATA];
    } else {
      filteredData = ERROR_CORRECTION_DATA.filter(e => e.type === type);
    }
    if (filteredData.length === 0) filteredData = [...ERROR_CORRECTION_DATA];
  }

  function loadQuestion() {
    filterData();
    currentIndex = Math.floor(Math.random() * filteredData.length);
    const item = filteredData[currentIndex];
    if (questionEl) questionEl.textContent = `"${item.incorrect}"`;
    if (inputEl) { inputEl.value = ""; inputEl.disabled = false; inputEl.focus(); }
    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }
    if (progressEl) progressEl.textContent = `Score: ${score} | Attempts: ${total}`;
  }

  typeFilter?.addEventListener("change", loadQuestion);

  checkBtn?.addEventListener("click", () => {
    const userAnswer = inputEl ? inputEl.value.trim() : "";
    const item = filteredData[currentIndex];
    if (!userAnswer) { if (resultEl) { resultEl.textContent = "Type the corrected sentence!"; resultEl.className = "result-message error"; } return; }
    total++;
    const isCorrect = userAnswer.toLowerCase() === item.correct.toLowerCase();
    if (isCorrect) {
      score++;
      if (resultEl) { resultEl.textContent = `✓ Correct! ${item.explanation}`; resultEl.className = "result-message success"; }
      if (inputEl) inputEl.disabled = true;
    } else {
      if (resultEl) { resultEl.textContent = `✗ Incorrect. Correct answer: "${item.correct}"`; resultEl.className = "result-message error"; }
    }
    if (scoreEl) scoreEl.textContent = score;
    if (progressEl) progressEl.textContent = `Score: ${score} | Attempts: ${total}`;
    saveGameScore("errorCorrection", isCorrect ? 1 : 0);
  });

  nextBtn?.addEventListener("click", loadQuestion);

  loadQuestion();
}

export { initErrorCorrectionGame };
