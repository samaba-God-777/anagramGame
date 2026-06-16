// conjunctions.js — CONJUNCTIONS_DATA, CONJUNCTION_EXERCISES

export const CONJUNCTIONS_DATA = {
  description: "Conjunctions are words that connect words, phrases, clauses, or sentences. They show relationships between the connected elements and help create coherent, complex sentences. English has three main types: <strong>coordinating</strong> (join equal elements), <strong>subordinating</strong> (join a dependent clause to an independent clause), and <strong>correlative</strong> (pairs that work together).",
  coordinating: {
    title: "Coordinating Conjunctions (FANBOYS)",
    text: "Coordinating conjunctions join two or more grammatically equal elements: words with words, phrases with phrases, or independent clauses with independent clauses. The acronym <strong>FANBOYS</strong> helps remember them: <strong>F</strong>or, <strong>A</strong>nd, <strong>N</strong>or, <strong>B</strong>ut, <strong>O</strong>r, <strong>Y</strong>et, <strong>S</strong>o. When joining two independent clauses, place a comma before the conjunction.",
    items: [
      { word: "For", meaning: "reason / cause (similar to 'because')", example: "He stayed home, <strong>for</strong> he was feeling ill." },
      { word: "And", meaning: "addition / connection", example: "She bought apples <strong>and</strong> oranges." },
      { word: "Nor", meaning: "negative addition (after a negative clause)", example: "He didn't call, <strong>nor</strong> did he send a message." },
      { word: "But", meaning: "contrast / exception", example: "I want to go, <strong>but</strong> I'm too tired." },
      { word: "Or", meaning: "alternative / choice", example: "Would you like tea <strong>or</strong> coffee?" },
      { word: "Yet", meaning: "contrast (stronger than 'but')", example: "She is young, <strong>yet</strong> very mature." },
      { word: "So", meaning: "result / consequence", example: "It was raining, <strong>so</strong> we stayed inside." },
    ]
  },
  subordinating: {
    title: "Subordinating Conjunctions",
    text: "Subordinating conjunctions connect a dependent (subordinate) clause to an independent (main) clause. The dependent clause cannot stand alone as a complete sentence. When the dependent clause comes BEFORE the main clause, use a comma after it. When it comes AFTER the main clause, no comma is needed.",
    categories: [
      { name: "Time", conjunctions: "after, before, when, whenever, while, as, as soon as, until, till, since, once, by the time", example: "<strong>When</strong> I arrived, the meeting had already started." },
      { name: "Cause / Reason", conjunctions: "because, since, as, now that", example: "She was late <strong>because</strong> the traffic was terrible." },
      { name: "Contrast / Concession", conjunctions: "although, though, even though, whereas, while", example: "<strong>Although</strong> it was cold, we went swimming." },
      { name: "Condition", conjunctions: "if, unless, provided that, as long as, in case, even if, whether or not", example: "You will pass <strong>if</strong> you study hard." },
      { name: "Purpose", conjunctions: "so that, in order that, lest", example: "She saved money <strong>so that</strong> she could travel." },
      { name: "Manner", conjunctions: "as, as if, as though, the way", example: "He looks <strong>as if</strong> he has seen a ghost." },
      { name: "Place", conjunctions: "where, wherever", example: "Put the keys <strong>where</strong> you can find them." },
    ]
  },
  correlative: {
    title: "Correlative Conjunctions (Paired)",
    text: "Correlative conjunctions work in pairs to connect balanced elements. Both parts of the pair must be followed by grammatically equal structures (parallel structure).",
    pairs: [
      { pair: "both...and", meaning: "two positive alternatives", example: "She is <strong>both</strong> intelligent <strong>and</strong> hardworking." },
      { pair: "either...or", meaning: "one of two alternatives", example: "You can have <strong>either</strong> coffee <strong>or</strong> tea." },
      { pair: "neither...nor", meaning: "not one nor the other (negative)", example: "He is <strong>neither</strong> rich <strong>nor</strong> famous." },
      { pair: "not only...but also", meaning: "adding emphasis to a second element", example: "She <strong>not only</strong> sings <strong>but also</strong> dances." },
      { pair: "whether...or", meaning: "two alternatives (uncertainty)", example: "I don't know <strong>whether</strong> to go <strong>or</strong> stay." },
    ]
  },
  structure: {
    coordinating: "Independent clause <strong>,</strong> + coordinating conjunction + Independent clause (I like coffee <strong>, and</strong> she likes tea.)",
    subordinating_before: "Subordinating conjunction + Dependent clause <strong>,</strong> + Main clause (<strong>When</strong> I arrived, the meeting started.)",
    subordinating_after: "Main clause + Subordinating conjunction + Dependent clause (The meeting started <strong>when</strong> I arrived.)",
    correlative: "<strong>Both</strong> X <strong>and</strong> Y / <strong>Either</strong> X <strong>or</strong> Y / <strong>Neither</strong> X <strong>nor</strong> Y",
  },
  commonMistakes: [
    { mistake: "I like coffee but I don't like tea.", fix: "I like coffee, but I don't like tea.", explanation: "When joining two independent clauses with a coordinating conjunction, use a comma before the conjunction." },
    { mistake: "Because I was tired. I went to bed early.", fix: "Because I was tired, I went to bed early. (or: I went to bed early because I was tired.)", explanation: "A dependent clause starting with 'because' cannot stand alone as a sentence. It must be attached to an independent clause." },
    { mistake: "Neither he called nor he came.", fix: "He neither called nor came.", explanation: "'Neither...nor' requires parallel structure. The elements after 'neither' and 'nor' must be the same grammatical type." },
    { mistake: "Although she was tired, but she kept working.", fix: "Although she was tired, she kept working. (or: She was tired, but she kept working.)", explanation: "Use EITHER 'although' OR 'but' — not both. They both indicate contrast; using them together is redundant." },
    { mistake: "She not only plays guitar but also piano.", fix: "She plays not only guitar but also piano.", explanation: "'Not only...but also' requires parallel structure. Both parts should be followed by the same type of element (here, nouns)." },
    { mistake: "I'll go unless it doesn't rain.", fix: "I'll go unless it rains. (or: I'll go if it doesn't rain.)", explanation: "'Unless' already contains a negative meaning ('if not'). Using 'unless' with 'not' creates a double negative." },
  ],
  notes: "The most common mistake with conjunctions is <strong>comma splices</strong> (joining two independent clauses with just a comma, without a coordinating conjunction). Example: <em>It is raining, I will stay home</em> ✗ → <em>It is raining, so I will stay home</em> ✓. Another common error is <strong>sentence fragments</strong> — starting a sentence with 'Because', 'Although', or 'When' without completing the thought. In formal writing, avoid starting sentences with 'And' or 'But'. The conjunction <strong>'for'</strong> is very formal and rarely used in everyday speech; 'because' is preferred. When using correlative conjunctions, maintaining parallel structure is essential for grammatical correctness.",
  examples20: [
    { text: "She bought apples <strong>and</strong> oranges at the market.", type: "coordinating", note: "'And' connects two nouns of equal grammatical weight." },
    { text: "I wanted to attend, <strong>but</strong> I had a prior engagement.", type: "coordinating", note: "'But' shows contrast between two independent clauses." },
    { text: "He didn't study, <strong>so</strong> he failed the exam.", type: "coordinating", note: "'So' indicates result or consequence." },
    { text: "Would you like to stay <strong>or</strong> leave?", type: "coordinating", note: "'Or' presents two alternatives." },
    { text: "She didn't call, <strong>nor</strong> did she send a message.", type: "coordinating", note: "'Nor' adds a negative element; note the inverted word order." },
    { text: "He is very rich, <strong>yet</strong> he lives simply.", type: "coordinating", note: "'Yet' shows strong contrast, similar to 'but'." },
    { text: "He stayed home, <strong>for</strong> he was feeling unwell.", type: "coordinating", note: "'For' gives a reason; very formal, often replaced by 'because'." },
    { text: "<strong>When</strong> I arrived, the meeting had already started.", type: "subordinating", note: "'When' introduces a time clause; comma after the dependent clause." },
    { text: "She stayed home <strong>because</strong> she was sick.", type: "subordinating", note: "'Because' introduces a reason; no comma when the dependent clause follows the main clause." },
    { text: "<strong>Although</strong> it was expensive, she bought the dress.", type: "subordinating", note: "'Although' shows contrast; the dependent clause comes first so a comma is used." },
    { text: "You will succeed <strong>if</strong> you work hard.", type: "subordinating", note: "'If' introduces a conditional clause." },
    { text: "She studied hard <strong>so that</strong> she could pass the exam.", type: "subordinating", note: "'So that' introduces a purpose clause." },
    { text: "He walks <strong>as if</strong> he owns the place.", type: "subordinating", note: "'As if' introduces a manner clause." },
    { text: "Put the keys <strong>where</strong> you can find them easily.", type: "subordinating", note: "'Where' introduces a place clause." },
    { text: "I'll go <strong>unless</strong> it rains.", type: "subordinating", note: "'Unless' means 'if not' — do NOT add 'not' after it." },
    { text: "She is <strong>both</strong> talented <strong>and</strong> hardworking.", type: "correlative", note: "'Both...and' connects two positive qualities with parallel structure." },
    { text: "You can choose <strong>either</strong> the blue one <strong>or</strong> the red one.", type: "correlative", note: "'Either...or' offers two choices; parallel structure required." },
    { text: "He is <strong>neither</strong> interested <strong>nor</strong> willing to help.", type: "correlative", note: "'Neither...nor' negates both options; parallel structure." },
    { text: "She <strong>not only</strong> speaks English <strong>but also</strong> French.", type: "correlative", note: "'Not only...but also' adds emphasis; ensure parallel structure after each part." },
    { text: "I'm unsure <strong>whether</strong> to go <strong>or</strong> stay.", type: "correlative", note: "'Whether...or' expresses uncertainty between two options." },
  ],
};

export const CONJUNCTION_EXERCISES = [
  { question: "Choose the correct sentence:", options: ["I like tea but I don't like coffee.", "I like tea, but I don't like coffee."], answer: 1, type: "coordinating" },
  { question: "Choose the correct sentence:", options: ["Because I was tired, I went to bed early.", "Because I was tired. I went to bed early."], answer: 0, type: "subordinating" },
  { question: "Complete: She is ___ intelligent ___ hardworking.", options: ["both...and", "either...or", "neither...nor"], answer: 0, type: "correlative" },
  { question: "Which is a coordinating conjunction?", options: ["because", "although", "but", "when"], answer: 2, type: "identify" },
  { question: "Complete: He didn't call, ___ did he write.", options: ["or", "nor", "so", "but"], answer: 1, type: "coordinating" },
  { question: "Choose the correct sentence:", options: ["Although she was tired, but she kept working.", "Although she was tired, she kept working."], answer: 1, type: "subordinating" },
  { question: "Which is a subordinating conjunction?", options: ["and", "but", "or", "although"], answer: 3, type: "identify" },
  { question: "Complete: You can have ___ coffee ___ tea.", options: ["both...and", "either...or", "neither...nor"], answer: 1, type: "correlative" },
  { question: "What does FANBOYS stand for?", options: ["Coordinating conjunctions", "Subordinating conjunctions", "Correlative conjunctions", "All conjunctions"], answer: 0, type: "definition" },
  { question: "Choose the correct sentence:", options: ["He not only plays guitar but also piano.", "He plays not only guitar but also piano."], answer: 1, type: "correlative" },
  { question: "Complete: She stayed home ___ she was sick.", options: ["because", "although", "unless", "while"], answer: 0, type: "subordinating" },
  { question: "Choose the correct sentence:", options: ["I'll go unless it doesn't rain.", "I'll go unless it rains."], answer: 1, type: "subordinating" },
  { question: "Complete: He is ___ rich ___ famous.", options: ["both...and", "neither...nor", "either...or"], answer: 1, type: "correlative" },
  { question: "Which conjunction shows contrast?", options: ["and", "so", "but", "for"], answer: 2, type: "meaning" },
  { question: "Complete: She studied hard ___ she could pass.", options: ["so that", "because", "although", "unless"], answer: 0, type: "purpose" },
  { question: "Choose the correct sentence:", options: ["I was tired. So I went to bed.", "I was tired, so I went to bed."], answer: 1, type: "coordinating" },
  { question: "Complete: You will pass ___ you study.", options: ["unless", "if", "although", "while"], answer: 1, type: "condition" },
  { question: "Choose the correct sentence:", options: ["She not only sings but also dances.", "She not only sings but also she dances."], answer: 0, type: "correlative" },
];

export default { CONJUNCTIONS_DATA, CONJUNCTION_EXERCISES };
