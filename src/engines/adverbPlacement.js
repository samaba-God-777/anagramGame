/* ═══════════════════════════════════════════
   ADVERB PLACEMENT ENGINE MODULE
   ═══════════════════════════════════════════ */

import { saveGameScore } from '../lib/storage.js';
import { ADVERB_POSITION_EXERCISES } from '../data/adverbPositions.js';

function initAdverbPlacementGame() {
  const questionEl = document.getElementById("apQuestion");
  const optionsContainer = document.getElementById("apOptions");
  const nextBtn = document.getElementById("apNext");
  const resultEl = document.getElementById("apResult");
  const scoreEl = document.getElementById("apScore");

  if (!questionEl) return;

  let score = 0;
  let currentEx = null;

  function loadQuestion() {
    currentEx = ADVERB_POSITION_EXERCISES[Math.floor(Math.random() * ADVERB_POSITION_EXERCISES.length)];
    questionEl.textContent = currentEx.question;
    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }

    optionsContainer.innerHTML = "";
    currentEx.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "btn btn-game ap-option";
      btn.textContent = opt;
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        optionsContainer.querySelectorAll(".ap-option").forEach(b => b.disabled = true);
        if (i === currentEx.answer) {
          score++;
          if (scoreEl) scoreEl.textContent = score;
          if (resultEl) { resultEl.textContent = "✓ Correct!"; resultEl.className = "result-message success"; }
          btn.classList.add("correct-answer");
          saveGameScore("adverbPlacement", 1);
        } else {
          if (resultEl) { resultEl.textContent = `✗ Incorrect. The correct answer is "${currentEx.options[currentEx.answer]}"`; resultEl.className = "result-message error"; }
          btn.classList.add("wrong-answer");
          optionsContainer.querySelectorAll(".ap-option")[currentEx.answer]?.classList.add("show-correct");
        }
      });
      optionsContainer.appendChild(btn);
    });
  }

  nextBtn?.addEventListener("click", loadQuestion);
  loadQuestion();
}

export { initAdverbPlacementGame };
