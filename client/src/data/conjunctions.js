// conjunctions.js — CONJUNCTIONS_DATA, CONJUNCTION_EXERCISES

export const CONJUNCTIONS_DATA = {
  description: "Conjunctions are words that connect words, phrases, clauses, or sentences. They show relationships between the connected elements and help create coherent, complex sentences. English has three main types: <strong>coordinating</strong> (join equal elements), <strong>subordinating</strong> (join a dependent clause to an independent clause), <strong>correlative</strong> (pairs that work together), and <strong>conjunctive adverbs</strong> (adverbs that link ideas with transitional meaning). Mastering conjunctions is essential for writing clear, sophisticated sentences and avoiding common errors like comma splices and sentence fragments.",
  coordinating: {
    title: "Coordinating Conjunctions (FANBOYS)",
    text: "Coordinating conjunctions join two or more grammatically equal elements: words with words, phrases with phrases, or independent clauses with independent clauses. The acronym <strong>FANBOYS</strong> helps remember them: <strong>F</strong>or, <strong>A</strong>nd, <strong>N</strong>or, <strong>B</strong>ut, <strong>O</strong>r, <strong>Y</strong>et, <strong>S</strong>o. When joining two independent clauses, always place a comma before the conjunction. When joining shorter equal elements (words or phrases), the comma is optional.",
    items: [
      {
        word: "For",
        meaning: "reason / cause (similar to 'because')",
        example: "He stayed home, <strong>for</strong> he was feeling ill.",
        moreExamples: [
          "She took an umbrella, <strong>for</strong> the sky looked threatening.",
          "They postponed the hike, <strong>for</strong> the weather forecast predicted storms.",
        ],
        details: "'For' introduces a reason or explanation. It is more formal than 'because' and is rarely used in everyday spoken English. In most contexts, 'because' is preferred. 'For' typically appears after a comma when connecting two independent clauses.",
        note: "'For' is the most formal of the FANBOYS and is rarely used in modern speech. In formal or literary writing, it serves as an elegant alternative to 'because'. Never use 'for' to start a sentence in formal writing."
      },
      {
        word: "And",
        meaning: "addition / connection",
        example: "She bought apples <strong>and</strong> oranges.",
        moreExamples: [
          "He walked to the store <strong>and</strong> bought some milk.",
          "The project requires research, planning, <strong>and</strong> execution.",
          "She likes swimming, <strong>and</strong> he enjoys cycling.",
        ],
        details: "'And' is the most common coordinating conjunction. It adds elements together, creating lists, combining ideas, or joining clauses of equal importance. It can connect nouns, verbs, adjectives, phrases, and entire sentences.",
        note: "In formal academic writing, avoid starting sentences with 'And'. When joining more than two items in a list, use commas between each item (the Oxford comma before 'and' is optional but recommended for clarity)."
      },
      {
        word: "Nor",
        meaning: "negative addition (after a negative clause)",
        example: "He didn't call, <strong>nor</strong> did he send a message.",
        moreExamples: [
          "She doesn't cook, <strong>nor</strong> does she clean.",
          "The plan won't work in summer, <strong>nor</strong> will it work in winter.",
        ],
        details: "'Nor' adds a second negative idea after an initial negative statement. It requires inverted word order (auxiliary verb before the subject) in the second clause. It is formal and often replaced by 'or' after 'neither' in everyday speech.",
        note: "'Nor' always triggers subject-auxiliary inversion. After 'neither...nor', use parallel structure. For everyday speech, 'or' is often substituted: 'He didn't call or send a message.'"
      },
      {
        word: "But",
        meaning: "contrast / exception",
        example: "I want to go, <strong>but</strong> I'm too tired.",
        moreExamples: [
          "She studied all night, <strong>but</strong> she still failed the exam.",
          "The car is old, <strong>but</strong> it runs perfectly.",
          "He is wealthy, <strong>but</strong> he lives a simple life.",
        ],
        details: "'But' introduces a contrasting or opposing idea. It is one of the most frequently used coordinating conjunctions. It signals that the second element is different from or contrary to what came before.",
        note: "Never use 'although' and 'but' together: 'Although it was cold, but we went outside' is incorrect. Choose one or the other. In formal writing, avoid starting sentences with 'But'."
      },
      {
        word: "Or",
        meaning: "alternative / choice",
        example: "Would you like tea <strong>or</strong> coffee?",
        moreExamples: [
          "You can pay by credit card <strong>or</strong> cash.",
          "Hurry up, <strong>or</strong> you'll miss the bus.",
          "Is she coming, <strong>or</strong> is she staying home?",
        ],
        details: "'Or' presents alternatives or choices. It can connect words, phrases, or clauses. When connecting two clauses, it can suggest a consequence: 'Do X, or Y will happen.' It is also used in questions to offer options.",
        note: "'Or' can imply a consequence ('Hurry or you'll be late') or a simple choice ('Tea or coffee?'). In negative constructions, use 'or' instead of 'and': 'I don't like coffee or tea' (not 'and')."
      },
      {
        word: "Yet",
        meaning: "contrast (stronger than 'but')",
        example: "She is young, <strong>yet</strong> very mature.",
        moreExamples: [
          "He is a beginner, <strong>yet</strong> he plays like a professional.",
          "The task was difficult, <strong>yet</strong> they completed it on time.",
          "It was the shortest route, <strong>yet</strong> it took the longest.",
        ],
        details: "'Yet' indicates a contrast or contradiction, similar to 'but' but with a stronger sense of surprise or unexpectedness. It emphasizes that despite what came before, the opposite is true.",
        note: "'Yet' is more emphatic than 'but' and implies surprise. It is common in both formal and informal writing. Do not confuse the coordinating conjunction 'yet' with the adverb 'yet' (as in 'Have you finished yet?')."
      },
      {
        word: "So",
        meaning: "result / consequence",
        example: "It was raining, <strong>so</strong> we stayed inside.",
        moreExamples: [
          "She studied hard, <strong>so</strong> she passed the exam.",
          "The roads were icy, <strong>so</strong> we drove slowly.",
          "He didn't eat breakfast, <strong>so</strong> he was hungry by noon.",
        ],
        details: "'So' introduces a result, consequence, or effect of what was stated before. The first clause presents a cause or situation, and the second clause (introduced by 'so') presents the outcome.",
        note: "'So' is very common in everyday speech. In formal academic writing, consider alternatives like 'therefore', 'consequently', or 'thus' for a more sophisticated tone. Avoid using 'so' to start sentences in very formal contexts."
      },
    ],
    rules: [
      "When joining two independent clauses, always place a comma before the coordinating conjunction.",
      "When joining words, phrases, or short equal elements, the comma is optional.",
      "Use the Oxford (serial) comma before 'and' or 'or' in a list of three or more items for clarity.",
      "Do not use a comma when the conjunction joins only two items (not two independent clauses).",
      "Each FANBOYS conjunction serves a distinct logical function — choose the right one for the relationship you want to express.",
      "Never use two coordinating conjunctions to join the same two clauses (e.g., 'but and', 'so but').",
      "In formal writing, avoid starting sentences with 'And' or 'But'.",
      "'For' is formal and rare in speech; prefer 'because' in most contexts.",
    ]
  },
  subordinating: {
    title: "Subordinating Conjunctions",
    text: "Subordinating conjunctions connect a dependent (subordinate) clause to an independent (main) clause. The dependent clause cannot stand alone as a complete sentence — it depends on the main clause for meaning. <strong>Punctuation rule:</strong> When the dependent clause comes BEFORE the main clause, use a comma after it. When it comes AFTER the main clause, no comma is needed. There are several categories of subordinating conjunctions based on the relationship they express.",
    categories: [
      {
        name: "Time",
        conjunctions: "after, before, when, whenever, while, as, as soon as, until, since, once, by the time",
        description: "Time conjunctions establish when one action occurs in relation to another. They create temporal relationships between events.",
        examples: [
          "<strong>When</strong> I arrived, the meeting had already started.",
          "She will call you <strong>as soon as</strong> she gets home.",
          "<strong>Before</strong> you leave, make sure to lock the door.",
          "He had been working there <strong>since</strong> he graduated college.",
          "<strong>By the time</strong> we arrived, the movie had already begun.",
          "<strong>Once</strong> you finish the course, you'll receive a certificate.",
          "Wait here <strong>until</strong> I come back.",
          "<strong>While</strong> she was sleeping, someone knocked on the door.",
        ],
        tip: "Remember: if the time clause comes first, use a comma. If the main clause comes first, no comma is needed. 'Whenever' implies a repeated or habitual action. 'By the time' emphasizes that one action is completed before another begins."
      },
      {
        name: "Cause / Reason",
        conjunctions: "because, since, as, now that, in that, seeing that, given that",
        description: "Cause and reason conjunctions explain why something happens. They introduce the reason or explanation for the main clause.",
        examples: [
          "She was late <strong>because</strong> the traffic was terrible.",
          "<strong>Since</strong> you're here, let's start the meeting.",
          "<strong>As</strong> it was getting dark, they decided to head home.",
          "<strong>Now that</strong> you've graduated, what are your plans?",
          "The project is difficult <strong>in that</strong> it requires specialized knowledge.",
          "<strong>Seeing that</strong> it's raining, we should cancel the picnic.",
          "<strong>Given that</strong> the evidence is clear, the verdict is obvious.",
        ],
        tip: "'Because' is the strongest and most direct. 'Since' and 'as' are more casual and assume the listener already knows the reason. 'Now that' implies a new situation has arisen. 'In that' is formal and used to explain a specific aspect. 'Seeing that' and 'given that' are formal alternatives."
      },
      {
        name: "Contrast / Concession",
        conjunctions: "although, though, even though, whereas, while, albeit",
        description: "Contrast conjunctions show that the dependent clause contradicts or contrasts with the main clause. They acknowledge a fact that goes against expectations.",
        examples: [
          "<strong>Although</strong> it was cold, we went swimming.",
          "She kept working <strong>though</strong> she was exhausted.",
          "<strong>Even though</strong> he apologized, she was still angry.",
          "<strong>Whereas</strong> John prefers coffee, Mary likes tea.",
          "<strong>While</strong> I understand your concern, I disagree with your approach.",
          "He accepted the offer, <strong>albeit</strong> reluctantly.",
        ],
        tip: "'Although' and 'though' are interchangeable, but 'although' is more formal. 'Even though' is the strongest form of concession. 'Whereas' contrasts two facts directly. 'While' can mean 'although' or 'whereas' depending on context. 'Albeit' is very formal and means 'though it is'. Never pair 'although' with 'but' — they are redundant."
      },
      {
        name: "Condition",
        conjunctions: "if, unless, provided that, as long as, in case, even if, on condition that, supposing",
        description: "Conditional conjunctions set conditions under which the main clause will happen. They establish what must be true or happen for the result to occur.",
        examples: [
          "You will pass <strong>if</strong> you study hard.",
          "I won't go <strong>unless</strong> you come with me.",
          "You can borrow my car <strong>provided that</strong> you drive carefully.",
          "You can stay here <strong>as long as</strong> you follow the rules.",
          "Take an umbrella <strong>in case</strong> it rains.",
          "<strong>Even if</strong> you apologize, she may not forgive you.",
          "You may leave <strong>on condition that</strong> you finish your homework first.",
          "<strong>Supposing</strong> you won the lottery, what would you do?",
        ],
        tip: "'Unless' means 'if not' — never use it with another negative ('unless it doesn't rain' is wrong). 'Provided that' and 'on condition that' are formal. 'In case' is about preparation, not a direct condition. 'Even if' suggests the result is the same regardless. 'Supposing' is informal and often used for hypothetical scenarios."
      },
      {
        name: "Purpose",
        conjunctions: "so that, in order that, lest, for fear that",
        description: "Purpose conjunctions explain the purpose or goal of an action. They show why someone does something.",
        examples: [
          "She saved money <strong>so that</strong> she could travel.",
          "He spoke loudly <strong>in order that</strong> everyone could hear.",
          "Study hard <strong>lest</strong> you fail the exam.",
          "She carried a knife <strong>for fear that</strong> she might need it.",
        ],
        tip: "'So that' is the most common and can be shortened to 'so' in informal speech. 'In order that' is very formal. 'Lest' is archaic and literary — it means 'for fear that' and is followed by a verb in the subjunctive mood. 'For fear that' expresses anxiety about a possible outcome."
      },
      {
        name: "Manner",
        conjunctions: "as, as if, as though, the way",
        description: "Manner conjunctions describe how something is done. They compare the way an action is performed to something else.",
        examples: [
          "Do it <strong>as</strong> I told you.",
          "He acts <strong>as if</strong> he owns the place.",
          "She stared at him <strong>as though</strong> she had never seen him before.",
          "Do it <strong>the way</strong> I showed you.",
          "He talks <strong>as</strong> if he knows everything.",
        ],
        tip: "'As' is the most general. 'As if' and 'as though' are interchangeable and often introduce hypothetical or unreal comparisons. When the comparison is unreal, use the subjunctive: 'He acts as if he were rich.' 'The way' is informal and conversational."
      },
      {
        name: "Place",
        conjunctions: "where, wherever, everywhere that",
        description: "Place conjunctions indicate location. They tell where something happens or exists.",
        examples: [
          "Put the keys <strong>where</strong> you can find them.",
          "<strong>Wherever</strong> you go, I will follow.",
          "<strong>Everywhere that</strong> she looked, she saw flowers.",
          "This is the school <strong>where</strong> I studied.",
        ],
        tip: "'Where' refers to a specific place. 'Wherever' implies any place at all and adds emphasis. 'Everywhere that' emphasizes that something is found in all places. Do not confuse 'where' (place) with 'whereas' (contrast) or 'whereby' (by which)."
      },
      {
        name: "Result / Degree",
        conjunctions: "so...that, such...that",
        description: "Result conjunctions show the degree or extent of something and its consequence. They link a quality to its extreme result.",
        examples: [
          "It was <strong>so</strong> cold <strong>that</strong> the lake froze.",
          "She is <strong>such</strong> a good teacher <strong>that</strong> all her students pass.",
          "He ran <strong>so</strong> fast <strong>that</strong> no one could catch him.",
          "It was <strong>such</strong> a beautiful day <strong>that</strong> we went to the park.",
        ],
        tip: "'So + adjective/adverb + that' and 'such + (a/an) + noun + that' are the two patterns. 'So' modifies adjectives or adverbs. 'Such' modifies nouns. Both emphasize the extreme degree of something and its resulting consequence."
      },
      {
        name: "Comparison",
        conjunctions: "than, as...as",
        description: "Comparison conjunctions compare two things, showing similarities or differences in degree.",
        examples: [
          "She is taller <strong>than</strong> her brother.",
          "He is <strong>as</strong> smart <strong>as</strong> his sister.",
          "This book is more interesting <strong>than</strong> that one.",
          "She doesn't run <strong>as</strong> fast <strong>as</strong> she used to.",
        ],
        tip: "'Than' is used for comparative forms (taller, more, better). 'As...as' is used for equal comparisons. In negative comparisons, 'not as...as' means 'not equal to'. Be careful with irregular comparatives: 'better than' (not 'more good than'), 'worse than' (not 'more bad than')."
      },
    ],
  },
  correlative: {
    title: "Correlative Conjunctions (Paired)",
    text: "Correlative conjunctions work in pairs to connect balanced, grammatically equal elements. The most important rule is <strong>parallel structure</strong>: whatever grammatical form follows the first part of the pair must also follow the second part. Both parts of the pair must be followed by the same type of word, phrase, or clause.",
    pairs: [
      {
        pair: "both...and",
        meaning: "two positive alternatives; combines two elements",
        examples: [
          "She is <strong>both</strong> intelligent <strong>and</strong> hardworking.",
          "He enjoys <strong>both</strong> reading <strong>and</strong> writing.",
          "The restaurant serves <strong>both</strong> Italian <strong>and</strong> French cuisine.",
        ],
        parallelStructure: "Both + [noun/adjective/verb phrase] + and + [noun/adjective/verb phrase]",
        note: "'Both...and' always connects positive elements. Do not use it in negative sentences. The elements after 'both' and 'and' must be the same grammatical type."
      },
      {
        pair: "either...or",
        meaning: "one of two alternatives; presents a choice",
        examples: [
          "You can have <strong>either</strong> coffee <strong>or</strong> tea.",
          "We can <strong>either</strong> stay here <strong>or</strong> go to the park.",
          "<strong>Either</strong> you apologize <strong>or</strong> I will leave.",
        ],
        parallelStructure: "Either + [noun/verb phrase] + or + [noun/verb phrase]",
        note: "'Either...or' presents exactly two options (or two groups of options). In formal writing, the elements should be parallel. In informal speech, parallelism is sometimes relaxed."
      },
      {
        pair: "neither...nor",
        meaning: "not one nor the other; negates both alternatives",
        examples: [
          "He is <strong>neither</strong> rich <strong>nor</strong> famous.",
          "She <strong>neither</strong> called <strong>nor</strong> texted.",
          "The experiment produced <strong>neither</strong> results <strong>nor</strong> conclusions.",
        ],
        parallelStructure: "Neither + [noun/verb phrase] + nor + [noun/verb phrase]",
        note: "'Neither...nor' is the negative counterpart of 'either...or'. When connecting two independent clauses with 'neither...nor', invert the subject and auxiliary verb in the second clause: 'Neither did he call nor did he write.'"
      },
      {
        pair: "not only...but also",
        meaning: "adding emphasis to a second element; highlights an additional, often surprising fact",
        examples: [
          "She <strong>not only</strong> sings <strong>but also</strong> dances.",
          "He <strong>not only</strong> finished the project <strong>but also</strong> submitted it early.",
          "The movie was <strong>not only</strong> entertaining <strong>but also</strong> educational.",
        ],
        parallelStructure: "Not only + [noun/verb/adjective] + but also + [noun/verb/adjective]",
        note: "'Not only...but also' emphasizes the second element. Both parts must be followed by the same grammatical form. In formal writing, parallel structure is essential. You can also say 'not only...but' (dropping 'also')."
      },
      {
        pair: "whether...or",
        meaning: "two alternatives; expresses uncertainty or indecision",
        examples: [
          "I don't know <strong>whether</strong> to go <strong>or</strong> stay.",
          "<strong>Whether</strong> you like it <strong>or</strong> not, the decision is final.",
          "She couldn't decide <strong>whether</strong> to buy the dress <strong>or</strong> the coat.",
        ],
        parallelStructure: "Whether + [clause/infinitive] + or + [clause/infinitive]",
        note: "'Whether...or' expresses a choice between two alternatives, often in contexts of uncertainty. 'Whether or not' can be used for emphasis. 'Whether' can also stand alone without 'or' when introducing a noun clause."
      },
      {
        pair: "not...but",
        meaning: "negates the first element and affirms the second; corrects a misconception",
        examples: [
          "It was <strong>not</strong> an accident <strong>but</strong> a deliberate act.",
          "She is <strong>not</strong> my sister <strong>but</strong> my cousin.",
          "The issue is <strong>not</strong> money <strong>but</strong> time.",
        ],
        parallelStructure: "Not + [noun/adjective] + but + [noun/adjective]",
        note: "'Not...but' corrects a false assumption by negating one element and affirming another. It is common in definitions and clarifications. The elements must be parallel."
      },
      {
        pair: "the...the",
        meaning: "a proportional relationship; as one increases or decreases, so does the other",
        examples: [
          "<strong>The</strong> more you practice, <strong>the</strong> better you get.",
          "<strong>The</strong> harder you work, <strong>the</strong> luckier you become.",
          "<strong>The</strong> less you worry, <strong>the</strong> happier you'll be.",
        ],
        parallelStructure: "The + [comparative adjective/adverb] + clause, the + [comparative adjective/adverb] + clause",
        note: "'The...the' expresses a direct correlation between two changing conditions. Both clauses use the comparative form. This structure is common in proverbs and general truths."
      },
    ],
  },
  conjunctiveAdverbs: {
    title: "Conjunctive Adverbs",
    text: "Conjunctive adverbs are adverbs that function as transitional words, connecting ideas between independent clauses or sentences. Unlike coordinating conjunctions, they do NOT directly join two clauses — they require a semicolon before them and a comma after them when connecting two independent clauses. They show relationships such as addition, contrast, cause, time, and emphasis.",
    examples: [
      { sentence: "It was raining; <strong>therefore</strong>, we stayed inside.", meaning: "therefore — shows result or consequence" },
      { sentence: "She studied hard; <strong>however</strong>, she still failed.", meaning: "however — shows contrast or contradiction" },
      { sentence: "He is smart; <strong>moreover</strong>, he is hardworking.", meaning: "moreover — adds information, emphasizing a point" },
      { sentence: "The store was closed; <strong>consequently</strong>, we couldn't buy anything.", meaning: "consequently — shows a logical result" },
      { sentence: "I don't like him; <strong>nevertheless</strong>, I respect his work.", meaning: "nevertheless — shows contrast despite something" },
      { sentence: "She finished first; <strong>meanwhile</strong>, the others were still working.", meaning: "meanwhile — shows something happening at the same time" },
      { sentence: "He was tired; <strong>still</strong>, he continued working.", meaning: "still — shows contrast, similar to 'nevertheless'" },
      { sentence: "The evidence is clear; <strong>thus</strong>, we can draw a conclusion.", meaning: "thus — shows a logical conclusion or result" },
      { sentence: "It was expensive; <strong>in addition</strong>, it was poorly made.", meaning: "in addition — adds another related point" },
      { sentence: "She wants to travel; <strong>otherwise</strong>, she would stay home.", meaning: "otherwise — shows what would happen if the opposite were true" },
    ],
    commonList: [
      "therefore", "however", "moreover", "furthermore", "consequently",
      "nevertheless", "meanwhile", "otherwise", "thus", "hence",
      "instead", "likewise", "similarly", "still", "also",
      "besides", "accordingly", "indeed", "nonetheless", "otherwise"
    ],
    punctuationRule: "When joining two independent clauses with a conjunctive adverb, use a <strong>semicolon</strong> before the adverb and a <strong>comma</strong> after it. Example: 'It was late; however, we decided to continue.' Do NOT use just a comma (that creates a comma splice).",
    note: "Conjunctive adverbs are versatile and common in academic and formal writing. However, overusing them can make writing feel mechanical. Vary your sentence structure and use them sparingly for maximum impact. In informal writing, a period or starting a new sentence is often preferred over a semicolon."
  },
  structure: {
    coordinating: "Independent clause <strong>,</strong> + coordinating conjunction + Independent clause (I like coffee <strong>, and</strong> she likes tea.)",
    subordinating_before: "Subordinating conjunction + Dependent clause <strong>,</strong> + Main clause (<strong>When</strong> I arrived, the meeting started.)",
    subordinating_after: "Main clause + Subordinating conjunction + Dependent clause (The meeting started <strong>when</strong> I arrived.)",
    correlative: "<strong>Both</strong> X <strong>and</strong> Y / <strong>Either</strong> X <strong>or</strong> Y / <strong>Neither</strong> X <strong>nor</strong> Y",
    conjunctiveAdverb: "Independent clause <strong>;</strong> + conjunctive adverb <strong>,</strong> + Independent clause (She studied hard<strong>; therefore,</strong> she passed.)",
    punctuationSummary: [
      "Coordinating conjunction: Use a comma BEFORE the conjunction when joining two independent clauses.",
      "Subordinating conjunction (clause first): Use a comma AFTER the dependent clause.",
      "Subordinating conjunction (main clause first): No comma needed.",
      "Correlative conjunctions: No special punctuation, but ensure parallel structure.",
      "Conjunctive adverbs: Use a semicolon BEFORE and a comma AFTER when joining two independent clauses.",
      "Comma splice: Never join two independent clauses with just a comma — use a conjunction, semicolon, or period.",
      "Semicolon: Can replace a period between closely related independent clauses without a conjunction.",
    ],
  },
  commonMistakes: [
    {
      mistake: "I like coffee but I don't like tea.",
      fix: "I like coffee, but I don't like tea.",
      explanation: "When joining two independent clauses with a coordinating conjunction, use a comma before the conjunction.",
      type: "comma"
    },
    {
      mistake: "Because I was tired. I went to bed early.",
      fix: "Because I was tired, I went to bed early. (or: I went to bed early because I was tired.)",
      explanation: "A dependent clause starting with 'because' cannot stand alone as a sentence. It must be attached to an independent clause.",
      type: "fragment"
    },
    {
      mistake: "Neither he called nor he came.",
      fix: "He neither called nor came.",
      explanation: "'Neither...nor' requires parallel structure. The elements after 'neither' and 'nor' must be the same grammatical type.",
      type: "parallelism"
    },
    {
      mistake: "Although she was tired, but she kept working.",
      fix: "Although she was tired, she kept working. (or: She was tired, but she kept working.)",
      explanation: "Use EITHER 'although' OR 'but' — not both. They both indicate contrast; using them together is redundant.",
      type: "redundancy"
    },
    {
      mistake: "She not only plays guitar but also piano.",
      fix: "She plays not only guitar but also piano.",
      explanation: "'Not only...but also' requires parallel structure. Both parts should be followed by the same type of element (here, nouns).",
      type: "parallelism"
    },
    {
      mistake: "I'll go unless it doesn't rain.",
      fix: "I'll go unless it rains. (or: I'll go if it doesn't rain.)",
      explanation: "'Unless' already contains a negative meaning ('if not'). Using 'unless' with 'not' creates a double negative.",
      type: "double negative"
    },
    {
      mistake: "It is raining, I will stay home.",
      fix: "It is raining, so I will stay home. (or: It is raining; therefore, I will stay home.)",
      explanation: "This is a comma splice — joining two independent clauses with just a comma. Use a coordinating conjunction, semicolon, or period.",
      type: "comma splice"
    },
    {
      mistake: "The reason is because she was late.",
      fix: "The reason is that she was late. (or: She was late because of traffic.)",
      explanation: "'The reason is because' is redundant. Use 'the reason is that' or restructure the sentence entirely.",
      type: "redundancy"
    },
    {
      mistake: "Where are you going to?",
      fix: "Where are you going?",
      explanation: "Do not end a 'where' question with 'to'. 'Where' already implies direction; adding 'to' is redundant.",
      type: "redundancy"
    },
    {
      mistake: "He is more taller than his brother.",
      fix: "He is taller than his brother.",
      explanation: "When using 'than' for comparison, use the comparative form (taller), not 'more + comparative' (more taller).",
      type: "comparison"
    },
    {
      mistake: "I will call you when I will arrive.",
      fix: "I will call you when I arrive.",
      explanation: "In time clauses with 'when', use the present tense to refer to future events, not 'will'.",
      type: "tense"
    },
    {
      mistake: "She is such intelligent that everyone admires her.",
      fix: "She is so intelligent that everyone admires her. (or: She is such an intelligent person that everyone admires her.)",
      explanation: "'So' is used with adjectives and adverbs. 'Such' is used with nouns. Correct pattern: 'so + adjective + that' or 'such + a/an + noun + that'.",
      type: "so/such"
    },
  ],
  notes: "The most common mistake with conjunctions is <strong>comma splices</strong> — joining two independent clauses with just a comma, without a coordinating conjunction. Example: <em>It is raining, I will stay home</em> is incorrect → <em>It is raining, so I will stay home</em> is correct. Another frequent error is <strong>sentence fragments</strong> — starting a sentence with 'Because', 'Although', or 'When' without completing the thought into a full sentence. In formal writing, avoid starting sentences with 'And' or 'But', though this rule is increasingly relaxed. The conjunction <strong>'for'</strong> is very formal and rarely used in everyday speech; 'because' is preferred. When using correlative conjunctions, maintaining <strong>parallel structure</strong> is essential for grammatical correctness — whatever follows the first part of the pair must match grammatically with what follows the second part. Conjunctive adverbs (therefore, however, moreover, etc.) require a semicolon, not a comma, when connecting two independent clauses. Finally, be careful with <strong>'unless'</strong> — it means 'if not', so adding another negative creates a double negative error.",
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
  { question: "Choose the correct sentence:", options: ["It is raining, therefore, we stayed home.", "It is raining; therefore, we stayed home."], answer: 1, type: "conjunctive adverb" },
  { question: "Complete: ___ you finish your homework, you can go out.", options: ["Unless", "Once", "Although", "But"], answer: 1, type: "subordinating" },
];

export default { CONJUNCTIONS_DATA, CONJUNCTION_EXERCISES };
