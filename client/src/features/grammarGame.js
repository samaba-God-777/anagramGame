/* ═══════════════════════════════════════════
   GRAMMAR GAMES ENGINE
   Phrasal Verbs, Idioms, Conjunctions
   Connected to Wikipedia API
   ═══════════════════════════════════════════ */

const WIKI_API = "https://en.wikipedia.org/api/rest_v1/page/summary";
const WIKI_SEARCH = "https://en.wikipedia.org/api/rest_v1/page/list";

// ═══════════════════════════════════════════
// GAME DATA
// ═══════════════════════════════════════════

const GAME_DATA = {
  "phrasal-verbs": {
    title: "Phrasal Verbs Challenge",
    icon: "💬",
    description: "Master phrasal verbs with real examples from Wikipedia",
    wikiTopics: ["Phrasal_verb", "English_grammar", "English_language"],
    exercises: [
      { sentence: "She decided to ___ ___ smoking last year.", options: ["gave up", "gave in", "gave out", "gave away"], answer: 0, meaning: "to stop doing something", wiki: "Quitting smoking is often called 'giving up' — a separable phrasal verb." },
      { sentence: "Please ___ ___ the lights when you leave.", options: ["turn off", "turn on", "turn up", "turn down"], answer: 0, meaning: "to stop something from working", wiki: "'Turn off' is separable: you can say 'turn off the lights' or 'turn the lights off'." },
      { sentence: "I need to ___ ___ this problem before tomorrow.", options: ["figure out", "figure in", "figure on", "figure off"], answer: 0, meaning: "to understand or solve something", wiki: "'Figure out' means to understand or find the answer to something." },
      { sentence: "The meeting was ___ ___ until next week.", options: ["put off", "put on", "put up", "put out"], answer: 0, meaning: "to postpone or delay", wiki: "'Put off' means to delay or postpone something." },
      { sentence: "She ___ ___ her old clothes to charity.", options: ["gave away", "gave up", "gave in", "gave out"], answer: 0, meaning: "to give something for free", wiki: "'Give away' means to give something for free, without expecting payment." },
      { sentence: "We need to ___ ___ with the project despite challenges.", options: ["carry on", "carry out", "carry off", "carry away"], answer: 0, meaning: "to continue doing something", wiki: "'Carry on' means to continue doing something despite difficulties." },
      { sentence: "The airplane will ___ ___ at 3 PM.", options: ["take off", "take on", "take up", "take over"], answer: 0, meaning: "to leave the ground and start flying", wiki: "'Take off' is used for airplanes leaving the ground." },
      { sentence: "I can't ___ ___ what he said yesterday.", options: ["get over", "get on", "get up", "get along"], answer: 0, meaning: "to recover from something", wiki: "'Get over' means to recover from an illness or disappointment." },
      { sentence: "She ___ ___ a new hobby last month.", options: ["took up", "took off", "took over", "took on"], answer: 0, meaning: "to start a new activity", wiki: "'Take up' means to start a new hobby or activity." },
      { sentence: "The lights suddenly ___ ___ during the storm.", options: ["went out", "went on", "went off", "went over"], answer: 0, meaning: "to stop working or become dark", wiki: "'Go out' can mean lights stop working or you leave a place." },
      { sentence: "He ___ ___ his old job after the vacation.", options: ["went back to", "went on to", "went over to", "went up to"], answer: 0, meaning: "to return to something", wiki: "'Go back to' means to return to a place or activity." },
      { sentence: "The teacher ___ ___ the students for their hard work.", options: ["called on", "called off", "called up", "called in"], answer: 0, meaning: "to ask someone to answer or participate", wiki: "'Call on' means to ask someone to answer a question." },
      { sentence: "We need to ___ ___ the fire before it spreads.", options: ["put out", "put off", "put on", "put up"], answer: 0, meaning: "to extinguish something", wiki: "'Put out' means to extinguish a fire." },
      { sentence: "She ___ ___ her friends during the difficult time.", options: ["turned to", "turned off", "turned on", "turned down"], answer: 0, meaning: "to ask for help or support", wiki: "'Turn to' means to ask someone for help or support." },
      { sentence: "The company will ___ ___ new employees next month.", options: ["take on", "take off", "take up", "take over"], answer: 0, meaning: "to employ or hire someone", wiki: "'Take on' means to employ someone or accept a responsibility." },
      { sentence: "I need to ___ ___ my emails before the meeting.", options: ["go through", "go over", "go on", "go off"], answer: 0, meaning: "to check or review something", wiki: "'Go through' means to examine or review something carefully." },
      { sentence: "The children were ___ ___ in the garden.", options: ["playing around", "playing on", "playing with", "playing at"], answer: 0, meaning: "to have fun or behave playfully", wiki: "'Play around' means to behave in a silly or playful way." },
      { sentence: "She ___ ___ a new idea during the meeting.", options: ["came up with", "came up to", "came up on", "came up against"], answer: 0, meaning: "to think of something new", wiki: "'Come up with' means to think of an idea or plan." },
      { sentence: "The team decided to ___ ___ the old system.", options: ["do away with", "do up with", "do in with", "do off with"], answer: 0, meaning: "to remove or get rid of something", wiki: "'Do away with' means to abolish or remove something." },
      { sentence: "He ___ ___ his promise to help us.", options: ["went back on", "went back to", "went back up", "went back in"], answer: 0, meaning: "to break a promise", wiki: "'Go back on' means to not keep a promise." },
    ]
  },
  "idioms": {
    title: "Idioms Challenge",
    icon: "🎭",
    description: "Learn idioms with real examples from Wikipedia",
    wikiTopics: ["Idiom", "English_language", "Figurative_language"],
    exercises: [
      { sentence: "Don't worry, it's just a ___ ___ of cake.", options: ["piece", "bit", "slice", "part"], answer: 0, meaning: "something very easy", wiki: "'Piece of cake' is an idiom meaning something very easy to do." },
      { sentence: "She was ___ ___ under the weather yesterday.", options: ["feeling", "looking", "acting", "being"], answer: 0, meaning: "feeling ill or unwell", wiki: "'Under the weather' means feeling ill or unwell." },
      { sentence: "He really ___ ___ a bullet when he avoided that accident.", options: ["bit", "shot", "fired", "held"], answer: 0, meaning: "to endure a difficult situation", wiki: "'Bite the bullet' means to endure a painful or difficult situation." },
      { sentence: "The project was a ___ ___ in disguise.", options: ["blessing", "curse", "problem", "challenge"], answer: 0, meaning: "something good that seemed bad at first", wiki: "'A blessing in disguise' means something good that seemed bad initially." },
      { sentence: "She has a ___ ___ for gardening.", options: ["green thumb", "golden hand", "magic touch", "bright eye"], answer: 0, meaning: "talent for growing plants", wiki: "'Green thumb' means a talent for gardening or growing plants." },
      { sentence: "Let's not ___ ___ around the bush.", options: ["beat", "hit", "strike", "tap"], answer: 0, meaning: "to avoid talking about the main topic", wiki: "'Beat around the bush' means to avoid talking about the main topic." },
      { sentence: "The ball is in your ___ ___.", options: ["court", "field", "game", "field"], answer: 0, meaning: "it's your turn to make a decision", wiki: "'The ball is in your court' means it's your turn to make a decision." },
      { sentence: "She was ___ ___ over the moon about the news.", options: ["over", "under", "around", "through"], answer: 0, meaning: "very happy or excited", wiki: "'Over the moon' means extremely happy or delighted." },
      { sentence: "He really ___ ___ the last straw.", options: ["drew", "pulled", "took", "made"], answer: 0, meaning: "the final problem that ends a situation", wiki: "'The last straw' is the final problem that ends a situation." },
      { sentence: "Don't count your ___ ___ before they hatch.", options: ["chickens", "eggs", "birds", "ducks"], answer: 0, meaning: "don't assume success before it happens", wiki: "'Don't count your chickens before they hatch' means don't assume success prematurely." },
      { sentence: "She was ___ ___ her books.", options: ["burning the midnight oil with", "burning the candle at both ends with", "burning bridges with", "burning rubber with"], answer: 0, meaning: "working late into the night", wiki: "'Burning the midnight oil' means working late into the night." },
      { sentence: "He's really ___ ___ the wrong tree.", options: ["barking up", "climbing up", "running up", "jumping up"], answer: 0, meaning: "looking in the wrong place or making wrong assumptions", wiki: "'Barking up the wrong tree' means making false assumptions." },
      { sentence: "Actions speak louder than ___.", options: ["words", "deeds", "thoughts", "promises"], answer: 0, meaning: "what you do matters more than what you say", wiki: "'Actions speak louder than words' means what you do is more important than what you say." },
      { sentence: "Better late than ___.", options: ["never", "always", "sometimes", "later"], answer: 0, meaning: "it's better to do something late than not at all", wiki: "'Better late than never' means it's better to do something late than not at all." },
      { sentence: "She was ___ ___ her arm and a leg for that dress.", options: ["costing an", "paying an", "spending an", "wasting an"], answer: 0, meaning: "very expensive", wiki: "'Cost an arm and a leg' means something is very expensive." },
      { sentence: "Let's hit the ___ ___ early tonight.", options: ["sack", "bed", "road", "hay"], answer: 0, meaning: "go to sleep", wiki: "'Hit the sack' means to go to sleep." },
      { sentence: "Don't ___ ___ all your eggs in one basket.", options: ["put", "place", "keep", "hold"], answer: 0, meaning: "don't risk everything on one thing", wiki: "'Don't put all your eggs in one basket' means don't risk everything on one plan." },
      { sentence: "He was ___ ___ his face when he told the joke.", options: ["pulling", "pushing", "hitting", "smacking"], answer: 0, meaning: "trying too hard to be funny", wiki: "'Pulling your face' can mean making a funny face or expression." },
      { sentence: "The early bird catches the ___.", options: ["worm", "fly", "bug", "insect"], answer: 0, meaning: "those who act first get the advantage", wiki: "'The early bird catches the worm' means those who act first get the advantage." },
      { sentence: "When in ___, do as the Romans do.", options: ["Rome", "Greece", "Italy", "Spain"], answer: 0, meaning: "follow local customs", wiki: "'When in Rome, do as the Romans do' means follow local customs." },
    ]
  },
  "conjunctions": {
    title: "Conjunctions Challenge",
    icon: "🔗",
    description: "Master conjunctions with real examples from Wikipedia",
    wikiTopics: ["Conjunction_(grammar)", "English_grammar", "Parts_of_speech"],
    exercises: [
      { sentence: "I stayed home ___ I was sick.", options: ["because", "and", "but", "or"], answer: 0, meaning: "shows reason or cause", wiki: "'Because' is a subordinating conjunction that shows reason or cause." },
      { sentence: "She was tired ___ she kept working.", options: ["but", "and", "or", "so"], answer: 0, meaning: "shows contrast or opposition", wiki: "'But' is a coordinating conjunction that shows contrast or opposition." },
      { sentence: "Would you like tea ___ coffee?", options: ["or", "and", "but", "so"], answer: 0, meaning: "presents alternatives", wiki: "'Or' is a coordinating conjunction that presents alternatives." },
      { sentence: "I like cats ___ dogs.", options: ["and", "but", "or", "so"], answer: 0, meaning: "joins similar ideas", wiki: "'And' is a coordinating conjunction that joins similar ideas." },
      { sentence: "Hurry ___ you will be late.", options: ["or", "and", "but", "so"], answer: 0, meaning: "shows consequence", wiki: "'Or' can show what will happen if something doesn't happen." },
      { sentence: "___ it rained, we went out.", options: ["Although", "And", "But", "Or"], answer: 0, meaning: "shows concession", wiki: "'Although' is a subordinating conjunction that shows concession." },
      { sentence: "She likes tea ___ coffee.", options: ["and", "but", "or", "because"], answer: 0, meaning: "joins two items", wiki: "'And' joins two items in a list or connects similar ideas." },
      { sentence: "I will go ___ you go.", options: ["if", "and", "but", "or"], answer: 0, meaning: "shows condition", wiki: "'If' is a subordinating conjunction that shows condition." },
      { sentence: "Not only ___ smart, but also kind.", options: ["is she", "she is", "she", "is"], answer: 0, meaning: "correlative conjunction for emphasis", wiki: "'Not only...but also' is a correlative conjunction used for emphasis." },
      { sentence: "Either you ___ he is coming.", options: ["or", "and", "but", "nor"], answer: 0, meaning: "presents alternatives", wiki: "'Either...or' is a correlative conjunction that presents alternatives." },
      { sentence: "She was tired, ___ she went to bed.", options: ["so", "and", "but", "or"], answer: 0, meaning: "shows result", wiki: "'So' is a coordinating conjunction that shows result or consequence." },
      { sentence: "___ you study, you will pass.", options: ["If", "And", "But", "Or"], answer: 0, meaning: "shows condition", wiki: "'If' introduces a condition that must be met." },
      { sentence: "He likes swimming ___ running.", options: ["and", "but", "or", "so"], answer: 0, meaning: "joins two activities", wiki: "'And' connects two activities in a list." },
      { sentence: "She left early ___ she was feeling unwell.", options: ["because", "and", "but", "or"], answer: 0, meaning: "gives a reason", wiki: "'Because' gives a reason for an action." },
      { sentence: "___ he ___ she is coming.", options: ["Either/or", "Both/and", "Not/but", "Whether/or"], answer: 0, meaning: "correlative conjunction for choice", wiki: "'Either...or' presents a choice between two options." },
      { sentence: "I want to go ___ I'm tired.", options: ["but", "and", "or", "so"], answer: 0, meaning: "shows contrast", wiki: "'But' shows contrast between two ideas." },
      { sentence: "She studied hard ___ passed the exam.", options: ["and", "but", "or", "so"], answer: 0, meaning: "joins two actions", wiki: "'And' connects two related actions." },
      { sentence: "___ it was cold, we went swimming.", options: ["Although", "And", "But", "Or"], answer: 0, meaning: "shows contrast", wiki: "'Although' shows contrast between ideas." },
      { sentence: "You can have cake ___ ice cream.", options: ["or", "and", "but", "so"], answer: 0, meaning: "presents a choice", wiki: "'Or' presents a choice between two options." },
      { sentence: "She was happy ___ she got the job.", options: ["because", "and", "but", "or"], answer: 0, meaning: "gives a reason", wiki: "'Because' explains why something happened." },
    ]
  }
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
// GAME ENGINE
// ═══════════════════════════════════════════

export class GrammarGame {
  constructor(topic) {
    this.topic = topic;
    this.data = GAME_DATA[topic];
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.totalAnswered = 0;
    this.correctAnswers = 0;
    this.wikiData = null;
    this.shuffledExercises = [];
    this.container = null;
    this.resultsContainer = null;
    this.onComplete = null;
  }

  async init(containerId = 'gameContent', resultsId = 'gameResults') {
    this.container = document.getElementById(containerId);
    this.resultsContainer = document.getElementById(resultsId);
    
    if (!this.container) {
      console.error('Game container not found');
      return;
    }

    // Shuffle exercises
    this.shuffledExercises = [...this.data.exercises].sort(() => Math.random() - 0.5);

    // Fetch Wikipedia data
    const mainTopic = this.data.wikiTopics[0];
    this.wikiData = await fetchWiki(mainTopic);

    // Set up global functions
    window.__gameAnswer = (index) => this.answer(index);
    window.__gameNext = () => this.next();
    window.__gameRetry = () => this.retry();
    window.__gameClose = () => this.close();

    this.render();
  }

  render() {
    if (!this.container) return;

    const exercise = this.shuffledExercises[this.currentIndex];
    if (!exercise) {
      this.showResults();
      return;
    }

    let html = '';

    // Wikipedia context card
    if (this.wikiData && this.currentIndex === 0) {
      html += `
        <div class="game-wiki-card">
          <div class="game-wiki-header">
            <span class="game-wiki-icon">📚</span>
            <span class="game-wiki-title">Learn from Wikipedia</span>
          </div>
          <p class="game-wiki-extract">${this.wikiData.extract?.substring(0, 200)}...</p>
          ${this.wikiData.content_urls?.desktop?.page ? 
            `<a href="${this.wikiData.content_urls.desktop.page}" target="_blank" rel="noopener" class="game-wiki-link">Read more on Wikipedia →</a>` : ''}
        </div>
      `;
    }

    // Progress bar
    const progress = ((this.currentIndex) / this.shuffledExercises.length) * 100;
    html += `
      <div class="game-progress">
        <div class="game-progress-header">
          <span class="game-progress-label">Question ${this.currentIndex + 1} of ${this.shuffledExercises.length}</span>
          <span class="game-progress-score">Score: ${this.score} | Streak: ${this.streak} 🔥</span>
        </div>
        <div class="game-progress-bar">
          <div class="game-progress-fill" style="width:${progress}%"></div>
        </div>
      </div>
    `;

    // Question card
    html += `
      <div class="game-question-card">
        <div class="game-question-header">
          <span class="game-question-number">Q${this.currentIndex + 1}</span>
          <span class="game-question-topic">${this.data.icon} ${this.data.title}</span>
        </div>
        <h3 class="game-question-text">${exercise.sentence}</h3>
        <div class="game-options">
          ${exercise.options.map((opt, i) => `
            <button class="game-option" data-index="${i}" onclick="window.__gameAnswer(${i})">
              <span class="game-option-letter">${String.fromCharCode(65 + i)}</span>
              <span class="game-option-text">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // Wikipedia fact (shown after first question)
    if (this.currentIndex > 0 && exercise.wiki) {
      html += `
        <div class="game-wiki-fact">
          <span class="game-wiki-fact-icon">💡</span>
          <span class="game-wiki-fact-text">${exercise.wiki}</span>
        </div>
      `;
    }

    this.container.innerHTML = html;
    this.container.style.display = 'block';
    if (this.resultsContainer) this.resultsContainer.style.display = 'none';
  }

  answer(index) {
    const exercise = this.shuffledExercises[this.currentIndex];
    const correct = index === exercise.answer;
    
    this.totalAnswered++;
    
    // Disable all buttons
    const options = this.container.querySelectorAll('.game-option');
    options.forEach((opt, i) => {
      opt.disabled = true;
      opt.classList.remove('selected');
      if (i === exercise.answer) opt.classList.add('correct');
      if (i === index && !correct) opt.classList.add('incorrect');
      if (i === index) opt.classList.add('selected');
    });

    if (correct) {
      this.correctAnswers++;
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;
      this.score += 10 + (this.streak * 2); // Bonus for streak
      
      // Show meaning
      const meaningDiv = document.createElement('div');
      meaningDiv.className = 'game-meaning';
      meaningDiv.innerHTML = `
        <span class="game-meaning-icon">✅</span>
        <span class="game-meaning-text"><strong>${exercise.meaning}</strong></span>
      `;
      this.container.querySelector('.game-question-card').appendChild(meaningDiv);
    } else {
      this.streak = 0;
      this.score = Math.max(0, this.score - 5);
    }

    // Auto-advance after delay
    setTimeout(() => {
      this.currentIndex++;
      this.render();
    }, 1500);
  }

  showResults() {
    if (!this.resultsContainer) return;
    
    const percent = Math.round((this.correctAnswers / this.shuffledExercises.length) * 100);
    const passed = percent >= 60;
    
    let html = `
      <div class="game-results-card ${passed ? 'passed' : 'failed'}">
        <div class="game-results-icon">${passed ? '🎉' : '📚'}</div>
        <h2 class="game-results-title">${passed ? 'Excellent Work!' : 'Keep Practicing!'}</h2>
        <div class="game-results-score">
          <span class="game-score-big">${percent}%</span>
          <span class="game-score-detail">${this.correctAnswers} out of ${this.shuffledExercises.length} correct</span>
        </div>
        <div class="game-results-stats">
          <div class="game-result-stat">
            <span class="game-result-stat-value">${this.score}</span>
            <span class="game-result-stat-label">Total Score</span>
          </div>
          <div class="game-result-stat">
            <span class="game-result-stat-value">${this.bestStreak}</span>
            <span class="game-result-stat-label">Best Streak</span>
          </div>
          <div class="game-result-stat">
            <span class="game-result-stat-value">${this.totalAnswered}</span>
            <span class="game-result-stat-label">Questions Answered</span>
          </div>
        </div>
        <div class="game-results-message">
          ${passed ? 
            'Great job! You understand this topic well.' : 
            'Review the material and try again. You\'ll improve!'}
        </div>
        <div class="game-results-actions">
          <button class="game-retry-btn" onclick="window.__gameRetry()">🔄 Try Again</button>
          <button class="game-close-btn" onclick="window.__gameClose()">✕ Close</button>
        </div>
      </div>
    `;

    // Wikipedia suggestion
    if (this.wikiData) {
      html += `
        <div class="game-wiki-suggestion">
          <h4>📚 Want to learn more?</h4>
          <a href="${this.wikiData.content_urls?.desktop?.page || '#'}" target="_blank" rel="noopener" class="game-wiki-link">
            Read about ${this.topic.replace('-', ' ')} on Wikipedia →
          </a>
        </div>
      `;
    }

    this.resultsContainer.innerHTML = html;
    this.resultsContainer.style.display = 'block';
    this.container.style.display = 'none';
  }

  retry() {
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.totalAnswered = 0;
    this.correctAnswers = 0;
    this.shuffledExercises = [...this.data.exercises].sort(() => Math.random() - 0.5);
    this.render();
  }

  close() {
    if (this.container) this.container.style.display = 'none';
    if (this.resultsContainer) this.resultsContainer.style.display = 'none';
    
    // Show start button
    const startBtn = document.getElementById('startGameBtn');
    if (startBtn) startBtn.style.display = 'inline-flex';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ═══════════════════════════════════════════
// INITIALIZE GAME ON PAGE
// ═══════════════════════════════════════════

export function initGame(topic) {
  const game = new GrammarGame(topic);
  
  // Start button
  const startBtn = document.getElementById('startGameBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      startBtn.style.display = 'none';
      game.init();
    });
  }
  
  return game;
}
