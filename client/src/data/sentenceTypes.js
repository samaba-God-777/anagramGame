/* ═══════════════════════════════════════════
   SENTENCE TYPES MODULE
   Simple, Compound, Complex, Compound-Complex
   ═══════════════════════════════════════════ */

export const SENTENCE_TYPES = {
  simple: {
    title: "Simple Sentences",
    icon: "📝",
    color: "#3b82f6",
    definition: "A simple sentence contains one independent clause (one subject + one predicate). It expresses a single complete thought.",
    structure: "Subject + Verb + (Object/Complement)",
    rules: [
      "Must have at least one subject and one verb",
      "Can have compound subjects (<em>'Tom and Jerry play together.'</em>)",
      "Can have compound verbs (<em>'She sings and dances.'</em>)",
      "Must express a complete thought",
    ],
    examples: [
      { en: "The cat sleeps.", es: "El gato duerme.", type: "S + V" },
      { en: "She reads books.", es: "Ella lee libros.", type: "S + V + O" },
      { en: "He is a teacher.", es: "Él es profesor.", type: "S + V + C" },
      { en: "Tom and Jerry play together.", es: "Tom y Jerry juegan juntos.", type: "Compound Subject" },
      { en: "She sings and dances.", es: "Ella canta y baila.", type: "Compound Verb" },
    ],
    signalWords: [],
    tips: [
      "Simple sentences can be short or long — length doesn't matter, only structure",
      "A simple sentence can have adjectives, adverbs, and prepositional phrases",
      "Don't confuse 'simple' with 'short'",
    ],
  },

  compound: {
    title: "Compound Sentences",
    icon: "🔗",
    color: "#10b981",
    definition: "A compound sentence contains two or more independent clauses joined by a coordinating conjunction (FANBOYS) or a semicolon.",
    structure: "Independent Clause + FANBOYS + Independent Clause",
    rules: [
      "Each clause can stand alone as a sentence",
      "Join with: <strong>For, And, Nor, But, Or, Yet, So</strong> (FANBOYS)",
      "Use a comma before the conjunction",
      "Can also join with semicolon (;) without a conjunction",
    ],
    examples: [
      { en: "I like coffee, but she prefers tea.", es: "Me gusta el café, pero ella prefiere el té.", type: "FANBOYS (but)" },
      { en: "She studied hard, so she passed the exam.", es: "Ella estudió mucho, así que pasó el examen.", type: "FANBOYS (so)" },
      { en: "It was raining; we stayed inside.", es: "Estaba lloviendo; nos quedamos dentro.", type: "Semicolon" },
      { en: "You can have coffee or tea.", es: "Puedes tomar café o té.", type: "FANBOYS (or)" },
      { en: "He was tired, yet he kept working.", es: "Estaba cansado, sin embargo siguió trabajando.", type: "FANBOYS (yet)" },
    ],
    signalWords: ["and", "but", "or", "so", "yet", "for", "nor", ";"],
    tips: [
      "FANBOYS = For, And, Nor, But, Or, Yet, So",
      "Don't use a comma without a conjunction (that creates a comma splice)",
      "A semicolon (;) can replace a comma + conjunction",
    ],
  },

  complex: {
    title: "Complex Sentences",
    icon: "🧩",
    color: "#8b5cf6",
    definition: "A complex sentence contains one independent clause and at least one dependent clause (subordinate clause).",
    structure: "Independent Clause + Dependent Clause (or vice versa)",
    rules: [
      "Dependent clause cannot stand alone",
      "Use subordinating conjunctions: <em>because, although, when, if, since, while, after, before, unless, until</em>",
      "If the dependent clause comes first, use a comma",
      "If the independent clause comes first, no comma needed",
    ],
    examples: [
      { en: "Although it was raining, we went out.", es: "Aunque llovía, salimos.", type: "Adverb clause (although)" },
      { en: "I will call you when I arrive.", es: "Te llamaré cuando llegue.", type: "Adverb clause (when)" },
      { en: "Because she was tired, she went to bed early.", es: "Porque estaba cansada, se acostó temprano.", type: "Adverb clause (because)" },
      { en: "The book that I bought is interesting.", es: "El libro que compré es interesante.", type: "Adjective clause (that)" },
      { en: "I don't know what he wants.", es: "No sé qué quiere él.", type: "Noun clause (what)" },
    ],
    signalWords: ["because", "although", "when", "if", "since", "while", "after", "before", "unless", "until", "that", "which", "who"],
    tips: [
      "Dependent clause + comma + Independent clause",
      "Independent clause + no comma + Dependent clause",
      "Common mistake: Don't use a comma when the dependent clause comes second",
    ],
  },

  compoundComplex: {
    title: "Compound-Complex Sentences",
    icon: "🏰",
    color: "#f59e0b",
    definition: "A compound-complex sentence contains two or more independent clauses AND at least one dependent clause.",
    structure: "Independent Clause + Dependent Clause + FANBOYS + Independent Clause",
    rules: [
      "Combines rules of compound and complex sentences",
      "At least 2 independent clauses + 1 dependent clause",
      "Can be long and complex — use carefully",
      "Common in academic and formal writing",
    ],
    examples: [
      { en: "Although it was raining, we went out, and we had a great time.", es: "Aunque llovía, salimos, y la pasamos muy bien.", type: "Dependent + 2 Independent" },
      { en: "She studied hard because she wanted to pass, so she got an A.", es: "Ella estudió mucho porque quería aprobar, así que sacó una A.", type: "Complex + Compound" },
      { en: "The movie was good, but I fell asleep because I was tired.", es: "La película fue buena, pero me dormí porque estaba cansado.", type: "Compound + Dependent" },
      { en: "When I arrived, she had already left, so I waited.", es: "Cuando llegué, ella ya se había ido, así que esperé.", type: "Dependent + Past Perfect + Simple" },
    ],
    signalWords: ["because", "although", "when", "if", "and", "but", "so", "yet"],
    tips: [
      "Break long sentences into shorter ones for clarity",
      "Use this structure sparingly in formal writing",
      "Read aloud to check if the sentence is clear",
    ],
  },
};

export default SENTENCE_TYPES;
