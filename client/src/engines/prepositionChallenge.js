/* ═══════════════════════════════════════════
   PREPOSITION CHALLENGE ENGINE MODULE
   ═══════════════════════════════════════════ */

import { saveGameScore } from '../lib/storage.js';
import { PREPOSITION_EXERCISES } from '../data/prepositions.js';

function initPrepositionChallengeGame() {
  const questionEl = document.getElementById("pcQuestion");
  const optionsContainer = document.getElementById("pcOptions");
  const nextBtn = document.getElementById("pcNext");
  const resultEl = document.getElementById("pcResult");
  const scoreEl = document.getElementById("pcScore");

  if (!questionEl) return;

  let score = 0;
  let currentEx = null;

  function loadQuestion() {
    currentEx = PREPOSITION_EXERCISES[Math.floor(Math.random() * PREPOSITION_EXERCISES.length)];
    questionEl.textContent = currentEx.question;
    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }

    optionsContainer.innerHTML = "";
    currentEx.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "btn btn-game pc-option";
      btn.textContent = opt;
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        optionsContainer.querySelectorAll(".pc-option").forEach(b => b.disabled = true);
        if (i === currentEx.answer) {
          score++;
          if (scoreEl) scoreEl.textContent = score;
          if (resultEl) { resultEl.textContent = `✓ Correct! (${currentEx.category})`; resultEl.className = "result-message success"; }
          btn.classList.add("correct-answer");
          saveGameScore("prepositionChallenge", 1);
        } else {
          if (resultEl) { resultEl.textContent = `✗ Incorrect. The correct answer is "${currentEx.options[currentEx.answer]}" (${currentEx.category})`; resultEl.className = "result-message error"; }
          btn.classList.add("wrong-answer");
          optionsContainer.querySelectorAll(".pc-option")[currentEx.answer]?.classList.add("show-correct");
        }
      });
      optionsContainer.appendChild(btn);
    });
  }

  nextBtn?.addEventListener("click", loadQuestion);
  loadQuestion();
}

export { initPrepositionChallengeGame };
