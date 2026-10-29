---
title: "Natya Partha — Bharatanatyam Knowledge Base"
document_id: bharatanatyam_knowledge_base
version: 0.2.0 (research-revised draft)
date: 2026-10-11
language: English (with Sanskrit and Tamil terms in transliteration)
intended_use: Primary knowledge source for a Retrieval-Augmented Generation (RAG) chatbot
status: DRAFT — cross-checked against web sources; NOT yet reviewed by a guru or scholar
---

# Natya Partha — Bharatanatyam Knowledge Base

## 0. Document Metadata, Scope, and Limitations

### 0.1 Purpose
This document is the foundational knowledge source for **Natya Partha**, a chatbot that answers questions about Bharatanatyam, a classical dance form of South India. It is written so that it can be split into chunks, embedded, and retrieved by a RAG system.

### 0.2 Scope
It covers history, theory, technique, repertoire, music, costume, learning, safety, and terminology at a beginner-to-intermediate level, plus 50 FAQs and a glossary.

### 0.3 How this version was prepared (honest statement)
- Version 0.2.0 revises the first draft after the key claims were **cross-checked against web sources on 2026-10-11**: translations and summaries of the Natya Shastra and Abhinaya Darpana, dance-history articles, institutional documents, teaching syllabi, and music-theory references.
- **Many of the web sources are secondary** (magazine articles, teaching sites, encyclopedia-style summaries). Primary texts were seen only through excerpts. A claim marked as cross-checked means that several independent sources agreed, **not** that it was confirmed against a primary text page by page.
- **No guru or scholar has reviewed this document.** It must be reviewed by a qualified Bharatanatyam guru before public release.
- Where sources disagreed, or only weak sources were found, the text says so or the claim was removed.
- Exact finger positions of mudras are given **only** for Pataka and Tripataka, where independent sources agreed. All other finger positions must be learned from a guru and checked against a translation.

### 0.4 Evidence labels
| Label | Meaning |
|---|---|
| **[Documented]** | Supported by inscriptions, dated texts, legislation, institutional records, or well-established scholarship. |
| **[Textual]** | What a classical text states. It does not mean modern practice follows it exactly. |
| **[Traditional]** | Accepted in community or oral tradition; may not be independently documented. |
| **[Convention]** | Common modern teaching practice that varies by guru, bani, or institution. |
| **[Interpretation]** | Scholarly or artistic interpretation; reasonable people differ. |
| **[Uncertain]** | Not reliably established. |

### 0.5 Verification tags
| Tag | Meaning |
|---|---|
| **[V2]** | Agreed by two or more independent sources found during the 2026-10-11 check. |
| **[V1]** | Found in only one source, or only in a weak source. Treat with caution. |
| **[G]** | General knowledge that was not re-checked. Needs review. |

### 0.6 Spelling
Sanskrit and Tamil terms have many valid English spellings (for example Adavu, Hasta/Hastha, Salangai/Ghungroo/Gejje, Alokita/Alolita). This document uses one primary spelling and lists alternatives where helpful.

### 0.7 Limitations
- It is not exhaustive. It is an expandable foundation.
- It is not a substitute for a guru. Physical technique must be learned in person.
- It does not reproduce copyrighted translations or syllabi in full.
- Style descriptions (banis) and stories are generalisations.

---

## 1. Introduction to Bharatanatyam

### 1.1 Definition
**Bharatanatyam** is a classical dance form of South India, most closely associated with Tamil Nadu. It combines rhythmic footwork and geometric body lines (**nritta**), expressive interpretation of poetry through gesture and facial expression (**nritya**), and dramatic enactment (**natya**), set to Carnatic music. **[Convention] [V2]**

It is characterised by:
- A grounded, bent-knee base posture called **Araimandi** (also Aramandi or Ardhamandali).
- Precise geometric lines of the arms, torso, and legs.
- A vocabulary of hand gestures (**hastas / mudras**) and head, neck, and eye movements.
- Rhythmic footwork articulated with spoken syllables.
- A repertoire of devotional, poetic, and narrative compositions.

### 1.2 Recognition
The Sangeet Natak Akademi recognises **eight** classical dance forms: Bharatanatyam, Kathak, Kathakali, Kuchipudi, Manipuri, Mohiniyattam, Odissi, and Sattriya. Sattriya was added in 2000. Chhau is a separate case whose status is debated. **[Documented] [V2]**

### 1.3 Historical development: what is documented
- **Temple dancers in the Chola period.** Accounts of the Brihadisvara temple at Thanjavur say that the Chola king Rajaraja appointed about 400 dancers to the temple. The details of their repertoire are not known. **[Documented / Traditional detail] [V1]**
- **Sculptural evidence.** The Brihadisvara temple has 108 projecting blocks prepared for carvings of the nritta *karanas* (dance poses), but only 81 were carved. At Chidambaram, the gopura built in the 12th century carries sculptures of the 108 karanas with inscribed verses from the Natya Shastra. These show a conscious effort to represent Natya Shastra dance poses in the Chola period and later. They do not record how dance was performed. **[Documented] [V1: Indira Gandhi National Centre for the Arts]**
- **Nayaka and Maratha courts.** Under the Maratha rulers of Thanjavur, especially **Serfoji II** and **Tulaja I**, dance compositions and the repertoire were developed and systematised. Their own compositions are seen as a link between the Nayaka-period repertoire and the 19th-century repertoire. **[Documented] [V2]**
- **The Thanjavur Quartet.** Four brothers, **Chinnayya (1802–1856), Ponnayya (1804–1864), Sivanandam (1808–1863), and Vadivelu (1810–1845)**, were court musicians and nattuvanars who served at Thanjavur under Serfoji II, and later at Mysore and Travancore. They were disciples of Muthuswami Dikshitar and are widely credited with systematising the **margam**, the sequence of items in a Bharatanatyam recital. **[Documented / Interpretation] [V2]**
  - Caution: A historian interviewed by Sahapedia warned against the belief that only one family, the Quartet's, shaped Bharatanatyam. Many other nattuvanar families and courts contributed.
- **Social reform and legislation.** In the early 20th century, the anti-nautch movement and the campaign of Dr. Muthulakshmi Reddy opposed the devadasi system. The **Madras Devadasis (Prevention of Dedication) Act of 1947** ended the dedication of girls to temples. **[Documented] [V2]**
- **Renaming and revival.** In 1932, at the Madras Music Academy, **E. Krishna Iyer** proposed a resolution to rename the dance "Bharatanatyam". In December 1935, **Rukmini Devi Arundale (1904–1986)** performed in public, one of the first non-devadasi women to do so. On **6 January 1936** she founded what began as the International Centre for Arts, which was renamed **Kalakshetra** in 1939. The Kalakshetra Foundation Act of 1993 declared it an institution of national importance. **[Documented] [V2]**
- **A contested history.** Scholars and critics debate whether the revival *preserved* the art or *appropriated and sanitised* it, because it shifted the dance from devadasi and Isai Vellalar hereditary families to a new, largely upper-caste middle-class audience. Reasonable people disagree, and the chatbot should present both views. **[Interpretation] [V2]**

### 1.4 What is traditional rather than documented
- Accounts that trace Bharatanatyam in an unbroken line from the Natya Shastra to today are traditional and symbolic. Modern Bharatanatyam is a continuation, adaptation, and reconstruction. **[Interpretation]**
- A magazine article states that the term "Bharatanatyam" has existed since at least the 15th century. This was found in only one source, and the exact early usage is **[Uncertain]**. The widely documented adoption of the name as the standard term happened in the 20th century.

### 1.5 Historical names
Before the 20th century the dance was known by other names, commonly **Sadir** (also Sadir Attam) and **Dasi Attam**. **[Documented] [V2]**

A popular explanation of the name splits it into *bha* (bhava), *ra* (raga), *ta* (tala), and *natyam*. This is a **[Traditional]** folk etymology, not accepted by all scholars. Another reading links the name to Bharata, the traditional author of the Natya Shastra.

### 1.6 Cultural significance and contemporary practice
- Performed as devotional art, as a concert form, and as a vehicle for storytelling.
- Closely connected to Tamil, Telugu, Sanskrit, and other poetry and to Carnatic music.
- Studied worldwide, including in the Indian diaspora.
- A first full solo recital is called an **Arangetram** (also Rangapravesham).
- Contemporary dancers perform both traditional repertoire and new choreography.

### 1.7 Related South Indian forms
**Kuchipudi** (Andhra Pradesh), **Mohiniyattam** and **Kathakali** (Kerala), and **Bhagavata Mela** (dance-dramas in Tamil Nadu villages) are separate traditions. They should not be confused with Bharatanatyam. **[G]**

---

## 2. Historical Sources and Theoretical Foundations

### 2.1 Natya Shastra
- A Sanskrit treatise on the performing arts, attributed by tradition to the sage **Bharata**. **[Traditional] [V2]**
- The most studied version has **36 chapters and about 6,000 verses**. Manuscript versions differ in chapter titles and some content. **[Textual] [V2]**
- **Date and authorship are uncertain.** The first complete version is commonly dated between **200 BCE and 200 CE**, and estimates range from about 500 BCE to 500 CE. The work may have grown over time and may have more than one author. **[Uncertain / Interpretation] [V2]**
- Contents include the origin of drama, the theatre building, rasa and bhava (chapters 6–7 in the commonly studied version), the four abhinayas, body movements, gestures, gaits, dramatic structure, music and rhythm, and the **108 karanas**. **[Textual] [V2]**
- The most studied commentary is the **Abhinavabharati** by **Abhinavagupta** (about 10th–11th century CE). **[Documented] [V2]**
- It addresses Sanskrit theatre as a whole and is **not** a manual of Bharatanatyam alone.

### 2.2 Abhinaya Darpana
- A Sanskrit text, often translated as "The Mirror of Gesture", attributed by tradition to **Nandikeshvara**. **[Traditional]**
- Its date and authorship are uncertain. Some popular sources give the 5th century CE, which is not reliably established. **[Uncertain]**
- It is widely used in dance teaching for its lists of hand gestures and head, neck, and eye movements, and for rules of performance. It treats **angika abhinaya** in detail. **[Textual] [V2]**
- Its hand-gesture lists differ from those in the Natya Shastra (see Section 6.2).
- English translations include *The Mirror of Gesture* by Ananda Coomaraswamy and Gopala Kristnayya Duggirala (1917) and *Nandikesvara's Abhinayadarpanam* by Manomohan Ghosh (second edition 1957). **[Documented] [V2]**

### 2.3 Other sources
- The **Bharatarnava**, associated with Nandikeshvara, lists a different set of single-hand gestures (27 in one description). **[Textual] [V1]**
- Temple sculpture, inscriptions, and Tamil literature also inform history. **[Documented]**
- Regional treatises, such as works from the Maratha court of Thanjavur, show how dance practice developed. **[Documented] [V1]**

### 2.4 Scope and limits of these texts
1. They describe a **textual and theoretical framework**, not necessarily how dancers performed at any time.
2. Modern Bharatanatyam technique, especially adavus and the structure of the margam, **cannot be said to descend directly from a single ancient text**.
3. Manuscripts and translations vary, so counts, names, and meanings differ between texts.
4. Modern gurus combine textual vocabulary with inherited teaching practice.

> **Guideline for the chatbot:** If asked "Is this exactly what the Natya Shastra says?", answer that it is a foundational source but that modern Bharatanatyam is a developed tradition that cannot be matched item by item.

---

## 3. The Four Types of Abhinaya

**Abhinaya** is the art of expression, of communicating bhava to produce rasa in the audience. The Natya Shastra and later texts describe four types. **[Textual] [V2]**

| Type | Meaning | Means of expression | Example |
|---|---|---|---|
| **Angika** | Of the body | Hands, head, neck, eyes, face, torso, legs, gait | Showing "peacock" with a hand gesture and neck movement |
| **Vachika** | Of speech | Words, song, recitation | The singer's lyrics; the nattuvanar's recited syllables |
| **Aharya** | Of adornment | Costume, jewellery, makeup, props, stage decoration | Costume and makeup that set the character and mood |
| **Sattvika** | Of inner state | Evoking and showing internal emotion, including involuntary responses such as tears or trembling | A dancer conveying devotion through breath, eyes, and stillness |

### 3.1 Angika abhinaya
Includes hand gestures (hastas), head movements (*shiro bheda*), neck movements (*greeva bheda*), eye movements (*drishti bheda*), facial expressions, and body and leg movements.

### 3.2 Vachika abhinaya
In Bharatanatyam the dancer usually does not speak. The words are delivered by the singer, and the dancer interprets them. The syllables recited by the nattuvanar are also a vocal element.

### 3.3 Aharya abhinaya
Costume and makeup identify the performer as a dancer and can support character and mood. See Section 10.

### 3.4 Sattvika abhinaya
Considered the most subtle. It depends on the dancer's genuine emotional absorption. Natya Shastra theory says the abhinayas (angika, vachika, aharya) are used to evoke the sattvika bhavas and vyabhichari bhavas, which bring forth the dominant emotion and then rasa. **[Textual] [V2]**

### 3.5 How they work together
In one line of a padam: the singer delivers the words (vachika), the dancer's hands, eyes, and body interpret them (angika), costume and stage set the scene (aharya), and the dancer's inner feeling gives life to it (sattvika).

---

## 4. Nritta, Nritya, and Natya

| Term | Meaning | Key features |
|---|---|---|
| **Nritta** | Pure dance | Rhythm, movement, and line for their own beauty; no specific meaning or story |
| **Nritya** | Expressive dance | Movement combined with abhinaya to interpret the words of a song |
| **Natya** | Dramatic dance | Enactment of characters and narrative; closest to theatre |

**[Textual / Convention] [V2]** Authors draw the boundaries slightly differently, and some student notes define these terms loosely. Use the table as a general framework.

### 4.1 Examples in Bharatanatyam
- **Nritta:** strings of adavus formed into *jatis*; Alarippu; Jatiswaram; the rhythmic sections of a Tillana.
- **Nritya:** a Padam, where each line of the lyric is interpreted.
- **Natya:** a dance-drama in which a dancer portrays several characters.

### 4.2 How they combine
A Varnam typically alternates nritta and nritya sections. A dance-drama may contain all three. **[Convention]**

---

## 5. Adavus and Foundational Technique

### 5.1 What is an adavu?
An **adavu** is a basic unit of Bharatanatyam movement, combining a foot position, leg and body line, and hand position with rhythmic syllables. Adavus are linked into longer sequences called **jatis** or **korvais**. A korvai ends with a **teermanam**, a concluding pattern that fits into the tala cycle. **[Convention] [V2]**

### 5.2 Important caveat
> **Adavu names, groupings, syllables, and teaching order vary between banis, gurus, and institutions.** No single syllabus is universal.

Evidence of variation found in the sources:
- One Bharatanatyam teacher describes **thirteen groups of adavus containing 36 to 52 adavus**, and says the number depends on the guru's way of teaching. **[V1]**
- Another source says there are about 120 adavus across 12 families, while another describes eighteen varieties. These counts do not agree. **[V1]**
- Syllables for the same family differ between sources. For example, the Natta adavu is given as "Tai yum tat taa" in one syllabus and as "Ta tai tai ta" in another description.

### 5.3 Commonly taught adavu families
| Family | General idea |
|---|---|
| **Tatta adavu** | Striking the floor flat with the feet in Araimandi. Often the first family taught. Example syllables in two sources: "tai ya tai". |
| **Natta adavu** | Stretching or extending the leg outward. |
| **Kuditta (Kudittu) Mettu adavu** | Jumping on the toes and striking the heels. |
| **Metta / Tatti Metti (Tattimettu) adavu** | Combining stamping and beating movements. Spellings differ. |
| **Visharu adavu** | Swinging or "whirling" movements. |
| **Sarikkal / Sarukkal adavu** | Sliding or gliding movements. |
| **Mandi adavu** | Movements using the full-sitting position (Muzhumandi). |
| **Teermanam (Tirmanam) adavu** | Concluding patterns used to end jatis. |
| **Others** | Examples named in sources: Paichal/Paikkal, Sutral (whirling), Mei, Korvai adavus, Kartari. |

Do not treat the above as a complete or universal list.

### 5.4 Hand gestures used in adavus
Adavus use "nritta hastas", often called "beauty hands". One research paper lists twelve hasta gestures commonly used in adavus: Pataka, Tripataka, Ardhachandra, Kapittha, Katakamukha, Suchi, Mushti, Mrigashirsha, Alapadma, Kartarimukha, Shikhara, and Dola. This is one description, not a universal rule. **[V1]**

### 5.5 Posture and alignment
- **Araimandi (Ardhamandali):** half-sitting posture. The knees bend outward over the toes, the heels are together or close, and the spine and chest stay upright. **[Convention] [V2]**
- **Muzhumandi:** the full-sitting posture used in some adavus.
- Three kinds of leg support, called *mandalas*, are commonly described.
- Keep the knees aligned with the toes. Do not let them collapse inward.

### 5.6 Footwork and rhythm
- The feet articulate the rhythm with flat foot, ball, and heel contacts.
- Dancers recite *solkattu* (syllables) and keep the tala with hand claps.
- Practise at several tempos (slow, medium, fast).

### 5.7 Practice principles
1. Warm up first.
2. Practise slowly with accurate form before speeding up.
3. Use a recording or metronome to build timing.
4. Record yourself and review.
5. Short daily practice is generally more effective than rare long sessions.
6. Rest. Stop if there is pain.

---

## 6. Mudras and Hand Gestures (Hastas)

### 6.1 Terms
**Hasta** means "hand". **Mudra** is the common everyday word for a gesture. In dance texts, the term hasta is preferred.

### 6.2 What the texts count
Different texts count the gestures differently. **[Textual] [V2]**

| Source | Single-hand (asamyuta) | Combined (samyuta) | Dance hands (nritta hasta) |
|---|---|---|---|
| **Natya Shastra** | commonly stated as 24 | 13 | 30 |
| **Abhinaya Darpana** | 28 | 24 | 13 |
| **Bharatarnava** (as described in one source) | 27 | — | — |

- The 13 samyuta hastas of the Natya Shastra, in one English translation, are: Anjali, Kapota, Karkata, Svastika, Katakavardhamanaka, Utsanga, Nishadha, Dola, Pushpaputa, Makara, Gajadanta, Avahittha, and Vardhamanaka.
- The 30 nritta hastas in the same translation are: Chaturasra, Udvritta, Talamukha, Svastika, Viprakirna, Aralakhatakamukha, Aviddhavakra, Suchyasya, Recita, Ardharecita, Uttanavanchita, Pallava, Nitamba, Keshabandha, Lata, Karihasta, Pakshavanchitaka, Pakshapradyotaka, Garudapaksha, Dandapaksha, Urdhvamandali, Parshvamandali, Uromandali, Urahparshvardhamandali, Mushtikasvastika, Nalinipadmakosha, Alapallava, Ulbana, Lalita, and Valita.
- Some modern teachers add four more single-hand gestures to the 28: Kataka, Vyaghra (Vyagraha), Ardhasuchi, and Palli. India's national school textbook also mentions "4 more" gestures. **[Convention] [V2]**
- Therefore a question such as "How many mudras are there?" has no single answer. The usual answer in Bharatanatyam teaching is **28 single-hand and 24 combined-hand gestures** from Abhinaya Darpana.

### 6.3 Cautions
- The meaning of a mudra depends on **context, movement, eye direction, facial expression, and tradition**.
- One mudra can express many ideas, and one idea can be shown by several mudras.
- The "uses" below (called *viniyoga*) are **commonly cited, illustrative examples**. They were compiled from summaries of a 1957 Marg article and teaching sources, and they are not exhaustive or definitive. They must be checked against a translation and a guru.
- **Finger positions are intentionally not described** except for the two gestures in 6.4.

### 6.4 Finger positions confirmed by more than one source
- **Pataka:** the four fingers are extended and held close together (the "flag"); the thumb is bent. **[V2]**
- **Tripataka:** formed like Pataka, but the ring finger is bent. **[V2]**

All other gestures must be taught by a guru.

### 6.5 Asamyuta Hastas (single-hand), as listed in Abhinaya Darpana
| # | Name | Gloss | Commonly cited uses (illustrative) |
|---|---|---|---|
| 1 | Pataka | flag | beginning a dance, forest, river, cloud, night, blessing or forbidding, horse |
| 2 | Tripataka | three-part flag | tree, crown, arrow, thunderbolt (vajra), Indra, union |
| 3 | Ardhapataka | half-flag | tender leaves, riverbank, temple tower, horn, knife |
| 4 | Kartarimukha | scissors-face | separation of man and woman, opposition, lightning, corner of the eye |
| 5 | Mayura | peacock | peacock, bird of omen, stroking hair, wiping tears |
| 6 | Ardhachandra | half-moon | half-moon, spear, platter, prayer, greeting |
| 7 | Arala | bent | drinking (for example poison or nectar) |
| 8 | Shukatunda | parrot's beak | shooting an arrow, throwing a spear |
| 9 | Mushti | closed fist | steadiness, holding, grasping hair, wrestling |
| 10 | Shikhara | peak or spire | God of Love, bow, pillar, silence, question, husband or lover |
| 11 | Kapittha | wood apple | Lakshmi, Saraswati, holding cymbals, milking a cow |
| 12 | Katakamukha | opening of a bracelet | picking flowers, holding a garland, drawing a bow, glancing |
| 13 | Suchi | needle | the number one, the sun, a city, the world, threatening |
| 14 | Chandrakala | crescent-moon digit | crescent moon |
| 15 | Padmakosha | lotus bud | lotus bud, fruit, round objects |
| 16 | Sarpashirsha | snake-head | giving water to gods and sages, slowness |
| 17 | Mrigashirsha | deer-head | woman, calling the beloved, cheek, fear |
| 18 | Simhamukha | lion-face | elephant, lotus, coral, pearl, garland |
| 19 | Kangula | (tail; also a small fruit) | small fruit, water lily |
| 20 | Alapadma (also Sola-padma) | fully blossomed lotus | longing for the beloved, mirror, full moon, village, praise |
| 21 | Chatura | (clever; square) | musk, "a little", breaking into pieces |
| 22 | Bhramara | bee | bee, parrot, cuckoo, union |
| 23 | Hamsasya | swan-beak | tying the marriage thread, painting, drop of water |
| 24 | Hamsapaksha | swan-wing | arranging, building a bridge, the number six |
| 25 | Sandamsha | tongs or pincers (gloss varies) | offering, worship, the number five (as cited) |
| 26 | Mukula | bud | bud, eating |
| 27 | Tamrachuda | rooster | crane, camel, writing or drawing |
| 28 | Trishula | trident | the number three |

Spellings vary (for example Kapittha/Kapitta, Hamsapaksha/Hamsapakshika, Hamsasya/Hamsasye). **[V2 for the list and names; V1–V2 for uses]**

### 6.6 Samyuta Hastas (combined-hand), as listed in Abhinaya Darpana
| # | Name | Commonly cited uses (illustrative) |
|---|---|---|
| 1 | Anjali | salutation, offering, greeting a deity |
| 2 | Kapota | dove; courteous agreement |
| 3 | Karkata | crab; coming together, stretching the limbs |
| 4 | Svastika | crossed arms |
| 5 | Dola | swing; trembling |
| 6 | Pushpaputa | handful of flowers; offering |
| 7 | Utsanga | embrace |
| 8 | Shivalinga | Shiva linga |
| 9 | Katakavardhana | chain; worship; coronation |
| 10 | Kartari-svastika | crossed scissors-shaped hands |
| 11 | Shakata | cart, carriage |
| 12 | Shankha | conch |
| 13 | Chakra | wheel, discus |
| 14 | Samputa | casket, covering |
| 15 | Pasha | noose, ropes |
| 16 | Kilaka | bond; affection; conversation |
| 17 | Matsya | fish |
| 18 | Kurma | tortoise |
| 19 | Varaha | boar |
| 20 | Garuda | Garuda, flying birds |
| 21 | Nagabandha | entwined snakes |
| 22 | Khatva | cot, bed, palanquin |
| 23 | Bherunda | pair of birds |
| 24 | Avahitta | concealment; dissimulation |

Some web lists show only 23 gestures because they omit Avahitta. Abhinaya Darpana traditions count 24. **[V2]**

### 6.7 Head, neck, and eye movements (Abhinaya Darpana)
| Category | Names |
|---|---|
| **Shiro bheda** (head, 9) | Sama, Udvahita, Adhomukha, Alolita, Dhuta, Kampita, Paravritta, Utkshipta, Parivahita |
| **Greeva bheda** (neck, 4) | Sundari, Tiraschina, Parivartita, Prakampita |
| **Drishti bheda** (eyes, 8) | Sama, Alokita (also spelled Alolita), Sachi, Pralokita, Nimilita, Ullokita, Anuvritta, Avalokita |

**[V2 for names; spelling varies.]** Explanations of each movement vary in teaching sources and are not given here.

### 6.8 "Where the hand goes, the eyes follow"
A well-known teaching maxim runs: where the hand is, the eyes follow; where the eyes go, the mind follows; where the mind is, the feeling is; where the feeling is, the rasa arises. Sources attribute it variously to the Natya Shastra or to the dance-teaching tradition, so it should be treated as a commonly cited teaching principle rather than a verified verse reference. **[Interpretation] [V2 for existence; attribution uncertain]**

---

## 7. Rasa and Bhava

### 7.1 Definitions
- **Bhava** is an emotional state portrayed by the performer.
- **Rasa** is the aesthetic experience ("flavour") that the audience savours.
- In simple terms: the performer presents bhava, and the audience relishes rasa. **[Textual / Interpretation] [V2]**

### 7.2 Rasa theory in brief
The **Rasa Sutra**, attributed to Bharata, says in effect that rasa arises from the combination of **vibhava** (causes), **anubhava** (visible effects), and **vyabhichari bhavas** (transitory emotions). **[Textual] [V2]** Scholars after Bharata, notably Abhinavagupta, developed the theory. **[Documented] [V2]**

### 7.3 The rasas
The Natya Shastra discusses **eight** rasas. A **ninth, Shanta**, was added by later authors and is strongly associated with Abhinavagupta and the earlier theorist Anandavardhana. **[Textual / Documented] [V2]**

| Rasa | Gloss | Sthayi bhava (dominant emotion) |
|---|---|---|
| Shringara | erotic, love, beauty | Rati (love) |
| Hasya | comic | Hasa (laughter, mirth) |
| Karuna | pathos, compassion | Shoka (sorrow) |
| Raudra | furious | Krodha (anger) |
| Veera | heroic | Utsaha (energy, courage) |
| Bhayanaka | terrible, fearful | Bhaya (fear) |
| Bibhatsa | odious, disgust | Jugupsa (aversion) |
| Adbhuta | marvellous | Vismaya (wonder) |
| Shanta (later addition) | peace, tranquillity | Shama or Nirveda (naming varies) |

### 7.4 The three kinds of bhava
The Natya Shastra describes **49 bhavas** in three groups. **[Textual] [V2]**
1. **Sthayi bhavas (8):** stable, dominant emotions (above).
2. **Vyabhichari or Sanchari bhavas (33):** transitory emotions that pass through the dominant emotion, for example anxiety, joy, shame, or fatigue.
3. **Sattvika bhavas (8):** involuntary physical expressions of emotion: stillness (*stambha*), perspiration (*sveda*), goosebumps (*romancha*), change of voice (*svarabheda*), trembling (*vepathu*), change of colour (*vaivarnya*), tears (*ashru*), and fainting or loss of awareness (*pralaya*).

### 7.5 In performance
A dancer may show Shringara with a longing look and a delicate gesture, while transitory emotions such as shyness or anxiety colour the line. Assigning a piece to one rasa is often an interpretive decision. **[Interpretation]**

---

## 8. Bharatanatyam Repertoire and Performance Structure

### 8.1 Important caveat
> The sequence below is the commonly taught **margam** ("path"). It is **not** the only structure. Performers vary the order and add or omit items. Do not describe every performance as following an identical sequence.

### 8.2 Origin of the margam
The Thanjavur Quartet are widely credited with systematising the margam in the early 19th century. The Maratha rulers Serfoji II and Tulaja I also contributed compositions that link the earlier and later repertoire. **[Documented / Interpretation] [V2]**

### 8.3 A traditional order described by Balasaraswati
In an address given in 1976, the dancer **T. Balasaraswati** described what she called the traditional order of a recital: **alarippu, jatiswaram, shabdam, varnam, padams, tillana, and a closing shloka**. She compared the recital to the structure of a temple, moving from the outer gateway (alarippu) through the halls (jatiswaram, shabdam) to the sanctum (varnam), and the padam to the quiet of the inner sanctum, and the tillana to the lively close of the ritual. **[Documented] [V2]**

### 8.4 Items
| Item | Typical character | Emphasis |
|---|---|---|
| **Pushpanjali / Todaya Mangalam** (in some traditions) | Opening offering and invocation; dancer salutes the stage, guru, musicians, audience | Mostly nritta |
| **Alarippu** | "Blossoming"; pure rhythm; no lyrics; warms the body and focuses the mind | Nritta |
| **Jatiswaram** | Melody (swaras) set to dance syllables; no lyrics | Nritta |
| **Shabdam** | The first item with words, often in praise of a deity or patron; introduces abhinaya | Nritta + some nritya |
| **Varnam** | Central and longest item (often 30–45 minutes or more); alternates rhythmic and expressive sections | Nritta + nritya |
| **Padam** | Slow, intimate interpretation of a lyric, often of the heroine's longing | Nritya |
| **Javali** | Lighter, faster love lyric | Nritya |
| **Tillana** | Rhythmic, joyful, sculptural finale with little text | Nritta |
| **Shloka / Mangalam** | Closing devotional verse or benediction | Concluding |

**[Convention] [V2 for the items and their roles]**

### 8.5 Notes
- **Alarippu.** The name is often explained as "blossoming". **[V2]**
- **Varnam.** Often described as the heart of the recital. Sections vary by composition. Many gurus shorten the varnam. The Thanjavur Quartet's *pada varnams* are highly regarded in the Pandanallur tradition. **[V2]**
- **Padam and Javali.** Many padams explore the longing of a heroine (nayika) for a hero (nayaka), often read as the soul's longing for the divine. **[Interpretation]**
- **Other items.** Shlokam, keertanam, kriti, ashtapadi, devaranama, Tiruppugazh, dance-dramas, and Kuravanji may also be performed.
- Some dancers and critics note that many contemporary dancers now shorten or leave out parts of the margam. **[V1]**

### 8.6 Arangetram
A debut recital often contains the major margam items, but the exact programme depends on the guru's tradition and the dancer's preparation.

---

## 9. Music, Rhythm, and Musical Terminology

### 9.1 Carnatic music and Bharatanatyam
Bharatanatyam is accompanied by **Carnatic music**, the classical music tradition of South India. Movements follow the melody (*raga*), rhythm (*tala*), and lyrics (*sahitya*).

### 9.2 Core terms
| Term | Meaning |
|---|---|
| **Raga** | Melodic framework |
| **Tala** | A repeating rhythmic cycle marked by claps, finger counts, and waves |
| **Laya** | Tempo or pulse |
| **Jati** | (1) A dance phrase of rhythmic syllables. (2) In tala theory, one of five classes determining the length of the laghu |
| **Solkattu / Sollukattu** | Rhythmic syllables |
| **Korvai** | A rhythmic composition built from patterns and ending with a teermanam |
| **Teermanam** | A concluding pattern |
| **Sahitya** | Lyrics |
| **Swara** | Musical notes (sa, ri, ga, ma, pa, dha, ni) |
| **Pallavi, Anupallavi, Charanam** | Typical sections of a composition |
| **Nattuvangam** | Conducting the dance with cymbals and recited syllables |

### 9.3 Tala basics
**[V2]**
- Each tala is built from three kinds of units (*angas*): the **laghu** (a clap followed by finger counts), the **drutam** (a clap and a wave, two beats), and the **anudrutam** (a single clap).
- Carnatic music has **seven basic tala families** (Dhruva, Matya, Rupaka, Jhampa, Triputa, Ata, Eka). Each can use one of **five jatis** that set the laghu length: **Tisra (3), Chatusra (4), Khanda (5), Misra (7), Sankeerna (9)**. This gives **35 talas**. The length of these talas ranges from 3 to 29 aksharas.
- Each tala can also be performed in five *gatis* (subdivision patterns), giving 175 combinations.
- **Adi tala** is the most common. It is Chatusra jati Triputa tala: a laghu of four beats followed by two drutams, giving **8 beats** (4 + 2 + 2).
- Other commonly used talas include Rupaka, Khanda Chapu (5 beats), and Misra Chapu (7 beats).

### 9.4 Who accompanies a performance?
| Role | Function |
|---|---|
| **Nattuvanar** | Conducts; recites the syllables and plays the cymbals (*talam*); often the dancer's guru |
| **Vocalist** | Sings the compositions |
| **Mridangam player** | Percussion; follows the dance syllables and accents the footwork |
| **Violinist (or flute, veena)** | Melodic accompaniment |
| **Others** | Sometimes tambura, ghatam, or morsing |

Live accompaniment is considered ideal in traditional practice. Recorded music is also widely used. **[Convention]**

---

## 10. Costumes, Jewellery, Makeup, and Stage Presentation

**Verification:** The names of ornaments below were found in several costume and jewellery sources, many of them commercial. They show consistent vocabulary but are not scholarly sources. **[V1–V2]**

### 10.1 Costume
There is **no single universal costume**. Common styles are:
- **Pleated-fan costume:** a silk sari or stitched costume with a fan of pleats at the front that opens in Araimandi.
- **Stitched pyjama-style costume** with a pleated fan.
- **Skirt (pavadai) style**, often for younger dancers.

Colours and designs are chosen by the guru or dancer. The Kalakshetra tradition is often described as using simpler designs, while other schools use richer ones. These are generalisations. **[Convention]**

### 10.2 Temple jewellery
Temple jewellery is the traditional South Indian style originally made to adorn temple deities and later adapted for dancers. **[V2]** Pieces commonly named include:
- **Head set (thalaisaman):** *Nethichutti* (forehead ornament), *Chandra–Surya* (moon and sun ornaments), *Rakodi / Rakkodi* (bun ornament), *Jada billa* (braid ornament), and *Kunjalam* (tassel at the end of the braid).
- **Ears:** *Jimikki* (bell-shaped earrings) and *Mattal* (chains connecting earrings to the hair).
- **Neck:** necklaces, chokers, long chains.
- **Waist:** *Oddiyanam / Vaddanam* (waist belt).
- **Arms:** *Vanki* (armlet) and bangles.
- **Nose ornaments** (for example *mookuthi*) are also used in some sets.

Names vary regionally. A full set often has 10–15 pieces. **[V2]**

### 10.3 Ankle bells
**Salangai** (Tamil), **Ghungroo** (widely used), and **Gejje** (Kannada). The number of bells and arrangement vary. Many households treat the bells with reverence. **[Traditional / Convention] [G]**

### 10.4 Makeup, hair, and decoration
- Stage makeup emphasises the eyes and expression so they are visible from a distance.
- **Alta (alakta):** red dye applied to the palms and feet. It makes hand and foot movements stand out and is also associated with auspiciousness. **[Convention] [G]**
- A bindi, flowers (often jasmine), and a decorated braid are common.

### 10.5 Stage conventions
- Many dancers begin with a salutation to the stage (sometimes called *Bhumi Pranam*), the guru, the musicians, and the audience. **[Convention] [G]**
- A lamp and an image of a deity or Nataraja are placed on the stage at many events.
- Musicians usually sit at the side or rear of the stage.

### 10.6 Variations
Costume, jewellery, and stage practice differ between teachers, communities, and countries. Contemporary choreographers may use simpler or non-traditional costumes. No single choice makes a performance more or less authentic.

---

## 11. Important Stories, Themes, and Devotional Repertoire

### 11.1 Common themes
- **Krishna:** childhood stories, flute, the gopis, and his relationship with Radha.
- **Shiva / Nataraja:** the cosmic dance, and compositions about Shiva and Parvati.
- **Devi:** Durga, Meenakshi, Kamakshi, Lakshmi, Saraswati.
- **Vishnu and his avatars:** Rama, Narasimha, Vamana, and others.
- **Murugan:** especially in Tamil compositions such as the Tiruppugazh.
- **Ganesha:** often invoked at the beginning.
- **Nayika–nayaka themes:** the heroine in different emotional states, common in padams and javalis.

### 11.2 Ashta Nayika
Dance literature describes eight heroine states: *Abhisarika*, *Vasakasajja*, *Virahotkanthita*, *Vipralabdha*, *Khandita*, *Kalahantarita*, *Proshitabhartruka*, and *Swadhinabhartruka*. Lists and spellings vary. **[Textual / Convention] [G]**

### 11.3 Three layers: story, interpretation, evidence
| Layer | Example |
|---|---|
| **Traditional narrative** | A Puranic story of Krishna |
| **Performer's interpretation** | A dancer may stress playfulness or fear |
| **Historical evidence** | When, where, and by whom a composition was written |

### 11.4 Composers (to be verified)
Names commonly associated with the repertoire include **Kshetrayya** (padams), **Dharmapuri Subbarayar** (javalis), the **Thanjavur Quartet** (pada varnams), **Swathi Tirunal** (Travancore ruler and composer; patron of the Quartet), **Papanasam Sivan**, **Gopalakrishna Bharati**, and **Arunagirinathar** (Tiruppugazh). Only the Quartet and Swathi Tirunal relationships were confirmed in this review. The rest are **[G]** and need verification before they are quoted. Do not attribute specific compositions to them without a source.

### 11.5 Rule for quotations
No verses or lyrics are quoted in this document. Adding any verse requires a verified source and attention to copyright.

---

## 12. Bani, Gurus, and Stylistic Diversity

### 12.1 What is a bani?
**Bani** (also *pani*, *baani*) is a term for a stylistic lineage linked to a guru, family, place, or institution. It describes differences in technique, repertoire, interpretation, and teaching. **[Convention] [V2]**

### 12.2 Commonly mentioned lineages
The descriptions below are **generalisations**. Several came from weak sources. Dancers and scholars debate how distinct the banis are, and individual teachers often blend influences. **[Interpretation]**

| Name | What the sources say |
|---|---|
| **Pandanallur** | Associated with the guru **Meenakshisundaram Pillai (1869–1964)** of Pandanallur village near Thanjavur, a descendant of a hereditary nattuvanar family linked to the Thanjavur Quartet. Often described as emphasising linear geometry in adavus and restrained abhinaya. [V1–V2] |
| **Vazhuvoor** | Associated with **Vazhuvoor Ramaiah Pillai** and his family. Often described as having softer facial abhinaya and rich shringara elements. [V1: weak source] |
| **Thanjavur** | Associated with the hereditary nattuvanar families of Thanjavur, and with dancers such as Balasaraswati, known for deep abhinaya. [V1] |
| **Kalakshetra** | The tradition of the institution founded by Rukmini Devi Arundale in 1936, often described as having clean lines and a strong rhythmic base. Rukmini Devi studied with Meenakshisundaram Pillai, and some commentators describe Kalakshetra as drawing on the Pandanallur approach. [V1–V2] |
| **Melattur, Mysore, Kanchipuram, others** | Other regional traditions are named in various lists. A forum discussion states that Melattur discourages hard stamping, but this was a weak source and also disputed. [V1] |

### 12.3 What can differ
Posture and depth of Araimandi; hand and arm lines; adavu names and syllables; repertoire; the balance between nritta and abhinaya; costume.

### 12.4 Cautions
- Do not oversimplify ("Pandanallur is always X").
- Do not claim one bani is more authentic.
- Descriptions of style are generalisations.

---

## 13. Learning Bharatanatyam

### 13.1 Role of the guru
Bharatanatyam is traditionally learned directly from a guru (*guru-shishya parampara*). A guru corrects posture, rhythm, and expression, passes on repertoire, and judges readiness to perform. Online material can supplement but not replace personal feedback. **[Convention]**

### 13.2 Typical progression (varies by teacher)
| Stage | Typical focus |
|---|---|
| **Beginner** | Posture, Araimandi, basic adavus, tala counting, basic hastas, a simple song |
| **Intermediate** | More adavus and jatis, Alarippu, Jatiswaram, Shabdam, introductory abhinaya |
| **Advanced** | Varnam, Padam, Javali, Tillana, longer pieces, performance skills |
| **Mature** | Choreography, teaching, research, concert design |

### 13.3 Example practice routine (adapt with your teacher)
1. Warm-up (5–10 minutes), gentle joint mobility.
2. Posture work in a comfortable Araimandi.
3. Adavus at slow, accurate tempo.
4. Tala counting and recitation of syllables.
5. Hastas and abhinaya in front of a mirror.
6. Cool-down and gentle stretching.

### 13.4 Flexibility, stamina, and strength
Build leg, core, and ankle strength gradually. Cardiovascular fitness supports stamina. Mobility work for hips, hamstrings, and ankles helps. Cross-training, such as yoga or strength training, can help when done with guidance.

### 13.5 Expression practice
Study the meaning of every piece, practise facial expression in a mirror, watch experienced dancers, and ask your guru for feedback.

### 13.6 Safety (important)
- **Do not force deep knee bends.** Start with a comfortable height and deepen gradually as strength and alignment allow.
- **Do not continue through pain.** Sharp, joint, or persistent pain means stop and consult a qualified healthcare professional.
- Keep knees aligned with toes. Avoid collapsing inward.
- Do not overtrain. Allow recovery days.
- Prefer a suitable floor. Hard concrete is risky for joints.
- Stay hydrated and rest.
- This section is general information, not medical advice. **[G]**

---

## 14. Performance Preparation and Terminology Glossary

### 14.1 Preparing for a performance
- Repeated full run-throughs, ideally with live music.
- Coordination with the nattuvanar, vocalist, and mridangam player on tempo and cues.
- Costume and makeup trials.
- Stage rehearsal for spacing, lighting, and entrances.
- Sleep, nutrition, and hydration, and avoiding injury.
- Studying the meaning of each piece.

### 14.2 Etiquette
- Respect for the guru, musicians, stage, and audience. Many dancers salute the stage before dancing. **[Convention]**
- Arrive on time.
- Keep to the venue's rules for applause and photography.

### 14.3 Approximate pronunciation (for English speakers)
| Term | Approximate pronunciation |
|---|---|
| Bharatanatyam | BHAH-ruh-tuh-NAHT-yum |
| Adavu | UH-duh-voo |
| Abhinaya | UB-hee-NUH-yuh |
| Araimandi | UH-rye-MUN-dee |
| Nattuvangam | NUT-too-VUN-gum |
| Salangai | SUH-lun-guy |
| Alarippu | UH-luh-RIP-poo |
| Jatiswaram | JUH-tee-SWUH-rum |
| Varnam | VUR-num |
| Tillana | TIL-luh-nuh |

These are rough guides only. Tamil retroflex sounds have no precise English equivalent.

### 14.4 Glossary
| Term | Definition |
|---|---|
| **Abhinaya** | The art of expression; four types: Angika, Vachika, Aharya, Sattvika |
| **Adavu** | Basic unit of movement combining foot, body, and hand positions with syllables |
| **Aharya** | Expression through costume, makeup, and adornment |
| **Alarippu** | Opening nritta item of the margam |
| **Alta / Alakta** | Red dye for palms and feet |
| **Angika** | Expression through the body, face, and gestures |
| **Anjali** | Salutation gesture with joined palms |
| **Arangetram** | A student's debut solo recital |
| **Araimandi / Ardhamandali** | Half-sitting basic posture |
| **Asamyuta hasta** | Single-hand gesture |
| **Bani** | Stylistic lineage |
| **Bhava** | Emotional state |
| **Carnatic music** | Classical music tradition of South India |
| **Chatusra** | Four-unit grouping |
| **Dasi Attam** | Historic name for the dance tradition |
| **Devadasi** | Historically, a woman dedicated to temple service; the term and history are complex and contested |
| **Drishti** | Gaze, eye movement |
| **Gejje / Ghungroo / Salangai** | Ankle bells |
| **Greeva** | Neck |
| **Guru** | Teacher |
| **Hasta** | Hand gesture |
| **Isai Vellalar** | Tamil community historically associated with hereditary music and dance |
| **Jati** | Rhythmic dance phrase; also a tala class |
| **Jatiswaram** | Nritta item set to notes |
| **Javali** | Light, romantic lyrical item |
| **Kalakshetra** | Institution founded in 1936 in Chennai by Rukmini Devi Arundale |
| **Karana** | Combined dance movement unit described in the Natya Shastra (108) |
| **Khanda** | Five-unit grouping |
| **Korvai** | Rhythmic composition ending in a teermanam |
| **Laghu / Drutam / Anudrutam** | Basic tala units |
| **Laya** | Tempo |
| **Mangalam** | Closing benediction |
| **Margam** | Traditional sequence of items in a recital |
| **Misra** | Seven-unit grouping |
| **Mridangam** | Double-headed drum central to Carnatic music |
| **Mudra** | Hand gesture |
| **Nattuvanar** | Teacher-conductor who recites the syllables |
| **Nattuvangam** | The art of conducting the dance |
| **Natya** | Dance-drama; theatre |
| **Natya Shastra** | Sanskrit treatise on performing arts |
| **Nayaka / Nayika** | Hero / heroine |
| **Nritta** | Pure dance |
| **Nritya** | Expressive dance |
| **Oddiyanam** | Waist belt |
| **Padam** | Slow expressive item |
| **Raga** | Melodic framework |
| **Rasa** | Aesthetic flavour or sentiment |
| **Sadir** | Historic name for the dance tradition |
| **Sahitya** | Lyrics |
| **Samyuta hasta** | Combined-hand gesture |
| **Sankeerna** | Nine-unit grouping |
| **Sattvika** | Inner or involuntary states of emotion |
| **Shabdam** | Item with words, introducing abhinaya |
| **Shiro bheda** | Head movement |
| **Sthayi bhava** | Dominant enduring emotion |
| **Solkattu** | Rhythmic syllables |
| **Tala** | Rhythmic cycle |
| **Teermanam** | Concluding rhythmic pattern |
| **Tillana** | Rhythmic, joyful finale |
| **Tisra** | Three-unit grouping |
| **Vachika** | Expression through speech and song |
| **Varnam** | The central, most complex item of the margam |
| **Vyabhichari bhava** | Transitory emotion |

---

## 15. Frequently Asked Questions

### Beginner questions

**Q1. What is Bharatanatyam?**
It is a classical dance form of South India, closely associated with Tamil Nadu. It combines rhythmic movement, expressive gestures, and storytelling, set to Carnatic music. It has a codified vocabulary of postures, hand gestures, and facial expressions.

**Q2. How do you pronounce "Bharatanatyam"?**
A common English approximation is "BHAH-ruh-tuh-NAHT-yum". Spelling variants include Bharata Natyam and Bharathanatyam.

**Q3. At what age can someone start learning Bharatanatyam?**
Many students begin as children, but adults can also learn. A qualified guru can adapt expectations to age, fitness, and goals. There is no universal age limit.

**Q4. Do I need to be flexible to start?**
No. Flexibility and strength improve gradually with safe practice. A good teacher works with your current ability.

**Q5. What is Araimandi?**
It is the half-sitting posture central to Bharatanatyam, with knees bent outward and the spine upright. Depth should be built gradually and safely.

**Q6. What does a beginner class usually include?**
Typically warm-ups, posture work, basic adavus, tala counting, simple hand gestures, and later a first short piece. Details vary by school.

**Q7. What do I wear to class?**
Schools differ. Many ask for comfortable practice clothing or a simple stitched outfit. Check with your teacher.

**Q8. When do I get ankle bells?**
It varies. Many teachers introduce them once the student keeps rhythm and posture well, while some start earlier. Ask your guru.

**Q9. How long does it take to learn Bharatanatyam?**
It is a long-term discipline. Reaching a debut recital usually takes several years of regular training, but timelines depend on frequency, age, and the guru's standards.

**Q10. Can I learn Bharatanatyam online?**
Online learning can supplement training, especially for theory, rhythm, and practice. Direct feedback on alignment and expression is hard to replace, so in-person correction is valuable for safe technique.

### Cultural and historical questions

**Q11. Where does Bharatanatyam come from?**
It is closely associated with Tamil Nadu and the temple, court, and community dance traditions of South India. The modern form took shape through the 19th and 20th centuries (Section 1.3).

**Q12. Is Bharatanatyam 2,000 years old?**
Its theoretical vocabulary, such as that of the Natya Shastra, and temple dance traditions have deep roots. But the dance as practised today took shape much more recently, so a claim that it is unchanged for 2,000 years is not supported by historians.

**Q13. What was Sadir?**
Sadir (also Sadir Attam or Dasi Attam) was an earlier name for the dance tradition performed in temples and courts, before the name "Bharatanatyam" became standard in the 20th century.

**Q14. Who were the devadasis?**
Historically, devadasis were women dedicated to temple service, many of whom were performers and keepers of music and dance traditions. Their history is complex and contested, with both artistic contribution and social hardship. The Madras Devadasis (Prevention of Dedication) Act of 1947 ended dedication of girls to temples.

**Q15. Who was Rukmini Devi Arundale?**
A dancer and cultural leader (1904–1986) who performed publicly in 1935 and founded the institution that became Kalakshetra in 1936. She played a major role in reshaping and popularising Bharatanatyam. Scholars also debate her legacy critically, including questions of appropriation.

**Q16. Who was Balasaraswati?**
A celebrated dancer from a hereditary family of musicians and dancers, known for deep abhinaya and for upholding the heritage of the Sadir tradition. In a 1976 address she described the traditional order of the recital and compared it to a temple.

**Q17. Who were the Thanjavur Quartet?**
Four brothers, Chinnayya, Ponnayya, Sivanandam, and Vadivelu, who lived in the early 19th century, served as court musicians, and are widely credited with systematising the margam. The Maratha rulers Serfoji II and Tulaja I also shaped the repertoire, and other families contributed too.

**Q18. Who proposed the name "Bharatanatyam"?**
E. Krishna Iyer proposed a resolution at a Madras Music Academy meeting in 1932 to rename the dance Bharatanatyam. The term was used earlier in some contexts, but the 1932 resolution is an important moment in its adoption. The question of earlier usage is not settled.

**Q19. How is Bharatanatyam different from Kuchipudi?**
They are separate classical forms. Kuchipudi comes from Andhra Pradesh and has its own repertoire, dance-drama tradition, and aesthetics. Some vocabulary overlaps, but training and style differ.

**Q20. How is Bharatanatyam different from Kathak?**
Kathak is a North Indian classical form with different technique (for example spins and an upright posture), different music (Hindustani), and different repertoire. Bharatanatyam is South Indian, uses Carnatic music, and is built on the Araimandi posture.

### Theory questions

**Q21. What is the Natya Shastra?**
A Sanskrit treatise on the performing arts, traditionally attributed to Bharata. The most studied version has 36 chapters and about 6,000 verses. Its date is uncertain, with the first complete version commonly placed between 200 BCE and 200 CE. It is not a manual of Bharatanatyam alone.

**Q22. What is Abhinaya Darpana?**
A text attributed to Nandikeshvara, often translated as "The Mirror of Gesture". It is widely used in dance teaching for its lists of hand gestures and head, neck, and eye movements. Its date and authorship are uncertain.

**Q23. What are the four types of abhinaya?**
Angika (body), Vachika (speech), Aharya (costume and adornment), and Sattvika (inner emotional states).

**Q24. What is the difference between rasa and bhava?**
Bhava is the emotional state portrayed by the performer. Rasa is the aesthetic enjoyment that the audience experiences. The performer presents bhava, and the audience relishes rasa.

**Q25. How many rasas are there?**
The Natya Shastra discusses eight. A ninth, Shanta, was added by later authors and is commonly counted in the "navarasa". The ninth is widely taught but is a later addition.

**Q26. What are sattvika bhavas?**
Eight involuntary physical expressions of emotion in the Natya Shastra: stillness, perspiration, goosebumps, change of voice, trembling, change of colour, tears, and fainting.

**Q27. How many bhavas are there in the Natya Shastra?**
49 in total: 8 sthayi (dominant), 33 vyabhichari (transitory), and 8 sattvika (involuntary).

**Q28. What is the difference between nritta, nritya, and natya?**
Nritta is pure rhythmic dance, nritya is expressive dance that conveys meaning, and natya is dramatic enactment with characters and narrative.

**Q29. What are karanas?**
Combined dance movement units described in the Natya Shastra, traditionally 108. They appear in temple sculpture, for example at Chidambaram. How they are used in modern Bharatanatyam depends on the school and on reconstruction work.

### Technique questions

**Q30. What are adavus?**
Basic movement units that combine footwork, posture, and hand gestures with rhythmic syllables. They are the building blocks of nritta.

**Q31. How many adavus are there?**
It depends on the school and on how they are counted. Sources give different numbers, for example 36–52 in thirteen groups, or about 120 across twelve families. There is no universal count.

**Q32. Why do adavu names and syllables differ between schools?**
Because Bharatanatyam has been transmitted through different families, gurus, and institutions, each with its own naming, grouping, and syllables.

**Q33. How many hand gestures are there?**
The usual answer in teaching is 28 single-hand and 24 combined-hand gestures from Abhinaya Darpana. The Natya Shastra gives different numbers (about 24 single-hand and 13 combined-hand), and some teachers add four more single-hand gestures.

**Q34. Does one mudra always mean the same thing?**
No. A mudra's meaning depends on context, movement, eyes, facial expression, and tradition. The same mudra can represent several things, and one idea can be shown by different mudras.

**Q35. What is the Pataka mudra?**
The first single-hand gesture in Abhinaya Darpana, called the "flag". The four fingers are extended and held together, and the thumb is bent. It is often the first gesture taught and is used for ideas such as a cloud, a forest, a river, or a blessing.

**Q36. How is Tripataka different from Pataka?**
Tripataka is formed like Pataka with the ring finger bent. Commonly cited uses include a tree or a crown.

**Q37. What does "where the hand goes, the eyes follow" mean?**
It is a well-known teaching principle that the gaze should accompany the expressive hand, which links the gesture to the dancer's mind and feeling. Its attribution to a specific text varies between sources.

**Q38. What is solkattu?**
Spoken rhythmic syllables that guide the dancer and link footwork to the drum.

**Q39. How many talas are there in Carnatic music?**
The system has 7 basic tala families and 5 jatis, giving 35 talas. With 5 gatis this becomes 175 combinations. Adi tala, with 8 beats, is the most common.

### Performance questions

**Q40. What is a margam?**
The traditional sequence of items in a full-length solo recital. A commonly described order is alarippu, jatiswaram, shabdam, varnam, padams, tillana, and a closing shloka or mangalam. Many variations exist.

**Q41. What is a varnam?**
The central and most demanding item of a typical recital. It combines intricate rhythmic sections with extensive expression and is often 30–45 minutes or longer.

**Q42. What is an arangetram?**
A student's first full solo recital, regarded as a milestone. The standards and format depend on the guru and tradition.

**Q43. Who is the nattuvanar?**
The conductor of the dance who recites rhythmic syllables and plays cymbals. Often the dancer's guru.

**Q44. Is live music necessary?**
Live music is considered ideal in traditional practice, and the interaction between dancer and musicians is valued. Recorded music is also commonly used.

**Q45. Why do dancers apply red dye on their hands and feet?**
It is a convention that makes hand and foot movements stand out on stage, and the red is also associated with auspiciousness in some contexts.

**Q46. What is temple jewellery?**
The traditional South Indian style of gold or gold-plated jewellery, originally made to adorn temple deities and later adapted for dancers. A dance set commonly includes pieces such as a forehead ornament (nethichutti), moon and sun ornaments (Chandra–Surya), earrings (jimikki), a waist belt (oddiyanam), and armlets (vanki).

### Learning and safety questions

**Q47. How do I avoid knee pain?**
Keep the knees aligned over the toes, build leg strength gradually, do not drop lower than you can control, warm up, and rest. If pain persists, stop and see a healthcare professional. Ask your guru about modifications.

**Q48. Can I force myself into a deep Araimandi?**
No. Forcing depth can strain the knees and hips. Build depth progressively under guidance.

**Q49. Is it necessary to learn Carnatic music to dance?**
It is not mandatory, but learning the basics of tala, raga, and the languages of the songs greatly improves a dancer's understanding.

**Q50. Can men learn Bharatanatyam?**
Yes. Men and women both learn and perform Bharatanatyam today, and many male dancers and gurus are prominent in the field.

---

## 16. Bibliography and Sources

> **Verification status:** The works below were seen in the search results of 2026-10-11, or are well-known works believed to exist. Content was summarised in the author's own words. **Details such as page numbers and editions still need confirmation against the actual items.** Web pages can change or disappear. Dates are access dates (2026-10-11).

### 16.1 Primary texts and translations
1. Ghosh, Manomohan (trans.). *The Natyashastra*. Ascribed to Bharata-muni. English translation, 1951 edition as presented by Wisdom Library. https://www.wisdomlib.org/hinduism/book/the-natyashastra
2. Ghosh, Manomohan. *Nandikesvara's Abhinayadarpanam: A Manual of Gesture and Posture Used in Hindu Dance and Drama*. Second edition (revised). Calcutta: Firma K. L. Mukhopadhyay, 1957. A scan was found on the Internet Archive (identifier: abhinayadarpanam029902mbp).
3. Coomaraswamy, Ananda K., and Duggirala, Gopala Kristnayya. *The Mirror of Gesture, Being the Abhinaya Darpana of Nandikeshvara*. Harvard University Press, 1917. **(Confirm edition and access link.)**

### 16.2 Institutional and educational sources
4. Indira Gandhi National Centre for the Arts (IGNCA). Document on the Dance Karanas of the Brihadisvara temple (title in file: "038 Karanas Des"). Hosted at amritkaal.nic.in.
5. NCERT. *Dance for Well-Being* (textbook chapter), on Abhinaya Darpana's asamyuta hasta verses. https://ncert.nic.in/textbook/pdf/hekr112.pdf
6. Central Board of Secondary Education. Class XII Bharatanatyam (Code 057) marking schemes, 2018–19 and 2026–27 (on the Thanjavur Quartet and the margam).
7. Sangeet Natak Akademi, recognised classical dance forms. https://sangeetnatak.gov.in **(confirm the exact page)**

### 16.3 Articles and talks
8. Balasaraswati, T. "On Bharata Natyam." Address of 1976 (NCPA Quarterly), as reproduced on Sahapedia and Academia.edu.
9. Ramnarayan, Gowri. "The Musical Genius of the Tanjavur Quartette." Natya Kala Conference, 2000. Narthaki. https://narthaki.com/info/articles/article29.html
10. Sruti magazine. "The Tanjavur Quartet." https://www.sruti.com/printeditions/sruti-back-issues-individual/the-tanjavur-quartet
11. Siddiqi, Jameela. "Legendary Figures: South India's Tanjore Quartet." Darbar. https://www.darbar.org/article/legendary-figures-south-india-s-tanjore-quartet-four-brilliant-musical-brothers
12. Sahapedia. "In Conversation: Dr B.M. Sundaram."
13. Rangaswamy, Sapna. "The 'Adavus' of Bharatanatyam." Narthaki. https://narthaki.com/info/articles/article54.html
14. Rangaswamy, Sapna. Article on margam. Narthaki. https://narthaki.com/info/articles/article59.html
15. Seshan, A. "Neo-Classical and Modern Dancing and Margam in Bharatanatyam." Narthaki, 2010. https://narthaki.com/info/articles/art262.html
16. Suhani Dhanki. "Distinct single-handed hasta from the Bharatarnava." Akademi (UK). https://www.akademi.co.uk/hasta-from-the-bharatarnava/
17. Khokar, Ashish Mohan. Excerpt on Rukmini Devi Arundale, from "Leadership in the arts," as published in Dawn.
18. Frontline. "1947 Devadasi Abolition Act." 2022 (PressReader).
19. Live History India. "Bharatanatyam: The Renaissance." https://livehistoryindia.com/story/living-culture/bharatanatyam-the-renaissance
20. Harvard Impart Encyclopedia of Art. "Rasa." https://imp-art.org/article/rasa/
21. Brill. "Rasa Theory" (chapter excerpt).

### 16.4 Reference works used for cross-checking only (use with caution)
22. Wikipedia: "List of mudras (dance)" (summarising Marg magazine, 10:4, 1957), "Natya Shastra", "Thanjavur Quartet", "E. Krishna Iyer", "Pandanallur style", "Vazhuvur", "Sthayibhava".
23. Online Bharatanatyam (onlinebharatanatyam.com): articles on asamyukta hastas, rasa, and the tala system.
24. Acharyanet and Darbar articles on Carnatic tala.

### 16.5 Recommended next sources to obtain
- A scholarly history of Bharatanatyam and the devadasi tradition (for example works by Davesh Soneji, Amrit Srinivasan, Avanthi Meduri, Matthew Harp Allen, and Janet O'Shea). These were not read for this version.
- The Mandakranta Bose and Kapila Vatsyayan works on dance theory.
- Syllabi from your own guru's tradition.

### 16.6 What the bibliography is not
It is not a claim that every statement in this document was checked against each source. Each claim should be traced to a source in the next verification pass.

---

## 17. RAG Usage Guidelines

### 17.1 Chunk size and overlap (initial values to test)
- The reference implementation splits by headings first and then caps chunks at about **1,000 characters** with about **150 characters** of overlap. This suits a small embedding model that reads about 256 tokens.
- With larger embedding models, test **500–800 tokens** with **10–15% overlap**.
- Keep **tables** together where possible.
- Treat each FAQ question and its answer as one chunk.
- Section 17 (these guidelines) is for developers and should be **excluded** from the retrieval index.

### 17.2 Why split by headings rather than arbitrary characters
Each section is written to be self-contained. Heading-aware splitting keeps a definition with its caveat and its evidence label. Arbitrary cuts can separate a claim from its warning, or a table row from its header. Apply token-based splitting only to sections that are still too long.

### 17.3 Metadata to keep with each chunk
`doc_id`, `version`, `section_number`, `section_title`, `heading_path`, evidence label if present, verification tag if present, `chunk_index`. Prepend the heading path to the chunk text before embedding.

### 17.4 How the chatbot should answer
1. Retrieve the top 4–6 chunks, then optionally re-rank.
2. Answer **only** from the retrieved text.
3. Cite section numbers.
4. Preserve the evidence labels: say when something is traditional, a convention, or uncertain.
5. Mention variation by bani, guru, text, or institution whenever the source does.
6. For pain or injury questions, give the safety guidance in Section 13.6 and recommend a qualified teacher or healthcare professional.
7. For questions on finger positions beyond Pataka and Tripataka, say that the knowledge base intentionally does not provide them and recommend a guru.

### 17.5 When retrieved evidence is insufficient
Say plainly that the knowledge base does not contain enough reliable information. Offer related information that is available, suggest asking a guru, and invite the user to rephrase.

### 17.6 Why the chatbot must not invent an answer
Dance terminology, mudra meanings, and history are easily distorted. A confident but wrong answer can mislead learners and misrepresent a living tradition. Names, finger positions, verses, dates, and attributions are especially risky. Weak retrieval matches should be treated as insufficient evidence.

### 17.7 Maintenance
Record changes in a version log and update `version`. Re-run the ingest step after every change. Add a review status to sections after a guru or scholar has checked them.

---

*End of document — version 0.2.0 (research-revised draft).*
