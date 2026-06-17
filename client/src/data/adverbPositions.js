// adverbPositions.js — ADVERB_POSITIONS, ADVERB_POSITION_EXERCISES

export const ADVERB_POSITIONS = {
  description: "Adverbs can appear in three main positions in a sentence: front (before the subject), mid (between subject and verb or after the auxiliary verb), and end (after the verb or object). The position of an adverb affects the emphasis and meaning of the sentence.",
  usage: [
    { title: "Front Position (Before the Subject)", text: "Adverbs at the beginning of a sentence. This position emphasizes the adverb. Common with time adverbs (yesterday, today, now), comment adverbs (fortunately, surprisingly, honestly), and connecting adverbs (however, therefore, meanwhile, then).", example: "<strong>Yesterday</strong>, I went to the cinema.\n<strong>Suddenly</strong>, the door opened.\n<strong>Fortunately</strong>, nobody was hurt.\n<strong>However</strong>, we must continue." },
    { title: "Mid Position (Between Subject and Verb / After Auxiliary)", text: "Adverbs placed after the subject but before the main verb. If there is an auxiliary verb, the adverb goes after the auxiliary. Common with adverbs of frequency (always, usually, often, sometimes, never, rarely), and some degree adverbs (almost, nearly, quite, just, really).", example: "She <strong>always</strong> arrives on time.\nHe <strong>never</strong> eats meat.\nI <strong>have never</strong> been to Japan.\nThey <strong>are always</strong> late.\nYou can <strong>hardly</strong> see the difference." },
    { title: "End Position (After the Verb / Object)", text: "Adverbs at the end of a sentence. This is the default position for most adverbs, especially adverbs of manner (how), place (where), and time (when). When multiple adverbs appear, the order is: Manner → Place → Time.", example: "He drives <strong>carefully</strong>.\nShe speaks English <strong>fluently</strong>.\nI put the book <strong>on the table</strong>.\nThey arrived <strong>at 5 PM</strong>.\nWe met <strong>at the park yesterday</strong>." },
    { title: "Order of Multiple Adverbs", text: "When multiple adverbs appear at the end of a sentence, they follow the order: Manner → Place → Frequency → Time → Purpose. Adverbs of frequency usually go in mid position, not at the end.", example: "She danced <strong>gracefully</strong> (manner) <strong>on the stage</strong> (place) <strong>last night</strong> (time).\nHe spoke <strong>loudly</strong> (manner) <strong>in the hall</strong> (place) <strong>yesterday</strong> (time)." },
  ],
  structure: {
    front: "Adverb + comma + Subject + Verb (Suddenly, he left.)",
    mid: "Subject + Adverb + Verb (She always wins.) / Subject + Aux + Adverb + Verb (I have never seen it.)",
    end: "Subject + Verb + Object + Adverb (He drives carefully.)",
    order: "Manner → Place → Frequency → Time → Purpose"
  },
  commonMistakes: [
    { mistake: "I like very much chocolate.", fix: "I like chocolate very much.", explanation: "Adverbs of degree (very much) usually go after the object, not before it." },
    { mistake: "Always she arrives late.", fix: "She always arrives late.", explanation: "Adverbs of frequency (always, never, often, usually) go in MID position (between subject and verb), not at the beginning of the sentence." },
    { mistake: "I have seen never that movie.", fix: "I have never seen that movie.", explanation: "In mid position, the adverb goes AFTER the auxiliary verb (have) but BEFORE the main verb (seen)." },
    { mistake: "He drives carefully his car.", fix: "He drives his car carefully.", explanation: "When there is an object, the adverb of manner usually goes after the object, not between the verb and object." },
    { mistake: "We went yesterday to the beach.", fix: "We went to the beach yesterday.", explanation: "The typical order for end-position adverbs is Place before Time: to the beach (place) + yesterday (time)." },
  ],
  notes: "Adverbs of frequency (always, never, often, usually, sometimes, rarely, seldom) almost always go in MID position. They never go at the beginning of a sentence (except sometimes and often in literary style). The adverb <strong>enough</strong> goes AFTER the adjective it modifies: not 'enough big' but 'big enough'. The adverb <strong>only</strong> can change meaning depending on its position: 'I only kissed her' vs 'I kissed only her'. In formal writing, avoid splitting infinitives with adverbs: 'to carefully examine' is informal; 'to examine carefully' is more formal.",
};

export const ADVERB_POSITION_EXERCISES = [
  { question: "Where does the adverb of frequency go?", options: ["Front", "Mid", "End"], answer: 1, type: "frequency" },
  { question: "Choose the correct sentence:", options: ["Always she is late.", "She is always late.", "She always is late."], answer: 1, type: "mid" },
  { question: "Choose the correct sentence:", options: ["He drives carefully.", "He carefully drives.", "Carefully he drives."], answer: 0, type: "end" },
  { question: "Choose the correct sentence:", options: ["I like very much coffee.", "I like coffee very much."], answer: 1, type: "degree" },
  { question: "Correct adverb order: They arrived ___", options: ["yesterday at the airport", "at the airport yesterday"], answer: 1, type: "order" },
  { question: "Choose the correct sentence:", options: ["I have never seen that movie.", "I have seen never that movie.", "I never have seen that movie."], answer: 0, type: "mid-aux" },
  { question: "The adverb in 'Suddenly, the door opened' is in ___ position.", options: ["front", "mid", "end"], answer: 0, type: "position" },
  { question: "The adverb in 'She always arrives on time' is in ___ position.", options: ["front", "mid", "end"], answer: 1, type: "position" },
  { question: "Choose the correct sentence:", options: ["He his car drives carefully.", "He drives his car carefully.", "He drives carefully his car."], answer: 1, type: "obj-position" },
  { question: "Correct order: She danced ___", options: ["last night on the stage gracefully", "gracefully on the stage last night", "on the stage last night gracefully"], answer: 1, type: "order" },
  { question: "Choose the correct sentence:", options: ["I have finished just my homework.", "I have just finished my homework.", "I just have finished my homework."], answer: 1, type: "mid-aux" },
  { question: "Where do comment adverbs (fortunately, honestly) typically go?", options: ["Front", "Mid", "End"], answer: 0, type: "comment" },
  { question: "Choose the correct sentence:", options: ["This coffee isn't enough hot.", "This coffee isn't hot enough."], answer: 1, type: "enough" },
  { question: "Choose the correct sentence:", options: ["We met at the park yesterday.", "We met yesterday at the park."], answer: 0, type: "order" },
  { question: "The adverb in 'I put the book on the table' is in ___ position.", options: ["front", "mid", "end"], answer: 2, type: "position" },
  { question: "Choose the correct sentence:", options: ["He spoke loudly in the hall yesterday.", "He spoke loudly yesterday in the hall."], answer: 0, type: "order" },
];

export default { ADVERB_POSITIONS, ADVERB_POSITION_EXERCISES };
