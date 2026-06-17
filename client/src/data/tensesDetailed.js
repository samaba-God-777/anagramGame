/* ═══════════════════════════════════════════
   ENGLISH TENSES & GRAMMAR MODULE
   Comprehensive explanations with examples
   ═══════════════════════════════════════════ */

export const TENSES_DATA = {
  // ── PRESENT TENSES ──
  "present-simple": {
    title: "Present Simple",
    structure: "Subject + verb (base form / -s for he/she/it)",
    usage: [
      "Habits and routines: <em>'I wake up at 7 AM every day.'</em>",
      "General truths: <em>'Water boils at 100°C.'</em>",
      "Permanent situations: <em>'She works at a hospital.'</em>",
      "Timetables and schedules: <em>'The train leaves at 9 PM.'</em>",
    ],
    forms: {
      affirmative: ["I/You/We/They + verb", "He/She/It + verb-s"],
      negative: ["I/You/We/They + don't + verb", "He/She/It + doesn't + verb"],
      questions: ["Do + I/you/we/they + verb?", "Does + he/she/it + verb?"],
    },
    signalWords: ["always", "usually", "often", "sometimes", "never", "every day", "on Mondays"],
    examples: [
      { en: "She speaks three languages.", es: "Ella habla tres idiomas." },
      { en: "They don't live here.", es: "Ellos no viven aquí." },
      { en: "Do you like coffee?", es: "¿Te gusta el café?" },
    ],
  },

  "present-continuous": {
    title: "Present Continuous",
    structure: "Subject + am/is/are + verb-ing",
    usage: [
      "Actions happening now: <em>'I am studying English right now.'</em>",
      "Temporary situations: <em>'He is living in Madrid this month.'</em>",
      "Future arrangements: <em>'We are meeting tomorrow at 5.'</em>",
      "Changing situations: <em>'The climate is getting warmer.'</em>",
    ],
    forms: {
      affirmative: ["I + am + verb-ing", "He/She/It + is + verb-ing", "You/We/They + are + verb-ing"],
      negative: ["I + am not + verb-ing", "He/She/It + isn't + verb-ing", "You/We/They + aren't + verb-ing"],
      questions: ["Am + I + verb-ing?", "Is + he/she/it + verb-ing?", "Are + you/we/they + verb-ing?"],
    },
    signalWords: ["now", "right now", "at the moment", "currently", "today", "this week"],
    examples: [
      { en: "I am reading a book.", es: "Estoy leyendo un libro." },
      { en: "She isn't sleeping.", es: "Ella no está durmiendo." },
      { en: "Are you working?", es: "¿Estás trabajando?" },
    ],
  },

  "present-perfect": {
    title: "Present Perfect",
    structure: "Subject + have/has + past participle",
    usage: [
      "Life experiences: <em>'I have visited Paris twice.'</em>",
      "Unfinished actions: <em>'She has lived here since 2015.'</em>",
      "Recent past with present relevance: <em>'He has lost his keys.'</em>",
      "With 'just', 'already', 'yet': <em>'I have just finished.'</em>",
    ],
    forms: {
      affirmative: ["I/You/We/They + have + past participle", "He/She/It + has + past participle"],
      negative: ["I/You/We/They + haven't + past participle", "He/She/It + hasn't + past participle"],
      questions: ["Have + I/you/we/they + past participle?", "Has + he/she/it + past participle?"],
    },
    signalWords: ["already", "yet", "just", "ever", "never", "since", "for", "recently"],
    examples: [
      { en: "I have eaten sushi.", es: "He comido sushi." },
      { en: "She hasn't arrived yet.", es: "Ella no ha llegado aún." },
      { en: "Have you seen this movie?", es: "¿Has visto esta película?" },
    ],
  },

  "present-perfect-continuous": {
    title: "Present Perfect Continuous",
    structure: "Subject + have/has + been + verb-ing",
    usage: [
      "Actions started in the past continuing to now: <em>'I have been waiting for 2 hours.'</em>",
      "Recently finished actions with visible results: <em>'She has been crying.'</em>",
      "Emphasizing duration: <em>'We have been working all day.'</em>",
    ],
    forms: {
      affirmative: ["I/You/We/They + have been + verb-ing", "He/She/It + has been + verb-ing"],
      negative: ["I/You/We/They + haven't been + verb-ing", "He/She/It + hasn't been + verb-ing"],
      questions: ["Have + I/you/we/they + been + verb-ing?", "Has + he/she/it + been + verb-ing?"],
    },
    signalWords: ["for", "since", "all day", "how long", "lately", "recently"],
    examples: [
      { en: "I have been studying for 3 hours.", es: "He estado estudiando por 3 horas." },
      { en: "It has been raining.", es: "Ha estado lloviendo." },
      { en: "How long have you been waiting?", es: "¿Cuánto tiempo has estado esperando?" },
    ],
  },

  // ── PAST TENSES ──
  "past-simple": {
    title: "Past Simple",
    structure: "Subject + verb (past form) / Subject + didn't + verb",
    usage: [
      "Completed past actions: <em>'I visited London last summer.'</em>",
      "Past habits: <em>'She walked to school every day.'</em>",
      "Past sequence: <em>'He woke up, got dressed, and left.'</em>",
    ],
    forms: {
      affirmative: ["Subject + verb (past)"],
      negative: ["Subject + didn't + verb"],
      questions: ["Did + subject + verb?"],
    },
    signalWords: ["yesterday", "last week", "ago", "in 2020", "when I was young"],
    examples: [
      { en: "I went to the store.", es: "Fui a la tienda." },
      { en: "She didn't call me.", es: "Ella no me llamó." },
      { en: "Did you eat breakfast?", es: "¿Desayunaste?" },
    ],
  },

  "past-continuous": {
    title: "Past Continuous",
    structure: "Subject + was/were + verb-ing",
    usage: [
      "Background actions: <em>'I was reading when she called.'</em>",
      "Actions in progress at a time: <em>'At 8 PM, I was watching TV.'</em>",
      "Parallel past actions: <em>'She was cooking while he was setting the table.'</em>",
    ],
    forms: {
      affirmative: ["I/He/She/It + was + verb-ing", "You/We/They + were + verb-ing"],
      negative: ["I/He/She/It + wasn't + verb-ing", "You/We/They + weren't + verb-ing"],
      questions: ["Was + I/he/she/it + verb-ing?", "Were + you/we/they + verb-ing?"],
    },
    signalWords: ["while", "when", "as", "at that time", "at 8 PM yesterday"],
    examples: [
      { en: "I was sleeping when the phone rang.", es: "Estaba durmiendo cuando sonó el teléfono." },
      { en: "They were playing football.", es: "Estaban jugando fútbol." },
      { en: "Was she working?", es: "¿Estaba trabajando?" },
    ],
  },

  "past-perfect": {
    title: "Past Perfect",
    structure: "Subject + had + past participle",
    usage: [
      "Action before another past action: <em>'I had finished before she arrived.'</em>",
      "Reported speech: <em>'He said he had seen it.'</em>",
      "Third conditional: <em>'If I had known, I would have helped.'</em>",
    ],
    forms: {
      affirmative: ["Subject + had + past participle"],
      negative: ["Subject + hadn't + past participle"],
      questions: ["Had + subject + past participle?"],
    },
    signalWords: ["before", "after", "by the time", "already", "just", "when"],
    examples: [
      { en: "I had already eaten.", es: "Ya había comido." },
      { en: "She had left before I arrived.", es: "Ella se había ido antes de que yo llegara." },
      { en: "Had you finished?", es: "¿Habías terminado?" },
    ],
  },

  "past-perfect-continuous": {
    title: "Past Perfect Continuous",
    structure: "Subject + had + been + verb-ing",
    usage: [
      "Duration before a past event: <em>'I had been waiting for 2 hours when she arrived.'</em>",
      "Cause of a past situation: <em>'He was tired because he had been working.'</em>",
    ],
    forms: {
      affirmative: ["Subject + had been + verb-ing"],
      negative: ["Subject + hadn't been + verb-ing"],
      questions: ["Had + subject + been + verb-ing?"],
    },
    signalWords: ["for", "since", "before", "by the time", "how long"],
    examples: [
      { en: "I had been studying for 3 hours.", es: "Había estado estudiando por 3 horas." },
      { en: "She was tired because she had been running.", es: "Estaba cansada porque había estado corriendo." },
    ],
  },

  // ── FUTURE TENSES ──
  "future-simple": {
    title: "Future Simple",
    structure: "Subject + will + verb",
    usage: [
      "Predictions: <em>'It will rain tomorrow.'</em>",
      "Spontaneous decisions: <em>'I will help you.'</em>",
      "Promises: <em>'I will never forget this.'</em>",
      "Facts: <em>'The sun will rise at 6 AM.'</em>",
    ],
    forms: {
      affirmative: ["Subject + will + verb"],
      negative: ["Subject + won't + verb"],
      questions: ["Will + subject + verb?"],
    },
    signalWords: ["tomorrow", "next week", "in the future", "soon", "I think", "probably"],
    examples: [
      { en: "I will call you tomorrow.", es: "Te llamaré mañana." },
      { en: "She won't forget.", es: "Ella no olvidará." },
      { en: "Will you come?", es: "¿Vendrás?" },
    ],
  },

  "future-continuous": {
    title: "Future Continuous",
    structure: "Subject + will + be + verb-ing",
    usage: [
      "Actions in progress at a future time: <em>'I will be working at 9 AM.'</em>",
      "Polite inquiries: <em>'Will you be using the car?'</em>",
    ],
    forms: {
      affirmative: ["Subject + will be + verb-ing"],
      negative: ["Subject + won't be + verb-ing"],
      questions: ["Will + subject + be + verb-ing?"],
    },
    signalWords: ["at this time tomorrow", "at 9 PM", "all day tomorrow"],
    examples: [
      { en: "I will be sleeping at midnight.", es: "Estaré durmiendo a medianoche." },
      { en: "Will you be attending the meeting?", es: "¿Asistirás a la reunión?" },
    ],
  },

  "future-perfect": {
    title: "Future Perfect",
    structure: "Subject + will + have + past participle",
    usage: [
      "Actions completed before a future time: <em>'I will have finished by 5 PM.'</em>",
    ],
    forms: {
      affirmative: ["Subject + will have + past participle"],
      negative: ["Subject + won't have + past participle"],
      questions: ["Will + subject + have + past participle?"],
    },
    signalWords: ["by tomorrow", "by next week", "by the time", "before"],
    examples: [
      { en: "I will have graduated by June.", es: "Me habré graduado para junio." },
      { en: "She won't have finished yet.", es: "Ella no habrá terminado aún." },
    ],
  },

  "future-perfect-continuous": {
    title: "Future Perfect Continuous",
    structure: "Subject + will + have + been + verb-ing",
    usage: [
      "Duration up to a future point: <em>'By December, I will have been working here for 5 years.'</em>",
    ],
    forms: {
      affirmative: ["Subject + will have been + verb-ing"],
      negative: ["Subject + won't have been + verb-ing"],
      questions: ["Will + subject + have been + verb-ing?"],
    },
    signalWords: ["by", "for", "by the time", "by next year"],
    examples: [
      { en: "By next month, I will have been studying for a year.", es: "Para el próximo mes, habré estado estudiando por un año." },
    ],
  },
};

export default TENSES_DATA;
