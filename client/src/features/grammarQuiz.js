/* ═══════════════════════════════════════════
   GRAMMAR QUIZ MODULE
   Multiple choice quiz with 20 questions
   Uses Wikipedia API for context
   ═══════════════════════════════════════════ */

const WIKI_API = "https://en.wikipedia.org/api/rest_v1/page/summary";

// ═══════════════════════════════════════════
// QUIZ DATA
// ═══════════════════════════════════════════

export const QUIZ_QUESTIONS = {
  "phrasal-verbs": [
    { q: "What does 'give up' mean?", options: ["Entregar", "Rendirse", "Regalar", "Dar"], answer: 1 },
    { q: "Which is a separable phrasal verb?", options: ["Look after", "Turn off", "Run into", "Wait for"], answer: 1 },
    { q: "Complete: 'She turned ___ the light.'", options: ["off", "up", "down", "in"], answer: 0 },
    { q: "What does 'break down' mean?", options: ["Romper", "Descomponerse", "Derribar", "Quebrar"], answer: 1 },
    { q: "Which sentence is correct?", options: ["Turn off it", "Turn it off", "Turn it of", "Off turn it"], answer: 1 },
    { q: "What does 'look after' mean?", options: ["Mirar después", "Cuidar", "Buscar", "Observar"], answer: 1 },
    { q: "Which is intransitive?", options: ["Turn on", "Wake up", "Pick up", "Take off"], answer: 1 },
    { q: "Complete: 'I need to ___ ___ this problem.'", options: ["figure out", "out figure", "figure off", "off figure"], answer: 0 },
    { q: "What does 'put off' mean?", options: ["Poner fuera", "Posponer", "Apagar", "Quitar"], answer: 1 },
    { q: "Which is a three-word phrasal verb?", options: ["Give up", "Look forward to", "Turn down", "Run out"], answer: 1 },
    { q: "Complete: 'She ___ ___ smoking last year.'", options: ["gave up", "up gave", "give up", "gave off"], answer: 0 },
    { q: "What does 'run out' mean?", options: ["Correr fuera", "Agotarse", "Escapar", "Salir"], answer: 1 },
    { q: "Which is inseparable?", options: ["Turn off", "Look after", "Pick up", "Take off"], answer: 1 },
    { q: "Complete: 'Please ___ ___ the music.'", options: ["turn on", "on turn", "turn in", "in turn"], answer: 0 },
    { q: "What does 'get over' mean?", options: ["Obtener sobre", "Superar", "Cruzar", "Recibir"], answer: 1 },
    { q: "Which pronoun position is correct?", options: ["Turn off it", "Turn it off", "It turn off", "Off turn it"], answer: 1 },
    { q: "What does 'carry on' mean?", options: ["Llevar encima", "Continuar", "Soportar", "Transportar"], answer: 1 },
    { q: "Complete: 'We need to ___ ___ with the project.'", options: ["carry on", "on carry", "carry off", "off carry"], answer: 0 },
    { q: "What does 'take off' mean?", options: ["Tomar fuera", "Despegar", "Quitar", "Llevar"], answer: 1 },
    { q: "Which is a phrasal verb?", options: ["Run", "Run into", "Running", "Ran"], answer: 1 },
  ],
  "idiomatic-expressions": [
    { q: "What does 'break a leg' mean?", options: ["Romper una pierna", "Buena suerte", "Caminar rápido", "Estirar"], answer: 1 },
    { q: "What does 'piece of cake' mean?", options: ["Pedazo de pastel", "Algo fácil", "Comida deliciosa", "Postre"], answer: 1 },
    { q: "Complete: 'It's raining ___ ___.'", options: ["cats and dogs", "dogs and cats", "birds and bees", "fish and chips"], answer: 0 },
    { q: "What does 'hit the sack' mean?", options: ["Golpear el saco", "Ir a dormir", "Comprar ropa", "Hacer ejercicio"], answer: 1 },
    { q: "What does 'cost an arm and a leg' mean?", options: ["Dolor físico", "Muy caro", "Lesión grave", "Esfuerzo"], answer: 1 },
    { q: "Complete: 'Let's ___ ___ the cat out of the bag.'", options: ["not let", "let", "don't let", "never let"], answer: 1 },
    { q: "What does 'bite the bullet' mean?", options: ["Morder bala", "Aceptar algo difícil", "Ser valiente", "Comer rápido"], answer: 1 },
    { q: "What does 'under the weather' mean?", options: ["Bajo la lluvia", "Enfermo", "Triste", "Cansado"], answer: 1 },
    { q: "Complete: 'He's ___ ___ my books.'", options: ["over the moon", "on the moon", "under the moon", "in the moon"], answer: 0 },
    { q: "What does 'kill two birds with one stone' mean?", options: ["Cazar aves", "Lograr dos cosas a la vez", "Ser preciso", "Ahorrar"], answer: 1 },
    { q: "What does 'a blessing in disguise' mean?", options: ["Una maldición", "Algo bueno que parece malo", "Un disfraz", "Una bendición"], answer: 1 },
    { q: "Complete: 'Don't ___ ___ your chickens before they hatch.'", options: ["count", "count the", "count all", "count those"], answer: 0 },
    { q: "What does 'the ball is in your court' mean?", options: ["Jugar tenis", "Es tu decisión", "Ganar", "Perder"], answer: 1 },
    { q: "What does 'burn the midnight oil' mean?", options: ["Quemar aceite", "Trabajar de noche", "Cocinar tarde", "Estudiar"], answer: 1 },
    { q: "Complete: 'She has a ___ ___ for music.'", options: ["green thumb", "blue thumb", "red thumb", "yellow thumb"], answer: 0 },
    { q: "What does 'barking up the wrong tree' mean?", options: ["Ladrar árbol", "Equivocarse", "Buscar", "Encontrar"], answer: 1 },
    { q: "What does 'better late than never' mean?", options: ["Mejor tarde", "Nunca es tarde", "A tiempo", "Temprano"], answer: 1 },
    { q: "Complete: 'Actions speak louder than ___.'", options: ["words", "talks", "speaks", "says"], answer: 0 },
    { q: "What does 'the last straw' mean?", options: ["Última paja", "La gota que derrama el vaso", "Final", "Fin"], answer: 1 },
    { q: "What does 'beat around the bush' mean?", options: ["Golpear arbusto", "No ir al grano", "Correr", "Saltar"], answer: 1 },
  ],
  "conjunctions": [
    { q: "Which are FANBOYS coordinating conjunctions?", options: ["For, And, Nor, But, Or, Yet, So", "First, Always, Never, Before, Once, Your, Some", "Find, Ask, Note, Bring, Order, Yield, Send", "Free, Area, Near, Big, Open, Yellow, Small"], answer: 0 },
    { q: "Which is a subordinating conjunction?", options: ["And", "But", "Because", "Or"], answer: 2 },
    { q: "Complete: 'I stayed home ___ I was sick.'", options: ["and", "but", "because", "or"], answer: 2 },
    { q: "Which is a correlative conjunction?", options: ["And", "Either...or", "Because", "So"], answer: 1 },
    { q: "Complete: '___ you study, you will pass.'", options: ["And", "But", "If", "Or"], answer: 2 },
    { q: "Which sentence uses a coordinating conjunction correctly?", options: ["I like cats and dogs", "I like cats because dogs", "I like cats so dogs", "I like cats but dogs"], answer: 0 },
    { q: "What does FANBOYS stand for?", options: ["Types of verbs", "Coordinating conjunctions", "Noun forms", "Tenses"], answer: 1 },
    { q: "Complete: 'She was tired ___ she kept working.'", options: ["and", "but", "or", "so"], answer: 1 },
    { q: "Which is NOT a coordinating conjunction?", options: ["For", "And", "Although", "Yet"], answer: 2 },
    { q: "Complete: '___ he ___ she is coming.'", options: ["Either/or", "Both/and", "Not/but", "Whether/or"], answer: 0 },
    { q: "Which joins two independent clauses?", options: ["Subordinating", "Correlative", "Coordinating", "Preposition"], answer: 2 },
    { q: "Complete: 'I will go ___ you go.'", options: ["and", "but", "if", "or"], answer: 2 },
    { q: "Which creates a dependent clause?", options: ["And", "But", "Because", "So"], answer: 2 },
    { q: "Complete: 'She likes tea ___ coffee.'", options: ["and", "because", "although", "if"], answer: 0 },
    { q: "Which pairs ideas as equally important?", options: ["Subordinating", "Correlative", "Coordinating", "Relative"], answer: 2 },
    { q: "Complete: 'Not only ___ smart, but also kind.'", options: ["is she", "she is", "she", "is"], answer: 0 },
    { q: "Which shows contrast?", options: ["And", "But", "So", "For"], answer: 1 },
    { q: "Complete: 'Hurry ___ you will be late.'", options: ["and", "but", "or", "so"], answer: 2 },
    { q: "Which is used to show reason?", options: ["And", "But", "Because", "Or"], answer: 2 },
    { q: "Complete: '___ it rained, we went out.'", options: ["And", "But", "Although", "Or"], answer: 2 },
  ],
  "prepositions": [
    { q: "Which preposition goes with 'interested'?", options: ["in", "on", "at", "for"], answer: 0 },
    { q: "Complete: 'The book is ___ the table.'", options: ["in", "on", "at", "by"], answer: 1 },
    { q: "Which preposition goes with 'good at'?", options: ["in", "on", "at", "for"], answer: 2 },
    { q: "Complete: 'We meet ___ 3 PM.'", options: ["in", "on", "at", "for"], answer: 2 },
    { q: "Which preposition goes with 'afraid of'?", options: ["in", "on", "of", "for"], answer: 2 },
    { q: "Complete: 'She arrived ___ Monday.'", options: ["in", "on", "at", "for"], answer: 1 },
    { q: "Which preposition goes with 'depend on'?", options: ["in", "on", "at", "for"], answer: 1 },
    { q: "Complete: 'The cat is hiding ___ the bed.'", options: ["in", "on", "under", "at"], answer: 2 },
    { q: "Which preposition goes with 'listen to'?", options: ["in", "on", "to", "for"], answer: 2 },
    { q: "Complete: 'I live ___ New York.'", options: ["in", "on", "at", "for"], answer: 0 },
    { q: "Which preposition goes with 'look at'?", options: ["in", "on", "at", "for"], answer: 2 },
    { q: "Complete: 'The meeting is ___ Friday.'", options: ["in", "on", "at", "for"], answer: 1 },
    { q: "Which preposition goes with 'wait for'?", options: ["in", "on", "at", "for"], answer: 3 },
    { q: "Complete: 'He's interested ___ learning.'", options: ["in", "on", "at", "for"], answer: 0 },
    { q: "Which preposition goes with 'arrive at'?", options: ["in", "on", "at", "for"], answer: 2 },
    { q: "Complete: 'She works ___ a hospital.'", options: ["in", "on", "at", "for"], answer: 0 },
    { q: "Which preposition goes with 'think about'?", options: ["in", "on", "about", "for"], answer: 2 },
    { q: "Complete: 'The movie starts ___ 7 PM.'", options: ["in", "on", "at", "for"], answer: 2 },
    { q: "Which preposition goes with 'look for'?", options: ["in", "on", "at", "for"], answer: 3 },
    { q: "Complete: 'I was born ___ 1990.'", options: ["in", "on", "at", "for"], answer: 0 },
  ]
};

// ═══════════════════════════════════════════
// WIKIPEDIA INTEGRATION
// ═══════════════════════════════════════════

async function fetchWiki(term) {
  try {
    const resp = await fetch(`${WIKI_API}/${encodeURIComponent(term)}`);
    if (!resp.ok) return null;
    return await resp.json();
  } catch { return null; }
}

// ═══════════════════════════════════════════
// QUIZ ENGINE
// ═══════════════════════════════════════════

export class GrammarQuiz {
  constructor(topic, containerId = 'quizContent', resultsId = 'quizResults') {
    this.topic = topic;
    this.questions = QUIZ_QUESTIONS[topic] || [];
    this.container = document.getElementById(containerId);
    this.results = document.getElementById(resultsId);
    this.currentQ = 0;
    this.score = 0;
    this.answers = [];
    this.wikiData = null;
  }

  async init() {
    // Fetch Wikipedia data for context
    const wikiTerms = {
      "phrasal-verbs": "Phrasal_verb",
      "idiomatic-expressions": "Idiom",
      "conjunctions": "Conjunction_(grammar)",
      "prepositions": "Preposition"
    };
    
    this.wikiData = await fetchWiki(wikiTerms[this.topic] || "English_grammar");
    this.render();
  }

  render() {
    if (!this.container) return;
    
    let html = '';
    
    // Wikipedia context card
    if (this.wikiData && this.wikiData.extract) {
      html += `
        <div class="quiz-wiki-card">
          <div class="quiz-wiki-header">
            <span class="quiz-wiki-icon">📚</span>
            <span class="quiz-wiki-title">Learn from Wikipedia</span>
          </div>
          <p class="quiz-wiki-extract">${this.wikiData.extract.substring(0, 200)}...</p>
          ${this.wikiData.content_urls?.desktop?.page ? 
            `<a href="${this.wikiData.content_urls.desktop.page}" target="_blank" rel="noopener" class="quiz-wiki-link">Read more on Wikipedia →</a>` : ''}
        </div>
      `;
    }

    // Progress bar
    html += `
      <div class="quiz-progress">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${((this.currentQ) / this.questions.length) * 100}%"></div>
        </div>
        <span class="quiz-progress-text">Question ${this.currentQ + 1} of ${this.questions.length}</span>
      </div>
    `;

    // Question
    if (this.currentQ < this.questions.length) {
      const q = this.questions[this.currentQ];
      html += `
        <div class="quiz-question-card">
          <div class="quiz-question-number">Q${this.currentQ + 1}</div>
          <h3 class="quiz-question-text">${q.q}</h3>
          <div class="quiz-options">
            ${q.options.map((opt, i) => `
              <button class="quiz-option" data-index="${i}" onclick="window.__quizAnswer(${i})">
                <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
                <span class="quiz-option-text">${opt}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    this.container.innerHTML = html;
  }

  answer(index) {
    const q = this.questions[this.currentQ];
    const correct = index === q.answer;
    
    this.answers.push({ question: this.currentQ, selected: index, correct });
    if (correct) this.score++;

    // Show correct/incorrect
    const options = this.container.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
      opt.disabled = true;
      if (i === q.answer) opt.classList.add('correct');
      if (i === index && !correct) opt.classList.add('incorrect');
    });

    // Auto-advance after delay
    setTimeout(() => {
      this.currentQ++;
      if (this.currentQ < this.questions.length) {
        this.render();
      } else {
        this.showResults();
      }
    }, 1000);
  }

  showResults() {
    const percent = Math.round((this.score / this.questions.length) * 100);
    const passed = percent >= 60;
    
    let html = `
      <div class="quiz-results-card ${passed ? 'passed' : 'failed'}">
        <div class="quiz-results-icon">${passed ? '🎉' : '📚'}</div>
        <h2 class="quiz-results-title">${passed ? 'Excellent Work!' : 'Keep Practicing!'}</h2>
        <div class="quiz-results-score">
          <span class="quiz-score-big">${percent}%</span>
          <span class="quiz-score-detail">${this.score} out of ${this.questions.length} correct</span>
        </div>
        <div class="quiz-results-message">
          ${passed ? 
            'Great job! You understand this topic well.' : 
            'Review the material and try again. You\'ll improve!'}
        </div>
        <button class="quiz-retry-btn" onclick="window.__quizRetry()">🔄 Try Again</button>
      </div>
    `;

    if (this.results) {
      this.results.innerHTML = html;
      this.results.style.display = 'block';
    }
    this.container.style.display = 'none';
  }

  retry() {
    this.currentQ = 0;
    this.score = 0;
    this.answers = [];
    if (this.results) this.results.style.display = 'none';
    this.container.style.display = 'block';
    this.render();
  }
}

// ═══════════════════════════════════════════
// INITIALIZE QUIZ ON PAGE
// ═══════════════════════════════════════════

export function initQuiz(topic) {
  const quiz = new GrammarQuiz(topic);
  
  // Global functions for onclick handlers
  window.__quizAnswer = (index) => quiz.answer(index);
  window.__quizRetry = () => quiz.retry();
  
  // Start button
  const startBtn = document.getElementById('startQuizBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const section = document.getElementById('quizSection');
      if (section) section.style.display = 'block';
      quiz.init();
      startBtn.scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  return quiz;
}
