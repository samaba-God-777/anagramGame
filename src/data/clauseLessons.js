// clauseLessons.js — CLAUSE_FULL_LESSONS

export const CLAUSE_FULL_LESSONS = {
  "Adjective Clauses": {
    intro: {
      text: "An adjective clause (also called a relative clause) is a dependent clause that modifies a noun or pronoun. It begins with a relative pronoun (who, whom, whose, which, that) or a relative adverb (where, when, why).",
      spanish: "Una cláusula adjetiva (también llamada cláusula relativa) es una cláusula dependiente que modifica un sustantivo o pronombre.",
      examples: [
        { text: "The girl <strong>who is wearing a red dress</strong> is my sister.", note: "The adjective clause modifies 'the girl'." },
        { text: "I know the man <strong>who lives next door</strong>.", note: "The clause modifies 'the man'." },
        { text: "This is the book <strong>that I bought</strong>.", note: "The clause modifies 'the book'." }
      ]
    },
    subtopics: [
      {
        id: "relative-pronouns",
        title: "Relative Pronouns",
        spanish: "Pronombres Relativos",
        sections: [
          {
            title: "Who",
            spanish: "Quien — Personas (Sujeto)",
            text: "Use <strong>who</strong> when the relative pronoun is the subject of the clause and refers to a person.",
            examples: [
              "The teacher <strong>who</strong> teaches English is very friendly.",
              "The boy <strong>who</strong> won the competition is my cousin.",
              "The students <strong>who</strong> study hard will succeed.",
              "Do you know the woman <strong>who</strong> called me?",
              "The artist <strong>who</strong> painted this is famous."
            ],
            note: "Who siempre se refiere a personas y funciona como sujeto del verbo que le sigue."
          },
          {
            title: "Whom",
            spanish: "Quien — Personas (Objeto)",
            text: "Use <strong>whom</strong> when the relative pronoun is the object of the verb in the clause. In informal English, <strong>who</strong> often replaces <strong>whom</strong>.",
            examples: [
              "The woman <strong>whom</strong> I met yesterday is a doctor.",
              "The student <strong>whom</strong> the teacher praised was happy.",
              "The man <strong>whom</strong> you saw is my uncle.",
              "She is the person <strong>whom</strong> I admire most.",
              "The candidate <strong>whom</strong> they selected has experience."
            ],
            note: "Whom se usa en contextos formales. En inglés informal se puede usar 'who' u omitir el pronombre."
          },
          {
            title: "Which",
            spanish: "El/La cual — Cosas, Animales, Ideas",
            text: "Use <strong>which</strong> for things, animals, and ideas. In defining clauses, <strong>that</strong> is more common. In non-defining clauses, only <strong>which</strong> can be used.",
            examples: [
              "The book <strong>which</strong> I bought is interesting.",
              "The car <strong>which</strong> was parked outside belongs to John.",
              "The movie <strong>which</strong> we watched was boring.",
              "My phone, <strong>which</strong> I bought last year, is already broken.",
              "The decision <strong>which</strong> changed everything was made quickly."
            ],
            note: "Which se usa para cosas. En cláusulas defining, 'that' es más común. En non-defining, SOLO 'which' es correcto."
          },
          {
            title: "That",
            spanish: "Que — Personas, Animales y Cosas",
            text: "Use <strong>that</strong> for people, animals, and things. It replaces <strong>who</strong> and <strong>which</strong> in DEFINING clauses only.",
            examples: [
              "The girl <strong>that</strong> lives next door is friendly.",
              "The car <strong>that</strong> I bought is new.",
              "The book <strong>that</strong> you recommended was great.",
              "The man <strong>that</strong> called is my boss.",
              "Is this the only option <strong>that</strong> we have?"
            ],
            note: "That puede reemplazar a who y which SOLO en cláusulas defining (sin comas). Nunca se usa en non-defining."
          },
          {
            title: "Whose",
            spanish: "Cuyo/a — Posesión",
            text: "Use <strong>whose</strong> to show possession. It works for both people and things and is always followed by a noun.",
            examples: [
              "The man <strong>whose</strong> car was stolen called the police.",
              "The student <strong>whose</strong> project won received a prize.",
              "The tree <strong>whose</strong> leaves fell is an oak.",
              "The company <strong>whose</strong> CEO resigned is struggling.",
              "I know a woman <strong>whose</strong> brother is a famous singer."
            ],
            note: "Whose expresa posesión y funciona tanto para personas como para cosas."
          },
          {
            title: "Where",
            spanish: "Donde — Lugares",
            text: "Use <strong>where</strong> to refer to a place. It replaces 'in which', 'at which', or 'on which' for locations.",
            examples: [
              "The city <strong>where</strong> I was born is beautiful.",
              "The restaurant <strong>where</strong> we ate was expensive.",
              "This is the house <strong>where</strong> I grew up.",
              "The hospital <strong>where</strong> she works is nearby.",
              "I remember the park <strong>where</strong> we first met."
            ],
            note: "Where reemplaza 'in which' / 'at which' para lugares."
          },
          {
            title: "When",
            spanish: "Cuando — Tiempo",
            text: "Use <strong>when</strong> to refer to a time. It replaces 'in which', 'on which', or 'at which' for time expressions.",
            examples: [
              "I remember the day <strong>when</strong> we first met.",
              "Summer is the season <strong>when</strong> I feel happiest.",
              "Do you remember the year <strong>when</strong> the war ended?",
              "Monday is the day <strong>when</strong> we have our meeting.",
              "The 90s were a time <strong>when</strong> technology changed rapidly."
            ],
            note: "When reemplaza 'on which' / 'in which' para expresiones de tiempo."
          }
        ]
      },
      {
        id: "defining-nondefining",
        title: "Defining vs. Non-defining Relative Clauses",
        spanish: "Cláusulas Definitorias vs. No Definitorias",
        sections: [
          {
            title: "Defining (Restrictive) Relative Clauses",
            spanish: "Cláusulas Definitorias (Esenciales)",
            text: "These clauses provide ESSENTIAL information that identifies the noun. Without the clause, the sentence would be incomplete. <strong>No commas are used.</strong>",
            examples: [
              "The boy <strong>who won the race</strong> is my friend.",
              "The car <strong>that I bought</strong> is new.",
              "Students <strong>who study hard</strong> will succeed.",
              "The women <strong>who live upstairs</strong> are very loud.",
              "The book <strong>that you recommended</strong> was excellent."
            ],
            note: "Sin estas cláusulas, la oración pierde información esencial. No llevan comas."
          },
          {
            title: "Non-defining (Non-restrictive) Relative Clauses",
            spanish: "Cláusulas No Definitorias (Información Adicional)",
            text: "These clauses provide EXTRA information about a noun that is already identified. The clause is enclosed in <strong>commas</strong>. 'That' CANNOT be used.",
            examples: [
              "My mother, <strong>who is a doctor</strong>, works at the hospital.",
              "London, <strong>which is the capital</strong>, has many parks.",
              "Professor Smith, <strong>whom I respect greatly</strong>, is retiring.",
              "My brother, <strong>who lives in New York</strong>, is a lawyer.",
              "The Eiffel Tower, <strong>which was built in 1889</strong>, is a famous landmark."
            ],
            note: "Llevan comas, dan información adicional, NO se usa 'that', y NUNCA se omite el pronombre."
          }
        ],
        comparisonTable: {
          headers: ["Feature", "Defining", "Non-defining"],
          rows: [
            ["Commas", "No commas", "Commas around the clause"],
            ["Essential?", "Yes — needed to identify the noun", "No — extra information"],
            ["Can use 'that'?", "Yes", "No — only who/which/whom/whose"],
            ["Can omit pronoun?", "Yes (when it's the object)", "Never"],
            ["Meaning if removed", "Sentence changes meaning", "Sentence still makes sense"]
          ]
        }
      },
      {
        id: "omission",
        title: "Omitting the Relative Pronoun",
        spanish: "Omisión del Pronombre Relativo",
        text: "In DEFINING clauses only, the relative pronoun can be omitted when it is the OBJECT of the clause. This is very common in informal English.",
        examples: [
          { text: "The book <strong>(that/which)</strong> I bought is great.", rule: "Pronoun omitted (object of 'bought')" },
          { text: "The woman <strong>(whom/who)</strong> you met is my teacher.", rule: "Pronoun omitted (object of 'met')" },
          { text: "The movie <strong>(that)</strong> we watched was boring.", rule: "Pronoun omitted (object of 'watched')" },
          { text: "The man <strong>who</strong> called me is my boss.", rule: "CANNOT omit — it's the subject" },
          { text: "The car <strong>that</strong> broke down is old.", rule: "CANNOT omit — it's the subject" }
        ],
        note: "Regla: Si el pronombre es el OBJETO del verbo en la cláusula relativa, se puede omitir. Si es el SUJETO, NO."
      },
      {
        id: "reduction",
        title: "Relative Clause Reduction (Participial Phrases)",
        spanish: "Reducción de Cláusulas Relativas",
        text: "When the relative pronoun is the SUBJECT of the clause, it can be reduced to a participial phrase, making sentences shorter and more formal.",
        rules: [
          { name: "Active → Present Participle (-ing)", text: "Remove the pronoun + be and use -ing.", example: "The man <strong>who is standing</strong> → The man <strong>standing</strong>" },
          { name: "Passive → Past Participle (-ed/-en)", text: "Remove the pronoun + be and use the past participle.", example: "The car <strong>that was parked</strong> → The car <strong>parked</strong>" },
          { name: "Active → Present Participle", text: "For active verbs, just use -ing.", example: "Students <strong>who study</strong> → Students <strong>studying</strong>" }
        ],
        examples: [
          { full: "The man who is standing over there is my uncle.", reduced: "The man standing over there is my uncle." },
          { full: "The building that was damaged in the storm is being repaired.", reduced: "The building damaged in the storm is being repaired." },
          { full: "Anyone who wants to join can sign up.", reduced: "Anyone wanting to join can sign up." },
          { full: "The results that were published yesterday are impressive.", reduced: "The results published yesterday are impressive." }
        ]
      },
      {
        id: "prepositions",
        title: "Prepositions in Relative Clauses",
        spanish: "Preposiciones en Cláusulas Relativas",
        text: "In formal English, the preposition goes BEFORE the relative pronoun. In informal English, it stays at the END of the clause.",
        examples: [
          { formal: "The man <strong>to whom</strong> I spoke", informal: "The man <strong>I spoke to</strong>", note: "Pronoun omitted in informal" },
          { formal: "The house <strong>in which</strong> I grew up", informal: "The house <strong>I grew up in</strong>", note: "Pronoun omitted" },
          { formal: "The person <strong>with whom</strong> she arrived", informal: "The person <strong>she arrived with</strong>", note: "Natural spoken English" },
          { formal: "The topic <strong>about which</strong> we argued", informal: "The topic <strong>we argued about</strong>", note: "End preposition is standard" }
        ],
        note: "Formal: preposición + whom/which. Informal: verbo + preposición al final."
      },
      {
        id: "quantifier",
        title: "Quantifier + of + Relative Pronoun",
        spanish: "Cuantificador + of + Pronombre Relativo",
        text: "In formal English, use <strong>some/many/all/none/both/each/several + of + whom/which</strong>. Common in academic writing.",
        examples: [
          "The students, <strong>many of whom</strong> were tired, continued studying.",
          "The books, <strong>some of which</strong> were rare, were sold at auction.",
          "Her two brothers, <strong>both of whom</strong> are doctors, live abroad.",
          "The proposals, <strong>several of which</strong> were rejected, needed revision.",
          "The applicants, <strong>three of whom</strong> were overqualified, were interviewed."
        ],
        note: "Estructura formal usada en writing académico o profesional."
      }
    ],
    commonMistakes20: [
      { mistake: "The man which lives next door is friendly.", fix: "The man who lives next door is friendly.", explanation: "Use <strong>who</strong> for people, <strong>which</strong> for things." },
      { mistake: "This is the book who I bought.", fix: "This is the book that/which I bought.", explanation: "Use <strong>that</strong> or <strong>which</strong> for things, not <strong>who</strong>." },
      { mistake: "My mother, that is a doctor, works hard.", fix: "My mother, who is a doctor, works hard.", explanation: "In non-defining clauses, you CANNOT use <strong>that</strong>." },
      { mistake: "The man which car was stolen is upset.", fix: "The man whose car was stolen is upset.", explanation: "Use <strong>whose</strong> for possession, not <strong>which</strong>." },
      { mistake: "I know the woman which you met.", fix: "I know the woman whom/who you met.", explanation: "Use <strong>whom/who</strong> for people, not <strong>which</strong>." },
      { mistake: "The car who is parked outside is mine.", fix: "The car that/which is parked outside is mine.", explanation: "Use <strong>that/which</strong> for things, not <strong>who</strong>." },
      { mistake: "The book that I bought it is good.", fix: "The book that I bought is good.", explanation: "Don't repeat the object pronoun ('it') after the relative clause." },
      { mistake: "She is the woman who I gave the book.", fix: "She is the woman I gave the book to.", explanation: "After verbs with prepositions (give to), include the preposition." },
      { mistake: "The student whose project won. He got a prize.", fix: "The student whose project won got a prize.", explanation: "Don't split the relative clause into a separate sentence." },
      { mistake: "I spoke to the man. He was friendly.", fix: "The man I spoke to was friendly.", explanation: "Use a relative clause to combine sentences." },
      { mistake: "The hotel which we stayed was expensive.", fix: "The hotel where we stayed was expensive.", explanation: "Use <strong>where</strong> for places after verbs that need a preposition." },
      { mistake: "The reason which he left is unknown.", fix: "The reason why he left is unknown.", explanation: "Use <strong>why</strong> or <strong>that</strong> for reasons, not <strong>which</strong>." },
      { mistake: "This is the house which I was born.", fix: "This is the house where I was born.", explanation: "Use <strong>where</strong> for places." },
      { mistake: "I remember the day which we met.", fix: "I remember the day when we met.", explanation: "Use <strong>when</strong> for time." },
      { mistake: "The people which live upstairs are loud.", fix: "The people who live upstairs are loud.", explanation: "People — use <strong>who</strong>, not <strong>which</strong>." },
      { mistake: "My father which is a lawyer helped me.", fix: "My father, who is a lawyer, helped me.", explanation: "Use <strong>who</strong> for people. Add commas for non-defining." },
      { mistake: "The man who he called me is my boss.", fix: "The man who called me is my boss.", explanation: "Don't add an extra subject pronoun after <strong>who</strong>." },
      { mistake: "The woman whom she is a doctor is kind.", fix: "The woman who is a doctor is kind.", explanation: "Use <strong>who</strong> (subject), not <strong>whom</strong> (object), as subject." },
      { mistake: "The students whom study hard will succeed.", fix: "The students who study hard will succeed.", explanation: "Use <strong>who</strong> for subject, <strong>whom</strong> only for object." },
      { mistake: "The movie, that was released yesterday, is great.", fix: "The movie, which was released yesterday, is great.", explanation: "In non-defining clauses, use <strong>which</strong>, not <strong>that</strong>." },
    ],
    nativeSpeaker: {
      conversation: {
        title: "Casual Conversation — Weekend Plans",
        lines: [
          { speaker: "A", text: "Hey! I finally watched that movie <strong>you recommended</strong>." },
          { speaker: "B", text: "Oh, the one <strong>that won</strong> all those awards?" },
          { speaker: "A", text: "Yeah! The actress <strong>who played</strong> the lead was amazing." },
          { speaker: "B", text: "I know! The director, <strong>who is relatively new</strong>, did a great job." },
          { speaker: "A", text: "The scene <strong>where they meet</strong> was my favorite." },
          { speaker: "B", text: "That's the moment <strong>when</strong> the story really starts." },
        ]
      },
      academic: {
        title: "Academic Writing",
        examples: [
          "The participants, <strong>many of whom</strong> were undergraduates, completed the survey.",
          "The data <strong>that were collected</strong> support our hypothesis.",
          "Smith (2019), <strong>whose work</strong> on climate change is widely cited, argues urgently.",
          "The methodology <strong>which was employed</strong> follows established protocols.",
          "The results, <strong>several of which</strong> were unexpected, require investigation."
        ]
      },
      professional: {
        title: "Professional — Meetings & Emails",
        examples: [
          "The client <strong>whom we met</strong> yesterday has approved the proposal.",
          "The deadline, <strong>which is next Friday</strong>, cannot be extended.",
          "Please review the documents <strong>that I attached</strong>.",
          "The team <strong>whose project</strong> was selected will present.",
          "The meeting room <strong>where the meeting will be held</strong> is on the third floor."
        ]
      },
      business: {
        title: "Business — Negotiations",
        examples: [
          "The terms <strong>that we discussed</strong> are still under review.",
          "Our competitors, <strong>whose market share</strong> has grown, are launching a new product.",
          "The investors <strong>to whom we presented</strong> are interested.",
          "The concerns <strong>that were raised</strong> must be addressed.",
          "The partnership, <strong>which represents</strong> a major opportunity, will be finalized."
        ]
      }
    },
    finalQuiz50: [
      { question: "The boy _____ won the race is my friend.", options: ["which", "whom", "who", "whose"], answer: 2, explanation: "'Who' is the subject pronoun for a person." },
      { question: "The car _____ I bought is new.", options: ["who", "whom", "whose", "that"], answer: 3, explanation: "'That' or 'which' for things as object." },
      { question: "The woman _____ you met is my teacher.", options: ["who", "whom", "whose", "which"], answer: 1, explanation: "'Whom' as object pronoun (formal)." },
      { question: "This is the house _____ I was born.", options: ["which", "that", "where", "when"], answer: 2, explanation: "'Where' refers to a place." },
      { question: "The man _____ car was stolen is my neighbor.", options: ["who", "whom", "whose", "which"], answer: 2, explanation: "'Whose' shows possession." },
      { question: "My mother, _____ is a doctor, works hard.", options: ["which", "that", "who", "whom"], answer: 2, explanation: "Non-defining clause — 'who' for people." },
      { question: "Summer, _____ we go to the beach, is my favorite.", options: ["which", "when", "where", "that"], answer: 1, explanation: "'When' for time in a non-defining clause." },
      { question: "The book _____ I read was very good.", options: ["who", "whom", "whose", "that"], answer: 3, explanation: "'That' or 'which' for things as object." },
      { question: "She is the person _____ I admire most.", options: ["who", "which", "whose", "whom"], answer: 3, explanation: "'Whom' as object (formal)." },
      { question: "The company _____ CEO resigned is struggling.", options: ["which", "that", "whose", "who"], answer: 2, explanation: "'Whose' for possession by a company." },
      { question: "The restaurant _____ we ate was expensive.", options: ["which", "that", "where", "when"], answer: 2, explanation: "'Where' for places." },
      { question: "I remember the day _____ we first met.", options: ["which", "that", "where", "when"], answer: 3, explanation: "'When' for time." },
      { question: "The reason _____ he left is unknown.", options: ["which", "why", "where", "when"], answer: 1, explanation: "'Why' for reasons." },
      { question: "Students _____ study hard will succeed.", options: ["which", "whom", "who", "whose"], answer: 2, explanation: "'Who' as subject for people." },
      { question: "The movie, _____ was released yesterday, is great.", options: ["that", "which", "what", "who"], answer: 1, explanation: "Non-defining — must use 'which', NOT 'that'." },
      { question: "The man _____ is standing over there is my uncle.", options: ["standing", "who standing", "which", "whom"], answer: 0, explanation: "Reduced relative clause." },
      { question: "The papers _____ yesterday are missing.", options: ["that found", "found", "finding", "were found"], answer: 1, explanation: "Reduced passive: 'that were found' → 'found'." },
      { question: "The students, most _____ were tired, kept studying.", options: ["of which", "of whom", "of who", "of them"], answer: 1, explanation: "'Most of whom' for people." },
      { question: "The books, some _____ were rare, were sold.", options: ["of whom", "of which", "of that", "of them"], answer: 1, explanation: "'Some of which' for things." },
      { question: "The hotel _____ we stayed was luxurious.", options: ["which", "that", "where", "when"], answer: 2, explanation: "'Where' for places." },
      { question: "Anyone _____ to join can sign up.", options: ["wanting", "wants", "who wanting", "that wanting"], answer: 0, explanation: "Reduced: 'Anyone who wants' → 'Anyone wanting'." },
      { question: "The girl _____ is wearing a red dress is my sister.", options: ["which", "whom", "who", "whose"], answer: 2, explanation: "'Who' as subject for a person." },
      { question: "Do you know the woman _____ called me?", options: ["which", "who", "whom", "whose"], answer: 1, explanation: "'Who' as subject." },
      { question: "The artist _____ painted this is famous.", options: ["which", "that", "who", "whom"], answer: 2, explanation: "'Who' for a person as subject." },
      { question: "The candidate _____ they selected has experience.", options: ["who", "whom", "which", "whose"], answer: 1, explanation: "'Whom' as object (they selected him/her)." },
      { question: "The decision _____ changed everything was quick.", options: ["who", "whom", "which", "whose"], answer: 2, explanation: "'Which' for a thing as subject." },
      { question: "Is this the only option _____ we have?", options: ["who", "whom", "which", "that"], answer: 3, explanation: "'That' for things in defining clauses." },
      { question: "I know a woman _____ brother is a famous singer.", options: ["who", "whom", "whose", "which"], answer: 2, explanation: "'Whose' shows possession (her brother)." },
      { question: "The hospital _____ she works is nearby.", options: ["which", "that", "where", "when"], answer: 2, explanation: "'Where' for places." },
      { question: "Monday is the day _____ we have our meeting.", options: ["which", "that", "where", "when"], answer: 3, explanation: "'When' for time." },
      { question: "My brother, _____ lives in New York, is a lawyer.", options: ["that", "which", "who", "whom"], answer: 2, explanation: "Non-defining — 'who' for people." },
      { question: "The Eiffel Tower, _____ was built in 1889, is famous.", options: ["that", "which", "what", "who"], answer: 1, explanation: "Non-defining — 'which' for things." },
      { question: "The book _____ I bought yesterday is great (omit pronoun).", options: ["that", "which", "omit", "who"], answer: 2, explanation: "The pronoun CAN be omitted when it's the object." },
      { question: "Which sentence is correct?", options: ["The man who he called me is here.", "The man who called me is here.", "The man which called me is here."], answer: 1, explanation: "Don't add extra subject after 'who'." },
      { question: "Which sentence correctly uses 'whose'?", options: ["The man whose is a doctor.", "The man whose car was stolen.", "The man whose he is."], answer: 1, explanation: "'Whose' is followed by a noun (car)." },
      { question: "In which sentence can the pronoun be omitted?", options: ["The man who called me.", "The book that I bought.", "The car which broke down."], answer: 1, explanation: "Only when the pronoun is the OBJECT." },
      { question: "Which sentence uses commas for non-defining?", options: ["The boy who won is here.", "My mother, who is a doctor, works here.", "Students who study succeed."], answer: 1, explanation: "Non-defining clauses use commas." },
      { question: "The building _____ in the storm is being repaired.", options: ["damaging", "damaged", "that damaging"], answer: 1, explanation: "Reduced: 'that was damaged' → 'damaged'." },
      { question: "Her two brothers, _____ are doctors, live abroad.", options: ["both of which", "both of whom", "both of who"], answer: 1, explanation: "'Both of whom' for people." },
      { question: "The proposals, _____ were rejected, needed revision.", options: ["several of whom", "several of which", "several of that"], answer: 1, explanation: "'Several of which' for things." },
      { question: "The man _____ I gave the book to is my friend.", options: ["which", "that", "who"], answer: 2, explanation: "'Who' as object with end preposition." },
      { question: "The topic _____ we argued about was politics.", options: ["which", "who", "whom"], answer: 0, explanation: "'Which' for things with end preposition." },
      { question: "The teacher _____ English is very friendly.", options: ["which teaches", "who teaches", "whom teaches"], answer: 1, explanation: "'Who' as subject for a person." },
      { question: "The student _____ the teacher praised was happy.", options: ["who", "whom", "whose"], answer: 1, explanation: "'Whom' as object (teacher praised him)." },
      { question: "The people _____ upstairs are very loud.", options: ["which live", "who live", "whom live"], answer: 1, explanation: "'Who' as subject for people." },
      { question: "The car _____ was parked outside belongs to John.", options: ["who", "which", "whom"], answer: 1, explanation: "'Which' for a thing as subject." },
      { question: "Choose the correct reduced form: 'The man who is waiting is my friend.'", options: ["The man is waiting is my friend.", "The man waiting is my friend.", "The man waited is my friend."], answer: 1, explanation: "Remove 'who is' → 'The man waiting'." },
      { question: "The woman _____ you saw is my aunt.", options: ["which", "whom", "whose", "who"], answer: 1, explanation: "'Whom' as object pronoun (formal)." },
      { question: "The reason _____ he was late is unknown.", options: ["which", "why", "where", "when"], answer: 1, explanation: "'Why' for reasons." },
      { question: "The man _____ lives next door is friendly.", options: ["who", "whom", "whose", "which"], answer: 0, explanation: "'Who' as subject for people." },
      { question: "The car _____ broke down is old.", options: ["who", "which", "whom", "whose"], answer: 1, explanation: "'Which' as subject for things." },
    ]
  },
  "Noun Clauses": {
    intro: {
      text: "A noun clause is a dependent clause that functions as a noun in a sentence. It can act as a subject, object, complement, or object of a preposition.",
      spanish: "Una cláusula sustantiva es una cláusula dependiente que funciona como un sustantivo en la oración.",
      examples: [
        { text: "<strong>What she said</strong> surprised everyone.", note: "The noun clause acts as the subject." },
        { text: "I know <strong>that he is coming</strong>.", note: "The noun clause acts as the object." },
        { text: "The truth is <strong>that he lied</strong>.", note: "The noun clause acts as the complement." }
      ]
    },
    subtopics: [
      {
        id: "functions",
        title: "Functions of Noun Clauses",
        spanish: "Funciones de las Cláusulas Sustantivas",
        sections: [
          { title: "As Subject", spanish: "Como Sujeto", text: "The entire noun clause acts as the subject of the main verb.", examples: ["<strong>What she said</strong> surprised everyone.", "<strong>That he passed</strong> is great news.", "<strong>Whoever arrives first</strong> will win.", "<strong>Why he left</strong> remains a mystery.", "<strong>Where she lives</strong> is unknown."], note: "La cláusula completa funciona como sujeto del verbo principal." },
          { title: "As Direct Object", spanish: "Como Objeto Directo", text: "The noun clause receives the action of the main verb.", examples: ["I know <strong>that he is coming</strong>.", "She doesn't understand <strong>what I mean</strong>.", "He asked <strong>whether I was ready</strong>.", "I wonder <strong>if she is feeling better</strong>.", "Can you tell me <strong>when the meeting starts</strong>?"], note: "La cláusula recibe la acción del verbo principal." },
          { title: "As Subject Complement", spanish: "Como Complemento del Sujeto", text: "Follows a linking verb and describes the subject.", examples: ["The truth is <strong>that he lied</strong>.", "This is <strong>what I wanted to say</strong>.", "My biggest worry is <strong>whether I will pass</strong>.", "The problem is <strong>that we don't have time</strong>.", "That is <strong>what I meant</strong>."], note: "Sigue a un verbo copulativo (be, seem, look)." },
          { title: "As Object of a Preposition", spanish: "Como Objeto de una Preposición", text: "The noun clause follows a preposition.", examples: ["She talked about <strong>what she had seen</strong>.", "I'm worried about <strong>whether he'll arrive</strong>.", "We argued about <strong>who should pay</strong>.", "He was upset by <strong>what she said</strong>.", "I'm not interested in <strong>what he thinks</strong>."], note: "La cláusula sustantiva sigue a una preposición." }
        ]
      },
      {
        id: "that-clauses",
        title: "Noun Clauses with THAT",
        spanish: "Cláusulas con THAT",
        text: "The word <strong>that</strong> introduces noun clauses and can often be omitted in informal English.",
        examples: [
          { text: "I think <strong>(that)</strong> he is right.", note: "That can be omitted after 'think'." },
          { text: "She said <strong>(that)</strong> she would call.", note: "That can be omitted after 'say'." },
          { text: "<strong>That she won</strong> is amazing.", note: "That CANNOT be omitted as subject." },
          { text: "It's clear <strong>(that)</strong> he is lying.", note: "That can be omitted with dummy 'it'." },
          { text: "The fact <strong>that he came</strong> is important.", note: "That kept after nouns." }
        ],
        note: "That se puede omitir cuando es OBJETO. NO se puede omitir cuando es SUJETO."
      },
      {
        id: "if-whether",
        title: "Noun Clauses with IF and WHETHER",
        spanish: "Cláusulas con IF y WHETHER",
        text: "Use <strong>whether</strong> or <strong>if</strong> for yes/no questions in noun clauses. <strong>Whether</strong> is more formal.",
        examples: [
          "I don't know <strong>if</strong> he will come.",
          "He asked <strong>whether</strong> I was ready.",
          "I'm not sure <strong>whether</strong> to go or stay.",
          "The question is <strong>whether</strong> we can afford it.",
          "I care about <strong>whether</strong> you're safe."
        ],
        note: "Whether es más formal. 'Whether' se usa con 'or not' y después de preposiciones."
      },
      {
        id: "question-words",
        title: "Question Words in Noun Clauses",
        spanish: "Palabras Interrogativas",
        text: "Question words (what, where, when, why, who, how) introduce noun clauses using STATEMENT word order.",
        sections: [
          { title: "What", examples: ["<strong>What</strong> she said surprised me.", "I don't know <strong>what</strong> he wants."], note: "What = 'la cosa que'" },
          { title: "Where", examples: ["<strong>Where</strong> she lives is unknown.", "I don't know <strong>where</strong> he went."], note: "Where = 'el lugar donde'" },
          { title: "When", examples: ["I remember <strong>when</strong> we first met.", "Do you know <strong>when</strong> the movie starts?"], note: "When = 'el momento en que'" },
          { title: "Why", examples: ["<strong>Why</strong> he left is a mystery.", "I understand <strong>why</strong> she was angry."], note: "Why = 'la razón por la que'" },
          { title: "How", examples: ["I know <strong>how</strong> she did it.", "Show me <strong>how</strong> this works."], note: "How = 'la manera en que'" },
          { title: "Who / Whom", examples: ["<strong>Who</strong> called is not important.", "I know <strong>whom</strong> you mean."], note: "Who para sujeto, whom para objeto." }
        ]
      },
      {
        id: "embedded-questions",
        title: "Embedded Questions",
        spanish: "Preguntas Incrustadas",
        text: "An embedded question uses STATEMENT word order, NOT question word order.",
        examples: [
          { correct: "Can you tell me <strong>where the bank is</strong>?", incorrect: "✗ Can you tell me <strong>where is the bank</strong>?", note: "Statement order" },
          { correct: "I don't know <strong>what he wants</strong>.", incorrect: "✗ I don't know <strong>what does he want</strong>.", note: "Statement order" }
        ],
        note: "En noun clauses, NUNCA se usa inversión sujeto-verbo."
      },
      {
        id: "wh-ever",
        title: "Wh-ever Words",
        spanish: "Palabras con -ever",
        text: "<strong>Whoever, whatever, whenever, wherever, whichever</strong> introduce noun clauses with general meaning.",
        examples: [
          "<strong>Whoever</strong> arrives first will win.",
          "<strong>Whatever</strong> you decide is fine.",
          "I'll be there <strong>whenever</strong> you need me.",
          "She'll follow him <strong>wherever</strong> he goes.",
          "Take <strong>whichever</strong> you like best."
        ],
        note: "Expresan 'cualquier persona/cosa/tiempo/lugar que'."
      },
      {
        id: "dummy-subject",
        title: "It as Dummy Subject",
        spanish: "It como Sujeto Ficticio",
        text: "Move a long subject noun clause to the end and use <strong>it</strong> as a dummy subject.",
        examples: [
          { normal: "<strong>That she is happy</strong> is obvious.", extraposed: "<strong>It</strong> is obvious <strong>that she is happy</strong>.", note: "With adjective" },
          { normal: "<strong>That the earth is round</strong> is a fact.", extraposed: "<strong>It</strong> is a fact <strong>that the earth is round</strong>.", note: "With noun" },
          { normal: "<strong>That he is rich</strong> is said.", extraposed: "<strong>It</strong> is said <strong>that he is rich</strong>.", note: "With passive verb" }
        ],
        note: "En inglés es más natural 'It is obvious that...' que 'That... is obvious'."
      },
      {
        id: "reported-speech",
        title: "Noun Clauses in Reported Speech",
        spanish: "Estilo Indirecto",
        text: "Reported statements become noun clauses with tense backshift.",
        examples: [
          { direct: 'He said: "I am tired."', reported: "He said <strong>that he was tired</strong>.", rule: "Present → Past" },
          { direct: 'She said: "I will call."', reported: "She said <strong>that she would call</strong>.", rule: "will → would" },
          { direct: 'He asked: "Are you ready?"', reported: "He asked <strong>whether/if I was ready</strong>.", rule: "Yes/No → whether/if" },
          { direct: 'She asked: "Where is he?"', reported: "She asked <strong>where he was</strong>.", rule: "Wh-question → statement order" }
        ],
        note: "Los tiempos retroceden (backshift). Las preguntas usan orden de afirmación."
      }
    ],
    commonMistakes20: [
      { mistake: "Can you tell me where is the bank?", fix: "Can you tell me where the bank is?", explanation: "Statement word order." },
      { mistake: "I don't know what does he want.", fix: "I don't know what he wants.", explanation: "Subject (he) before verb (wants)." },
      { mistake: "She said me that she was tired.", fix: "She told me that she was tired.", explanation: "<strong>Say</strong> doesn't take an object." },
      { mistake: "She asked that I was ready.", fix: "She asked if/whether I was ready.", explanation: "Use <strong>if/whether</strong> for questions." },
      { mistake: "I don't know that he is coming.", fix: "I don't know if/whether he is coming.", explanation: "Use <strong>if/whether</strong> for uncertainty." },
      { mistake: "The problem is if we can go.", fix: "The problem is whether we can go.", explanation: "Use <strong>whether</strong> as complement." },
      { mistake: "I am interested in if she agrees.", fix: "I am interested in whether she agrees.", explanation: "After prepositions, use <strong>whether</strong>." },
      { mistake: "I wonder that she is okay.", fix: "I wonder if/whether she is okay.", explanation: "After 'wonder', use <strong>if/whether</strong>." },
      { mistake: "Who is she is a mystery.", fix: "Who she is is a mystery.", explanation: "Statement order: who she IS." },
      { mistake: "He told that he was tired.", fix: "He told me that he was tired.", explanation: "<strong>Tell</strong> needs an object." },
      { mistake: "I don't know where is he.", fix: "I don't know where he is.", explanation: "Statement word order." },
      { mistake: "She asked me that I help her.", fix: "She asked me to help her.", explanation: "After 'ask someone', use infinitive." },
      { mistake: "I think to go to the store.", fix: "I think I will go to the store.", explanation: "Use noun clause after 'think'." },
      { mistake: "Whoever wants to come, they can join.", fix: "Whoever wants to come can join.", explanation: "Don't add extra subject after 'whoever'." },
      { mistake: "She explained me what happened.", fix: "She explained what happened.", explanation: "After 'explain', no indirect object." },
      { mistake: "What he said is interesting.", fix: "Correct! 'What he said' is the subject.", explanation: "This sentence is CORRECT." },
      { mistake: "That she is happy is obvious. It is obvious that she is happy.", fix: "Both correct. Second is more natural.", explanation: "Both are grammatically correct." },
      { mistake: "I think it is true. (formal)", fix: "I think that it is true.", explanation: "In formal writing, keep <strong>that</strong>." },
      { mistake: "I don't know how old is he.", fix: "I don't know how old he is.", explanation: "Statement order in embedded questions." },
      { mistake: "It is important what he thinks.", fix: "What he thinks is important.", explanation: "Use 'what clause' as subject on its own." }
    ],
    nativeSpeaker: {
      conversation: {
        title: "Casual Conversation — Opinions",
        lines: [
          { speaker: "A", text: "So <strong>what do you think</strong> about the new policy?" },
          { speaker: "B", text: "I think <strong>that it's too strict</strong>, honestly." },
          { speaker: "A", text: "Really? I don't know <strong>whether I agree</strong> with you." },
          { speaker: "B", text: "Well, <strong>what matters most</strong> is that employees are happy." },
          { speaker: "A", text: "I guess <strong>what you're saying</strong> makes sense." },
          { speaker: "B", text: "The problem is <strong>that management doesn't listen</strong>." }
        ]
      },
      academic: {
        title: "Academic Writing",
        examples: [
          "The study shows <strong>that climate change is accelerating</strong>.",
          "<strong>What the researchers discovered</strong> was unexpected.",
          "It is clear <strong>that further investigation is needed</strong>.",
          "The question of <strong>whether the results are valid</strong> remains.",
          "<strong>Why the experiment failed</strong> is still under analysis."
        ]
      },
      professional: {
        title: "Professional — Meetings",
        examples: [
          "I suggest <strong>that we postpone the deadline</strong>.",
          "Do you know <strong>when the client expects delivery</strong>?",
          "The report shows <strong>that sales have increased</strong>.",
          "It is essential <strong>that we address this issue</strong>.",
          "Can you confirm <strong>whether the budget was approved</strong>?"
        ]
      },
      business: {
        title: "Business — Strategy",
        examples: [
          "<strong>What we need to focus on</strong> is customer retention.",
          "It is our belief <strong>that innovation drives growth</strong>.",
          "The board agreed <strong>that the merger was beneficial</strong>.",
          "<strong>Whether we enter the Asian market</strong> will be decided next month.",
          "Our analysis shows <strong>that costs can be reduced</strong>."
        ]
      }
    },
    finalQuiz50: [
      { question: "_____ she said surprised everyone.", options: ["What", "That", "When", "Where"], answer: 0, explanation: "'What she said' is a noun clause as subject." },
      { question: "I don't know _____ he is.", options: ["where is", "where", "where does", "what"], answer: 1, explanation: "Statement order: 'where he is'." },
      { question: "_____ he passed the exam is great news.", options: ["What", "That", "If", "Why"], answer: 1, explanation: "'That he passed' is a noun clause as subject." },
      { question: "The problem is _____ we don't have time.", options: ["what", "that", "when", "where"], answer: 1, explanation: "'That' introduces the complement." },
      { question: "Can you tell me _____ the meeting starts?", options: ["when", "when does", "what", "that"], answer: 0, explanation: "Embedded question: 'when the meeting starts'." },
      { question: "_____ wins the race will get a prize.", options: ["Who", "Whom", "Whoever", "What"], answer: 2, explanation: "'Whoever' = any person who." },
      { question: "I wonder _____ she is feeling better.", options: ["that", "if", "what", "when"], answer: 1, explanation: "'If' for yes/no uncertainty after 'wonder'." },
      { question: "This is _____ I wanted to tell you.", options: ["what", "that", "which", "when"], answer: 0, explanation: "'What' clause as complement." },
      { question: "It is clear _____ she is wrong.", options: ["what", "that", "if", "when"], answer: 1, explanation: "'That' after dummy subject 'it'." },
      { question: "Do _____ makes you happy.", options: ["that", "what", "whatever", "whoever"], answer: 2, explanation: "'Whatever' = anything that." },
      { question: "She asked _____ I was ready.", options: ["what", "that", "whether", "when"], answer: 2, explanation: "'Whether' for yes/no in reported speech." },
      { question: "He said _____ he would call.", options: ["what", "that", "if", "when"], answer: 1, explanation: "'That' in reported speech." },
      { question: "The fact _____ he survived is a miracle.", options: ["what", "that", "which", "if"], answer: 1, explanation: "'That' after 'the fact'." },
      { question: "I don't know _____ she is angry.", options: ["what", "that", "why", "which"], answer: 2, explanation: "'Why she is angry' = object." },
      { question: "She explained _____ she was late.", options: ["me that", "to me that", "that", "me why"], answer: 2, explanation: "After 'explain', no indirect object without 'to'." },
      { question: "I'm worried about _____ he'll arrive.", options: ["if", "whether", "that", "what"], answer: 1, explanation: "After prepositions, use 'whether'." },
      { question: "_____ is important is that we try.", options: ["That", "What", "If", "When"], answer: 1, explanation: "'What' clause as subject." },
      { question: "She told me _____ she would come.", options: ["what", "that", "if", "when"], answer: 1, explanation: "'That' after 'told me'." },
      { question: "I don't know _____ he wants.", options: ["what does", "what", "that does", "if does"], answer: 1, explanation: "Statement order: 'what he wants'." },
      { question: "_____ she is happy is obvious.", options: ["What", "That", "If", "Why"], answer: 1, explanation: "'That' clause as subject." },
      { question: "It is said _____ he is very rich.", options: ["what", "that", "if", "whether"], answer: 1, explanation: "'That' after passive verb with dummy 'it'." },
      { question: "Can you tell me _____ the bank is?", options: ["where", "where is", "if where", "that where"], answer: 0, explanation: "Embedded question: 'where the bank is'." },
      { question: "I'm not sure _____ to go or stay.", options: ["if", "whether", "that", "what"], answer: 1, explanation: "'Whether' + infinitive." },
      { question: "She asked me _____ I was from.", options: ["what", "where", "if", "that"], answer: 1, explanation: "'Where' in embedded question." },
      { question: "Do you know _____ she lives?", options: ["where", "where does", "if where", "that where"], answer: 0, explanation: "Statement order: 'where she lives'." },
      { question: "_____ he left is a mystery.", options: ["What", "Why", "If", "That"], answer: 1, explanation: "'Why' clause as subject." },
      { question: "I understand _____ she was angry.", options: ["why", "what", "if", "that"], answer: 0, explanation: "'Why' clause as object." },
      { question: "_____ arrives first will win.", options: ["Who", "Whom", "Whoever", "What"], answer: 2, explanation: "'Whoever' as subject." },
      { question: "Take _____ you like best.", options: ["whoever", "whatever", "whichever", "whenever"], answer: 2, explanation: "'Whichever' from a set." },
      { question: "I'll be there _____ you need me.", options: ["whoever", "whatever", "whichever", "whenever"], answer: 3, explanation: "'Whenever' = any time that." },
      { question: "She will follow him _____ he goes.", options: ["whoever", "whatever", "wherever", "whenever"], answer: 2, explanation: "'Wherever' = any place that." },
      { question: "The question is _____ we can afford it.", options: ["if", "whether", "that", "what"], answer: 1, explanation: "After 'the question is', use 'whether'." },
      { question: "I don't know _____ he will come or not.", options: ["if", "whether", "that", "when"], answer: 1, explanation: "'Whether...or not' pattern." },
      { question: "_____ she said surprised everyone.", options: ["What", "That", "Which", "Who"], answer: 0, explanation: "'What' = the thing that." },
      { question: "I think _____ it's a good idea.", options: ["what", "that", "if", "when"], answer: 1, explanation: "'That' after 'think' (can be omitted)." },
      { question: "The problem is _____ we don't have time.", options: ["what", "that", "if", "when"], answer: 1, explanation: "'That' clause as complement." },
      { question: "_____ you say is true.", options: ["That", "What", "Who", "When"], answer: 1, explanation: "'What you say' = subject." },
      { question: "I don't remember _____ we met.", options: ["what", "that", "when", "which"], answer: 2, explanation: "'When' clause as object." },
      { question: "Show me _____ you bought.", options: ["what", "that", "if", "when"], answer: 0, explanation: "'What you bought' = object." },
      { question: "It is important _____ you understand this.", options: ["what", "that", "if", "when"], answer: 1, explanation: "'That' after dummy 'it'." },
      { question: "_____ wants to come can join.", options: ["Who", "Whom", "Whoever", "Whichever"], answer: 2, explanation: "'Whoever' = any person who." },
      { question: "I'm interested in _____ she thinks.", options: ["if", "whether", "what", "that"], answer: 2, explanation: "'What' as object of preposition." },
      { question: "She told me _____ she was tired.", options: ["what", "that", "if", "when"], answer: 1, explanation: "'That' in reported speech." },
      { question: "_____ he was late is not surprising.", options: ["What", "That", "If", "Why"], answer: 1, explanation: "'That' clause as subject." },
      { question: "I don't know _____ she wants to do.", options: ["what", "that", "if", "when"], answer: 0, explanation: "'What' clause as object." },
      { question: "_____ he thinks is not important.", options: ["That", "What", "If", "When"], answer: 1, explanation: "'What' clause as subject." },
      { question: "She asked _____ I was feeling okay.", options: ["what", "that", "if", "when"], answer: 2, explanation: "'If' for yes/no reported question." },
      { question: "It's clear _____ he is lying.", options: ["what", "that", "if", "why"], answer: 1, explanation: "'That' after dummy 'it' + adjective." },
      { question: "I don't know _____ she wants.", options: ["what", "that", "if", "when"], answer: 0, explanation: "'What' = the thing that she wants." },
      { question: "_____ we should go is still undecided.", options: ["What", "That", "Where", "Who"], answer: 2, explanation: "'Where' clause as subject." },
      { question: "The truth is _____ nobody knows.", options: ["what", "that", "if", "when"], answer: 1, explanation: "'That' clause as complement." }
    ]
  },
  "Adverb Clauses": {
    intro: {
      text: "An adverb clause is a dependent clause that functions as an adverb, modifying a verb, adjective, or another adverb. It tells when, why, under what condition, in contrast, or for what purpose something happens. Adverb clauses are introduced by subordinating conjunctions and contain both a subject and a verb.",
      spanish: "Una cláusula adverbial es una cláusula dependiente que funciona como adverbio, modificando un verbo, adjetivo u otro adverbio.",
      examples: [
        { text: "<strong>When you arrive</strong>, call me.", note: "Time clause modifying 'call'." },
        { text: "He passed <strong>because he studied hard</strong>.", note: "Cause clause modifying 'passed'." },
        { text: "<strong>If it rains</strong>, we will cancel.", note: "Condition clause modifying 'will cancel'." }
      ]
    },
    subtopics: [
      {
        id: "time-clauses",
        title: "Time Clauses",
        spanish: "Cláusulas de Tiempo",
        note: "Las cláusulas de tiempo indican CUÁNDO ocurre la acción principal. Usan el Present Simple para futuro, NO 'will'.",
        sections: [
          {
            title: "When / Whenever",
            spanish: "When — Cuando / Whenever — Siempre que",
            text: "<strong>When</strong> means 'at that time'. <strong>Whenever</strong> means 'every time that'. Use Present Simple in the time clause for future meaning.",
            examples: [
              "<strong>When</strong> I arrive, I will call you.",
              "<strong>Whenever</strong> she comes, we have dinner together.",
              "Call me <strong>when</strong> you are ready.",
              "<strong>When</strong> the meeting ends, we will discuss the proposal.",
              "<strong>Whenever</strong> he travels, he brings souvenirs."
            ]
          },
          {
            title: "While / As",
            spanish: "While — Mientras / As — A medida que",
            text: "<strong>While</strong> indicates two actions happening at the same time. <strong>As</strong> indicates simultaneous progression or 'at the same time as'.",
            examples: [
              "She was reading <strong>while</strong> he was cooking.",
              "<strong>As</strong> I was walking, I saw a beautiful sunset.",
              "<strong>While</strong> I understand your point, I disagree.",
              "The phone rang <strong>while</strong> I was taking a shower.",
              "<strong>As</strong> the years passed, they grew closer."
            ]
          },
          {
            title: "Before / After",
            spanish: "Before — Antes de que / After — Después de que",
            text: "<strong>Before</strong> indicates the main clause happens earlier. <strong>After</strong> indicates the main clause happens later.",
            examples: [
              "<strong>Before</strong> you leave, turn off the lights.",
              "She called me <strong>after</strong> she arrived.",
              "<strong>Before</strong> the movie started, we bought popcorn.",
              "I always exercise <strong>after</strong> I finish work.",
              "<strong>After</strong> she graduated, she moved to London."
            ]
          },
          {
            title: "Until / Till",
            spanish: "Until — Hasta que",
            text: "<strong>Until</strong> (and informal <strong>till</strong>) indicate that the action continues up to a certain point in time. 'Till' is less formal than 'until'.",
            examples: [
              "Wait here <strong>until</strong> I come back.",
              "I didn't know the truth <strong>until</strong> she told me.",
              "Stay in bed <strong>until</strong> you feel better.",
              "The store is open <strong>until</strong> nine o'clock.",
              "Let's wait <strong>till</strong> the rain stops."
            ]
          },
          {
            title: "As soon as / Once",
            spanish: "As soon as — Tan pronto como / Once — Una vez que",
            text: "<strong>As soon as</strong> means 'immediately after'. <strong>Once</strong> means 'after one thing happens, then another follows'. Both emphasize that one action immediately follows another.",
            examples: [
              "Call me <strong>as soon as</strong> you arrive.",
              "<strong>Once</strong> you finish the report, send it to me.",
              "I will leave <strong>as soon as</strong> the meeting ends.",
              "<strong>Once</strong> she heard the news, she cried.",
              "Let me know <strong>as soon as</strong> you have the results."
            ]
          },
          {
            title: "Since",
            spanish: "Since — Desde que",
            text: "<strong>Since</strong> indicates a starting point in time. It often pairs with Present Perfect or Past Perfect in the main clause.",
            examples: [
              "I have lived here <strong>since</strong> I was a child.",
              "She has not called <strong>since</strong> she left.",
              "We have been friends <strong>since</strong> we met in college.",
              "He hasn't eaten <strong>since</strong> breakfast.",
              "They have been arguing <strong>since</strong> the meeting started."
            ]
          }
        ]
      },
      {
        id: "cause-clauses",
        title: "Cause / Reason Clauses",
        spanish: "Cláusulas de Causa o Razón",
        note: "Las cláusulas de causa explican POR QUÉ ocurre algo.",
        sections: [
          {
            title: "Because / Since / As",
            spanish: "Because — Porque / Since — Ya que / As — Puesto que",
            text: "<strong>Because</strong> gives a direct reason. <strong>Since</strong> and <strong>as</strong> give a known or obvious reason and are less emphatic.",
            examples: [
              "She stayed home <strong>because</strong> she was sick.",
              "<strong>Since</strong> you are here, we can start the meeting.",
              "<strong>As</strong> it was raining, we stayed indoors.",
              "He passed the exam <strong>because</strong> he studied hard.",
              "<strong>Since</strong> nobody objects, the proposal is approved."
            ]
          },
          {
            title: "Now that / Inasmuch as",
            spanish: "Now that — Ahora que / Inasmuch as — Puesto que (formal)",
            text: "<strong>Now that</strong> indicates a new situation that causes something. <strong>Inasmuch as</strong> is formal and means 'to the extent that' or 'because'.",
            examples: [
              "<strong>Now that</strong> we have the funding, we can start.",
              "<strong>Now that</strong> you mention it, I do remember.",
              "<strong>Inasmuch as</strong> the data supports the claim, we accept it.",
              "<strong>Now that</strong> spring has arrived, the garden is blooming.",
              "<strong>Inasmuch as</strong> both parties agree, we will proceed."
            ]
          }
        ]
      },
      {
        id: "contrast-clauses",
        title: "Contrast / Concession Clauses",
        spanish: "Cláusulas de Contraste o Concesión",
        note: "Las cláusulas de contraste muestran una idea OPUESTA a la cláusula principal.",
        sections: [
          {
            title: "Although / Even though / Though",
            spanish: "Although — Aunque / Even though — A pesar de que / Though — Aunque (informal)",
            text: "<strong>Although</strong> is the most formal. <strong>Even though</strong> is the strongest (adds emphasis). <strong>Though</strong> is more common in spoken English and can also be used at the end of a sentence.",
            examples: [
              "<strong>Although</strong> it was cold, we went swimming.",
              "<strong>Even though</strong> she studied hard, she failed.",
              "He is friendly, <strong>though</strong> he seems shy at first.",
              "<strong>Although</strong> the traffic was bad, we arrived on time.",
              "I enjoyed the movie, <strong>though</strong> the ending was confusing."
            ]
          },
          {
            title: "Whereas / While",
            spanish: "Whereas — Mientras que / While — Mientras que (contraste)",
            text: "<strong>Whereas</strong> and <strong>while</strong> show a direct contrast between two facts. They are often used to compare two different situations or people.",
            examples: [
              "She is tall, <strong>whereas</strong> her brother is short.",
              "<strong>While</strong> I enjoy coffee, my wife prefers tea.",
              "The north is cold, <strong>whereas</strong> the south is warm.",
              "<strong>While</strong> some support the idea, others oppose it.",
              "He works in finance, <strong>whereas</strong> she is an artist."
            ]
          }
        ]
      },
      {
        id: "condition-clauses",
        title: "Condition Clauses",
        spanish: "Cláusulas Condicionales",
        note: "Las cláusulas condicionales expresan una CONDICIÓN necesaria para que ocurra la acción principal.",
        sections: [
          {
            title: "If / Unless",
            spanish: "If — Si / Unless — A menos que",
            text: "<strong>If</strong> presents a condition. <strong>Unless</strong> means 'if not' and is already negative — do NOT add 'not' after it.",
            examples: [
              "<strong>If</strong> it rains, we will stay home.",
              "You will not pass <strong>unless</strong> you study.",
              "<strong>If</strong> you need help, just ask.",
              "I will go <strong>unless</strong> it is too expensive.",
              "<strong>If</strong> I were you, I would accept the offer."
            ]
          },
          {
            title: "Provided that / As long as",
            spanish: "Provided that — Siempre que / As long as — Con tal de que",
            text: "<strong>Provided that</strong> and <strong>as long as</strong> express a condition that must be satisfied. They are more emphatic than 'if'.",
            examples: [
              "You can borrow the car <strong>provided that</strong> you drive carefully.",
              "<strong>As long as</strong> you finish on time, I am happy.",
              "We will go <strong>provided that</strong> everyone agrees.",
              "You can stay <strong>as long as</strong> you are quiet.",
              "The offer stands <strong>provided that</strong> you accept by Friday."
            ]
          },
          {
            title: "Even if / Whether or not",
            spanish: "Even if — Incluso si / Whether or not — Ya sea que... o no",
            text: "<strong>Even if</strong> presents an extreme condition that does not change the result. <strong>Whether or not</strong> presents two alternatives that give the same result.",
            examples: [
              "<strong>Even if</strong> you apologize, she will not forgive you.",
              "I am going <strong>whether or not</strong> you come with me.",
              "<strong>Even if</strong> it costs a lot, I will buy it.",
              "We will hold the event <strong>whether or not</strong> it rains.",
              "<strong>Even if</strong> he is late, please wait for him."
            ]
          }
        ]
      },
      {
        id: "purpose-clauses",
        title: "Purpose Clauses",
        spanish: "Cláusulas de Propósito o Finalidad",
        note: "Las cláusulas de propósito explican el OBJETIVO o la INTENCIÓN de la acción.",
        sections: [
          {
            title: "So that / In order that",
            spanish: "So that — Para que / In order that — A fin de que",
            text: "<strong>So that</strong> introduces a purpose or goal. It is often followed by modal verbs like can, could, will, would. <strong>In order that</strong> is more formal.",
            examples: [
              "She studies hard <strong>so that</strong> she can pass the exam.",
              "He spoke slowly <strong>so that</strong> everyone could understand.",
              "I left early <strong>so that</strong> I would not miss the train.",
              "We saved money <strong>in order that</strong> we could travel.",
              "Please arrive early <strong>so that</strong> we can start on time."
            ]
          },
          {
            title: "In order to (Infinitive of Purpose)",
            spanish: "In order to — Para / A fin de (infinitivo de propósito)",
            text: "Use <strong>in order to</strong> or simply <strong>to</strong> + infinitive to express purpose with the same subject. This is a reduced form of a purpose clause.",
            examples: [
              "She studied hard <strong>to pass</strong> the exam.",
              "He went to the store <strong>to buy</strong> milk.",
              "I am saving money <strong>in order to</strong> travel abroad.",
              "They called <strong>to confirm</strong> the reservation.",
              "She exercises daily <strong>to stay</strong> healthy."
            ]
          }
        ]
      },
      {
        id: "result-clauses",
        title: "Result Clauses",
        spanish: "Cláusulas de Resultado",
        note: "Las cláusulas de resultado expresan la CONSECUENCIA de una acción o situación.",
        text: "Result clauses show the consequence or result of an action or state. They are introduced by <strong>so...that</strong> and <strong>such...that</strong>. The structure differs: <strong>so</strong> modifies adjectives or adverbs; <strong>such</strong> modifies nouns.",
        examples: [
          { text: "It was <strong>so</strong> cold <strong>that</strong> the lake froze.", rule: "so + adjective + that" },
          { text: "She ran <strong>so</strong> fast <strong>that</strong> nobody could catch her.", rule: "so + adverb + that" },
          { text: "It was <strong>such</strong> a cold day <strong>that</strong> we stayed inside.", rule: "such + (article) + adjective + noun + that" },
          { text: "There were <strong>such</strong> many people <strong>that</strong> we could not move.", rule: "such + adjective + plural noun + that" },
          { text: "He had <strong>such</strong> little time <strong>that</strong> he skipped lunch.", rule: "such + adjective + uncountable noun + that" }
        ],
        note: "Nota: 'So' va con adjetivos/adverbios. 'Such' va con sustantivos (con o sin adjetivo)."
      },
      {
        id: "manner-clauses",
        title: "Manner Clauses",
        spanish: "Cláusulas de Modo",
        note: "Las cláusulas de modo describen CÓMO se realiza la acción.",
        text: "Manner clauses describe how an action is performed or how something appears. They answer the question 'how?' or 'in what manner?'.",
        examples: [
          { text: "She looks <strong>as if</strong> she has seen a ghost.", rule: "Implied similarity — she appears that way." },
          { text: "He acted <strong>as though</strong> nothing had happened.", rule: "Past unreal situation." },
          { text: "Do it <strong>the way</strong> I showed you.", rule: "Following a model or example." },
          { text: "Leave everything <strong>as</strong> it is.", rule: "In the same state / condition." },
          { text: "You talk <strong>as if</strong> you know everything.", rule: "Comparison of behavior." }
        ]
      },
      {
        id: "place-clauses",
        title: "Place Clauses",
        spanish: "Cláusulas de Lugar",
        note: "Las cláusulas de lugar indican DÓNDE ocurre la acción.",
        text: "Place clauses describe the location of the main action. They are introduced by <strong>where</strong>, <strong>wherever</strong>, and <strong>everywhere</strong>.",
        examples: [
          { text: "Put the keys <strong>where</strong> you can find them.", rule: "Specific location." },
          { text: "I will follow you <strong>wherever</strong> you go.", rule: "Any location." },
          { text: "<strong>Everywhere</strong> she goes, people recognize her.", rule: "All locations." },
          { text: "Stay <strong>where</strong> you are.", rule: "Remain in current location." },
          { text: "Sit <strong>wherever</strong> you like.", rule: "Free choice of location." }
        ]
      },
      {
        id: "comparison-clauses",
        title: "Comparison Clauses",
        spanish: "Cláusulas de Comparación",
        note: "Las cláusulas de comparación establecen una COMPARACIÓN entre dos elementos.",
        text: "Comparison clauses compare one action or quality with another. They use <strong>than</strong>, <strong>as...as</strong>, and <strong>just as</strong>.",
        examples: [
          { text: "She is taller <strong>than</strong> I (am).", rule: "Comparative with than." },
          { text: "He is <strong>as</strong> tall <strong>as</strong> his brother (is).", rule: "Equal comparison with as...as." },
          { text: "<strong>Just as</strong> I expected, she arrived late.", rule: "Similarity between two situations." },
          { text: "She speaks English <strong>as</strong> fluently <strong>as</strong> a native speaker (does).", rule: "Equal comparison of manner." },
          { text: "The movie was not <strong>as</strong> good <strong>as</strong> I had hoped.", rule: "Negative equal comparison." }
        ]
      },
      {
        id: "clause-reduction",
        title: "Clause Reduction (Participial Phrases)",
        spanish: "Reducción de Cláusulas (Frases de Participio)",
        note: "Se puede REDUCIR una cláusula adverbial cuando el sujeto es el mismo en ambas cláusulas, eliminando el sujeto y cambiando el verbo.",
        text: "When the subject of the adverb clause is the same as the main clause subject, and the verb is active, you can reduce it to a participial phrase. This creates more concise, formal sentences.",
        rules: [
          { name: "Active Verb → Present Participle (-ing)", text: "Remove the conjunction and subject. Change the verb to -ing.", example: "<strong>While I was walking</strong> home → <strong>While walking</strong> home" },
          { name: "Passive Verb → Past Participle (-ed/-en)", text: "Remove conjunction + subject + be. Use the past participle.", example: "<strong>When it is viewed</strong> from above → <strong>When viewed</strong> from above" },
          { name: "Time Clause → Present Participle", text: "For time clauses with when/while, keep the conjunction with the -ing form.", example: "<strong>When you arrive</strong> → <strong>When arriving</strong> (formal)" },
          { name: "Cause Clause → Having + Past Participle", text: "For completed actions before the main clause, use having + past participle.", example: "<strong>Because she had finished</strong> → <strong>Having finished</strong>" }
        ],
        examples: [
          { full: "While I was walking home, I saw an accident.", reduced: "While walking home, I saw an accident." },
          { full: "Because she was tired, she went to bed early.", reduced: "Being tired, she went to bed early." },
          { full: "After he had finished dinner, he went for a walk.", reduced: "Having finished dinner, he went for a walk." },
          { full: "When it is cooked properly, this dish is delicious.", reduced: "When cooked properly, this dish is delicious." },
          { full: "Since she moved to London, she has been happy.", reduced: "Since moving to London, she has been happy." }
        ]
      },
      {
        id: "inversion",
        title: "Inversion in Adverb Clauses",
        spanish: "Inversión en Cláusulas Adverbiales",
        note: "En inglés formal, ciertas expresiones negativas o restrictivas causan INVERSIÓN del sujeto y verbo auxiliar.",
        text: "In formal and literary English, certain negative and restrictive expressions cause subject-auxiliary inversion in the main clause or in the adverb clause itself. This is a more sophisticated structure used in writing.",
        rules: [
          { name: "Hardly / Scarcely...when", text: "Use Past Perfect in the inverted clause. Invert had + subject.", example: "<strong>Hardly had I arrived</strong> when the phone rang." },
          { name: "No sooner...than", text: "Similar to hardly. Invert had + subject.", example: "<strong>No sooner had she left</strong> than he started crying." },
          { name: "Not until / Not since", text: "Invert in the main clause, not the adverb clause.", example: "<strong>Not until</strong> I saw the message <strong>did I understand</strong>." },
          { name: "Only after / Only when / Only if", text: "Invert in the main clause after the adverb clause.", example: "<strong>Only after</strong> she explained <strong>did I understand</strong>." },
          { name: "Never before / Rarely / Seldom", text: "These at the beginning cause inversion in the main clause.", example: "<strong>Never before had I seen</strong> such a beautiful sunset." }
        ],
        examples: [
          { text: "<strong>Hardly had</strong> the movie started <strong>when</strong> the fire alarm went off.", note: "Past perfect inversion + when clause." },
          { text: "<strong>No sooner had</strong> she sat down <strong>than</strong> the doorbell rang.", note: "Past perfect inversion + than clause." },
          { text: "<strong>Not until</strong> I checked my email <strong>did I realize</strong> the meeting was cancelled.", note: "Main clause inversion after not until." },
          { text: "<strong>Only after</strong> she apologized <strong>did he forgive</strong> her.", note: "Main clause inversion after only after." },
          { text: "<strong>Never before had</strong> the team <strong>won</strong> three games in a row.", note: "Inversion after negative adverbial at the front." }
        ]
      },
      {
        id: "ellipsis",
        title: "Ellipsis in Adverb Clauses",
        spanish: "Elipsis en Cláusulas Adverbiales",
        note: "Se puede OMITIR el sujeto y el verbo 'be' en cláusulas adverbiales cuando el significado es claro.",
        text: "Ellipsis in adverb clauses means omitting the subject and the verb 'be' when they are the same as in the main clause. This creates very concise, natural-sounding sentences. Common with <strong>when, while, if, unless, though, as, as if, whenever</strong>.",
        examples: [
          { full: "When it is possible, arrive early.", ellipsis: "When possible, arrive early." },
          { full: "While you are in London, visit the British Museum.", ellipsis: "While in London, visit the British Museum." },
          { full: "If it is necessary, I will call you.", ellipsis: "If necessary, I will call you." },
          { full: "Although he was tired, he continued working.", ellipsis: "Although tired, he continued working." },
          { full: "Unless it is absolutely required, do not disturb me.", ellipsis: "Unless absolutely required, do not disturb me." }
        ]
      },
      {
        id: "academic-english",
        title: "Academic English Usage",
        spanish: "Uso Académico (TOEFL, IELTS, Ensayos, Informes)",
        note: "Las cláusulas adverbiales son ESENCIALES en writing académico para mostrar relaciones lógicas complejas.",
        text: "In academic writing, adverb clauses are essential for showing complex logical relationships. They improve cohesion and demonstrate sophisticated command of English. Used extensively in TOEFL, IELTS, GRE, and university essays.",
        sections: [
          {
            title: "Common Academic Patterns",
            spanish: "Patrones Académicos Comunes",
            examples: [
              { text: "<strong>Although</strong> the results were promising, further research is needed.", note: "Concession — common in discussion sections." },
              { text: "<strong>Because</strong> the sample size was small, the findings may not be generalizable.", note: "Cause — explaining limitations." },
              { text: "<strong>While</strong> Smith (2019) argues for reform, Jones (2020) presents counter-evidence.", note: "Contrast — comparing sources." },
              { text: "<strong>As</strong> the data suggest, there is a significant correlation.", note: "Evidence-based claim." },
              { text: "<strong>Provided that</strong> the conditions are met, the hypothesis is supported.", note: "Condition — academic hedging." }
            ]
          },
          {
            title: "IELTS / TOEFL Writing Tips",
            spanish: "Consejos para IELTS / TOEFL Writing",
            examples: [
              "Use <strong>while</strong> and <strong>whereas</strong> to compare and contrast ideas in Task 1 and Task 2 essays.",
              "Start a body paragraph with <strong>Although</strong> or <strong>While</strong> to show you can acknowledge counterarguments.",
              "Use <strong>because</strong> and <strong>since</strong> to give reasons in Task 2 opinion essays.",
              "Use <strong>as long as</strong> or <strong>provided that</strong> for conditional arguments in discussion essays.",
              "Avoid starting too many sentences with adverb clauses — vary your sentence structure."
            ]
          }
        ],
        examples: [
          "<strong>Although</strong> the experiment yielded negative results, the methodology was sound.",
          "<strong>Because</strong> the data were collected over ten years, the study has high validity.",
          "<strong>While</strong> previous studies focused on adults, this research examines children.",
          "<strong>As</strong> the economy grows, employment rates tend to increase proportionally.",
          "<strong>Only after</strong> the results were analyzed did the pattern become clear."
        ]
      },
      {
        id: "punctuation",
        title: "Punctuation Rules",
        spanish: "Reglas de Puntuación",
        note: "La PUNTUACIÓN cambia según la posición de la cláusula adverbial.",
        text: "The punctuation of adverb clauses depends on their position in the sentence. When the adverb clause comes BEFORE the main clause, use a comma. When it comes AFTER the main clause, NO comma is needed (unless it is non-essential or parenthetical).",
        rules: [
          { name: "Adverb Clause First → Comma", text: "When the adverb clause begins the sentence, place a comma after it.", example: "<strong>When you arrive</strong>, call me." },
          { name: "Adverb Clause Last → No Comma", text: "When the adverb clause follows the main clause, no comma is needed.", example: "Call me <strong>when you arrive</strong>." },
          { name: "Contrast Clauses → Usually Comma", text: "Contrast clauses (although, even though) often take a comma even when they follow the main clause.", example: "He passed, <strong>although he did not study much</strong>." },
          { name: "Parenthetical Clauses → Commas", text: "When an adverb clause interrupts the main clause, use commas around it.", example: "The results, <strong>as we expected</strong>, were positive." },
          { name: "Reduced Clauses → Comma", text: "Reduced adverb clauses at the beginning always take a comma.", example: "<strong>While walking home</strong>, I saw an accident." }
        ]
      }
    ],
    commonMistakes25: [
      { mistake: "When I will arrive, I will call you.", fix: "When I arrive, I will call you.", explanation: "In time clauses with when, while, before, after, until, as soon as, use Present Simple for future meaning — NOT 'will'." },
      { mistake: "Because she was tired, so she went to bed.", fix: "Because she was tired, she went to bed.", explanation: "Use EITHER 'because' OR 'so' — not both. They both express cause/result; using them together is redundant." },
      { mistake: "Although he was tired, but he kept working.", fix: "Although he was tired, he kept working.", explanation: "Use EITHER 'although' OR 'but' — not both. They both indicate contrast." },
      { mistake: "I'll go unless it doesn't rain.", fix: "I'll go unless it rains.", explanation: "'Unless' already means 'if not'. Adding 'not' creates a double negative." },
      { mistake: "No sooner I had arrived when the phone rang.", fix: "No sooner had I arrived than the phone rang.", explanation: "After 'no sooner', use inverted word order (had + subject) and pair with 'than', NOT 'when'." },
      { mistake: "While I am understanding the lesson, I took notes.", fix: "While I understood the lesson, I took notes.", explanation: "Stative verbs (understand, know, believe) are generally not used in continuous forms, even in adverb clauses." },
      { mistake: "She speaks English as fluent as a native.", fix: "She speaks English as fluently as a native speaker.", explanation: "After verbs of action, use an ADVERB (fluently), not an adjective (fluent), in comparative as...as structures." },
      { mistake: "Hardly I had left when it started to rain.", fix: "Hardly had I left when it started to rain.", explanation: "After negative adverbials like 'hardly', 'never', 'no sooner' at the beginning of a sentence, invert the subject and auxiliary verb." },
      { mistake: "Even I study all night, I will not pass.", fix: "Even if I study all night, I will not pass.", explanation: "'Even' is not a conjunction. Use 'even if' or 'even though' to introduce an adverb clause of concession or condition." },
      { mistake: "He ran so fast that he could catch the bus.", fix: "He ran so fast that he could not catch the bus. (or: He ran fast so that he could catch the bus.)", explanation: "Clarify: 'so...that' = result (he ran so fast that he couldn't catch it); 'so that' = purpose (he ran fast so that he could catch it)." },
      { mistake: "Wherever you will go, I will follow you.", fix: "Wherever you go, I will follow you.", explanation: "Place clauses use Present Simple for future meaning, just like time clauses." },
      { mistake: "I am saving money so that I can buy a house.", fix: "I am saving money so that I can buy a house.", explanation: "This sentence is actually CORRECT. Common mistake is to use 'for' + infinitive: 'I am saving money for buy a house' ✗." },
      { mistake: "He looks as if he is seeing a ghost.", fix: "He looks as if he has seen a ghost.", explanation: "After 'as if'/'as though', use the appropriate tense. For imaginary or unreal present situations, use past tense; for past unreal, use past perfect." },
      { mistake: "Since ten years, I have lived here.", fix: "Since 2015 / for ten years, I have lived here.", explanation: "'Since' requires a specific point in time (a date, an event), not a duration. Use 'for' with durations." },
      { mistake: "As soon as I will finish, I will call you.", fix: "As soon as I finish, I will call you.", explanation: "'As soon as' is a time conjunction — use Present Simple, not 'will', for future reference." },
      { mistake: "She is taller than me.", fix: "She is taller than I (am).", explanation: "In formal grammar, 'than' is a conjunction, so it should be followed by a subject pronoun (I, he, she, they). 'Than me' is common in informal English but not preferred in formal writing." },
      { mistake: "Not until I arrived I realized my mistake.", fix: "Not until I arrived did I realize my mistake.", explanation: "When 'not until' starts a sentence, the MAIN clause requires inverted word order (auxiliary + subject)." },
      { mistake: "She acted as if nothing happened, but I knew the truth.", fix: "She acted as if nothing had happened, but I knew the truth.", explanation: "For an unreal past situation after 'as if', use Past Perfect (had happened), not Past Simple." },
      { mistake: "When possible, you should arrive early.", fix: "When possible, arrive early.", explanation: "This sentence is correct. But remember: ellipsis (omitting subject + be) is only possible when the subject is implied and the verb is 'be'." },
      { mistake: "Because of the traffic, so we were late.", fix: "Because of the traffic, we were late.", explanation: "'Because of' is a prepositional phrase, not a conjunction. Do not add 'so' after it." },
      { mistake: "While she is kind, her sister is rude.", fix: "While she is kind, her sister is rude.", explanation: "This is correct. 'While' can mean 'whereas' (contrast) or 'during the time that'. Make sure context makes the meaning clear." },
      { mistake: "In order to she could pass, she studied.", fix: "In order to pass, she studied. (or: In order that she could pass, she studied.)", explanation: "'In order to' is followed by a BASE VERB (infinitive), NOT a clause. For a clause, use 'in order that' + subject + verb." },
      { mistake: "She studied so hard that she passed.", fix: "She studied so hard that she passed.", explanation: "This is correct. But be careful: 'so that' (purpose) vs 'so...that' (result) have different structures." },
      { mistake: "Once you will arrive, we will begin.", fix: "Once you arrive, we will begin.", explanation: "'Once' as a time conjunction follows the same rule as 'when' — use Present Simple for future meaning." },
      { mistake: "Because he didn't study, therefore he failed.", fix: "Because he didn't study, he failed.", explanation: "Use EITHER 'because' OR 'therefore' — not both. They serve the same logical function." },
    ],
    nativeSpeaker: {
      conversation: {
        title: "Casual Conversation — Weekend Plans",
        lines: [
          { speaker: "A", text: "<strong>When</strong> you get home tonight, wanna watch a movie?" },
          { speaker: "B", text: "Sure, <strong>as long as</strong> it's not too late. I'm exhausted." },
          { speaker: "A", text: "I'll pick something short <strong>so that</strong> you don't fall asleep halfway!" },
          { speaker: "B", text: "Ha! <strong>Even if</strong> I do fall asleep, you can finish it." },
          { speaker: "A", text: "I'll wait <strong>until</strong> you're ready. <strong>Whenever</strong> works." },
          { speaker: "B", text: "Great. I'll text you <strong>as soon as</strong> I'm done with dinner." },
        ]
      },
      academic: {
        title: "Academic Writing — Research Paper",
        examples: [
          "<strong>Although</strong> the sample size was limited, the results suggest a significant trend.",
          "<strong>Because</strong> the data were collected over a five-year period, the findings are robust.",
          "<strong>As</strong> discussed in the previous section, the methodology follows established protocols.",
          "<strong>While</strong> previous research focused on urban populations, this study examines rural communities.",
          "<strong>Only after</strong> controlling for socioeconomic factors <strong>did the correlation become</strong> statistically significant.",
          "<strong>Provided that</strong> the assumptions are met, the model yields accurate predictions.",
          "The hypothesis was confirmed, <strong>even though</strong> some variables could not be controlled."
        ]
      },
      professional: {
        title: "Professional — Meetings & Emails",
        examples: [
          "<strong>As soon as</strong> you have the report, please send it to the team.",
          "I will review the proposal <strong>before</strong> the meeting on Friday.",
          "<strong>Although</strong> the deadline is tight, we can deliver on time.",
          "Please confirm <strong>so that</strong> we can finalize the arrangements.",
          "<strong>Unless</strong> I hear back from you by noon, I will proceed with the original plan.",
          "We should wait <strong>until</strong> the client provides feedback.",
          "<strong>Now that</strong> the contract is signed, we can begin implementation."
        ]
      },
      business: {
        title: "Business — Negotiations & Strategy",
        examples: [
          "<strong>Even if</strong> the competitor lowers their price, we should maintain our premium positioning.",
          "<strong>While</strong> our revenue grew by 10%, our market share decreased slightly.",
          "We will invest in R&D <strong>so that</strong> we can stay ahead of market trends.",
          "<strong>As long as</strong> the profit margins remain stable, we can expand operations.",
          "<strong>Whereas</strong> Q1 showed strong growth, Q2 was more challenging.",
          "<strong>Provided that</strong> we secure the funding, the project will launch in Q3.",
          "We should not proceed <strong>unless</strong> we have a clear exit strategy."
        ]
      }
    },
    finalQuiz50: [
      { question: "_____ I arrive, I will call you.", options: ["When", "If", "Because", "Although"], answer: 0, explanation: "'When' introduces a time clause. Use Present Simple for future meaning." },
      { question: "She stayed home _____ she was sick.", options: ["although", "because", "unless", "while"], answer: 1, explanation: "'Because' gives a direct reason for staying home." },
      { question: "_____ it was raining, we went for a walk.", options: ["Because", "Since", "Although", "If"], answer: 2, explanation: "'Although' shows contrast — they went for a walk despite the rain." },
      { question: "You will not pass the exam _____ you study.", options: ["if", "unless", "although", "when"], answer: 1, explanation: "'Unless' means 'if not' — you need to study to pass." },
      { question: "Call me _____ you arrive at the airport.", options: ["as soon as", "although", "because", "if"], answer: 0, explanation: "'As soon as' means immediately after you arrive." },
      { question: "She studied hard _____ she could pass the exam.", options: ["so that", "so...that", "because", "although"], answer: 0, explanation: "'So that' introduces a purpose clause — she studied with the goal of passing." },
      { question: "It was _____ cold _____ the lake froze.", options: ["so...that", "such...that", "so that", "as...as"], answer: 0, explanation: "'So...that' shows result. So + adjective + that = consequence." },
      { question: "Put the keys _____ you can find them.", options: ["where", "when", "if", "because"], answer: 0, explanation: "'Where' introduces a place clause indicating location." },
      { question: "She looks _____ she has seen a ghost.", options: ["as if", "because", "when", "where"], answer: 0, explanation: "'As if' introduces a manner clause — describes how she appears." },
      { question: "He is _____ tall _____ his brother.", options: ["so...that", "as...as", "such...that", "more...than"], answer: 1, explanation: "'As...as' shows equal comparison between two people." },
      { question: "_____ you go, I will follow you.", options: ["Wherever", "Whatever", "However", "Whenever"], answer: 0, explanation: "'Wherever' means 'to any place that' — a place clause." },
      { question: "Wait here _____ I come back.", options: ["until", "because", "although", "if"], answer: 0, explanation: "'Until' indicates the action continues up to a certain point in time." },
      { question: "Hardly _____ I left _____ it started to rain.", options: ["had...when", "did...than", "had...than", "did...when"], answer: 0, explanation: "'Hardly had + subject + past participle...when' is the correct inversion structure." },
      { question: "_____, turn off the lights.", options: ["Before you leave", "Before leaving", "Before you will leave", "Both A and B"], answer: 3, explanation: "Both 'Before you leave' (full clause) and 'Before leaving' (reduced clause) are correct." },
      { question: "_____ she apologized, he forgave her.", options: ["Only after", "Only after did", "Only after had", "After only"], answer: 0, explanation: "'Only after' is correct. The main clause would also need inversion: 'Only after she apologized did he forgive her.'" },
      { question: "_____ it is possible, arrive early.", options: ["When", "If", "Unless", "All of the above"], answer: 3, explanation: "All three can work: 'When possible' (time), 'If possible' (condition), 'Unless impossible' (negative condition)." },
      { question: "Which sentence is correct?", options: ["Although he was tired, but he kept working.", "Although he was tired, he kept working."], answer: 1, explanation: "Use EITHER 'although' OR 'but' — not both." },
      { question: "Which sentence is correct?", options: ["When I will arrive, I will call you.", "When I arrive, I will call you."], answer: 1, explanation: "In time clauses, use Present Simple for future meaning, not 'will'." },
      { question: "No sooner _____ she sat down _____ the doorbell rang.", options: ["had...than", "did...when", "had...when", "did...than"], answer: 0, explanation: "'No sooner had + subject + past participle...than' is the correct structure." },
      { question: "_____ I understand your point, I disagree.", options: ["Because", "While", "Since", "As"], answer: 1, explanation: "'While' here shows contrast, not time — it means 'although'." },
      { question: "She is taller _____ I am.", options: ["than", "then", "as", "that"], answer: 0, explanation: "'Than' is the comparative conjunction used after comparative adjectives." },
      { question: "You can borrow the car _____ you drive carefully.", options: ["provided that", "unless", "although", "while"], answer: 0, explanation: "'Provided that' sets a condition that must be satisfied." },
      { question: "He acted _____ nothing had happened.", options: ["as though", "as if", "like", "Both A and B"], answer: 3, explanation: "Both 'as though' and 'as if' can introduce unreal manner clauses." },
      { question: "_____ we have the funding, we can start the project.", options: ["Now that", "Although", "Unless", "While"], answer: 0, explanation: "'Now that' indicates a new situation that enables something." },
      { question: "The dog wagged its tail _____ it was happy.", options: ["as if", "because", "although", "while"], answer: 1, explanation: "The dog wagged its tail BECAUSE it was happy — a direct cause, not a manner comparison." },
      { question: "_____ the north is cold, the south is warm.", options: ["Wherever", "Whereas", "Until", "As soon as"], answer: 1, explanation: "'Whereas' shows a direct contrast between two different situations." },
      { question: "I will go _____ you come with me or not.", options: ["whether", "if", "unless", "although"], answer: 0, explanation: "'Whether...or not' presents two alternatives with the same result." },
      { question: "Leave everything _____ it is.", options: ["as", "like", "such", "so"], answer: 0, explanation: "'As' means 'in the same state or condition'." },
      { question: "He ran _____ fast _____ nobody could catch him.", options: ["so...that", "such...that", "as...as", "more...than"], answer: 0, explanation: "'So + adverb + that' shows the result of an action." },
      { question: "Choose the correct reduced clause: 'While I was walking home, I saw an accident.'", options: ["While walking home, I saw an accident.", "Walking home, I saw an accident.", "While I walking home, I saw an accident.", "Both A and B"], answer: 3, explanation: "Both 'While walking home' (keeping the conjunction) and 'Walking home' (without conjunction) are correct reduced forms." },
      { question: "_____ from above, the city looks beautiful.", options: ["When viewed", "When viewing", "When is viewed", "Viewing"], answer: 0, explanation: "'When viewed' is the correct reduced passive form of 'When it is viewed'." },
      { question: "I have lived here _____ I was a child.", options: ["since", "for", "during", "when"], answer: 0, explanation: "'Since' requires a specific point in time, like 'I was a child.'" },
      { question: "Choose the correct sentence:", options: ["Unless it rains, we will go.", "Unless it doesn't rain, we will go."], answer: 0, explanation: "'Unless' already means 'if not' — do NOT add 'not' after it." },
      { question: "_____ you finish the report, send it to the team.", options: ["As soon as", "Until", "Although", "Because"], answer: 0, explanation: "'As soon as' means immediately after — correct for this sequence." },
      { question: "She speaks English _____ fluently _____ a native speaker.", options: ["as...as", "so...that", "more...than", "such...that"], answer: 0, explanation: "'As...as' for equal comparison of manner (adverb + as)." },
      { question: "Not until I checked my email _____ I realize the meeting was cancelled.", options: ["did", "had", "was", "—"], answer: 0, explanation: "After 'Not until' at the beginning, the main clause needs inversion: 'did I realize'." },
      { question: "Choose the correct sentence:", options: ["Because of the traffic, we were late.", "Because of the traffic, so we were late."], answer: 0, explanation: "'Because of' is a preposition — do not add 'so' after it." },
      { question: "_____ you need help, just ask.", options: ["If", "Unless", "Although", "Whereas"], answer: 0, explanation: "'If' introduces a real condition — a simple conditional." },
      { question: "In order _____ she could study abroad, she got a scholarship.", options: ["to", "that", "for", "—"], answer: 1, explanation: "'In order that' introduces a clause with subject + verb. 'In order to' takes a base verb." },
      { question: "Choose the correctly punctuated sentence:", options: ["When you arrive call me.", "When you arrive, call me.", "When you arrive; call me."], answer: 1, explanation: "When an adverb clause comes first, use a COMMA after it to separate it from the main clause." },
      { question: "_____ she was nervous, she gave an excellent presentation.", options: ["Although", "Because", "If", "When"], answer: 0, explanation: "'Although' shows contrast — she was nervous BUT still gave an excellent presentation." },
      { question: "He saved money _____ he could buy a car.", options: ["in order that", "because", "although", "unless"], answer: 0, explanation: "'In order that' introduces a purpose clause — the goal was to buy a car." },
      { question: "Choose the correctly reduced form:", options: ["Because tired, she went to bed.", "Being tired, she went to bed.", "Because being tired, she went to bed."], answer: 1, explanation: "'Because she was tired' reduces to 'Being tired' (present participle)." },
      { question: "Even _____ you apologize, she will not forgive you.", options: ["if", "though", "when", "because"], answer: 0, explanation: "'Even if' presents an extreme condition. 'Even though' is for concession, not condition." },
      { question: "_____ I was taking a shower, the phone rang.", options: ["While", "During", "Because", "If"], answer: 0, explanation: "'While' is correct for two simultaneous past actions. 'During' is a preposition, not a conjunction." },
      { question: "She is _____ a talented singer _____ everyone admires her.", options: ["so...that", "such...that", "as...as", "more...than"], answer: 1, explanation: "'Such + (article) + adjective + noun + that' — 'such a talented singer that' is correct." },
      { question: "Complete: 'Hardly had we left _____ it started snowing.'", options: ["when", "than", "then", "that"], answer: 0, explanation: "'Hardly...when' is the correct pairing. 'No sooner...than' is the alternative structure." },
      { question: "I will call you _____ I get home.", options: ["when", "if", "unless", "All of the above"], answer: 3, explanation: "All can work depending on meaning: 'when' (time), 'if' (condition), 'unless' (negative condition)." },
      { question: "_____ possible, please reply by Friday.", options: ["If", "When", "Unless", "All of the above"], answer: 3, explanation: "All three work with ellipsis: 'If possible', 'When possible', 'Unless impossible'." },
      { question: "The experiment was successful, _____ the results were unexpected.", options: ["although", "because", "so", "if"], answer: 0, explanation: "'Although' shows contrast — the success was despite unexpected results." },
    ]
  }

export default CLAUSE_FULL_LESSONS;
