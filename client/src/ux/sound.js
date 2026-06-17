let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playTone(frequency, duration, type = 'sine', volume = 0.1) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = frequency;
    gain.gain.value = volume;
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) { /* Audio not supported */ }
}

export function playCorrectSound() {
  playTone(523.25, 0.1); // C5
  setTimeout(() => playTone(659.25, 0.1), 100); // E5
  setTimeout(() => playTone(783.99, 0.15), 200); // G5
}

export function playWrongSound() {
  playTone(311.13, 0.15, 'sawtooth', 0.05); // Eb4
  setTimeout(() => playTone(277.18, 0.2, 'sawtooth', 0.05), 150); // C#4
}

export function playClickSound() {
  playTone(800, 0.05, 'square', 0.03);
}

export function playCompleteSound() {
  const notes = [523.25, 587.33, 659.25, 783.99, 1046.50];
  notes.forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.12), i * 80);
  });
}

let soundEnabled = true;
export function toggleSound() { soundEnabled = !soundEnabled; return soundEnabled; }
export function isSoundEnabled() { return soundEnabled; }

// Wrap correct/wrong with sound toggle
const _playCorrect = playCorrectSound;
const _playWrong = playWrongSound;
export function playCorrect() { if (soundEnabled) _playCorrect(); }
export function playWrong() { if (soundEnabled) _playWrong(); }
