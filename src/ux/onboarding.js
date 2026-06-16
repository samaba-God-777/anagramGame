const ONBOARDING_KEY = 'ehub_onboarding_complete';

export function initOnboarding() {
  if (localStorage.getItem(ONBOARDING_KEY)) return;
  
  const overlay = document.createElement('div');
  overlay.id = 'onboarding-overlay';
  overlay.innerHTML = `
    <div class="onboarding-backdrop"></div>
    <div class="onboarding-modal">
      <div class="onboarding-step" data-step="1">
        <div class="onboarding-icon">🎓</div>
        <h2>Welcome to English Learning Hub!</h2>
        <p>Master English grammar with interactive lessons and fun games.</p>
      </div>
      <div class="onboarding-step" data-step="2" style="display:none">
        <div class="onboarding-icon">📖</div>
        <h2>Grammar Modules</h2>
        <p>Learn all 12 tenses, clauses, prepositions, and more with detailed explanations and examples.</p>
      </div>
      <div class="onboarding-step" data-step="3" style="display:none">
        <div class="onboarding-icon">🎮</div>
        <h2>Educational Games</h2>
        <p>Practice with 10 different games including anagrams, error correction, and verb tense challenges.</p>
      </div>
      <div class="onboarding-step" data-step="4" style="display:none">
        <div class="onboarding-icon">📊</div>
        <h2>Track Your Progress</h2>
        <p>Your progress is saved automatically. Use the sidebar to navigate between topics.</p>
      </div>
      <div class="onboarding-nav">
        <div class="onboarding-dots"></div>
        <button class="btn btn-primary onboarding-next">Next →</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  
  // Add CSS
  const style = document.createElement('style');
  style.textContent = `
    .onboarding-backdrop { position:fixed; inset:0; background:rgba(0,0,0,0.6); backdrop-filter:blur(4px); z-index:10000; }
    .onboarding-modal { position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:var(--color-surface); border-radius:20px; padding:40px; max-width:440px; width:90%; z-index:10001; box-shadow:0 20px 60px rgba(0,0,0,0.3); text-align:center; }
    .onboarding-icon { font-size:48px; margin-bottom:16px; }
    .onboarding-step h2 { font-size:22px; font-weight:800; color:var(--color-text); margin-bottom:8px; }
    .onboarding-step p { font-size:14px; color:var(--color-text-secondary); line-height:1.6; }
    .onboarding-nav { display:flex; justify-content:space-between; align-items:center; margin-top:28px; }
    .onboarding-dots { display:flex; gap:8px; }
    .onboarding-dot { width:8px; height:8px; border-radius:50%; background:var(--color-border); transition:all 0.3s; }
    .onboarding-dot.active { background:var(--color-primary); width:24px; border-radius:4px; }
  `;
  document.head.appendChild(style);
  
  let currentStep = 1;
  const totalSteps = 4;
  const dots = overlay.querySelector('.onboarding-dots');
  const nextBtn = overlay.querySelector('.onboarding-next');
  
  // Create dots
  for (let i = 1; i <= totalSteps; i++) {
    const dot = document.createElement('div');
    dot.className = 'onboarding-dot' + (i === 1 ? ' active' : '');
    dots.appendChild(dot);
  }
  
  nextBtn.addEventListener('click', () => {
    overlay.querySelector(`[data-step="${currentStep}"]`).style.display = 'none';
    currentStep++;
    if (currentStep > totalSteps) {
      overlay.remove();
      localStorage.setItem(ONBOARDING_KEY, '1');
      return;
    }
    overlay.querySelector(`[data-step="${currentStep}"]`).style.display = 'block';
    dots.querySelectorAll('.onboarding-dot').forEach((d, i) => d.classList.toggle('active', i + 1 === currentStep));
    nextBtn.textContent = currentStep === totalSteps ? 'Get Started! 🚀' : 'Next →';
  });
}

export function resetOnboarding() {
  localStorage.removeItem(ONBOARDING_KEY);
}
