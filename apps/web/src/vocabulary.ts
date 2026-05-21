export interface VocabularyCard {
  id: string;
  chapter: number;
  kind: "verb" | "noun";
  prompt: string;
  arabic: string;
  target: string;
  answer: string;
  detail: string;
  translation?: string;
  singular?: string;
  plural?: string;
  forms?: {
    past?: string;
    present?: string;
    command?: string;
    masdar?: string;
  };
  requiredPreposition?: string;
}

export const vocabularyCards: VocabularyCard[] = [
  {
    "id": "ch1-verb-ينظر-to-look",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَنْظُرُ",
    "target": "يَنْظُرُ",
    "answer": "To look",
    "detail": "Past: نَظَرَ · Masdar: نَظَرٌ · Preposition: إِلَى",
    "forms": {
      "past": "نَظَرَ",
      "present": "يَنْظُرُ",
      "command": "اُنْظُرْ",
      "masdar": "نَظَرٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-يستمع-to-listen",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَسْتَمِعُ",
    "target": "يَسْتَمِعُ",
    "answer": "To listen",
    "detail": "Past: اِسْتَمَعَ · Masdar: اِسْتِمَاع · Preposition: إِلَى",
    "forms": {
      "past": "اِسْتَمَعَ",
      "present": "يَسْتَمِعُ",
      "command": "اِسْتَمِعْ",
      "masdar": "اِسْتِمَاع"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-يعيد-to-repeat",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُعِيدُ",
    "target": "يُعِيدُ",
    "answer": "To repeat",
    "detail": "Past: أَعَادَ · Masdar: إِعَادَةٌ",
    "forms": {
      "past": "أَعَادَ",
      "present": "يُعِيدُ",
      "command": "أَعِدْ",
      "masdar": "إِعَادَةٌ"
    }
  },
  {
    "id": "ch1-verb-يشير-to-point-indicate",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُشِيرُ",
    "target": "يُشِيرُ",
    "answer": "To point, indicate",
    "detail": "Past: أَشَارَ · Masdar: إِشَارَةٌ · Preposition: إِلَى",
    "forms": {
      "past": "أَشَارَ",
      "present": "يُشِيرُ",
      "command": "أَشِرْ",
      "masdar": "إِشَارَةٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-يضع-to-put",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَضَعُ",
    "target": "يَضَعُ",
    "answer": "To put",
    "detail": "Past: وَضَعَ · Masdar: وَضْعٌ",
    "forms": {
      "past": "وَضَعَ",
      "present": "يَضَعُ",
      "command": "ضَعْ",
      "masdar": "وَضْعٌ"
    }
  },
  {
    "id": "ch1-verb-يسمع-to-hear",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَسْمَعُ",
    "target": "يَسْمَعُ",
    "answer": "To hear",
    "detail": "Past: سَمِعَ · Masdar: سَمْعٌ / سَمَاعٌ",
    "forms": {
      "past": "سَمِعَ",
      "present": "يَسْمَعُ",
      "command": "اِسمَعْ",
      "masdar": "سَمْعٌ / سَمَاعٌ"
    }
  },
  {
    "id": "ch1-verb-يقول-to-say",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَقُولُ",
    "target": "يَقُولُ",
    "answer": "To say",
    "detail": "Past: قَالَ · Masdar: قَولٌ",
    "forms": {
      "past": "قَالَ",
      "present": "يَقُولُ",
      "command": "قُلْ",
      "masdar": "قَولٌ"
    }
  },
  {
    "id": "ch1-verb-يرتب-to-put-in-order-arrange-organise",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُرَتِبُ",
    "target": "يُرَتِبُ",
    "answer": "To put in order, arrange, organise",
    "detail": "Past: رَتَّبَ · Masdar: تَرْتِيبٌ",
    "forms": {
      "past": "رَتَّبَ",
      "present": "يُرَتِبُ",
      "command": "رَتِبْ",
      "masdar": "تَرْتِيبٌ"
    }
  },
  {
    "id": "ch1-verb-يتبادل-to-exchange",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَتَبَادَلُ",
    "target": "يَتَبَادَلُ",
    "answer": "To exchange",
    "detail": "Past: تَبَادَلَ · Masdar: تَبَادُلٌ",
    "forms": {
      "past": "تَبَادَلَ",
      "present": "يَتَبَادَلُ",
      "command": "تَبَادَلْ",
      "masdar": "تَبَادُلٌ"
    }
  },
  {
    "id": "ch1-verb-يسال-to-ask",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَسْأَلُ",
    "target": "يَسْأَلُ",
    "answer": "To ask",
    "detail": "Past: سَأَلَ · Masdar: سُؤَالٌ",
    "forms": {
      "past": "سَأَلَ",
      "present": "يَسْأَلُ",
      "command": "اِسْأَلْ",
      "masdar": "سُؤَالٌ"
    }
  },
  {
    "id": "ch1-verb-يجيب-to-answer",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُجِيبُ",
    "target": "يُجِيبُ",
    "answer": "To answer",
    "detail": "Past: أَجَابَ · Masdar: إِجَابَةٌ",
    "forms": {
      "past": "أَجَابَ",
      "present": "يُجِيبُ",
      "command": "أَجِبْ",
      "masdar": "إِجَابَةٌ"
    }
  },
  {
    "id": "ch1-verb-يقرا-to-read",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَقْرَأُ",
    "target": "يَقْرَأُ",
    "answer": "To read",
    "detail": "Past: قَرَأَ · Masdar: قِرَاءَةٌ",
    "forms": {
      "past": "قَرَأَ",
      "present": "يَقْرَأُ",
      "command": "اِقْرَأْ",
      "masdar": "قِرَاءَةٌ"
    }
  },
  {
    "id": "ch1-verb-يمر-to-pass-by",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَمُرٌ",
    "target": "يَمُرٌ",
    "answer": "To pass by",
    "detail": "Past: مَرَّ · Masdar: مُرُورٌ · Preposition: بـ",
    "forms": {
      "past": "مَرَّ",
      "present": "يَمُرٌ",
      "command": "مُرَّ",
      "masdar": "مُرُورٌ"
    },
    "requiredPreposition": "بـ"
  },
  {
    "id": "ch1-verb-ينسخ-to-copy",
    "chapter": 1,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَنْسَخُ",
    "target": "يَنْسَخُ",
    "answer": "To copy",
    "detail": "Past: نَسَخَ · Masdar: نَسْخٌ",
    "forms": {
      "past": "نَسَخَ",
      "present": "يَنْسَخُ",
      "command": "اِنْسَخْ",
      "masdar": "نَسْخٌ"
    }
  },
  {
    "id": "ch1-noun-طالب-student",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "طَالِبٌ",
    "target": "طَالِبٌ",
    "answer": "Student",
    "detail": "Plural: طَُّلَّبٌ",
    "singular": "طَالِبٌ",
    "plural": "طَُّلَّبٌ"
  },
  {
    "id": "ch1-noun-كتاب-book",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "كِتَابٌ",
    "target": "كِتَابٌ",
    "answer": "Book",
    "detail": "Plural: كُتُبٌ",
    "singular": "كِتَابٌ",
    "plural": "كُتُبٌ"
  },
  {
    "id": "ch1-noun-وحدة-chapter",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "وَحْدَةٌ",
    "target": "وَحْدَةٌ",
    "answer": "Chapter",
    "detail": "Plural: وَحْدَاتٌ",
    "singular": "وَحْدَةٌ",
    "plural": "وَحْدَاتٌ"
  },
  {
    "id": "ch1-noun-لغة-language",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "لُغَةٌ",
    "target": "لُغَةٌ",
    "answer": "Language",
    "detail": "Plural: لُغَاتٌ",
    "singular": "لُغَةٌ",
    "plural": "لُغَاتٌ"
  },
  {
    "id": "ch1-noun-جنسية-nationality",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "جِنْسِيَّةٌ",
    "target": "جِنْسِيَّةٌ",
    "answer": "Nationality",
    "detail": "Plural: جِنْسِيَّاتٌ",
    "singular": "جِنْسِيَّةٌ",
    "plural": "جِنْسِيَّاتٌ"
  },
  {
    "id": "ch1-noun-اسم-name",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "اِسْمٌ",
    "target": "اِسْمٌ",
    "answer": "Name",
    "detail": "Plural: أَسْمَاءٌ",
    "singular": "اِسْمٌ",
    "plural": "أَسْمَاءٌ"
  },
  {
    "id": "ch1-noun-مدرس-teacher",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُدَرِسٌ",
    "target": "مُدَرِسٌ",
    "answer": "Teacher",
    "detail": "Plural: مُدَرِسُونَ",
    "singular": "مُدَرِسٌ",
    "plural": "مُدَرِسُونَ"
  },
  {
    "id": "ch1-noun-اخ-brother",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أَخٌ",
    "target": "أَخٌ",
    "answer": "Brother",
    "detail": "Plural: إِخْوَانٌ / إِخْوَةٌ",
    "singular": "أَخٌ",
    "plural": "إِخْوَانٌ / إِخْوَةٌ"
  },
  {
    "id": "ch1-noun-مهندس-engineer",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُهَنْدِسٌ",
    "target": "مُهَنْدِسٌ",
    "answer": "Engineer",
    "detail": "Plural: مُهَنْدِسُونَ",
    "singular": "مُهَنْدِسٌ",
    "plural": "مُهَنْدِسُونَ"
  },
  {
    "id": "ch1-noun-صديق-friend",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "صَدِيقٌ",
    "target": "صَدِيقٌ",
    "answer": "Friend",
    "detail": "Plural: أَصْدِقَاءُ",
    "singular": "صَدِيقٌ",
    "plural": "أَصْدِقَاءُ"
  },
  {
    "id": "ch1-noun-طبيب-doctor",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "طَبِيبٌ",
    "target": "طَبِيبٌ",
    "answer": "Doctor",
    "detail": "Plural: أَطِبَّاءُ",
    "singular": "طَبِيبٌ",
    "plural": "أَطِبَّاءُ"
  },
  {
    "id": "ch1-noun-اخت-sister",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أُخْتٌ",
    "target": "أُخْتٌ",
    "answer": "Sister",
    "detail": "Plural: أَخَوَاتٌ",
    "singular": "أُخْتٌ",
    "plural": "أَخَوَاتٌ"
  },
  {
    "id": "ch1-noun-تدريب-exercise",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "تَدْرِيبٌ",
    "target": "تَدْرِيبٌ",
    "answer": "Exercise",
    "detail": "Plural: تَدْرِيبَاتٌ",
    "singular": "تَدْرِيبٌ",
    "plural": "تَدْرِيبَاتٌ"
  },
  {
    "id": "ch1-noun-درس-lesson",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "دَرْسٌ",
    "target": "دَرْسٌ",
    "answer": "Lesson",
    "detail": "Plural: دُرُوسٌ",
    "singular": "دَرْسٌ",
    "plural": "دُرُوسٌ"
  },
  {
    "id": "ch1-noun-عدد-number",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "عَدَدٌ",
    "target": "عَدَدٌ",
    "answer": "Number",
    "detail": "Plural: أَعْدَادٌ",
    "singular": "عَدَدٌ",
    "plural": "أَعْدَادٌ"
  },
  {
    "id": "ch1-noun-صورة-picture",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "صُورَةٌ",
    "target": "صُورَةٌ",
    "answer": "Picture",
    "detail": "Plural: صُوَرٌ",
    "singular": "صُورَةٌ",
    "plural": "صُوَرٌ"
  },
  {
    "id": "ch1-noun-جواب-answer",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "جَوَابٌ",
    "target": "جَوَابٌ",
    "answer": "Answer",
    "detail": "Plural: أَجْوِبَةٌ",
    "singular": "جَوَابٌ",
    "plural": "أَجْوِبَةٌ"
  },
  {
    "id": "ch1-noun-سؤال-question",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سُؤَالٌ",
    "target": "سُؤَالٌ",
    "answer": "Question",
    "detail": "Plural: أَسْئِلَةٌ",
    "singular": "سُؤَالٌ",
    "plural": "أَسْئِلَةٌ"
  },
  {
    "id": "ch1-noun-مثال-example",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مِثَالٌ",
    "target": "مِثَالٌ",
    "answer": "Example",
    "detail": "Plural: أَمْثِلَةٌ",
    "singular": "مِثَالٌ",
    "plural": "أَمْثِلَةٌ"
  },
  {
    "id": "ch1-noun-زميل-colleague-classmate",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "زَمِيلٌ",
    "target": "زَمِيلٌ",
    "answer": "Colleague, classmate",
    "detail": "Plural: زُمََّلَءُ",
    "singular": "زَمِيلٌ",
    "plural": "زُمََّلَءُ"
  },
  {
    "id": "ch1-noun-رقم-number",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "رَقْمٌ",
    "target": "رَقْمٌ",
    "answer": "Number",
    "detail": "Plural: أَرْقَامٌ",
    "singular": "رَقْمٌ",
    "plural": "أَرْقَامٌ"
  },
  {
    "id": "ch1-noun-جملة-sentence",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "جُمْلَةٌ",
    "target": "جُمْلَةٌ",
    "answer": "Sentence",
    "detail": "Plural: جُمَلٌ",
    "singular": "جُمْلَةٌ",
    "plural": "جُمَلٌ"
  },
  {
    "id": "ch1-noun-علمة-sign-indication",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "عََّلَمَةٌ",
    "target": "عََّلَمَةٌ",
    "answer": "Sign, indication",
    "detail": "Plural: عََّلَمَاتٌ",
    "singular": "عََّلَمَةٌ",
    "plural": "عََّلَمَاتٌ"
  },
  {
    "id": "ch1-noun-كلمة-word",
    "chapter": 1,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "كَلِمَةٌ",
    "target": "كَلِمَةٌ",
    "answer": "Word",
    "detail": "Plural: كَلِمَاتٌ",
    "singular": "كَلِمَةٌ",
    "plural": "كَلِمَاتٌ"
  },
  {
    "id": "ch2-verb-يتوضا-to-perform-ablution-wudoo",
    "chapter": 2,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَتَوَضَّأُ",
    "target": "يَتَوَضَّأُ",
    "answer": "To perform (ablution) wudoo",
    "detail": "Past: تَوَضَّأَ · Masdar: تَوَضؤٌ",
    "forms": {
      "past": "تَوَضَّأَ",
      "present": "يَتَوَضَّأُ",
      "command": "تَوَضَّأْ",
      "masdar": "تَوَضؤٌ"
    }
  },
  {
    "id": "ch2-verb-يصل-to-pray",
    "chapter": 2,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُصَل",
    "target": "يُصَل",
    "answer": "To pray",
    "detail": "Past: ِيصَلَّى · Masdar: صََّلٌَ / ة",
    "forms": {
      "past": "ِيصَلَّى",
      "present": "يُصَل",
      "command": "صَلِ",
      "masdar": "صََّلٌَ / ة"
    }
  },
  {
    "id": "ch2-verb-يفعل-to-do",
    "chapter": 2,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَفْعَلُ",
    "target": "يَفْعَلُ",
    "answer": "To do",
    "detail": "Past: فَعَلَ · Masdar: فِعْلٌ",
    "forms": {
      "past": "فَعَلَ",
      "present": "يَفْعَلُ",
      "command": "اِفْعَلْ",
      "masdar": "فِعْلٌ"
    }
  },
  {
    "id": "ch2-noun-عم-paternal-uncle",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "عَمٌ",
    "target": "عَمٌ",
    "answer": "Paternal uncle",
    "detail": "Plural: أَعْمَامٌ",
    "singular": "عَمٌ",
    "plural": "أَعْمَامٌ"
  },
  {
    "id": "ch2-noun-اسرة-family",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أُسْرَةٌ",
    "target": "أُسْرَةٌ",
    "answer": "Family",
    "detail": "Plural: أُسَرٌ",
    "singular": "أُسْرَةٌ",
    "plural": "أُسَرٌ"
  },
  {
    "id": "ch2-noun-عمة-paternal-aunt",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "عَمَّةٌ",
    "target": "عَمَّةٌ",
    "answer": "Paternal aunt",
    "detail": "Plural: عَمَّاتٌ",
    "singular": "عَمَّةٌ",
    "plural": "عَمَّاتٌ"
  },
  {
    "id": "ch2-noun-والدة-mother",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "وَالِدَةٌ",
    "target": "وَالِدَةٌ",
    "answer": "Mother",
    "detail": "Plural: وَالِدَاتٌ",
    "singular": "وَالِدَةٌ",
    "plural": "وَالِدَاتٌ"
  },
  {
    "id": "ch2-noun-جدة-grandmother",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "جَدَّةٌ",
    "target": "جَدَّةٌ",
    "answer": "Grandmother",
    "detail": "Plural: جَدَّاتٌ",
    "singular": "جَدَّةٌ",
    "plural": "جَدَّاتٌ"
  },
  {
    "id": "ch2-noun-جد-grandfather",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "جَدٌ",
    "target": "جَدٌ",
    "answer": "Grandfather",
    "detail": "Plural: أَجْدَادٌ",
    "singular": "جَدٌ",
    "plural": "أَجْدَادٌ"
  },
  {
    "id": "ch2-noun-ابنة-daughter",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "اِبْنَةٌ",
    "target": "اِبْنَةٌ",
    "answer": "Daughter",
    "detail": "Plural: بَنَاتٌ",
    "singular": "اِبْنَةٌ",
    "plural": "بَنَاتٌ"
  },
  {
    "id": "ch2-noun-ابن-son",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "اِبْنٌ",
    "target": "اِبْنٌ",
    "answer": "Son",
    "detail": "Plural: أَبْنَاءُ",
    "singular": "اِبْنٌ",
    "plural": "أَبْنَاءُ"
  },
  {
    "id": "ch2-noun-معلم-teacher",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُعَلِمٌ",
    "target": "مُعَلِمٌ",
    "answer": "Teacher",
    "detail": "Plural: مُعَلِمُونَ",
    "singular": "مُعَلِمٌ",
    "plural": "مُعَلِمُونَ"
  },
  {
    "id": "ch2-noun-ولد-child-son-boy",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "وَلَدٌ",
    "target": "وَلَدٌ",
    "answer": "Child; son; boy",
    "detail": "Plural: أَوْالَدٌ",
    "singular": "وَلَدٌ",
    "plural": "أَوْالَدٌ"
  },
  {
    "id": "ch2-noun-شجرة-tree",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "شَجَرَةٌ",
    "target": "شَجَرَةٌ",
    "answer": "Tree",
    "detail": "Plural: أَشْجَارٌ",
    "singular": "شَجَرَةٌ",
    "plural": "أَشْجَارٌ"
  },
  {
    "id": "ch2-noun-حمام-bathroom",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "حَمَّامٌ",
    "target": "حَمَّامٌ",
    "answer": "Bathroom",
    "detail": "Plural: حَمَّامَاتٌ",
    "singular": "حَمَّامٌ",
    "plural": "حَمَّامَاتٌ"
  },
  {
    "id": "ch2-noun-معطف-coat",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مِعْطَفٌ",
    "target": "مِعْطَفٌ",
    "answer": "Coat",
    "detail": "Plural: مَعَاطِفُ",
    "singular": "مِعْطَفٌ",
    "plural": "مَعَاطِفُ"
  },
  {
    "id": "ch2-noun-غرفة-room",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "غُرْفَةٌ",
    "target": "غُرْفَةٌ",
    "answer": "Room",
    "detail": "Plural: غُرَفٌ",
    "singular": "غُرْفَةٌ",
    "plural": "غُرَفٌ"
  },
  {
    "id": "ch2-noun-مسجد-mosque",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَسْجِدٌ",
    "target": "مَسْجِدٌ",
    "answer": "Mosque",
    "detail": "Plural: مَسَاجِدُ",
    "singular": "مَسْجِدٌ",
    "plural": "مَسَاجِدُ"
  },
  {
    "id": "ch2-noun-نظارة-glasses",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "نَظَّارَةٌ",
    "target": "نَظَّارَةٌ",
    "answer": "Glasses",
    "detail": "Plural: نَظَّارَاتٌ",
    "singular": "نَظَّارَةٌ",
    "plural": "نَظَّارَاتٌ"
  },
  {
    "id": "ch2-noun-رسول-messenger",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "رَسُولٌ",
    "target": "رَسُولٌ",
    "answer": "Messenger",
    "detail": "Plural: رُسُلٌ",
    "singular": "رَسُولٌ",
    "plural": "رُسُلٌ"
  },
  {
    "id": "ch2-noun-اب-father",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أَبٌ",
    "target": "أَبٌ",
    "answer": "Father",
    "detail": "Plural: آبَاءُ",
    "singular": "أَبٌ",
    "plural": "آبَاءُ"
  },
  {
    "id": "ch2-noun-ام-mother",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أُمٌ",
    "target": "أُمٌ",
    "answer": "Mother",
    "detail": "Plural: أُمَّهَاتٌ",
    "singular": "أُمٌ",
    "plural": "أُمَّهَاتٌ"
  },
  {
    "id": "ch2-noun-والد-father",
    "chapter": 2,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "وَالِدٌ",
    "target": "وَالِدٌ",
    "answer": "Father",
    "detail": "Plural: وَالِدُونَ",
    "singular": "وَالِدٌ",
    "plural": "وَالِدُونَ"
  },
  {
    "id": "ch3-verb-يسكن-to-live",
    "chapter": 3,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَسْكُنُ",
    "target": "يَسْكُنُ",
    "answer": "To live",
    "detail": "Past: سَكَنَ · Masdar: سَكَنٌ",
    "forms": {
      "past": "سَكَنَ",
      "present": "يَسْكُنُ",
      "command": "اُسْكُنْ",
      "masdar": "سَكَنٌ"
    }
  },
  {
    "id": "ch3-verb-يريد-to-want-to-intend",
    "chapter": 3,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُرِيدُ",
    "target": "يُرِيدُ",
    "answer": "To want; to intend",
    "detail": "Past: أَرَادَ · Masdar: إِرَادَةٌ",
    "forms": {
      "past": "أَرَادَ",
      "present": "يُرِيدُ",
      "command": "أَرِدْ",
      "masdar": "إِرَادَةٌ"
    }
  },
  {
    "id": "ch3-noun-ثلجة-fridge",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "ثََّلَّجَةٌ",
    "target": "ثََّلَّجَةٌ",
    "answer": "Fridge",
    "detail": "Plural: ثََّلَّجَاتٌ",
    "singular": "ثََّلَّجَةٌ",
    "plural": "ثََّلَّجَاتٌ"
  },
  {
    "id": "ch3-noun-سكن-residence",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سَكَنٌ",
    "target": "سَكَنٌ",
    "answer": "Residence",
    "detail": "Plural: مَسَاكِنُ",
    "singular": "سَكَنٌ",
    "plural": "مَسَاكِنُ"
  },
  {
    "id": "ch3-noun-سخان-boiler",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سَخَّانٌ",
    "target": "سَخَّانٌ",
    "answer": "Boiler",
    "detail": "Plural: سَخَّانَاتٌ",
    "singular": "سَخَّانٌ",
    "plural": "سَخَّانَاتٌ"
  },
  {
    "id": "ch3-noun-حي-area-district",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "حَيٌ",
    "target": "حَيٌ",
    "answer": "Area, district",
    "detail": "Plural: أَحْيَاءُ",
    "singular": "حَيٌ",
    "plural": "أَحْيَاءُ"
  },
  {
    "id": "ch3-noun-مراة-mirror",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مِرْآةٌ",
    "target": "مِرْآةٌ",
    "answer": "Mirror",
    "detail": "Plural: مَرَايَا",
    "singular": "مِرْآةٌ",
    "plural": "مَرَايَا"
  },
  {
    "id": "ch3-noun-جامعة-university",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "جَامِعَةٌ",
    "target": "جَامِعَةٌ",
    "answer": "University",
    "detail": "Plural: جَامِعَاتٌ",
    "singular": "جَامِعَةٌ",
    "plural": "جَامِعَاتٌ"
  },
  {
    "id": "ch3-noun-مطار-airport",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَطَارٌ",
    "target": "مَطَارٌ",
    "answer": "Airport",
    "detail": "Plural: مَطَارَاتٌ",
    "singular": "مَطَارٌ",
    "plural": "مَطَارَاتٌ"
  },
  {
    "id": "ch3-noun-بيت-house",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "بَيْتٌ",
    "target": "بَيْتٌ",
    "answer": "House",
    "detail": "Plural: بُيُوتٌ",
    "singular": "بَيْتٌ",
    "plural": "بُيُوتٌ"
  },
  {
    "id": "ch3-noun-دور-floor",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "دَوْرٌ",
    "target": "دَوْرٌ",
    "answer": "Floor",
    "detail": "Plural: أَدْوَارٌ",
    "singular": "دَوْرٌ",
    "plural": "أَدْوَارٌ"
  },
  {
    "id": "ch3-noun-شقة-apartment",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "شَقَّةٌ",
    "target": "شَقَّةٌ",
    "answer": "Apartment",
    "detail": "Plural: شُقَقٌ",
    "singular": "شَقَّةٌ",
    "plural": "شُقَقٌ"
  },
  {
    "id": "ch3-noun-ستارة-curtains",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سِتَارَةٌ",
    "target": "سِتَارَةٌ",
    "answer": "Curtains",
    "detail": "Plural: سَتَائِرُ",
    "singular": "سِتَارَةٌ",
    "plural": "سَتَائِرُ"
  },
  {
    "id": "ch3-noun-سرير-bed",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سَرِيرٌ",
    "target": "سَرِيرٌ",
    "answer": "Bed",
    "detail": "Plural: أَسِرَّةٌ",
    "singular": "سَرِيرٌ",
    "plural": "أَسِرَّةٌ"
  },
  {
    "id": "ch3-noun-سجادة-rug",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سَجَّادَةٌ",
    "target": "سَجَّادَةٌ",
    "answer": "Rug",
    "detail": "Plural: سَجَّادَاتٌ",
    "singular": "سَجَّادَةٌ",
    "plural": "سَجَّادَاتٌ"
  },
  {
    "id": "ch3-noun-اريكة-sofa",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أَرِيكَةٌ",
    "target": "أَرِيكَةٌ",
    "answer": "Sofa",
    "detail": "Plural: أَرَائِكُ",
    "singular": "أَرِيكَةٌ",
    "plural": "أَرَائِكُ"
  },
  {
    "id": "ch3-noun-فرن-oven",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "فُرْنٌ",
    "target": "فُرْنٌ",
    "answer": "Oven",
    "detail": "Plural: أَفْرَانٌ",
    "singular": "فُرْنٌ",
    "plural": "أَفْرَانٌ"
  },
  {
    "id": "ch3-noun-مطبخ-kitchen",
    "chapter": 3,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَطْبَخٌ",
    "target": "مَطْبَخٌ",
    "answer": "Kitchen",
    "detail": "Plural: مَطَابِخُ",
    "singular": "مَطْبَخٌ",
    "plural": "مَطَابِخُ"
  },
  {
    "id": "ch4-verb-ينام-to-sleep",
    "chapter": 4,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَنَامُ",
    "target": "يَنَامُ",
    "answer": "To sleep",
    "detail": "Past: نَامَ · Masdar: نَوْمٌ",
    "forms": {
      "past": "نَامَ",
      "present": "يَنَامُ",
      "command": "نَمْ",
      "masdar": "نَوْمٌ"
    }
  },
  {
    "id": "ch4-verb-يستيقظ-to-wake-up",
    "chapter": 4,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَسْتَيْقِظُ",
    "target": "يَسْتَيْقِظُ",
    "answer": "To wake up",
    "detail": "Past: اِسْتَيْقَظَ · Masdar: اِسْتِيقَاظٌ",
    "forms": {
      "past": "اِسْتَيْقَظَ",
      "present": "يَسْتَيْقِظُ",
      "command": "اِسْتَيْقِظْ",
      "masdar": "اِسْتِيقَاظٌ"
    }
  },
  {
    "id": "ch4-verb-يذهب-to-go",
    "chapter": 4,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَذْهَبُ",
    "target": "يَذْهَبُ",
    "answer": "To go",
    "detail": "Past: ذَهَبَ · Masdar: ذَهَابٌ · Preposition: إِلَى",
    "forms": {
      "past": "ذَهَبَ",
      "present": "يَذْهَبُ",
      "command": "اِذْهَبْ",
      "masdar": "ذَهَابٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch4-verb-يكنس-vacuum",
    "chapter": 4,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَكْنُسُ",
    "target": "يَكْنُسُ",
    "answer": "vacuum",
    "detail": "Past: كَنَسَ · Masdar: كَنْسٌ",
    "forms": {
      "past": "كَنَسَ",
      "present": "يَكْنُسُ",
      "command": "اُكْنُسْ",
      "masdar": "كَنْسٌ"
    }
  },
  {
    "id": "ch4-verb-يغسل-to-wash",
    "chapter": 4,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَغْسِلُ",
    "target": "يَغْسِلُ",
    "answer": "To wash",
    "detail": "Past: غَسَلَ · Masdar: غَسْلٌ",
    "forms": {
      "past": "غَسَلَ",
      "present": "يَغْسِلُ",
      "command": "اِغْسِلْ",
      "masdar": "غَسْلٌ"
    }
  },
  {
    "id": "ch4-verb-يكوي-to-iron",
    "chapter": 4,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَكْوِي",
    "target": "يَكْوِي",
    "answer": "To iron",
    "detail": "Past: كَوَى · Masdar: كَيٌ",
    "forms": {
      "past": "كَوَى",
      "present": "يَكْوِي",
      "command": "اِكْوِ",
      "masdar": "كَيٌ"
    }
  },
  {
    "id": "ch4-verb-يشاهد-to-watch",
    "chapter": 4,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُشاهِدُ",
    "target": "يُشاهِدُ",
    "answer": "To watch",
    "detail": "Past: شَاهَدَ · Masdar: مُشَاهَدَةٌ",
    "forms": {
      "past": "شَاهَدَ",
      "present": "يُشاهِدُ",
      "command": "شَاهِدْ",
      "masdar": "مُشَاهَدَةٌ"
    }
  },
  {
    "id": "ch4-noun-سيارة-car",
    "chapter": 4,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سَيَّارَةٌ",
    "target": "سَيَّارَةٌ",
    "answer": "Car",
    "detail": "Plural: سَيَّارَاتٌ",
    "singular": "سَيَّارَةٌ",
    "plural": "سَيَّارَاتٌ"
  },
  {
    "id": "ch4-noun-صلة-prayer",
    "chapter": 4,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "صََّلَةٌ",
    "target": "صََّلَةٌ",
    "answer": "Prayer",
    "detail": "Plural: صَلَوَاتٌ",
    "singular": "صََّلَةٌ",
    "plural": "صَلَوَاتٌ"
  },
  {
    "id": "ch4-noun-حافلة-bus",
    "chapter": 4,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "حَافِلَةٌ",
    "target": "حَافِلَةٌ",
    "answer": "Bus",
    "detail": "Plural: حَافَِّلَتٌ",
    "singular": "حَافِلَةٌ",
    "plural": "حَافَِّلَتٌ"
  },
  {
    "id": "ch4-noun-مدرسة-school",
    "chapter": 4,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَدْرَسَةٌ",
    "target": "مَدْرَسَةٌ",
    "answer": "School",
    "detail": "Plural: مَدَارِسُ",
    "singular": "مَدْرَسَةٌ",
    "plural": "مَدَارِسُ"
  },
  {
    "id": "ch4-noun-ساعة-hour-clock",
    "chapter": 4,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سَاعَةٌ",
    "target": "سَاعَةٌ",
    "answer": "Hour, clock",
    "detail": "Plural: سَاعَاتٌ",
    "singular": "سَاعَةٌ",
    "plural": "سَاعَاتٌ"
  },
  {
    "id": "ch4-noun-عطلة-holiday",
    "chapter": 4,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "عُطْلَةٌ",
    "target": "عُطْلَةٌ",
    "answer": "Holiday",
    "detail": "Plural: عُطَلٌ / عُطَّْلَتٌ",
    "singular": "عُطْلَةٌ",
    "plural": "عُطَلٌ / عُطَّْلَتٌ"
  },
  {
    "id": "ch4-noun-صحيفة-newspaper",
    "chapter": 4,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "صَحِيفَةٌ",
    "target": "صَحِيفَةٌ",
    "answer": "Newspaper",
    "detail": "Plural: صُحُفٌ",
    "singular": "صَحِيفَةٌ",
    "plural": "صُحُفٌ"
  },
  {
    "id": "ch4-noun-تلفاز-television",
    "chapter": 4,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "تِلْفَازٌ",
    "target": "تِلْفَازٌ",
    "answer": "Television",
    "detail": "Plural: تِلْفَازَاتٌ",
    "singular": "تِلْفَازٌ",
    "plural": "تِلْفَازَاتٌ"
  },
  {
    "id": "ch5-verb-ياكل-to-eat",
    "chapter": 5,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَأْكُلُ",
    "target": "يَأْكُلُ",
    "answer": "To eat",
    "detail": "Past: أَكَلَ · Masdar: أَكْلٌ",
    "forms": {
      "past": "أَكَلَ",
      "present": "يَأْكُلُ",
      "command": "كُلْ",
      "masdar": "أَكْلٌ"
    }
  },
  {
    "id": "ch5-verb-يطلب-to-want-to-order-to-request",
    "chapter": 5,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَطْلُبُ",
    "target": "يَطْلُبُ",
    "answer": "To want; to order; to request",
    "detail": "Past: طَلَبَ · Masdar: طَلَبٌ",
    "forms": {
      "past": "طَلَبَ",
      "present": "يَطْلُبُ",
      "command": "أُطْلُبْ",
      "masdar": "طَلَبٌ"
    }
  },
  {
    "id": "ch5-verb-يفضل-to-prefer",
    "chapter": 5,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُفَضِلُ",
    "target": "يُفَضِلُ",
    "answer": "To prefer",
    "detail": "Past: فَضَّلَ · Masdar: تَفْضِيلٌ",
    "forms": {
      "past": "فَضَّلَ",
      "present": "يُفَضِلُ",
      "command": "فَضِلْ",
      "masdar": "تَفْضِيلٌ"
    }
  },
  {
    "id": "ch5-verb-يشرب-to-drink",
    "chapter": 5,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَشْرَبُ",
    "target": "يَشْرَبُ",
    "answer": "To drink",
    "detail": "Past: شَرِبَ · Masdar: شُرْبٌ",
    "forms": {
      "past": "شَرِبَ",
      "present": "يَشْرَبُ",
      "command": "اِشْرَبْ",
      "masdar": "شُرْبٌ"
    }
  },
  {
    "id": "ch5-verb-يحول-to-change-convert-to-transfer",
    "chapter": 5,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُحَوِلُ",
    "target": "يُحَوِلُ",
    "answer": "To change, convert; to transfer",
    "detail": "Past: حَوَّلَ · Masdar: تَحْوِيلٌ",
    "forms": {
      "past": "حَوَّلَ",
      "present": "يُحَوِلُ",
      "command": "حَوِلْ",
      "masdar": "تَحْوِيلٌ"
    }
  },
  {
    "id": "ch5-noun-ماء-water",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَاءٌ",
    "target": "مَاءٌ",
    "answer": "Water",
    "detail": "Plural: مِيَاهٌ",
    "singular": "مَاءٌ",
    "plural": "مِيَاهٌ"
  },
  {
    "id": "ch5-noun-شراب-drink",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "شَرَابٌ",
    "target": "شَرَابٌ",
    "answer": "Drink",
    "detail": "Plural: أَشْرِبَةٌ",
    "singular": "شَرَابٌ",
    "plural": "أَشْرِبَةٌ"
  },
  {
    "id": "ch5-noun-تمرة-date",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "تَمْرَةٌ",
    "target": "تَمْرَةٌ",
    "answer": "Date",
    "detail": "Plural: تَمْرٌ / تُمُورٌ",
    "singular": "تَمْرَةٌ",
    "plural": "تَمْرٌ / تُمُورٌ"
  },
  {
    "id": "ch5-noun-طعام-food",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "طَعَامٌ",
    "target": "طَعَامٌ",
    "answer": "Food",
    "detail": "Plural: أَطْعِمَةٌ",
    "singular": "طَعَامٌ",
    "plural": "أَطْعِمَةٌ"
  },
  {
    "id": "ch5-noun-لحم-meat",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "لَحْمٌ",
    "target": "لَحْمٌ",
    "answer": "Meat",
    "detail": "Plural: لُحُومٌ",
    "singular": "لَحْمٌ",
    "plural": "لُحُومٌ"
  },
  {
    "id": "ch5-noun-وجبة-meal",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "وَجْبَةٌ",
    "target": "وَجْبَةٌ",
    "answer": "Meal",
    "detail": "Plural: وَجْبَاتٌ",
    "singular": "وَجْبَةٌ",
    "plural": "وَجْبَاتٌ"
  },
  {
    "id": "ch5-noun-عنب-grapes",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "عِنَبٌ",
    "target": "عِنَبٌ",
    "answer": "Grapes",
    "detail": "Plural: أَعْنَابٌ",
    "singular": "عِنَبٌ",
    "plural": "أَعْنَابٌ"
  },
  {
    "id": "ch5-noun-دجاجة-chicken",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "دَجَاجَةٌ",
    "target": "دَجَاجَةٌ",
    "answer": "Chicken",
    "detail": "Plural: دَجَاجٌ",
    "singular": "دَجَاجَةٌ",
    "plural": "دَجَاجٌ"
  },
  {
    "id": "ch5-noun-سلطة-salad",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سَلَطَةٌ",
    "target": "سَلَطَةٌ",
    "answer": "Salad",
    "detail": "Plural: سَلَطَاتٌ",
    "singular": "سَلَطَةٌ",
    "plural": "سَلَطَاتٌ"
  },
  {
    "id": "ch5-noun-سمكة-fish",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سَمَكَةٌ",
    "target": "سَمَكَةٌ",
    "answer": "Fish",
    "detail": "Plural: سَمَكٌ / أَسْمَاكٌ",
    "singular": "سَمَكَةٌ",
    "plural": "سَمَكٌ / أَسْمَاكٌ"
  },
  {
    "id": "ch5-noun-مائدة-table",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَائِدَةٌ",
    "target": "مَائِدَةٌ",
    "answer": "Table",
    "detail": "Plural: مَوَائِدُ",
    "singular": "مَائِدَةٌ",
    "plural": "مَوَائِدُ"
  },
  {
    "id": "ch5-noun-فاكهة-fruit",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "فَاكِهَةٌ",
    "target": "فَاكِهَةٌ",
    "answer": "Fruit",
    "detail": "Plural: فَوَاكِهُ",
    "singular": "فَاكِهَةٌ",
    "plural": "فَوَاكِهُ"
  },
  {
    "id": "ch5-noun-ضيف-guest",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "ضَيْفٌ",
    "target": "ضَيْفٌ",
    "answer": "Guest",
    "detail": "Plural: ضُيُوفٌ",
    "singular": "ضَيْفٌ",
    "plural": "ضُيُوفٌ"
  },
  {
    "id": "ch5-noun-وزن-weight",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "وَزْنٌ",
    "target": "وَزْنٌ",
    "answer": "Weight",
    "detail": "Plural: أَوْزَانٌ",
    "singular": "وَزْنٌ",
    "plural": "أَوْزَانٌ"
  },
  {
    "id": "ch5-noun-جوعان-hungry",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "جَوْعَانُ",
    "target": "جَوْعَانُ",
    "answer": "Hungry",
    "detail": "Plural: جَوْعَى",
    "singular": "جَوْعَانُ",
    "plural": "جَوْعَى"
  },
  {
    "id": "ch5-noun-كيل-kilo",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "كَيْلٌ",
    "target": "كَيْلٌ",
    "answer": "Kilo",
    "detail": "Plural: أَكْيَالٌ",
    "singular": "كَيْلٌ",
    "plural": "أَكْيَالٌ"
  },
  {
    "id": "ch5-noun-شبعان-full",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "شَبْعَانُ",
    "target": "شَبْعَانُ",
    "answer": "Full",
    "detail": "Plural: شَبْعَى",
    "singular": "شَبْعَانُ",
    "plural": "شَبْعَى"
  },
  {
    "id": "ch5-noun-يوم-day",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "يَوْمٌ",
    "target": "يَوْمٌ",
    "answer": "Day",
    "detail": "Plural: أَيَّامٌ",
    "singular": "يَوْمٌ",
    "plural": "أَيَّامٌ"
  },
  {
    "id": "ch5-noun-نحيف-thin",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "نَحِيفٌ",
    "target": "نَحِيفٌ",
    "answer": "Thin",
    "detail": "Plural: نِحَافٌ",
    "singular": "نَحِيفٌ",
    "plural": "نِحَافٌ"
  },
  {
    "id": "ch5-noun-سمين-fat",
    "chapter": 5,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سَمِينٌ",
    "target": "سَمِينٌ",
    "answer": "Fat",
    "detail": "Plural: سِمَانٌ",
    "singular": "سَمِينٌ",
    "plural": "سِمَانٌ"
  },
  {
    "id": "ch6-verb-يستطيع-can-to-be-able-to",
    "chapter": 6,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَسْتَطِيعُ",
    "target": "يَسْتَطِيعُ",
    "answer": "Can; to be able to",
    "detail": "Past: اِسْتَطَاعَ · Masdar: اِسْتِطَاعَةٌ",
    "forms": {
      "past": "اِسْتَطَاعَ",
      "present": "يَسْتَطِيعُ",
      "command": "اِسْتَطِعْ",
      "masdar": "اِسْتِطَاعَةٌ"
    }
  },
  {
    "id": "ch6-verb-يعمل-to-work",
    "chapter": 6,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَعْمَلُ",
    "target": "يَعْمَلُ",
    "answer": "To work",
    "detail": "Past: عَمِلَ · Masdar: عَمَلٌ",
    "forms": {
      "past": "عَمِلَ",
      "present": "يَعْمَلُ",
      "command": "اِعمَلْ",
      "masdar": "عَمَلٌ"
    }
  },
  {
    "id": "ch6-verb-يسافر-to-travel",
    "chapter": 6,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُسَافِرُ",
    "target": "يُسَافِرُ",
    "answer": "To travel",
    "detail": "Past: سَافَرَ · Masdar: مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ · Preposition: إِلَى",
    "forms": {
      "past": "سَافَرَ",
      "present": "يُسَافِرُ",
      "command": "سَافِرْ",
      "masdar": "مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch6-verb-ينتظر-to-wait",
    "chapter": 6,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَنْتَظِرُ",
    "target": "يَنْتَظِرُ",
    "answer": "To wait",
    "detail": "Past: اِنْتَظَرَ · Masdar: اِنْتِظَارٌ",
    "forms": {
      "past": "اِنْتَظَرَ",
      "present": "يَنْتَظِرُ",
      "command": "اِنْتَظِرْ",
      "masdar": "اِنْتِظَارٌ"
    }
  },
  {
    "id": "ch6-noun-افكار-sick-unwell-patient",
    "chapter": 6,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أَفْكَارٌ",
    "target": "أَفْكَارٌ",
    "answer": "Sick, unwell; patient م ر ض ى",
    "detail": "Plural: مَرِيضٌ",
    "singular": "أَفْكَارٌ",
    "plural": "مَرِيضٌ"
  },
  {
    "id": "ch6-noun-فكرة-idea",
    "chapter": 6,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "فِكْرَةٌ",
    "target": "فِكْرَةٌ",
    "answer": "Idea",
    "detail": "Singular form from the textbook list.",
    "singular": "فِكْرَةٌ"
  },
  {
    "id": "ch6-noun-منبهكسالي-alarm",
    "chapter": 6,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُنَبِهكُسَالَىٌ",
    "target": "مُنَبِهكُسَالَىٌ",
    "answer": "Alarm",
    "detail": "Plural: مُنَبِهَاتٌ",
    "singular": "مُنَبِهكُسَالَىٌ",
    "plural": "مُنَبِهَاتٌ"
  },
  {
    "id": "ch6-noun-كسلن-lazy",
    "chapter": 6,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "كَسَّْلَنُ",
    "target": "كَسَّْلَنُ",
    "answer": "Lazy",
    "detail": "Singular form from the textbook list.",
    "singular": "كَسَّْلَنُ"
  },
  {
    "id": "ch7-verb-يبدا-to-start",
    "chapter": 7,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَبْدَأُ",
    "target": "يَبْدَأُ",
    "answer": "To start",
    "detail": "Past: بَدَأَ · Masdar: بِدَايَةٌ",
    "forms": {
      "past": "بَدَأَ",
      "present": "يَبْدَأُ",
      "command": "اِبْدَأْ",
      "masdar": "بِدَايَةٌ"
    }
  },
  {
    "id": "ch7-verb-ينتهي-to-finish",
    "chapter": 7,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَنْتَهِي",
    "target": "يَنْتَهِي",
    "answer": "To finish",
    "detail": "Past: اِنْتَهَىٌ · Masdar: اِنْتِهَاءٌ",
    "forms": {
      "past": "اِنْتَهَىٌ",
      "present": "يَنْتَهِي",
      "command": "اِنْتَهِ",
      "masdar": "اِنْتِهَاءٌ"
    }
  },
  {
    "id": "ch7-verb-يدرس-to-study",
    "chapter": 7,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَدْرُسُ",
    "target": "يَدْرُسُ",
    "answer": "To study",
    "detail": "Past: دَرَسَ · Masdar: دِرَاسَةٌ",
    "forms": {
      "past": "دَرَسَ",
      "present": "يَدْرُسُ",
      "command": "اُدْرُسْ",
      "masdar": "دِرَاسَةٌ"
    }
  },
  {
    "id": "ch7-verb-يدرس-to-teach",
    "chapter": 7,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُدَرِسُ",
    "target": "يُدَرِسُ",
    "answer": "To teach",
    "detail": "Past: دَرَّسَ · Masdar: تَدْرِيسٌ",
    "forms": {
      "past": "دَرَّسَ",
      "present": "يُدَرِسُ",
      "command": "دَرِسْ",
      "masdar": "تَدْرِيسٌ"
    }
  },
  {
    "id": "ch7-verb-يكون-to-be",
    "chapter": 7,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَكُونُ",
    "target": "يَكُونُ",
    "answer": "To be",
    "detail": "Past: كَانَ · Masdar: كَوْنٌ",
    "forms": {
      "past": "كَانَ",
      "present": "يَكُونُ",
      "command": "كُنْ",
      "masdar": "كَوْنٌ"
    }
  },
  {
    "id": "ch7-verb-يكمل-to-complete",
    "chapter": 7,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُكْمِلُ",
    "target": "يُكْمِلُ",
    "answer": "To complete",
    "detail": "Past: أَكْمَلَ · Masdar: إِكْمَالٌ",
    "forms": {
      "past": "أَكْمَلَ",
      "present": "يُكْمِلُ",
      "command": "أَكْمِلْ",
      "masdar": "إِكْمَالٌ"
    }
  },
  {
    "id": "ch7-verb-يصحح-to-correct",
    "chapter": 7,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُصَحِحُ",
    "target": "يُصَحِحُ",
    "answer": "To correct",
    "detail": "Past: صَحَّحَ · Masdar: تَصْحِيحٌ",
    "forms": {
      "past": "صَحَّحَ",
      "present": "يُصَحِحُ",
      "command": "صَحِحْ",
      "masdar": "تَصْحِيحٌ"
    }
  },
  {
    "id": "ch7-noun-عام-year",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "عَامٌ",
    "target": "عَامٌ",
    "answer": "Year",
    "detail": "Plural: أَعْوَامٌ",
    "singular": "عَامٌ",
    "plural": "أَعْوَامٌ"
  },
  {
    "id": "ch7-noun-لوحة-noticeboard",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "لَوْحَةٌ",
    "target": "لَوْحَةٌ",
    "answer": "Noticeboard",
    "detail": "Plural: لَوْحَاتٌ",
    "singular": "لَوْحَةٌ",
    "plural": "لَوْحَاتٌ"
  },
  {
    "id": "ch7-noun-حصة-lesson",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "حِصَّةٌ",
    "target": "حِصَّةٌ",
    "answer": "Lesson",
    "detail": "Plural: حِصَصٌ",
    "singular": "حِصَّةٌ",
    "plural": "حِصَصٌ"
  },
  {
    "id": "ch7-noun-جدول-table-chart",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "جَدْوَلٌ",
    "target": "جَدْوَلٌ",
    "answer": "Table; chart",
    "detail": "Plural: جَدَاوِلُ",
    "singular": "جَدْوَلٌ",
    "plural": "جَدَاوِلُ"
  },
  {
    "id": "ch7-noun-كلية-faculty",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "كُلِيَّةٌ",
    "target": "كُلِيَّةٌ",
    "answer": "Faculty",
    "detail": "Plural: كُلِيَّاتٌ",
    "singular": "كُلِيَّةٌ",
    "plural": "كُلِيَّاتٌ"
  },
  {
    "id": "ch7-noun-اسبوع-week",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أُسْبُوع",
    "target": "أُسْبُوع",
    "answer": "Week",
    "detail": "Plural: أَسَابِيعُ",
    "singular": "أُسْبُوع",
    "plural": "أَسَابِيعُ"
  },
  {
    "id": "ch7-noun-وقت-time",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "وَقْتٌ",
    "target": "وَقْتٌ",
    "answer": "Time",
    "detail": "Plural: أَوْقَاتٌ",
    "singular": "وَقْتٌ",
    "plural": "أَوْقَاتٌ"
  },
  {
    "id": "ch7-noun-مادة-course-subject",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَادَّةٌ",
    "target": "مَادَّةٌ",
    "answer": "Course; subject",
    "detail": "Plural: مَوَادٌ",
    "singular": "مَادَّةٌ",
    "plural": "مَوَادٌ"
  },
  {
    "id": "ch7-noun-استراحة-break",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "اِسْتِرَاحَةٌ",
    "target": "اِسْتِرَاحَةٌ",
    "answer": "Break",
    "detail": "Plural: اِسْتِرَاحَاتٌ",
    "singular": "اِسْتِرَاحَةٌ",
    "plural": "اِسْتِرَاحَاتٌ"
  },
  {
    "id": "ch7-noun-ثقافة-culture-education",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "ثَقَافَةٌ",
    "target": "ثَقَافَةٌ",
    "answer": "Culture; education",
    "detail": "Plural: ثَقَافَاتٌ",
    "singular": "ثَقَافَةٌ",
    "plural": "ثَقَافَاتٌ"
  },
  {
    "id": "ch7-noun-مكتبة-library-bookstore",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَكْتَبَةٌ",
    "target": "مَكْتَبَةٌ",
    "answer": "Library, bookstore",
    "detail": "Plural: مَكْتَبَاتٌ",
    "singular": "مَكْتَبَةٌ",
    "plural": "مَكْتَبَاتٌ"
  },
  {
    "id": "ch7-noun-اختبار-examination-test",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "اِخْتِبَارٌ",
    "target": "اِخْتِبَارٌ",
    "answer": "Examination, test",
    "detail": "Plural: اِخْتِبَارَاتٌ",
    "singular": "اِخْتِبَارٌ",
    "plural": "اِخْتِبَارَاتٌ"
  },
  {
    "id": "ch7-noun-حاسوب-computer",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "حَاسُوبٌ",
    "target": "حَاسُوبٌ",
    "answer": "Computer",
    "detail": "Plural: حَوَاسِيبُ",
    "singular": "حَاسُوبٌ",
    "plural": "حَوَاسِيبُ"
  },
  {
    "id": "ch7-noun-مختبر-laboratory",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُخْتَبَرٌ",
    "target": "مُخْتَبَرٌ",
    "answer": "Laboratory",
    "detail": "Plural: مُخْتَبَرَاتٌ",
    "singular": "مُخْتَبَرٌ",
    "plural": "مُخْتَبَرَاتٌ"
  },
  {
    "id": "ch7-noun-شهور-month",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "شُهُورٌ",
    "target": "شُهُورٌ",
    "answer": "Month",
    "detail": "Plural: أَشْهُرٌ",
    "singular": "شُهُورٌ",
    "plural": "أَشْهُرٌ"
  },
  {
    "id": "ch7-noun-صف-class",
    "chapter": 7,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "صَفٌ",
    "target": "صَفٌ",
    "answer": "Class",
    "detail": "Plural: شَهْرٌ / صُفُوفٌ",
    "singular": "صَفٌ",
    "plural": "شَهْرٌ / صُفُوفٌ"
  },
  {
    "id": "ch8-verb-يحب-to-love-to-like",
    "chapter": 8,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُحِبٌ",
    "target": "يُحِبٌ",
    "answer": "To love; to like",
    "detail": "Past: أَحَبَّ · Masdar: حُبٌ",
    "forms": {
      "past": "أَحَبَّ",
      "present": "يُحِبٌ",
      "command": "أَحِبَّ",
      "masdar": "حُبٌ"
    }
  },
  {
    "id": "ch8-verb-يرسم-to-draw",
    "chapter": 8,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَرْسُمُ",
    "target": "يَرْسُمُ",
    "answer": "To draw",
    "detail": "Past: رَسَمَ · Masdar: رَسْمٌ",
    "forms": {
      "past": "رَسَمَ",
      "present": "يَرْسُمُ",
      "command": "اُرْسُمْ",
      "masdar": "رَسْمٌ"
    }
  },
  {
    "id": "ch8-verb-يختار-to-choose",
    "chapter": 8,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَخْتَارُ",
    "target": "يَخْتَارُ",
    "answer": "To choose",
    "detail": "Past: اِخْتَارَ · Masdar: اِخْتِيَارٌ",
    "forms": {
      "past": "اِخْتَارَ",
      "present": "يَخْتَارُ",
      "command": "اِخْتَرْ",
      "masdar": "اِخْتِيَارٌ"
    }
  },
  {
    "id": "ch8-verb-يصبح-to-become",
    "chapter": 8,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُصْبِحُ",
    "target": "يُصْبِحُ",
    "answer": "To become",
    "detail": "Past: أَصْبَحَ · Masdar: إِصْبَاحٌ",
    "forms": {
      "past": "أَصْبَحَ",
      "present": "يُصْبِحُ",
      "command": "أَصْبِحْ",
      "masdar": "إِصْبَاحٌ"
    }
  },
  {
    "id": "ch8-verb-يمل-to-fill",
    "chapter": 8,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَمْلَُ",
    "target": "يَمْلَُ",
    "answer": "To fill",
    "detail": "Past: مَلََ · Masdar: مَلْءٌ",
    "forms": {
      "past": "مَلََ",
      "present": "يَمْلَُ",
      "command": "اِمْلْ",
      "masdar": "مَلْءٌ"
    }
  },
  {
    "id": "ch8-verb-يستريح-to-rest-relax-to-take-a-break",
    "chapter": 8,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَسْتَرِيحُ",
    "target": "يَسْتَرِيحُ",
    "answer": "To rest, relax; to take a break",
    "detail": "Past: اِسْتَرَاحَ · Masdar: اِسْتِرَاحَةٌ",
    "forms": {
      "past": "اِسْتَرَاحَ",
      "present": "يَسْتَرِيحُ",
      "command": "اِسْتَرِحْ",
      "masdar": "اِسْتِرَاحَةٌ"
    }
  },
  {
    "id": "ch8-noun-فراغ-blank-space-gap",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "فَرَاغٌ",
    "target": "فَرَاغٌ",
    "answer": "Blank, space, gap",
    "detail": "Plural: فَرَاغَاتٌ",
    "singular": "فَرَاغٌ",
    "plural": "فَرَاغَاتٌ"
  },
  {
    "id": "ch8-noun-شركة-company",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "شَرِكَةٌ",
    "target": "شَرِكَةٌ",
    "answer": "Company",
    "detail": "Plural: شَرِكَاتٌ",
    "singular": "شَرِكَةٌ",
    "plural": "شَرِكَاتٌ"
  },
  {
    "id": "ch8-noun-مكان-place-location",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَكَانٌ",
    "target": "مَكَانٌ",
    "answer": "Place, location",
    "detail": "Plural: أَمَاكِنُ",
    "singular": "مَكَانٌ",
    "plural": "أَمَاكِنُ"
  },
  {
    "id": "ch8-noun-مستشفياتمستشفي-hospital",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُسْتَشْفَيَاتمُسْتَشْفَىٌ",
    "target": "مُسْتَشْفَيَاتمُسْتَشْفَىٌ",
    "answer": "Hospital",
    "detail": "Singular form from the textbook list.",
    "singular": "مُسْتَشْفَيَاتمُسْتَشْفَىٌ"
  },
  {
    "id": "ch8-noun-ممرض-nurse",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُمَرِضٌ",
    "target": "مُمَرِضٌ",
    "answer": "Nurse",
    "detail": "Plural: مُمَرِضُونَ",
    "singular": "مُمَرِضٌ",
    "plural": "مُمَرِضُونَ"
  },
  {
    "id": "ch8-noun-صيدلي-pharmacist",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "صَيْدَلِيٌ",
    "target": "صَيْدَلِيٌ",
    "answer": "Pharmacist",
    "detail": "Plural: صَيَادِلَةٌ",
    "singular": "صَيْدَلِيٌ",
    "plural": "صَيَادِلَةٌ"
  },
  {
    "id": "ch8-noun-عبارة-phrase-term",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "عِبَارَةٌ",
    "target": "عِبَارَةٌ",
    "answer": "Phrase, term",
    "detail": "Plural: عِبَارَاتٌ",
    "singular": "عِبَارَةٌ",
    "plural": "عِبَارَاتٌ"
  },
  {
    "id": "ch8-noun-طيار-pilot",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "طَيَّارٌ",
    "target": "طَيَّارٌ",
    "answer": "Pilot",
    "detail": "Plural: طَيَّارُونَ",
    "singular": "طَيَّارٌ",
    "plural": "طَيَّارُونَ"
  },
  {
    "id": "ch8-noun-مهنة-occupation",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مِهْنَةٌ",
    "target": "مِهْنَةٌ",
    "answer": "Occupation",
    "detail": "Plural: مِهَنٌ",
    "singular": "مِهْنَةٌ",
    "plural": "مِهَنٌ"
  },
  {
    "id": "ch8-noun-شخص-person",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "شَخْصٌ",
    "target": "شَخْصٌ",
    "answer": "Person",
    "detail": "Plural: أَشْخَاصٌ",
    "singular": "شَخْصٌ",
    "plural": "أَشْخَاصٌ"
  },
  {
    "id": "ch8-noun-طفل-infant-baby-child",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "طِفْلٌ",
    "target": "طِفْلٌ",
    "answer": "Infant; baby; child",
    "detail": "Plural: أَطْفَالٌ",
    "singular": "طِفْلٌ",
    "plural": "أَطْفَالٌ"
  },
  {
    "id": "ch8-noun-مرحلة-stage-level",
    "chapter": 8,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَرْحَلَةٌ",
    "target": "مَرْحَلَةٌ",
    "answer": "Stage, level",
    "detail": "Plural: مَرَاحِلُ",
    "singular": "مَرْحَلَةٌ",
    "plural": "مَرَاحِلُ"
  },
  {
    "id": "ch9-verb-يتسوق-to-shop",
    "chapter": 9,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَتَسَوَّقُ",
    "target": "يَتَسَوَّقُ",
    "answer": "To shop",
    "detail": "Past: تَسَوَّقَ · Masdar: تَسَوقٌ",
    "forms": {
      "past": "تَسَوَّقَ",
      "present": "يَتَسَوَّقُ",
      "command": "تَسَوَّقْ",
      "masdar": "تَسَوقٌ"
    }
  },
  {
    "id": "ch9-noun-ري-riyal-saudi-currency",
    "chapter": 9,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "رِيَِ",
    "target": "رِيَِ",
    "answer": "Riyal (Saudi currency)",
    "detail": "Plural: رِيَاالَتٌ",
    "singular": "رِيَِ",
    "plural": "رِيَاالَتٌ"
  },
  {
    "id": "ch9-noun-معجم-dictionary",
    "chapter": 9,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُعْجَمٌ",
    "target": "مُعْجَمٌ",
    "answer": "Dictionary",
    "detail": "Plural: مَعَاجِمُ",
    "singular": "مُعْجَمٌ",
    "plural": "مَعَاجِمُ"
  },
  {
    "id": "ch9-noun-قميص-shirt",
    "chapter": 9,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "قَمِيصٌ",
    "target": "قَمِيصٌ",
    "answer": "Shirt",
    "detail": "Plural: قُمْصَانٌ",
    "singular": "قَمِيصٌ",
    "plural": "قُمْصَانٌ"
  },
  {
    "id": "ch9-noun-دفتر-notepad",
    "chapter": 9,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "دَفْتَرٌ",
    "target": "دَفْتَرٌ",
    "answer": "Notepad",
    "detail": "Plural: دَفَاتِرُ",
    "singular": "دَفْتَرٌ",
    "plural": "دَفَاتِرُ"
  },
  {
    "id": "ch9-noun-ثوب-thobe",
    "chapter": 9,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "ثَوْبٌ",
    "target": "ثَوْبٌ",
    "answer": "Thobe",
    "detail": "Plural: أَثْوَابٌ",
    "singular": "ثَوْبٌ",
    "plural": "أَثْوَابٌ"
  },
  {
    "id": "ch9-noun-قلم-pen",
    "chapter": 9,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "قَلَمٌ",
    "target": "قَلَمٌ",
    "answer": "Pen",
    "detail": "Plural: أَقَّْلَمٌ",
    "singular": "قَلَمٌ",
    "plural": "أَقَّْلَمٌ"
  },
  {
    "id": "ch10-verb-يمطر-to-rain",
    "chapter": 10,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُمْطِرُ",
    "target": "يُمْطِرُ",
    "answer": "To rain",
    "detail": "Past: أَمْطَرَ · Masdar: إِمْطَارٌ",
    "forms": {
      "past": "أَمْطَرَ",
      "present": "يُمْطِرُ",
      "command": "أَمْطِرْ",
      "masdar": "إِمْطَارٌ"
    }
  },
  {
    "id": "ch10-verb-يترك-to-leave",
    "chapter": 10,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَتْرُكُ",
    "target": "يَتْرُكُ",
    "answer": "To leave",
    "detail": "Past: تَرَكَ · Masdar: تَرْكٌ",
    "forms": {
      "past": "تَرَكَ",
      "present": "يَتْرُكُ",
      "command": "اُتْرُكْ",
      "masdar": "تَرْكٌ"
    }
  },
  {
    "id": "ch10-verb-يبارك-to-bless",
    "chapter": 10,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُبَارِكُ",
    "target": "يُبَارِكُ",
    "answer": "To bless",
    "detail": "Past: بَارَكَ · Masdar: مُبَارَكَةٌ",
    "forms": {
      "past": "بَارَكَ",
      "present": "يُبَارِكُ",
      "command": "بَارِكْ",
      "masdar": "مُبَارَكَةٌ"
    }
  },
  {
    "id": "ch10-verb-يبقي-to-stay-remain",
    "chapter": 10,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَبْقَى",
    "target": "يَبْقَى",
    "answer": "To stay; remain",
    "detail": "Past: بَقِيَ · Masdar: بَقَاءٌ",
    "forms": {
      "past": "بَقِيَ",
      "present": "يَبْقَى",
      "command": "اِبْقَ",
      "masdar": "بَقَاءٌ"
    }
  },
  {
    "id": "ch10-verb-تكلم-to-speak",
    "chapter": 10,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "تَكَلَّمَ",
    "target": "تَكَلَّمَ",
    "answer": "To speak",
    "detail": "Past: مَعَ · Masdar: تَكَلمٌ / تَكَلَّمْ",
    "forms": {
      "past": "مَعَ",
      "present": "تَكَلَّمَ",
      "command": "يَتَكَلَّمُ",
      "masdar": "تَكَلمٌ / تَكَلَّمْ"
    }
  },
  {
    "id": "ch10-verb-يقض-to-spend-time",
    "chapter": 10,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَقْضِ",
    "target": "يَقْضِ",
    "answer": "To spend (time)",
    "detail": "Past: يقَضَى · Masdar: قَضَاءٌ",
    "forms": {
      "past": "يقَضَى",
      "present": "يَقْضِ",
      "command": "اِقْضِ",
      "masdar": "قَضَاءٌ"
    }
  },
  {
    "id": "ch10-verb-يحضر-to-bring",
    "chapter": 10,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُحْضِرُ",
    "target": "يُحْضِرُ",
    "answer": "To bring",
    "detail": "Past: أَحْضَرَ · Masdar: إِحْضَارٌ",
    "forms": {
      "past": "أَحْضَرَ",
      "present": "يُحْضِرُ",
      "command": "أَحْضِرْ",
      "masdar": "إِحْضَارٌ"
    }
  },
  {
    "id": "ch10-verb-يحضر-to-attend",
    "chapter": 10,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَحْضُرُ",
    "target": "يَحْضُرُ",
    "answer": "To attend",
    "detail": "Past: حَضَرَ · Masdar: حُضُورٌ",
    "forms": {
      "past": "حَضَرَ",
      "present": "يَحْضُرُ",
      "command": "اُحْضُرْ",
      "masdar": "حُضُورٌ"
    }
  },
  {
    "id": "ch10-noun-سوق-market",
    "chapter": 10,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سُوقٌ",
    "target": "سُوقٌ",
    "answer": "Market",
    "detail": "Plural: أَسْوَاقٌ",
    "singular": "سُوقٌ",
    "plural": "أَسْوَاقٌ"
  },
  {
    "id": "ch10-noun-مظلة-umbrella",
    "chapter": 10,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مِظَلَّةٌ",
    "target": "مِظَلَّةٌ",
    "answer": "Umbrella",
    "detail": "Plural: مِظََّلَّتٌ",
    "singular": "مِظَلَّةٌ",
    "plural": "مِظََّلَّتٌ"
  },
  {
    "id": "ch10-noun-فصل-season",
    "chapter": 10,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "فَصْلٌ",
    "target": "فَصْلٌ",
    "answer": "Season",
    "detail": "Plural: فُصُوْلٌ",
    "singular": "فَصْلٌ",
    "plural": "فُصُوْلٌ"
  },
  {
    "id": "ch10-noun-ليلة-night",
    "chapter": 10,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "لَيْلَةٌ",
    "target": "لَيْلَةٌ",
    "answer": "Night",
    "detail": "Plural: لَيَّلَتٌ / لَيَالٌ",
    "singular": "لَيْلَةٌ",
    "plural": "لَيَّلَتٌ / لَيَالٌ"
  },
  {
    "id": "ch10-noun-خيام-tent",
    "chapter": 10,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "خِيَامٌ",
    "target": "خِيَامٌ",
    "answer": "Tent",
    "detail": "Plural: خَيْمَاتٌ",
    "singular": "خِيَامٌ",
    "plural": "خَيْمَاتٌ"
  },
  {
    "id": "ch10-noun-درجة-degree",
    "chapter": 10,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "دَرَجَةٌ",
    "target": "دَرَجَةٌ",
    "answer": "Degree",
    "detail": "Plural: خِيَمٌ / خَيْمَةٌ / دَرَجَاتٌ",
    "singular": "دَرَجَةٌ",
    "plural": "خِيَمٌ / خَيْمَةٌ / دَرَجَاتٌ"
  },
  {
    "id": "ch10-noun-زوجة-wife",
    "chapter": 10,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "زَوْجَةٌ",
    "target": "زَوْجَةٌ",
    "answer": "Wife",
    "detail": "Plural: زَوْجَاتٌ",
    "singular": "زَوْجَةٌ",
    "plural": "زَوْجَاتٌ"
  },
  {
    "id": "ch10-noun-زوج-husband-spouse",
    "chapter": 10,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "زَوْجٌ",
    "target": "زَوْجٌ",
    "answer": "Husband; spouse",
    "detail": "Plural: أَزْوَاجٌ",
    "singular": "زَوْجٌ",
    "plural": "أَزْوَاجٌ"
  },
  {
    "id": "ch11-verb-ينتقل-to-move",
    "chapter": 11,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَنْتَقِلُ",
    "target": "يَنْتَقِلُ",
    "answer": "To move",
    "detail": "Past: اِنْتَقَلَ · Masdar: اِنْتِقَالٌ",
    "forms": {
      "past": "اِنْتَقَلَ",
      "present": "يَنْتَقِلُ",
      "command": "اِنْتَقِلْ",
      "masdar": "اِنْتِقَالٌ"
    }
  },
  {
    "id": "ch11-verb-يستغرق-to-take-time",
    "chapter": 11,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَسْتَغْرِقُ",
    "target": "يَسْتَغْرِقُ",
    "answer": "To take (time)",
    "detail": "Past: اِسْتَغْرَقَ · Masdar: اِسْتِغْرَاقٌ",
    "forms": {
      "past": "اِسْتَغْرَقَ",
      "present": "يَسْتَغْرِقُ",
      "command": "اِسْتَغْرِقْ",
      "masdar": "اِسْتِغْرَاقٌ"
    }
  },
  {
    "id": "ch11-verb-يتزوج-to-marry",
    "chapter": 11,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَتَزَوَّجُ",
    "target": "يَتَزَوَّجُ",
    "answer": "To marry",
    "detail": "Past: تَزَوَّجَ · Masdar: تَزَوجٌ / زَوَاجٌ",
    "forms": {
      "past": "تَزَوَّجَ",
      "present": "يَتَزَوَّجُ",
      "command": "تَزَوَّجْ",
      "masdar": "تَزَوجٌ / زَوَاجٌ"
    }
  },
  {
    "id": "ch11-verb-يزور-to-visit",
    "chapter": 11,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَزُورُ",
    "target": "يَزُورُ",
    "answer": "To visit",
    "detail": "Past: زَارَ · Masdar: زِيَارَةٌ",
    "forms": {
      "past": "زَارَ",
      "present": "يَزُورُ",
      "command": "زُرْ",
      "masdar": "زِيَارَةٌ"
    }
  },
  {
    "id": "ch11-verb-يتلوث-to-be-polluted",
    "chapter": 11,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَتَلَوَّثُ",
    "target": "يَتَلَوَّثُ",
    "answer": "To be polluted",
    "detail": "Past: تَلَوَّثَ · Masdar: تَلَوثٌ",
    "forms": {
      "past": "تَلَوَّثَ",
      "present": "يَتَلَوَّثُ",
      "command": "تَلَوَّثْ",
      "masdar": "تَلَوثٌ"
    }
  },
  {
    "id": "ch11-verb-يزدحم-to-be-overcrowded",
    "chapter": 11,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَزْدَحِمُ",
    "target": "يَزْدَحِمُ",
    "answer": "To be overcrowded",
    "detail": "Past: اِزْدَحَمَ · Masdar: اِزْدِحَامٌ",
    "forms": {
      "past": "اِزْدَحَمَ",
      "present": "يَزْدَحِمُ",
      "command": "اِزْدَحِمْ",
      "masdar": "اِزْدِحَامٌ"
    }
  },
  {
    "id": "ch11-noun-وقت-time",
    "chapter": 11,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "وَقْتٌ",
    "target": "وَقْتٌ",
    "answer": "Time",
    "detail": "Plural: أَوقَاتٌ",
    "singular": "وَقْتٌ",
    "plural": "أَوقَاتٌ"
  },
  {
    "id": "ch11-noun-مدير-director-manager-headmaster",
    "chapter": 11,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُدِيرٌ",
    "target": "مُدِيرٌ",
    "answer": "Director/Manager/ Headmaster",
    "detail": "Plural: مُدِيرُونَ",
    "singular": "مُدِيرٌ",
    "plural": "مُدِيرُونَ"
  },
  {
    "id": "ch11-noun-رحلة-trip",
    "chapter": 11,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "رِحْلَةٌ",
    "target": "رِحْلَةٌ",
    "answer": "Trip",
    "detail": "Plural: رِحَّْلَتٌ",
    "singular": "رِحْلَةٌ",
    "plural": "رِحَّْلَتٌ"
  },
  {
    "id": "ch11-noun-بلد-country",
    "chapter": 11,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "بَلَدٌ",
    "target": "بَلَدٌ",
    "answer": "Country",
    "detail": "Plural: بَِّلَدٌ",
    "singular": "بَلَدٌ",
    "plural": "بَِّلَدٌ"
  },
  {
    "id": "ch11-noun-استاذ-teacher",
    "chapter": 11,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أُسْتَاذٌ",
    "target": "أُسْتَاذٌ",
    "answer": "Teacher",
    "detail": "Plural: أَسَاتِذَةٌ",
    "singular": "أُسْتَاذٌ",
    "plural": "أَسَاتِذَةٌ"
  },
  {
    "id": "ch11-noun-راي-opinion",
    "chapter": 11,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "رَأْيٌ",
    "target": "رَأْيٌ",
    "answer": "Opinion",
    "detail": "Plural: آرَاءُ",
    "singular": "رَأْيٌ",
    "plural": "آرَاءُ"
  },
  {
    "id": "ch11-noun-مدن-village",
    "chapter": 11,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُدُنٌ",
    "target": "مُدُنٌ",
    "answer": "Village ق ر ى",
    "detail": "Plural: قَرْيَةٌ",
    "singular": "مُدُنٌ",
    "plural": "قَرْيَةٌ"
  },
  {
    "id": "ch11-noun-مدينة-city",
    "chapter": 11,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَدِينَةٌ",
    "target": "مَدِينَةٌ",
    "answer": "City",
    "detail": "Singular form from the textbook list.",
    "singular": "مَدِينَةٌ"
  },
  {
    "id": "ch11-noun-قطار-train",
    "chapter": 11,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "قِطَارٌ",
    "target": "قِطَارٌ",
    "answer": "Train",
    "detail": "Plural: قِطَارَاتٌ",
    "singular": "قِطَارٌ",
    "plural": "قِطَارَاتٌ"
  },
  {
    "id": "ch11-noun-مشكلة-problem",
    "chapter": 11,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُشْكِلَةٌ",
    "target": "مُشْكِلَةٌ",
    "answer": "Problem",
    "detail": "Plural: مُشْكَِّلَتٌ",
    "singular": "مُشْكِلَةٌ",
    "plural": "مُشْكَِّلَتٌ"
  },
  {
    "id": "ch12-noun-صحيفة-newspaper",
    "chapter": 12,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "صَحِيفَةٌ",
    "target": "صَحِيفَةٌ",
    "answer": "Newspaper",
    "detail": "Plural: صُحُفٌ",
    "singular": "صَحِيفَةٌ",
    "plural": "صُحُفٌ"
  },
  {
    "id": "ch12-noun-هواية-hobby",
    "chapter": 12,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "هِوَايَةٌ",
    "target": "هِوَايَةٌ",
    "answer": "Hobby",
    "detail": "Plural: هِوَايَاتٌ",
    "singular": "هِوَايَةٌ",
    "plural": "هِوَايَاتٌ"
  },
  {
    "id": "ch12-noun-جمعية-club",
    "chapter": 12,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "جَمْعِيَّةٌ",
    "target": "جَمْعِيَّةٌ",
    "answer": "Club",
    "detail": "Plural: جَمْعِيَّاتٌ",
    "singular": "جَمْعِيَّةٌ",
    "plural": "جَمْعِيَّاتٌ"
  },
  {
    "id": "ch12-noun-مجلة-magazine",
    "chapter": 12,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَجَلَّةٌ",
    "target": "مَجَلَّةٌ",
    "answer": "Magazine",
    "detail": "Plural: مَجََّلَّتٌ",
    "singular": "مَجَلَّةٌ",
    "plural": "مَجََّلَّتٌ"
  },
  {
    "id": "ch12-noun-حديث-hadeeth",
    "chapter": 12,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "حَدِيثٌ",
    "target": "حَدِيثٌ",
    "answer": "Hadeeth",
    "detail": "Plural: أَحَادِيثُ",
    "singular": "حَدِيثٌ",
    "plural": "أَحَادِيثُ"
  },
  {
    "id": "ch12-noun-معرض-exhibition",
    "chapter": 12,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَعْرِضٌ",
    "target": "مَعْرِضٌ",
    "answer": "Exhibition",
    "detail": "Plural: مَعَارِضُ",
    "singular": "مَعْرِضٌ",
    "plural": "مَعَارِضُ"
  },
  {
    "id": "ch12-noun-طابع-stamp",
    "chapter": 12,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "طَابَعٌ",
    "target": "طَابَعٌ",
    "answer": "Stamp",
    "detail": "Plural: طَوَابِعُ",
    "singular": "طَابَعٌ",
    "plural": "طَوَابِعُ"
  },
  {
    "id": "ch12-noun-اية-verse",
    "chapter": 12,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "آيَةٌ",
    "target": "آيَةٌ",
    "answer": "Verse",
    "detail": "Plural: آيَاتٌ",
    "singular": "آيَةٌ",
    "plural": "آيَاتٌ"
  },
  {
    "id": "ch13-verb-يقيم-to-stay",
    "chapter": 13,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُقِيمُ",
    "target": "يُقِيمُ",
    "answer": "To stay",
    "detail": "Past: أَقَامَ · Masdar: إِقَامَةٌ",
    "forms": {
      "past": "أَقَامَ",
      "present": "يُقِيمُ",
      "command": "أَقِمْ",
      "masdar": "إِقَامَةٌ"
    }
  },
  {
    "id": "ch13-verb-يحجز-to-book",
    "chapter": 13,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَحْجِزُ",
    "target": "يَحْجِزُ",
    "answer": "To book",
    "detail": "Past: حَجَزَ · Masdar: حَجْزٌ",
    "forms": {
      "past": "حَجَزَ",
      "present": "يَحْجِزُ",
      "command": "اِحْجِزْ",
      "masdar": "حَجْزٌ"
    }
  },
  {
    "id": "ch13-verb-يغادر-to-depart",
    "chapter": 13,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُغَادِرُ",
    "target": "يُغَادِرُ",
    "answer": "To depart",
    "detail": "Past: غَادَرَ · Masdar: مُغَادَرَةٌ",
    "forms": {
      "past": "غَادَرَ",
      "present": "يُغَادِرُ",
      "command": "غَادِرْ",
      "masdar": "مُغَادَرَةٌ"
    }
  },
  {
    "id": "ch13-verb-يفتح-to-open",
    "chapter": 13,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَفْتَحُ",
    "target": "يَفْتَحُ",
    "answer": "To open",
    "detail": "Past: فَتَحَ · Masdar: فَتْحٌ",
    "forms": {
      "past": "فَتَحَ",
      "present": "يَفْتَحُ",
      "command": "اِفْتَحْ",
      "masdar": "فَتْحٌ"
    }
  },
  {
    "id": "ch13-verb-يفقد-to-lose",
    "chapter": 13,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَفْقِدُ",
    "target": "يَفْقِدُ",
    "answer": "To lose",
    "detail": "Past: فَقَدَ · Masdar: فَقْدٌ",
    "forms": {
      "past": "فَقَدَ",
      "present": "يَفْقِدُ",
      "command": "اِفْقِدْ",
      "masdar": "فَقْدٌ"
    }
  },
  {
    "id": "ch13-verb-يؤكد-to-confirm",
    "chapter": 13,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُؤَكِدُ",
    "target": "يُؤَكِدُ",
    "answer": "To confirm",
    "detail": "Past: أَكَّدَ · Masdar: تأْكِيدٌ",
    "forms": {
      "past": "أَكَّدَ",
      "present": "يُؤَكِدُ",
      "command": "أَكِدْ",
      "masdar": "تأْكِيدٌ"
    }
  },
  {
    "id": "ch13-noun-طائرة-plane",
    "chapter": 13,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "طَائِرَةٌ",
    "target": "طَائِرَةٌ",
    "answer": "Plane",
    "detail": "Plural: طَائِرَاتٌ",
    "singular": "طَائِرَةٌ",
    "plural": "طَائِرَاتٌ"
  },
  {
    "id": "ch13-noun-حجز-booking",
    "chapter": 13,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "حَجْزٌ",
    "target": "حَجْزٌ",
    "answer": "Booking",
    "detail": "Plural: حُجُوزَاتٌ",
    "singular": "حَجْزٌ",
    "plural": "حُجُوزَاتٌ"
  },
  {
    "id": "ch13-noun-مسافر-traveler",
    "chapter": 13,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُسَافِرٌ",
    "target": "مُسَافِرٌ",
    "answer": "Traveler",
    "detail": "Plural: مُسَافِرُونَ",
    "singular": "مُسَافِرٌ",
    "plural": "مُسَافِرُونَ"
  },
  {
    "id": "ch13-noun-خط-air-line",
    "chapter": 13,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "خَطٌ",
    "target": "خَطٌ",
    "answer": "(Air)Line",
    "detail": "Plural: خُطُوطٌ",
    "singular": "خَطٌ",
    "plural": "خُطُوطٌ"
  },
  {
    "id": "ch13-noun-فندق-hotel",
    "chapter": 13,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "فُنْدُقٌ",
    "target": "فُنْدُقٌ",
    "answer": "Hotel",
    "detail": "Plural: فَنَادِقُ",
    "singular": "فُنْدُقٌ",
    "plural": "فَنَادِقُ"
  },
  {
    "id": "ch13-noun-تذكرة-ticket",
    "chapter": 13,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "تَذْكِرَةٌ",
    "target": "تَذْكِرَةٌ",
    "answer": "Ticket",
    "detail": "Plural: تَذَاكِرُ",
    "singular": "تَذْكِرَةٌ",
    "plural": "تَذَاكِرُ"
  },
  {
    "id": "ch13-noun-لون-colour",
    "chapter": 13,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "لَوْنٌ",
    "target": "لَوْنٌ",
    "answer": "Colour",
    "detail": "Plural: أَلْوَانٌ",
    "singular": "لَوْنٌ",
    "plural": "أَلْوَانٌ"
  },
  {
    "id": "ch13-noun-جواز-passport",
    "chapter": 13,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "جَوَازٌ",
    "target": "جَوَازٌ",
    "answer": "Passport",
    "detail": "Plural: جَوَازَاتٌ",
    "singular": "جَوَازٌ",
    "plural": "جَوَازَاتٌ"
  },
  {
    "id": "ch13-noun-موظف-worker",
    "chapter": 13,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مُوَظَّفٌ",
    "target": "مُوَظَّفٌ",
    "answer": "Worker",
    "detail": "Plural: مُوَظَّفُونَ",
    "singular": "مُوَظَّفٌ",
    "plural": "مُوَظَّفُونَ"
  },
  {
    "id": "ch13-noun-تاشيرة-visa",
    "chapter": 13,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "تَأْشِيرَةٌ",
    "target": "تَأْشِيرَةٌ",
    "answer": "Visa",
    "detail": "Plural: تَأْشِيرَاتٌ",
    "singular": "تَأْشِيرَةٌ",
    "plural": "تَأْشِيرَاتٌ"
  },
  {
    "id": "ch14-verb-يحلق-to-shave",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَحْلِقُ",
    "target": "يَحْلِقُ",
    "answer": "To shave",
    "detail": "Past: حَلَقَ · Masdar: حَلْقٌ / حَِّلَقَةٌ",
    "forms": {
      "past": "حَلَقَ",
      "present": "يَحْلِقُ",
      "command": "اِحْلِقْ",
      "masdar": "حَلْقٌ / حَِّلَقَةٌ"
    }
  },
  {
    "id": "ch14-verb-يعتمر-to-make-umrah",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَعْتَمِرُ",
    "target": "يَعْتَمِرُ",
    "answer": "To make umrah",
    "detail": "Past: اِعْتَمَرَ · Masdar: اِعْتِمَارٌ",
    "forms": {
      "past": "اِعْتَمَرَ",
      "present": "يَعْتَمِرُ",
      "command": "اِعْتَمِرْ",
      "masdar": "اِعْتِمَارٌ"
    }
  },
  {
    "id": "ch14-verb-يذبح-to-slaughter-sacrifice",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَذْبَحُ",
    "target": "يَذْبَحُ",
    "answer": "To slaughter/ sacrifice",
    "detail": "Past: ذَبَحَ · Masdar: ذَبْحٌ",
    "forms": {
      "past": "ذَبَحَ",
      "present": "يَذْبَحُ",
      "command": "اِذْبَحْ",
      "masdar": "ذَبْحٌ"
    }
  },
  {
    "id": "ch14-verb-م-to-throw",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "م",
    "target": "م",
    "answer": "To throw",
    "detail": "Past: يَرْمِيرَمَى · Masdar: رَمْيٌ",
    "forms": {
      "past": "يَرْمِيرَمَى",
      "present": "م",
      "command": "اِرِْ",
      "masdar": "رَمْيٌ"
    }
  },
  {
    "id": "ch14-verb-يسعي-to-make-sa-ee",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَسْعَى",
    "target": "يَسْعَى",
    "answer": "To make sa'ee",
    "detail": "Past: سَعَى · Masdar: سَعْيٌ",
    "forms": {
      "past": "سَعَى",
      "present": "يَسْعَى",
      "command": "اِسْعَ",
      "masdar": "سَعْيٌ"
    }
  },
  {
    "id": "ch14-verb-يشعر-to-feel",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَشْعُرُ",
    "target": "يَشْعُرُ",
    "answer": "To feel",
    "detail": "Past: شَعَرَ · Masdar: شُعُورٌ",
    "forms": {
      "past": "شَعَرَ",
      "present": "يَشْعُرُ",
      "command": "اُشْعُرْ",
      "masdar": "شُعُورٌ"
    }
  },
  {
    "id": "ch14-verb-يخلع-to-take-off-undress",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَخْلَعُ",
    "target": "يَخْلَعُ",
    "answer": "To take off/ undress",
    "detail": "Past: خَلَعَ · Masdar: خَلْعٌ",
    "forms": {
      "past": "خَلَعَ",
      "present": "يَخْلَعُ",
      "command": "اِخْلَعْ",
      "masdar": "خَلْعٌ"
    }
  },
  {
    "id": "ch14-verb-يصوم-to-fast",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَصُومُ",
    "target": "يَصُومُ",
    "answer": "To fast",
    "detail": "Past: صَامَ · Masdar: صَوْمٌ / صِيَامٌ",
    "forms": {
      "past": "صَامَ",
      "present": "يَصُومُ",
      "command": "صُمْ",
      "masdar": "صَوْمٌ / صِيَامٌ"
    }
  },
  {
    "id": "ch14-verb-يطوف-to-make-tawaaf",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَطُوفُ",
    "target": "يَطُوفُ",
    "answer": "To make tawaaf",
    "detail": "Past: طَافَ · Masdar: طَوَافٌ",
    "forms": {
      "past": "طَافَ",
      "present": "يَطُوفُ",
      "command": "طُفْ",
      "masdar": "طَوَافٌ"
    }
  },
  {
    "id": "ch14-verb-يلبس-to-wear",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَلْبَسُ",
    "target": "يَلْبَسُ",
    "answer": "To wear",
    "detail": "Past: لَبِسَ · Masdar: لِبْسٌ",
    "forms": {
      "past": "لَبِسَ",
      "present": "يَلْبَسُ",
      "command": "اِلْبَسْ",
      "masdar": "لِبْسٌ"
    }
  },
  {
    "id": "ch14-verb-يلب-to-make-the-talbiyaa",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُلَب",
    "target": "يُلَب",
    "answer": "To make the Talbiyaa",
    "detail": "Past: ِيلَبَّى · Masdar: تَلْبِيَةٌ",
    "forms": {
      "past": "ِيلَبَّى",
      "present": "يُلَب",
      "command": "لَبِ",
      "masdar": "تَلْبِيَةٌ"
    }
  },
  {
    "id": "ch14-verb-يصل-to-arrive",
    "chapter": 14,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَصِلُ",
    "target": "يَصِلُ",
    "answer": "To arrive",
    "detail": "Past: وَصَلَ · Masdar: وُصُولٌ",
    "forms": {
      "past": "وَصَلَ",
      "present": "يَصِلُ",
      "command": "صِلْ",
      "masdar": "وُصُولٌ"
    }
  },
  {
    "id": "ch14-noun-راس-head",
    "chapter": 14,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "رَأْسٌ",
    "target": "رَأْسٌ",
    "answer": "Head",
    "detail": "Plural: رُؤُوسٌ",
    "singular": "رَأْسٌ",
    "plural": "رُؤُوسٌ"
  },
  {
    "id": "ch14-noun-شوط-circuit-lap",
    "chapter": 14,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "شَوْطٌ",
    "target": "شَوْطٌ",
    "answer": "Circuit/Lap",
    "detail": "Plural: أَشْوَاطٌ",
    "singular": "شَوْطٌ",
    "plural": "أَشْوَاطٌ"
  },
  {
    "id": "ch14-noun-هدية-sacrifice",
    "chapter": 14,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "هَدْيَةٌ",
    "target": "هَدْيَةٌ",
    "answer": "Sacrifice",
    "detail": "Plural: هَدْيٌ",
    "singular": "هَدْيَةٌ",
    "plural": "هَدْيٌ"
  },
  {
    "id": "ch14-noun-ركعة-unit-of-prayer",
    "chapter": 14,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "رَكْعَةٌ",
    "target": "رَكْعَةٌ",
    "answer": "Unit of prayer",
    "detail": "Plural: رَكْعَاتٌ",
    "singular": "رَكْعَةٌ",
    "plural": "رَكْعَاتٌ"
  },
  {
    "id": "ch15-verb-يصيب-to-be-afflicted",
    "chapter": 15,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُصِيبُ",
    "target": "يُصِيبُ",
    "answer": "To be afflicted",
    "detail": "Past: أَصَابَ · Masdar: إِصَابَةٌ",
    "forms": {
      "past": "أَصَابَ",
      "present": "يُصِيبُ",
      "command": "أَصِبْ",
      "masdar": "إِصَابَةٌ"
    }
  },
  {
    "id": "ch15-verb-يرتفع-to-rise",
    "chapter": 15,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَرْتَفِعُ",
    "target": "يَرْتَفِعُ",
    "answer": "To rise",
    "detail": "Past: اِرْتَفَعَ · Masdar: اِرْتِفَاع",
    "forms": {
      "past": "اِرْتَفَعَ",
      "present": "يَرْتَفِعُ",
      "command": "اِرْتَفِعْ",
      "masdar": "اِرْتِفَاع"
    }
  },
  {
    "id": "ch15-verb-يتغيب-to-be-absent",
    "chapter": 15,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَتَغَيَّبُ",
    "target": "يَتَغَيَّبُ",
    "answer": "To be absent",
    "detail": "Past: تَغَيَّبَ · Masdar: تَغَيبٌ",
    "forms": {
      "past": "تَغَيَّبَ",
      "present": "يَتَغَيَّبُ",
      "command": "تَغَيَّبْ",
      "masdar": "تَغَيبٌ"
    }
  },
  {
    "id": "ch15-verb-يشفي-to-cure",
    "chapter": 15,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَشْفِي",
    "target": "يَشْفِي",
    "answer": "To cure",
    "detail": "Past: شَفَى · Masdar: شِفَاءٌ",
    "forms": {
      "past": "شَفَى",
      "present": "يَشْفِي",
      "command": "اِشْفِ",
      "masdar": "شِفَاءٌ"
    }
  },
  {
    "id": "ch15-verb-يفحص-to-check",
    "chapter": 15,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَفْحَصُ",
    "target": "يَفْحَصُ",
    "answer": "To check",
    "detail": "Past: فَحَصَ · Masdar: فَحْصٌ",
    "forms": {
      "past": "فَحَصَ",
      "present": "يَفْحَصُ",
      "command": "اِفْحَصْ",
      "masdar": "فَحْصٌ"
    }
  },
  {
    "id": "ch15-verb-يقابل-to-meet",
    "chapter": 15,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُقَابِلُ",
    "target": "يُقَابِلُ",
    "answer": "To meet",
    "detail": "Past: قَابَلَ · Masdar: مُقَابَلَةٌ",
    "forms": {
      "past": "قَابَلَ",
      "present": "يُقَابِلُ",
      "command": "قَابِلْ",
      "masdar": "مُقَابَلَةٌ"
    }
  },
  {
    "id": "ch15-verb-ينصح-to-advise",
    "chapter": 15,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَنْصَحُ",
    "target": "يَنْصَحُ",
    "answer": "To advise",
    "detail": "Past: نَصَحَ · Masdar: نَصِيحَةٌ / نُصْحٌ",
    "forms": {
      "past": "نَصَحَ",
      "present": "يَنْصَحُ",
      "command": "اِنْصَحْ",
      "masdar": "نَصِيحَةٌ / نُصْحٌ"
    }
  },
  {
    "id": "ch15-noun-اذن-ear",
    "chapter": 15,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أُذُنٌ",
    "target": "أُذُنٌ",
    "answer": "Ear",
    "detail": "Plural: آذَانٌ",
    "singular": "أُذُنٌ",
    "plural": "آذَانٌ"
  },
  {
    "id": "ch15-noun-سن-tooth",
    "chapter": 15,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "سِنٌ",
    "target": "سِنٌ",
    "answer": "Tooth",
    "detail": "Plural: أَسْنَانٌ",
    "singular": "سِنٌ",
    "plural": "أَسْنَانٌ"
  },
  {
    "id": "ch15-noun-حنجرة-throat",
    "chapter": 15,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "حَنْجَرَةٌ",
    "target": "حَنْجَرَةٌ",
    "answer": "Throat",
    "detail": "Plural: حَنَاجِرُ",
    "singular": "حَنْجَرَةٌ",
    "plural": "حَنَاجِرُ"
  },
  {
    "id": "ch15-noun-انف-nose",
    "chapter": 15,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أَنْفٌ",
    "target": "أَنْفٌ",
    "answer": "Nose",
    "detail": "Plural: أُنُوفٌ",
    "singular": "أَنْفٌ",
    "plural": "أُنُوفٌ"
  },
  {
    "id": "ch15-noun-موعد-appointment",
    "chapter": 15,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَوعِدٌ",
    "target": "مَوعِدٌ",
    "answer": "Appointment",
    "detail": "Plural: مَوَاعِدُ / مَوَاعِيدُ",
    "singular": "مَوعِدٌ",
    "plural": "مَوَاعِدُ / مَوَاعِيدُ"
  },
  {
    "id": "ch15-noun-زيارة-visit",
    "chapter": 15,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "زِيَارَةٌ",
    "target": "زِيَارَةٌ",
    "answer": "Visit",
    "detail": "Plural: زِيَارَاتٌ",
    "singular": "زِيَارَةٌ",
    "plural": "زِيَارَاتٌ"
  },
  {
    "id": "ch15-noun-دواء-medicine",
    "chapter": 15,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "دَوَاءٌ",
    "target": "دَوَاءٌ",
    "answer": "Medicine",
    "detail": "Plural: أَدْوِيَةٌ",
    "singular": "دَوَاءٌ",
    "plural": "أَدْوِيَةٌ"
  },
  {
    "id": "ch15-noun-اسعاف-ambulance",
    "chapter": 15,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "إِسْعَافٌ",
    "target": "إِسْعَافٌ",
    "answer": "Ambulance",
    "detail": "Plural: إِسْعَافَاتٌ",
    "singular": "إِسْعَافٌ",
    "plural": "إِسْعَافَاتٌ"
  },
  {
    "id": "ch15-noun-صدر-chest",
    "chapter": 15,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "صَدْرٌ",
    "target": "صَدْرٌ",
    "answer": "Chest",
    "detail": "Plural: صُدُورٌ",
    "singular": "صَدْرٌ",
    "plural": "صُدُورٌ"
  },
  {
    "id": "ch15-noun-كلية-kidney",
    "chapter": 15,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "كُلْيَةٌ",
    "target": "كُلْيَةٌ",
    "answer": "Kidney",
    "detail": "Plural: كُلْيَاتٌ",
    "singular": "كُلْيَةٌ",
    "plural": "كُلْيَاتٌ"
  },
  {
    "id": "ch16-verb-يعطي-to-give",
    "chapter": 16,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُعْطِي",
    "target": "يُعْطِي",
    "answer": "To give",
    "detail": "Past: أَعْطَى · Masdar: إِعْطَاءٌ / عَطَاءٌ",
    "forms": {
      "past": "أَعْطَى",
      "present": "يُعْطِي",
      "command": "أَعْطِ",
      "masdar": "إِعْطَاءٌ / عَطَاءٌ"
    }
  },
  {
    "id": "ch16-verb-يقترب-to-approach",
    "chapter": 16,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَقْتَرِبُ",
    "target": "يَقْتَرِبُ",
    "answer": "To approach",
    "detail": "Past: اِقْتَرَبَ · Masdar: اِقْتِرَابٌ",
    "forms": {
      "past": "اِقْتَرَبَ",
      "present": "يَقْتَرِبُ",
      "command": "اِقْتَرِبْ",
      "masdar": "اِقْتِرَابٌ"
    }
  },
  {
    "id": "ch16-verb-يبتعد-to-move-away-from",
    "chapter": 16,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَبْتَعِدُ",
    "target": "يَبْتَعِدُ",
    "answer": "To move away from",
    "detail": "Past: اِبْتَعَدَ · Masdar: اِبْتِعَادٌ",
    "forms": {
      "past": "اِبْتَعَدَ",
      "present": "يَبْتَعِدُ",
      "command": "اِبْتَعِدْ",
      "masdar": "اِبْتِعَادٌ"
    }
  },
  {
    "id": "ch16-verb-يساعد-to-help",
    "chapter": 16,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يُسَاعِدُ",
    "target": "يُسَاعِدُ",
    "answer": "To help",
    "detail": "Past: سَاعَدَ · Masdar: مُسَاعَدَةٌ",
    "forms": {
      "past": "سَاعَدَ",
      "present": "يُسَاعِدُ",
      "command": "سَاعِدْ",
      "masdar": "مُسَاعَدَةٌ"
    }
  },
  {
    "id": "ch16-verb-يري-to-see",
    "chapter": 16,
    "kind": "verb",
    "prompt": "What does this verb mean?",
    "arabic": "يَرَى",
    "target": "يَرَى",
    "answer": "To see",
    "detail": "Past: رَأَى · Masdar: رُؤْيَةٌ",
    "forms": {
      "past": "رَأَى",
      "present": "يَرَى",
      "command": "رَ",
      "masdar": "رُؤْيَةٌ"
    }
  },
  {
    "id": "ch16-noun-اضحية-sacrifice",
    "chapter": 16,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "أُضْحِيَةٌ",
    "target": "أُضْحِيَةٌ",
    "answer": "Sacrifice",
    "detail": "Plural: أَضَاحٌ",
    "singular": "أُضْحِيَةٌ",
    "plural": "أَضَاحٌ"
  },
  {
    "id": "ch16-noun-عيد-celebration-festival",
    "chapter": 16,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "عِيدٌ",
    "target": "عِيدٌ",
    "answer": "Celebration/ Festival",
    "detail": "Plural: أَعْيَادٌ",
    "singular": "عِيدٌ",
    "plural": "أَعْيَادٌ"
  },
  {
    "id": "ch16-noun-عاصمة-capital-city",
    "chapter": 16,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "عَاصِمَةٌ",
    "target": "عَاصِمَةٌ",
    "answer": "Capital City",
    "detail": "Plural: عَوَاصِمُ",
    "singular": "عَاصِمَةٌ",
    "plural": "عَوَاصِمُ"
  },
  {
    "id": "ch16-noun-نهر-river",
    "chapter": 16,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "نَهْرٌ",
    "target": "نَهْرٌ",
    "answer": "River",
    "detail": "Plural: أَنْهَارٌ",
    "singular": "نَهْرٌ",
    "plural": "أَنْهَارٌ"
  },
  {
    "id": "ch16-noun-جبل-mountain",
    "chapter": 16,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "جَبَلٌ",
    "target": "جَبَلٌ",
    "answer": "Mountain",
    "detail": "Plural: جِبَالٌ",
    "singular": "جَبَلٌ",
    "plural": "جِبَالٌ"
  },
  {
    "id": "ch16-noun-متحف-museum",
    "chapter": 16,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَتْحَفٌ",
    "target": "مَتْحَفٌ",
    "answer": "Museum",
    "detail": "Plural: مَتَاحِفُ",
    "singular": "مَتْحَفٌ",
    "plural": "مَتَاحِفُ"
  },
  {
    "id": "ch16-noun-فقير-poor",
    "chapter": 16,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "فَقِيرٌ",
    "target": "فَقِيرٌ",
    "answer": "Poor",
    "detail": "Plural: فُقَرَاءُ",
    "singular": "فَقِيرٌ",
    "plural": "فُقَرَاءُ"
  },
  {
    "id": "ch16-noun-مزرعة-farm",
    "chapter": 16,
    "kind": "noun",
    "prompt": "What does this word mean?",
    "arabic": "مَزْرَعَةٌ",
    "target": "مَزْرَعَةٌ",
    "answer": "Farm",
    "detail": "Plural: مَزَارِعُ",
    "singular": "مَزْرَعَةٌ",
    "plural": "مَزَارِعُ"
  }
];
