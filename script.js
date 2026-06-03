/* ═══════════════════════════════════════════
   ENGLISH TENSES — Sentence Builder
   Supports: multi-tense sidebar (index.html)
             single-tense tabs (tense/*.html)
   ═══════════════════════════════════════════ */

/* ── SENTENCE DATA ── */
const SENTENCES = {
  "Present Simple": {
    affirmative: ["I play tennis every Sunday","She works in a hospital","They live in New York","He reads the newspaper every morning","We eat dinner at seven o clock"],
    negative: ["I do not like spicy food","She does not speak Japanese","They do not live in this city","He does not drive to work","We do not watch TV in the morning"],
    questions: ["Do you like chocolate","Does she work on weekends","Do they live near the park","Does he speak English fluently","Do we need to bring anything"],
  },
  "Present Continuous": {
    affirmative: ["I am reading a book right now","She is cooking dinner in the kitchen","They are playing soccer in the park","He is studying for his exam today","We are watching a movie at home"],
    negative: ["I am not sleeping at the moment","She is not working today","They are not playing outside right now","He is not listening to music","We are not watching the news"],
    questions: ["Are you listening to me","Is she coming to the party","Are they playing outside now","Is he working on the project","Are we meeting them tonight"],
  },
  "Present Perfect": {
    affirmative: ["I have finished my homework already","She has visited Paris three times","They have arrived at the airport","He has bought a new car","We have seen that movie before"],
    negative: ["I have not seen that movie yet","She has not called me back","They have not eaten breakfast","He has not finished the report","We have not traveled abroad this year"],
    questions: ["Have you ever been to London","Has she finished her work","Have they arrived at the hotel","Has he ever tried sushi","Have we met before"],
  },
  "Present Perfect Continuous": {
    affirmative: ["I have been waiting for an hour","She has been studying all morning","They have been working since eight o clock","He has been living here for five years","We have been planning this trip for months"],
    negative: ["I have not been sleeping well lately","She has not been feeling good","They have not been exercising regularly","He has not been attending classes","We have not been using that software"],
    questions: ["Have you been waiting long","Has she been feeling better","Have they been working on this project","Has he been learning English","Have we been driving for too long"],
  },
  "Past Simple": {
    affirmative: ["I visited my grandmother yesterday","She bought a new dress last week","They went to the beach on Saturday","He wrote a letter to his friend","We had dinner at a nice restaurant"],
    negative: ["I did not go to school yesterday","She did not like the movie","They did not arrive on time","He did not finish his homework","We did not eat breakfast this morning"],
    questions: ["Did you see the accident","Did she call you last night","Did they enjoy the party","Did he pass the exam","Did we miss the bus"],
  },
  "Past Continuous": {
    affirmative: ["I was watching TV at eight PM","She was cooking when I arrived","They were playing outside all afternoon","He was sleeping during the movie","We were driving home when it started to rain"],
    negative: ["I was not sleeping when you called","She was not listening to the teacher","They were not playing video games","He was not paying attention","We were not expecting this result"],
    questions: ["Were you sleeping when I called","Was she working yesterday morning","Were they playing in the garden","Was he studying for the test","Were we driving too fast"],
  },
  "Past Perfect": {
    affirmative: ["I had already eaten when she arrived","She had finished her work before noon","They had left before I called","He had never seen snow before that day","We had booked the tickets in advance"],
    negative: ["I had not seen her before that day","She had not finished cooking yet","They had not heard the news","He had not prepared for the meeting","We had not met each other before"],
    questions: ["Had you ever been there before","Had she finished the report on time","Had they already left when you arrived","Had he ever tried Thai food","Had we met somewhere earlier"],
  },
  "Past Perfect Continuous": {
    affirmative: ["I had been waiting for two hours when she arrived","She had been studying for months before the exam","They had been working there for five years","He had been living in London before he moved","We had been traveling for six hours when we stopped"],
    negative: ["I had not been feeling well before the trip","She had not been sleeping well before the move","They had not been working there for very long","He had not been studying enough before the test","We had not been waiting long before the bus came"],
    questions: ["Had you been waiting long before the bus arrived","Had she been working there before she moved","Had they been living in that house before the fire","Had he been feeling sick before the diagnosis","Had we been driving for long before we stopped"],
  },
  "Future Simple": {
    affirmative: ["I will call you tomorrow morning","She will arrive next week","They will help us with the project","He will be a great doctor someday","We will visit you during the holidays"],
    negative: ["I will not forget your birthday","She will not come to the party","They will not accept the offer","He will not give up on his dream","We will not leave without you"],
    questions: ["Will you come to my birthday party","Will she pass the driving test","Will they arrive before dinner","Will he join us for the trip","Will we finish on time"],
  },
  "Future Continuous": {
    affirmative: ["I will be waiting for you at the airport","She will be working at five PM","They will be traveling across Europe next summer","He will be attending the conference next week","We will be celebrating our anniversary in June"],
    negative: ["I will not be sleeping at midnight","She will not be attending the meeting","They will not be using the old system","He will not be joining us for dinner","We will not be staying at a hotel"],
    questions: ["Will you be working tomorrow afternoon","Will she be joining us for dinner","Will they be staying at a hotel","Will he be attending the ceremony","Will we be using the new software"],
  },
  "Future Perfect": {
    affirmative: ["I will have finished the report by Friday","She will have graduated by next year","They will have arrived by noon","He will have saved enough money by December","We will have completed the project by March"],
    negative: ["I will not have finished by Monday","She will not have saved enough money yet","They will not have left by the time you arrive","He will not have recovered by next week","We will not have reached the destination by night"],
    questions: ["Will you have finished by five PM","Will she have arrived by the time we get there","Will they have completed the work by Friday","Will he have graduated by next summer","Will we have driven two hundred miles by then"],
  },
  "Future Perfect Continuous": {
    affirmative: ["I will have been working here for ten years next month","She will have been studying for three hours by the time we arrive","They will have been traveling for twenty four hours by then","He will have been living in Japan for a year in April","We will have been building this house for six months by October"],
    negative: ["I will not have been living there for very long","She will not have been waiting for more than an hour","They will not have been working on this project for long","He will not have been studying English for very long","We will not have been driving for more than two hours"],
    questions: ["Will you have been waiting long by the time we arrive","Will she have been studying for five hours by noon","Will they have been living here for a year next month","Will he have been working there for a decade next spring","Will we have been traveling for eight hours by the time we stop"],
  },
};

/* ── THEORY DATA ── */
const TENSE_ORDER = ["Present Simple","Present Continuous","Present Perfect","Present Perfect Continuous","Past Simple","Past Continuous","Past Perfect","Past Perfect Continuous","Future Simple","Future Continuous","Future Perfect","Future Perfect Continuous"];

const THEORY = {
  "Present Simple": {
    description: "We use the Present Simple for actions that are habitual or repeated, for general truths and facts, for fixed schedules and timetables, and for states or feelings that are permanent. It is one of the most common and important tenses in English.",
    usage: [
      { title: "Habits and Routines", text: "Use the Present Simple to talk about things that happen regularly, repeatedly, or are part of a routine.", example: "I brush my teeth every morning.\nShe goes to the gym on Tuesdays." },
      { title: "General Truths and Facts", text: "Use it for things that are always true or universally known.", example: "Water boils at 100 degrees Celsius.\nThe sun rises in the east." },
      { title: "Fixed Schedules", text: "Use it for events that follow a timetable or schedule, especially with transportation, events, and classes.", example: "The train leaves at 6 PM.\nThe meeting starts at 9 AM." },
      { title: "Permanent States", text: "Use it for feelings, thoughts, and states that are long-lasting or permanent. Stative verbs (know, love, believe) are almost always in the Present Simple.", example: "I live in London.\nShe believes in equality." },
    ],
    structure: { affirmative: "Subject + base verb (add -s or -es for he / she / it)", negative: "Subject + do / does + not + base verb", questions: "Do / Does + subject + base verb + ?" },
    details: { affirmative: "For most verbs, add -s for third person singular (he, she, it). Add -es for verbs ending in -ss, -sh, -ch, -x, -o. Change -y to -ies for verbs ending in consonant + y.", negative: "Use <strong>do not</strong> (don't) with I, you, we, they. Use <strong>does not</strong> (doesn't) with he, she, it. The main verb stays in its base form.", questions: "Use <strong>do</strong> with I, you, we, they. Use <strong>does</strong> with he, she, it. The main verb stays in its base form." },
    conjugation: "<strong>I</strong> work · <strong>You</strong> work · <strong>He/She/It</strong> works · <strong>We</strong> work · <strong>They</strong> work<br>Verb <em>to be</em>: <strong>I</strong> am · <strong>You</strong> are · <strong>He/She/It</strong> is · <strong>We</strong> are · <strong>They</strong> are",
    examples: { affirmative: ["<strong>I play</strong> tennis every Sunday.","<strong>She works</strong> in a hospital.","<strong>They live</strong> in New York.","<strong>He reads</strong> the newspaper every morning.","<strong>We eat</strong> dinner at seven o'clock."], negative: ["<strong>I do not like</strong> spicy food.","<strong>She does not speak</strong> Japanese.","<strong>They do not live</strong> in this city.","<strong>He does not drive</strong> to work.","<strong>We do not watch</strong> TV in the morning."], questions: ["<strong>Do</strong> you <strong>like</strong> chocolate?","<strong>Does</strong> she <strong>work</strong> on weekends?","<strong>Do</strong> they <strong>live</strong> near the park?","<strong>Does</strong> he <strong>speak</strong> English fluently?","<strong>Do</strong> we <strong>need</strong> to bring anything?"] },
    signalWords: ["always","usually","often","sometimes","seldom","rarely","never","every day / week / month","on Mondays","in the morning / afternoon / evening","once a week","twice a month","from time to time"],
    commonMistakes: [
      { mistake: "He work in an office.", fix: "He works in an office.", explanation: "Forget to add -s or -es for third person singular (he, she, it)." },
      { mistake: "She doesn't works here.", fix: "She doesn't work here.", explanation: "After does / doesn't, the main verb returns to its base form — do NOT add -s." },
      { mistake: "Does he works on Sunday?", fix: "Does he work on Sunday?", explanation: "After do / does in questions, the main verb stays in base form." },
    ],
    comparison: [
      { tense: "Present Continuous", text: "Present Simple is for permanent situations and routines. Present Continuous is for temporary actions happening now. Compare: <strong>I work</strong> in a bank (permanent job) vs <strong>I am working</strong> on a special project (temporary)." },
    ],
    notes: "The Present Simple is also used for future events that follow a fixed schedule (e.g. The train leaves at 6 PM). Be careful with the third person -s: beginners often forget it. The verb <strong>to be</strong> is completely irregular and must be memorized separately. Adverbs of frequency (always, usually, often, etc.) go BEFORE the main verb but AFTER the verb <strong>to be</strong>.",
  },
  "Present Continuous": {
    description: "We use the Present Continuous for actions happening right now or around the moment of speaking, for temporary situations that are not permanent, for trends and changes, and for fixed future arrangements (especially when a time expression is used).",
    usage: [
      { title: "Actions in Progress", text: "Use it for actions that are happening at the exact moment of speaking.", example: "I am reading a book right now.\nLook! It is raining." },
      { title: "Temporary Situations", text: "Use it for things that are happening around now but are not permanent.", example: "She is staying with her aunt this week.\nI am working on a new project these days." },
      { title: "Future Arrangements", text: "Use it for fixed plans and arrangements in the near future, especially with a time expression.", example: "We are meeting them tonight.\nShe is flying to Paris next Monday." },
      { title: "Trends and Changes", text: "Use it to describe developing situations, trends, or changes.", example: "The population is growing rapidly.\nMore people are using electric cars." },
    ],
    structure: { affirmative: "Subject + am / is / are + verb-ing", negative: "Subject + am / is / are + not + verb-ing", questions: "Am / Is / Are + subject + verb-ing + ?" },
    details: { affirmative: "Use <strong>am</strong> with I, <strong>is</strong> with he/she/it, <strong>are</strong> with you/we/they. Add -ing to the main verb. For verbs ending in -e, remove the -e before adding -ing (make → making). For short verbs (CVC pattern), double the final consonant (run → running).", negative: "Place <strong>not</strong> after the auxiliary verb. Contractions: I'm not, he/she/it isn't, you/we/they aren't.", questions: "Invert the subject and the auxiliary verb. The main verb keeps the -ing form." },
    conjugation: "<strong>I</strong> am working · <strong>You</strong> are working · <strong>He/She/It</strong> is working · <strong>We</strong> are working · <strong>They</strong> are working",
    examples: { affirmative: ["<strong>I am reading</strong> a book right now.","<strong>She is cooking</strong> dinner in the kitchen.","<strong>They are playing</strong> soccer in the park.","<strong>He is studying</strong> for his exam today.","<strong>We are watching</strong> a movie at home."], negative: ["<strong>I am not sleeping</strong> at the moment.","<strong>She is not working</strong> today.","<strong>They are not playing</strong> outside right now.","<strong>He is not listening</strong> to music.","<strong>We are not watching</strong> the news."], questions: ["<strong>Are</strong> you <strong>listening</strong> to me?","<strong>Is</strong> she <strong>coming</strong> to the party?","<strong>Are</strong> they <strong>playing</strong> outside now?","<strong>Is</strong> he <strong>working</strong> on the project?","<strong>Are</strong> we <strong>meeting</strong> them tonight?"] },
    signalWords: ["now","right now","at the moment","today","this week / month / year","currently","these days","look!","listen!","still","tonight","tomorrow (with future meaning)"],
    commonMistakes: [
      { mistake: "She is know the answer.", fix: "She knows the answer.", explanation: "Stative verbs (know, believe, love, hate, want, need) are NOT used in continuous forms. Use the Present Simple instead." },
      { mistake: "I am working here since 2020.", fix: "I have been working here since 2020.", explanation: "For actions that started in the past and continue to the present, use Present Perfect Continuous, not Present Continuous." },
      { mistake: "He is understanding the lesson.", fix: "He understands the lesson.", explanation: "Understand is a stative verb and should not be used in continuous form." },
    ],
    comparison: [
      { tense: "Present Simple", text: "Present Continuous is for temporary actions happening now. Present Simple is for permanent habits and facts. Compare: <strong>I live</strong> in New York (permanent) vs <strong>I am living</strong> in a hotel (temporary)." },
    ],
    notes: "Some verbs are not normally used in the Present Continuous (stative verbs): <strong>know, believe, understand, love, hate, want, need, prefer, belong, seem, own</strong>. Use the Present Simple instead. However, some verbs can be stative or action depending on meaning: I have a car (state/possession) vs I am having dinner (action/eating). Verbs like <strong>look, feel, taste</strong> can be used in both forms with different meanings.",
  },
  "Present Perfect": {
    description: "We use the Present Perfect for past actions that have a connection to the present, for life experiences (when the specific time is not mentioned), for actions that started in the past and continue to the present, and for recent past events with present results.",
    usage: [
      { title: "Life Experiences", text: "Use it to talk about experiences at some point in your life. The exact time is not important or not known.", example: "I have visited Japan twice.\nShe has never tried sushi." },
      { title: "Past Actions with Present Results", text: "Use it for past actions that have a result or relevance in the present.", example: "I have lost my keys. (I still can't find them now)\nShe has finished her homework. (She is free now)" },
      { title: "Actions Continuing to the Present", text: "Use it with since and for to talk about actions that started in the past and continue now.", example: "I have lived here for ten years.\nShe has worked at this company since 2018." },
      { title: "Recent Events", text: "Use it with just, already, yet for very recent events.", example: "He has just left.\nHave you finished yet?" },
    ],
    structure: { affirmative: "Subject + have / has + past participle", negative: "Subject + have / has + not + past participle", questions: "Have / Has + subject + past participle + ?" },
    details: { affirmative: "Use <strong>have</strong> with I, you, we, they. Use <strong>has</strong> with he, she, it. The past participle of regular verbs is formed by adding -ed. Irregular verbs have special forms that must be memorized (e.g. go → gone, see → seen, write → written).", negative: "Place <strong>not</strong> between the auxiliary and the past participle. Contractions: haven't / hasn't.", questions: "Invert have/has with the subject. The past participle follows the subject." },
    conjugation: "<strong>I/You/We/They</strong> have worked · <strong>He/She/It</strong> has worked<br>Irregular example: <strong>I</strong> have gone · <strong>He/She/It</strong> has gone · <strong>We</strong> have gone",
    examples: { affirmative: ["<strong>I have finished</strong> my homework already.","<strong>She has visited</strong> Paris three times.","<strong>They have arrived</strong> at the airport.","<strong>He has bought</strong> a new car.","<strong>We have seen</strong> that movie before."], negative: ["<strong>I have not seen</strong> that movie yet.","<strong>She has not called</strong> me back.","<strong>They have not eaten</strong> breakfast.","<strong>He has not finished</strong> the report.","<strong>We have not traveled</strong> abroad this year."], questions: ["<strong>Have</strong> you ever <strong>been</strong> to London?","<strong>Has</strong> she <strong>finished</strong> her work?","<strong>Have</strong> they <strong>arrived</strong> at the hotel?","<strong>Has</strong> he ever <strong>tried</strong> sushi?","<strong>Have</strong> we <strong>met</strong> before?"] },
    signalWords: ["ever","never","just","already","yet","since","for","recently","lately","so far","up to now","once / twice / three times","this week / month / year","in the last few days"],
    commonMistakes: [
      { mistake: "I have seen him yesterday.", fix: "I saw him yesterday.", explanation: "When a specific past time is mentioned (yesterday, last week, in 2010), use Past Simple, NOT Present Perfect." },
      { mistake: "She has went to the store.", fix: "She has gone to the store.", explanation: "After have/has, use the past participle form (gone, not went). Went is the Past Simple form." },
      { mistake: "He has lived in London since five years.", fix: "He has lived in London for five years.", explanation: "Use <strong>for</strong> with a duration (for five years, for two hours). Use <strong>since</strong> with a starting point (since 2020, since Monday)." },
    ],
    comparison: [
      { tense: "Past Simple", text: "Use Past Simple for completed actions at a specific past time. Use Present Perfect when the time is not specified or the action connects to now. Compare: <strong>I saw</strong> that movie yesterday (specific time) vs <strong>I have seen</strong> that movie (experience, no time)." },
      { tense: "Present Perfect Continuous", text: "Present Perfect focuses on completion and results. Present Perfect Continuous focuses on duration and process. Compare: <strong>I have written</strong> three emails (result) vs <strong>I have been writing</strong> emails all morning (process)." },
    ],
    notes: "The Present Perfect is often confused with the Past Simple. The key difference: if the time is specified, use Past Simple; if not, consider Present Perfect. <strong>Been</strong> = visited and returned (I have been to Paris). <strong>Gone</strong> = visited and still there (She has gone to Paris). American English sometimes uses Past Simple where British English prefers Present Perfect (I already ate vs I have already eaten).",
  },
  "Present Perfect Continuous": {
    description: "We use the Present Perfect Continuous for actions that started in the past and are still continuing, for actions that have recently stopped but have a visible result in the present, and to emphasize the duration or ongoing nature of an action rather than its completion.",
    usage: [
      { title: "Actions Continuing to Now", text: "Use it for actions that began in the past and are still happening.", example: "I have been studying English for three years.\nShe has been waiting since 2 PM." },
      { title: "Recent Actions with Visible Results", text: "Use it for actions that have just stopped but have a present result that you can see or feel.", example: "You look tired. Have you been working hard?\nThe ground is wet. It has been raining." },
      { title: "Emphasizing Duration", text: "Use it to emphasize how long something has been happening, focusing on the process rather than the result.", example: "I have been trying to call you all day.\nWe have been living in this house for a decade." },
    ],
    structure: { affirmative: "Subject + have / has + been + verb-ing", negative: "Subject + have / has + not + been + verb-ing", questions: "Have / Has + subject + been + verb-ing + ?" },
    details: { affirmative: "Use <strong>have been</strong> with I, you, we, they. Use <strong>has been</strong> with he, she, it. The main verb takes the -ing form.", negative: "Place <strong>not</strong> after the auxiliary. Contractions: haven't been / hasn't been.", questions: "Invert have/has with the subject. The form <strong>been + verb-ing</strong> stays together." },
    conjugation: "<strong>I/You/We/They</strong> have been working · <strong>He/She/It</strong> has been working",
    examples: { affirmative: ["<strong>I have been waiting</strong> for an hour.","<strong>She has been studying</strong> all morning.","<strong>They have been working</strong> since eight o'clock.","<strong>He has been living</strong> here for five years.","<strong>We have been planning</strong> this trip for months."], negative: ["<strong>I have not been sleeping</strong> well lately.","<strong>She has not been feeling</strong> good.","<strong>They have not been exercising</strong> regularly.","<strong>He has not been attending</strong> classes.","<strong>We have not been using</strong> that software."], questions: ["<strong>Have</strong> you <strong>been waiting</strong> long?","<strong>Has</strong> she <strong>been feeling</strong> better?","<strong>Have</strong> they <strong>been working</strong> on this project?","<strong>Has</strong> he <strong>been learning</strong> English?","<strong>Have</strong> we <strong>been driving</strong> for too long?"] },
    signalWords: ["for","since","all day / morning / week / year","lately","recently","how long","the whole day / week","all the time"],
    commonMistakes: [
      { mistake: "I have been knowing him for years.", fix: "I have known him for years.", explanation: "Stative verbs (know, believe, love) are NOT used in continuous forms. Use Present Perfect instead with stative verbs." },
      { mistake: "She has been working here since two years.", fix: "She has been working here for two years.", explanation: "Use <strong>for</strong> with a period of time (two years, three months). Use <strong>since</strong> with a starting point (since 2020, since January)." },
    ],
    comparison: [
      { tense: "Present Perfect", text: "Present Perfect Continuous emphasizes the duration/process. Present Perfect emphasizes the result/completion. Compare: <strong>I have painted</strong> the room (completed, result visible) vs <strong>I have been painting</strong> the room (process, maybe still going)." },
    ],
    notes: "The Present Perfect Continuous focuses on the <strong>duration</strong> or <strong>process</strong> of an action, while the Present Perfect focuses on the <strong>result</strong> or <strong>completion</strong>. With stative verbs (know, believe, love, hate), always use the Present Perfect, NOT the Present Perfect Continuous: I have known her for years (NOT I have been knowing her). This tense is very common in conversation to explain current situations.",
  },
  "Past Simple": {
    description: "We use the Past Simple for completed actions in the past at a specific time, for past habits or repeated actions, for past states and situations that are no longer true, and for narrating a sequence of past events in a story.",
    usage: [
      { title: "Completed Past Actions", text: "Use it for actions that started and finished at a specific time in the past.", example: "I visited my grandmother yesterday.\nShe bought a new dress last week." },
      { title: "Past Habits", text: "Use it for habits or repeated actions that no longer happen.", example: "I played soccer every day when I was a child.\nShe always walked to school." },
      { title: "Past States", text: "Use it for states and situations that were true in the past but are no longer true.", example: "He lived in London for ten years.\nThey had a big house in the countryside." },
      { title: "Narrating Stories", text: "Use it to tell a sequence of completed events in a story or narrative.", example: "He entered the room, sat down, and turned on the TV.\nFirst we had lunch, then we went for a walk." },
    ],
    structure: { affirmative: "Subject + past tense verb (V2)", negative: "Subject + did + not + base verb", questions: "Did + subject + base verb + ?" },
    details: { affirmative: "Regular verbs add -ed (work → worked, play → played). Irregular verbs have unique past forms that must be memorized (go → went, buy → bought, see → saw, eat → ate). The verb <strong>to be</strong> becomes was (I/he/she/it) or were (you/we/they).", negative: "Use <strong>did not</strong> (didn't) for ALL subjects. The main verb stays in its base form — <strong>do not</strong> use the past tense after did.", questions: "Use <strong>did</strong> for ALL subjects. The main verb stays in its base form." },
    conjugation: "<strong>I/You/He/She/It/We/They</strong> worked<br>Verb <em>to be</em>: <strong>I/He/She/It</strong> was · <strong>You/We/They</strong> were<br>Irregular example: <strong>I/You/He/She/It/We/They</strong> went, ate, saw, bought",
    examples: { affirmative: ["<strong>I visited</strong> my grandmother yesterday.","<strong>She bought</strong> a new dress last week.","<strong>They went</strong> to the beach on Saturday.","<strong>He wrote</strong> a letter to his friend.","<strong>We had</strong> dinner at a nice restaurant."], negative: ["<strong>I did not go</strong> to school yesterday.","<strong>She did not like</strong> the movie.","<strong>They did not arrive</strong> on time.","<strong>He did not finish</strong> his homework.","<strong>We did not eat</strong> breakfast this morning."], questions: ["<strong>Did</strong> you <strong>see</strong> the accident?","<strong>Did</strong> she <strong>call</strong> you last night?","<strong>Did</strong> they <strong>enjoy</strong> the party?","<strong>Did</strong> he <strong>pass</strong> the exam?","<strong>Did</strong> we <strong>miss</strong> the bus?"] },
    signalWords: ["yesterday","last night / week / month / year","ago (two days ago, a year ago)","in 2020 / in 1998","when I was a child","then","first, then, next, finally","the day before yesterday","earlier today"],
    commonMistakes: [
      { mistake: "I didn't went to school.", fix: "I didn't go to school.", explanation: "After <strong>did</strong> or <strong>didn't</strong>, the main verb must be in its base form. The past meaning is already in <strong>did</strong>." },
      { mistake: "She buyed a new phone.", fix: "She bought a new phone.", explanation: "Buy is an irregular verb. Its past form is <strong>bought</strong>, not buyed. Many common verbs are irregular and must be memorized." },
      { mistake: "When did she arrived?", fix: "When did she arrive?", explanation: "After <strong>did</strong> in questions, use the base form of the verb, NOT the past tense." },
    ],
    comparison: [
      { tense: "Present Perfect", text: "Past Simple is for completed actions at a specific past time. Present Perfect connects the past to the present. Compare: <strong>I lived</strong> in Paris for three years (I no longer live there) vs <strong>I have lived</strong> in Paris for three years (I still live there)." },
    ],
    notes: "This is the most common past tense in English and the one you will use most for storytelling. The biggest challenge is learning the irregular past forms — there are about 200 common irregular verbs. Group them by pattern to make learning easier (e.g., sing-sang-sung, ring-rang-rung, swim-swam-swum). In negative and question forms, remember that <strong>did</strong> carries the past tense, so the main verb returns to base form.",
  },
  "Past Continuous": {
    description: "We use the Past Continuous for actions that were in progress at a specific past time, for interrupted actions (when a longer ongoing action is interrupted by a shorter one), for two or more parallel actions happening simultaneously in the past, and to set the scene or background in a story.",
    usage: [
      { title: "Actions in Progress at a Past Time", text: "Use it to describe an action that was happening at a specific moment in the past.", example: "I was watching TV at 8 PM last night.\nShe was driving to work at 7:30 this morning." },
      { title: "Interrupted Actions", text: "Use it with the Past Simple when a longer action (Past Continuous) was interrupted by a shorter action (Past Simple).", example: "I was reading when the phone rang.\nShe was cooking when she cut her finger." },
      { title: "Parallel Actions", text: "Use it to describe two or more actions happening at the same time in the past.", example: "I was studying while my brother was playing games.\nThey were talking while the teacher was explaining." },
      { title: "Setting the Scene", text: "Use it at the beginning of stories to describe the background atmosphere or ongoing situation.", example: "The sun was shining and the birds were singing.\nEveryone was waiting quietly for the show to begin." },
    ],
    structure: { affirmative: "Subject + was / were + verb-ing", negative: "Subject + was / were + not + verb-ing", questions: "Was / Were + subject + verb-ing + ?" },
    details: { affirmative: "Use <strong>was</strong> with I, he, she, it. Use <strong>were</strong> with you, we, they. Add -ing to the main verb. Follow the same spelling rules as Present Continuous (drop -e, double consonant).", negative: "Place <strong>not</strong> after was/were. Contractions: wasn't / weren't.", questions: "Invert was/were with the subject. The main verb keeps the -ing form." },
    conjugation: "<strong>I/He/She/It</strong> was working · <strong>You/We/They</strong> were working",
    examples: { affirmative: ["<strong>I was watching</strong> TV at eight PM.","<strong>She was cooking</strong> when I arrived.","<strong>They were playing</strong> outside all afternoon.","<strong>He was sleeping</strong> during the movie.","<strong>We were driving</strong> home when it started to rain."], negative: ["<strong>I was not sleeping</strong> when you called.","<strong>She was not listening</strong> to the teacher.","<strong>They were not playing</strong> video games.","<strong>He was not paying</strong> attention.","<strong>We were not expecting</strong> this result."], questions: ["<strong>Were</strong> you <strong>sleeping</strong> when I called?","<strong>Was</strong> she <strong>working</strong> yesterday morning?","<strong>Were</strong> they <strong>playing</strong> in the garden?","<strong>Was</strong> he <strong>studying</strong> for the test?","<strong>Were</strong> we <strong>driving</strong> too fast?"] },
    signalWords: ["while","when","as","at 5 PM yesterday","all morning / afternoon / evening","this time last week","at that moment","during that time"],
    commonMistakes: [
      { mistake: "I was knowing the answer.", fix: "I knew the answer.", explanation: "Stative verbs (know, believe, understand, love) are NOT used in continuous tenses. Use Past Simple instead." },
      { mistake: "While I watched TV, she arrived.", fix: "While I was watching TV, she arrived.", explanation: "Use Past Continuous for the longer background action that was in progress when a shorter action occurred." },
      { mistake: "They were play football.", fix: "They were playing football.", explanation: "After was/were, the main verb must be in the -ing form. Never use the base form." },
    ],
    comparison: [
      { tense: "Past Simple", text: "Past Simple is for completed actions. Past Continuous is for ongoing actions in progress. Compare: <strong>I called</strong> her (completed action) vs <strong>I was calling</strong> her when she walked in (ongoing action interrupted)." },
    ],
    notes: "The Past Continuous is often used with the Past Simple in the same sentence. The Past Continuous sets the longer background action; the Past Simple expresses the short completed action: <strong>I was reading when she called</strong>. Stative verbs are generally not used in the continuous form. The Past Continuous is also useful for polite questions about the past: <strong>Were you looking for something?</strong>",
  },
  "Past Perfect": {
    description: "We use the Past Perfect to show that one past action happened before another past action (the past of the past). It makes the sequence of events clear when telling stories or explaining causes and effects. It is the past equivalent of the Present Perfect.",
    usage: [
      { title: "Action Before Another Past Action", text: "Use it when you need to make it clear that one past event happened before another past event.", example: "I had already eaten when she arrived.\nThey had left before I called." },
      { title: "Cause and Effect in the Past", text: "Use it to explain the cause of a past state or situation.", example: "She was tired because she had worked all night.\nHe failed the test because he had not studied." },
      { title: "With Time Expressions", text: "Use it with already, just, never, ever, by the time, before, after to clarify the sequence.", example: "By the time we arrived, the movie had already started.\nShe had never seen snow before that day." },
      { title: "Reported Speech", text: "Use it in reported speech to backshift from Present Perfect or Past Simple.", example: "He said he had finished the report.\nShe told me she had never been to Italy." },
    ],
    structure: { affirmative: "Subject + had + past participle", negative: "Subject + had + not + past participle", questions: "Had + subject + past participle + ?" },
    details: { affirmative: "Use <strong>had</strong> with ALL subjects (I, you, he, she, it, we, they). The main verb is in its past participle form. Contraction: 'd (I'd, you'd, she'd, etc.).", negative: "Place <strong>not</strong> after had. Contraction: hadn't.", questions: "Invert <strong>had</strong> with the subject. The past participle stays after the subject." },
    conjugation: "<strong>I/You/He/She/It/We/They</strong> had worked<br>Irregular: <strong>All subjects</strong> had gone, had seen, had eaten, had written",
    examples: { affirmative: ["<strong>I had already eaten</strong> when she arrived.","<strong>She had finished</strong> her work before noon.","<strong>They had left</strong> before I called.","<strong>He had never seen</strong> snow before that day.","<strong>We had booked</strong> the tickets in advance."], negative: ["<strong>I had not seen</strong> her before that day.","<strong>She had not finished</strong> cooking yet.","<strong>They had not heard</strong> the news.","<strong>He had not prepared</strong> for the meeting.","<strong>We had not met</strong> each other before."], questions: ["<strong>Had</strong> you ever <strong>been</strong> there before?","<strong>Had</strong> she <strong>finished</strong> the report on time?","<strong>Had</strong> they already <strong>left</strong> when you arrived?","<strong>Had</strong> he ever <strong>tried</strong> Thai food?","<strong>Had</strong> we <strong>met</strong> somewhere earlier?"] },
    signalWords: ["already","just","never","ever","by the time","before","after","until","when (showing sequence)","once","by then","by that time"],
    commonMistakes: [
      { mistake: "I had seen him yesterday.", fix: "I saw him yesterday.", explanation: "Don't use Past Perfect when the sequence is already clear from the context or time expression. Use Past Simple instead." },
      { mistake: "After I had ate, I went out.", fix: "After I had eaten, I went out.", explanation: "After <strong>had</strong>, use the past participle form (eaten, gone, seen), NOT the Past Simple form (ate, went, saw)." },
      { mistake: "She told me she has finished.", fix: "She told me she had finished.", explanation: "In reported speech, when the main verb is past (told), shift the tense back: Present Perfect becomes Past Perfect." },
    ],
    comparison: [
      { tense: "Past Simple", text: "Use Past Perfect only when the sequence of events needs clarifying. If time words like before or after already make the order clear, Past Simple is enough. Compare: <strong>I ate before she arrived</strong> (clear from 'before') vs <strong>When I arrived, she had already left</strong> (needs Past Perfect to show she left first)." },
    ],
    notes: "The Past Perfect is not used when the sequence of events is already clear from context or from conjunctions like before, after, or until. In those cases, the Past Simple is sufficient: <strong>I ate before she arrived</strong> (the word 'before' already tells you the order). The Past Perfect is the past equivalent of the Present Perfect — wherever you use Present Perfect for present time, use Past Perfect for past time.",
  },
  "Past Perfect Continuous": {
    description: "We use the Past Perfect Continuous to emphasize the duration of an action that was in progress before another past action or time. It explains the cause of a past state or result by emphasizing how long something had been happening before something else occurred.",
    usage: [
      { title: "Duration Before a Past Event", text: "Use it to emphasize how long an action had been going on before another past action or time.", example: "I had been waiting for two hours when she finally arrived.\nThey had been traveling for six hours before they stopped." },
      { title: "Cause of a Past Result", text: "Use it to explain the reason for a past state or situation, focusing on the ongoing activity that caused it.", example: "He was exhausted because he had been working all day.\nThe ground was wet because it had been raining all night." },
      { title: "Action Before a Specific Past Time", text: "Use it with a time reference to show how long something had been happening up to that point.", example: "She had been studying for months before the exam.\nBy last year, I had been living in London for a decade." },
    ],
    structure: { affirmative: "Subject + had + been + verb-ing", negative: "Subject + had + not + been + verb-ing", questions: "Had + subject + been + verb-ing + ?" },
    details: { affirmative: "Use <strong>had been</strong> with ALL subjects. The main verb takes the -ing form.", negative: "Place <strong>not</strong> after had. Contraction: hadn't been.", questions: "Invert <strong>had</strong> with the subject. The form <strong>been + verb-ing</strong> stays together." },
    conjugation: "<strong>I/You/He/She/It/We/They</strong> had been working",
    examples: { affirmative: ["<strong>I had been waiting</strong> for two hours when she arrived.","<strong>She had been studying</strong> for months before the exam.","<strong>They had been working</strong> there for five years.","<strong>He had been living</strong> in London before he moved.","<strong>We had been traveling</strong> for six hours when we stopped."], negative: ["<strong>I had not been feeling</strong> well before the trip.","<strong>She had not been sleeping</strong> well before the move.","<strong>They had not been working</strong> there for very long.","<strong>He had not been studying</strong> enough before the test.","<strong>We had not been waiting</strong> long before the bus came."], questions: ["<strong>Had</strong> you <strong>been waiting</strong> long before the bus arrived?","<strong>Had</strong> she <strong>been working</strong> there before she moved?","<strong>Had</strong> they <strong>been living</strong> in that house before the fire?","<strong>Had</strong> he <strong>been feeling</strong> sick before the diagnosis?","<strong>Had</strong> we <strong>been driving</strong> for long before we stopped?"] },
    signalWords: ["for","since","before","until","by the time","how long","all day / week / month","the whole morning / afternoon"],
    commonMistakes: [
      { mistake: "I had been knowing her for years.", fix: "I had known her for years.", explanation: "Stative verbs (know, believe, love) are NOT used in continuous tenses. Use Past Perfect instead." },
      { mistake: "She had been working before I arrived.", fix: "She had worked before I arrived (or) She was working when I arrived.", explanation: "If the focus is on the completion, not duration, use Past Perfect. If the action was in progress when you arrived, use Past Continuous." },
    ],
    comparison: [
      { tense: "Past Perfect", text: "Past Perfect Continuous emphasizes the duration of an action before another past event. Past Perfect emphasizes the completion. Compare: <strong>I had been writing</strong> for two hours when she arrived (focus on duration) vs <strong>I had written</strong> three pages when she arrived (focus on result)." },
    ],
    notes: "The Past Perfect Continuous emphasizes the <strong>duration</strong> of an action before another past event, while the Past Perfect emphasizes the <strong>completion</strong> of the action. This tense is less common than Past Perfect, especially in everyday conversation. Stative verbs are not used in continuous forms. Like all perfect continuous tenses, it has a four-word structure: had + been + verb-ing.",
  },
  "Future Simple": {
    description: "We use the Future Simple (will) for predictions about the future (often with verbs like think, believe, expect), for spontaneous decisions made at the moment of speaking, for promises and offers, for requests, and for general future facts that are certain.",
    usage: [
      { title: "Predictions", text: "Use it to talk about what you think or believe will happen in the future.", example: "I think it will rain tomorrow.\nShe believes he will become a great doctor." },
      { title: "Spontaneous Decisions", text: "Use it for decisions made at the moment of speaking, not planned in advance.", example: "The phone is ringing. I'll get it!\nI'll have the pasta, please." },
      { title: "Promises and Offers", text: "Use it to make promises, offers, and voluntary actions.", example: "I will help you with your homework.\nI will never forget your birthday." },
      { title: "General Future Facts", text: "Use it for things that are certainly true about the future.", example: "The sun will rise at 6 AM tomorrow.\nThe new semester will start in September." },
    ],
    structure: { affirmative: "Subject + will + base verb", negative: "Subject + will + not + base verb", questions: "Will + subject + base verb + ?" },
    details: { affirmative: "Use <strong>will</strong> with ALL subjects. The main verb stays in its base form. Contraction: 'll (I'll, you'll, she'll, he'll, it'll, we'll, they'll).", negative: "Place <strong>not</strong> after will. Contraction: <strong>won't</strong> (NOT willn't — this is the only correct contraction).", questions: "Invert <strong>will</strong> with the subject. The main verb stays in its base form." },
    conjugation: "<strong>I/You/He/She/It/We/They</strong> will work<br>Contractions: I'll, you'll, he'll, she'll, it'll, we'll, they'll<br>Negative: will not → won't",
    examples: { affirmative: ["<strong>I will call</strong> you tomorrow morning.","<strong>She will arrive</strong> next week.","<strong>They will help</strong> us with the project.","<strong>He will be</strong> a great doctor someday.","<strong>We will visit</strong> you during the holidays."], negative: ["<strong>I will not forget</strong> your birthday.","<strong>She will not come</strong> to the party.","<strong>They will not accept</strong> the offer.","<strong>He will not give</strong> up on his dream.","<strong>We will not leave</strong> without you."], questions: ["<strong>Will</strong> you <strong>come</strong> to my birthday party?","<strong>Will</strong> she <strong>pass</strong> the driving test?","<strong>Will</strong> they <strong>arrive</strong> before dinner?","<strong>Will</strong> he <strong>join</strong> us for the trip?","<strong>Will</strong> we <strong>finish</strong> on time?"] },
    signalWords: ["tomorrow","next week / month / year","soon","later","in the future","someday","I think / believe / expect / hope","probably","definitely","certainly","maybe"],
    commonMistakes: [
      { mistake: "I will call you when I will arrive.", fix: "I will call you when I arrive.", explanation: "In time clauses with when, after, before, as soon as, etc., use the Present Simple, NOT will, even for future meaning." },
      { mistake: "She willn't come to the party.", fix: "She won't come to the party.", explanation: "The contraction of will not is <strong>won't</strong>, NOT willn't." },
      { mistake: "If it will rain, I will stay home.", fix: "If it rains, I will stay home.", explanation: "In first conditional sentences (if + present, will + base), use Present Simple after if, NOT will." },
    ],
    comparison: [
      { tense: "Going to", text: "Will is for spontaneous decisions and predictions. Going to is for pre-planned intentions and evidence-based predictions. Compare: <strong>I'll answer</strong> the phone (spontaneous) vs <strong>I'm going to visit</strong> my parents (planned). <strong>I think it will rain</strong> (opinion) vs <strong>Look at those clouds! It's going to rain</strong> (evidence)." },
    ],
    notes: "The Future Simple is the most basic future tense. Note the difference between will for spontaneous decisions and <strong>going to</strong> for pre-planned intentions. In first conditional sentences (if/when + present simple, will + base verb), never use will after if. Use will for polite requests (Will you please...?) and offers (I'll help you). The contraction 'll is very common in spoken English.",
  },
  "Future Continuous": {
    description: "We use the Future Continuous to describe actions that will be in progress at a specific time in the future, for actions that are already planned or expected to happen as part of a normal routine, for polite inquiries about someone's plans, and to describe parallel actions in the future.",
    usage: [
      { title: "Actions in Progress at a Future Time", text: "Use it to describe an action that will be happening at a specific moment in the future.", example: "I will be working at 5 PM tomorrow.\nShe will be flying to New York at this time next week." },
      { title: "Future Plans and Routines", text: "Use it for events that are expected to happen as part of a normal routine or schedule.", example: "I'll be seeing my doctor on Tuesday.\nWe'll be having our annual meeting in March." },
      { title: "Polite Inquiries", text: "Use it to ask politely about someone's plans, which sounds less direct than using will.", example: "Will you be joining us for dinner?\nWill you be using the car this evening?" },
      { title: "Parallel Future Actions", text: "Use it to describe two or more actions that will be happening at the same time in the future.", example: "While you are relaxing on the beach, I will be working in the office.\nHe will be cooking while she will be setting the table." },
    ],
    structure: { affirmative: "Subject + will + be + verb-ing", negative: "Subject + will + not + be + verb-ing", questions: "Will + subject + be + verb-ing + ?" },
    details: { affirmative: "Use <strong>will be</strong> with ALL subjects. The main verb takes the -ing form.", negative: "Place <strong>not</strong> after will. Contraction: won't be.", questions: "Invert <strong>will</strong> with the subject. The form <strong>be + verb-ing</strong> stays together." },
    conjugation: "<strong>I/You/He/She/It/We/They</strong> will be working<br>Negative: will not be working → won't be working",
    examples: { affirmative: ["<strong>I will be waiting</strong> for you at the airport.","<strong>She will be working</strong> at five PM.","<strong>They will be traveling</strong> across Europe next summer.","<strong>He will be attending</strong> the conference next week.","<strong>We will be celebrating</strong> our anniversary in June."], negative: ["<strong>I will not be sleeping</strong> at midnight.","<strong>She will not be attending</strong> the meeting.","<strong>They will not be using</strong> the old system.","<strong>He will not be joining</strong> us for dinner.","<strong>We will not be staying</strong> at a hotel."], questions: ["<strong>Will</strong> you <strong>be working</strong> tomorrow afternoon?","<strong>Will</strong> she <strong>be joining</strong> us for dinner?","<strong>Will</strong> they <strong>be staying</strong> at a hotel?","<strong>Will</strong> he <strong>be attending</strong> the ceremony?","<strong>Will</strong> we <strong>be using</strong> the new software?"] },
    signalWords: ["at 5 PM tomorrow","this time next week / month / year","at this time tomorrow","in the coming years","all day tomorrow","when you arrive","during that time"],
    commonMistakes: [
      { mistake: "I will be work on the project.", fix: "I will be working on the project.", explanation: "After <strong>will be</strong>, the main verb must be in the -ing form, not the base form." },
      { mistake: "I will be knowing the answer tomorrow.", fix: "I will know the answer tomorrow.", explanation: "Stative verbs (know, believe, understand) are NOT used in continuous forms, even in future tenses." },
    ],
    comparison: [
      { tense: "Future Simple", text: "Future Continuous emphasizes the ongoing nature of an action at a point in time. Future Simple simply states that something will happen. Compare: <strong>I will work</strong> tomorrow (statement of fact) vs <strong>I will be working</strong> at 5 PM (emphasizes being in the middle of work)." },
    ],
    notes: "The Future Continuous is also used for future events that are expected to happen as part of a normal routine: <strong>I'll be seeing the doctor tomorrow at 10</strong> (it is already scheduled/expected). It can sound more polite than will when asking about plans: <strong>Will you be coming to the meeting?</strong> (less direct and more polite than Will you come?). Stative verbs are not used in continuous forms.",
  },
  "Future Perfect": {
    description: "We use the Future Perfect to talk about actions that will be completed before a specific point in the future. It looks back from a future time and says that something will have already happened, finished, or been accomplished by that time. It is the future equivalent of the Present Perfect.",
    usage: [
      { title: "Completed by a Future Time", text: "Use it to express that an action will be finished before or by a specific time in the future.", example: "I will have finished the report by Friday.\nShe will have graduated by next year." },
      { title: "By the Time Something Happens", text: "Use it with 'by the time' to show that one future event will be completed before another future event.", example: "By the time you arrive, I will have cooked dinner.\nThey will have left by the time you get there." },
      { title: "Accomplishments by a Deadline", text: "Use it to talk about achievements or progress by a certain future date.", example: "I will have saved enough money by December.\nWe will have completed the project by March." },
    ],
    structure: { affirmative: "Subject + will + have + past participle", negative: "Subject + will + not + have + past participle", questions: "Will + subject + have + past participle + ?" },
    details: { affirmative: "Use <strong>will have</strong> with ALL subjects. The main verb is in its past participle form. Contraction: 'll have.", negative: "Place <strong>not</strong> after will. Contraction: won't have.", questions: "Invert <strong>will</strong> with the subject. The form <strong>have + past participle</strong> stays together." },
    conjugation: "<strong>I/You/He/She/It/We/They</strong> will have worked<br>Irregular: will have gone, will have seen, will have eaten, will have written",
    examples: { affirmative: ["<strong>I will have finished</strong> the report by Friday.","<strong>She will have graduated</strong> by next year.","<strong>They will have arrived</strong> by noon.","<strong>He will have saved</strong> enough money by December.","<strong>We will have completed</strong> the project by March."], negative: ["<strong>I will not have finished</strong> by Monday.","<strong>She will not have saved</strong> enough money yet.","<strong>They will not have left</strong> by the time you arrive.","<strong>He will not have recovered</strong> by next week.","<strong>We will not have reached</strong> the destination by night."], questions: ["<strong>Will</strong> you <strong>have finished</strong> by five PM?","<strong>Will</strong> she <strong>have arrived</strong> by the time we get there?","<strong>Will</strong> they <strong>have completed</strong> the work by Friday?","<strong>Will</strong> he <strong>have graduated</strong> by next summer?","<strong>Will</strong> we <strong>have driven</strong> two hundred miles by then?"] },
    signalWords: ["by (by Friday, by next year, by then)","by the time","by then","by next month / week / year","in a week's / month's time","before"],
    commonMistakes: [
      { mistake: "By next week I will finish the project.", fix: "By next week I will have finished the project.", explanation: "When using <strong>by</strong> to indicate a deadline, use Future Perfect to show the action will be completed before that time, not Future Simple." },
      { mistake: "I will have saw the movie by then.", fix: "I will have seen the movie by then.", explanation: "After <strong>will have</strong>, use the past participle form (seen, gone, eaten), NOT the Past Simple form (saw, went, ate)." },
      { mistake: "She'll have been 20 next month.", fix: "She'll be 20 next month.", explanation: "For simple future facts (age, status), use Future Simple, not Future Perfect. Future Perfect is for completed actions, not states." },
    ],
    comparison: [
      { tense: "Future Simple", text: "Future Perfect focuses on completion before a future point. Future Simple focuses on the action itself. Compare: <strong>I will finish</strong> the report (just states the action) vs <strong>I will have finished</strong> the report by Friday (emphasizes completion before the deadline)." },
    ],
    notes: "The Future Perfect is always used with a time reference point (by next week, by the time you arrive). Without a time reference, the meaning is unclear or incomplete. It is a relatively formal tense and is less common in everyday conversation than Future Simple. The passive form is also used: <strong>The work will have been completed by March.</strong>",
  },
  "Future Perfect Continuous": {
    description: "We use the Future Perfect Continuous to emphasize the duration of an action that will be in progress up until a specific future time. It focuses on how long something will have been happening by a certain point in the future. It is the longest and most complex tense in English.",
    usage: [
      { title: "Duration Before a Future Time", text: "Use it to emphasize how long an action will have been going on by a specific future moment.", example: "I will have been working here for ten years next month.\nShe will have been studying for three hours by the time we arrive." },
      { title: "Cause of a Future Result", text: "Use it to explain what will cause a future state or situation, focusing on the ongoing activity.", example: "He will be exhausted because he will have been working all day.\nThey will be hungry because they will have been traveling for 24 hours." },
      { title: "With Duration Expressions", text: "Use it with for + duration + by/before to express how long something will have lasted.", example: "By October, we will have been building this house for six months.\nIn April, he will have been living in Japan for a year." },
    ],
    structure: { affirmative: "Subject + will + have + been + verb-ing", negative: "Subject + will + not + have + been + verb-ing", questions: "Will + subject + have + been + verb-ing + ?" },
    details: { affirmative: "Use <strong>will have been</strong> with ALL subjects. The main verb takes the -ing form. This is the only four-word verb structure in English.", negative: "Place <strong>not</strong> after will. Contraction: won't have been.", questions: "Invert <strong>will</strong> with the subject. The form <strong>have been + verb-ing</strong> stays together." },
    conjugation: "<strong>I/You/He/She/It/We/They</strong> will have been working<br>Negative: will not have been working → won't have been working",
    examples: { affirmative: ["<strong>I will have been working</strong> here for ten years next month.","<strong>She will have been studying</strong> for three hours by the time we arrive.","<strong>They will have been traveling</strong> for twenty four hours by then.","<strong>He will have been living</strong> in Japan for a year in April.","<strong>We will have been building</strong> this house for six months by October."], negative: ["<strong>I will not have been living</strong> there for very long.","<strong>She will not have been waiting</strong> for more than an hour.","<strong>They will not have been working</strong> on this project for long.","<strong>He will not have been studying</strong> English for very long.","<strong>We will not have been driving</strong> for more than two hours."], questions: ["<strong>Will</strong> you <strong>have been waiting</strong> long by the time we arrive?","<strong>Will</strong> she <strong>have been studying</strong> for five hours by noon?","<strong>Will</strong> they <strong>have been living</strong> here for a year next month?","<strong>Will</strong> he <strong>have been working</strong> there for a decade next spring?","<strong>Will</strong> we <strong>have been traveling</strong> for eight hours by the time we stop?"] },
    signalWords: ["by (by next month, by then)","for (for ten years, for three hours)","by the time","for ... by ...","in (in April, in three years)","next month / year"],
    commonMistakes: [
      { mistake: "I will have been work here for a year.", fix: "I will have been working here for a year.", explanation: "After <strong>will have been</strong>, the main verb must be in the -ing form, not the base form." },
      { mistake: "By next month I will have been knowing her for a year.", fix: "By next month I will have known her for a year.", explanation: "Stative verbs (know, believe, love) are NOT used in continuous forms. Use Future Perfect instead." },
    ],
    comparison: [
      { tense: "Future Perfect", text: "Future Perfect Continuous focuses on the duration up to a future point. Future Perfect focuses on completion. Compare: <strong>I will have been writing</strong> for three hours by noon (focus on duration) vs <strong>I will have written</strong> ten pages by noon (focus on result)." },
    ],
    notes: "This tense is rare in everyday English and is mostly used in formal or written contexts. It is the longest and most complex English tense structure — the only one with four words: will + have + been + verb-ing. Like all continuous tenses, stative verbs (know, believe, love, want) are not normally used. If you want to emphasize completion rather than duration, use the Future Perfect instead. Due to its complexity, even native speakers sometimes avoid this tense in casual conversation.",
  },
};

/* ── CONSTANTS ── */
const TENSE_NAMES = TENSE_ORDER;
const FORMS = ["affirmative","negative","questions"];
const FORM_LABELS = { affirmative:"Affirmative", negative:"Negative", questions:"Questions" };

/* ── STATE ── */
let state = {
  currentTense: window.PAGE_TENSE || "Present Simple",
  currentForm: "affirmative",
  currentSentence: "",
  correctWords: [],
  score: 0,
  attempts: 0,
  streak: 0,
  bestStreak: 0,
  completed: 0,
  usedSentences: [],
  hintLevel: 0,
  isComplete: false,
};

/* ── PROGRESS PERSISTENCE ── */
const STORAGE_KEY = "anagramGame_progress";
function progKey() { return state.currentTense + "." + state.currentForm; }
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const all = JSON.parse(raw);
    const saved = all[progKey()];
    if (!saved) return;
    state.score = saved.score ?? 0;
    state.attempts = saved.attempts ?? 0;
    state.streak = saved.streak ?? 0;
    state.bestStreak = saved.bestStreak ?? 0;
    state.completed = saved.completed ?? 0;
    state.usedSentences = saved.usedSentences ?? [];
  } catch(e) { /* ignore corrupt data */ }
}
function saveProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const all = raw ? JSON.parse(raw) : {};
    all[progKey()] = {
      score: state.score,
      attempts: state.attempts,
      streak: state.streak,
      bestStreak: state.bestStreak,
      completed: state.completed,
      usedSentences: state.usedSentences,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch(e) { /* ignore storage errors */ }
}

/* ── UTILITIES ── */
const $ = id => document.getElementById(id);
function shuffle(a) { const r = [...a]; for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]]} return r; }
function getSentencesFor(t,f) { return SENTENCES[t]?.[f]||[]; }
function pickSentence() { const p = getSentencesFor(state.currentTense,state.currentForm); const a = p.filter(s=>!state.usedSentences.includes(s)); const src = a.length>0?a:p; return src[Math.floor(Math.random()*src.length)]; }

/* ── DOM REFS ── */
const wordsArea = $("wordsArea");
const dropArea = $("dropArea");
const checkBtn = $("checkBtn");
const resetBtn = $("resetBtn");
const newSentenceBtn = $("newSentenceBtn");
const hintBtn = $("hintBtn");
const resultDiv = $("result");
const scoreSpan = $("score");
const attemptsSpan = $("attempts");
const streakDisplay = $("streakDisplay");
const completedDisplay = $("completedDisplay");
const accuracyDisplay = $("accuracyDisplay");
const bestStreakDisplay = $("bestStreakDisplay");
const hintArea = $("hintArea");
const hintText = $("hintText");
const progressBar = $("progressBar");
const progressText = $("progressText");
const themeToggle = $("themeToggle");
const wordCount = $("wordCount");
const dropCount = $("dropCount");

let draggedItem = null;
let dropTarget = null;
let feedbackTimeout = null;

/* ── SIDEBAR ── */
let sidebar, sidebarOverlay, sidebarToggle, sidebarClose, sidebarNav, tenseLabel, formLabel;

sidebar = $("sidebar");
sidebarOverlay = $("sidebarOverlay");
sidebarToggle = $("sidebarToggle");
sidebarClose = $("sidebarClose");
sidebarNav = $("sidebarNav");
tenseLabel = $("tenseLabel");
formLabel = $("formLabel");

function tenseToFilename(tense) {
  return tense.toLowerCase().replace(/\s+/g, '-') + '.html';
}

const SIDEBAR_STRUCTURE = [
  { type: "link", icon: "🏠", label: "Home", href: "/" },
  { type: "link", icon: "📖", label: "Dictionary", href: "/dictionary/index.html" },
  { type: "section", icon: "📚", label: "Grammar", children: [
    { type: "group", icon: "📖", label: "English Tenses", href: "/grammar/present-simple.html", isTense: true, forms: ["Affirmative","Negative","Questions"] },
    { type: "group", icon: "🔗", label: "Clauses", href: "/grammar/clauses.html", children: [
      { label: "Noun Clauses", href: "/grammar/noun-clauses.html" },
      { label: "Adjective Clauses", href: "/grammar/adjective-clauses.html" },
      { label: "Adverb Clauses", href: "/grammar/adverb-clauses.html" },
    ]},
    { type: "link", icon: "📍", label: "Prepositions", href: "/grammar/prepositions.html" },
    { type: "link", icon: "🔗", label: "Conjunctions", href: "/grammar/conjunctions.html" },
    { type: "link", icon: "📏", label: "Adjective Positions", href: "/grammar/adjective-positions.html" },
    { type: "link", icon: "📍", label: "Adverb Positions", href: "/grammar/adverb-positions.html" },
    { type: "link", icon: "💬", label: "Phrasal Verbs", href: "/grammar/phrasal-verbs.html" },
    { type: "link", icon: "🎭", label: "Idiomatic Expressions", href: "/grammar/idiomatic-expressions.html" },
  ]},
  { type: "section", icon: "🎮", label: "Games", children: [
    { type: "link", icon: "🔤", label: "Anagram Game", href: "/games/game-anagram.html" },
    { type: "link", icon: "📝", label: "Sentence Unscramble", href: "/games/game-unscramble.html" },
    { type: "link", icon: "🔍", label: "Error Correction", href: "/games/game-error-correction.html" },
    { type: "link", icon: "⏰", label: "Verb Tense Challenge", href: "/games/game-verb-tense.html" },
    { type: "link", icon: "📏", label: "Word Order Challenge", href: "/games/game-word-order.html" },
    { type: "link", icon: "📍", label: "Preposition Challenge", href: "/games/game-preposition.html" },
    { type: "link", icon: "📏", label: "Adjective Order", href: "/games/game-adjective-order.html" },
    { type: "link", icon: "📍", label: "Adverb Placement", href: "/games/game-adverb-placement.html" },
    { type: "link", icon: "🔗", label: "Clause Identification", href: "/games/game-clause-identification.html" },
  ]},
  { type: "link", icon: "🎯", label: "Daily Challenge", href: "/games/daily-challenge.html", divider: true },
];

let isTensePage = typeof window.PAGE_TENSE !== "undefined" && window.PAGE_TENSE !== "Hub";

function expandTenseGroup() {
  if (!sidebarNav || !isTensePage) return;
  const tg = sidebarNav.querySelector('.tense-group[data-tense-group="tenses"]');
  if (tg) tg.classList.add("open");
}

function buildGlobalSidebar() {
  if (!sidebarNav) return;
  sidebarNav.innerHTML = "";
  const pagePath = window.location.pathname.split("/").pop() || "index.html";

  SIDEBAR_STRUCTURE.forEach(item => {
    if (item.type === "link") {
      const a = document.createElement("a");
      a.className = "sidebar-link" + (item.divider ? " sidebar-link-divider" : "");
      a.href = item.href;
      a.innerHTML = `<span class="sidebar-link-icon">${item.icon}</span><span class="sidebar-link-text">${item.label}</span>`;
      if (a.href.endsWith(pagePath)) a.classList.add("active");
      sidebarNav.appendChild(a);
    } else if (item.type === "section") {
      const section = document.createElement("div"); section.className = "sidebar-section";
      const header = document.createElement("div"); header.className = "sidebar-section-header";
      header.innerHTML = `<span class="sidebar-link-icon">${item.icon}</span><span class="sidebar-link-text">${item.label}</span><span class="sidebar-section-arrow">▾</span>`;
      header.addEventListener("click", () => { section.classList.toggle("open"); });
      section.appendChild(header);
      const children = document.createElement("div"); children.className = "sidebar-children";
      item.children.forEach(child => {
        if (child.type === "group") {
          const group = document.createElement("div"); group.className = "tense-group"; group.dataset.tenseGroup = child.isTense ? "tenses" : "";
          const gh = document.createElement("div"); gh.className = "tense-header";
          const gt = document.createElement("button"); gt.className = "tense-title"; gt.dataset.tense = child.isTense ? child.label : "";
          const gts = document.createElement("span"); gts.className = "tense-title-text"; gts.innerHTML = `<span class="sidebar-link-icon" style="font-size:12px;margin-right:4px;">${child.icon}</span>${child.label}`;
          const gta = document.createElement("span"); gta.className = "tense-title-arrow"; gta.textContent = "▾";
          gt.appendChild(gts); gt.appendChild(gta);
          const gl = document.createElement("a"); gl.className = "tense-page-link"; gl.href = child.href; gl.textContent = "↗"; gl.title = `Open page`; gl.rel = "noopener";
          gh.appendChild(gt); gh.appendChild(gl);

          if (child.isTense && isTensePage) {
            const gf = document.createElement("div"); gf.className = "tense-forms";
            child.forms.forEach(form => {
              const fb = document.createElement("button"); fb.className = "form-btn"; fb.textContent = form; fb.dataset.tense = state.currentTense; fb.dataset.form = form.toLowerCase();
              gf.appendChild(fb);
            });
            group.appendChild(gh); group.appendChild(gf);
            gt.addEventListener("click", (e) => { e.stopPropagation(); showTheory(state.currentTense); });
          } else {
            group.appendChild(gh);
            gt.addEventListener("click", (e) => {
              e.stopPropagation();
              if (child.isTense && isTensePage) showTheory(state.currentTense);
              else window.location.href = child.href;
            });
          }

          if (child.children) {
            const subChildren = document.createElement("div"); subChildren.className = "sidebar-children sidebar-sub";
            child.children.forEach(sub => {
              const sa = document.createElement("a"); sa.className = "sidebar-link sidebar-sub-link"; sa.href = sub.href;
              sa.innerHTML = `<span class="sidebar-link-text" style="font-size:12px;">${sub.label}</span>`;
              if (sa.href.endsWith(pagePath)) sa.classList.add("active");
              subChildren.appendChild(sa);
            });
            group.appendChild(subChildren);
          }

          children.appendChild(group);
        } else if (child.type === "link") {
          const ca = document.createElement("a"); ca.className = "sidebar-link"; ca.href = child.href;
          ca.innerHTML = `<span class="sidebar-link-icon">${child.icon}</span><span class="sidebar-link-text">${child.label}</span>`;
          if (ca.href.endsWith(pagePath)) ca.classList.add("active");
          children.appendChild(ca);
        }
      });
      section.appendChild(children);
      sidebarNav.appendChild(section);
    }
  });

  expandTenseGroup();
  updateSidebarActive();
}

function updateSidebarActive() {
  if (!sidebarNav) return;
  if (isTensePage) {
    sidebarNav.querySelectorAll(".tense-title").forEach(el => el.classList.toggle("active", el.dataset.tense === state.currentTense));
    sidebarNav.querySelectorAll(".form-btn").forEach(el => el.classList.toggle("active", el.dataset.tense === state.currentTense && el.dataset.form === state.currentForm));
    sidebarNav.querySelectorAll(".tense-group").forEach(g => {
      const t = g.querySelector(".tense-title");
      if (t && t.dataset.tense === state.currentTense) { g.classList.add("open"); t.setAttribute("aria-expanded", "true"); }
      else if (t) { g.classList.remove("open"); t.setAttribute("aria-expanded", "false"); }
    });
  }
}

function closeSidebar() { if(sidebar){sidebar.classList.remove("open");sidebarOverlay?.classList.remove("visible");} }
function toggleSidebar(){ if(sidebar){sidebar.classList.toggle("open");sidebarOverlay?.classList.toggle("visible");} }

/* ── THEORY RENDER (shared) ── */

function renderTheoryHTML(tense) {
  const t = THEORY[tense]; if(!t) return "";
  const esc = s => {const d=document.createElement("div"); d.textContent=s; return d.innerHTML;};
  const F = ["affirmative","negative","questions"];
  return `
    <div class="theory-card">
      <h2 class="theory-title">${esc(tense)}</h2>

      <section class="theory-section">
        <h3 class="theory-section-title">📖 When to Use</h3>
        <p class="theory-description">${t.description}</p>
      </section>

      ${t.usage ? `
      <section class="theory-section">
        <h3 class="theory-section-title">🎯 Usage Breakdown</h3>
        <div class="usage-grid">
          ${t.usage.map(u => `
            <div class="usage-card">
              <span class="usage-card-title">${esc(u.title)}</span>
              <p class="usage-card-text">${u.text}</p>
              ${u.example ? `<code class="usage-card-example">${u.example}</code>` : ""}
            </div>
          `).join("")}
        </div>
      </section>` : ""}

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Structure</h3>
        <div class="structure-grid">
          ${F.map(f => `
            <div class="structure-card ${f}">
              <span class="structure-label">${f==="affirmative"?"✅":f==="negative"?"❌":"❓"} ${f.charAt(0).toUpperCase()+f.slice(1)}</span>
              <code class="structure-formula">${esc(t.structure[f])}</code>
              <p class="structure-detail">${t.details?.[f]||""}</p>
            </div>
          `).join("")}
        </div>
      </section>

      ${t.conjugation ? `
      <section class="theory-section">
        <h3 class="theory-section-title">📋 Conjugation Helper</h3>
        <div class="conjugation-block">${t.conjugation}</div>
      </section>` : ""}

      <section class="theory-section">
        <h3 class="theory-section-title">📝 Examples</h3>
        <div class="examples-grid">
          ${F.map(f => `
            <div class="example-group">
              <span class="example-label ${f}-label">${f==="affirmative"?"✅":f==="negative"?"❌":"❓"} ${f.charAt(0).toUpperCase()+f.slice(1)}</span>
              <ul class="example-list">${t.examples[f].map(ex => `<li>${ex}</li>`).join("")}</ul>
            </div>
          `).join("")}
        </div>
      </section>

      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${t.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">${esc(m.mistake)}</p>
              <p class="mistake-correct">${esc(m.fix)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>

      ${t.comparison ? `
      <section class="theory-section">
        <h3 class="theory-section-title">🔍 Compare with Similar Tenses</h3>
        <div class="comparison-grid">
          ${t.comparison.map(c => `
            <div class="comparison-card">
              <span class="comparison-card-title">vs ${esc(c.tense)}</span>
              <p class="comparison-card-text">${c.text}</p>
            </div>
          `).join("")}
        </div>
      </section>` : ""}

      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes">${t.notes}</p>
      </section>

      <div class="theory-actions">
        <button class="btn btn-accent practice-btn" data-tense="${esc(tense)}">
          <span class="btn-icon" aria-hidden="true">🎯</span> Practice ${esc(tense)}
        </button>
      </div>
    </div>`;
}

function showTheory(tense) {
  state.currentTense = tense;
  state.view = "theory";
  const tv = $("theoryView"); const gv = $("gameView");
  if(tv) { tv.innerHTML = renderTheoryHTML(tense); tv.hidden = false; }
  if(gv) { gv.hidden = true; }
  if(tenseLabel) tenseLabel.textContent = tense;
  if(formLabel) formLabel.textContent = "Theory";
  updateSidebarActive();
  setActiveTab("theory");
  closeSidebar();
  window.scrollTo({top:0,behavior:"smooth"});
}

function showGame() {
  state.view = "game";
  const tv = $("theoryView"); const gv = $("gameView");
  if(tv) tv.hidden = true;
  if(gv) gv.hidden = false;
  if(tenseLabel) tenseLabel.textContent = state.currentTense;
  if(formLabel) formLabel.textContent = FORM_LABELS[state.currentForm];
  updateSidebarActive();
  setActiveTab(state.currentForm);
}

/* ── GAME (shared) ── */

function loadGame() {
  wordsArea.innerHTML = "";
  dropArea.innerHTML = "";
  resultDiv.textContent = ""; resultDiv.className = "result-message";
  hintArea?.setAttribute("hidden","");
  state.hintLevel = 0; state.isComplete = false;
  const ph = document.createElement("div"); ph.className = "drop-placeholder"; ph.textContent = "Drop words here to build your sentence…"; dropArea.appendChild(ph);
  state.currentSentence = pickSentence();
  if (state.currentForm === "questions") state.currentSentence += " ?";
  state.correctWords = state.currentSentence.split(" ");
  shuffle(state.correctWords).forEach(w => wordsArea.appendChild(createWordEl(w)));
  updateWordCounts(); enableDraggable(true); updateStats(); updateProgress();
}

function updateStats() {
  if(scoreSpan) scoreSpan.textContent = state.score;
  if(attemptsSpan) attemptsSpan.textContent = state.attempts;
  if(streakDisplay) streakDisplay.textContent = state.streak;
  if(completedDisplay) completedDisplay.textContent = state.completed;
  if(bestStreakDisplay) bestStreakDisplay.textContent = state.bestStreak;
  if(accuracyDisplay) { const p = state.attempts>0?Math.round((state.score/state.attempts)*100):0; accuracyDisplay.textContent = p+"%"; }
}

function updateWordCounts() {
  const wc = wordsArea.children.length;
  const dc = dropArea.children.length - (dropArea.querySelector(".drop-placeholder")?1:0);
  if(wordCount) wordCount.textContent = `${wc} word${wc!==1?"s":""}`;
  if(dropCount) dropCount.textContent = `${dc} word${dc!==1?"s":""}`;
}

function updateProgress() {
  const pool = getSentencesFor(state.currentTense,state.currentForm);
  const total = pool.length;
  const done = state.usedSentences.filter(s=>pool.includes(s)).length;
  const pct = total>0?Math.round((done/total)*100):0;
  if(progressBar) progressBar.style.width = Math.min(pct,100)+"%";
  if(progressText) progressText.textContent = `${Math.min(done,total)} / ${total} completed`;
}

function createWordEl(text,opts={}) {
  const{droppable=false,correct=false}=opts;
  const el=document.createElement("div");
  el.className="word"; el.textContent=text; el.setAttribute("data-word",text);
  if(correct) el.classList.add("correct");
  if(droppable) el.classList.add("droppable-word");
  if(!correct){el.setAttribute("draggable","true");el.addEventListener("dragstart",onDragStart);el.addEventListener("dragend",onDragEnd);}
  if(droppable){el.addEventListener("click",()=>returnWord(el,text));}
  return el;
}

function returnWord(el,text){if(state.isComplete)return;const n=createWordEl(text);wordsArea.appendChild(n);el.remove();updateWordCounts();resultDiv.textContent="";resultDiv.className="result-message";showFeedback(`"${text}" moved back`,"info");}

function onDragStart(e){if(this.getAttribute("draggable")!=="true")return;draggedItem=this;e.dataTransfer.setData("text/plain",this.textContent);e.dataTransfer.effectAllowed="move";this.classList.add("dragging");}
function onDragEnd(){if(draggedItem){draggedItem.classList.remove("dragging");draggedItem=null;dropTarget=null;}}

function setupDropZone() {
  dropArea.addEventListener("dragover",e=>{
    e.preventDefault();e.dataTransfer.dropEffect="move";dropArea.classList.add("drag-over");
    const t=e.target.closest(".word");
    if(t&&t.parentElement===dropArea&&t!==draggedItem){dropTarget=t;}else if(!e.target.closest(".word")){dropTarget=null;}
  });
  dropArea.addEventListener("dragleave",()=>dropArea.classList.remove("drag-over"));
  dropArea.addEventListener("drop",e=>{
    e.preventDefault();dropArea.classList.remove("drag-over");
    if(!draggedItem||state.isComplete)return;
    const fromWords=draggedItem.parentElement===wordsArea;
    const fromDrop=draggedItem.parentElement===dropArea;
    if(fromDrop){
      if(dropTarget&&dropTarget!==draggedItem){dropArea.insertBefore(draggedItem,dropTarget);}
      dropTarget=null;updateWordCounts();return;
    }
    if(fromWords){
      const t=draggedItem.textContent;const el=createWordEl(t,{droppable:true});
      if(dropTarget&&dropTarget.parentElement===dropArea){dropArea.insertBefore(el,dropTarget);}
      else{dropArea.appendChild(el);}
      const ph=dropArea.querySelector(".drop-placeholder");
      if(ph&&dropArea.children.length>1)ph.remove();
      draggedItem.remove();dropTarget=null;updateWordCounts();
    }
  });
}

function enableDraggable(on){document.querySelectorAll(".word").forEach(el=>{if(on&&!el.classList.contains("correct")){el.setAttribute("draggable","true");el.style.cursor="grab";}else{el.setAttribute("draggable","false");el.style.cursor="default";}});}

function showFeedback(msg,type){const fa=$("feedbackArea");const el=document.createElement("div");el.className=`temp-feedback ${type}`;el.textContent=msg;fa?.appendChild(el);if(feedbackTimeout)clearTimeout(feedbackTimeout);feedbackTimeout=setTimeout(()=>{if(el.parentElement)el.remove();},3000);}

function checkAnswer(){if(state.isComplete){showFeedback("Sentence already complete! Try a new one.","info");return;}const dw=Array.from(dropArea.children).filter(c=>!c.classList.contains("drop-placeholder")).map(c=>c.textContent);if(dw.length===0){showFeedback("Drag some words to the drop area first!","info");return;}const us=dw.join(" ");const correct=us===state.currentSentence;state.attempts++;updateStats();if(correct){state.score++;state.streak++;state.completed++;if(state.streak>state.bestStreak)state.bestStreak=state.streak;state.isComplete=true;updateStats();updateProgress();resultDiv.textContent="Perfect! Correct sentence!";resultDiv.className="result-message success";dropArea.classList.add("success-pulse");setTimeout(()=>dropArea.classList.remove("success-pulse"),500);document.querySelectorAll("#dropArea .word").forEach(el=>{el.classList.add("correct");el.setAttribute("draggable","false");el.style.cursor="default";});enableDraggable(false);showFeedback("Great job! Try a new sentence.","success");spawnConfetti();}else{state.streak=0;updateStats();resultDiv.textContent="Not quite right. Try again!";resultDiv.className="result-message error";dropArea.classList.add("shake");setTimeout(()=>dropArea.classList.remove("shake"),400);const c=dw.length;const n=state.correctWords.length;if(c!==n){showFeedback(`You placed ${c} word${c!==1?"s":""}, but need ${n}.`,"info");}else{showFeedback("All words are there, but the order is wrong.","info");}}saveProgress();}

function resetGame(){if(state.isComplete){loadGame();return;}dropArea.innerHTML="";const ph=document.createElement("div");ph.className="drop-placeholder";ph.textContent="Drop words here to build your sentence…";dropArea.appendChild(ph);wordsArea.innerHTML="";shuffle(state.correctWords).forEach(w=>wordsArea.appendChild(createWordEl(w)));resultDiv.textContent="";resultDiv.className="result-message";hintArea?.setAttribute("hidden","");state.hintLevel=0;updateWordCounts();showFeedback("Reset! Arrange the words again.","info");}

function loadNewSentence(){const s=state.currentSentence.replace(/ \?$/,"");state.usedSentences.push(s);saveProgress();loadGame();showFeedback("New sentence! Try to arrange it correctly.","info");}

function giveHint(){if(state.isComplete){showFeedback("Sentence is already complete!","info");return;}const w=state.correctWords;state.hintLevel=Math.min(state.hintLevel+1,w.length);const hw=w.map((w,i)=>{if(i<state.hintLevel)return w;return w.split("").map((ch,j)=>(j===0&&ch.match(/[a-zA-Z]/)?ch:"_")).join("");});if(hintText)hintText.textContent=hw.join(" ");hintArea?.removeAttribute("hidden");}

function spawnConfetti(){const c=document.createElement("div");c.className="confetti-container";document.body.appendChild(c);const colors=["#4f46e5","#f59e0b","#10b981","#ef4444","#ec4899","#8b5cf6","#06b6d4","#f97316"];const shapes=["■","●","▲","★","♦"];for(let i=0;i<60;i++){const p=document.createElement("div");p.className="confetti-piece";p.textContent=shapes[Math.floor(Math.random()*shapes.length)];p.style.left=Math.random()*100+"%";p.style.color=colors[Math.floor(Math.random()*colors.length)];p.style.fontSize=8+Math.random()*12+"px";p.style.animationDuration=1.5+Math.random()*2+"s";p.style.animationDelay=Math.random()*0.5+"s";c.appendChild(p);}setTimeout(()=>{if(c.parentElement)c.remove();},4000);}

/* ── FORM SELECTION (shared) ── */
function selectTenseForm(tense,form) {
  saveProgress();
  state.currentTense = tense;
  state.currentForm = form;
  state.hintLevel = 0;
  loadProgress();
  showGame();
  closeSidebar();
  loadGame();
  showFeedback(`Now practicing: ${tense} — ${FORM_LABELS[form]}`,"info");
}

/* ── TABS (single-tense only) ── */
function setActiveTab(view) {
  document.querySelectorAll(".tab").forEach(t => {
    const v = t.dataset.view;
    t.classList.toggle("active", v === view);
    t.setAttribute("aria-selected", v === view ? "true" : "false");
  });
}

function initTabs() {
  document.querySelector(".tab-bar")?.addEventListener("click", e => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    const view = tab.dataset.view;
    if (view === "theory") { showTheory(state.currentTense); }
    else { selectTenseForm(state.currentTense, view); }
  });
}

/* ── THEME ── */
function initTheme() {
  const saved = localStorage.getItem("sb-theme");
  if(saved==="dark"||saved==="light") document.documentElement.setAttribute("data-theme",saved);
  else if(window.matchMedia("(prefers-color-scheme:dark)").matches) document.documentElement.setAttribute("data-theme","dark");
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur==="dark"?"light":"dark";
  document.documentElement.setAttribute("data-theme",next);
  localStorage.setItem("sb-theme",next);
}

/* ── INIT ── */
function init() {
  initTheme();
  buildGlobalSidebar();
  isTensePage = typeof window.PAGE_TENSE !== "undefined" && window.PAGE_TENSE !== "Hub";

  if (isTensePage) {
    setupDropZone();
    initTabs();
    document.title = state.currentTense + " — English Tenses";
    loadProgress();
    showTheory(state.currentTense);

    document.addEventListener("click", e => {
      const btn = e.target.closest(".practice-btn");
      if (btn) selectTenseForm(btn.dataset.tense || state.currentTense, "affirmative");
    });
    $("theoryBtn")?.addEventListener("click", () => showTheory(state.currentTense));
    checkBtn?.addEventListener("click", checkAnswer);
    resetBtn?.addEventListener("click", resetGame);
    newSentenceBtn?.addEventListener("click", loadNewSentence);
    hintBtn?.addEventListener("click", giveHint);

    updateStats();
    updateProgress();
  } else {
    // Auto-render theory for grammar topic pages (no inline scripts needed)
    const tv = $("theoryView");
    if (tv && !tv.hasChildNodes()) {
      const page = document.querySelector("html")?.getAttribute("data-page");
      const clauseType = document.querySelector("html")?.getAttribute("data-clause-type");
      const theoryRenderers = {
        "adjective-positions": renderAdjectivePositionTheory,
        "prepositions": null,
        "adverb-positions": renderAdverbPositionTheory,
        "conjunctions": renderConjunctionTheory,
        "phrasal-verbs": renderPhrasalVerbTheory,
        "idiomatic-expressions": renderIdiomaticExpressionTheory,
        "clauses": clauseType && (typeof renderClauseFullLesson === "function") ? () => renderClauseFullLesson(clauseType) : null,
      };
      const fn = theoryRenderers[page] || theoryRenderers[clauseType ? "clauses" : ""];
      if (fn) tv.innerHTML = fn();
    }

    const sd = $("streakDisplay");
    const cd = $("completedDisplay");
    if (sd || cd) {
      try {
        const raw = localStorage.getItem("anagramGame_progress");
        if (raw) {
          const all = JSON.parse(raw);
          let totalCompleted = 0;
          let totalScore = 0;
          Object.values(all).forEach(p => { totalCompleted += p.completed || 0; totalScore += p.score || 0; });
          if (sd) sd.textContent = totalScore;
          if (cd) cd.textContent = totalCompleted;
        }
      } catch(e) {}
    }
  }

  sidebarToggle?.addEventListener("click", toggleSidebar);
  sidebarOverlay?.addEventListener("click", closeSidebar);
  sidebarClose?.addEventListener("click", closeSidebar);
  sidebarNav?.addEventListener("click", e => {
    const btn = e.target.closest(".form-btn");
    if (btn && isTensePage) selectTenseForm(btn.dataset.tense, btn.dataset.form);
  });

  themeToggle?.addEventListener("click", toggleTheme);

  document.addEventListener("keydown", e => {
    if(e.key==="Escape") closeSidebar();
    if(isTensePage) {
      if(e.key==="Enter"&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey){e.preventDefault();checkAnswer();}
      if((e.key==="r"||e.key==="R")&&!e.ctrlKey&&!e.metaKey){e.preventDefault();resetGame();}
      if((e.key==="n"||e.key==="N")&&!e.ctrlKey&&!e.metaKey){e.preventDefault();loadNewSentence();}
      if((e.key==="h"||e.key==="H")&&!e.ctrlKey&&!e.metaKey){e.preventDefault();giveHint();}
      if((e.key==="t"||e.key==="T")&&!e.ctrlKey&&!e.metaKey){e.preventDefault();showTheory(state.currentTense);}
    }
  });
}

document.addEventListener("DOMContentLoaded", init);

/* ═══════════════════════════════════════════
   GRAMMAR MODULE — Clauses & Prepositions
   ═══════════════════════════════════════════ */

const CLAUSES_THEORY = {
  "Noun Clauses": {
    description: "A noun clause is a dependent clause that functions as a noun in a sentence. It can act as a subject, object, or complement. Noun clauses begin with words like what, that, whether, if, who, whom, whose, which, why, how, when, where, whoever, whatever, whenever, wherever.",
    usage: [
      { title: "As Subject", text: "A noun clause can be the subject of a sentence.", example: "What she said is true.\nThat he passed the exam surprised everyone.\nWhoever arrives first will win." },
      { title: "As Object", text: "A noun clause can be the direct object of a verb.", example: "I know that he is coming.\nShe doesn't understand what I mean.\nHe asked whether I was ready." },
      { title: "As Complement", text: "A noun clause can follow a linking verb (be, seem, look) as a subject complement.", example: "The truth is that I was late.\nThat is what I wanted to say.\nMy biggest worry is whether I will pass." },
      { title: "As Object of a Preposition", text: "A noun clause can follow a preposition.", example: "She talked about what she had seen.\nI'm worried about whether he'll arrive on time.\nWe argued about who should pay." },
    ],
    structure: { affirmative: "Subject + verb + (that / wh-word) + clause", negative: "Subject + verb + not + (that / wh-word) + clause", questions: "(Wh-word) + clause + verb + ?" },
    details: { affirmative: "Noun clauses use statement word order (subject + verb), NOT question word order even if the clause begins with a question word.", negative: "The negative goes inside the noun clause.", questions: "The noun clause itself keeps statement order even when the main clause is a question." },
    signalWords: ["that", "what", "whether", "if", "who", "whom", "whose", "which", "why", "how", "when", "where", "whoever", "whatever", "whenever", "wherever"],
    commonMistakes: [
      { mistake: "I don't know where is he.", fix: "I don't know where he is.", explanation: "Noun clauses use statement word order (subject + verb), NOT question word order." },
      { mistake: "What he said is interesting.", fix: "What he said is interesting.", explanation: "This is correct. 'What he said' is a noun clause acting as the subject." },
      { mistake: "That she is happy is obvious.", fix: "That she is happy is obvious.", explanation: "This is correct. 'That she is happy' is a noun clause as subject. It can also be rephrased: It is obvious that she is happy." },
    ],
    comparison: [
      { tense: "Adjective Clauses", text: "Noun clauses function as nouns (subject/object/complement). Adjective clauses modify nouns. Compare: <strong>I know what he said</strong> (noun clause = object of know) vs <strong>I know the man who spoke</strong> (adjective clause modifies 'the man')." },
    ],
    examples20: [
      { text: "<strong>What she said</strong> surprised everyone.", function: "Subject", note: "The entire noun clause acts as the subject of the verb 'surprised'." },
      { text: "I know <strong>that he is coming</strong>.", function: "Direct Object", note: "The noun clause acts as the object of the verb 'know'." },
      { text: "The truth is <strong>that I was late</strong>.", function: "Subject Complement", note: "The noun clause follows the linking verb 'is'." },
      { text: "She talked about <strong>what she had seen</strong>.", function: "Object of Preposition", note: "The noun clause follows the preposition 'about'." },
      { text: "<strong>That he passed</strong> is great news.", function: "Subject", note: "'That' clause as subject. Can be rephrased: 'It is great news that he passed.'" },
      { text: "I wonder <strong>if she is feeling better</strong>.", function: "Direct Object", note: "'If' introduces a yes/no question in noun clause form." },
      { text: "<strong>Whoever arrives first</strong> will win.", function: "Subject", note: "'Whoever' is used for an unknown person." },
      { text: "Can you tell me <strong>when the meeting starts</strong>?", function: "Direct Object", note: "Statement order (when the meeting starts), NOT question order (when does the meeting start)." },
      { text: "This is <strong>what I wanted to say</strong>.", function: "Subject Complement", note: "'What' clause as complement after 'is'." },
      { text: "My biggest worry is <strong>whether I will pass</strong>.", function: "Subject Complement", note: "'Whether' introduces two alternatives in noun clause form." },
      { text: "I'm worried about <strong>whether he'll arrive on time</strong>.", function: "Object of Preposition", note: "'Whether' clause after preposition 'about'." },
      { text: "We argued about <strong>who should pay</strong>.", function: "Object of Preposition", note: "'Who' clause after preposition 'about'." },
      { text: "<strong>Why he left</strong> remains a mystery.", function: "Subject", note: "'Why' clause as subject." },
      { text: "I don't understand <strong>what you mean</strong>.", function: "Direct Object", note: "Negative main clause with noun clause as object." },
      { text: "He asked <strong>whether I was ready</strong>.", function: "Direct Object", note: "Reported yes/no question using 'whether'." },
      { text: "<strong>Where she lives</strong> is unknown.", function: "Subject", note: "'Where' clause as subject." },
      { text: "I remember <strong>when we first met</strong>.", function: "Direct Object", note: "'When' clause as object of 'remember'." },
      { text: "She told me <strong>that she would call</strong>.", function: "Direct Object", note: "Reported speech with 'that' clause." },
      { text: "It is obvious <strong>that she is happy</strong>.", function: "Extraposed Subject", note: "'It' as dummy subject; the real subject is the noun clause." },
      { text: "The problem is <strong>that we don't have enough time</strong>.", function: "Subject Complement", note: "'That' clause explaining what the problem is." },
    ],
    extraSections: [
      {
        title: "📋 That-Omission Rules",
        description: "The word <strong>that</strong> introducing a noun clause can often be omitted in informal English, but not always. Learn when you can drop it and when you must keep it.",
        type: "table",
        headers: ["Rule", "Example with 'that'", "Example without 'that'"],
        rows: [
          ["Object position (common): omit <strong>that</strong> after common verbs like <em>think, know, say, believe, hope</em>.", "I think <strong>that</strong> he is right.", "I think he is right."],
          ["Subject position (required): when the noun clause is the subject of the sentence, <strong>that</strong> must stay.", "<strong>That</strong> she won is amazing.", "✗ She won is amazing. (incorrect)"],
          ["After certain verbs (formal): verbs like <em>reply, respond, assert, claim</em> often keep <strong>that</strong> in formal contexts.", "She replied <strong>that</strong> she would come.", "She replied she would come. (informal)"],
          ["In extraposed subject (optional): 'It + be + adjective + that clause' can drop <strong>that</strong> in informal speech.", "It's clear <strong>that</strong> he is lying.", "It's clear he is lying."],
          ["After nouns (kept): when the noun clause follows a noun (not a verb), <strong>that</strong> is usually kept.", "The fact <strong>that</strong> he came is important.", "✗ The fact he came is important. (informal only)"],
        ],
      },
      {
        title: "🔤 Wh-ever Words (Compound Relative Pronouns)",
        description: "Words ending in <strong>-ever</strong> (whoever, whatever, whenever, wherever, whichever) act as noun clause introducers with an emphasising or generalising meaning. They mean 'any person/thing/time/place that'.",
        type: "cards",
        items: [
          { title: "Whoever (any person who)", text: "Functions as subject or object in the noun clause. Refers to any person.", example: "<strong>Whoever</strong> arrives first will win. / Give it to <strong>whoever</strong> asks for it." },
          { title: "Whatever (anything that)", text: "Refers to any thing or any situation.", example: "<strong>Whatever</strong> you decide is fine with me. / Do <strong>whatever</strong> makes you happy." },
          { title: "Whenever (any time that)", text: "Refers to any time.", example: "I'll be there <strong>whenever</strong> you need me. / He calls <strong>whenever</strong> he has a problem." },
          { title: "Wherever (any place that)", text: "Refers to any place.", example: "She will follow him <strong>wherever</strong> he goes. / <strong>Wherever</strong> you look, you'll find beauty." },
          { title: "Whichever (any one that)", text: "Refers to any choice among a limited set.", example: "Take <strong>whichever</strong> you like best. / <strong>Whichever</strong> you choose will be fine." },
        ],
      },
      {
        title: "🗣️ Noun Clauses in Reported Speech",
        description: "When we report what someone said, we often use a noun clause after verbs like <em>say, tell, ask, explain, think</em>. The tense usually shifts back (backshift) in formal English.",
        type: "table",
        headers: ["Direct Speech", "Reported Speech (Noun Clause)", "Rule"],
        rows: [
          ["He said: <em>\"I am tired.\"</em>", "He said <strong>that he was tired</strong>.", "Present Simple → Past Simple"],
          ["She said: <em>\"I am reading.\"</em>", "She said <strong>that she was reading</strong>.", "Present Continuous → Past Continuous"],
          ["He said: <em>\"I have finished.\"</em>", "He said <strong>that he had finished</strong>.", "Present Perfect → Past Perfect"],
          ["She said: <em>\"I will call.\"</em>", "She said <strong>that she would call</strong>.", "will → would"],
          ["He asked: <em>\"Are you ready?\"</em>", "He asked <strong>whether/if I was ready</strong>.", "Yes/No question → whether/if"],
          ["She asked: <em>\"Where is he?\"</em>", "She asked <strong>where he was</strong>.", "Wh-question → statement order"],
        ],
      },
      {
        title: "👤 It as Dummy Subject (Extraposed Subjects)",
        description: "When a noun clause is the subject, we often move it to the end of the sentence and use <strong>it</strong> as a 'dummy' or 'preparatory' subject. This makes the sentence sound more natural in English, especially with longer clauses.",
        type: "cards",
        items: [
          { title: "With adjectives", text: "It + be + adjective + that clause", example: "<strong>It is obvious that</strong> she is happy. (= <strong>That she is happy</strong> is obvious.)" },
          { title: "With nouns", text: "It + be + noun + that clause", example: "<strong>It is a fact that</strong> the earth is round. (= <strong>That the earth is round</strong> is a fact.)" },
          { title: "With verbs in passive", text: "It + passive verb + that clause", example: "<strong>It is said that</strong> he is very rich. (= <strong>That he is very rich</strong> is said.)" },
          { title: "Common expressions", text: "Fixed expressions with dummy 'it'", example: "<strong>It seems that</strong> he is late. / <strong>It appears that</strong> she was right. / <strong>It turns out that</strong> we were wrong." },
        ],
      },
    ],
    notes: "Noun clauses are essential for reported speech: <strong>He said that he was tired</strong>. The word <strong>that</strong> can often be omitted in informal English: <strong>I think (that) you're right</strong>. Be careful with word order: noun clauses NEVER use question word order, even when introduced by a question word. Use <strong>whether</strong> for two alternatives; use <strong>if</strong> in informal English for yes/no questions in noun clauses.",
  },
  "Adjective Clauses": {
    description: "An adjective clause (also called a relative clause) is a dependent clause that modifies a noun or pronoun. It begins with a relative pronoun (who, whom, whose, which, that) or a relative adverb (where, when, why). Adjective clauses come right after the noun they modify.",
    usage: [
      { title: "Defining (Restrictive) Relative Clauses", text: "Essential information that identifies the noun. Without this clause, the meaning of the sentence would change. No commas are used.", example: "The boy who won the race is my friend.\nThe car that I bought is new.\nThe woman whom you met is my teacher." },
      { title: "Non-defining (Non-restrictive) Relative Clauses", text: "Extra information about a noun that is already identified. The clause is enclosed in commas. The pronoun 'that' cannot be used.", example: "My mother, who is a doctor, works at the hospital.\nLondon, which is the capital, has many parks.\nProfessor Smith, whom I respect greatly, is retiring." },
    ],
    structure: { affirmative: "Noun + relative pronoun + clause", negative: "Noun + relative pronoun + negative clause", questions: "N/A (adjective clauses are not questions)" },
    details: { affirmative: "Use <strong>who</strong> for people (subject), <strong>whom</strong> for people (object), <strong>whose</strong> for possession, <strong>which</strong> for things/animals, <strong>that</strong> for people or things (defining only). Use <strong>where</strong> for places, <strong>when</strong> for times, <strong>why</strong> for reasons.", negative: "The negative goes inside the adjective clause, not in the main clause.", questions: "Adjective clauses are not used as questions." },
    signalWords: ["who", "whom", "whose", "which", "that", "where", "when", "why"],
    commonMistakes: [
      { mistake: "The man which lives next door is friendly.", fix: "The man who lives next door is friendly.", explanation: "Use <strong>who</strong> for people, <strong>which</strong> for things and animals. Never use <strong>which</strong> for people." },
      { mistake: "This is the book who I bought.", fix: "This is the book that/which I bought.", explanation: "Use <strong>which</strong> or <strong>that</strong> for things, not <strong>who</strong>." },
      { mistake: "That, which, that (confusion)", fix: "", explanation: "In non-defining clauses (with commas), you CANNOT use <strong>that</strong>. Use <strong>who/whom/which/whose</strong>. In defining clauses, <strong>that</strong> can replace who/which." },
    ],
    comparison: [
      { tense: "Noun Clauses", text: "Adjective clauses modify nouns; noun clauses replace nouns. Compare: <strong>The book that I read was good</strong> (adjective clause modifies 'the book') vs <strong>What I read was good</strong> (noun clause = subject)." },
    ],
    examples20: [
      { text: "The boy <strong>who won the race</strong> is my friend.", type: "Defining", note: "'Who' as subject pronoun for a person." },
      { text: "The car <strong>that I bought</strong> is new.", type: "Defining", note: "'That' as object pronoun for a thing. Pronoun can be omitted." },
      { text: "The woman <strong>whom you met</strong> is my teacher.", type: "Defining", note: "'Whom' as object pronoun for a person (formal)." },
      { text: "My mother, <strong>who is a doctor</strong>, works at the hospital.", type: "Non-defining", note: "Commas separate the non-essential information." },
      { text: "London, <strong>which is the capital</strong>, has many parks.", type: "Non-defining", note: "'Which' in a non-defining clause (cannot use 'that')." },
      { text: "The house <strong>where I grew up</strong> is now a museum.", type: "Defining", note: "'Where' replaces 'in which' for a place." },
      { text: "I remember the day <strong>when we first met</strong>.", type: "Defining", note: "'When' replaces 'on which' for a time." },
      { text: "The reason <strong>why he left</strong> is unknown.", type: "Defining", note: "'Why' replaces 'for which' for a reason." },
      { text: "The man <strong>whose car was stolen</strong> is my neighbor.", type: "Defining", note: "'Whose' shows possession for a person." },
      { text: "The tree <strong>whose leaves fell</strong> is an oak.", type: "Defining", note: "'Whose' can also show possession for things." },
      { text: "Professor Smith, <strong>whom I respect greatly</strong>, is retiring.", type: "Non-defining", note: "'Whom' as object in a non-defining clause." },
      { text: "The movie <strong>that we watched</strong> was boring.", type: "Defining", note: "'That' as object (can be omitted)." },
      { text: "The students <strong>who study hard</strong> will succeed.", type: "Defining", note: "'Who' as subject (cannot be omitted)." },
      { text: "The building <strong>which was damaged</strong> is being repaired.", type: "Defining", note: "'Which' as subject for a thing." },
      { text: "My brother, <strong>who lives in New York</strong>, is a lawyer.", type: "Non-defining", note: "The clause gives extra information about 'my brother'." },
      { text: "This is the book <strong>that I was talking about</strong>.", type: "Defining", note: "Preposition can stay at the end (informal)." },
      { text: "The hospital <strong>where she was born</strong> closed down.", type: "Defining", note: "'Where' clause modifying 'the hospital'." },
      { text: "The year <strong>when the war ended</strong> was 1945.", type: "Defining", note: "'When' clause modifying 'the year'." },
      { text: "The people <strong>who live upstairs</strong> are very loud.", type: "Defining", note: "'Who' as subject for people (defining)." },
      { text: "His grandfather, <strong>who is 90 years old</strong>, still exercises daily.", type: "Non-defining", note: "Non-defining clause giving extra detail about 'his grandfather'." },
    ],
    notes: "In defining clauses, <strong>that</strong> can replace <strong>who</strong> or <strong>which</strong> in informal English. The relative pronoun can be omitted when it is the object of the defining clause: <strong>The book (that/which) I read</strong>. In non-defining clauses, the relative pronoun can NEVER be omitted. <strong>Whose</strong> shows possession for both people and things: <strong>The man whose car was stolen</strong>, <strong>The tree whose leaves fell</strong>.",
    extraSections: [
      {
        title: "📊 Relative Pronoun Selection Guide",
        description: "Choose the correct relative pronoun based on whether the antecedent is a person or thing, and what function the pronoun serves in the clause.",
        type: "table",
        headers: ["Function", "For People", "For Things / Animals", "Example"],
        rows: [
          ["Subject (who/what does the action)", "<span class=\"theory-badge badge-time\">who / that</span>", "<span class=\"theory-badge badge-movement\">which / that</span>", "The man <strong>who</strong> lives next door. / The car <strong>that</strong> broke down."],
          ["Object (who/what receives the action)", "<span class=\"theory-badge badge-time\">who(m) / that</span>", "<span class=\"theory-badge badge-movement\">which / that</span>", "The woman <strong>whom</strong> I met. / The book <strong>which</strong> I read."],
          ["Possessive (whose)", "<span class=\"theory-badge badge-place\">whose</span>", "<span class=\"theory-badge badge-place\">whose</span>", "The man <strong>whose</strong> car was stolen. / The tree <strong>whose</strong> leaves fell."],
          ["Place (where = in/on/at which)", "—", "<span class=\"theory-badge badge-time\">where</span>", "The house <strong>where</strong> I was born."],
          ["Time (when = in/on/at which)", "—", "<span class=\"theory-badge badge-time\">when</span>", "The day <strong>when</strong> we met."],
          ["Reason (why = for which)", "—", "<span class=\"theory-badge badge-movement\">why</span>", "The reason <strong>why</strong> he left."],
        ],
      },
      {
        title: "📍 Prepositions in Relative Clauses",
        description: "In formal English, the preposition comes before the relative pronoun. In informal English, the preposition stays at the end of the clause. The pronoun can sometimes be omitted in the informal pattern.",
        type: "table",
        headers: ["Formal (preposition + pronoun)", "Informal (end preposition)", "Note"],
        rows: [
          ["The man <strong>to whom</strong> I spoke", "The man <strong>who(m) I spoke to</strong>", "In informal, 'whom' can become 'who' or be omitted."],
          ["The house <strong>in which</strong> I grew up", "The house <strong>that I grew up in</strong>", "Or: the house I grew up in (pronoun omitted)."],
          ["The person <strong>with whom</strong> she arrived", "The person <strong>she arrived with</strong>", "Pronoun can be omitted entirely in informal."],
          ["The topic <strong>about which</strong> we argued", "The topic <strong>we argued about</strong>", "End preposition is standard in spoken English."],
          ["The company <strong>for which</strong> he works", "The company <strong>he works for</strong>", "No relative pronoun needed in the informal version."],
        ],
      },
      {
        title: "✂️ Reduced Relative Clauses (Participial Phrases)",
        description: "When the relative pronoun is the subject of the clause, the clause can be reduced to a participial phrase. This makes sentences more concise and is common in formal and academic writing.",
        type: "table",
        headers: ["Original (Full Relative Clause)", "Reduced (Participial Phrase)", "Explanation"],
        rows: [
          ["The man <strong>who is standing</strong> over there", "The man <strong>standing</strong> over there", "Active meaning → present participle (-ing)"],
          ["The papers <strong>that were found</strong> yesterday", "The papers <strong>found</strong> yesterday", "Passive meaning → past participle (-ed/en)"],
          ["The students <strong>who are taking</strong> the exam", "The students <strong>taking</strong> the exam", "Active continuous → present participle"],
          ["The building <strong>that was damaged</strong> in the storm", "The building <strong>damaged</strong> in the storm", "Passive → past participle"],
          ["Anyone <strong>who wants</strong> to join", "Anyone <strong>wanting</strong> to join", "Active → present participle for general statements"],
        ],
      },
      {
        title: "🔢 Quantifier + of + Relative Pronoun",
        description: "In formal English, we can use <strong>some/many/all/none/both/each/several + of + whom/which</strong> to quantify the antecedent. This structure is common in academic and formal writing.",
        type: "cards",
        items: [
          { title: "With people (of whom)", text: "Quantifies a group of people mentioned earlier.", example: "The students, <strong>many of whom</strong> were tired, continued studying. / The teachers, <strong>all of whom</strong> were qualified, received awards." },
          { title: "With things (of which)", text: "Quantifies things or concepts.", example: "The books, <strong>some of which</strong> were rare, were sold. / The projects, <strong>none of which</strong> were completed, failed." },
          { title: "With both (of whom/which)", text: "Refers to two people or things.", example: "Her two brothers, <strong>both of whom</strong> are doctors, live abroad. / Two cars, <strong>both of which</strong> were damaged, blocked the road." },
          { title: "With numbers (of whom/which)", text: "Specifies an exact number.", example: "The applicants, <strong>three of whom</strong> were overqualified, were interviewed. / The proposals, <strong>several of which</strong> were rejected, needed revision." },
        ],
      },
    ],
  },
  "Adverb Clauses": {
    description: "An adverb clause is a dependent clause that functions as an adverb, modifying a verb, adjective, or another adverb. It tells us when, why, under what condition, in contrast to what, or for what purpose something happens. Adverb clauses are introduced by subordinating conjunctions.",
    usage: [
      { title: "Time Clauses", text: "Show when something happens. Use: when, while, before, after, since, until, as soon as, whenever.", example: "Call me when you arrive.\nShe studied while I was cooking.\nI will wait until you finish." },
      { title: "Cause Clauses", text: "Show why something happens. Use: because, since, as.", example: "He passed because he studied hard.\nSince it was raining, we stayed home.\nAs I was tired, I went to bed early." },
      { title: "Condition Clauses", text: "Show under what condition something happens. Use: if, unless, provided that, as long as, whether or not.", example: "If it rains, we will cancel the picnic.\nYou won't pass unless you study.\nYou can go provided that you finish your work." },
      { title: "Contrast Clauses", text: "Show a contrast or unexpected result. Use: although, though, even though, whereas, while.", example: "Although he was tired, he finished the race.\nShe went out though she was sick.\nEven though it was cold, he went swimming." },
      { title: "Purpose Clauses", text: "Show the purpose of an action. Use: so that, in order that, in order to, so as to.", example: "She saved money so that she could travel.\nHe left early in order to catch the train.\nI spoke loudly so that everyone could hear me." },
    ],
    structure: { affirmative: "Subordinating conjunction + clause, main clause (or) Main clause + subordinating conjunction + clause", negative: "Subordinating conjunction + negative clause, main clause", questions: "Can the main clause be a question? Yes." },
    details: { affirmative: "When an adverb clause begins a sentence, put a comma after it. When the main clause comes first, no comma is needed. In time clauses with future meaning, use Present Simple (NOT will): When you arrive (NOT when you will arrive).", negative: "The negative goes in the adverb clause.", questions: "The main clause can be a question: Did you call me because you needed help?" },
    signalWords: ["when", "while", "before", "after", "since", "until", "because", "as", "if", "unless", "although", "though", "even though", "so that", "provided that", "as soon as", "whereas", "in order that"],
    commonMistakes: [
      { mistake: "When I will arrive, I will call you.", fix: "When I arrive, I will call you.", explanation: "In time clauses with when, after, before, as soon as, until, use the Present Simple, NOT will, even for future meaning." },
      { mistake: "Because I was tired, so I went to bed.", fix: "Because I was tired, I went to bed.", explanation: "Use <strong>because</strong> OR <strong>so</strong>, not both. They have the same meaning but cannot be used together." },
      { mistake: "Although he was sick, but he went to work.", fix: "Although he was sick, he went to work.", explanation: "Use <strong>although</strong> OR <strong>but</strong>, not both. They serve the same grammatical function." },
    ],
    comparison: [
      { tense: "Adjective Clauses", text: "Adverb clauses modify verbs/adjectives/adverbs and tell when/why/condition/contrast. Adjective clauses modify nouns. Compare: <strong>When I arrived, I called her</strong> (adverb clause of time) vs <strong>The day when I arrived was rainy</strong> (adjective clause modifying 'the day')." },
    ],
    examples20: [
      { text: "<strong>When you arrive</strong>, call me.", category: "Time", note: "Time clause with Present Simple for future meaning." },
      { text: "She studied <strong>while I was cooking</strong>.", category: "Time", note: "Two simultaneous actions in the past." },
      { text: "I will wait <strong>until you finish</strong>.", category: "Time", note: "'Until' shows the endpoint of waiting." },
      { text: "He passed <strong>because he studied hard</strong>.", category: "Cause", note: "'Because' gives the reason for passing." },
      { text: "<strong>Since it was raining</strong>, we stayed home.", category: "Cause", note: "Cause clause at the beginning, followed by a comma." },
      { text: "<strong>If it rains</strong>, we will cancel the picnic.", category: "Condition", note: "Real/possible condition in the future." },
      { text: "You won't pass <strong>unless you study</strong>.", category: "Condition", note: "'Unless' = 'if not'." },
      { text: "<strong>Although he was tired</strong>, he finished the race.", category: "Contrast", note: "Unexpected result despite being tired." },
      { text: "She went out <strong>though she was sick</strong>.", category: "Contrast", note: "'Though' = informal 'although'." },
      { text: "She saved money <strong>so that she could travel</strong>.", category: "Purpose", note: "'So that' expresses purpose." },
      { text: "He left early <strong>in order to catch the train</strong>.", category: "Purpose", note: "'In order to' + infinitive for purpose." },
      { text: "<strong>As soon as I hear from her</strong>, I'll let you know.", category: "Time", note: "'As soon as' = immediately after." },
      { text: "<strong>Even though it was cold</strong>, he went swimming.", category: "Contrast", note: "'Even though' for strong contrast." },
      { text: "You can go <strong>provided that you finish your work</strong>.", category: "Condition", note: "'Provided that' = 'on the condition that'." },
      { text: "<strong>Whenever I see him</strong>, he is smiling.", category: "Time", note: "'Whenever' = 'every time'." },
      { text: "<strong>Whereas I prefer tea</strong>, she likes coffee.", category: "Contrast", note: "'Whereas' shows a direct contrast between two things." },
      { text: "<strong>Because he was late</strong>, he missed the bus.", category: "Cause", note: "Cause clause at the beginning explaining why." },
      { text: "I spoke loudly <strong>so that everyone could hear me</strong>.", category: "Purpose", note: "Purpose clause explaining the reason for speaking loudly." },
      { text: "You will succeed <strong>as long as you keep trying</strong>.", category: "Condition", note: "'As long as' = 'provided that'." },
      { text: "<strong>After the rain stopped</strong>, we went for a walk.", category: "Time", note: "'After' shows sequence of events." },
    ],
    notes: "Adverb clauses are very flexible in sentence position. A comma is needed when the adverb clause comes first. In time clauses, always use Present Simple for future meaning. The subordinating conjunction determines the meaning of the clause (time, cause, condition, contrast, or purpose). Adverb clauses can be reduced to phrases when the subject is the same: <strong>While I was walking home, I saw an accident</strong> → <strong>While walking home, I saw an accident</strong>.",
    extraSections: [
      {
        title: "🧩 Manner & Result Clauses",
        description: "Adverb clauses can also express <strong>manner</strong> (how something is done) and <strong>result</strong> (the consequence of an action). These add important nuance to your English.",
        type: "cards",
        items: [
          { title: "Manner: as if / as though", text: "Show how something appears or is done. Often used with sensory verbs (look, sound, feel, seem, act).", example: "She looks <strong>as if</strong> she has seen a ghost. / He acted <strong>as though</strong> nothing had happened. / It sounds <strong>as if</strong> it's broken." },
          { title: "Manner: the way (that)", text: "Describes how an action is performed, similar to 'like' in informal English.", example: "Cook it <strong>the way</strong> I showed you. / She sings <strong>the way</strong> her mother did. / Do it <strong>the way</strong> you think is best." },
          { title: "Result: so...that", text: "Shows the result or consequence. so + adjective/adverb + that clause.", example: "He was <strong>so tired that</strong> he fell asleep immediately. / The box was <strong>so heavy that</strong> I couldn't lift it. / She ran <strong>so fast that</strong> nobody could catch her." },
          { title: "Result: such...that", text: "such + (a/an) + (adjective) + noun + that clause.", example: "It was <strong>such a good movie that</strong> I watched it twice. / They were <strong>such difficult questions that</strong> nobody answered correctly. / She is <strong>such a kind person that</strong> everyone loves her." },
        ],
      },
      {
        title: "✂️ Clause Reduction (Adverb Clause → Phrase)",
        description: "When the subject of the adverb clause is the same as the subject of the main clause, you can reduce the adverb clause to a phrase. This creates more concise and fluent sentences.",
        type: "table",
        headers: ["Original (Full Clause)", "Reduced (Phrase)", "Rule"],
        rows: [
          ["<strong>While I was walking</strong> home, I saw an accident.", "<strong>While walking</strong> home, I saw an accident.", "Omit subject + be, keep subordinator + -ing"],
          ["<strong>Because she was tired</strong>, she went to bed.", "Being tired, she went to bed. / <strong>Tired</strong>, she went to bed.", "Omit because + subject + be, use (Being) + adjective"],
          ["<strong>After he had finished</strong> his work, he left.", "<strong>After finishing</strong> his work, he left. / <strong>Having finished</strong> his work, he left.", "Omit subject, change verb to -ing or having + past participle"],
          ["<strong>When it is seen</strong> from above, the city looks small.", "<strong>When seen</strong> from above, the city looks small.", "Can also reduce passive clauses (keep subordinator + past participle)"],
          ["<strong>Although he was injured</strong>, he continued playing.", "<strong>Although injured</strong>, he continued playing.", "Omit subject + be, keep the subordinator + past participle"],
        ],
      },
      {
        title: "🔄 Inversion in Conditional Clauses",
        description: "In formal English, conditional clauses with <strong>had, should, were</strong> can drop <strong>if</strong> and invert the subject and auxiliary. This is called 'inversion' and is a mark of formal, sophisticated style.",
        type: "table",
        headers: ["Normal Conditional (with if)", "Inverted Conditional (formal)", "When to Use"],
        rows: [
          ["<strong>If I had</strong> known, I would have come.", "<strong>Had I</strong> known, I would have come.", "Third conditional (past unreal) — <strong>had</strong> + subject + past participle"],
          ["<strong>If I were</strong> you, I would accept.", "<strong>Were I</strong> you, I would accept.", "Second conditional (present unreal) — <strong>were</strong> + subject"],
          ["<strong>If you should</strong> need anything, call me.", "<strong>Should you</strong> need anything, call me.", "First conditional (possible) — <strong>should</strong> + subject + base verb"],
          ["<strong>If I were to</strong> fail, I would try again.", "<strong>Were I to</strong> fail, I would try again.", "\"Were to\" in second conditional — <strong>were</strong> + subject + to + verb"],
          ["<strong>If it were not for</strong> your help, I'd be lost.", "<strong>Were it not for</strong> your help, I'd be lost.", "Fixed expression — <strong>were it not for</strong>"],
        ],
      },
      {
        title: "⏭️ Ellipsis in Adverb Clauses",
        description: "In many adverb clauses, especially those of time, condition, and contrast, we can omit the subject and the verb <strong>be</strong> when they are the same as in the main clause. This creates shorter, more efficient sentences.",
        type: "cards",
        items: [
          { title: "Time: when/while + adjective/past participle", text: "Omit subject + be after when / while.", example: "<strong>When (it is) possible</strong>, arrive early. / <strong>While (she was) in Paris</strong>, she visited the Louvre. / <strong>When (you are) ready</strong>, call me." },
          { title: "Condition: if + adjective/past participle", text: "Omit subject + be after if.", example: "<strong>If (it is) necessary</strong>, I will call you. / <strong>If (you are) interested</strong>, apply now. / The results, <strong>if (they are) correct</strong>, are impressive." },
          { title: "Contrast: although/though + adjective/past participle", text: "Omit subject + be after although / though.", example: "<strong>Although (he was) exhausted</strong>, he kept working. / <strong>Though (it was) damaged</strong>, the building survived. / <strong>Although (she is) young</strong>, she is very wise." },
          { title: "Common fixed expressions", text: "Many ellipsis patterns have become fixed expressions.", example: "<strong>If possible</strong> / <strong>if necessary</strong> / <strong>when necessary</strong> / <strong>when needed</strong> / <strong>as planned</strong> / <strong>as expected</strong> / <strong>than usual</strong> / <strong>than expected</strong>" },
        ],
      },
    ],
  },
};

const CLAUSE_EXERCISES = {
  "Noun Clauses": [
    { question: "_____ she said surprised everyone.", options: ["What", "That", "When", "Where"], answer: 0 },
    { question: "I don't know _____ he is.", options: ["where is", "where", "where does", "what"], answer: 1 },
    { question: "_____ he passed the exam is great news.", options: ["What", "That", "If", "Why"], answer: 1 },
    { question: "The problem is _____ we don't have enough time.", options: ["what", "that", "when", "where"], answer: 1 },
    { question: "Can you tell me _____ the meeting starts?", options: ["when", "when does", "what", "that"], answer: 0 },
    { question: "_____ wins the race will get a prize.", options: ["Who", "Whom", "Whoever", "What"], answer: 2 },
    { question: "I wonder _____ she is feeling better.", options: ["that", "if", "what", "when"], answer: 1 },
    { question: "This is _____ I wanted to tell you.", options: ["what", "that", "which", "when"], answer: 0 },
    { question: "It is clear _____ she is wrong.", options: ["what", "that", "if", "when"], answer: 1 },
    { question: "Do _____ makes you happy.", options: ["that", "what", "whatever", "whoever"], answer: 2 },
    { question: "She asked _____ I was ready.", options: ["what", "that", "whether", "when"], answer: 2 },
    { question: "He said _____ he would call.", options: ["what", "that", "if", "when"], answer: 1 },
    { question: "_____ you decide is fine with me.", options: ["That", "What", "Whenever", "Whatever"], answer: 3 },
    { question: "It is believed _____ the treasure is hidden.", options: ["what", "that", "if", "whether"], answer: 1 },
    { question: "The fact _____ he survived is a miracle.", options: ["what", "that", "which", "if"], answer: 1 },
    { question: "I don't know _____ she is angry.", options: ["what", "that", "why", "which"], answer: 2 },
  ],
  "Adjective Clauses": [
    { question: "The boy _____ won the race is my friend.", options: ["which", "whom", "who", "whose"], answer: 2 },
    { question: "The car _____ I bought is new.", options: ["who", "whom", "whose", "that"], answer: 3 },
    { question: "The woman _____ you met is my teacher.", options: ["who", "whom", "whose", "which"], answer: 1 },
    { question: "This is the house _____ I was born.", options: ["which", "that", "where", "when"], answer: 2 },
    { question: "The man _____ car was stolen is my neighbor.", options: ["who", "whom", "whose", "which"], answer: 2 },
    { question: "My mother, _____ is a doctor, works hard.", options: ["which", "that", "who", "whom"], answer: 2 },
    { question: "Summer, _____ we go to the beach, is my favorite season.", options: ["which", "when", "where", "that"], answer: 1 },
    { question: "The book _____ I read was very interesting.", options: ["who", "whom", "whose", "that"], answer: 3 },
    { question: "The building _____ was damaged is being repaired.", options: ["who", "whom", "which", "whom"], answer: 2 },
    { question: "The man _____ is standing over there is my uncle.", options: ["which", "standing", "who", "whom"], answer: 2 },
    { question: "The students, most _____ were tired, kept studying.", options: ["of which", "of whom", "of who", "of them"], answer: 1 },
    { question: "The company _____ he works for is global.", options: ["which", "who", "whom", "whose"], answer: 0 },
    { question: "She is the person _____ I was talking about.", options: ["who", "which", "whom", "whose"], answer: 2 },
    { question: "The papers _____ found yesterday are missing.", options: ["who", "whom", "finding", "found"], answer: 3 },
    { question: "The reason _____ he left is unknown.", options: ["which", "why", "where", "when"], answer: 1 },
    { question: "The students, all _____ were qualified, got jobs.", options: ["of which", "of whom", "of who", "of them"], answer: 1 },
  ],
  "Adverb Clauses": [
    { question: "Call me _____ you arrive.", options: ["when", "while", "because", "although"], answer: 0 },
    { question: "She studied _____ I was cooking.", options: ["when", "while", "until", "after"], answer: 1 },
    { question: "_____ it was raining, we stayed home.", options: ["Although", "Because", "Unless", "If"], answer: 1 },
    { question: "You won't pass _____ you study.", options: ["if", "unless", "because", "when"], answer: 1 },
    { question: "_____ he was tired, he finished the race.", options: ["Because", "Since", "Although", "If"], answer: 2 },
    { question: "She saved money _____ she could travel.", options: ["because", "although", "so that", "when"], answer: 2 },
    { question: "I will wait _____ you finish.", options: ["when", "until", "because", "if"], answer: 1 },
    { question: "_____ I was tired, I went to bed early.", options: ["So that", "Although", "As", "Unless"], answer: 2 },
    { question: "It was _____ a good movie that I watched it twice.", options: ["so", "such", "very", "too"], answer: 1 },
    { question: "She looks _____ she has seen a ghost.", options: ["like", "as if", "so that", "because"], answer: 1 },
    { question: "_____ I known, I would have come earlier.", options: ["If", "Had", "Should", "Were"], answer: 1 },
    { question: "_____ walking home, I saw an accident.", options: ["Because", "While", "During", "Since"], answer: 1 },
    { question: "_____ possible, arrive a few minutes early.", options: ["If", "When", "Unless", "Because"], answer: 1 },
    { question: "He was _____ tired that he fell asleep immediately.", options: ["such", "so", "very", "too"], answer: 1 },
    { question: "_____ you need anything, call me.", options: ["Had", "Were", "Should", "If"], answer: 2 },
    { question: "_____ it not for your help, I'd be lost.", options: ["Had", "Were", "Should", "If"], answer: 1 },
  ],
};

const CLAUSE_IDENTIFICATION_GAME = [
  { sentence: "What she said surprised everyone.", answer: "Noun Clause", hint: "Functions as the subject of the sentence." },
  { sentence: "The boy who won the race is my friend.", answer: "Adjective Clause", hint: "Modifies the noun 'the boy'." },
  { sentence: "Call me when you arrive.", answer: "Adverb Clause", hint: "Tells when to call. Modifies the verb 'call'." },
  { sentence: "I know that he is coming.", answer: "Noun Clause", hint: "Functions as the direct object of 'know'." },
  { sentence: "The car that I bought is new.", answer: "Adjective Clause", hint: "Modifies the noun 'the car'." },
  { sentence: "She studied while I was cooking.", answer: "Adverb Clause", hint: "Tells when she studied. Modifies the verb 'studied'." },
  { sentence: "Whoever arrives first will win.", answer: "Noun Clause", hint: "Functions as the subject of the sentence." },
  { sentence: "The woman whom you met is my teacher.", answer: "Adjective Clause", hint: "Modifies the noun 'the woman'." },
  { sentence: "He passed because he studied hard.", answer: "Adverb Clause", hint: "Tells why he passed. Modifies the verb 'passed'." },
  { sentence: "The truth is that I was late.", answer: "Noun Clause", hint: "Functions as the subject complement after 'is'." },
  { sentence: "My mother, who is a doctor, works at the hospital.", answer: "Adjective Clause", hint: "Gives extra information about 'my mother'." },
  { sentence: "If it rains, we will cancel the picnic.", answer: "Adverb Clause", hint: "Tells the condition for canceling. Modifies the verb phrase." },
  { sentence: "She talked about what she had seen.", answer: "Noun Clause", hint: "Functions as the object of the preposition 'about'." },
  { sentence: "The house where I grew up is now a museum.", answer: "Adjective Clause", hint: "Modifies the noun 'the house'." },
  { sentence: "Although he was tired, he finished the race.", answer: "Adverb Clause", hint: "Shows contrast. Modifies the verb 'finished'." },
  { sentence: "That he passed the exam is great news.", answer: "Noun Clause", hint: "Functions as the subject of the sentence." },
  { sentence: "The man whose car was stolen is my neighbor.", answer: "Adjective Clause", hint: "Modifies the noun 'the man'." },
  { sentence: "She saved money so that she could travel.", answer: "Adverb Clause", hint: "Tells the purpose. Modifies the verb phrase 'saved money'." },
  { sentence: "I wonder if she is feeling better.", answer: "Noun Clause", hint: "Functions as the direct object of 'wonder'." },
  { sentence: "London, which is the capital, has many parks.", answer: "Adjective Clause", hint: "Gives extra information about 'London'." },
  { sentence: "Since it was raining, we stayed home.", answer: "Adverb Clause", hint: "Tells the reason. Modifies the verb phrase 'stayed home'." },
  { sentence: "My biggest worry is whether I will pass.", answer: "Noun Clause", hint: "Functions as the subject complement after 'is'." },
  { sentence: "The students who study hard will succeed.", answer: "Adjective Clause", hint: "Modifies the noun 'the students'." },
  { sentence: "Even though it was cold, he went swimming.", answer: "Adverb Clause", hint: "Shows strong contrast. Modifies the verb 'went'." },
  { sentence: "Why he left remains a mystery.", answer: "Noun Clause", hint: "Functions as the subject of the sentence." },
  { sentence: "I remember the day when we first met.", answer: "Adjective Clause", hint: "Modifies the noun 'the day'." },
  { sentence: "You won't pass unless you study.", answer: "Adverb Clause", hint: "Tells the condition for passing." },
  { sentence: "I don't understand what you mean.", answer: "Noun Clause", hint: "Functions as the direct object of 'understand'." },
  { sentence: "The reason why he left is unknown.", answer: "Adjective Clause", hint: "Modifies the noun 'the reason'." },
  { sentence: "As soon as I hear from her, I'll let you know.", answer: "Adverb Clause", hint: "Tells when I'll let you know." },
];

const PREPOSITIONS_DATA = {
  description: "Prepositions are words that show relationships between nouns (or pronouns) and other elements in a sentence. They indicate <strong>location</strong> (in, on, at), <strong>time</strong> (before, after, during), <strong>direction</strong> (to, into, onto), <strong>manner</strong> (by, with), <strong>cause</strong> (because of, due to), and other abstract relationships. English has approximately 150 prepositions, and they are among the most challenging aspects of the language because their usage is often idiomatic.",
  usage: [
    {
      title: "Prepositions of Time",
      description: "These prepositions tell us WHEN something happens. The choice of preposition depends on the specificity of the time reference.",
      content: [
        { prep: "at", use: "Specific times, holidays, weekends (UK)", example: "at 5 o'clock, at midnight, at Christmas, at the weekend, at present, at the moment" },
        { prep: "on", use: "Days, dates, specific days with modifiers", example: "on Monday, on January 15th, on Christmas Day, on my birthday, on the weekend (US)" },
        { prep: "in", use: "Months, years, seasons, centuries, longer periods, general times of day", example: "in July, in 2023, in winter, in the 21st century, in the morning/afternoon/evening" },
        { prep: "since", use: "From a specific point in time until now (focus on starting point)", example: "since 2019, since last week, since I was a child, since Tuesday" },
        { prep: "for", use: "Duration of time (focus on length of time)", example: "for 3 years, for a long time, for 2 hours, for ages" },
        { prep: "during", use: "Throughout a period of time", example: "during the movie, during summer, during the lecture, during the war" },
        { prep: "until/till", use: "Up to a point in time (action continues to that point)", example: "until Friday, till midnight, until the end of the month" },
        { prep: "by", use: "Before or at a deadline (not later than)", example: "by Tuesday, by 6 PM, by next week, by the time we arrive" },
        { prep: "before/after", use: "Earlier/later than a point in time", example: "before noon, after class, before the exam, after the meeting" },
        { prep: "within", use: "Inside a time limit / before a period ends", example: "within 3 days, within 1 hour, within a month, within a decade" },
        { prep: "from...to", use: "Starting and ending points of a period", example: "from 9 AM to 5 PM, from Monday to Friday, from 1990 to 2000" },
        { prep: "past", use: "Beyond a specific time (telling time)", example: "past midnight, half past 2, a quarter past three, ten past seven" },
      ]
    },
    {
      title: "Prepositions of Place (Location)",
      description: "These prepositions tell us WHERE something is located. The choice depends on whether the location is a point, a surface, or an enclosed area.",
      content: [
        { prep: "at", use: "A specific point, address, or location (the exact position)", example: "at the bus stop, at school, at home, at work, at 10 Downing Street, at the door" },
        { prep: "in", use: "An enclosed space, area, container, city, country, or neighborhood", example: "in the room, in a city, in the box, in the garden, in London, in France" },
        { prep: "on", use: "A surface, line, street, floor, or page", example: "on the table, on the wall, on the floor, on a page, on Main Street, on the ceiling" },
        { prep: "under", use: "Below or beneath something (covered or directly below)", example: "under the bed, under water, under the table, under the blanket" },
        { prep: "over", use: "Above, covering, or across (often with movement or contact)", example: "over the door, over the bridge, over the city, a blanket over the bed" },
        { prep: "above", use: "Higher than something (no contact, at a higher level)", example: "above the clouds, above 30°C, above sea level, above the horizon" },
        { prep: "below", use: "Lower than something (no contact, at a lower level)", example: "below zero, below sea level, below average, below the surface" },
        { prep: "between", use: "In the middle of two distinct things or people", example: "between the two houses, between London and Paris, between you and me" },
        { prep: "among", use: "In a group of three or more, surrounded by", example: "among friends, among the crowd, among the trees, among several options" },
        { prep: "behind", use: "At the back of something", example: "behind the building, behind the curtain, behind the car, behind schedule" },
        { prep: "in front of", use: "Facing something, before something in order", example: "in front of the school, in front of the TV, in front of the audience" },
        { prep: "next to/beside", use: "At the side of, adjacent to", example: "next to the bank, beside the river, next to my desk, beside the road" },
        { prep: "near", use: "Close to (but not necessarily adjacent)", example: "near the park, near the station, near the beach, near the city center" },
        { prep: "across from", use: "On the opposite side of (from something)", example: "the bank is across from the post office, across from the park" },
        { prep: "inside/outside", use: "Within or beyond boundaries of an area", example: "inside the house, outside the city, inside the box, outside the building" },
      ]
    },
    {
      title: "Prepositions of Movement (Direction)",
      description: "These prepositions show movement from one place to another. They answer the question 'Where is something going?'",
      content: [
        { prep: "to", use: "Toward a destination (most common movement preposition)", example: "go to school, travel to London, fly to Paris, walk to the store" },
        { prep: "into", use: "Entering something (from outside to inside)", example: "walk into the room, jump into water, get into the car, pour into a glass" },
        { prep: "onto", use: "Moving to a surface", example: "climb onto the roof, step onto the platform, jump onto the bed, fall onto the floor" },
        { prep: "toward(s)", use: "In the direction of (but not necessarily arriving)", example: "walk toward the door, drive toward the city, move toward the exit" },
        { prep: "through", use: "Entering at one side and exiting at the other", example: "walk through the tunnel, drive through the city, look through the window" },
        { prep: "across", use: "From one side to another (a flat area)", example: "swim across the river, walk across the street, run across the field" },
        { prep: "along", use: "Following a line or path", example: "walk along the beach, run along the path, drive along the coast" },
        { prep: "around", use: "In a circular direction or surrounding area", example: "walk around the block, travel around the world, turn around, sit around the table" },
        { prep: "over", use: "Above and across something (overcoming an obstacle)", example: "jump over the fence, fly over the mountains, climb over the wall" },
        { prep: "up/down", use: "Toward a higher/lower position", example: "go up the stairs, walk down the hill, climb up the mountain, run down the street" },
      ]
    },
  ],
  verbCollocations: {
    title: "Common Verb + Preposition Collocations",
    items: [
      { verb: "depend on", example: "It depends on the weather." },
      { verb: "believe in", example: "I believe in ghosts." },
      { verb: "belong to", example: "This book belongs to me." },
      { verb: "consist of", example: "The team consists of 11 players." },
      { verb: "insist on", example: "He insisted on paying." },
      { verb: "succeed in", example: "She succeeded in passing the exam." },
      { verb: "apologize for", example: "I apologize for the delay." },
      { verb: "wait for", example: "Please wait for me." },
      { verb: "look for", example: "I'm looking for my keys." },
      { verb: "ask for", example: "She asked for help." },
      { verb: "pay for", example: "I paid for the dinner." },
      { verb: "arrive at/in", example: "arrive at the airport / arrive in London" },
      { verb: "laugh at", example: "Don't laugh at me!" },
      { verb: "look at", example: "Look at this photo." },
      { verb: "shout at", example: "Don't shout at the children." },
      { verb: "talk about", example: "We talked about the movie." },
      { verb: "think about/of", example: "I'm thinking about you. / What do you think of it?" },
      { verb: "care about", example: "She cares about the environment." },
      { verb: "complain about", example: "He complained about the service." },
      { verb: "worry about", example: "Don't worry about it." },
      { verb: "agree with/to", example: "I agree with you. / I agreed to the plan." },
      { verb: "deal with", example: "I need to deal with this problem." },
      { verb: "cope with", example: "She can't cope with the pressure." },
      { verb: "provide with", example: "They provided us with food." },
    ]
  },
  adjectiveCollocations: {
    title: "Common Adjective + Preposition Collocations",
    items: [
      { adj: "afraid of", example: "I'm afraid of spiders." },
      { adj: "proud of", example: "She's proud of her son." },
      { adj: "tired of", example: "I'm tired of waiting." },
      { adj: "fond of", example: "He's fond of classical music." },
      { adj: "capable of", example: "She's capable of great things." },
      { adj: "aware of", example: "Are you aware of the risks?" },
      { adj: "full of", example: "The room was full of people." },
      { adj: "interested in", example: "I'm interested in history." },
      { adj: "involved in", example: "She's involved in charity work." },
      { adj: "good/bad at", example: "He's good at math. / She's bad at singing." },
      { adj: "surprised at/by", example: "I was surprised at the news." },
      { adj: "excited about", example: "We're excited about the trip." },
      { adj: "worried about", example: "They're worried about the exam." },
      { adj: "happy about", example: "She's happy about the result." },
      { adj: "angry with/at", example: "I'm angry with you. / He's angry at the situation." },
      { adj: "familiar with", example: "Are you familiar with this software?" },
      { adj: "pleased with", example: "I'm pleased with the results." },
      { adj: "satisfied with", example: "She's satisfied with her job." },
      { adj: "kind to", example: "Be kind to animals." },
      { adj: "married to", example: "She's married to a doctor." },
      { adj: "similar to", example: "This is similar to mine." },
      { adj: "responsible for", example: "Who is responsible for this?" },
      { adj: "famous for", example: "Paris is famous for its museums." },
      { adj: "ready for", example: "Are you ready for the test?" },
    ]
  },
  comparison: {
    title: "Easily Confused Prepositions — Comparison",
    items: [
      { left: { prep: "at (time)", use: "specific time", example: "at 6 PM" }, right: { prep: "in (time)", use: "longer period", example: "in the evening" }, extra: { prep: "on (time)", use: "specific day", example: "on Monday evening" } },
      { left: { prep: "at (place)", use: "specific point", example: "at the door" }, right: { prep: "in (place)", use: "enclosed area", example: "in the room" }, extra: { prep: "on (place)", use: "surface", example: "on the table" } },
      { left: { prep: "since", use: "starting point (point in time)", example: "since 2020" }, right: { prep: "for", use: "duration (length of time)", example: "for 5 years" }, extra: null },
      { left: { prep: "to", use: "destination / direction", example: "go to school" }, right: { prep: "into", use: "enter (inside)", example: "go into the room" }, extra: { prep: "onto", use: "onto a surface", example: "step onto the platform" } },
    ]
  },
  commonMistakes: [
    { text: "in Monday → <strong>on Monday</strong> (days and dates use 'on', not 'in')" },
    { text: "on the morning → <strong>in the morning</strong> (general times of day use 'in', not 'on')" },
    { text: "at night ✓ (exception — we say 'at night', NOT 'in night' or 'on night')" },
    { text: "I'm going to home → <strong>I'm going home</strong> (no preposition before 'home' after 'go', 'come', 'arrive')" },
    { text: "discuss about → <strong>discuss</strong> (no preposition needed; 'discuss' is transitive — 'discuss about' is a common error)" },
    { text: "I've been here since 3 years → <strong>for 3 years</strong> ('since' needs a specific point in time, 'for' needs a duration)" },
    { text: "I've been here for Monday → <strong>since Monday</strong> ('Monday' is a point, so use 'since')" },
    { text: "depend of → <strong>depend on</strong> (the correct preposition with 'depend' is always 'on')" },
    { text: "arrive to → <strong>arrive in/at</strong> ('arrive in' for cities/countries, 'arrive at' for specific places)" },
    { text: "married with → <strong>married to</strong> (you are married TO someone, not with someone)" },
    { text: "interested on → <strong>interested in</strong> (the adjective 'interested' always takes 'in')" },
    { text: "afraid from → <strong>afraid of</strong> (the adjective 'afraid' always takes 'of')" },
    { text: "look at → <strong>look at</strong> is correct; BUT 'watch' does not need a preposition (watch TV, NOT watch at TV)" },
  ],
  notes: "Prepositions are among the most difficult aspects of English because they are highly idiomatic and often differ from other languages. Key strategies for learning: (1) Learn prepositions in <strong>collocations</strong> (verb + preposition groups) rather than in isolation. (2) Pay attention to <strong>countable vs uncountable</strong> — e.g., 'a piece of news', 'a cup of coffee'. (3) For time, remember the hierarchy: <strong>at</strong> for the most specific, <strong>on</strong> for days, <strong>in</strong> for longer periods. (4) For place, remember: <strong>at</strong> for points, <strong>on</strong> for surfaces, <strong>in</strong> for enclosed spaces. (5) Practice with real examples — read English texts and notice which prepositions follow which verbs and adjectives.",

  complexPrepositions: {
    title: "Complex (Multi-Word) Prepositions",
    text: "Complex prepositions consist of two or three words that function together as a single preposition. They are very common in formal English and often express more precise relationships than simple prepositions.",
    items: [
      { prep: "because of", type: "cause", example: "The flight was delayed because of the storm." },
      { prep: "in spite of", type: "contrast", example: "We went out in spite of the rain." },
      { prep: "instead of", type: "substitution", example: "Can I have water instead of soda?" },
      { prep: "in front of", type: "place", example: "The car is parked in front of the house." },
      { prep: "next to", type: "place", example: "She sat next to me during the movie." },
      { prep: "due to", type: "cause", example: "The game was canceled due to bad weather." },
      { prep: "according to", type: "reference", example: "According to the news, it will rain tomorrow." },
      { prep: "on behalf of", type: "representation", example: "I am writing on behalf of my company." },
      { prep: "in addition to", type: "addition", example: "In addition to English, she speaks French." },
      { prep: "in spite of", type: "contrast", example: "In spite of the difficulties, we succeeded." },
      { prep: "by means of", type: "method", example: "We communicated by means of email." },
      { prep: "with regard to", type: "reference", example: "With regard to your question, the answer is no." },
      { prep: "in case of", type: "condition", example: "In case of fire, use the stairs." },
      { prep: "on top of", type: "place", example: "Put the book on top of the shelf." },
      { prep: "out of", type: "direction", example: "She ran out of the room crying." },
      { prep: "in the middle of", type: "place/time", example: "He stopped in the middle of the road." },
      { prep: "as well as", type: "addition", example: "She sings as well as plays the piano." },
      { prep: "in favor of", type: "support", example: "The committee voted in favor of the proposal." },
      { prep: "ahead of", type: "time/place", example: "We finished ahead of schedule." },
      { prep: "apart from", type: "exception", example: "Apart from the weather, the trip was perfect." },
    ]
  },

  prepositionalPhrases: {
    title: "Common Fixed Prepositional Phrases",
    text: "Many nouns, verbs, and adjectives combine with specific prepositions in fixed expressions. These must be memorized as complete units because the choice of preposition often seems arbitrary to learners.",
    items: [
      { phrase: "by accident", example: "I found it by accident." },
      { phrase: "on purpose", example: "She did it on purpose." },
      { phrase: "in fact", example: "In fact, I was just leaving." },
      { phrase: "at first", example: "At first, I didn't understand." },
      { phrase: "in the end", example: "In the end, everything worked out." },
      { phrase: "for example", example: "For example, consider the case of..." },
      { phrase: "in a hurry", example: "She left in a hurry." },
      { phrase: "at least", example: "You should read at least one chapter." },
      { phrase: "by the way", example: "By the way, have you seen John?" },
      { phrase: "on time", example: "The train arrived on time." },
      { phrase: "in time", example: "We arrived just in time for the show." },
      { phrase: "at once", example: "Please come here at once." },
      { phrase: "by chance", example: "I met him by chance at the park." },
      { phrase: "in common", example: "They have nothing in common." },
      { phrase: "on average", example: "On average, it rains 200 days a year." },
      { phrase: "at work", example: "She is at work right now." },
      { phrase: "in danger", example: "The species is in danger of extinction." },
      { phrase: "under pressure", example: "He works well under pressure." },
      { phrase: "out of order", example: "The elevator is out of order." },
      { phrase: "in charge of", example: "Who is in charge of this project?" },
    ]
  },

  prepositionsInQuestions: {
    title: "Prepositions in Questions and Relative Clauses",
    text: "In informal English, prepositions often appear at the END of questions and relative clauses. This is called <strong>preposition stranding</strong>. In formal English, the preposition is moved before the question word or relative pronoun. Both forms are grammatically correct, but they differ in register.",
    examples: [
      { informal: "Who are you waiting <strong>for</strong>?", formal: "For whom are you waiting?", note: "Question with 'for'" },
      { informal: "What are you talking <strong>about</strong>?", formal: "About what are you talking?", note: "Question with 'about'" },
      { informal: "Where did you come <strong>from</strong>?", formal: "From where did you come?", note: "Question with 'from'" },
      { informal: "Which house does she live <strong>in</strong>?", formal: "In which house does she live?", note: "Question with 'in'" },
      { informal: "The person I spoke <strong>to</strong> was helpful.", formal: "The person to whom I spoke was helpful.", note: "Relative clause with 'to'" },
      { informal: "This is the book I was looking <strong>for</strong>.", formal: "This is the book for which I was looking.", note: "Relative clause with 'for'" },
      { informal: "What is she afraid <strong>of</strong>?", formal: "Of what is she afraid?", note: "Adjective + preposition" },
      { informal: "That's the house I grew up <strong>in</strong>.", formal: "That's the house in which I grew up.", note: "Relative clause with 'in'" },
    ]
  },

  examples20: [
    { text: "The meeting is <strong>at</strong> 3 PM <strong>on</strong> Monday.", category: "Time", note: "'at' for specific time, 'on' for specific day." },
    { text: "She was born <strong>in</strong> July <strong>in</strong> 1995.", category: "Time", note: "'in' for months and years." },
    { text: "I have lived here <strong>since</strong> 2018.", category: "Time", note: "'since' with a specific starting point." },
    { text: "We have been waiting <strong>for</strong> two hours.", category: "Time", note: "'for' with a duration of time." },
    { text: "Please finish the report <strong>by</strong> Friday.", category: "Time", note: "'by' means 'not later than'." },
    { text: "He usually wakes up <strong>at</strong> sunrise.", category: "Time", note: "'at' with natural events like sunrise/sunset." },
    { text: "The keys are <strong>on</strong> the kitchen counter.", category: "Place", note: "'on' for a surface." },
    { text: "She lives <strong>in</strong> a small apartment.", category: "Place", note: "'in' for an enclosed space." },
    { text: "I'll meet you <strong>at</strong> the bus stop.", category: "Place", note: "'at' for a specific point." },
    { text: "The cat is hiding <strong>under</strong> the bed.", category: "Place", note: "'under' for something below." },
    { text: "The ball rolled <strong>between</strong> the two cars.", category: "Place", note: "'between' with two things." },
    { text: "She walked <strong>into</strong> the room quietly.", category: "Movement", note: "'into' for entering." },
    { text: "He jumped <strong>onto</strong> the platform.", category: "Movement", note: "'onto' for moving to a surface." },
    { text: "They drove <strong>through</strong> the tunnel.", category: "Movement", note: "'through' for entering and exiting." },
    { text: "We swam <strong>across</strong> the lake.", category: "Movement", note: "'across' from one side to the other." },
    { text: "She ran <strong>toward</strong> the exit.", category: "Movement", note: "'toward' for direction (not arriving)." },
    { text: "The plane flew <strong>over</strong> the mountains.", category: "Movement", note: "'over' above and across." },
    { text: "He walked <strong>along</strong> the riverbank.", category: "Movement", note: "'along' following a line." },
    { text: "The book is <strong>beside</strong> the lamp.", category: "Place", note: "'beside' means 'next to'." },
    { text: "She is standing <strong>among</strong> the crowd.", category: "Place", note: "'among' in a group of three or more." },
  ],
};

const PREPOSITION_EXERCISES = [
  { question: "The book is ___ the table.", options: ["in", "on", "at", "under"], answer: 1, category: "Place" },
  { question: "She arrived ___ 5 PM.", options: ["in", "on", "at", "for"], answer: 2, category: "Time" },
  { question: "I was born ___ July.", options: ["in", "on", "at", "since"], answer: 0, category: "Time" },
  { question: "He walked ___ the room.", options: ["to", "into", "onto", "across"], answer: 1, category: "Movement" },
  { question: "We have lived here ___ 2020.", options: ["for", "since", "during", "in"], answer: 1, category: "Time" },
  { question: "The cat is ___ the bed.", options: ["in", "on", "under", "behind"], answer: 2, category: "Place" },
  { question: "She went ___ school yesterday.", options: ["to", "into", "onto", "at"], answer: 0, category: "Movement" },
  { question: "I will meet you ___ Monday.", options: ["in", "on", "at", "during"], answer: 1, category: "Time" },
  { question: "The bank is ___ the post office.", options: ["next to", "on", "in", "at"], answer: 0, category: "Place" },
  { question: "He swam ___ the river.", options: ["through", "across", "into", "toward"], answer: 1, category: "Movement" },
  { question: "She has been waiting ___ two hours.", options: ["since", "for", "during", "at"], answer: 1, category: "Time" },
  { question: "The restaurant is ___ Main Street.", options: ["in", "on", "at", "under"], answer: 1, category: "Place" },
  { question: "We drove ___ the tunnel.", options: ["across", "through", "into", "onto"], answer: 1, category: "Movement" },
  { question: "She has worked here ___ 2019.", options: ["for", "since", "during", "in"], answer: 1, category: "Time" },
  { question: "He sat ___ me during the meeting.", options: ["next to", "in", "on", "at"], answer: 0, category: "Place" },
  { question: "She ran ___ the finish line.", options: ["to", "toward", "into", "onto"], answer: 1, category: "Movement" },
  { question: "I always exercise ___ the morning.", options: ["in", "on", "at", "during"], answer: 0, category: "Time" },
  { question: "The keys are ___ my pocket.", options: ["on", "in", "at", "under"], answer: 1, category: "Place" },
];

/* ═══════════════════════════════════════════
   GAMES — Anagram, Error Correction, Verb Tense, etc.
   ═══════════════════════════════════════════ */

const ANAGRAM_DATA = {
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

const ERROR_CORRECTION_DATA = [
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
  { incorrect: "She is good at playing the piano.", correct: "She is good at playing the piano.", type: "Prepositions", explanation: "This is correct! Good at + gerund." },
  { incorrect: "He is married with a doctor.", correct: "He is married to a doctor.", type: "Prepositions", explanation: "Use 'married to', not 'married with'." },
  { incorrect: "We arrived to the airport.", correct: "We arrived at the airport.", type: "Prepositions", explanation: "Use 'arrive at' for a place, 'arrive in' for a city/country." },
  { incorrect: "She depends of her parents.", correct: "She depends on her parents.", type: "Prepositions", explanation: "Use 'depend on', not 'depend of'." },
  { incorrect: "Myself will do it.", correct: "I will do it myself.", type: "Pronouns", explanation: "Reflexive pronouns (myself) cannot be used as subjects." },
  { incorrect: "Him and me went to the store.", correct: "He and I went to the store.", type: "Pronouns", explanation: "Use subject pronouns (he/I) for subjects." },
  { incorrect: "Give it to I.", correct: "Give it to me.", type: "Pronouns", explanation: "Use object pronouns (me) after prepositions." },
  { incorrect: "This is her book.", correct: "This is her book.", type: "Pronouns", explanation: "This is correct! Her is a possessive adjective here." },
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

const VERB_TENSE_EXAMPLES = [
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

const WORD_ORDER_EXERCISES = [
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

/* ═══════════════════════════════════════════
   CLAUSE FULL LESSONS (Course Content)
   ═══════════════════════════════════════════ */

const CLAUSE_FULL_LESSONS = {
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
};

/* ── FULL LESSON RENDERER (Course Mode) ── */
function renderClauseFullLesson(clauseType) {
  const L = CLAUSE_FULL_LESSONS[clauseType];
  if (!L) return renderClauseTheory(clauseType);
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };

  const renderIntro = () => `
    <div class="theory-card intro-card" style="background:linear-gradient(135deg,var(--color-surface),var(--color-bg-secondary));border:2px solid var(--color-border);border-radius:var(--radius-lg);padding:24px;margin-bottom:30px;">
      <p style="font-size:16px;line-height:1.7;margin-bottom:12px;">${L.intro.text}</p>
      <p style="font-size:14px;color:var(--color-text-muted);font-style:italic;margin-bottom:16px;padding:8px 12px;background:var(--color-bg-secondary);border-radius:6px;">${L.intro.spanish}</p>
      ${L.intro.examples.map(ex => `
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:12px 16px;margin-bottom:8px;">
          <p style="font-size:15px;font-weight:500;">${ex.text}</p>
          <p style="font-size:12px;color:var(--color-text-muted);margin-top:4px;">${ex.note}</p>
        </div>
      `).join("")}
    </div>`;

  const renderSubtopics = () => L.subtopics.map(st => `
    <div class="theory-card" style="margin-bottom:28px;">
      <h2 class="theory-title" style="border-bottom:2px solid var(--color-primary);padding-bottom:8px;margin-bottom:6px;">${st.title}</h2>
      <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:16px;">${st.spanish}</p>
      ${st.sections ? st.sections.map(sec => `
        <div style="background:var(--color-bg-secondary);border-radius:8px;padding:16px;margin-bottom:16px;">
          <h3 style="font-size:15px;font-weight:700;color:var(--color-primary);margin:0 0 4px;">${sec.title}</h3>
          ${sec.spanish ? `<p style="font-size:12px;color:var(--color-text-muted);margin-bottom:6px;">${sec.spanish}</p>` : ""}
          ${sec.text ? `<p style="font-size:14px;line-height:1.6;margin-bottom:10px;">${sec.text}</p>` : ""}
          ${sec.examples && Array.isArray(sec.examples) ? `
            <div style="margin:8px 0;">
              ${sec.examples.map(ex => {
                if (typeof ex === "string") return `<div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 12px;margin-bottom:6px;font-size:14px;">${ex}</div>`;
                return `<div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 12px;margin-bottom:6px;">
                  <p style="font-size:14px;">${ex.text || ex.correct || ""}</p>
                  ${ex.incorrect ? `<p style="font-size:13px;color:var(--color-error);">✗ ${ex.incorrect}</p>` : ""}
                  ${ex.rule ? `<p style="font-size:12px;color:var(--color-text-muted);">${ex.rule}</p>` : ""}
                  ${ex.normal ? `<p style="font-size:13px;">Normal: ${ex.normal}</p><p style="font-size:13px;">Extraposed: ${ex.extraposed}</p>` : ""}
                  ${ex.direct ? `<p style="font-size:13px;">Direct: ${ex.direct}</p><p style="font-size:13px;">Reported: ${ex.reported}</p>` : ""}
                  ${ex.full ? `<p style="font-size:13px;">Full: ${ex.full}</p><p style="font-size:13px;">Reduced: ${ex.reduced}</p>` : ""}
                  ${ex.formal ? `<p style="font-size:13px;">Formal: ${ex.formal}</p><p style="font-size:13px;">Informal: ${ex.informal}</p>` : ""}
                  ${ex.note ? `<p style="font-size:12px;color:var(--color-text-muted);">${ex.note}</p>` : ""}
                </div>`;
              }).join("")}
            </div>
          ` : ""}
          ${sec.note ? `<p style="font-size:12px;font-style:italic;color:var(--color-text-muted);padding:6px 10px;background:var(--color-surface);border-radius:4px;">💡 ${sec.note}</p>` : ""}
        </div>
      `).join("") : ""}
      ${st.comparisonTable ? `
        <div style="overflow-x:auto;margin-top:12px;">
          <table class="theory-table">
            <thead><tr>${st.comparisonTable.headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
            <tbody>${st.comparisonTable.rows.map(r => `<tr>${r.map(c => `<td style="font-size:13px;">${c}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      ` : ""}
    </div>
  `).join("");

  const renderMistakes = () => {
    const m = L.commonMistakes20 || L.commonMistakes25;
    if (!m) return "";
    return `
      <div class="theory-card" style="margin-bottom:28px;">
        <h2 class="theory-title" style="border-bottom:2px solid var(--color-error);padding-bottom:8px;">Common Mistakes</h2>
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:12px;">Errores Comunes — ${m.length} errores frecuentes explicados</p>
        <div class="mistakes-grid">
          ${m.map(err => `
            <div class="mistake-card">
              <p class="mistake-incorrect">✗ ${esc(err.mistake)}</p>
              <p class="mistake-correct">✓ ${esc(err.fix)}</p>
              <p class="mistake-explain">${err.explanation}</p>
            </div>
          `).join("")}
        </div>
      </div>`;
  };

  const renderNativeSpeaker = () => {
    const ns = L.nativeSpeaker;
    if (!ns) return "";
    const renderSection = (sec, icon) => sec ? `
      <div style="background:var(--color-bg-secondary);border-radius:8px;padding:16px;margin-bottom:16px;">
        <h3 style="font-size:15px;font-weight:700;margin:0 0 8px;">${icon} ${sec.title}</h3>
        ${sec.lines ? sec.lines.map(l => `
          <p style="font-size:14px;padding:4px 0;${l.speaker === 'A' ? 'color:var(--color-primary);' : ''}"><strong>${l.speaker}:</strong> ${l.text}</p>
        `).join("") : ""}
        ${sec.examples ? sec.examples.map(ex => `
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 12px;margin-bottom:6px;font-size:14px;">${ex}</div>
        `).join("") : ""}
      </div>
    ` : "";
    return `
      <div class="theory-card" style="margin-bottom:28px;">
        <h2 class="theory-title" style="border-bottom:2px solid var(--color-accent);padding-bottom:8px;">Practice Like a Native Speaker</h2>
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:12px;">Practica con conversaciones reales, escritura académica, profesional y de negocios</p>
        ${renderSection(ns.conversation, "💬")}
        ${renderSection(ns.academic, "📚")}
        ${renderSection(ns.professional, "💼")}
        ${renderSection(ns.business, "🏢")}
      </div>`;
  };

  const renderFinalQuiz = () => {
    const qs = L.finalQuiz50;
    if (!qs) return "";
    const total = qs.length;
    return `
      <div class="theory-card" style="margin-bottom:28px;">
        <h2 class="theory-title" style="border-bottom:2px solid var(--color-primary);padding-bottom:8px;">🎯 Final Quiz — ${total} Questions</h2>
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:12px;">Test your knowledge! Complete all questions to see your score.</p>
        <div style="background:var(--color-bg-secondary);border-radius:8px;padding:12px;margin-bottom:16px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span style="font-size:13px;font-weight:600;">Progress</span>
            <span style="font-size:13px;font-weight:600;"><span id="fqScore${clauseType.replace(/\s/g,'')}">0</span> / ${total}</span>
          </div>
          <div style="background:var(--color-border);border-radius:99px;height:8px;overflow:hidden;">
            <div id="fqBar${clauseType.replace(/\s/g,'')}" style="background:var(--color-primary);height:100%;width:0%;border-radius:99px;transition:width 0.3s;"></div>
          </div>
        </div>
        <div class="quiz-container" id="fqContainer">
          ${qs.map((q, i) => `
            <div class="quiz-question" data-qid="fq${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(q.question)}</p>
              <div class="quiz-options">
                ${q.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option fq-option" data-fq="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <div class="quiz-feedback" id="fqFeedback${i}" style="font-size:13px;"></div>
            </div>
          `).join("")}
        </div>
      </div>`;
  };

  const renderSummary = () => {
    const types = ["Noun Clauses", "Adjective Clauses", "Adverb Clauses"];
    const getSummaryRow = t => {
      const d = CLAUSES_THEORY[t];
      if (!d) return null;
      const examples = d.examples20 ? d.examples20.slice(0, 1) : null;
      const label = t.replace(" Clauses", "");
      const func = t === "Noun Clauses" ? "Acts as a noun (subject/object/complement)" : t === "Adjective Clauses" ? "Modifies a noun" : "Modifies a verb / adjective / clause";
      const example = examples ? examples[0].text : "";
      return { label, func, example };
    };
    const rows = types.map(getSummaryRow).filter(Boolean);
    return `
      <div class="theory-card" style="margin-bottom:28px;">
        <h2 class="theory-title" style="border-bottom:2px solid var(--color-accent);padding-bottom:8px;">📊 Summary — Clause Comparison</h2>
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:12px;">Tabla comparativa de los tres tipos de cláusulas</p>
        <div style="overflow-x:auto;">
          <table class="theory-table">
            <thead><tr><th>Type</th><th>Function</th><th>Example</th></tr></thead>
            <tbody>
              ${rows.map(r => `<tr>
                <td><span class="theory-badge badge-time">${esc(r.label)}</span></td>
                <td style="font-size:13px;">${esc(r.func)}</td>
                <td style="font-size:13px;">${r.example}</td>
              </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
  };

  const renderConceptMap = () => `
    <div class="theory-card" style="margin-bottom:28px;">
      <h2 class="theory-title" style="border-bottom:2px solid var(--color-accent);padding-bottom:8px;">🧠 Concept Map</h2>
      <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:12px;">Mapa conceptual de las cláusulas en inglés</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;text-align:center;">
        <div style="background:var(--color-bg-secondary);border-radius:8px;padding:16px;border-top:4px solid var(--color-primary);">
          <p style="font-size:13px;font-weight:700;color:var(--color-primary);margin:0 0 4px;">NOUN CLAUSE</p>
          <p style="font-size:12px;color:var(--color-text-muted);">Functions as a noun</p>
          <p style="font-size:11px;margin:4px 0;">Subject / Object / Complement</p>
          <p style="font-size:11px;color:var(--color-text-muted);">that / what / whether / if / whoever</p>
        </div>
        <div style="background:var(--color-bg-secondary);border-radius:8px;padding:16px;border-top:4px solid var(--color-success);">
          <p style="font-size:13px;font-weight:700;color:var(--color-success);margin:0 0 4px;">ADJECTIVE CLAUSE</p>
          <p style="font-size:12px;color:var(--color-text-muted);">Modifies a noun</p>
          <p style="font-size:11px;margin:4px 0;">who / whom / which / that / whose</p>
          <p style="font-size:11px;color:var(--color-text-muted);">Defining vs Non-defining</p>
        </div>
        <div style="background:var(--color-bg-secondary);border-radius:8px;padding:16px;border-top:4px solid var(--color-accent);">
          <p style="font-size:13px;font-weight:700;color:var(--color-accent);margin:0 0 4px;">ADVERB CLAUSE</p>
          <p style="font-size:12px;color:var(--color-text-muted);">Modifies a verb/adjective</p>
          <p style="font-size:11px;margin:4px 0;">Time / Cause / Condition / Contrast</p>
          <p style="font-size:11px;color:var(--color-text-muted);">when / because / if / although</p>
        </div>
      </div>
    </div>`;

  return `
    <div class="full-lesson">
      ${renderSummary()}
      ${renderConceptMap()}
      ${renderIntro()}
      ${renderSubtopics()}
      ${renderMistakes()}
      ${renderNativeSpeaker()}
      ${renderFinalQuiz()}
    </div>`;
}

function renderClauseTheory(clauseType) {
  const t = CLAUSES_THEORY[clauseType];
  if (!t) return "";
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = CLAUSE_EXERCISES[clauseType] || [];
  return `
    <div class="theory-card">
      <h2 class="theory-title">${esc(clauseType)}</h2>
      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Is a ${esc(clauseType)}?</h3>
        <p class="theory-description">${t.description}</p>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">🎯 How to Use</h3>
        <div class="usage-grid">
          ${t.usage.map(u => `
            <div class="usage-card">
              <span class="usage-card-title">${esc(u.title)}</span>
              <p class="usage-card-text">${u.text}</p>
              ${u.example ? `<pre class="usage-card-example" style="margin:8px 0 0;font-size:13px;background:var(--color-bg-secondary);padding:8px;border-radius:6px;white-space:pre-wrap;">${u.example}</pre>` : ""}
            </div>
          `).join("")}
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">📐 Structure</h3>
        <table class="theory-table">
          <thead><tr><th>Type</th><th>Formula</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td><span class="theory-badge badge-time">Affirmative</span></td><td><code>${esc(t.structure.affirmative)}</code></td><td style="font-size:13px;">${t.details.affirmative}</td></tr>
            <tr><td><span class="theory-badge badge-place">Negative</span></td><td><code>${esc(t.structure.negative)}</code></td><td style="font-size:13px;">${t.details.negative}</td></tr>
            <tr><td><span class="theory-badge badge-movement">Questions</span></td><td><code>${esc(t.structure.questions)}</code></td><td style="font-size:13px;">${t.details.questions}</td></tr>
          </tbody>
        </table>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">🏷️ Signal Words</h3>
        <p class="theory-description">These words introduce ${clauseType.toLowerCase()}:</p>
        <div class="badge-group">
          ${t.signalWords.map(w => `<span class="theory-badge badge-time">${esc(w)}</span>`).join("")}
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${t.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">✗ ${esc(m.mistake)}</p>
              <p class="mistake-correct">✓ ${esc(m.fix || m.mistake)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">🔁 Comparison with Other Clauses</h3>
        ${t.comparison.map(c => `
          <div class="comparison-card" style="background:var(--color-bg-secondary);border-left:4px solid var(--color-primary);padding:12px 16px;border-radius:8px;margin-bottom:10px;">
            <strong>${esc(c.tense)}:</strong> ${c.text}
          </div>
        `).join("")}
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">📚 20 Comprehensive Examples</h3>
        <p class="theory-description">Study these 20 examples to understand how ${clauseType.toLowerCase()} work in real sentences.</p>
        <table class="theory-table">
          <thead><tr><th>#</th><th>Example</th>${t.examples20[0].category ? '<th>Category</th>' : '<th>Type / Function</th>'}<th>Explanation</th></tr></thead>
          <tbody>
            ${t.examples20.map((ex, i) => `
              <tr>
                <td style="text-align:center;font-weight:700;color:var(--color-primary);">${i + 1}</td>
                <td>${ex.text}</td>
                <td><span class="theory-badge badge-${ex.category === 'Time' ? 'time' : ex.category === 'Cause' ? 'place' : ex.category === 'Condition' ? 'movement' : ex.type === 'Defining' ? 'time' : ex.type === 'Non-defining' ? 'place' : 'movement'}">${esc(ex.category || ex.type || ex.function)}</span></td>
                <td style="font-size:12.5px;">${esc(ex.note)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
      ${t.extraSections ? t.extraSections.map(s => `
        <section class="theory-section">
          <h3 class="theory-section-title">${s.title}</h3>
          ${s.description ? `<p class="theory-description">${s.description}</p>` : ""}
          ${s.type === "table" ? `
            <div style="overflow-x:auto;">
              <table class="theory-table">
                <thead><tr>${s.headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
                <tbody>
                  ${s.rows.map(r => `<tr>${r.map(c => `<td style="font-size:13px;">${c}</td>`).join("")}</tr>`).join("")}
                </tbody>
              </table>
            </div>
          ` : s.type === "cards" ? `
            <div class="usage-grid">
              ${s.items.map(item => `
                <div class="usage-card">
                  <span class="usage-card-title">${esc(item.title)}</span>
                  <p class="usage-card-text">${item.text}</p>
                  ${item.example ? `<pre class="usage-card-example" style="margin:8px 0 0;font-size:13px;background:var(--color-bg-secondary);padding:8px;border-radius:6px;white-space:pre-wrap;">${item.example}</pre>` : ""}
                </div>
              `).join("")}
            </div>
          ` : ""}
        </section>
      `).join("") : ""}
      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes" style="background:var(--color-bg-secondary);padding:14px 18px;border-radius:8px;border-left:4px solid var(--color-accent);">${t.notes}</p>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="quizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="quizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">
            Score: <span id="quizScore">0</span> / ${exercises.length}
          </div>
        </div>
      </section>
    </div>`;
}

document.addEventListener("click", function(e) {
  const opt = e.target.closest(".quiz-option");
  if (!opt) return;
  const qid = parseInt(opt.dataset.qid);
  const selected = parseInt(opt.dataset.opt);
  const container = opt.closest(".quiz-container");
  const isPrep = container && container.id === "quizContainer" && document.querySelector('[data-page="prepositions"]');
  const exercises = document.querySelector('[data-page="clauses"]')
    ? (CLAUSE_EXERCISES[document.querySelector('[data-page="clauses"]').dataset.clauseType] || [])
    : [];
  const prepEx = PREPOSITION_EXERCISES;

  let ex, feedbackId, scoreId;
  if (document.querySelector('[data-page="prepositions"]')) {
    ex = prepEx[qid];
    feedbackId = `prepQuizFeedback${qid}`;
    scoreId = "prepQuizScore";
  } else if (document.querySelector('[data-page="adjective-positions"]')) {
    ex = ADJECTIVE_POSITION_EXERCISES[qid];
    feedbackId = `adjQuizFeedback${qid}`;
    scoreId = "adjQuizScore";
  } else if (document.querySelector('[data-page="adverb-positions"]')) {
    ex = ADVERB_POSITION_EXERCISES[qid];
    feedbackId = `advQuizFeedback${qid}`;
    scoreId = "advQuizScore";
  } else if (document.querySelector('[data-page="conjunctions"]')) {
    ex = CONJUNCTION_EXERCISES[qid];
    feedbackId = `conjQuizFeedback${qid}`;
    scoreId = "conjQuizScore";
  } else if (document.querySelector('[data-page="phrasal-verbs"]')) {
    ex = PHRASAL_VERB_EXERCISES[qid];
    feedbackId = `pvQuizFeedback${qid}`;
    scoreId = "pvQuizScore";
  } else if (document.querySelector('[data-page="idiomatic-expressions"]')) {
    ex = IDIOMATIC_EXPRESSION_EXERCISES[qid];
    feedbackId = `ieQuizFeedback${qid}`;
    scoreId = "ieQuizScore";
  } else {
    const clauseType = document.querySelector('[data-page="clauses"]')?.dataset.clauseType;
    const exList = CLAUSE_EXERCISES[clauseType] || [];
    ex = exList[qid];
    feedbackId = `quizFeedback${qid}`;
    scoreId = "quizScore";
  }
  if (!ex) return;

  const fb = document.getElementById(feedbackId);
  if (!fb) return;
  if (fb.dataset.answered === "1") return;

  const parent = opt.closest(".quiz-question");
  parent.querySelectorAll(".quiz-option").forEach(b => b.disabled = true);
  fb.dataset.answered = "1";

  if (selected === ex.answer) {
    fb.textContent = "✓ Correct!";
    fb.className = "quiz-feedback correct";
    opt.classList.add("correct-answer");
    const scoreEl = document.getElementById(scoreId);
    if (scoreEl) scoreEl.textContent = parseInt(scoreEl.textContent) + 1;
  } else {
    fb.textContent = `✗ Incorrect. The answer was: ${ex.options[ex.answer]}`;
    fb.className = "quiz-feedback incorrect";
    opt.classList.add("wrong-answer");
    parent.querySelectorAll(".quiz-option")[ex.answer]?.classList.add("show-correct");
  }
});

/* ── FINAL QUIZ HANDLER (50-question quiz) ── */
document.addEventListener("click", function(e) {
  const opt = e.target.closest(".fq-option");
  if (!opt) return;
  const qi = parseInt(opt.dataset.fq);
  const selected = parseInt(opt.dataset.opt);
  const clauseType = document.querySelector("html")?.getAttribute("data-clause-type");
  const lesson = CLAUSE_FULL_LESSONS[clauseType];
  if (!lesson) return;
  const qs = lesson.finalQuiz50;
  if (!qs || !qs[qi]) return;
  const ex = qs[qi];
  const fb = document.getElementById(`fqFeedback${qi}`);
  if (!fb || fb.dataset.answered === "1") return;
  const parent = opt.closest(".quiz-question");
  parent.querySelectorAll(".fq-option").forEach(b => b.disabled = true);
  fb.dataset.answered = "1";
  const key = clauseType.replace(/\s/g,'');
  if (selected === ex.answer) {
    fb.textContent = `✓ Correct! ${ex.explanation}`;
    fb.className = "quiz-feedback correct";
    opt.classList.add("correct-answer");
    const scoreEl = document.getElementById(`fqScore${key}`);
    if (scoreEl) {
      const newScore = parseInt(scoreEl.textContent) + 1;
      scoreEl.textContent = newScore;
      const total = qs.length;
      const bar = document.getElementById(`fqBar${key}`);
      if (bar) bar.style.width = `${(newScore / total) * 100}%`;
    }
  } else {
    fb.textContent = `✗ Incorrect. The answer was: ${ex.options[ex.answer]}. ${ex.explanation}`;
    fb.className = "quiz-feedback incorrect";
    opt.classList.add("wrong-answer");
    parent.querySelectorAll(".fq-option")[ex.answer]?.classList.add("show-correct");
  }
});

/* ═══════════════════════════════════════════
   GAME ENGINES
   ═══════════════════════════════════════════ */

const GAME_STORAGE_KEY = "englishGames_progress";
let gameState = {};

function loadGameState() {
  try {
    const raw = localStorage.getItem(GAME_STORAGE_KEY);
    if (raw) gameState = JSON.parse(raw);
  } catch (e) { gameState = {}; }
}

function saveGameState() {
  try { localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(gameState)); } catch (e) {}
}

/* ANAGRAM ENGINE */
function initAnagramGame() {
  const levelSelect = document.getElementById("anagramLevel");
  const catSelect = document.getElementById("anagramCategory");
  const wordDisplay = document.getElementById("anagramWord");
  const guessInput = document.getElementById("anagramGuess");
  const checkBtn = document.getElementById("anagramCheck");
  const nextBtn = document.getElementById("anagramNext");
  const result = document.getElementById("anagramResult");
  const scoreEl = document.getElementById("anagramScore");
  const timerEl = document.getElementById("anagramTimer");
  const hintBtn = document.getElementById("anagramHint");
  const hintArea = document.getElementById("anagramHintArea");

  if (!wordDisplay) return;

  let currentWord = "";
  let currentCategory = "Animals";
  let currentLevel = "Beginner";
  let score = 0;
  let timer = 0;
  let timerInterval = null;
  let hintLevel = 0;

  function updateCategories() {
    catSelect.innerHTML = "";
    const cats = Object.keys(ANAGRAM_DATA[currentLevel] || {});
    cats.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c; opt.textContent = c;
      catSelect.appendChild(opt);
    });
    currentCategory = cats[0] || "Animals";
    catSelect.value = currentCategory;
  }

  function pickWord() {
    const words = ANAGRAM_DATA[currentLevel]?.[currentCategory] || [];
    if (words.length === 0) return "cat";
    return words[Math.floor(Math.random() * words.length)];
  }

  function shuffleWord(w) {
    const a = w.split("");
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a.join("");
  }

  function newWord() {
    currentWord = pickWord();
    hintLevel = 0;
    let shuffled = shuffleWord(currentWord);
    while (shuffled === currentWord && currentWord.length > 1) {
      shuffled = shuffleWord(currentWord);
    }
    wordDisplay.textContent = shuffled.toUpperCase().split("").join(" ");
    guessInput.value = "";
    guessInput.disabled = false;
    guessInput.focus();
    result.textContent = "";
    result.className = "result-message";
    if (hintArea) { hintArea.textContent = ""; hintArea.hidden = true; }
    if (timerEl) timerEl.textContent = "0s";
    timer = 0;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timer++;
      if (timerEl) timerEl.textContent = timer + "s";
    }, 1000);
  }

  levelSelect?.addEventListener("change", () => {
    currentLevel = levelSelect.value;
    updateCategories();
    newWord();
  });

  catSelect?.addEventListener("change", () => {
    currentCategory = catSelect.value;
    newWord();
  });

  checkBtn?.addEventListener("click", () => {
    const guess = guessInput.value.trim().toLowerCase();
    if (!guess) { result.textContent = "Type your answer!"; result.className = "result-message error"; return; }
    if (guess === currentWord) {
      clearInterval(timerInterval);
      const bonus = Math.max(0, 60 - timer);
      const points = 10 + Math.floor(bonus / 5);
      score += points;
      if (scoreEl) scoreEl.textContent = score;
      result.textContent = `✓ Correct! +${points} points (${timer}s)`;
      result.className = "result-message success";
      guessInput.disabled = true;
      saveGameScore("anagram", score);
    } else {
      result.textContent = `✗ Incorrect. Try again!`;
      result.className = "result-message error";
    }
  });

  hintBtn?.addEventListener("click", () => {
    if (!currentWord || hintLevel >= currentWord.length) return;
    hintLevel++;
    const revealed = currentWord.split("").map((ch, i) => i < hintLevel ? ch : "_").join(" ");
    if (hintArea) {
      hintArea.textContent = "Hint: " + revealed;
      hintArea.hidden = false;
    }
  });

  nextBtn?.addEventListener("click", newWord);

  updateCategories();
  newWord();
}

function saveGameScore(game, score) {
  loadGameState();
  if (!gameState[game]) gameState[game] = { bestScore: 0, totalScore: 0, gamesPlayed: 0 };
  gameState[game].totalScore += score;
  gameState[game].gamesPlayed++;
  if (score > gameState[game].bestScore) gameState[game].bestScore = score;
  saveGameState();
}

/* ERROR CORRECTION ENGINE */
function initErrorCorrectionGame() {
  const questionEl = document.getElementById("ecQuestion");
  const inputEl = document.getElementById("ecInput");
  const checkBtn = document.getElementById("ecCheck");
  const nextBtn = document.getElementById("ecNext");
  const resultEl = document.getElementById("ecResult");
  const scoreEl = document.getElementById("ecScore");
  const progressEl = document.getElementById("ecProgress");
  const typeFilter = document.getElementById("ecTypeFilter");

  if (!questionEl) return;

  let currentIndex = 0;
  let score = 0;
  let total = 0;
  let filteredData = [...ERROR_CORRECTION_DATA];

  function filterData() {
    const type = typeFilter ? typeFilter.value : "all";
    if (type === "all") {
      filteredData = [...ERROR_CORRECTION_DATA];
    } else {
      filteredData = ERROR_CORRECTION_DATA.filter(e => e.type === type);
    }
    if (filteredData.length === 0) filteredData = [...ERROR_CORRECTION_DATA];
  }

  function loadQuestion() {
    filterData();
    currentIndex = Math.floor(Math.random() * filteredData.length);
    const item = filteredData[currentIndex];
    if (questionEl) questionEl.textContent = `"${item.incorrect}"`;
    if (inputEl) { inputEl.value = ""; inputEl.disabled = false; inputEl.focus(); }
    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }
    if (progressEl) progressEl.textContent = `Score: ${score} | Attempts: ${total}`;
  }

  typeFilter?.addEventListener("change", loadQuestion);

  checkBtn?.addEventListener("click", () => {
    const userAnswer = inputEl ? inputEl.value.trim() : "";
    const item = filteredData[currentIndex];
    if (!userAnswer) { if (resultEl) { resultEl.textContent = "Type the corrected sentence!"; resultEl.className = "result-message error"; } return; }
    total++;
    const isCorrect = userAnswer.toLowerCase() === item.correct.toLowerCase();
    if (isCorrect) {
      score++;
      if (resultEl) { resultEl.textContent = `✓ Correct! ${item.explanation}`; resultEl.className = "result-message success"; }
      if (inputEl) inputEl.disabled = true;
    } else {
      if (resultEl) { resultEl.textContent = `✗ Incorrect. Correct answer: "${item.correct}"`; resultEl.className = "result-message error"; }
    }
    if (scoreEl) scoreEl.textContent = score;
    if (progressEl) progressEl.textContent = `Score: ${score} | Attempts: ${total}`;
    saveGameScore("errorCorrection", isCorrect ? 1 : 0);
  });

  nextBtn?.addEventListener("click", loadQuestion);

  loadQuestion();
}

/* VERB TENSE CHALLENGE ENGINE */
function initVerbTenseGame() {
  const questionEl = document.getElementById("vtQuestion");
  const optionsContainer = document.getElementById("vtOptions");
  const nextBtn = document.getElementById("vtNext");
  const resultEl = document.getElementById("vtResult");
  const scoreEl = document.getElementById("vtScore");

  if (!questionEl) return;

  let currentIndex = 0;
  let score = 0;
  let shuffledData = [...VERB_TENSE_EXAMPLES];

  function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function loadQuestion() {
    currentIndex = Math.floor(Math.random() * shuffledData.length);
    const item = shuffledData[currentIndex];
    questionEl.textContent = `"${item.sentence}"`;
    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }

    const allTenses = [...new Set(VERB_TENSE_EXAMPLES.map(e => e.tense))];
    const wrongOptions = allTenses.filter(t => t !== item.tense);
    const shuffledWrong = shuffleArray([...wrongOptions]).slice(0, 3);
    const options = shuffleArray([item.tense, ...shuffledWrong]);

    optionsContainer.innerHTML = "";
    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "btn btn-ghost vt-option";
      btn.textContent = opt;
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        optionsContainer.querySelectorAll(".vt-option").forEach(b => b.disabled = true);
        if (opt === item.tense) {
          score++;
          if (scoreEl) scoreEl.textContent = score;
          if (resultEl) { resultEl.textContent = `✓ Correct! ${item.explanation}`; resultEl.className = "result-message success"; }
          btn.classList.add("correct-answer");
          saveGameScore("verbTense", 1);
        } else {
          if (resultEl) { resultEl.textContent = `✗ Incorrect. Answer: ${item.tense}. ${item.explanation}`; resultEl.className = "result-message error"; }
          btn.classList.add("wrong-answer");
          optionsContainer.querySelectorAll(".vt-option").forEach(b => { if (b.textContent === item.tense) b.classList.add("show-correct"); });
        }
      });
      optionsContainer.appendChild(btn);
    });
  }

  nextBtn?.addEventListener("click", loadQuestion);
  loadQuestion();
}

/* WORD ORDER CHALLENGE ENGINE */
function initWordOrderGame() {
  const wordArea = document.getElementById("woWords");
  const dropArea = document.getElementById("woDrop");
  const checkBtn = document.getElementById("woCheck");
  const nextBtn = document.getElementById("woNext");
  const resultEl = document.getElementById("woResult");
  const scoreEl = document.getElementById("woScore");
  const patternEl = document.getElementById("woPattern");
  const hintBtn = document.getElementById("woHint");

  if (!wordArea) return;

  let currentEx = null;
  let score = 0;

  function shuffle(a) {
    const r = [...a];
    for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
    return r;
  }

  function loadExercise() {
    currentEx = WORD_ORDER_EXERCISES[Math.floor(Math.random() * WORD_ORDER_EXERCISES.length)];
    wordArea.innerHTML = "";
    dropArea.innerHTML = `<div class="drop-placeholder">Click a word to add it here…</div>`;
    shuffle(currentEx.words).forEach(w => {
      const el = document.createElement("div");
      el.className = "word";
      el.textContent = w;
      el.addEventListener("click", () => moveToDrop(el));
      wordArea.appendChild(el);
    });
    if (patternEl) patternEl.textContent = `Pattern: ${currentEx.pattern}`;
    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }
  }

  function moveToDrop(el) {
    const ph = dropArea.querySelector(".drop-placeholder");
    if (ph) ph.remove();
    const clone = document.createElement("div");
    clone.className = "word droppable-word";
    clone.textContent = el.textContent;
    clone.addEventListener("click", () => {
      const newEl = document.createElement("div");
      newEl.className = "word";
      newEl.textContent = clone.textContent;
      newEl.addEventListener("click", () => moveToDrop(newEl));
      wordArea.appendChild(newEl);
      clone.remove();
    });
    dropArea.appendChild(clone);
    el.remove();
  }

  checkBtn?.addEventListener("click", () => {
    if (!currentEx) return;
    const words = Array.from(dropArea.children).filter(c => !c.classList.contains("drop-placeholder")).map(c => c.textContent);
    const userAnswer = words.join(" ");
    if (userAnswer.toLowerCase() === currentEx.answer.toLowerCase()) {
      score++;
      if (scoreEl) scoreEl.textContent = score;
      if (resultEl) { resultEl.textContent = `✓ Correct! "${currentEx.answer}"`; resultEl.className = "result-message success"; }
      saveGameScore("wordOrder", 1);
    } else {
      if (resultEl) { resultEl.textContent = `✗ Incorrect. The correct order: "${currentEx.answer}"`; resultEl.className = "result-message error"; }
    }
  });

  nextBtn?.addEventListener("click", loadExercise);
  hintBtn?.addEventListener("click", () => {
    if (!currentEx) return;
    if (resultEl) { resultEl.textContent = `Hint: Pattern is ${currentEx.pattern}. Correct answer: "${currentEx.answer}"`; resultEl.className = "result-message info"; }
  });

  loadExercise();
}

/* PREPOSITION CHALLENGE GAME ENGINE */
function initPrepositionChallenge() {
  const questionEl = document.getElementById("pcQuestion");
  const optionsContainer = document.getElementById("pcOptions");
  const nextBtn = document.getElementById("pcNext");
  const resultEl = document.getElementById("pcResult");
  const scoreEl = document.getElementById("pcScore");

  if (!questionEl) return;

  let score = 0;
  let currentEx = null;

  function loadQuestion() {
    currentEx = PREPOSITION_EXERCISES[Math.floor(Math.random() * PREPOSITION_EXERCISES.length)];
    questionEl.textContent = currentEx.question;
    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }

    optionsContainer.innerHTML = "";
    currentEx.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "btn btn-ghost pc-option";
      btn.textContent = opt;
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        optionsContainer.querySelectorAll(".pc-option").forEach(b => b.disabled = true);
        if (i === currentEx.answer) {
          score++;
          if (scoreEl) scoreEl.textContent = score;
          if (resultEl) { resultEl.textContent = `✓ Correct! (${currentEx.category})`; resultEl.className = "result-message success"; }
          btn.classList.add("correct-answer");
          saveGameScore("prepositionChallenge", 1);
        } else {
          if (resultEl) { resultEl.textContent = `✗ Incorrect. The correct answer is "${currentEx.options[currentEx.answer]}" (${currentEx.category})`; resultEl.className = "result-message error"; }
          btn.classList.add("wrong-answer");
          optionsContainer.querySelectorAll(".pc-option")[currentEx.answer]?.classList.add("show-correct");
        }
      });
      optionsContainer.appendChild(btn);
    });
  }

  nextBtn?.addEventListener("click", loadQuestion);
  loadQuestion();
}

/* ═══════════════════════════════════════════
   ADJECTIVE POSITIONS
   ═══════════════════════════════════════════ */

const ADJECTIVE_POSITIONS = {
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

const ADJECTIVE_POSITION_EXERCISES = [
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

/* ═══════════════════════════════════════════
   ADVERB POSITIONS
   ═══════════════════════════════════════════ */

const ADVERB_POSITIONS = {
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

const ADVERB_POSITION_EXERCISES = [
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

/* ═══════════════════════════════════════════
   CONJUNCTIONS
   ═══════════════════════════════════════════ */

const CONJUNCTIONS_DATA = {
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

const CONJUNCTION_EXERCISES = [
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

/* ── PHRASAL VERBS DATA ── */
const PHRASAL_VERBS_DATA = {
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

const PHRASAL_VERB_EXERCISES = [
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

/* ── IDIOMATIC EXPRESSIONS DATA ── */
const IDIOMATIC_EXPRESSIONS_DATA = {
  description: "Idiomatic expressions (idioms) are fixed phrases whose meaning cannot be deduced from the literal meaning of the individual words. Each language has its own unique idioms. Mastering English idioms is essential for natural, fluent communication and understanding native speakers.",
  time: {
    title: "Time Idioms (Modismos de Tiempo)",
    text: "These idioms help you talk about time in a natural way.",
    items: [
      { idiom: "Once in a blue moon", meaning: "very rarely (muy de vez en cuando)", example: "I only go to the cinema <strong>once in a blue moon</strong>." },
      { idiom: "Better late than never", meaning: "it's better to do something late than not at all (más vale tarde que nunca)", example: "He finally apologized. <strong>Better late than never</strong>." },
      { idiom: "Around the clock", meaning: "24 hours a day (las 24 horas del día)", example: "The team worked <strong>around the clock</strong> to meet the deadline." },
      { idiom: "In the nick of time", meaning: "just in time (justo a tiempo)", example: "She arrived <strong>in the nick of time</strong> to catch the train." },
      { idiom: "Time flies", meaning: "time passes very quickly (el tiempo vuela)", example: "<strong>Time flies</strong> when you're having fun!" },
      { idiom: "Kill time", meaning: "do something while waiting (matar el tiempo)", example: "I read a magazine to <strong>kill time</strong> at the airport." },
    ]
  },
  emotions: {
    title: "Emotions & Feelings (Emociones y Sentimientos)",
    text: "Express emotions naturally with these common idioms.",
    items: [
      { idiom: "On top of the world", meaning: "extremely happy (en la cima del mundo)", example: "She was <strong>on top of the world</strong> after getting the job." },
      { idiom: "Down in the dumps", meaning: "sad / depressed (triste / deprimido)", example: "He's been <strong>down in the dumps</strong> since his dog died." },
      { idiom: "Steam off / Blow off steam", meaning: "release stress (desahogarse)", example: "I went for a run to <strong>blow off steam</strong>." },
      { idiom: "Cold feet", meaning: "nervous before an event (ponerse nervioso / echarse para atrás)", example: "He got <strong>cold feet</strong> before the wedding." },
      { idiom: "Butterflies in my stomach", meaning: "nervous feeling (mariposas en el estómago)", example: "I always have <strong>butterflies in my stomach</strong> before exams." },
      { idiom: "Bite the bullet", meaning: "face something difficult (tragar saliva / hacer de tripas corazón)", example: "I just need to <strong>bite the bullet</strong> and tell him." },
    ]
  },
  business: {
    title: "Business & Work (Negocios y Trabajo)",
    text: "Essential idioms for professional environments.",
    items: [
      { idiom: "Think outside the box", meaning: "think creatively (pensar de forma innovadora)", example: "We need to <strong>think outside the box</strong> to solve this problem." },
      { idiom: "Cut corners", meaning: "do something poorly to save time or money (tomar atajos)", example: "Don't <strong>cut corners</strong> on quality control." },
      { idiom: "Get the ball rolling", meaning: "start something (poner en marcha)", example: "Let's <strong>get the ball rolling</strong> on this project." },
      { idiom: "The bottom line", meaning: "the most important point (el resultado final / lo esencial)", example: "<strong>The bottom line</strong> is that we need more funding." },
      { idiom: "Back to the drawing board", meaning: "start over (volver a empezar)", example: "The plan failed, so it's <strong>back to the drawing board</strong>." },
      { idiom: "Call it a day", meaning: "stop working for the day (dar por terminado el día)", example: "We've done enough. Let's <strong>call it a day</strong>." },
    ]
  },
  bodyParts: {
    title: "Body Part Idioms (Modismos con Partes del Cuerpo)",
    text: "English uses body parts in many creative idioms.",
    items: [
      { idiom: "Break a leg", meaning: "good luck (¡buena suerte! — [teatro])", example: "<strong>Break a leg</strong> on your performance tonight!" },
      { idiom: "Keep an eye on", meaning: "watch / monitor (vigilar / echar un ojo)", example: "Could you <strong>keep an eye on</strong> my bag?" },
      { idiom: "Pull someone's leg", meaning: "joke / tease (tomar el pelo)", example: "I'm just <strong>pulling your leg</strong>! Don't believe everything." },
      { idiom: "Cost an arm and a leg", meaning: "very expensive (costar un ojo de la cara)", example: "Fixing the car <strong>cost an arm and a leg</strong>." },
      { idiom: "Play it by ear", meaning: "improvise / decide as you go (improvisar)", example: "We don't have a plan — let's <strong>play it by ear</strong>." },
      { idiom: "See eye to eye", meaning: "agree (estar de acuerdo)", example: "They don't <strong>see eye to eye</strong> on politics." },
    ]
  },
  common: {
    title: "Everyday Idioms (Modismos Cotidianos)",
    text: "Common idioms used in daily conversation.",
    items: [
      { idiom: "Piece of cake", meaning: "very easy (pan comido / muy fácil)", example: "The exam was a <strong>piece of cake</strong>." },
      { idiom: "Hit the nail on the head", meaning: "be exactly right (dar en el clavo)", example: "You <strong>hit the nail on the head</strong> with that analysis." },
      { idiom: "When pigs fly", meaning: "never (nunca / cuando las ranas críen pelo)", example: "He'll clean his room <strong>when pigs fly</strong>." },
      { idiom: "Under the weather", meaning: "feeling sick (indispuesto / enfermo)", example: "I'm feeling a bit <strong>under the weather</strong> today." },
      { idiom: "Let the cat out of the bag", meaning: "reveal a secret (revelar un secreto)", example: "She <strong>let the cat out of the bag</strong> about the surprise party." },
      { idiom: "Burn the midnight oil", meaning: "work late into the night (trasnochar trabajando)", example: "I've been <strong>burning the midnight oil</strong> to finish this report." },
    ]
  },
  structure: {
    usage: "Idioms are fixed expressions — do not change the words or word order. Use them in appropriate contexts (some are formal, others informal).",
    position: "Idioms function as a unit and can appear anywhere in a sentence — subject, verb, object, or adverbial position depending on the idiom.",
    caution: "Most idioms are grammatically fixed. You cannot substitute synonyms. For example, you cannot say 'piece of cake' = correct, but 'slice of cake' ≠ easy thing.",
  },
  commonMistakes: [
    { mistake: "It's a piece of cake.", fix: "✓ Correct! 'Piece of cake' means very easy.", explanation: "This is correct. Just remember you can't change it to 'slice of cake' or 'bit of cake'." },
    { mistake: "Break a leg! (to someone before a job interview)", fix: "✓ Correct! 'Break a leg' is used before any performance or challenge.", explanation: "While originally from theater, 'break a leg' is now used broadly." },
    { mistake: "I'm feeling under the weather — I'll stay in bed.", fix: "✓ Correct! 'Under the weather' means feeling slightly ill.", explanation: "This is correctly used. Note it's mild illness, not serious sickness." },
    { mistake: "She let the bag out of the cat.", fix: "She let the cat out of the bag.", explanation: "The expression is fixed — you cannot rearrange the words. The cat goes in the bag, not the bag in the cat!" },
    { mistake: "It cost an arm and a leg — but I really needed it.", fix: "✓ Correct! 'Cost an arm and a leg' means very expensive.", explanation: "Correct usage. This idiom is hyperbolic and informal." },
  ],
  notes: "Learning idioms is essential for understanding native English speakers, as idioms are used frequently in both conversation and writing. Pay attention to the register (formal vs. informal) of each idiom — some are appropriate for business meetings while others are only for casual conversation. The best way to learn idioms is in context: read, listen, and notice when they are used. Keep a personal idiom journal with translations to your native language.",
  examples20: [
    { text: "The surprise party was a <strong>piece of cake</strong> to organize.", type: "everyday", note: "'Piece of cake' = very easy. Informal." },
    { text: "She was <strong>on top of the world</strong> when she got promoted.", type: "emotions", note: "'On top of the world' = extremely happy." },
    { text: "Let's <strong>get the ball rolling</strong> on the new marketing campaign.", type: "business", note: "'Get the ball rolling' = start the process. Professional." },
    { text: "I only eat junk food <strong>once in a blue moon</strong>.", type: "time", note: "'Once in a blue moon' = very rarely." },
    { text: "He got <strong>cold feet</strong> and didn't go through with the plan.", type: "emotions", note: "'Cold feet' = nervous / hesitant." },
    { text: "The doctors worked <strong>around the clock</strong> to save the patient.", type: "time", note: "'Around the clock' = continuously for 24 hours." },
    { text: "You really <strong>hit the nail on the head</strong> with your analysis.", type: "everyday", note: "'Hit the nail on the head' = be exactly right." },
    { text: "We need to <strong>think outside the box</strong> to solve this.", type: "business", note: "'Think outside the box' = think creatively. Common in business." },
    { text: "I'm just <strong>pulling your leg</strong> — I didn't mean it!", type: "bodyParts", note: "'Pull someone's leg' = joke / tease someone." },
    { text: "She arrived <strong>in the nick of time</strong> to catch the flight.", type: "time", note: "'In the nick of time' = just in time." },
    { text: "I always have <strong>butterflies in my stomach</strong> before interviews.", type: "emotions", note: "'Butterflies in my stomach' = nervous feeling." },
    { text: "Don't <strong>cut corners</strong> on safety procedures.", type: "business", note: "'Cut corners' = do something poorly to save time/money." },
    { text: "I'll clean my room <strong>when pigs fly</strong>!", type: "everyday", note: "'When pigs fly' = never (humorous)." },
    { text: "We don't see <strong>eye to eye</strong> on this issue.", type: "bodyParts", note: "'See eye to eye' = agree / share the same opinion." },
    { text: "I'm feeling <strong>under the weather</strong>, so I'll stay home.", type: "everyday", note: "'Under the weather' = feeling slightly ill." },
    { text: "Let's <strong>play it by ear</strong> and see what happens.", type: "bodyParts", note: "'Play it by ear' = improvise / decide as we go." },
    { text: "That handbag <strong>cost an arm and a leg</strong>!", type: "bodyParts", note: "'Cost an arm and a leg' = very expensive." },
    { text: "It's <strong>back to the drawing board</strong> after the failed test.", type: "business", note: "'Back to the drawing board' = start over after failure." },
    { text: "Stop <strong>letting the cat out of the bag</strong> about the surprise!", type: "everyday", note: "'Let the cat out of the bag' = reveal a secret." },
    { text: "I need to <strong>blow off some steam</strong> after that stressful day.", type: "emotions", note: "'Blow off steam' = release stress / relax." },
  ],
};

const IDIOMATIC_EXPRESSION_EXERCISES = [
  { question: "What does 'once in a blue moon' mean?", options: ["very often", "very rarely", "every month", "never"], answer: 1, type: "time" },
  { question: "Which idiom means 'very easy'?", options: ["Piece of cake", "Cold feet", "Break a leg", "Under the weather"], answer: 0, type: "everyday" },
  { question: "Complete: She got ___ before the exam.", options: ["cold feet", "butterflies in her stomach", "both are possible", "neither"], answer: 2, type: "emotions" },
  { question: "What does 'break a leg' mean?", options: ["get injured", "good luck", "work hard", "fall down"], answer: 1, type: "bodyParts" },
  { question: "Complete: We need to ___ and start the project.", options: ["get the ball rolling", "cut corners", "call it a day", "play it by ear"], answer: 0, type: "business" },
  { question: "What does 'under the weather' mean?", options: ["in a storm", "feeling sick", "travelling", "outside"], answer: 1, type: "everyday" },
  { question: "Complete: I always ___ with my best friend on important things.", options: ["see eye to eye", "pull legs", "cost arms", "break legs"], answer: 0, type: "bodyParts" },
  { question: "What does 'hit the nail on the head' mean?", options: ["make a mistake", "be exactly right", "get injured", "work efficiently"], answer: 1, type: "everyday" },
  { question: "Complete: He'll finish the report ___.", options: ["when pigs fly", "piece of cake", "once in a blue moon", "in the nick of time"], answer: 3, type: "time" },
  { question: "What does 'burn the midnight oil' mean?", options: ["waste energy", "work late at night", "set something on fire", "get angry"], answer: 1, type: "everyday" },
  { question: "Complete: The new car ___ . I can't afford it.", options: ["cost an arm and a leg", "was a piece of cake", "broke a leg", "pulled my leg"], answer: 0, type: "bodyParts" },
  { question: "What does 'let the cat out of the bag' mean?", options: ["adopt a pet", "reveal a secret", "make a mistake", "solve a problem"], answer: 1, type: "everyday" },
  { question: "Complete: I'm feeling ___. I think I'm getting a cold.", options: ["on top of the world", "under the weather", "in the nick of time", "around the clock"], answer: 1, type: "emotions" },
  { question: "What does 'think outside the box' mean?", options: ["think creatively", "make a box", "work outside", "pack carefully"], answer: 0, type: "business" },
  { question: "Complete: I just need to ___ and tell him the truth.", options: ["bite the bullet", "eat the cake", "break the ice", "hit the road"], answer: 0, type: "emotions" },
  { question: "What does 'play it by ear' mean?", options: ["play music", "improvise", "listen carefully", "compete"], answer: 1, type: "bodyParts" },
  { question: "Complete: We worked ___ to meet the deadline.", options: ["around the clock", "once in a blue moon", "when pigs fly", "under the weather"], answer: 0, type: "time" },
  { question: "What does 'call it a day' mean?", options: ["name the day", "stop working", "start working", "make a phone call"], answer: 1, type: "business" },
];

/* ── ADJECTIVE / ADVERB RENDERERS ── */
function renderAdjectivePositionTheory() {
  const t = ADJECTIVE_POSITIONS;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = ADJECTIVE_POSITION_EXERCISES;
  return `
    <div class="theory-card">
      <div class="theory-hero">
        <h2 class="theory-title"><span class="theory-icon">📝</span> Adjective Positions</h2>
        <p class="theory-subtitle">Where to place adjectives in a sentence — attributive, predicative, postpositive, and the OSASCOMP order.</p>
      </div>
      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Are Adjective Positions?</h3>
        <p class="theory-description">${esc(t.description)}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🎯 Types of Adjective Positions</h3>
        ${t.usage.map(u => `
          <div class="position-card">
            <div class="position-header">
              <span class="position-icon">${u.title.includes("Attributive") ? "🔹" : u.title.includes("Predicative") ? "🔸" : u.title.includes("Postpositive") ? "🟣" : "🌟"}</span>
              <h4 class="position-title">${esc(u.title)}</h4>
            </div>
            <p class="position-text">${u.text}</p>
            ${u.details ? `<p class="position-details">${u.details}</p>` : ""}
            ${u.example ? `<pre class="position-example">${u.example}</pre>` : ""}
          </div>
        `).join("")}
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📊 OSASCOMP — Adjective Order</h3>
        <p class="theory-description">When multiple adjectives modify the same noun, they must follow this order:</p>
        <table class="theory-table osascomp-table">
          <thead><tr><th>#</th><th>Category</th><th>Description</th><th>Examples</th></tr></thead>
          <tbody>
            ${t.osascomp.categories.map(c => `
              <tr class="osascomp-row osascomp-${c.letter.toLowerCase()}">
                <td class="osascomp-letter"><span class="theory-badge badge-osascomp">${c.letter}</span></td>
                <td><strong>${esc(c.name)}</strong></td>
                <td>${esc(c.description)}</td>
                <td><em>${esc(c.examples.replace(/<\/?strong>/g, ''))}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Structure Summary</h3>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Attributive</span><code class="structure-formula">${esc(t.structure.attributive)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">Predicative</span><code class="structure-formula">${esc(t.structure.predicative)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">Postpositive</span><code class="structure-formula">${esc(t.structure.postpositive)}</code></div>
          <div class="structure-card question"><span class="structure-label">Adjective Order (OSASCOMP)</span><code class="structure-formula">${esc(t.structure.order)}</code></div>
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🚫 ${esc(t.attributiveOnly.title)}</h3>
        <div class="word-list-card">
          <div class="word-tags">
            ${t.attributiveOnly.list.map(w => `<span class="word-tag tag-attributive">${esc(w)}</span>`).join("")}
          </div>
          <p class="word-list-note">${esc(t.attributiveOnly.note)}</p>
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🚫 ${esc(t.predicativeOnly.title)}</h3>
        <div class="word-list-card">
          <div class="word-tags">
            ${t.predicativeOnly.list.map(w => `<span class="word-tag tag-predicative">${esc(w)}</span>`).join("")}
          </div>
          <p class="word-list-note">${esc(t.predicativeOnly.note)}</p>
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔄 Adjectives That Change Meaning by Position</h3>
        <table class="theory-table">
          <thead><tr><th>Adjective</th><th>Attributive Meaning</th><th>Postpositive / Predicative Meaning</th></tr></thead>
          <tbody>
            ${t.meaningChange.items.map(m => `
              <tr>
                <td><span class="theory-badge badge-change">${esc(m.adjective)}</span></td>
                <td>${esc(m.attributive)}</td>
                <td>${esc(m.postpositive || m.predicative)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      ${t.edVsIng ? `
      <section class="theory-section">
        <h3 class="theory-section-title">🎭 -ed vs -ing (Participial Adjectives)</h3>
        <p class="theory-description">${t.edVsIng.text}</p>
        <table class="theory-table">
          <thead><tr><th>-ed (how you feel)</th><th>-ing (what causes it)</th><th>Example (-ed)</th><th>Example (-ing)</th></tr></thead>
          <tbody>
            ${t.edVsIng.pairs.map(p => `
              <tr>
                <td><span class="theory-badge badge-change">${esc(p.ed)}</span></td>
                <td><span class="theory-badge badge-time">${esc(p.ing)}</span></td>
                <td><em>${esc(p.edEx)}</em></td>
                <td><em>${esc(p.ingEx)}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
      ` : ""}

      ${t.cumulativeCoordinate ? `
      <section class="theory-section">
        <h3 class="theory-section-title">📐 Cumulative vs Coordinate Adjectives (Comma Usage)</h3>
        <p class="theory-description">${esc(t.cumulativeCoordinate.text)}</p>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Coordinate (comma + 'and')</span><code class="structure-formula">${esc(t.cumulativeCoordinate.examples.coordinate)}</code></div>
          <div class="structure-card question"><span class="structure-label">Cumulative (no comma)</span><code class="structure-formula">${esc(t.cumulativeCoordinate.examples.cumulative)}</code></div>
        </div>
      </section>
      ` : ""}

      ${t.substantiveAdjectives ? `
      <section class="theory-section">
        <h3 class="theory-section-title">👥 Substantive Adjectives (The + Adjective)</h3>
        <p class="theory-description">${esc(t.substantiveAdjectives.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Expression</th><th>Meaning</th><th>Example</th></tr></thead>
          <tbody>
            ${t.substantiveAdjectives.list.map(s => `
              <tr>
                <td><span class="theory-badge badge-osascomp">${esc(s.phrase)}</span></td>
                <td>${esc(s.meaning)}</td>
                <td><em>${esc(s.example)}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
      ` : ""}

      ${t.examples20 ? `
      <section class="theory-section">
        <h3 class="theory-section-title">📚 20 Comprehensive Examples</h3>
        <p class="theory-description">Study these 20 examples to see how adjective positions work in real sentences. Each example includes the position type and a brief explanation.</p>
        <table class="theory-table">
          <thead><tr><th>#</th><th>Example</th><th>Position</th><th>Explanation</th></tr></thead>
          <tbody>
            ${t.examples20.map((ex, i) => `
              <tr>
                <td style="text-align:center;font-weight:700;color:var(--color-primary);">${i + 1}</td>
                <td>${ex.text.replace(/<\/?strong>/g, '')}</td>
                <td><span class="theory-badge ${ex.position.includes('attributive') ? 'badge-left' : ex.position.includes('predicative') ? 'badge-right' : 'badge-movement'}">${esc(ex.position)}</span></td>
                <td style="font-size:12.5px;">${esc(ex.note)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
      ` : ""}

      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${t.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">✗ ${esc(m.mistake)}</p>
              <p class="mistake-correct">✓ ${esc(m.fix)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes">${t.notes}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="adjQuizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="adjQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="adjQuizScore">0</span> / ${exercises.length}</div>
        </div>
      </section>
    </div>`;
}

function renderAdverbPositionTheory() {
  const t = ADVERB_POSITIONS;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = ADVERB_POSITION_EXERCISES;
  return `
    <div class="theory-card">
      <h2 class="theory-title">Adverb Positions</h2>
      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Are Adverb Positions?</h3>
        <p class="theory-description">${esc(t.description)}</p>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">🎯 Types of Positions</h3>
        <div class="usage-grid">
          ${t.usage.map(u => `
            <div class="usage-card">
              <span class="usage-card-title">${esc(u.title)}</span>
              <p class="usage-card-text">${u.text}</p>
              ${u.example ? `<code class="usage-card-example">${u.example}</code>` : ""}
            </div>
          `).join("")}
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Structure Summary</h3>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Front Position</span><code class="structure-formula">${esc(t.structure.front)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">Mid Position</span><code class="structure-formula">${esc(t.structure.mid)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">End Position</span><code class="structure-formula">${esc(t.structure.end)}</code></div>
          <div class="structure-card question"><span class="structure-label">Adverb Order</span><code class="structure-formula">${esc(t.structure.order)}</code></div>
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${t.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">${esc(m.mistake)}</p>
              <p class="mistake-correct">${esc(m.fix)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes">${t.notes}</p>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="advQuizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-ghost quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="advQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="advQuizScore">0</span> / ${exercises.length}</div>
        </div>
      </section>
    </div>`;
}

/* ── CONJUNCTIONS RENDERER ── */
function renderConjunctionTheory() {
  const c = CONJUNCTIONS_DATA;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = CONJUNCTION_EXERCISES;
  return `
    <div class="theory-card">
      <div class="theory-hero">
        <h2 class="theory-title"><span class="theory-icon">🔗</span> Conjunctions</h2>
        <p class="theory-subtitle">Coordinating, Subordinating & Correlative — the glue that connects words, phrases, and clauses.</p>
      </div>
      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Are Conjunctions?</h3>
        <p class="theory-description">${esc(c.description)}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔗 Coordinating Conjunctions (FANBOYS)</h3>
        <p class="theory-description">${c.coordinating.text}</p>
        <table class="theory-table">
          <thead><tr><th>Conjunction</th><th>Meaning</th><th>Example</th></tr></thead>
          <tbody>
            ${c.coordinating.items.map(co => `
              <tr>
                <td><span class="theory-badge badge-time">${esc(co.word)}</span></td>
                <td>${esc(co.meaning)}</td>
                <td><em>${co.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔀 Subordinating Conjunctions</h3>
        <p class="theory-description">${esc(c.subordinating.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Category</th><th>Conjunctions</th><th>Example</th></tr></thead>
          <tbody>
            ${c.subordinating.categories.map(cat => `
              <tr>
                <td><span class="theory-badge badge-movement">${esc(cat.name)}</span></td>
                <td>${esc(cat.conjunctions)}</td>
                <td><em>${cat.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🤝 Correlative Conjunctions (Paired)</h3>
        <p class="theory-description">${esc(c.correlative.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Pair</th><th>Meaning</th><th>Example</th></tr></thead>
          <tbody>
            ${c.correlative.pairs.map(cr => `
              <tr>
                <td><span class="theory-badge badge-change">${esc(cr.pair)}</span></td>
                <td>${esc(cr.meaning)}</td>
                <td><em>${cr.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Structure Summary</h3>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Coordinating</span><code class="structure-formula">${esc(c.structure.coordinating)}</code></div>
          <div class="structure-card question"><span class="structure-label">Subordinating (clause first)</span><code class="structure-formula">${esc(c.structure.subordinating_before)}</code></div>
          <div class="structure-card question"><span class="structure-label">Subordinating (clause last)</span><code class="structure-formula">${esc(c.structure.subordinating_after)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">Correlative</span><code class="structure-formula">${esc(c.structure.correlative)}</code></div>
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${c.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">✗ ${esc(m.mistake)}</p>
              <p class="mistake-correct">✓ ${esc(m.fix)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes">${c.notes}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="conjQuizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="conjQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="conjQuizScore">0</span> / ${exercises.length}</div>
        </div>
      </section>
    </div>`;
}

/* ── PHRASAL VERBS RENDERER ── */
function renderPhrasalVerbTheory() {
  const p = PHRASAL_VERBS_DATA;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = PHRASAL_VERB_EXERCISES;
  return `
    <div class="theory-card">
      <div class="theory-hero">
        <h2 class="theory-title"><span class="theory-icon">💬</span> Phrasal Verbs</h2>
        <p class="theory-subtitle">Verb + Particle combinations that native speakers use every day — separable, inseparable, intransitive & three-word.</p>
      </div>

      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Are Phrasal Verbs?</h3>
        <p class="theory-description">${esc(p.description)}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Separable Phrasal Verbs</h3>
        <p><strong>${esc(p.separable.title)}:</strong> ${esc(p.separable.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Phrasal Verb</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${p.separable.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-change">${esc(item.phrasal)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔒 Inseparable Phrasal Verbs</h3>
        <p><strong>${esc(p.inseparable.title)}:</strong> ${esc(p.inseparable.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Phrasal Verb</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${p.inseparable.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-place">${esc(item.phrasal)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🚫 Intransitive Phrasal Verbs</h3>
        <p><strong>${esc(p.intransitive.title)}:</strong> ${esc(p.intransitive.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Phrasal Verb</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${p.intransitive.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-time">${esc(item.phrasal)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔗 Three-Word Phrasal Verbs</h3>
        <p><strong>${esc(p.threeWord.title)}:</strong> ${esc(p.threeWord.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Phrasal Verb</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${p.threeWord.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-alt">${esc(item.phrasal)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Structure Summary</h3>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Separable</span><code class="structure-formula">${esc(p.structure.separable)}</code></div>
          <div class="structure-card negative"><span class="structure-label">Inseparable</span><code class="structure-formula">${esc(p.structure.inseparable)}</code></div>
          <div class="structure-card question"><span class="structure-label">Intransitive</span><code class="structure-formula">${esc(p.structure.intransitive)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">Three-Word</span><code class="structure-formula">${esc(p.structure.threeWord)}</code></div>
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📝 20 Key Examples</h3>
        <table class="theory-table">
          <thead><tr><th>#</th><th>Example</th><th>Type</th><th>Note</th></tr></thead>
          <tbody>
            ${p.examples20.map((ex, i) => `
              <tr>
                <td>${i + 1}</td>
                <td><em>${ex.text}</em></td>
                <td><span class="theory-badge ${ex.type === 'separable' ? 'badge-change' : ex.type === 'inseparable' ? 'badge-place' : ex.type === 'intransitive' ? 'badge-time' : 'badge-alt'}">${esc(ex.type)}</span></td>
                <td>${esc(ex.note)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${p.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">✗ ${esc(m.mistake)}</p>
              <p class="mistake-correct">✓ ${esc(m.fix)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes">${p.notes}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="pvQuizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="pvQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="pvQuizScore">0</span> / ${exercises.length}</div>
        </div>
      </section>

      <section class="theory-section reference-section">
        <h3 class="theory-section-title">📚 Complete Reference (500 Phrasal Verbs)</h3>
        <input type="text" class="ref-search" id="pvRefSearch" placeholder="🔍 Search phrasal verbs..." oninput="filterRefTable('pvRefTable')">
        <div class="ref-table-wrap">
          <table class="theory-table" id="pvRefTable">
            <thead><tr><th>#</th><th>Phrasal Verb</th><th>Meaning</th><th>Example</th></tr></thead>
            <tbody>
              ${(typeof window.PHRASAL_VERBS_500 !== 'undefined' ? window.PHRASAL_VERBS_500 : []).map((item, i) => `
                <tr>
                  <td>${i + 1}</td>
                  <td><span class="theory-badge badge-change">${esc(item.phrasal)}</span></td>
                  <td>${esc(item.meaning)}</td>
                  <td><em>${item.example}</em></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>
    </div>`;
}

/* ── IDIOMATIC EXPRESSIONS RENDERER ── */
function renderIdiomaticExpressionTheory() {
  const i = IDIOMATIC_EXPRESSIONS_DATA;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = IDIOMATIC_EXPRESSION_EXERCISES;
  return `
    <div class="theory-card">
      <div class="theory-hero">
        <h2 class="theory-title"><span class="theory-icon">🎭</span> Idiomatic Expressions</h2>
        <p class="theory-subtitle">Fixed phrases whose meaning isn't literal — essential for natural, fluent English communication.</p>
      </div>

      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Are Idiomatic Expressions?</h3>
        <p class="theory-description">${esc(i.description)}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">⏰ Time Idioms</h3>
        <p><strong>${esc(i.time.title)}:</strong> ${esc(i.time.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Idiom</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${i.time.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-time">${esc(item.idiom)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">😊 Emotions & Feelings</h3>
        <p><strong>${esc(i.emotions.title)}:</strong> ${esc(i.emotions.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Idiom</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${i.emotions.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-alt">${esc(item.idiom)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">💼 Business & Work</h3>
        <p><strong>${esc(i.business.title)}:</strong> ${esc(i.business.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Idiom</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${i.business.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-change">${esc(item.idiom)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🧍 Body Part Idioms</h3>
        <p><strong>${esc(i.bodyParts.title)}:</strong> ${esc(i.bodyParts.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Idiom</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${i.bodyParts.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-place">${esc(item.idiom)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🗣️ Everyday Idioms</h3>
        <p><strong>${esc(i.common.title)}:</strong> ${esc(i.common.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Idiom</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${i.common.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-left">${esc(item.idiom)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Usage Guide</h3>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Usage</span><code class="structure-formula">${esc(i.structure.usage)}</code></div>
          <div class="structure-card question"><span class="structure-label">Position</span><code class="structure-formula">${esc(i.structure.position)}</code></div>
          <div class="structure-card negative"><span class="structure-label">Caution</span><code class="structure-formula">${esc(i.structure.caution)}</code></div>
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📝 20 Key Examples</h3>
        <table class="theory-table">
          <thead><tr><th>#</th><th>Example</th><th>Category</th><th>Note</th></tr></thead>
          <tbody>
            ${i.examples20.map((ex, i) => `
              <tr>
                <td>${i + 1}</td>
                <td><em>${ex.text}</em></td>
                <td><span class="theory-badge ${ex.type === 'time' ? 'badge-time' : ex.type === 'emotions' ? 'badge-alt' : ex.type === 'business' ? 'badge-change' : ex.type === 'bodyParts' ? 'badge-place' : 'badge-left'}">${esc(ex.type)}</span></td>
                <td>${esc(ex.note)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${i.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">✗ ${esc(m.mistake)}</p>
              <p class="mistake-correct">✓ ${esc(m.fix)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes">${i.notes}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="ieQuizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="ieQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="ieQuizScore">0</span> / ${exercises.length}</div>
        </div>
      </section>

      <section class="theory-section reference-section">
        <h3 class="theory-section-title">📚 Complete Reference (500 Idiomatic Expressions)</h3>
        <input type="text" class="ref-search" id="ieRefSearch" placeholder="🔍 Search idiomatic expressions..." oninput="filterRefTable('ieRefTable')">
        <div class="ref-table-wrap">
          <table class="theory-table" id="ieRefTable">
            <thead><tr><th>#</th><th>Idiom</th><th>Meaning</th><th>Example</th></tr></thead>
            <tbody>
              ${(typeof window.IDIOMS_500 !== 'undefined' ? window.IDIOMS_500 : []).map((item, i) => `
                <tr>
                  <td>${i + 1}</td>
                  <td><span class="theory-badge badge-time">${esc(item.idiom)}</span></td>
                  <td>${esc(item.meaning)}</td>
                  <td><em>${item.example}</em></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>
    </div>`;
}

/* ── ADJECTIVE ORDER GAME ENGINE ── */
function initAdjectiveOrderGame() {
  const questionEl = document.getElementById("aoQuestion");
  const optionsContainer = document.getElementById("aoOptions");
  const nextBtn = document.getElementById("aoNext");
  const resultEl = document.getElementById("aoResult");
  const scoreEl = document.getElementById("aoScore");

  if (!questionEl) return;

  const ORDER_QUESTIONS = [
    { noun: "vase", adjectives: ["beautiful", "small", "old", "Chinese", "porcelain"], correct: "beautiful small old Chinese porcelain vase" },
    { noun: "table", adjectives: ["lovely", "large", "round", "wooden", "dining"], correct: "lovely large round wooden dining table" },
    { noun: "necklace", adjectives: ["gorgeous", "antique", "gold", "Egyptian"], correct: "gorgeous antique Egyptian gold necklace" },
    { noun: "building", adjectives: ["ugly", "huge", "modern", "glass", "office"], correct: "ugly huge modern glass office building" },
    { noun: "jacket", adjectives: ["nice", "new", "leather", "black", "Italian"], correct: "nice new Italian black leather jacket" },
    { noun: "soup", adjectives: ["delicious", "hot", "spicy", "Mexican", "bean"], correct: "delicious hot spicy Mexican bean soup" },
    { noun: "rug", adjectives: ["beautiful", "old", "Persian", "wool"], correct: "beautiful old Persian wool rug" },
    { noun: "dress", adjectives: ["elegant", "long", "silk", "red", "evening"], correct: "elegant long red silk evening dress" },
    { noun: "castle", adjectives: ["magnificent", "medieval", "Scottish", "stone"], correct: "magnificent medieval Scottish stone castle" },
    { noun: "watch", adjectives: ["sophisticated", "Swiss", "silver", "pocket"], correct: "sophisticated Swiss silver pocket watch" },
    { noun: "painting", adjectives: ["valuable", "large", "abstract", "French", "oil"], correct: "valuable large abstract French oil painting" },
    { noun: "chair", adjectives: ["comfortable", "old", "wooden", "rocking"], correct: "comfortable old wooden rocking chair" },
    { noun: "sweater", adjectives: ["soft", "cashmere", "blue", "Irish"], correct: "soft Irish blue cashmere sweater" },
    { noun: "mansion", adjectives: ["stunning", "enormous", "Victorian", "brick", "country"], correct: "stunning enormous Victorian brick country mansion" },
    { noun: "scarf", adjectives: ["pretty", "silk", "flowered", "French"], correct: "pretty French silk flowered scarf" },
    { noun: "sword", adjectives: ["sharp", "long", "steel", "medieval", "Japanese"], correct: "sharp long medieval Japanese steel sword" },
    { noun: "garden", adjectives: ["peaceful", "small", "Japanese", "zen"], correct: "peaceful small Japanese zen garden" },
    { noun: "bracelet", adjectives: ["delicate", "ancient", "Roman", "bronze"], correct: "delicate ancient Roman bronze bracelet" },
    { noun: "hat", adjectives: ["silly", "big", "yellow", "straw", "sun"], correct: "silly big yellow straw sun hat" },
    { noun: "carpet", adjectives: ["luxurious", "thick", "red", "Turkish", "woolen"], correct: "luxurious thick red Turkish woolen carpet" },
    { noun: "statue", adjectives: ["impressive", "tall", "marble", "Greek", "ancient"], correct: "impressive tall ancient Greek marble statue" },
    { noun: "bowl", adjectives: ["pretty", "small", "ceramic", "blue", "Japanese"], correct: "pretty small blue Japanese ceramic bowl" },
    { noun: "boat", adjectives: ["fast", "white", "fiberglass", "racing", "modern"], correct: "fast modern white fiberglass racing boat" },
    { noun: "earrings", adjectives: ["sparkling", "tiny", "diamond", "round", "Italian"], correct: "sparkling tiny round Italian diamond earrings" },
    { noun: "cabinet", adjectives: ["practical", "large", "oak", "kitchen", "corner"], correct: "practical large corner oak kitchen cabinet" },
    { noun: "fountain", adjectives: ["ornate", "old", "stone", "Italian", "garden"], correct: "ornate old Italian stone garden fountain" },
    { noun: "teapot", adjectives: ["cute", "small", "brown", "ceramic", "Japanese"], correct: "cute small brown Japanese ceramic teapot" },
    { noun: "mirror", adjectives: ["ornamental", "large", "round", "Venetian", "glass"], correct: "ornamental large round Venetian glass mirror" },
    { noun: "ring", adjectives: ["exquisite", "tiny", "silver", "Turkish", "wedding"], correct: "exquisite tiny Turkish silver wedding ring" },
    { noun: "bench", adjectives: ["rustic", "long", "wooden", "park", "old"], correct: "rustic old long wooden park bench" },
  ];

  let score = 0;
  let currentQ = null;

  function loadQuestion() {
    currentQ = ORDER_QUESTIONS[Math.floor(Math.random() * ORDER_QUESTIONS.length)];
    questionEl.innerHTML = `Put in correct order: <strong>___ ${currentQ.noun}</strong>`;

    const shuffledAdj = [...currentQ.adjectives].sort(() => Math.random() - 0.5);
    optionsContainer.innerHTML = "";

    const slotsDiv = document.createElement("div");
    slotsDiv.className = "ao-slots";
    slotsDiv.innerHTML = currentQ.adjectives.map(() => `<span class="ao-slot"></span>`).join(" ");
    optionsContainer.appendChild(slotsDiv);

    const nounSpan = document.createElement("span");
    nounSpan.className = "ao-noun";
    nounSpan.textContent = currentQ.noun;
    optionsContainer.appendChild(nounSpan);

    const wordBank = document.createElement("div");
    wordBank.className = "ao-word-bank";
    shuffledAdj.forEach(adj => {
      const btn = document.createElement("button");
      btn.className = "btn btn-ghost ao-word";
      btn.textContent = adj;
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        const firstEmpty = slotsDiv.querySelector(".ao-slot:empty");
        if (firstEmpty) {
          firstEmpty.textContent = adj;
          firstEmpty.dataset.value = adj;
          firstEmpty.classList.add("filled");
          btn.disabled = true;
          btn.classList.add("placed");
        }
      });
      wordBank.appendChild(btn);
    });
    optionsContainer.appendChild(wordBank);

    slotsDiv.querySelectorAll(".ao-slot.filled").forEach(s => {
      s.addEventListener("click", () => {
        const val = s.dataset.value;
        s.textContent = "";
        s.dataset.value = "";
        s.classList.remove("filled");
        const placedBtn = wordBank.querySelector(`.ao-word.placed`);
        if (placedBtn) {
          placedBtn.disabled = false;
          placedBtn.classList.remove("placed");
        }
      });
    });

    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }
  }

  const checkBtn = document.getElementById("aoCheck");
  checkBtn?.addEventListener("click", () => {
    if (!currentQ) return;
    const slots = document.querySelectorAll(".ao-slot");
    const userOrder = Array.from(slots).map(s => s.dataset.value || "").filter(Boolean);
    if (userOrder.length < currentQ.adjectives.length) {
      if (resultEl) { resultEl.textContent = "Place all adjectives in the slots first!"; resultEl.className = "result-message error"; return; }
    }
    const userAns = userOrder.join(" ") + " " + currentQ.noun;
    if (userAns.toLowerCase() === currentQ.correct.toLowerCase()) {
      score++;
      if (scoreEl) scoreEl.textContent = score;
      if (resultEl) { resultEl.textContent = '✓ Correct! "' + currentQ.correct + '"'; resultEl.className = "result-message success"; }
      saveGameScore("adjectiveOrder", 1);
    } else {
      if (resultEl) { resultEl.textContent = '✗ Incorrect. Correct order: "' + currentQ.correct + '"'; resultEl.className = "result-message error"; }
    }
  });

  nextBtn?.addEventListener("click", loadQuestion);
  loadQuestion();
}

/* ── ADVERB PLACEMENT GAME ENGINE ── */
function initAdverbPlacementGame() {
  const questionEl = document.getElementById("apQuestion");
  const optionsContainer = document.getElementById("apOptions");
  const nextBtn = document.getElementById("apNext");
  const resultEl = document.getElementById("apResult");
  const scoreEl = document.getElementById("apScore");

  if (!questionEl) return;

  const PLACEMENT_QUESTIONS = [
    { sentence: "She ___ arrives on time.", adverb: "always", position: "mid", correct: "She always arrives on time." },
    { sentence: "___ we went to the beach.", adverb: "Yesterday", position: "front", correct: "Yesterday, we went to the beach." },
    { sentence: "He drives his car ___.", adverb: "carefully", position: "end", correct: "He drives his car carefully." },
    { sentence: "I have ___ been to Japan.", adverb: "never", position: "mid-aux", correct: "I have never been to Japan." },
    { sentence: "___ the phone rang.", adverb: "Suddenly", position: "front", correct: "Suddenly, the phone rang." },
    { sentence: "She speaks English ___.", adverb: "fluently", position: "end", correct: "She speaks English fluently." },
    { sentence: "They ___ eat meat.", adverb: "never", position: "mid", correct: "They never eat meat." },
    { sentence: "I have ___ finished my homework.", adverb: "just", position: "mid-aux", correct: "I have just finished my homework." },
    { sentence: "___ nobody was hurt.", adverb: "Fortunately", position: "front", correct: "Fortunately, nobody was hurt." },
    { sentence: "We met ___.", adverb: "yesterday", position: "end", correct: "We met yesterday." },
    { sentence: "She is ___ late.", adverb: "always", position: "mid-aux", correct: "She is always late." },
    { sentence: "He put the book ___.", adverb: "on the table", position: "end", correct: "He put the book on the table." },
    { sentence: "I can ___ see the difference.", adverb: "hardly", position: "mid-aux", correct: "I can hardly see the difference." },
    { sentence: "___ I go for a walk in the morning.", adverb: "Usually", position: "front", correct: "Usually, I go for a walk in the morning." },
    { sentence: "They arrived ___.", adverb: "at the airport yesterday", position: "end", correct: "They arrived at the airport yesterday." },
  ];

  let score = 0;
  let currentQ = null;

  function loadQuestion() {
    currentQ = PLACEMENT_QUESTIONS[Math.floor(Math.random() * PLACEMENT_QUESTIONS.length)];
    questionEl.innerHTML = 'Place the adverb <strong>"' + currentQ.adverb + '"</strong> correctly:<br><span style="font-size:18px;color:var(--color-text-secondary);">' + currentQ.sentence.replace("___", "______") + "</span>";

    const positions = [
      { label: "Front (before subject)", value: "front" },
      { label: "Mid (after subject / after auxiliary)", value: "mid" },
      { label: "End (after verb / object)", value: "end" },
    ];

    optionsContainer.innerHTML = "";
    positions.forEach(pos => {
      const btn = document.createElement("button");
      btn.className = "btn btn-ghost ap-option";
      btn.textContent = pos.label;
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        optionsContainer.querySelectorAll(".ap-option").forEach(b => b.disabled = true);
        const qPos = currentQ.position;
        const isCorrect = (pos.value === qPos) || (qPos === "mid-aux" && pos.value === "mid");
        if (isCorrect) {
          score++;
          if (scoreEl) scoreEl.textContent = score;
          if (resultEl) { resultEl.textContent = '✓ Correct! "' + currentQ.correct + '"'; resultEl.className = "result-message success"; }
          btn.classList.add("correct-answer");
          saveGameScore("adverbPlacement", 1);
        } else {
          if (resultEl) { resultEl.textContent = '✗ Incorrect. "' + currentQ.correct + '"'; resultEl.className = "result-message error"; }
          btn.classList.add("wrong-answer");
          optionsContainer.querySelectorAll(".ap-option").forEach(b => {
            const label = b.textContent.toLowerCase();
            if (qPos === "mid-aux" && label.startsWith("mid")) b.classList.add("show-correct");
            else if (label.startsWith(qPos)) b.classList.add("show-correct");
          });
        }
      });
      optionsContainer.appendChild(btn);
    });

    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }
  }

  nextBtn?.addEventListener("click", loadQuestion);
  loadQuestion();
}

/* ── CLAUSE IDENTIFICATION GAME ENGINE ── */
function initClauseIdentificationGame() {
  const questionEl = document.getElementById("ciQuestion");
  const optionsContainer = document.getElementById("ciOptions");
  const nextBtn = document.getElementById("ciNext");
  const resultEl = document.getElementById("ciResult");
  const scoreEl = document.getElementById("ciScore");

  if (!questionEl) return;

  let score = 0;
  let currentQ = null;

  function loadQuestion() {
    currentQ = CLAUSE_IDENTIFICATION_GAME[Math.floor(Math.random() * CLAUSE_IDENTIFICATION_GAME.length)];
    questionEl.innerHTML = 'Identify the clause type:<br><span style="font-size:20px;font-weight:600;color:var(--color-text);display:block;margin-top:10px;">"' + currentQ.sentence + '"</span>';

    const types = ["Noun Clause", "Adjective Clause", "Adverb Clause"];

    optionsContainer.innerHTML = "";
    types.forEach(type => {
      const btn = document.createElement("button");
      btn.className = "btn btn-ghost ci-option";
      btn.textContent = type;
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        optionsContainer.querySelectorAll(".ci-option").forEach(b => b.disabled = true);
        if (type === currentQ.answer) {
          score++;
          if (scoreEl) scoreEl.textContent = score;
          if (resultEl) { resultEl.textContent = '✓ Correct! (' + currentQ.hint + ')'; resultEl.className = "result-message success"; }
          btn.classList.add("correct-answer");
          saveGameScore("clauseIdentification", 1);
        } else {
          if (resultEl) { resultEl.textContent = '✗ Incorrect. The answer is "' + currentQ.answer + '". ' + currentQ.hint; resultEl.className = "result-message error"; }
          btn.classList.add("wrong-answer");
          optionsContainer.querySelectorAll(".ci-option").forEach(b => {
            if (b.textContent === currentQ.answer) b.classList.add("show-correct");
          });
        }
      });
      optionsContainer.appendChild(btn);
    });

    if (resultEl) { resultEl.textContent = ""; resultEl.className = "result-message"; }
  }

  nextBtn?.addEventListener("click", loadQuestion);
  loadQuestion();
}

/* ── REFERENCE TABLE SEARCH ── */
function filterRefTable(tableId) {
  const table = document.getElementById(tableId);
  if (!table) return;
  const input = document.getElementById(tableId.replace("RefTable", "RefSearch"));
  if (!input) return;
  const q = input.value.toLowerCase();
  const rows = table.querySelectorAll("tbody tr");
  rows.forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(q) ? "" : "none";
  });
}
