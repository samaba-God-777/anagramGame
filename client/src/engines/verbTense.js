/* ═══════════════════════════════════════════
   VERB TENSE CHALLENGE ENGINE MODULE
   ═══════════════════════════════════════════ */

import { saveGameScore } from '../lib/storage.js';
import { shuffle } from '../lib/utils.js';
import { VERB_TENSE_EXAMPLES } from '../data/games.js';

function initVerbTenseGame() {
  const questionEl = document.getElementById("vtQuestion");
  const optionsContainer = document.getElementById("vtOptions");
  const nextBtn = document.getElementById("vtNext");
  const resultEl = document.getElementById("vtResult");
  const scoreEl = document.getElementById("vtScore");

  if (!questionEl) return;

  let currentIndex = 0;
  let score = 0;
  let shuffledData = [...VERB_TENSE_EXAMPLES];

  function loadQuestion() {
    currentIndex = Math.floor(Math.random() * shuffledData.length);
    const item = shuffledData[currentIndex];
    questionEl.textContent = `"${item.sentence}"`;
    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }

    const allTenses = [...new Set(VERB_TENSE_EXAMPLES.map(e => e.tense))];
    const wrongOptions = allTenses.filter(t => t !== item.tense);
    const shuffledWrong = shuffle(wrongOptions).slice(0, 3);
    const options = shuffle([item.tense, ...shuffledWrong]);

    optionsContainer.innerHTML = "";
    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "btn btn-game vt-option";
      btn.textContent = opt;
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        optionsContainer.querySelectorAll(".vt-option").forEach(b => b.disabled = true);
        if (opt === item.tense) {
          score++;
          if (scoreEl) scoreEl.textContent = score;
          if (resultEl) { resultEl.textContent = `✓ Correct! ${item.explanation}`; resultEl.className = "result-message success"; }
          btn.classList.add("correct-answer");
          saveGameScore("verbTense", 1);
        } else {
          if (resultEl) { resultEl.textContent = `✗ Incorrect. Answer: ${item.tense}. ${item.explanation}`; resultEl.className = "result-message error"; }
          btn.classList.add("wrong-answer");
          optionsContainer.querySelectorAll(".vt-option").forEach(b => { if (b.textContent === item.tense) b.classList.add("show-correct"); });
        }
      });
      optionsContainer.appendChild(btn);
    });
  }

  nextBtn?.addEventListener("click", loadQuestion);
  loadQuestion();
}

export { initVerbTenseGame };
