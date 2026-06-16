// phrasalVerbs.js — PHRASAL_VERBS_DATA, PHRASAL_VERB_EXERCISES

export const PHRASAL_VERBS_DATA = {
  description: "Phrasal verbs are multi-word verbs consisting of a main verb + one or more particles (prepositions or adverbs). The particle changes the meaning of the main verb, often in non-literal ways. Phrasal verbs are extremely common in English, especially in spoken and informal contexts.",
  separable: {
    title: "Separable Phrasal Verbs",
    text: "In separable phrasal verbs, the object can go between the verb and the particle OR after the particle. When the object is a pronoun (it, them, him, her), it MUST go between the verb and particle.",
    items: [
      { phrasal: "turn off", meaning: "apagar / detener", example: "Please <strong>turn off</strong> the light. / Please <strong>turn</strong> the light <strong>off</strong>. / Please <strong>turn it off</strong>." },
      { phrasal: "pick up", meaning: "recoger / levantar", example: "She <strong>picked up</strong> the book. / She <strong>picked</strong> the book <strong>up</strong>. / She <strong>picked it up</strong>." },
      { phrasal: "put on", meaning: "ponerse (ropa)", example: "He <strong>put on</strong> his jacket. / He <strong>put</strong> his jacket <strong>on</strong>. / He <strong>put it on</strong>." },
      { phrasal: "take off", meaning: "quitarse / despegar", example: "She <strong>took off</strong> her shoes. / She <strong>took</strong> her shoes <strong>off</strong>. / She <strong>took them off</strong>." },
      { phrasal: "throw away", meaning: "tirar / desechar", example: "Don't <strong>throw away</strong> the receipt. / Don't <strong>throw</strong> the receipt <strong>away</strong>. / Don't <strong>throw it away</strong>." },
      { phrasal: "give back", meaning: "devolver", example: "Please <strong>give back</strong> my book. / Please <strong>give</strong> my book <strong>back</strong>. / Please <strong>give it back</strong>." },
      { phrasal: "call back", meaning: "volver a llamar", example: "I'll <strong>call back</strong> you later. / I'll <strong>call</strong> you <strong>back</strong>." },
      { phrasal: "fill out", meaning: "llenar (formulario)", example: "Please <strong>fill out</strong> this form. / Please <strong>fill</strong> this form <strong>out</strong>. / Please <strong>fill it out</strong>." },
    ]
  },
  inseparable: {
    title: "Inseparable Phrasal Verbs",
    text: "In inseparable phrasal verbs, the object MUST come after the particle. The verb and particle cannot be separated.",
    items: [
      { phrasal: "look after", meaning: "cuidar de", example: "She <strong>looks after</strong> her grandmother." },
      { phrasal: "run into", meaning: "encontrarse con / toparse", example: "I <strong>ran into</strong> an old friend yesterday." },
      { phrasal: "get over", meaning: "superar / recuperarse", example: "It took months to <strong>get over</strong> the illness." },
      { phrasal: "look for", meaning: "buscar", example: "What are you <strong>looking for</strong>?" },
      { phrasal: "deal with", meaning: "lidiar con / tratar", example: "I need to <strong>deal with</strong> this problem." },
      { phrasal: "count on", meaning: "contar con", example: "You can always <strong>count on</strong> me." },
      { phrasal: "come across", meaning: "encontrar por casualidad", example: "I <strong>came across</strong> an interesting article." },
      { phrasal: "get along with", meaning: "llevarse bien con", example: "She <strong>gets along with</strong> everyone." },
    ]
  },
  intransitive: {
    title: "Intransitive Phrasal Verbs (No Object)",
    text: "These phrasal verbs do not take an object. The verb + particle forms a complete meaning on its own.",
    items: [
      { phrasal: "grow up", meaning: "crecer", example: "I <strong>grew up</strong> in a small town." },
      { phrasal: "show up", meaning: "aparecer / presentarse", example: "He didn't <strong>show up</strong> to the meeting." },
      { phrasal: "wake up", meaning: "despertarse", example: "I <strong>wake up</strong> at 7 every morning." },
      { phrasal: "break down", meaning: "averiarse", example: "My car <strong>broke down</strong> on the highway." },
      { phrasal: "give up", meaning: "rendirse / dejar", example: "Never <strong>give up</strong> on your dreams." },
      { phrasal: "go on", meaning: "continuar / suceder", example: "Please <strong>go on</strong> with your story." },
    ]
  },
  threeWord: {
    title: "Three-Word Phrasal Verbs",
    text: "These consist of a verb + particle + particle. The object always comes after the second particle.",
    items: [
      { phrasal: "put up with", meaning: "tolerar / aguantar", example: "I can't <strong>put up with</strong> this noise anymore." },
      { phrasal: "look forward to", meaning: "esperar con ansias", example: "I <strong>look forward to</strong> meeting you." },
      { phrasal: "come up with", meaning: "idear / pensar en", example: "She <strong>came up with</strong> a brilliant idea." },
      { phrasal: "run out of", meaning: "quedarse sin", example: "We've <strong>run out of</strong> milk." },
      { phrasal: "get rid of", meaning: "deshacerse de", example: "I need to <strong>get rid of</strong> old furniture." },
      { phrasal: "catch up with", meaning: "ponerse al día con", example: "Let's <strong>catch up with</strong> each other soon." },
    ]
  },
  structure: {
    separable: "Verb + Object + Particle &nbsp;OR&nbsp; Verb + Particle + Object (pronoun: Verb + Pronoun + Particle only)",
    inseparable: "Verb + Particle + Object (ALWAYS together)",
    intransitive: "Verb + Particle (no object needed)",
    threeWord: "Verb + Particle₁ + Particle₂ + Object",
  },
  commonMistakes: [
    { mistake: "I looked after him.", fix: "✓ Correct! 'Look after' is inseparable, so 'I looked after him' is right.", explanation: "'Look after' is inseparable. You cannot say 'I looked him after'. Some learners try to separate inseparable phrasal verbs." },
    { mistake: "I picked up it.", fix: "I picked it up.", explanation: "When using a pronoun object with a separable phrasal verb, the pronoun MUST go between the verb and particle." },
    { mistake: "She ran into him yesterday.", fix: "✓ Correct! 'Run into' is inseparable, so 'She ran into him' is right.", explanation: "Remember: inseparable phrasal verbs keep the verb and particle together regardless of object type." },
    { mistake: "Please turn off it.", fix: "Please turn it off.", explanation: "With separable phrasal verbs, pronoun objects (it, them, me, him, her) always go between the verb and particle." },
    { mistake: "He gave up smoking.", fix: "✓ Correct! 'Give up' can be intransitive (no object) or transitive.", explanation: "Some phrasal verbs can be both intransitive and transitive depending on context." },
  ],
  notes: "Phrasal verbs are one of the most challenging aspects of English for Spanish speakers because they don't exist in the same way in Spanish. Pay attention to whether a phrasal verb is separable, inseparable, or intransitive. When in doubt, keep the verb and particle together (treat it as inseparable) — it's always correct. Learn phrasal verbs in context, not in isolation. Group them by particle (e.g., all 'up' phrasal verbs) or by theme (e.g., daily routines).",
  examples20: [
    { text: "She <strong>turned down</strong> the job offer because the salary was too low.", type: "separable", note: "'Turn down' = rechazar. Separable: 'She turned the job offer down.'" },
    { text: "The meeting was <strong>called off</strong> due to the storm.", type: "separable", note: "'Call off' = cancelar. Separable: 'They called the meeting off.'" },
    { text: "I need to <strong>figure out</strong> how to solve this equation.", type: "separable", note: "'Figure out' = resolver / descubrir. Separable." },
    { text: "She <strong>brought up</strong> an interesting topic during dinner.", type: "separable", note: "'Bring up' = mencionar / sacar (tema). Separable." },
    { text: "Can you <strong>drop off</strong> the package at the post office?", type: "separable", note: "'Drop off' = dejar / entregar. Separable." },
    { text: "He <strong>cleaned up</strong> the kitchen after cooking.", type: "separable", note: "'Clean up' = limpiar. Can also be intransitive: 'He cleaned up.'" },
    { text: "They <strong>ran out of</strong> gas on the way to the airport.", type: "three-word", note: "'Run out of' = quedarse sin. Three-word verb." },
    { text: "I'm really <strong>looking forward to</strong> the weekend.", type: "three-word", note: "'Look forward to' = esperar con ansias. Always followed by noun or gerund." },
    { text: "We need to <strong>come up with</strong> a better solution.", type: "three-word", note: "'Come up with' = idear. Three-word verb." },
    { text: "I can't <strong>put up with</strong> this behavior any longer.", type: "three-word", note: "'Put up with' = tolerar / aguantar. Three-word verb." },
    { text: "She <strong>takes after</strong> her mother — they have the same personality.", type: "inseparable", note: "'Take after' = parecerse a (en personalidad). Inseparable." },
    { text: "I <strong>came across</strong> this old photo while cleaning my room.", type: "inseparable", note: "'Come across' = encontrar por casualidad. Inseparable." },
    { text: "We <strong>look after</strong> our neighbor's cat when she's away.", type: "inseparable", note: "'Look after' = cuidar. Inseparable." },
    { text: "I can always <strong>count on</strong> my best friend for support.", type: "inseparable", note: "'Count on' = contar con. Inseparable." },
    { text: "It took him a long time to <strong>get over</strong> the breakup.", type: "inseparable", note: "'Get over' = superar. Inseparable." },
    { text: "Children <strong>grow up</strong> so fast these days.", type: "intransitive", note: "'Grow up' = crecer. Intransitive (no object)." },
    { text: "My laptop <strong>shut down</strong> unexpectedly.", type: "intransitive", note: "'Shut down' = apagarse. Intransitive or separable." },
    { text: "She <strong>showed up</strong> late to the party.", type: "intransitive", note: "'Show up' = aparecer. Intransitive." },
    { text: "I decided to <strong>give up</strong> smoking for my health.", type: "intransitive", note: "'Give up' = dejar / rendirse. Can be intransitive or transitive." },
    { text: "I need to <strong>cut down on</strong> sugar and processed foods.", type: "three-word", note: "'Cut down on' = reducir el consumo de. Three-word verb." },
  ],
};

export const PHRASAL_VERB_EXERCISES = [
  { question: "Which sentence is correct for a separable phrasal verb?", options: ["I picked up it.", "I picked it up."], answer: 1, type: "separable" },
  { question: "Is 'look after' separable or inseparable?", options: ["Separable", "Inseparable"], answer: 1, type: "classification" },
  { question: "Complete: Please ___ the light before leaving.", options: ["turn off", "put up with", "look after", "run out of"], answer: 0, type: "meaning" },
  { question: "Which is a three-word phrasal verb?", options: ["wake up", "break down", "put up with", "show up"], answer: 2, type: "classification" },
  { question: "Complete: I'm really ___ to the vacation.", options: ["looking forward", "looking after", "looking for", "looking up"], answer: 0, type: "three-word" },
  { question: "What does 'run out of' mean in Spanish?", options: ["quedarse sin", "encontrarse con", "llenar de", "correr hacia"], answer: 0, type: "meaning" },
  { question: "Choose the correct sentence:", options: ["She looks after her grandmother.", "She looks her grandmother after."], answer: 0, type: "inseparable" },
  { question: "Complete: I need to ___ this problem immediately.", options: ["deal with", "give up", "grow up", "wake up"], answer: 0, type: "meaning" },
  { question: "Which phrasal verb means 'deshacerse de'?", options: ["get rid of", "get over", "get along with", "get up"], answer: 0, type: "meaning" },
  { question: "Complete: He ___ a brilliant idea during the meeting.", options: ["came across", "came up with", "ran into", "brought up"], answer: 1, type: "three-word" },
  { question: "What type of phrasal verb is 'grow up'?", options: ["Separable", "Inseparable", "Intransitive", "Three-word"], answer: 2, type: "classification" },
  { question: "Complete: My car ___ on the way to work.", options: ["broke down", "broke up", "broke into", "broke out"], answer: 0, type: "meaning" },
  { question: "Which sentence is INCORRECT?", options: ["Please turn off the computer.", "Please turn the computer off.", "Please turn off it."], answer: 2, type: "error" },
  { question: "Complete: She ___ an old friend at the mall yesterday.", options: ["ran into", "ran out of", "ran over", "ran away"], answer: 0, type: "meaning" },
  { question: "What does 'get over' mean?", options: ["superar", "llevarse bien", "deshacerse", "ponerse al día"], answer: 0, type: "meaning" },
  { question: "Complete: I can't ___ this noise anymore!", options: ["put up with", "put on", "put off", "put out"], answer: 0, type: "three-word" },
  { question: "Complete: Let's ___ each other soon!", options: ["catch up with", "catch up to", "catch on", "catch out"], answer: 0, type: "three-word" },
  { question: "Which phrasal verb means 'cuidar de'?", options: ["look for", "look after", "look up", "look into"], answer: 1, type: "meaning" },
];

export default { PHRASAL_VERBS_DATA, PHRASAL_VERB_EXERCISES };
