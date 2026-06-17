/* ═══════════════════════════════════════════
   CEFR ANAGRAM DATA
   8 questions per level (A1–C1)
   type: 'anagram'    → scramble letters of a word
   type: 'unscramble' → scramble words of a sentence
   ═══════════════════════════════════════════ */

export const CEFR_DATA = {
  A1: {
    label: 'Beginner', emoji: '🌱', color: '#4ade80', glow: 'rgba(74,222,128,.4)', bg: 'rgba(74,222,128,.12)', emo: '🟢',
    desc: 'Letters & basic sentences',
    types: ['Word Anagram', 'Sentence Unscramble'],
    canDo: ['Name everyday objects in English', 'Introduce yourself and say where you are from', 'Build very simple present-tense sentences', 'Understand basic word order: Subject + Verb + Object'],
    questions: [
      { t: 'anagram', word: 'APPLE', hint: '🍎 A common red or green fruit' },
      { t: 'anagram', word: 'TABLE', hint: '🪑 Furniture you eat meals at' },
      { t: 'anagram', word: 'WATER', hint: '💧 A liquid you drink every day' },
      { t: 'anagram', word: 'CHAIR', hint: '🪑 You sit on this' },
      { t: 'unscramble', sent: 'I am from Spain', grammar: 'Subject + verb to be + origin' },
      { t: 'unscramble', sent: 'She has a dog', grammar: 'Subject + have/has + article + noun' },
      { t: 'unscramble', sent: 'He goes to school', grammar: 'He/She/It + verb-s in Present Simple' },
      { t: 'unscramble', sent: 'We eat dinner at home', grammar: 'Subject + verb + object + place' },
    ]
  },
  A2: {
    label: 'Elementary', emoji: '🌿', color: '#22d3ee', glow: 'rgba(34,211,238,.4)', bg: 'rgba(34,211,238,.12)', emo: '🔵',
    desc: 'Daily life & past tense',
    types: ['Word Anagram', 'Sentence Unscramble'],
    canDo: ['Describe your daily routine and past events', 'Use Past Simple with regular and irregular verbs', 'Make comparisons with adjectives', 'Ask and answer questions about everyday topics'],
    questions: [
      { t: 'anagram', word: 'MARKET', hint: '🛒 A place where you buy food and things' },
      { t: 'anagram', word: 'GARDEN', hint: '🌻 An outdoor space with plants and flowers' },
      { t: 'anagram', word: 'WINTER', hint: '❄️ The coldest season of the year' },
      { t: 'anagram', word: 'TRAVEL', hint: '✈️ To go from one place to another' },
      { t: 'unscramble', sent: 'Yesterday I went to the park', grammar: 'Past Simple: went = irregular past of go' },
      { t: 'unscramble', sent: 'She is taller than her sister', grammar: 'Comparative: adjective + -er + than' },
      { t: 'unscramble', sent: 'Did you enjoy the film last night', grammar: 'Past Simple question: Did + subject + base verb' },
      { t: 'unscramble', sent: 'I have never been to Paris', grammar: 'Present Perfect + never for life experiences' },
    ]
  },
  B1: {
    label: 'Intermediate', emoji: '🌲', color: '#818cf8', glow: 'rgba(129,140,248,.4)', bg: 'rgba(129,140,248,.12)', emo: '🟣',
    desc: 'Opinions, plans & narratives',
    types: ['Word Anagram', 'Sentence Unscramble'],
    canDo: ['Express opinions and explain reasons', 'Use reported speech and gerunds', 'Use the first conditional for real possibilities', 'Talk about completed past actions with Past Perfect'],
    questions: [
      { t: 'anagram', word: 'JOURNEY', hint: '🗺️ A long trip from one place to another' },
      { t: 'anagram', word: 'PROMISE', hint: '🤝 A commitment you make to someone' },
      { t: 'anagram', word: 'CULTURE', hint: '🎭 The customs and traditions of a society' },
      { t: 'anagram', word: 'PARTNER', hint: '🫂 Someone you work or live with' },
      { t: 'unscramble', sent: 'If it rains we will stay at home', grammar: '1st conditional: If + present → will + base verb' },
      { t: 'unscramble', sent: 'She suggested going to the cinema', grammar: 'suggest + verb-ing (gerund)' },
      { t: 'unscramble', sent: 'When I arrived they had already left', grammar: 'Past Perfect for action before another past action' },
      { t: 'unscramble', sent: 'He told me that he was tired', grammar: 'Reported speech: am → was (backshift)' },
    ]
  },
  B2: {
    label: 'Upper-Intermediate', emoji: '🌳', color: '#fb923c', glow: 'rgba(251,146,60,.4)', bg: 'rgba(251,146,60,.12)', emo: '🟠',
    desc: 'Complex grammar & emphasis',
    types: ['Word Anagram', 'Sentence Unscramble'],
    canDo: ['Use inversion for emphasis', 'Discuss hypothetical situations with 2nd & 3rd conditionals', 'Use discourse markers to connect ideas', 'Recognise common errors with prepositions and conjunctions'],
    questions: [
      { t: 'anagram', word: 'SOLUTION', hint: '💡 An answer or way to solve a problem' },
      { t: 'anagram', word: 'PERSUADE', hint: '🗣️ To convince someone to do something' },
      { t: 'anagram', word: 'GRATEFUL', hint: '🙏 Feeling thankful for something received' },
      { t: 'anagram', word: 'ORIGINAL', hint: '🎨 New and not copied from something else' },
      { t: 'unscramble', sent: 'If I were rich I would travel the world', grammar: '2nd conditional: If + past simple → would + base verb' },
      { t: 'unscramble', sent: 'Not only does she speak English but also French', grammar: 'Inversion after Not only: aux + subject' },
      { t: 'unscramble', sent: 'Despite the rain we decided to go out', grammar: 'Despite + noun phrase (not despite of)' },
      { t: 'unscramble', sent: 'Had he studied harder he would have passed', grammar: 'Inverted 3rd conditional: Had + pp → would have + pp' },
    ]
  },
  C1: {
    label: 'Advanced', emoji: '🏔️', color: '#f472b6', glow: 'rgba(244,114,182,.4)', bg: 'rgba(244,114,182,.12)', emo: '🌸',
    desc: 'Academic language & subtle structures',
    types: ['Word Anagram', 'Sentence Unscramble'],
    canDo: ['Use fronted negative adverbials with inversion', 'Distinguish formal and informal register', 'Apply the subjunctive in formal recommendations', 'Understand and use hedging language in academic writing'],
    questions: [
      { t: 'anagram', word: 'ELOQUENT', hint: '🎤 Speaking in a fluent and persuasive way' },
      { t: 'anagram', word: 'AMBIGUOUS', hint: '🔍 Open to more than one interpretation' },
      { t: 'anagram', word: 'TOLERANCE', hint: '🤲 Accepting differences in others' },
      { t: 'anagram', word: 'BRILLIANT', hint: '💫 Exceptionally clever or talented' },
      { t: 'unscramble', sent: 'Not until she arrived did we realise the mistake', grammar: 'Fronted negative + inversion: did + subject + verb' },
      { t: 'unscramble', sent: 'It was suggested that he submit the report immediately', grammar: 'Passive + subjunctive: that + subject + base verb' },
      { t: 'unscramble', sent: 'Under no circumstances should this information be shared', grammar: 'Fronted negative adverbial + modal inversion + passive' },
      { t: 'unscramble', sent: 'No sooner had she left than it started to rain', grammar: 'No sooner had + pp… than + past simple' },
    ]
  },
};

export const CEFR_LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1'];
