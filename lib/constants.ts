
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Default Live API model to use
 */
export const DEFAULT_LIVE_API_MODEL =
  'gemini-2.5-flash-native-audio-preview-09-2025';

export const DEFAULT_VOICE = 'Orus';

export const VOICES = [
  { name: 'Pitch Deck Speaker', alias: 'Mastermind' },
  { name: 'Orus', alias: 'Jade (Male)' },
  { name: 'Zephyr', alias: 'Diamond (Female)' },
  { name: 'Puck', alias: 'Ruby (Male)' },
  { name: 'Charon', alias: 'Sapphire (Male)' },
  { name: 'Luna', alias: 'Emerald (Female)' },
  { name: 'Nova', alias: 'Amethyst (Female)' },
  { name: 'Kore', alias: 'Topaz (Female)' },
  { name: 'Fenrir', alias: 'Opal (Male)' },
  { name: 'Leda', alias: 'Pearl (Female)' },
  { name: 'Aoede', alias: 'Garnet (Female)' },
  { name: 'Callirrhoe', alias: 'Aquamarine (Female)' },
  { name: 'Autonoe', alias: 'Peridot (Female)' },
  { name: 'Enceladus', alias: 'Turquoise (Male)' },
  { name: 'Iapetus', alias: 'Moonstone (Male)' },
  { name: 'Umbriel', alias: 'Onyx (Male)' },
  { name: 'Algieba', alias: 'Lapis Lazuli (Male)' },
  { name: 'Despina', alias: 'Tourmaline (Female)' },
  { name: 'Erinome', alias: 'Citrine (Female)' },
  { name: 'Algenib', alias: 'Tanzanite (Male)' },
  { name: 'Rasalgethi', alias: 'Zircon (Male)' },
  { name: 'Laomedeia', alias: 'Jasper (Female)' },
  { name: 'Achernar', alias: 'Agate (Male)' },
  { name: 'Alnilam', alias: 'Malachite (Male)' },
  { name: 'Schedar', alias: 'Quartz (Male)' },
  { name: 'Gacrux', alias: 'Amber (Male)' },
  { name: 'Pulcherrima', alias: 'Carnelian (Female)' },
  { name: 'Achird', alias: 'Obsidian (Male)' },
  { name: 'Zubenelgenubi', alias: 'Sunstone (Male)' },
  { name: 'Vindemiatrix', alias: 'Spinel (Female)' },
  { name: 'Sadachbia', alias: 'Morganite (Female)' },
  { name: 'Sadaltager', alias: 'Beryl (Female)' },
  { name: 'Sulafat', alias: 'Alexandrite (Female)' },
];

export const SPEECH_PACES = [
  { id: 'pace-normal', name: 'Normal (Natural Conversation)', instructions: 'Speak at a natural, conversational pace. Not too fast, not too slow. Pause naturally to breathe.' },
  { id: 'pace-slow', name: 'Slow (Articulate)', instructions: 'Speak slowly and articulately. Enunciate every word clearly. Take longer pauses between ideas.' },
  { id: 'pace-fast', name: 'Fast (Excited)', instructions: 'Speak quickly and energetically, like you are excited to share news. Minimize pauses.' },
  { id: 'pace-relaxed', name: 'Relaxed (Laid back)', instructions: 'Speak in a very relaxed, leisurely tempo. Drag out vowels slightly. Take your time.' },
];

export const VOICE_STYLES = [
  {
    id: 'style-executive',
    name: 'Pitch Deck Speaker',
    instructions: `[style directive] **Persona: The Master Pitch Deck Speaker**.
    - **Role:** A world-class fundraiser and visionary pitching to Tier-1 VCs.
    - **Tone:** Polished, confident, highly **breathy** and near-field (close to mic). The voice of inevitable success.
    - **Humour:** Uses 20% wit/humour (playful irony) to keep investors engaged.
    - **Accent:** Neutral International / Mid-Atlantic.
    - **Mannerisms:** Calculated pauses, articulate enunciation. Uses "Right?", "Precisely", "Here's the magic".`
  },
  {
    id: 'style-native',
    name: 'Native Speaker (Authentic)',
    instructions: `[style directive] **Persona: The Native Local**.
    - **Role:** A native speaker of the selected language.
    - **Tone:** Authentic, natural, culturally nuanced.
    - **Accent:** Pure native accent for the selected language (e.g., if French, sound Parisian; if Tagalog, sound Manileño).
    - **Mannerisms:** Use local idioms, fillers, and speech patterns typical of a native speaker. Use the specific "Language Mannerisms" defined below.`
  },
  {
    id: 'style-broadcast',
    name: 'News Anchor (Broadcast)',
    instructions: `[style directive] **Persona: The News Anchor**.
    - **Role:** A professional broadcaster delivering breaking news.
    - **Tone:** Clear, projected, authoritative, steady cadence.
    - **Mannerisms:** Formal enunciation, minimal fillers, objective delivery.`
  },
  {
    id: 'style-podcast',
    name: 'Podcast Host (Casual)',
    instructions: `[style directive] **Persona: The Podcast Host**.
    - **Role:** An engaging, curious, and charismatic host.
    - **Tone:** Conversational, dynamic, variable pacing.
    - **Mannerisms:** Uses "Hmm," "Interesting," "Let's dive into that." leans into the mic.`
  },
  {
    id: 'style-empathetic',
    name: 'Helpful Assistant (Warm)',
    instructions: `[style directive] **Persona: The Helpful Assistant**.
    - **Role:** A kind, patient, and eager-to-help guide.
    - **Tone:** Warm, soft, smiling voice, encouraging.
    - **Mannerisms:** Uses "Sure!", "I'd love to help," "No problem at all."`
  }
];

export const LANGUAGES = [
  { code: 'en-US', name: 'English (US)' },
  { code: 'en-GB', name: 'English (UK)' },
  { code: 'en-AU', name: 'English (Australia)' },
  { code: 'en-IN', name: 'English (India)' },
  { code: 'tl-PH', name: 'Filipino (Tagalog/Taglish)' },
  { code: 'es-ES', name: 'Spanish (Spain)' },
  { code: 'es-MX', name: 'Spanish (Mexico)' },
  { code: 'fr-FR', name: 'French (France)' },
  { code: 'fr-CA', name: 'French (Canada)' },
  { code: 'de-DE', name: 'German' },
  { code: 'it-IT', name: 'Italian' },
  { code: 'nl-NL', name: 'Dutch (Netherlands)' },
  { code: 'nl-BE', name: 'Dutch (Flemish)' },
  { code: 'pt-PT', name: 'Portuguese (Portugal)' },
  { code: 'pt-BR', name: 'Portuguese (Brazil)' },
  { code: 'ru-RU', name: 'Russian' },
  { code: 'ja-JP', name: 'Japanese' },
  { code: 'ko-KR', name: 'Korean' },
  { code: 'zh-CN', name: 'Chinese (Mandarin)' },
  { code: 'hi-IN', name: 'Hindi' },
  { code: 'ar-SA', name: 'Arabic (Saudi)' },
  { code: 'tr-TR', name: 'Turkish' },
  { code: 'vi-VN', name: 'Vietnamese' },
  { code: 'th-TH', name: 'Thai' },
  { code: 'id-ID', name: 'Indonesian' },
  { code: 'ms-MY', name: 'Malay' },
  { code: 'sv-SE', name: 'Swedish' },
  { code: 'no-NO', name: 'Norwegian' },
  { code: 'da-DK', name: 'Danish' },
  { code: 'fi-FI', name: 'Finnish' },
  { code: 'pl-PL', name: 'Polish' },
  { code: 'uk-UA', name: 'Ukrainian' },
  { code: 'el-GR', name: 'Greek' },
  { code: 'he-IL', name: 'Hebrew' }
];

// Language specific accent/mannerism directives with phonetic instructions
export const LANGUAGE_INSTRUCTIONS: Record<string, string> = {
  'en-US': `Speak in General American English. Rhotic, clear, casual and breathy. 
  **USE THESE FILLERS & NUANCES NATURALLY (with pronunciation/delivery guides):** 
  - "You know?" (rising intonation), "Like..." (drawn out, 'lye-k'), "I mean...", "Actually...", "Literally..." (emphasize 'Lit'), "Totally...", "Right?" (sharp T).
  - "Honestly...", "Basically...", "Wait..." (abrupt stop), "Um...", "Uh...", "So...", "Okay..." (casual 'mkay').
  - "Listen...", "Guess what?", "Seriously?" (disbelief tone), "No way!" (shock), "Kind of...", "Sort of...", "Anyway...", "Whatever..." (dismissive).
  - "Cool" (breathy), "Awesome", "Definitely", "Absolutely".
  - "Gotcha", "Yep" (pop the P), "Uh-huh", "Hold on", "To be honest (TBH)", "At the end of the day", "Mind-blowing", "Game changer", "Low key", "Vibe".
  - "Check this out", "Hear me out", "No worries", "My bad", "Yikes" (high pitch), "Oof" (breath out), "For real?", "Tell me about it" (sarcastic or agreement), "Makes sense", "Not gonna lie".
  - **Slang/Casual:** "Bet" (sharp T), "No cap" (serious tone), "Sus" (suspicious), "Tea" (gossip tone), "Shade", "Lit", "Fire", "Gucci", "Ghosted".
  - "Simp", "Stan", "Cringe" (vocal fry), "Slaps" (enthusiastic), "Hits different", "Periodt" (emphasize T at end), "Say less", "Big time", "Facts" (strong S), "Deadass".`,

  'en-GB': `Speak in polished British English (RP) or Estuary. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Bloody" (emphatic 'blud-ee'), "Mate" (may-t), "Innit?" (drop the T, 'in-it'), "Cheers" (cheerful), "Right then", "Lovely" (luv-lee), "Brilliant", "Proper" (glottal stop often dropped in casual), "Rubbish", "Fancy a...", "Knackered" (tired tone).
  - "Chuffed" (happy), "Cheeky", "Blimey!" (surprise), "Dodgy", "Gutted" (disappointed, 'gut-id'), "Sorted", "Ta" (quick thanks), "Pop over", "Reckon", "Quite".
  - "Fair play", "Bob's your uncle", "Chin up", "Sod it" (frustrated), "Muque", "Taking the mickey", "Posh".`,

  'en-AU': `Speak in General Australian English. Relaxed, upward inflection (high rising terminal).
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Mate" (drawn out 'maaa-te'), "No worries", "Arvo" (afternoon), "Brekkie" (breakfast), "Reckon", "Heaps" (lots), "Good on ya", "Fair dinkum", "Bloody oath" (agreement), "Stoked" (excited).
  - "Crikey" (cry-key), "She'll be right", "Thongs" (flip flops), "Barbie" (BBQ), "Defa" (definitely), "How ya goin'?", "Ta", "Legend" (lej-end), "Nour" (No), "Yeah nah" (no), "Nah yeah" (yes).`,

  'en-IN': `Speak in professional Indian English. Syllable-timed rhythm. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Na?" (rising at end), "Yaar" (friend, 'yaar'), "Actually...", "Basically...", "Only" (used for emphasis at end), "Do one thing", "Isn't it?" (often 'no?'), "Accha" (okay/I see, 'ah-cha'), "Theek hai" (okay, 'theek-hai'), "Arre" (surprise/annoyance).
  - "Bhai" (brother), "Boss", "Correct?", "No?", "Tell me...", "What to do?", "First class", "Kindly", "Prepone", "Passing out" (graduating), "Doubt" (question), "Haan" (yes).`,

  'tl-PH': `Speak in **Taglish** (Tagalog-English code-switching). Casual, expressive, Manileño/Conyo vibe.
  **USE THESE FILLERS & EXPRESSIONS NATURALLY (Mix them into English sentences with these specific pronunciations):**
  - "You know?", "Yeah...", "Oh ohh...", "Ahuh...", "Diba?" (dee-bah, rising intonation), "Noh?" (noh, short), "Korek!" (koh-rek, sharp), "Wow", "Amazing".
  - "You know what I mean?", "I got yah broh", "Yes pare" (pah-reh), "Yup", "Buddy", "Pre" (preh, short), "Wait lang" (wait lahng), "Teka lang" (teh-kah lahng).
  - "Actually...", "Sobrang..." (soh-brang), "Anyway...", "Basta..." (bas-tah, firm), "Hay nako!" (high-nah-koh, exasperated), "Chika" (chee-kah).
  - "Lodi" (low-dee), "Werpa" (wehr-pah), "Charot" (cha-rot, playful), "Char" (char), "Sus..." (soos, doubtful), "Uy!" (ooy, surprised).
  - "Alam mo yun?" (ah-lam moh yoon), "Ganern!" (gah-nern), "Bongga" (bong-gah), "Kamusta?" (kah-mus-tah), "Siyempre" (shem-preh).
  - "Parang ganito..." (pah-rang gah-nee-toh), "Ano ba yan..." (ah-noh bah yan, annoyed), "Hala!" (hah-lah, shocked), "Ay!" (eye, startled).
  - "Naks" (naks, impressed), "Edi wow" (eh-dee wow, sarcastic), "De joke lang" (deh joke lang), "Yun nga..." (yoon nga).
  - "Okray" (ok-ray), "Tsaka" (cha-kah), "Kasi..." (kah-see), "Nga pala..." (nga pah-lah), "Ha?" (hah, confused), "Eh..." (ehh).
  - "Naman!" (nah-man), "Yung..." (yoong), "Ganun" (gah-noon), "Siguro" (see-goo-roh), "Yata" (yah-tah), "Talaga?" (tah-lah-gah).
  - "Grabe!" (grah-beh), "Anyare?" (an-yah-reh), "Sayang" (sah-yang, regretful), "Awit" (ah-wit, painful/sad), "Sana all" (sah-nah ol).
  - "Goods yan" (goods yan), "Gege" (geh-geh), "Deins" (deh-ins), "Sakalam" (sah-kah-lam), "Keri lang" (keh-ree lang), "Push mo yan".
  - "Tiwala lang" (tee-wah-lah lang), "Kapit lang", "Boom!", "Yun oh!" (yoon oh), "Bet ko yan", "Havey" (hah-vey), "Waley" (wah-ley).
  - "Omsim" (om-sim), "Eme" (eh-meh), "Korique" (koh-reek), "Dasurv" (dah-surv), "Fordapor" (for-dah-por), "Ferson" (fer-son).
  - "Shookt" (shook-t), "G" (jee), "Tara" (tah-rah), "Luh" (luh, disbelief), "Bes" (bes), "Mumsh" (mumsh), "Mars" (mars), "Beb" (beb).
  - "Kaya mo yan" (kah-yah moh yan), "Go lang", "Ayos" (ah-yos), "Gets mo?" (gets moh), "Weh?" (weh, disbelief).`,

  'es-ES': `Speak in Peninsular Spanish. Distinción (th for z/c).
  **USE THESE FILLERS & NUANCES (with pronunciation guides):**
  - "O sea..." (oh seh-ah), "Bueno...", "Pues...", "¿Sabes?", "Mira...", "Vale" (bah-leh), "Venga" (ben-gah), "Hombre", "Tío/Tía" (tee-oh/tee-ah).
  - "Hostia!" (os-tee-ah, shock/swear), "Jolín" (ho-leen), "Guay" (gwhy), "Chulo", "En plan...", "Ni fu ni fa", "Que va".
  - "Anda!", "Fíjate", "Es que...", "Total...", "Madre mía" (mah-dre mee-ah), "Vaya" (bah-yah).`,

  'es-MX': `Speak in Mexican Spanish. Energetic.
  **USE THESE FILLERS & NUANCES (with pronunciation guides):**
  - "O sea...", "Bueno...", "Pues...", "Fíjate", "Mira...", "Neta?" (neh-tah, really?), "Güey" (wey), "No manches!" (noh man-ches).
  - "Padre" (pah-dreh, cool), "Chido" (chee-doh), "Órale" (oh-rah-leh), "Ahorita" (ah-oh-ree-tah), "Híjole" (ee-ho-leh).
  - "¿Qué onda?", "Sale" (sah-leh), "Vientos" (byen-tos), "Está cañón", "Ni modo", "A poco?", "Simón" (see-mon), "Che", "¿Mande?" (man-deh).`,

  'fr-FR': `Speak in Metropolitan French. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Du coup..." (doo koo), "En fait..." (on fet), "Genre..." (zhonr), "Bah...", "Bref", "C'est ça", "Voilà".
  - "Euh..." (uhh), "Dis donc", "Carrément" (kah-reh-mon), "Grave" (grahv), "Quand même", "Franchement".
  - "Ben..." (ban), "Wesh" (wesh, casual), "Truc", "Machin", "N'importe quoi", "La vache!" (surprise), "Bof" (indifferent).
  - "Ah bon?", "Tu vois?", "Allez", "Op", "Tac".`,

  'fr-CA': `Speak in Quebec French. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Fak..." (fahk, so), "Tsé?" (tseh, you know?), "Genre...", "Mettons...", "Plate" (plaht, boring), "Capoté", "Char" (shahr, car), "Chum" (boyfriend/friend), "Blonde" (girlfriend), "Niaiser", "Coudon".
  - "Pantoute" (pan-toot, not at all), "Frette" (cold), "Tiguidou" (tee-gee-doo, all good), "Correct" (koh-rekt), "Ben voyons!", "Ayoye!", "Tabarouette".`,

  'de-DE': `Speak in German. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Halt", "Eben", "Mal", "Doch" (emphasis), "Tja" (t-yah, resigned), "Genau" (geh-now, exactly), "Sozusagen", "Quasi", "Oder?" (oh-dah, right?), "Na ja...".
  - "Krass", "Alter", "Echt?" (eh-sht, really?), "Wahnsinn", "Geil" (gyle, cool), "Blöd", "Ach so!" (ahk-so, I see), "Naja", "Sowieso", "Irgendwie", "Mensch".`,

  'it-IT': `Speak in Italian. Expressive. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Allora..." (ahl-loh-rah), "Cioè..." (cho-eh), "Tipo..." (tee-poh), "Insomma", "Dai!" (die, come on!), "Magari", "Boh" (dunno), "Vabbè", "Scusa", "Ecco" (eh-kko).
  - "Figurati", "Meno male", "Uffa" (oof-fah, annoyed), "Cavolo!", "Mamma mia!", "A posto", "Senti...", "Guarda...", "Praticamente".`,

  'pt-BR': `Speak in Brazilian Portuguese. Musical. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Né?" (neh, right?), "Então...", "Tipo..." (chee-poh), "Tá?", "Ai ai", "Nossa!", "Pô!", "Cara" (kah-rah, dude), "Eita!", "Uai" (why).
  - "Meu", "Beleza" (beh-leh-zah), "Legal", "Joia", "Falou", "Imagina", "Olha...", "Sabe?", "Mano" (mah-noh), "Velho", "Caraca", "Bacana".`,

  'pt-PT': `Speak in European Portuguese. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Pá" (pah), "Pois", "Ora", "Então", "Pronto", "Tipo", "Está bem" (tah bem), "Giro", "Fixe" (feesh), "Bué" (bweh, very).
  - "Gajo", "Chavalo", "Olha", "Sabe?", "Percebes?", "Enfim", "Portanto".`,

  'ru-RU': `Speak in Russian. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Ну..." (noo), "Короче..." (kah-roh-cheh), "Типа..." (tee-pah), "Вообще..." (vah-bsh-che), "Блин" (blin, darn), "Да ладно", "Слушай...", "Понимаешь?", "Вот...".
  - "Значит", "Так сказать", "Прикинь", "Жесть", "Круто" (kroo-tah), "Ясно", "Давай", "Е-мое".`,

  'ja-JP': `Speak in Japanese. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Eto..." (eh-toh), "Ano..." (ah-noh), "Nanka...", "Yappari", "Ma...", "Sokka" (I see), "Naruhodo", "Tashikani", "Uso!" (no way!), "Honto?" (really?).
  - "Yabai" (yah-bye), "Sugoi" (soo-goy), "Ne?" (neh), "Desho?", "Chotto...", "Mottainai", "Kawaii", "Otsukare", "Maji de?".`,

  'ko-KR': `Speak in Korean. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Injung" (agree), "Daebak" (awesome), "Heol" (hul, omg), "Jinjja?" (really?), "Aigo" (sigh), "Geunikka" (exactly), "Mwoya" (what's this?), "Otoke", "Ara", "Kaja" (let's go).
  - "Fighting!" (hwaiting), "Ssul", "Jamkkanman", "Geurae", "Majayo", "Hul".`,

  'zh-CN': `Speak in Mandarin. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Ne", "Ba", "A", "En...", "Jiushi...", "Ranhou...", "Qishi...", "Duibu", "Haode", "Meishi".
  - "Zhen de ma?" (really?), "Wako", "Niudao", "Lihai", "Ok la", "Aiya" (sigh).`,

  'hi-IN': `Speak in Hindi (Hinglish). 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Matlab...", "Bas", "Aur kya", "Bhai" (b-high), "Arre yaar", "Sahi hai", "Thik hai", "Accha", "Chalo".
  - "Haanjii", "Bilkul", "Pakka?", "Kyun", "Kya baat hai", "Waah", "Arey".`,

  'ar-SA': `Speak in Modern Standard Arabic or Khaleeji. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Ya'ni..." (ya-nee, I mean), "Tab'an", "Akid", "Mashallah", "Khalas", "Yallah" (let's go), "Shlonak?", "Habibi", "Wallah", "Inshallah".`,

  'tr-TR': `Speak in Istanbul Turkish. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Şey...", "Yani...", "Tabii", "Zaten", "Aynen" (exactly), "Valla", "İşte...", "Hadi", "Tamam", "Efendim?", "Acaba", "Falan filan".`,

  'vi-VN': `Speak in Vietnamese. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "À...", "Ừ...", "Nhỉ?", "Đúng rồi", "Vậy hả?", "Trời ơi!" (OMG), "Cái gì cơ?", "Thế à?", "Ok", "Dạ" (polite yes), "Thôi", "Ha".`,

  'th-TH': `Speak in Standard Thai. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Ka" (female particle), "Krub" (male particle), "Na", "Ching ror?", "Chai" (yes), "Mai chai" (no), "Aroy", "Sanuk", "Ok", "Aow".`,

  'id-ID': `Speak in Indonesian. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Dong", "Sih", "Kan?", "Deh", "Kok?", "Lho!", "Nih", "Tuh", "Banget" (very), "Gitu", "Ya ampun", "Waduh".`,

  'ms-MY': `Speak in Malay. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Lah" (emphasis), "Kan", "Pun", "Kot", "Meh", "Jom" (let's go), "Alamak!", "Fuyoh!", "Best gila", "Lepak".`,

  'sv-SE': `Speak in Standard Swedish. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Typ..." (like), "Liksom...", "Alltså...", "Ju", "Väl", "Ba", "Oj!", "Nämen!", "Precis", "Okej".`,

  'no-NO': `Speak in Standard Norwegian. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Liksom...", "Bare...", "Jo", "Vel", "Ikke sant?", "Akkurat", "Hæ?", "Uff".`,

  'da-DK': `Speak in Danish. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Altså...", "Jo", "Vel", "Nok", "Lige", "Faktisk", "Jamen", "Nånå", "Hvad så".`,

  'fi-FI': `Speak in Finnish. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Niinku...", "Tota...", "Siis...", "Oikeesti?", "Kato", "Joo", "Nii", "Aijaa?", "Okei", "No niin".`,

  'pl-PL': `Speak in Polish. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Wiesz...", "No...", "Przecież", "Właśnie", "Okej", "Słuchaj...", "Serio?", "Tak jakby", "Kurczę".`,

  'uk-UA': `Speak in Ukrainian. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Ну...", "Коротше...", "Типу...", "Власне...", "Ось", "Так би мовити", "Слухай", "Зрозуміло".`,

  'el-GR': `Speak in Modern Greek. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Re" (hey), "Loipon", "E...", "Nai", "Entaxei", "Malaka" (use carefully), "Ela!", "Opa!".`,

  'he-IL': `Speak in Modern Hebrew. 
  **USE THESE FILLERS & NUANCES (with pronunciation/delivery guides):**
  - "Kze..." (like), "Ya'anu...", "Davka", "Sababa" (cool), "Yalla", "Wallah", "Nu", "Achla", "Bemet?".`
};
