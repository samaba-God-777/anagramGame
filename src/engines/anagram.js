/* ═══════════════════════════════════════════
   ANAGRAM ENGINE MODULE
   ═══════════════════════════════════════════ */

import { saveGameScore } from '../lib/storage.js';
import { shuffle } from '../lib/utils.js';
import { ANAGRAM_DATA } from '../data/games.js';

function initAnagramGame() {
  const levelSelect = document.getElementById("anagramLevel");
  const catSelect = document.getElementById("anagramCategory");
  const wordDisplay = document.getElementById("anagramWord");
  const guessInput = document.getElementById("anagramGuess");
  const checkBtn = document.getElementById("anagramCheck");
  const nextBtn = document.getElementById("anagramNext");
  const result = document.getElementById("anagramResult");
  const scoreEl = document.getElementById("anagramScore");
  const timerEl = document.getElementById("anagramTimer");
  const hintBtn = document.getElementById("anagramHint");
  const hintArea = document.getElementById("anagramHintArea");

  if (!wordDisplay) return;

  let currentWord = "";
  let currentCategory = "Animals";
  let currentLevel = "Beginner";
  let score = 0;
  let timer = 0;
  let timerInterval = null;
  let hintLevel = 0;

  function updateCategories() {
    catSelect.innerHTML = "";
    const cats = Object.keys(ANAGRAM_DATA[currentLevel] || {});
    cats.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c; opt.textContent = c;
      catSelect.appendChild(opt);
    });
    currentCategory = cats[0] || "Animals";
    catSelect.value = currentCategory;
  }

  function pickWord() {
    const words = ANAGRAM_DATA[currentLevel]?.[currentCategory] || [];
    if (words.length === 0) return "cat";
    return words[Math.floor(Math.random() * words.length)];
  }

  function shuffleWord(w) {
    return shuffle(w.split("")).join("");
  }

  function newWord() {
    currentWord = pickWord();
    hintLevel = 0;
    let shuffled = shuffleWord(currentWord);
    while (shuffled === currentWord && currentWord.length > 1) {
      shuffled = shuffleWord(currentWord);
    }
    wordDisplay.textContent = shuffled.toUpperCase().split("").join(" ");
    guessInput.value = "";
    guessInput.disabled = false;
    guessInput.focus();
    result.textContent = "";
    result.className = "result-message";
    if (hintArea) { hintArea.textContent = ""; hintArea.hidden = true; }
    if (timerEl) timerEl.textContent = "0s";
    timer = 0;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timer++;
      if (timerEl) timerEl.textContent = timer + "s";
    }, 1000);
  }

  levelSelect?.addEventListener("change", () => {
    currentLevel = levelSelect.value;
    updateCategories();
    newWord();
  });

  catSelect?.addEventListener("change", () => {
    currentCategory = catSelect.value;
    newWord();
  });

  checkBtn?.addEventListener("click", () => {
    const guess = guessInput.value.trim().toLowerCase();
    if (!guess) { result.textContent = "Type your answer!"; result.className = "result-message error"; return; }
    if (guess === currentWord) {
      clearInterval(timerInterval);
      const bonus = Math.max(0, 60 - timer);
      const points = 10 + Math.floor(bonus / 5);
      score += points;
      if (scoreEl) scoreEl.textContent = score;
      result.textContent = `✓ Correct! +${points} points (${timer}s)`;
      result.className = "result-message success";
      guessInput.disabled = true;
      saveGameScore("anagram", score);
    } else {
      result.textContent = `✗ Incorrect. Try again!`;
      result.className = "result-message error";
    }
  });

  hintBtn?.addEventListener("click", () => {
    if (!currentWord || hintLevel >= currentWord.length) return;
    hintLevel++;
    const revealed = currentWord.split("").map((ch, i) => i < hintLevel ? ch : "_").join(" ");
    if (hintArea) {
      hintArea.textContent = "Hint: " + revealed;
      hintArea.hidden = false;
    }
  });

  nextBtn?.addEventListener("click", newWord);

  updateCategories();
  newWord();
}

export { initAnagramGame };
