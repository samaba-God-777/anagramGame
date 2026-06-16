const g="anagramGame_progress",u="englishGames_progress",h="spacedRepetition",p=["Present Simple","Present Continuous","Present Perfect","Present Perfect Continuous","Past Simple","Past Continuous","Past Perfect","Past Perfect Continuous","Future Simple","Future Continuous","Future Perfect","Future Perfect Continuous"],x=["affirmative","negative","questions"],v={anagram:"Anagram Game",verbTense:"Verb Tense Challenge",errorCorrection:"Error Correction",wordOrder:"Word Order",preposition:"Preposition Challenge",unscramble:"Sentence Unscramble"};function y(){try{const t=localStorage.getItem(g);return t?JSON.parse(t):{}}catch{return{}}}function f(){try{const t=localStorage.getItem(u);return t?JSON.parse(t):{}}catch{return{}}}function b(){try{const t=localStorage.getItem(h);return t?JSON.parse(t):{}}catch{return{}}}function $(t){const n={totalScore:0,totalCompleted:0,totalAttempts:0,perTense:{}};return p.forEach(s=>{n.perTense[s]={score:0,completed:0,attempts:0,forms:{}},x.forEach(l=>{const a=`${s}.${l}`,o=t[a]||{},c=o.score||0,i=o.completed||0,r=o.attempts||0;n.perTense[s].score+=c,n.perTense[s].completed+=i,n.perTense[s].attempts+=r,n.perTense[s].forms[l]={score:c,completed:i,attempts:r},n.totalScore+=c,n.totalCompleted+=i,n.totalAttempts+=r})}),n}function S(t,n,s){const l=Math.min(Math.round(t),100),a=document.createElement("div");a.style.cssText="margin-bottom:12px;";const o=document.createElement("div");o.style.cssText="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;";const c=document.createElement("span");c.style.cssText="font-size:13px;font-weight:600;",c.textContent=n;const i=document.createElement("span");i.style.cssText="font-size:12px;color:var(--color-text-muted);",i.textContent=`${l}%`,o.appendChild(c),o.appendChild(i);const r=document.createElement("div");r.style.cssText="background:var(--color-border);border-radius:99px;height:8px;overflow:hidden;";const e=document.createElement("div");return e.style.cssText=`background:${s};height:100%;width:${l}%;border-radius:99px;transition:width 0.5s ease;`,e.dataset.pct=String(l),r.appendChild(e),a.appendChild(o),a.appendChild(r),a}function w(t){const n=y(),s=f(),l=b(),a=$(n);p.length*3*maxPerTenses;const o="background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg);padding:20px;margin-bottom:20px;",c="font-size:16px;font-weight:700;color:var(--color-text);margin:0 0 16px;border-bottom:2px solid var(--color-primary);padding-bottom:8px;",i=`
    <div class="dashboard" style="max-width:900px;margin:0 auto;">
      <h2 style="font-size:22px;font-weight:800;color:var(--color-text);margin:0 0 24px;text-align:center;">📊 Learning Dashboard</h2>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:24px;">
        <div style="${o}text-align:center;">
          <p style="font-size:28px;font-weight:800;color:var(--color-primary);margin:0;">${a.totalScore}</p>
          <p style="font-size:12px;color:var(--color-text-muted);margin:4px 0 0;">Total Score</p>
        </div>
        <div style="${o}text-align:center;">
          <p style="font-size:28px;font-weight:800;color:var(--color-success);margin:0;">${a.totalCompleted}</p>
          <p style="font-size:12px;color:var(--color-text-muted);margin:4px 0 0;">Sentences Completed</p>
        </div>
        <div style="${o}text-align:center;">
          <p style="font-size:28px;font-weight:800;color:var(--color-accent);margin:0;">${a.totalAttempts}</p>
          <p style="font-size:12px;color:var(--color-text-muted);margin:4px 0 0;">Total Attempts</p>
        </div>
        <div style="${o}text-align:center;">
          <p style="font-size:28px;font-weight:800;color:var(--color-warning);margin:0;">${Object.keys(s).length}</p>
          <p style="font-size:12px;color:var(--color-text-muted);margin:4px 0 0;">Games Played</p>
        </div>
      </div>

      <div style="${o}">
        <h3 style="${c}">📝 Sentence Builder Progress</h3>
        <p style="font-size:13px;color:var(--color-text-muted);margin:0 0 16px;">Score per tense (across all three forms)</p>
        ${p.map(r=>{const e=a.perTense[r],d=Math.min(Math.round(e.completed/(3*maxPerTenses)*100),100),m=d>=80?"var(--color-success)":d>=40?"var(--color-primary)":"var(--color-accent)";return S(d,r,m).outerHTML}).join("")}
      </div>

      <div style="${o}">
        <h3 style="${c}">🎮 Game Scores</h3>
        ${Object.keys(s).length===0?'<p style="font-size:13px;color:var(--color-text-muted);">No game data yet. Play some games to see your scores here!</p>':`
          <table class="theory-table" style="margin-bottom:0;">
            <thead><tr><th>Game</th><th>Best Score</th><th>Total Score</th><th>Games Played</th><th>Avg per Game</th></tr></thead>
            <tbody>
              ${Object.entries(s).map(([r,e])=>{const d=v[r]||r,m=e.gamesPlayed>0?Math.round(e.totalScore/e.gamesPlayed):0;return`<tr>
                  <td><strong>${d}</strong></td>
                  <td>${e.bestScore}</td>
                  <td>${e.totalScore}</td>
                  <td>${e.gamesPlayed}</td>
                  <td>${m}</td>
                </tr>`}).join("")}
            </tbody>
          </table>
        `}
      </div>

      <div style="${o}">
        <h3 style="${c}">🔄 Spaced Repetition</h3>
        ${Object.keys(l).length===0?'<p style="font-size:13px;color:var(--color-text-muted);">No review data yet. Keep practicing and wrong answers will be tracked here.</p>':(()=>{const r=Object.values(l).filter(d=>d.wrongCount>0).length,e=Object.values(l).filter(d=>d.nextReview?new Date(d.nextReview)<=new Date:!1).length;return`
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;">
              <div style="text-align:center;padding:12px;background:var(--color-bg-secondary);border-radius:8px;">
                <p style="font-size:24px;font-weight:700;color:var(--color-error);margin:0;">${r}</p>
                <p style="font-size:11px;color:var(--color-text-muted);margin:4px 0 0;">Items with errors</p>
              </div>
              <div style="text-align:center;padding:12px;background:var(--color-bg-secondary);border-radius:8px;">
                <p style="font-size:24px;font-weight:700;color:var(--color-warning);margin:0;">${e}</p>
                <p style="font-size:11px;color:var(--color-text-muted);margin:4px 0 0;">Due for review</p>
              </div>
            </div>
          `})()}
      </div>

      <div style="${o}">
        <h3 style="${c}">📈 Tense Form Breakdown</h3>
        <div style="overflow-x:auto;">
          <table class="theory-table" style="margin-bottom:0;">
            <thead><tr><th>Tense</th><th>Affirmative</th><th>Negative</th><th>Questions</th><th>Total</th></tr></thead>
            <tbody>
              ${p.map(r=>{const e=a.perTense[r];return`<tr>
                  <td><strong>${r}</strong></td>
                  <td>${e.forms.affirmative.completed}</td>
                  <td>${e.forms.negative.completed}</td>
                  <td>${e.forms.questions.completed}</td>
                  <td><strong>${e.completed}</strong></td>
                </tr>`}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`;if(t){t.innerHTML=i;return}return i}function T(){const t=document.getElementById("dashboardContainer");t&&w(t)}export{T as initDashboard,w as renderDashboard};
