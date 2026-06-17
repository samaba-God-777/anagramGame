/* ═══════════════════════════════════════════
   CLAUSE IDENTIFICATION ENGINE MODULE
   ═══════════════════════════════════════════ */

import { saveGameScore } from '../lib/storage.js';
import { CLAUSE_IDENTIFICATION_GAME } from '../data/clauses.js';

const CLAUSE_TYPES = ["Noun Clause", "Adjective Clause", "Adverb Clause"];

function initClauseIdentificationGame() {
  const questionEl = document.getElementById("ciQuestion");
  const optionsContainer = document.getElementById("ciOptions");
  const nextBtn = document.getElementById("ciNext");
  const resultEl = document.getElementById("ciResult");
  const scoreEl = document.getElementById("ciScore");

  if (!questionEl) return;

  let score = 0;
  let currentEx = null;

  function loadQuestion() {
    currentEx = CLAUSE_IDENTIFICATION_GAME[Math.floor(Math.random() * CLAUSE_IDENTIFICATION_GAME.length)];
    questionEl.innerHTML = `Identify the clause type:<br><span style="font-size:20px;font-weight:600;color:var(--color-text);display:block;margin-top:10px;">"${currentEx.sentence}"</span>`;
    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }

    optionsContainer.innerHTML = "";
    CLAUSE_TYPES.forEach(type => {
      const btn = document.createElement("button");
      btn.className = "btn btn-game ci-option";
      btn.textContent = type;
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        optionsContainer.querySelectorAll(".ci-option").forEach(b => b.disabled = true);
        if (type === currentEx.answer) {
          score++;
          if (scoreEl) scoreEl.textContent = score;
          if (resultEl) { resultEl.textContent = `✓ Correct! ${currentEx.hint}`; resultEl.className = "result-message success"; }
          btn.classList.add("correct-answer");
          saveGameScore("clauseIdentification", 1);
        } else {
          if (resultEl) { resultEl.textContent = `✗ Incorrect. Answer: ${currentEx.answer}. ${currentEx.hint}`; resultEl.className = "result-message error"; }
          btn.classList.add("wrong-answer");
          optionsContainer.querySelectorAll(".ci-option").forEach(b => { if (b.textContent === currentEx.answer) b.classList.add("show-correct"); });
        }
      });
      optionsContainer.appendChild(btn);
    });
  }

  nextBtn?.addEventListener("click", loadQuestion);
  loadQuestion();
}

export { initClauseIdentificationGame };
