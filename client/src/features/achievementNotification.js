/* ═══════════════════════════════════════════
   ACHIEVEMENT NOTIFICATION TOAST
   ═══════════════════════════════════════════ */

let toastCount = 0;
let container = null;

function getContainer() {
  if (!container) {
    container = document.createElement('div');
    container.className = 'achievement-toast-container';
    document.body.appendChild(container);
  }
  return container;
}

export function showAchievementToast(achievement) {
  const id = ++toastCount;
  const el = document.createElement('div');
  el.className = 'achievement-toast';
  el.id = `achievement-toast-${id}`;
  el.innerHTML = `
    <div class="achievement-toast-icon">${achievement.icon}</div>
    <div class="achievement-toast-body">
      <div class="achievement-toast-label">Achievement Unlocked!</div>
      <div class="achievement-toast-title">${achievement.title}</div>
      <div class="achievement-toast-desc">${achievement.desc}</div>
    </div>
    <button class="achievement-toast-close" aria-label="Dismiss">&times;</button>
  `;

  // Click to go to dashboard
  el.addEventListener('click', (e) => {
    if (e.target.closest('.achievement-toast-close')) return;
    window.location.href = '/games/dashboard.html';
  });

  // Close button
  el.querySelector('.achievement-toast-close').addEventListener('click', (e) => {
    e.stopPropagation();
    dismiss(id);
  });

  getContainer().appendChild(el);

  // Trigger entrance animation on next frame
  requestAnimationFrame(() => el.classList.add('show'));

  // Auto dismiss after 5 seconds
  setTimeout(() => dismiss(id), 5000);
}

function dismiss(id) {
  const el = document.getElementById(`achievement-toast-${id}`);
  if (!el) return;
  el.classList.remove('show');
  el.addEventListener('transitionend', () => el.remove(), { once: true });
  // Safety: remove after transition timeout
  setTimeout(() => { if (el.parentNode) el.remove(); }, 600);
}
