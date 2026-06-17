/* ═══════════════════════════════════════════
   UTILITIES MODULE
   ═══════════════════════════════════════════ */

const $ = id => document.getElementById(id);

function shuffle(a) { const r = [...a]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]]} return r; }

function spawnConfetti(){const c=document.createElement("div");c.className="confetti-container";document.body.appendChild(c);const colors=["#4f46e5","#f59e0b","#10b981","#ef4444","#ec4899","#8b5cf6","#06b6d4","#f97316"];const shapes=["■","●","▲","★","♦"];for(let i=0;i<60;i++){const p=document.createElement("div");p.className="confetti-piece";p.textContent=shapes[Math.floor(Math.random()*shapes.length)];p.style.left=Math.random()*100+"%";p.style.color=colors[Math.floor(Math.random()*colors.length)];p.style.fontSize=8+Math.random()*12+"px";p.style.animationDuration=1.5+Math.random()*2+"s";p.style.animationDelay=Math.random()*0.5+"s";c.appendChild(p);}setTimeout(()=>{if(c.parentElement)c.remove();},4000);}

function showFeedback(msg,type){const fa=$("feedbackArea");const el=document.createElement("div");el.className=`temp-feedback ${type}`;el.textContent=msg;fa?.appendChild(el);if(feedbackTimeout)clearTimeout(feedbackTimeout);feedbackTimeout=setTimeout(()=>{if(el.parentElement)el.remove();},3000);}

let feedbackTimeout = null;

export { $, shuffle, spawnConfetti, showFeedback };
