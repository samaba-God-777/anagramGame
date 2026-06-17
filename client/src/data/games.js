/* ═══════════════════════════════════════════
   GAMES DATA MODULE
   ANAGRAM_DATA, ERROR_CORRECTION_DATA, VERB_TENSE_EXAMPLES, WORD_ORDER_EXERCISES
   ═══════════════════════════════════════════ */

export const ANAGRAM_DATA = {
  Beginner: {
    Animals: ["cat", "dog", "rat", "bat", "hen", "pig", "fox", "cow", "bee", "ant"],
    Food: ["egg", "ham", "pie", "jam", "nut", "pea", "fig", "yam", "ice", "tea"],
  },
  Intermediate: {
    Animals: ["tiger", "horse", "mouse", "snake", "sheep", "goat", "camel", "koala"],
    Food: ["bread", "apple", "cheese", "pasta", "salad", "cream", "grape", "lemon"],
    Jobs: ["nurse", "judge", "pilot", "clerk", "chef", "coach", "driver", "singer"],
    Verbs: ["write", "drink", "think", "teach", "speak", "begin", "break", "drive"],
  },
  Advanced: {
    Animals: ["elephant", "giraffe", "dolphin", "penguin", "leopard", "cheetah", "octopus"],
    Food: ["chocolate", "sandwich", "vegetable", "breakfast", "hamburger", "spaghetti"],
    Jobs: ["engineer", "professor", "journalist", "pharmacist", "architect", "mechanic"],
    Adjectives: ["beautiful", "dangerous", "important", "different", "wonderful", "mysterious"],
    Verbs: ["understand", "experience", "communicate", "investigate", "accomplish"],
  },
};

export const ERROR_CORRECTION_DATA = [
  { incorrect: "She go to school every day.", correct: "She goes to school every day.", type: "Verb Tenses", explanation: "Third person singular needs -s in Present Simple." },
  { incorrect: "He don't like coffee.", correct: "He doesn't like coffee.", type: "Verb Tenses", explanation: "Use doesn't (not don't) for third person singular." },
  { incorrect: "I have saw that movie.", correct: "I have seen that movie.", type: "Verb Tenses", explanation: "After have/has, use the past participle (seen, not saw)." },
  { incorrect: "She has been worked here for years.", correct: "She has been working here for years.", type: "Verb Tenses", explanation: "After been, use the -ing form (working, not worked)." },
  { incorrect: "I am agree with you.", correct: "I agree with you.", type: "Verb Tenses", explanation: "Agree is a stative verb; don't use continuous form." },
  { incorrect: "When I will arrive, I will call you.", correct: "When I arrive, I will call you.", type: "Verb Tenses", explanation: "In time clauses, use Present Simple, not will." },
  { incorrect: "She didn't went to the party.", correct: "She didn't go to the party.", type: "Verb Tenses", explanation: "After didn't, use the base form (go, not went)." },
  { incorrect: "I have visited Paris yesterday.", correct: "I visited Paris yesterday.", type: "Verb Tenses", explanation: "With specific past time (yesterday), use Past Simple." },
  { incorrect: "They are play football now.", correct: "They are playing football now.", type: "Verb Tenses", explanation: "After are, use the -ing form (playing, not play)." },
  { incorrect: "He has went to the store.", correct: "He has gone to the store.", type: "Verb Tenses", explanation: "After has, use the past participle (gone, not went)." },
  { incorrect: "She said she is tired.", correct: "She said she was tired.", type: "Verb Tenses", explanation: "In reported speech, shift tense back (is → was)." },
  { incorrect: "I would help you if I will have time.", correct: "I would help you if I had time.", type: "Verb Tenses", explanation: "In second conditional, use past tense after if." },
  { incorrect: "A apple a day keeps the doctor away.", correct: "An apple a day keeps the doctor away.", type: "Articles", explanation: "Use 'an' before vowel sounds (apple starts with /æ/)." },
  { incorrect: "She is the teacher at school.", correct: "She is a teacher at school.", type: "Articles", explanation: "Use 'a/an' for general descriptions, not 'the'." },
  { incorrect: "I need informations.", correct: "I need information.", type: "Articles", explanation: "Information is uncountable; no plural or 'a/an'." },
  { incorrect: "He is in the hospital (as a patient).", correct: "He is in hospital (as a patient).", type: "Articles", explanation: "In British English, no article for hospital as patient. US English uses 'the'." },
  { incorrect: "I'm interested on music.", correct: "I'm interested in music.", type: "Prepositions", explanation: "Use 'interested in', not 'interested on'." },
  { incorrect: "She is interested at music.", correct: "She is interested in music.", type: "Prepositions", explanation: "Use 'interested in', not 'interested at'." },
  { incorrect: "He is married with a doctor.", correct: "He is married to a doctor.", type: "Prepositions", explanation: "Use 'married to', not 'married with'." },
  { incorrect: "We arrived to the airport.", correct: "We arrived at the airport.", type: "Prepositions", explanation: "Use 'arrive at' for a place, 'arrive in' for a city/country." },
  { incorrect: "She depends of her parents.", correct: "She depends on her parents.", type: "Prepositions", explanation: "Use 'depend on', not 'depend of'." },
  { incorrect: "Myself will do it.", correct: "I will do it myself.", type: "Pronouns", explanation: "Reflexive pronouns (myself) cannot be used as subjects." },
  { incorrect: "Him and me went to the store.", correct: "He and I went to the store.", type: "Pronouns", explanation: "Use subject pronouns (he/I) for subjects." },
  { incorrect: "Give it to I.", correct: "Give it to me.", type: "Pronouns", explanation: "Use object pronouns (me) after prepositions." },
  { incorrect: "This book is her.", correct: "This is her book.", type: "Pronouns", explanation: "Use possessive adjective 'her' before the noun, not after it." },
  { incorrect: "The girl which lives next door is friendly.", correct: "The girl who lives next door is friendly.", type: "Clauses", explanation: "Use 'who' for people, not 'which'." },
  { incorrect: "I don't know where is he.", correct: "I don't know where he is.", type: "Clauses", explanation: "Noun clauses use statement word order." },
  { incorrect: "Because I was tired, so I went to bed.", correct: "Because I was tired, I went to bed.", type: "Clauses", explanation: "Use 'because' OR 'so', not both." },
  { incorrect: "The book who I read was good.", correct: "The book that/which I read was good.", type: "Clauses", explanation: "Use 'that' or 'which' for things, not 'who'." },
  { incorrect: "She don't like pizza.", correct: "She doesn't like pizza.", type: "Subject-Verb Agreement", explanation: "Third person singular requires 'doesn't'." },
  { incorrect: "The dogs runs fast.", correct: "The dogs run fast.", type: "Subject-Verb Agreement", explanation: "Plural subject (dogs) needs plural verb (run)." },
  { incorrect: "Everyone are happy.", correct: "Everyone is happy.", type: "Subject-Verb Agreement", explanation: "Everyone is singular and takes a singular verb." },
  { incorrect: "There is many problems.", correct: "There are many problems.", type: "Subject-Verb Agreement", explanation: "Use 'there are' with plural nouns." },
  { incorrect: "Neither of the answers are correct.", correct: "Neither of the answers is correct.", type: "Subject-Verb Agreement", explanation: "Neither is singular; use singular verb." },
];

export const VERB_TENSE_EXAMPLES = [
  { sentence: "She goes to school every day.", tense: "Present Simple", explanation: "Habitual action with third person -s." },
  { sentence: "I am reading a book now.", tense: "Present Continuous", explanation: "Action happening at the moment of speaking." },
  { sentence: "I have finished my homework.", tense: "Present Perfect", explanation: "Completed action with present relevance." },
  { sentence: "She has been studying for three hours.", tense: "Present Perfect Continuous", explanation: "Action started in past and continuing." },
  { sentence: "I visited my grandmother yesterday.", tense: "Past Simple", explanation: "Completed action at a specific past time." },
  { sentence: "I was watching TV when she called.", tense: "Past Continuous", explanation: "Longer action interrupted by shorter action." },
  { sentence: "I had already eaten when she arrived.", tense: "Past Perfect", explanation: "Action completed before another past action." },
  { sentence: "I had been waiting for two hours when she arrived.", tense: "Past Perfect Continuous", explanation: "Duration of action before another past event." },
  { sentence: "I will call you tomorrow.", tense: "Future Simple", explanation: "Prediction or spontaneous decision." },
  { sentence: "I will be working at 5 PM tomorrow.", tense: "Future Continuous", explanation: "Action in progress at a future time." },
  { sentence: "I will have finished by Friday.", tense: "Future Perfect", explanation: "Action completed before a future time." },
  { sentence: "I will have been working here for ten years next month.", tense: "Future Perfect Continuous", explanation: "Duration up to a future point." },
  { sentence: "He works in a bank.", tense: "Present Simple", explanation: "Permanent job or state." },
  { sentence: "They are staying at a hotel this week.", tense: "Present Continuous", explanation: "Temporary situation." },
  { sentence: "She has never been to Japan.", tense: "Present Perfect", explanation: "Life experience." },
  { sentence: "We have been planning this trip for months.", tense: "Present Perfect Continuous", explanation: "Ongoing process with duration." },
  { sentence: "He bought a new car last week.", tense: "Past Simple", explanation: "Completed action with specific time." },
  { sentence: "They were playing outside all afternoon.", tense: "Past Continuous", explanation: "Action in progress at a past time." },
  { sentence: "She had never seen snow before that day.", tense: "Past Perfect", explanation: "Never-experienced-before a past reference point." },
  { sentence: "He was exhausted because he had been working all day.", tense: "Past Perfect Continuous", explanation: "Cause of a past state." },
];

export const WORD_ORDER_EXERCISES = [
  { words: ["She", "reads", "books"], pattern: "S + V + O", answer: "She reads books." },
  { words: ["They", "play", "soccer"], pattern: "S + V + O", answer: "They play soccer." },
  { words: ["He", "is", "a teacher"], pattern: "S + V + C", answer: "He is a teacher." },
  { words: ["She", "became", "a doctor"], pattern: "S + V + C", answer: "She became a doctor." },
  { words: ["He", "gave", "her", "a gift"], pattern: "S + V + O + O", answer: "He gave her a gift." },
  { words: ["She", "sent", "me", "an email"], pattern: "S + V + O + O", answer: "She sent me an email." },
  { words: ["They", "made", "her", "the president"], pattern: "S + V + O + C", answer: "They made her the president." },
  { words: ["I", "find", "this", "interesting"], pattern: "S + V + O + C", answer: "I find this interesting." },
  { words: ["The children", "play", "in the park"], pattern: "S + V + O", answer: "The children play in the park." },
  { words: ["She", "looks", "happy"], pattern: "S + V + C", answer: "She looks happy." },
];

export default {
  ANAGRAM_DATA,
  ERROR_CORRECTION_DATA,
  VERB_TENSE_EXAMPLES,
  WORD_ORDER_EXERCISES,
};
