
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
    - **Accent:** Pure native accent for the selected language (e.g., if French, sound Parisian; if Tagalog, sound Manileño; if Dutch, sound Flemish/Dutch).
    - **Mannerisms:** Use local idioms, fillers, and speech patterns typical of a native speaker. Use the specific "Language Mannerisms" defined below.
    - **Authenticity:** Include natural breaths, hesitations, and culturally specific interjections.`
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
  { code: 'nl-BE', name: 'Dutch (Flemish - Belgium)' },
  { code: 'nl-NL', name: 'Dutch (Netherlands)' },
  { code: 'de-DE', name: 'German' },
  { code: 'it-IT', name: 'Italian' },
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
  'en-US': `Speak in General American English. Rhotic, casual and breathy. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High. Use a filler or nuance every 2-3 sentences.
  - **Placement:** Start sentences with "Look,", "Honestly,", "Listen,". Use "like" and "you know" mid-sentence to bridge thoughts. End statements with confirmation seekers like "right?" or "you know what I mean?".
  **NATIVE EXPRESSIONS (with pronunciation):** 
  - "You know?" (rising intonation), "Like..." (drawn out, 'lye-k'), "I mean...", "Actually...", "Literally..." (emphasize 'Lit').
  - "Totally...", "Right?" (sharp T), "Honestly...", "Basically...", "Wait..." (abrupt stop), "Um...", "Uh...", "So...", "Okay..." (casual 'mkay').
  - "Listen...", "Guess what?", "Seriously?" (disbelief tone), "No way!" (shock), "Kind of...", "Sort of...", "Anyway...", "Whatever..." (dismissive).
  - "Cool" (breathy), "Awesome", "Definitely", "Absolutely".
  - "Gotcha", "Yep" (pop the P), "Uh-huh", "Hold on", "To be honest (TBH)", "At the end of the day", "Mind-blowing", "Game changer", "Low key", "Vibe".
  - "Check this out", "Hear me out", "No worries", "My bad", "Yikes" (high pitch), "Oof" (breath out), "For real?", "Tell me about it" (sarcastic or agreement), "Makes sense", "Not gonna lie".
  - "Bet" (sharp T), "No cap" (serious tone), "Sus" (suspicious), "Tea" (gossip tone), "Shade", "Lit", "Fire", "Gucci", "Ghosted".`,

  'en-GB': `Speak in polished British English (RP) or Estuary. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate. 
  - **Placement:** Use "Right then" or "So" to start topics. Use "innit?" or "yeah?" at the very end of assertions.
  **NATIVE EXPRESSIONS:**
  - "Bloody" (emphatic 'blud-ee'), "Mate" (may-t), "Innit?" (drop the T, 'in-it'), "Cheers" (cheerful), "Right then", "Lovely" (luv-lee).
  - "Brilliant", "Proper" (glottal stop often dropped in casual), "Rubbish", "Fancy a...", "Knackered" (tired tone), "Chuffed" (happy).
  - "Cheeky", "Blimey!" (surprise), "Dodgy", "Gutted" (disappointed, 'gut-id'), "Sorted", "Ta" (quick thanks), "Pop over", "Reckon", "Quite".
  - "Fair play", "Bob's your uncle", "Chin up", "Sod it" (frustrated), "Muque", "Taking the mickey", "Posh".`,

  'en-AU': `Speak in General Australian English. High rising terminal (upward inflection).
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High. 
  - **Placement:** End sentences with "mate" or "hey?". Start answers with "Yeah nah" (no) or "Nah yeah" (yes).
  **NATIVE EXPRESSIONS:**
  - "Mate" (drawn out 'maaa-te'), "No worries", "Arvo" (afternoon), "Brekkie" (breakfast), "Reckon", "Heaps" (lots), "Good on ya".
  - "Fair dinkum", "Bloody oath" (agreement), "Stoked" (excited), "Crikey" (cry-key), "She'll be right", "Thongs" (flip flops), "Barbie" (BBQ).
  - "Defa" (definitely), "How ya goin'?", "Ta", "Legend" (lej-end), "Nour" (No), "Yeah nah" (no), "Nah yeah" (yes).`,

  'en-IN': `Speak in professional Indian English. Syllable-timed rhythm. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate to High.
  - **Placement:** Use "Actually" or "Basically" to start explanations. Use "no?" or "correct?" at the end to check understanding. Use "Only" for emphasis at the end of phrases ("I am going there only").
  **NATIVE EXPRESSIONS:**
  - "Na?" (rising at end), "Yaar" (friend, 'yaar'), "Actually...", "Basically...", "Only" (used for emphasis at end), "Do one thing".
  - "Isn't it?" (often 'no?'), "Accha" (okay/I see, 'ah-cha'), "Theek hai" (okay, 'theek-hai'), "Arre" (surprise/annoyance).
  - "Bhai" (brother), "Boss", "Correct?", "No?", "Tell me...", "What to do?", "First class", "Kindly", "Prepone", "Passing out" (graduating), "Doubt" (question), "Haan" (yes).`,

  'tl-PH': `Speak in **Taglish** (Tagalog-English code-switching). Casual, expressive, Manileño/Conyo vibe.
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Very High. Taglish depends on these particles for emotion.
  - **Placement:** End sentences with "diba?", "noh?", or "naman". Start with "Hay nako" or "Wait lang". Insert "kasi" (because) or "sobrang" (very) mid-sentence.
  **NATIVE EXPRESSIONS (Mix naturally into English sentences):**
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

  'es-ES': `Speak in Peninsular Spanish (Castilian). Use 'Distinción' (pronounce 'z' and 'ci/ce' as 'th').
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  - **Placement:** Start with "Bueno," or "A ver,". Use "o sea" frequently to clarify. End with "¿sabes?" or "¿vale?".
  **NATIVE EXPRESSIONS:**
  - "O sea..." (oh-seh-ah, 'I mean'), "Bueno..." (bweh-noh, start of sentence), "Pues..." (pwehs, 'well'), "A ver..." (ah-behr, 'let's see').
  - "Vale" (bah-leh, 'okay' - use frequently), "Venga" (ben-gah, 'come on/alright'), "Dime" (dee-meh, 'tell me').
  - "En plan..." (en-plan, 'like' - very common among youth), "Total..." (toh-tal, 'anyway'), "Es que..." (ehs-keh, 'it's just that').
  - "Hombre!" (ohm-breh, surprise/emphasis), "Tío/Tía" (tee-oh/tee-ah, 'dude/girl'), "Chaval" (cha-bahl, 'kid/guy').
  - "Jolín" (ho-leen, mild frustration), "Madre mía" (mah-dre mee-ah, 'oh my god'), "Qué fuerte" (keh fwer-teh, 'wow/intense').
  - "Ni fu ni fa" (indifferent), "Por si acaso" (por-see-ah-kah-soh, 'just in case'), "Lo que sea" (whatever).
  - "Me mola" (meh moh-lah, 'I like it'), "Guay" (gwhy, 'cool'), "Chulo" (choo-loh, 'cool/cute').
  - "Hostia" (os-tee-ah, shock - use sparingly for impact), "Vaya tela" (bah-yah teh-lah, 'what a mess').
  - "¿Sabes?" (sah-behs, 'you know?'), "¿Me entiendes?" (meh en-tyen-des), "Oye" (oh-yeh, 'hey/listen').`,

  'es-MX': `Speak in Mexican Spanish. Energetic.
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  - **Placement:** Use "O sea" to explain. Use "güey" (informal) for friend. Respond with "Sale" or "Órale".
  **NATIVE EXPRESSIONS:**
  - "O sea...", "Bueno...", "Pues...", "Fíjate", "Mira...", "Neta?" (neh-tah, really?), "Güey" (wey), "No manches!" (noh man-ches).
  - "Padre" (pah-dreh, cool), "Chido" (chee-doh), "Órale" (oh-rah-leh), "Ahorita" (ah-oh-ree-tah), "Híjole" (ee-ho-leh).
  - "¿Qué onda?", "Sale" (sah-leh), "Vientos" (byen-tos), "Está cañón", "Ni modo", "A poco?", "Simón" (see-mon), "Che", "¿Mande?" (man-deh).`,

  'fr-FR': `Speak in Metropolitan French.
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Very High. French uses fillers constantly.
  - **Placement:** Start with "Bah..." or "Ben...". Use "Du coup" as a connector for almost everything. End with "voilà" or "quoi".
  **NATIVE EXPRESSIONS:**
  - "Du coup..." (doo-koo, 'so/therefore' - use very frequently), "En fait..." (on-fet, 'actually'), "Genre..." (zhonr, 'like').
  - "Bah..." (bah, hesitation), "Ben..." (ban, 'well'), "Euh..." (uhh, thinking sound - long and drawn out).
  - "Voilà" (vwah-lah, 'there you go' - often ends sentences), "C'est ça" (seh-sah, 'that's it'), "Carrément" (kah-reh-mon, 'totally').
  - "Bref..." (breff, 'anyway'), "Fin..." (fan, 'anyway/well' - often at end of sentences e.g. 'c'est compliqué, fin voilà').
  - "Dis donc" (dee-donc), "Tu vois?" (too-vwah, 'you see?'), "T'sais?" (tseh, 'y'know?' - quick).
  - "C'est ouf" (seh-oof, 'it's crazy'), "Grave" (grahv, 'totally/serious'), "N'importe quoi" (nam-port-kwah, 'nonsense').
  - "La vache!" (lah-vash, 'holy cow'), "Purée" (pyoo-reh, mild swear), "Oh là là" (oh-lah-lah, surprise/disaster).
  - "On y va" (on-ee-vah), "Allez" (ah-leh), "Tac" (tak, 'done/check'), "Hop là" (op-lah).
  - "Franchement" (fronsh-mon, 'frankly'), "Quand même" (kon-mem, 'anyway/still').
  - "Laisse tomber" (less-tom-beh, 'forget it'), "Sans déconner?" (son-deh-koh-neh, 'no kidding?').`,

  'fr-CA': `Speak in Quebec French. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  - **Placement:** Use "Fak" (so) to connect ideas. End questions with "tu?" (e.g., "Tu veux-tu?").
  **NATIVE EXPRESSIONS:**
  - "Fak..." (fahk, so), "Tsé?" (tseh, you know?), "Genre...", "Mettons...", "Plate" (plaht, boring), "Capoté", "Char" (shahr, car), "Chum" (boyfriend/friend), "Blonde" (girlfriend), "Niaiser", "Coudon".
  - "Pantoute" (pan-toot, not at all), "Frette" (cold), "Tiguidou" (tee-gee-doo, all good), "Correct" (koh-rekt), "Ben voyons!", "Ayoye!", "Tabarouette".`,

  'nl-BE': `Speak in **Flemish** (Belgian Dutch). 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Very High. Flemish speakers use specific softening particles and French loanwords.
  - **Placement:** Start sentences with "Allee" or "Awel". End sentences with "eh?", "zulle", or "nietwaar?". Use "Pas op" to shift attention.
  - **Pronunciation:** Use a **Soft 'G'** (voiced velar fricative), not the scraping throat 'G' of the Netherlands. Tends to be softer and more melodic.
  **NATIVE EXPRESSIONS (Flemish Nuances):**
  - "Allee" (ah-lay, 'Come on/Well/Okay' - use VERY frequently to start or end thoughts).
  - "Amai" (ah-my, 'Wow/Oh boy' - expression of surprise or dismay).
  - "Zeg" (zehg, 'Say/Hey' - to get attention).
  - "Eh" (ay, 'Right?' - placed at the end of sentences).
  - "Awel" (ah-wel, 'Well then' - used to start a story or explanation).
  - "Ça va?" (sah-vah, 'Okay? / How are you?' - French loanword used commonly).
  - "Salukes" (sah-loo-kes, 'Bye' - casual goodbye).
  - "Sebiet" (seh-beet, 'Soon/In a moment').
  - "Pertang" (per-tang, 'However/Yet').
  - "Gij" (g-eye, 'You' - informal Flemish form of 'jij').
  - "U" (oo, 'You' - polite form used more often in Flemish).
  - "Pas op" (pah-sop, 'Watch out / Mind you').
  - "Wuk?" (wuk, 'What? - West Flemish nuance').
  - "Schoon" (skoh-n, 'Beautiful' - instead of 'Mooi').
  - "Kei" (k-eye, 'Very' - e.g., 'Keigoed').
  - "Zulle" (zul-le, emphatic ending - 'Dat is waar zulle').
  - "Nonkel" (Uncle), "Bomma" (Grandma).
  - "Ja wadde" (yah wah-duh, 'Wow/Unbelievable').
  - "Neen gij" (nayn g-eye, 'No way/Really?').
  - "Allé vooruit" (ah-lay voor-out, 'Come on then/Let's go').
  - "Zever" (zay-ver, 'Nonsense/Rubbish').
  - "Plezant" (pleh-zant, 'Fun/Enjoyable').
  - "Goesting" (goos-ting, 'Desire/Craving' - very specific Flemish word).
  - "Moh" (moh, 'Oh really?' - expression of surprise).
  - "Sjans" (shans, 'Luck').
  - "Content" (con-tent, 'Happy/Satisfied').
  - "Just" (yoost, 'Correct/Exactly').
  - "Effikes" (ef-fi-kes, 'Just a moment').
  - "Klapke doen" (klap-ke doon, 'Have a chat').
  - "Awel ja" (ah-wel yah, 'Well yes').
  - "Das straf" (dahs straf, 'That is strong/impressive').
  - "Oei" (ooy, 'Oops/Oh no').
  - "Toch?" (toh-ch, 'Right?').
  - "Man man man" (man man man, 'Boy oh boy' - expression of mild despair).
  - "Gene zever" (geh-ne zay-ver, 'No kidding').
  - "Op 't gemak" (op ut ge-mak, 'Easy/Relaxed').
  - "Komaan" (kom-aan, 'Come on').`,

  'nl-NL': `Speak in **Netherlandic Dutch** (The Netherlands).
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate.
  - **Placement:** Use "Nou" and "Dus" to bridge thoughts. Use "Hè?" for confirmation.
  - **Pronunciation:** Use the standard **Hard 'G'** (scraping throat sound).
  **NATIVE EXPRESSIONS:**
  - "Nou..." (now, 'Well...'), "Hè?" (heh, 'Huh?/Right?'), "Joh" (yoh, 'Dude/Really?').
  - "Dus..." (dus, 'So...'), "Zeg maar" (zeg mahr, 'so to speak' - filler).
  - "Eigenlijk" (eye-gen-lijk, 'Actually'), "Gewoon" (ge-woon, 'Just/Simply').
  - "Even" (ay-ven, 'Just/Quickly' - softening particle).
  - "Tjonge jonge" (tyong-uh yong-uh, 'Boy oh boy').
  - "Goh" (goh, 'Gosh'), "Lekker" (lek-ker, 'Nice/Tasty' - applies to everything).
  - "Doei" (doo-ee, 'Bye'), "Hoi" (hoy, 'Hi').`,

  'de-DE': `Speak in German. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate.
  - **Placement:** Use "Halt" or "Eben" in the middle of sentences to qualify statements. End with "Oder?" to seek agreement.
  **NATIVE EXPRESSIONS:**
  - "Halt" (halt, 'just/like'), "Eben" (eh-ben, 'precisely/just'), "Mal" (mal, softening particle).
  - "Doch" (dokh, 'on the contrary/but yes' - emphatic).
  - "Tja" (t-yah, 'well...' - resigned/thoughtful).
  - "Genau" (geh-now, 'Exactly' - use frequently for agreement).
  - "Sozusagen" (so-tzu-zah-gen, 'so to speak').
  - "Quasi" (kvah-zee, 'virtually/like').
  - "Oder?" (oh-dah, 'Right?' - at end of sentence).
  - "Na ja..." (nah yah, 'Well...'), "Ach so!" (akh so, 'I see!').
  - "Krass" (krass, 'Crazy/Intense'), "Alter" (al-tah, 'Dude').
  - "Geil" (gyle, 'Cool/Awesome'), "Blöd" (bluud, 'Stupid').
  - "Sowieso" (zo-vee-zo, 'Anyway').`,

  'it-IT': `Speak in Italian. Expressive and melodic. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  - **Placement:** Start with "Allora" or "Senti". Use "Cioè" to explain. End with "no?" or "capito?".
  **NATIVE EXPRESSIONS:**
  - "Allora..." (ahl-loh-rah, 'So/Well then'), "Cioè..." (cho-eh, 'I mean/Like').
  - "Tipo..." (tee-poh, 'Like'), "Insomma" (in-som-mah, 'All in all/Well').
  - "Dai!" (die, 'Come on!'), "Magari" (mah-gah-ree, 'I wish/Maybe').
  - "Boh" (boh, 'I don't know' - express uncertainty).
  - "Vabbè" (vah-beh, 'Alright/Whatever').
  - "Ecco" (eh-kko, 'Here/There/Exactly').
  - "Figurati" (fee-goo-rah-tee, 'Don't mention it/No way').
  - "Meno male" (meh-noh mah-leh, 'Thank goodness').
  - "Uffa" (oof-fah, 'Ugh' - annoyance), "Cavolo!" (kah-vo-loh, 'Damn!').
  - "Mamma mia!", "A posto" (ah pos-toh, 'All good').
  - "Senti..." (sen-tee, 'Listen...'), "Guarda..." (gwar-dah, 'Look...').
  - "Praticamente" (prah-tee-kah-men-teh, 'Basically').`,

  'pt-BR': `Speak in Brazilian Portuguese. Musical and rhythmic. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High. 
  - **Placement:** End sentences with "né?" or "tá?". Use "Tipo" and "Assim" to connect thoughts.
  **NATIVE EXPRESSIONS:**
  - "Né?" (neh, 'Right?' - very frequent), "Então..." (en-tow, 'So...').
  - "Tipo..." (chee-poh, 'Like'), "Assim..." (ah-seem, 'Like/So').
  - "Tá?" (tah, 'Okay?'), "Ai ai" (sigh).
  - "Nossa!" (noh-sah, 'Wow!'), "Pô!" (poh, 'Man!/Come on!').
  - "Cara" (kah-rah, 'Dude'), "Mano" (mah-noh, 'Bro').
  - "Eita!" (ay-tah, 'Whoa!'), "Uai" (why, 'Why/What' - Mineiro nuance).
  - "Meu" (meh-oo, 'Man'), "Beleza" (beh-leh-zah, 'Cool/Beauty').
  - "Legal" (leh-gow, 'Cool'), "Joia" (zhoy-ah, 'Great').
  - "Falou" (fah-low, 'Bye/Agreed'), "Imagina" (ee-mah-zhee-nah, 'No problem').
  - "Sabe?" (sah-beh, 'You know?'), "Velho" (veh-lyoh, 'Old man/Dude').
  - "Caraca" (kah-rah-kah, 'Damn'), "Bacana" (bah-kah-nah, 'Nice').`,

  'pt-PT': `Speak in European Portuguese. Faster, more closed vowels ("sh" sounds).
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate.
  - **Placement:** End with "pá". Use "Pois" for agreement.
  **NATIVE EXPRESSIONS:**
  - "Pá" (pah, 'Man/Hey' - emphatic filler).
  - "Pois" (poysh, 'Right/Exactly'), "Ora" (oh-rah, 'Well').
  - "Então" (en-tow, 'So'), "Pronto" (pron-toh, 'Okay/Done').
  - "Tipo" (tee-poh, 'Like'), "Está bem" (tah bayng, 'Okay').
  - "Giro" (zhee-roh, 'Cute/Cool'), "Fixe" (feesh, 'Cool').
  - "Bué" (bweh, 'Very/Lots'), "Gajo" (gah-zho, 'Guy').
  - "Chavalo" (sha-vah-loh, 'Kid'), "Olha" (oh-lyah, 'Look').
  - "Percebes?" (per-seh-besh, 'Understand?').
  - "Enfim" (en-feeng, 'Anyway'), "Portanto" (por-tan-toh, 'Therefore').`,

  'ru-RU': `Speak in Russian. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate to High.
  - **Placement:** Use "Nu" to start. "Koroche" to summarize.
  **NATIVE EXPRESSIONS:**
  - "Ну..." (noo, 'Well...'), "Короче..." (kah-roh-cheh, 'Briefly/So').
  - "Типа..." (tee-pah, 'Like'), "Вообще..." (vah-bsh-che, 'In general/Actually').
  - "Блин" (blin, 'Darn/Shoot'), "Да ладно" (dah lad-nah, 'Come on/Really?').
  - "Слушай..." (sloo-shy, 'Listen...'), "Понимаешь?" (pah-nee-my-esh, 'Understand?').
  - "Вот..." (voht, 'So/There'), "Значит" (znah-chit, 'It means').
  - "Так сказать" (tak skaz-at, 'So to speak').
  - "Прикинь" (pree-keen, 'Imagine that').
  - "Жесть" (zhest, 'Hardcore/Rough'), "Круто" (kroo-tah, 'Cool').
  - "Ясно" (yas-nah, 'Clear'), "Давай" (dah-vye, 'Come on/Bye').
  - "Е-мое" (yoh-mah-yoh, 'Oh my').`,

  'ja-JP': `Speak in Japanese. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High (Aizuchi).
  - **Placement:** Constant acknowledgement. Start with "Eto" or "Ano". End with "ne" or "yone".
  **NATIVE EXPRESSIONS:**
  - "Eto..." (eh-toh, 'Umm...'), "Ano..." (ah-noh, 'Umm...').
  - "Nanka..." (nan-kah, 'Like/Sort of'), "Yappari" (yap-pah-ree, 'As expected').
  - "Ma..." (mah, 'Well...'), "Sokka" (sok-kah, 'I see').
  - "Naruhodo" (nah-roo-ho-doh, 'I understand').
  - "Tashikani" (tah-she-kah-nee, 'Certainly/True').
  - "Uso!" (oo-so, 'No way/Lie!'), "Honto?" (hon-toh, 'Really?').
  - "Yabai" (yah-bye, 'Crazy/Bad/Good'), "Sugoi" (soo-goy, 'Amazing').
  - "Ne?" (neh, 'Right?'), "Desho?" (deh-shoh, 'Right?').
  - "Chotto..." (chot-toh, 'A little/Wait'), "Mottainai" (wasteful).
  - "Kawaii" (cute), "Otsukare" (good work), "Maji de?" (seriously?).`,

  'ko-KR': `Speak in Korean. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  - **Placement:** Use "Geu" or "Jeo" to hesitate. End with "Jiyo".
  **NATIVE EXPRESSIONS:**
  - "Injung" (agree), "Daebak" (awesome), "Heol" (hul, omg).
  - "Jinjja?" (really?), "Aigo" (sigh/oh my), "Geunikka" (exactly/I know right).
  - "Mwoya" (what's this?), "Otoke" (what to do), "Ara" (I know).
  - "Kaja" (let's go), "Fighting!" (hwaiting).
  - "Ssul" (story), "Jamkkanman" (wait a moment).
  - "Geurae" (sure/really), "Majayo" (that's right).`,

  'zh-CN': `Speak in Mandarin. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  - **Placement:** Use "Ne" or "A" at ends of sentences for tone.
  **NATIVE EXPRESSIONS:**
  - "Ne" (ne), "Ba" (ba, suggestion), "A" (ah, exclamation).
  - "En..." (ng, agreement), "Jiushi..." (jyo-shr, 'that is/just').
  - "Ranhou..." (ran-ho, 'then'), "Qishi..." (chee-shr, 'actually').
  - "Duibu" (right?), "Haode" (okay), "Meishi" (no problem).
  - "Zhen de ma?" (really?), "Wako" (wow), "Niudao" (awesome).
  - "Lihai" (impressive), "Ok la" (okay), "Aiya" (sigh).`,

  'hi-IN': `Speak in Hindi (Hinglish). 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate.
  - **Placement:** Use "Matlab" to explain. "Na" at the end.
  **NATIVE EXPRESSIONS:**
  - "Matlab..." (mut-lub, 'I mean...'), "Bas" (bus, 'Enough/Just').
  - "Aur kya" (or kya, 'What else/Exactly'), "Bhai" (b-high, 'Brother').
  - "Arre yaar" (oh friend/man), "Sahi hai" (sah-hee hay, 'That's right/Cool').
  - "Thik hai" (theek hay, 'Okay'), "Accha" (ah-cha, 'Okay/I see').
  - "Chalo" (chah-loh, 'Let's go/Okay then').
  - "Haanjii" (hahn-jee, 'Yes (polite)'), "Bilkul" (bil-kul, 'Absolutely').
  - "Pakka?" (puk-kah, 'Sure?'), "Kyun" (kyun, 'Why').
  - "Kya baat hai" (what a thing/wow), "Waah" (wow), "Arey" (hey).`,

  'ar-SA': `Speak in Modern Standard Arabic or Khaleeji. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  - **Placement:** Frequent invocations.
  **NATIVE EXPRESSIONS:**
  - "Ya'ni..." (ya-nee, 'I mean'), "Tab'an" (of course).
  - "Akid" (sure), "Mashallah" (wow), "Khalas" (enough/finished).
  - "Yallah" (let's go), "Shlonak?" (how are you?), "Habibi" (my love/friend).
  - "Wallah" (I swear/really), "Inshallah" (hopefully).`,

  'tr-TR': `Speak in Istanbul Turkish. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate.
  **NATIVE EXPRESSIONS:**
  - "Şey..." (shey, 'Thing/Umm'), "Yani..." (yah-nee, 'I mean').
  - "Tabii" (tah-bee, 'Of course'), "Zaten" (zah-ten, 'Anyway/Already').
  - "Aynen" (eye-nen, 'Exactly'), "Valla" (val-lah, 'Really/I swear').
  - "İşte..." (ish-teh, 'You know/That is'), "Hadi" (hah-dee, 'Come on').
  - "Tamam" (tah-mam, 'Okay'), "Efendim?" (eh-fen-dim, 'Sir/Ma'am/Excuse me?').
  - "Acaba" (wonder if), "Falan filan" (blah blah).`,

  'vi-VN': `Speak in Vietnamese. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  - **Placement:** End with particles "nhỉ", "cơ", "à".
  **NATIVE EXPRESSIONS:**
  - "À..." (ah, realization), "Ừ..." (uh, yes/agreement).
  - "Nhỉ?" (nyee, 'Right?'), "Đúng rồi" (doong roy, 'Correct').
  - "Vậy hả?" (vay ha, 'Is that so?'), "Trời ơi!" (troy oi, 'OMG').
  - "Cái gì cơ?" (kai zee kuh, 'What?'), "Thế à?" (theh ah, 'Really?').
  - "Ok", "Dạ" (zah, polite yes), "Thôi" (thoy, 'Stop/Enough'), "Ha" (right?).`,

  'th-TH': `Speak in Standard Thai. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Very High.
  - **Placement:** End every sentence with polite particles "Ka" or "Krub".
  **NATIVE EXPRESSIONS:**
  - "Ka" (female polite), "Krub" (male polite), "Na" (softening particle).
  - "Ching ror?" (really?), "Chai" (yes), "Mai chai" (no).
  - "Aroy" (delicious), "Sanuk" (fun), "Ok", "Aow" (oh/take).`,

  'id-ID': `Speak in Indonesian. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  - **Placement:** Use "Dong", "Deh", "Sih" at the end for emphasis.
  **NATIVE EXPRESSIONS:**
  - "Dong" (emphasis), "Sih" (actually/though), "Kan?" (right?).
  - "Deh" (urge), "Kok?" (why?), "Lho!" (surprise).
  - "Nih" (here), "Tuh" (there), "Banget" (very).
  - "Gitu" (like that), "Ya ampun" (oh my gosh), "Waduh" (oops).`,

  'ms-MY': `Speak in Malay. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  - **Placement:** Use "Lah" at the end of almost everything for emphasis.
  **NATIVE EXPRESSIONS:**
  - "Lah" (emphasis particle - use frequently), "Kan" (right).
  - "Pun" (also/even), "Kot" (maybe), "Meh" (come).
  - "Jom" (let's go), "Alamak!" (oops/omg), "Fuyoh!" (wow).
  - "Best gila" (crazy good), "Lepak" (hang out).`,

  'sv-SE': `Speak in Standard Swedish. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate.
  - **Placement:** "Liksom" and "Typ" as fillers. "Ju" for shared knowledge.
  **NATIVE EXPRESSIONS:**
  - "Typ..." (teep, 'like'), "Liksom..." (lik-som, 'like/sort of').
  - "Alltså..." (ahl-so, 'So/Actually'), "Ju" (yoo, 'as you know').
  - "Väl" (vel, 'surely'), "Ba" (bah, 'just/only' - colloquial).
  - "Oj!" (oy, 'Oops/Wow'), "Nämen!" (neh-men, 'Well hello/Look at that').
  - "Precis" (preh-sees, 'Exactly'), "Okej".`,

  'no-NO': `Speak in Standard Norwegian. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate.
  **NATIVE EXPRESSIONS:**
  - "Liksom..." (lik-som, 'like'), "Bare..." (bah-reh, 'just').
  - "Jo" (yoh, 'yes' to negative/on contrary), "Vel" (vel, 'well').
  - "Ikke sant?" (ik-keh sant, 'Right?'), "Akkurat" (ah-koo-rat, 'Exactly').
  - "Hæ?" (heh, 'Huh?'), "Uff" (oof, expression of dismay).`,

  'da-DK': `Speak in Danish. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate.
  **NATIVE EXPRESSIONS:**
  - "Altså..." (al-so, 'So/Well'), "Jo" (yoh, 'yes'), "Vel" (vel, 'surely').
  - "Nok" (nok, 'probably'), "Lige" (lee, 'just').
  - "Faktisk" (fak-tisk, 'actually'), "Jamen" (ya-men, 'yes but/well').
  - "Nånå" (noh-noh, 'well well'), "Hvad så" (va so, 'what up').`,

  'fi-FI': `Speak in Finnish. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate.
  **NATIVE EXPRESSIONS:**
  - "Niinku..." (neen-koo, 'like'), "Tota..." (toh-tah, 'umm/well').
  - "Siis..." (sees, 'so/I mean'), "Oikeesti?" (oy-kees-tee, 'Really?').
  - "Kato" (kah-toh, 'Look'), "Joo" (yoh, 'Yes'), "Nii" (nee, 'Yeah').
  - "Aijaa?" (eye-yah, 'Oh really?'), "Okei", "No niin" (noh neen, 'Well then/Alright' - multipurpose).`,

  'pl-PL': `Speak in Polish. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate.
  **NATIVE EXPRESSIONS:**
  - "Wiesz..." (vyesh, 'You know'), "No..." (noh, 'Well/Yeah').
  - "Przecież" (pshe-chiesh, 'After all'), "Właśnie" (vwa-shnie, 'Exactly').
  - "Okej", "Słuchaj..." (swoo-high, 'Listen...').
  - "Serio?" (seh-ryo, 'Seriously?'), "Tak jakby" (tak yak-by, 'Sort of').
  - "Kurczę" (koor-cheh, 'Darn').`,

  'uk-UA': `Speak in Ukrainian. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** Moderate.
  **NATIVE EXPRESSIONS:**
  - "Ну..." (noo, 'Well'), "Коротше..." (koh-rot-sheh, 'Briefly/So').
  - "Типу..." (ty-poo, 'Like'), "Власне..." (vlas-neh, 'Actually').
  - "Ось" (os, 'Here/So'), "Так би мовити" (so to speak).
  - "Слухай" (sloo-high, 'Listen'), "Зрозуміло" (zroh-zoo-mee-loh, 'Understood').`,

  'el-GR': `Speak in Modern Greek. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  **NATIVE EXPRESSIONS:**
  - "Re" (reh, 'Hey/Man' - very frequent), "Loipon" (lee-pon, 'So/Well').
  - "E..." (eh, hesitation), "Nai" (neh, 'Yes').
  - "Entaxei" (en-dax-ee, 'Okay'), "Malaka" (mah-lah-kah, 'Dude/Idiot' - context dependent).
  - "Ela!" (eh-lah, 'Come on/Hello'), "Opa!" (oops/cheers).`,

  'he-IL': `Speak in Modern Hebrew. 
  **CONVERSATIONAL PATTERN:**
  - **Frequency:** High.
  **NATIVE EXPRESSIONS:**
  - "Kze..." (k-zeh, 'Like'), "Ya'anu..." (ya-noo, 'Like/I mean').
  - "Davka" (dav-kah, 'Actually/Spitefully'), "Sababa" (sah-bah-bah, 'Cool').
  - "Yalla" (let's go), "Wallah" (really/wow), "Nu" (come on).
  - "Achla" (akh-lah, 'Great'), "Bemet?" (beh-met, 'Really?').`
};
