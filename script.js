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
const isSingleTense = typeof window.PAGE_TENSE === "string";

/* ── STATE ── */
let state = {
  currentTense: isSingleTense ? window.PAGE_TENSE : "Present Simple",
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

/* ── SIDEBAR (multi-tense only) ── */
let sidebar, sidebarOverlay, sidebarToggle, sidebarClose, sidebarNav, tenseLabel, formLabel;

if (!isSingleTense) {
  sidebar = $("sidebar");
  sidebarOverlay = $("sidebarOverlay");
  sidebarToggle = $("sidebarToggle");
  sidebarClose = $("sidebarClose");
  sidebarNav = $("sidebarNav");
  tenseLabel = $("tenseLabel");
  formLabel = $("formLabel");
}

function tenseToFilename(tense) {
  return tense.toLowerCase().replace(/\s+/g, '-') + '.html';
}

function buildSidebar() {
  if (!sidebarNav) return;
  sidebarNav.innerHTML = "";
  TENSE_NAMES.forEach(tense => {
    const g = document.createElement("div"); g.className = "tense-group";
    const h = document.createElement("div"); h.className = "tense-header";
    const t = document.createElement("button"); t.className = "tense-title"; t.dataset.tense = tense; t.setAttribute("aria-expanded","false");
    const ts = document.createElement("span"); ts.className = "tense-title-text"; ts.textContent = tense;
    const ta = document.createElement("span"); ta.className = "tense-title-arrow"; ta.textContent = "▾";
    t.appendChild(ts); t.appendChild(ta);
    const l = document.createElement("a"); l.className = "tense-page-link"; l.href = tenseToFilename(tense); l.textContent = "↗"; l.title = `Open ${tense} page`; l.target = "_blank"; l.rel = "noopener"; l.setAttribute("aria-label", `${tense} page`);
    h.appendChild(t); h.appendChild(l);
    const f = document.createElement("div"); f.className = "tense-forms";
    FORMS.forEach(form => {
      const b = document.createElement("button"); b.className = "form-btn"; b.textContent = FORM_LABELS[form]; b.dataset.tense = tense; b.dataset.form = form; f.appendChild(b);
    });
    t.addEventListener("click",()=>{ state.currentTense = tense; showTheory(tense); updateSidebarActive(); closeSidebar(); });
    g.appendChild(h); g.appendChild(f); sidebarNav.appendChild(g);
  });
}

function updateSidebarActive() {
  if (!sidebarNav) return;
  sidebarNav.querySelectorAll(".tense-title").forEach(el => el.classList.toggle("active",el.dataset.tense===state.currentTense));
  sidebarNav.querySelectorAll(".form-btn").forEach(el => el.classList.toggle("active",el.dataset.tense===state.currentTense&&el.dataset.form===state.currentForm));
  sidebarNav.querySelectorAll(".tense-group").forEach(g => {
    const t = g.querySelector(".tense-title");
    if (t.dataset.tense===state.currentTense) { g.classList.add("open"); t.setAttribute("aria-expanded","true"); }
    else { g.classList.remove("open"); t.setAttribute("aria-expanded","false"); }
  });
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

      <section class="theory-section">
        <h3 class="theory-section-title">⏰ Signal Words</h3>
        <div class="signal-words">${t.signalWords.map(w => `<span class="signal-tag">${esc(w)}</span>`).join("")}</div>
      </section>

      ${t.commonMistakes ? `
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
      </section>` : ""}

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
  if (isSingleTense) {
    state.view = "theory";
    const tc = $("theoryContent"); const gc = $("gameContent");
    if(tc) { tc.innerHTML = renderTheoryHTML(tense); tc.classList.add("active"); tc.hidden = false; }
    if(gc) { gc.hidden = true; gc.classList.remove("active"); }
    setActiveTab("theory");
  } else {
    state.view = "theory";
    const tv = $("theoryView"); const gv = $("gameView");
    if(tv) { tv.innerHTML = renderTheoryHTML(tense); tv.hidden = false; }
    if(gv) { gv.hidden = true; }
    if(tenseLabel) tenseLabel.textContent = tense;
    if(formLabel) formLabel.textContent = "Theory";
    updateSidebarActive();
  }
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ── GAME (shared) ── */

function showGame() {
  if (isSingleTense) {
    state.view = "game";
    const tc = $("theoryContent"); const gc = $("gameContent");
    if(tc) { tc.hidden = true; tc.classList.remove("active"); }
    if(gc) { gc.hidden = false; gc.classList.add("active"); }
  } else {
    state.view = "game";
    const tv = $("theoryView"); const gv = $("gameView");
    if(tv) tv.hidden = true;
    if(gv) gv.hidden = false;
    if(tenseLabel) tenseLabel.textContent = state.currentTense;
    if(formLabel) formLabel.textContent = FORM_LABELS[state.currentForm];
    updateSidebarActive();
  }
}

function loadGame() {
  wordsArea.innerHTML = "";
  dropArea.innerHTML = "";
  resultDiv.textContent = ""; resultDiv.className = "result-message";
  hintArea?.setAttribute("hidden","");
  state.hintLevel = 0; state.isComplete = false;
  const ph = document.createElement("div"); ph.className = "drop-placeholder"; ph.textContent = "Drop words here to build your sentence…"; dropArea.appendChild(ph);
  state.currentSentence = pickSentence();
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

function checkAnswer(){if(state.isComplete){showFeedback("Sentence already complete! Try a new one.","info");return;}const dw=Array.from(dropArea.children).filter(c=>!c.classList.contains("drop-placeholder")).map(c=>c.textContent);if(dw.length===0){showFeedback("Drag some words to the drop area first!","info");return;}const us=dw.join(" ");const correct=us===state.currentSentence;state.attempts++;updateStats();if(correct){state.score++;state.streak++;state.completed++;if(state.streak>state.bestStreak)state.bestStreak=state.streak;state.isComplete=true;updateStats();updateProgress();resultDiv.textContent="Perfect! Correct sentence!";resultDiv.className="result-message success";dropArea.classList.add("success-pulse");setTimeout(()=>dropArea.classList.remove("success-pulse"),500);document.querySelectorAll("#dropArea .word").forEach(el=>{el.classList.add("correct");el.setAttribute("draggable","false");el.style.cursor="default";});enableDraggable(false);showFeedback("Great job! Try a new sentence.","success");spawnConfetti();}else{state.streak=0;updateStats();resultDiv.textContent="Not quite right. Try again!";resultDiv.className="result-message error";dropArea.classList.add("shake");setTimeout(()=>dropArea.classList.remove("shake"),400);const c=dw.length;const n=state.correctWords.length;if(c!==n){showFeedback(`You placed ${c} word${c!==1?"s":""}, but need ${n}.`,"info");}else{showFeedback("All words are there, but the order is wrong.","info");}}}

function resetGame(){if(state.isComplete){loadGame();return;}dropArea.innerHTML="";const ph=document.createElement("div");ph.className="drop-placeholder";ph.textContent="Drop words here to build your sentence…";dropArea.appendChild(ph);wordsArea.innerHTML="";shuffle(state.correctWords).forEach(w=>wordsArea.appendChild(createWordEl(w)));resultDiv.textContent="";resultDiv.className="result-message";hintArea?.setAttribute("hidden","");state.hintLevel=0;updateWordCounts();showFeedback("Reset! Arrange the words again.","info");}

function loadNewSentence(){state.usedSentences.push(state.currentSentence);loadGame();showFeedback("New sentence! Try to arrange it correctly.","info");}

function giveHint(){if(state.isComplete){showFeedback("Sentence is already complete!","info");return;}const w=state.correctWords;state.hintLevel=Math.min(state.hintLevel+1,w.length);const hw=w.map((w,i)=>{if(i<state.hintLevel)return w;return w.split("").map((ch,j)=>(j===0&&ch.match(/[a-zA-Z]/)?ch:"_")).join("");});if(hintText)hintText.textContent=hw.join(" ");hintArea?.removeAttribute("hidden");}

function spawnConfetti(){const c=document.createElement("div");c.className="confetti-container";document.body.appendChild(c);const colors=["#4f46e5","#f59e0b","#10b981","#ef4444","#ec4899","#8b5cf6","#06b6d4","#f97316"];const shapes=["■","●","▲","★","♦"];for(let i=0;i<60;i++){const p=document.createElement("div");p.className="confetti-piece";p.textContent=shapes[Math.floor(Math.random()*shapes.length)];p.style.left=Math.random()*100+"%";p.style.color=colors[Math.floor(Math.random()*colors.length)];p.style.fontSize=8+Math.random()*12+"px";p.style.animationDuration=1.5+Math.random()*2+"s";p.style.animationDelay=Math.random()*0.5+"s";c.appendChild(p);}setTimeout(()=>{if(c.parentElement)c.remove();},4000);}

/* ── FORM SELECTION (shared) ── */
function selectTenseForm(tense,form) {
  state.currentTense = tense;
  state.currentForm = form;
  state.usedSentences = [];
  state.hintLevel = 0;
  if (isSingleTense) {
    setActiveTab(form);
    showGame();
  } else {
    showGame();
    closeSidebar();
  }
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
  setupDropZone();

  if (isSingleTense) {
    document.title = state.currentTense + " — English Tenses";
    showTheory(state.currentTense);
    initTabs();
  } else {
    buildSidebar();
    sidebarToggle?.addEventListener("click", toggleSidebar);
    sidebarOverlay?.addEventListener("click", closeSidebar);
    sidebarClose?.addEventListener("click", closeSidebar);
    sidebarNav?.addEventListener("click", e => {
      const btn = e.target.closest(".form-btn");
      if (btn) selectTenseForm(btn.dataset.tense, btn.dataset.form);
    });
    showTheory("Present Simple");
  }

  document.addEventListener("click", e => {
    const btn = e.target.closest(".practice-btn");
    if (btn) selectTenseForm(btn.dataset.tense || state.currentTense, "affirmative");
  });
  $("theoryBtn")?.addEventListener("click", () => showTheory(state.currentTense));
  checkBtn?.addEventListener("click", checkAnswer);
  resetBtn?.addEventListener("click", resetGame);
  newSentenceBtn?.addEventListener("click", loadNewSentence);
  hintBtn?.addEventListener("click", giveHint);
  themeToggle?.addEventListener("click", toggleTheme);

  document.addEventListener("keydown", e => {
    if(e.key==="Escape") closeSidebar();
    if(e.key==="Enter"&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey){e.preventDefault();checkAnswer();}
    if((e.key==="r"||e.key==="R")&&!e.ctrlKey&&!e.metaKey){e.preventDefault();resetGame();}
    if((e.key==="n"||e.key==="N")&&!e.ctrlKey&&!e.metaKey){e.preventDefault();loadNewSentence();}
    if((e.key==="h"||e.key==="H")&&!e.ctrlKey&&!e.metaKey){e.preventDefault();giveHint();}
    if((e.key==="t"||e.key==="T")&&!e.ctrlKey&&!e.metaKey){e.preventDefault();showTheory(state.currentTense);}
  });

  updateStats();
  updateProgress();
}

document.addEventListener("DOMContentLoaded", init);
