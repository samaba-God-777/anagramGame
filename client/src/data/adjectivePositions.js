// adjectivePositions.js — ADJECTIVE_POSITIONS, ADJECTIVE_POSITION_EXERCISES

export const ADJECTIVE_POSITIONS = {
  description: "Adjectives are words that describe or modify nouns. In English, adjectives can appear in three main positions: <strong>attributive</strong> (before the noun), <strong>predicative</strong> (after a linking verb), and <strong>postpositive</strong> (immediately after the noun). When multiple adjectives modify the same noun, they follow a strict order known as <strong>OSASCOMP</strong>.",
  usage: [
    {
      title: "Attributive Position (Before the Noun)",
      text: "The adjective is placed directly before the noun it modifies. This is the most common and default position for adjectives in English. When an adjective is in attributive position, it forms part of the noun phrase and usually cannot be removed without changing the meaning.",
      example: "a <strong>beautiful</strong> house\nThe <strong>old</strong> man\n<strong>red</strong> roses\nan <strong>interesting</strong> book\n<strong>cold</strong> weather\n<strong>fresh</strong> bread",
      details: "Attributive adjectives can be:<br><br>• <strong>Single words:</strong> a <em>tall</em> building, <em>blue</em> sky<br>• <strong>Compound adjectives:</strong> a <em>well-known</em> author, a <em>ten-year-old</em> girl<br>• <strong>In fixed order:</strong> they MUST follow OSASCOMP when multiple"
    },
    {
      title: "Predicative Position (After Linking Verbs)",
      text: "The adjective follows a linking verb and describes the subject of the sentence. Linking verbs connect the subject to the adjective that describes or identifies it. The adjective gives information about the subject's state, condition, or quality.",
      example: "She is <strong>happy</strong>.\nHe became <strong>rich</strong>.\nThe food smells <strong>delicious</strong>.\nI feel <strong>tired</strong>.\nShe looks <strong>beautiful</strong>.\nThe soup tastes <strong>salty</strong>.",
      details: "Common linking verbs: <strong>be</strong> (am/is/are/was/were), <strong>become</strong>, <strong>seem</strong>, <strong>appear</strong>, <strong>feel</strong>, <strong>look</strong>, <strong>sound</strong>, <strong>taste</strong>, <strong>smell</strong>, <strong>remain</strong>, <strong>stay</strong>, <strong>grow</strong>, <strong>turn</strong>, <strong>get</strong>, <strong>prove</strong>"
    },
    {
      title: "Postpositive Position (After the Noun)",
      text: "The adjective is placed immediately after the noun it modifies. This position is less common in English but is required in specific situations. It is used with compound indefinite pronouns, in certain fixed expressions, and with some adjectives like 'present', 'involved', 'concerned', and 'proper'.",
      example: "something <strong>important</strong>\nthe people <strong>present</strong>\nthe only solution <strong>possible</strong>\nthe President <strong>elect</strong>\nnobody <strong>interested</strong>\nthe students <strong>involved</strong>",
      details: "Postpositive position is used with:<br><br>• <strong>Indefinite compounds:</strong> something/anything/nothing <em>special</em>, someone <em>important</em><br>• <strong>Certain adjectives:</strong> present, involved, concerned, proper, elect, galore<br>• <strong>Fixed expressions:</strong> court <em>martial</em>, heir <em>apparent</em>, attorney <em>general</em><br>• <strong>With 'enough':</strong> big <em>enough</em>, fast <em>enough</em>"
    },
    {
      title: "Order of Multiple Adjectives (OSASCOMP)",
      text: "When two or more adjectives modify the same noun, they MUST follow a specific order. Native speakers instinctively know this order, but for learners it must be memorized. The order is: <strong>O</strong>pinion → <strong>S</strong>ize → <strong>A</strong>ge → <strong>S</strong>hape → <strong>C</strong>olor → <strong>O</strong>rigin → <strong>M</strong>aterial → <strong>P</strong>urpose → Noun.",
      example: "a <strong>beautiful big old square red Chinese wooden</strong> table\n(O) (S) (A) (S) (C) (O) (M)",
      details: "Using adjectives in the wrong order is one of the most obvious signs of a non-native speaker."
    },
  ],
  osascomp: {
    title: "OSASCOMP — The Complete Adjective Order",
    categories: [
      { letter: "O", name: "Opinion", description: "General opinion (beautiful, ugly, nice, lovely, terrible, wonderful, amazing)", examples: "a <strong>lovely</strong> day, a <strong>terrible</strong> mistake, an <strong>amazing</strong> view" },
      { letter: "S", name: "Size", description: "How big or small (big, small, huge, tiny, large, little, enormous, massive)", examples: "a <strong>huge</strong> house, a <strong>tiny</strong> insect, a <strong>large</strong> garden" },
      { letter: "A", name: "Age", description: "How old or new (old, young, new, ancient, modern, recent, antique)", examples: "an <strong>old</strong> book, a <strong>modern</strong> building, an <strong>ancient</strong> temple" },
      { letter: "S", name: "Shape", description: "The physical form or shape (round, square, flat, long, short, oval, triangular)", examples: "a <strong>round</strong> table, a <strong>square</strong> box, a <strong>flat</strong> surface" },
      { letter: "C", name: "Color", description: "The color (red, blue, green, white, black, yellow, dark, light)", examples: "a <strong>red</strong> car, <strong>blue</strong> eyes, a <strong>white</strong> shirt" },
      { letter: "O", name: "Origin", description: "Where something is from (American, Chinese, Italian, French, Japanese, British)", examples: "an <strong>Italian</strong> suit, <strong>Chinese</strong> food, <strong>French</strong> wine" },
      { letter: "M", name: "Material", description: "What something is made of (wooden, metal, silk, cotton, plastic, leather, wool)", examples: "a <strong>wooden</strong> chair, a <strong>silk</strong> dress, a <strong>leather</strong> wallet" },
      { letter: "P", name: "Purpose", description: "What something is used for (sleeping, cooking, walking, running, gardening)", examples: "a <strong>sleeping</strong> bag, <strong>running</strong> shoes, a <strong>gardening</strong> tool" },
    ]
  },
  attributiveOnly: {
    title: "Adjectives Used ONLY in Attributive Position",
    list: ["main", "principal", "mere", "sheer", "utter", "very", "former", "latter", "inner", "outer", "upper", "elder", "eldest", "only", "sole", "chief", "major"],
    note: "These adjectives CANNOT be used after linking verbs. You CANNOT say 'The reason is main' or 'She is former'. They ONLY work before a noun."
  },
  predicativeOnly: {
    title: "Adjectives Used ONLY in Predicative Position",
    list: ["alive", "asleep", "awake", "alone", "afraid", "aboard", "ashamed", "content", "glad", "ill", "well", "sure", "sorry", "unable", "alike", "alight", "adrift"],
    note: "These adjectives CANNOT be used before a noun. You CANNOT say 'an asleep baby' or 'an alive animal'. They ONLY work after linking verbs."
  },
  meaningChange: {
    title: "Adjectives That Change Meaning by Position",
    items: [
      { adjective: "present", attributive: "current or modern (present situation)", predicative: "being in a place (Everyone was present)" },
      { adjective: "concerned", attributive: "worried (a concerned mother)", postpositive: "involved (the people concerned)" },
      { adjective: "involved", attributive: "complicated (an involved process)", postpositive: "participating (the students involved)" },
      { adjective: "proper", attributive: "correct or appropriate (proper behavior)", postpositive: "strictly defined (the city proper)" },
      { adjective: "responsible", attributive: "trustworthy (a responsible person)", postpositive: "being the cause (the driver responsible)" },
    ]
  },
  structure: {
    attributive: "<strong>Adjective + Noun</strong> — a <em>tall</em> building, <em>red</em> roses",
    predicative: "<strong>Linking verb + Adjective</strong> — She is <em>tall</em>, He became <em>rich</em>",
    postpositive: "<strong>Noun + Adjective</strong> — something <em>special</em>, the people <em>present</em>",
    order: "<strong>O</strong>pinion → <strong>S</strong>ize → <strong>A</strong>ge → <strong>S</strong>hape → <strong>C</strong>olor → <strong>O</strong>rigin → <strong>M</strong>aterial → <strong>P</strong>urpose → <strong>Noun</strong>"
  },
  commonMistakes: [
    { mistake: "a car red", fix: "a red car", explanation: "In English, adjectives almost always come BEFORE the noun (attributive position), NOT after as in some other languages (Spanish, French, Arabic)." },
    { mistake: "a Chinese beautiful vase", fix: "a beautiful Chinese vase", explanation: "Opinion (beautiful) ALWAYS comes before origin (Chinese). Memorize OSASCOMP: Opinion → Size → Age → Shape → Color → Origin → Material → Purpose." },
    { mistake: "I am boring in this class.", fix: "I am bored in this class.", explanation: "Use the -ed form (bored) for how you FEEL. Use the -ing form (boring) to describe the thing that CAUSES the feeling. The class is boring, so I am bored." },
    { mistake: "the present people (meaning 'the people here')", fix: "the people present", explanation: "The adjective 'present' meaning 'in this location' ALWAYS goes after the noun (postpositive position). Before the noun, 'present' means 'current'." },
    { mistake: "a big red old car", fix: "a big old red car", explanation: "Size (big) comes before Age (old), which comes before Color (red). Correct OSASCOMP order: opinion → size → age → shape → color → origin → material → purpose." },
    { mistake: "She is main in the project.", fix: "She is the main person in the project.", explanation: "'Main' is an attributive-only adjective — it can ONLY be used before a noun. You cannot say 'The reason is main'." },
    { mistake: "an asleep baby", fix: "a sleeping baby (or: The baby is asleep)", explanation: "'Asleep' is a predicative-only adjective — it can ONLY be used after a linking verb. 'The baby is asleep' is correct, but not 'an asleep baby'." },
  ],
  notes: "The <strong>OSASCOMP</strong> order is a guideline, not a rigid rule. Native speakers rarely use more than 2-3 adjectives before a noun in natural speech. When using multiple adjectives from the SAME category (e.g., two opinions), separate them with a comma: a <em>beautiful, charming</em> woman. Adjectives of size and shape often overlap (e.g., 'big' can be size or shape depending on context). For describing physical appearance, the order is typically: opinion → size → age → shape → color. The words <strong>enough</strong> and <strong>too</strong> always come AFTER the adjective: 'big enough', 'too hot' (not 'enough big').",

  edVsIng: {
    title: "Participial Adjectives: -ed vs -ing",
    text: "Many adjectives come from verbs and end in -ed or -ing. The distinction is crucial: <strong>-ed</strong> adjectives describe how a person FEELS (the result of an experience), while <strong>-ing</strong> adjectives describe the thing or person that CAUSES the feeling. This distinction is directly related to adjective position because many -ed adjectives are restricted to predicative position (you cannot say 'an excited party' if you mean 'the party causes excitement').",
    pairs: [
      { ed: "bored", ing: "boring", edEx: "I am bored at work.", ingEx: "This movie is boring." },
      { ed: "excited", ing: "exciting", edEx: "The children are excited.", ingEx: "The game was exciting." },
      { ed: "interested", ing: "interesting", edEx: "She is interested in art.", ingEx: "The lecture is interesting." },
      { ed: "tired", ing: "tiring", edEx: "I feel tired after work.", ingEx: "The job is very tiring." },
      { ed: "surprised", ing: "surprising", edEx: "I was surprised by the news.", ingEx: "The result was surprising." },
      { ed: "frightened", ing: "frightening", edEx: "The child was frightened.", ingEx: "The noise was frightening." },
      { ed: "confused", ing: "confusing", edEx: "The students were confused.", ingEx: "The instructions were confusing." },
      { ed: "disappointed", ing: "disappointing", edEx: "She was disappointed.", ingEx: "The score was disappointing." },
      { ed: "annoyed", ing: "annoying", edEx: "He is annoyed with me.", ingEx: "The delay was annoying." },
      { ed: "embarrassed", ing: "embarrassing", edEx: "I felt embarrassed.", ingEx: "It was an embarrassing moment." },
    ]
  },

  cumulativeCoordinate: {
    title: "Cumulative vs Coordinate Adjectives",
    text: "When two or more adjectives come from the <strong>same category</strong> (e.g., two opinions), they are called <strong>coordinate adjectives</strong> and must be separated by a comma or 'and'. When they come from <strong>different categories</strong> (e.g., opinion + color), they are <strong>cumulative adjectives</strong> and do NOT take a comma. A simple test: if you can reverse the order and add 'and', they are coordinate. If you cannot, they are cumulative.",
    examples: {
      coordinate: "a <strong>beautiful, charming</strong> woman (both opinion — can say 'a charming, beautiful woman' or 'a beautiful and charming woman')",
      cumulative: "a <strong>beautiful red</strong> dress (opinion + color — CANNOT say 'a red beautiful dress')",
    }
  },

  substantiveAdjectives: {
    title: "Substantive Adjectives (The + Adjective as Noun)",
    text: "Some adjectives can function as nouns when preceded by <strong>the</strong>. This structure refers to a group of people sharing that characteristic. These substantive adjectives are always plural in meaning but take singular verb agreement when referring to a concept. They are ALWAYS used in attributive-like position (after 'the' and before an implied noun).",
    list: [
      { phrase: "the rich", meaning: "rich people as a group", example: "The rich must help the poor." },
      { phrase: "the poor", meaning: "poor people", example: "The poor suffer most in a crisis." },
      { phrase: "the elderly", meaning: "elderly people", example: "The elderly need special care." },
      { phrase: "the young", meaning: "young people", example: "The young are full of energy." },
      { phrase: "the unemployed", meaning: "unemployed people", example: "The unemployed are looking for work." },
      { phrase: "the homeless", meaning: "homeless people", example: "The homeless need shelter." },
      { phrase: "the disabled", meaning: "disabled people", example: "The disabled have equal rights." },
      { phrase: "the blind", meaning: "blind people", example: "The blind rely on guide dogs." },
      { phrase: "the impossible", meaning: "impossible things", example: "She achieved the impossible." },
      { phrase: "the unknown", meaning: "unknown things", example: "We fear the unknown." },
    ]
  },

  examples20: [
    { text: "The <strong>tall</strong> building stands in the city center.", position: "attributive", note: "Single adjective before the noun." },
    { text: "She wore a <strong>beautiful long red silk</strong> dress.", position: "attributive (OSASCOMP)", note: "Opinion (beautiful) → Size (long) → Color (red) → Material (silk) → Noun." },
    { text: "The <strong>old</strong> man walked <strong>slowly</strong>.", position: "attributive", note: "'Old' is attributive; 'slowly' is an adverb, not an adjective." },
    { text: "He bought a <strong>fascinating</strong> book about history.", position: "attributive", note: "Opinion adjective (fascinating) before the noun." },
    { text: "They live in a <strong>small wooden</strong> cabin.", position: "attributive (OSASCOMP)", note: "Size (small) → Material (wooden) → Noun." },
    { text: "The soup smells <strong>delicious</strong>.", position: "predicative", note: "After linking verb 'smells', describing the subject." },
    { text: "She became <strong>famous</strong> after her first novel.", position: "predicative", note: "After linking verb 'became'." },
    { text: "I feel <strong>tired</strong> after the long journey.", position: "predicative", note: "-ed adjective after linking verb 'feel'." },
    { text: "The children seem <strong>happy</strong> today.", position: "predicative", note: "After linking verb 'seem'." },
    { text: "The milk turned <strong>sour</strong> overnight.", position: "predicative", note: "After linking verb 'turned'." },
    { text: "She looks <strong>beautiful</strong> in that dress.", position: "predicative", note: "After linking verb 'looks'." },
    { text: "The idea sounds <strong>interesting</strong>.", position: "predicative", note: "-ing adjective after linking verb 'sounds'." },
    { text: "The baby remained <strong>asleep</strong> all night.", position: "predicative (only)", note: "'Asleep' can ONLY be predicative, never before a noun." },
    { text: "I need something <strong>special</strong> for the party.", position: "postpositive", note: "After indefinite pronoun 'something'." },
    { text: "The only solution <strong>possible</strong> is to wait.", position: "postpositive", note: "Adjective 'possible' after the noun in fixed expression." },
    { text: "The people <strong>present</strong> voted unanimously.", position: "postpositive", note: "'Present' (meaning 'here') goes after the noun." },
    { text: "There is nothing <strong>interesting</strong> on TV.", position: "postpositive", note: "After indefinite pronoun 'nothing'." },
    { text: "He is the President <strong>elect</strong>.", position: "postpositive", note: "Fixed expression: title + 'elect'." },
    { text: "The students <strong>involved</strong> will be praised.", position: "postpositive", note: "'Involved' (participating) goes after the noun." },
    { text: "Bring everyone <strong>concerned</strong> to the meeting.", position: "postpositive", note: "'Concerned' (involved) goes after the noun, not before." },
  ],
};

export const ADJECTIVE_POSITION_EXERCISES = [
  { question: "Choose the correct sentence:", options: ["a car red", "a red car"], answer: 1, type: "position" },
  { question: "Complete: She is ___ (feelings).", options: ["boring", "bored"], answer: 1, type: "ed-ing" },
  { question: "Choose the correct order: a ___ table.", options: ["wooden big round", "big round wooden", "round big wooden"], answer: 1, type: "order" },
  { question: "Complete: I need something ___.", options: ["important", "importantly", "importance"], answer: 0, type: "postpositive" },
  { question: "Choose the correct order: a ___ vase.", options: ["Chinese beautiful", "beautiful Chinese"], answer: 1, type: "order" },
  { question: "The adjective in 'a tall building' is in ___ position.", options: ["attributive", "predicative", "postpositive"], answer: 0, type: "position" },
  { question: "The adjective in 'She is happy' is in ___ position.", options: ["attributive", "predicative", "postpositive"], answer: 1, type: "position" },
  { question: "Correct order: a ___ jacket.", options: ["new leather black", "leather black new", "new black leather"], answer: 2, type: "order" },
  { question: "Which adjective goes AFTER the noun?", options: ["present (as in 'here')", "beautiful", "interesting", "tall"], answer: 0, type: "position" },
  { question: "Correct order: a ___ house.", options: ["lovely old stone", "old lovely stone", "stone old lovely"], answer: 0, type: "order" },
  { question: "Which can only be used predicatively?", options: ["main", "asleep", "former", "mere"], answer: 1, type: "restriction" },
  { question: "She looks ___.", options: ["beautifully", "beautiful"], answer: 1, type: "predicative" },
  { question: "Correct order: ___ eyes.", options: ["blue big", "big blue"], answer: 1, type: "order" },
  { question: "The adjective in 'the people present' is in ___ position.", options: ["attributive", "predicative", "postpositive"], answer: 2, type: "position" },
  { question: "Correct order: a ___ sweater.", options: ["Italian cotton", "cotton Italian"], answer: 0, type: "order" },
  { question: "I feel ___.", options: ["happily", "happy"], answer: 1, type: "predicative" },
  { question: "Correct order: a ___ car.", options: ["fast red sports", "red fast sports", "sports red fast"], answer: 0, type: "order" },
  { question: "The food tastes ___.", options: ["deliciously", "delicious"], answer: 1, type: "predicative" },
];

export default { ADJECTIVE_POSITIONS, ADJECTIVE_POSITION_EXERCISES };
