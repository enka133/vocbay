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
  formRole?: "past" | "present" | "command" | "masdar";
}

export const vocabularyCards: VocabularyCard[] = [
  {
    "id": "ch1-verb-نظر-to-look-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "نَظَرَ",
    "target": "نَظَرَ",
    "answer": "To look",
    "detail": "Card: Past · Preposition: إِلَى · Past: نَظَرَ · Present: يَنْظُرُ · Command: اُنْظُرْ · Masdar: نَظَرٌ",
    "forms": {
      "past": "نَظَرَ",
      "present": "يَنْظُرُ",
      "command": "اُنْظُرْ",
      "masdar": "نَظَرٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-ينظر-to-look-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَنْظُرُ",
    "target": "يَنْظُرُ",
    "answer": "To look",
    "detail": "Card: Present · Preposition: إِلَى · Past: نَظَرَ · Present: يَنْظُرُ · Command: اُنْظُرْ · Masdar: نَظَرٌ",
    "forms": {
      "past": "نَظَرَ",
      "present": "يَنْظُرُ",
      "command": "اُنْظُرْ",
      "masdar": "نَظَرٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-انظر-to-look-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اُنْظُرْ",
    "target": "اُنْظُرْ",
    "answer": "To look",
    "detail": "Card: Command · Preposition: إِلَى · Past: نَظَرَ · Present: يَنْظُرُ · Command: اُنْظُرْ · Masdar: نَظَرٌ",
    "forms": {
      "past": "نَظَرَ",
      "present": "يَنْظُرُ",
      "command": "اُنْظُرْ",
      "masdar": "نَظَرٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-نظر-to-look-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "نَظَرٌ",
    "target": "نَظَرٌ",
    "answer": "To look",
    "detail": "Card: Masdar · Preposition: إِلَى · Past: نَظَرَ · Present: يَنْظُرُ · Command: اُنْظُرْ · Masdar: نَظَرٌ",
    "forms": {
      "past": "نَظَرَ",
      "present": "يَنْظُرُ",
      "command": "اُنْظُرْ",
      "masdar": "نَظَرٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-استمع-to-listen-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِسْتَمَعَ",
    "target": "اِسْتَمَعَ",
    "answer": "To listen",
    "detail": "Card: Past · Preposition: إِلَى · Past: اِسْتَمَعَ · Present: يَسْتَمِعُ · Command: اِسْتَمِعْ · Masdar: اِسْتِمَاع",
    "forms": {
      "past": "اِسْتَمَعَ",
      "present": "يَسْتَمِعُ",
      "command": "اِسْتَمِعْ",
      "masdar": "اِسْتِمَاع"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-يستمع-to-listen-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَسْتَمِعُ",
    "target": "يَسْتَمِعُ",
    "answer": "To listen",
    "detail": "Card: Present · Preposition: إِلَى · Past: اِسْتَمَعَ · Present: يَسْتَمِعُ · Command: اِسْتَمِعْ · Masdar: اِسْتِمَاع",
    "forms": {
      "past": "اِسْتَمَعَ",
      "present": "يَسْتَمِعُ",
      "command": "اِسْتَمِعْ",
      "masdar": "اِسْتِمَاع"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-استمع-to-listen-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِسْتَمِعْ",
    "target": "اِسْتَمِعْ",
    "answer": "To listen",
    "detail": "Card: Command · Preposition: إِلَى · Past: اِسْتَمَعَ · Present: يَسْتَمِعُ · Command: اِسْتَمِعْ · Masdar: اِسْتِمَاع",
    "forms": {
      "past": "اِسْتَمَعَ",
      "present": "يَسْتَمِعُ",
      "command": "اِسْتَمِعْ",
      "masdar": "اِسْتِمَاع"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-استماع-to-listen-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِسْتِمَاع",
    "target": "اِسْتِمَاع",
    "answer": "To listen",
    "detail": "Card: Masdar · Preposition: إِلَى · Past: اِسْتَمَعَ · Present: يَسْتَمِعُ · Command: اِسْتَمِعْ · Masdar: اِسْتِمَاع",
    "forms": {
      "past": "اِسْتَمَعَ",
      "present": "يَسْتَمِعُ",
      "command": "اِسْتَمِعْ",
      "masdar": "اِسْتِمَاع"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-اعاد-to-repeat-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَعَادَ",
    "target": "أَعَادَ",
    "answer": "To repeat",
    "detail": "Card: Past · Past: أَعَادَ · Present: يُعِيدُ · Command: أَعِدْ · Masdar: إِعَادَةٌ",
    "forms": {
      "past": "أَعَادَ",
      "present": "يُعِيدُ",
      "command": "أَعِدْ",
      "masdar": "إِعَادَةٌ"
    }
  },
  {
    "id": "ch1-verb-يعيد-to-repeat-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُعِيدُ",
    "target": "يُعِيدُ",
    "answer": "To repeat",
    "detail": "Card: Present · Past: أَعَادَ · Present: يُعِيدُ · Command: أَعِدْ · Masdar: إِعَادَةٌ",
    "forms": {
      "past": "أَعَادَ",
      "present": "يُعِيدُ",
      "command": "أَعِدْ",
      "masdar": "إِعَادَةٌ"
    }
  },
  {
    "id": "ch1-verb-اعد-to-repeat-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَعِدْ",
    "target": "أَعِدْ",
    "answer": "To repeat",
    "detail": "Card: Command · Past: أَعَادَ · Present: يُعِيدُ · Command: أَعِدْ · Masdar: إِعَادَةٌ",
    "forms": {
      "past": "أَعَادَ",
      "present": "يُعِيدُ",
      "command": "أَعِدْ",
      "masdar": "إِعَادَةٌ"
    }
  },
  {
    "id": "ch1-verb-اعادة-to-repeat-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "إِعَادَةٌ",
    "target": "إِعَادَةٌ",
    "answer": "To repeat",
    "detail": "Card: Masdar · Past: أَعَادَ · Present: يُعِيدُ · Command: أَعِدْ · Masdar: إِعَادَةٌ",
    "forms": {
      "past": "أَعَادَ",
      "present": "يُعِيدُ",
      "command": "أَعِدْ",
      "masdar": "إِعَادَةٌ"
    }
  },
  {
    "id": "ch1-verb-اشار-to-point-indicate-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَشَارَ",
    "target": "أَشَارَ",
    "answer": "To point, indicate",
    "detail": "Card: Past · Preposition: إِلَى · Past: أَشَارَ · Present: يُشِيرُ · Command: أَشِرْ · Masdar: إِشَارَةٌ",
    "forms": {
      "past": "أَشَارَ",
      "present": "يُشِيرُ",
      "command": "أَشِرْ",
      "masdar": "إِشَارَةٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-يشير-to-point-indicate-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُشِيرُ",
    "target": "يُشِيرُ",
    "answer": "To point, indicate",
    "detail": "Card: Present · Preposition: إِلَى · Past: أَشَارَ · Present: يُشِيرُ · Command: أَشِرْ · Masdar: إِشَارَةٌ",
    "forms": {
      "past": "أَشَارَ",
      "present": "يُشِيرُ",
      "command": "أَشِرْ",
      "masdar": "إِشَارَةٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-اشر-to-point-indicate-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَشِرْ",
    "target": "أَشِرْ",
    "answer": "To point, indicate",
    "detail": "Card: Command · Preposition: إِلَى · Past: أَشَارَ · Present: يُشِيرُ · Command: أَشِرْ · Masdar: إِشَارَةٌ",
    "forms": {
      "past": "أَشَارَ",
      "present": "يُشِيرُ",
      "command": "أَشِرْ",
      "masdar": "إِشَارَةٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-اشارة-to-point-indicate-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "إِشَارَةٌ",
    "target": "إِشَارَةٌ",
    "answer": "To point, indicate",
    "detail": "Card: Masdar · Preposition: إِلَى · Past: أَشَارَ · Present: يُشِيرُ · Command: أَشِرْ · Masdar: إِشَارَةٌ",
    "forms": {
      "past": "أَشَارَ",
      "present": "يُشِيرُ",
      "command": "أَشِرْ",
      "masdar": "إِشَارَةٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch1-verb-وضع-to-put-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "وَضَعَ",
    "target": "وَضَعَ",
    "answer": "To put",
    "detail": "Card: Past · Past: وَضَعَ · Present: يَضَعُ · Command: ضَعْ · Masdar: وَضْعٌ",
    "forms": {
      "past": "وَضَعَ",
      "present": "يَضَعُ",
      "command": "ضَعْ",
      "masdar": "وَضْعٌ"
    }
  },
  {
    "id": "ch1-verb-يضع-to-put-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَضَعُ",
    "target": "يَضَعُ",
    "answer": "To put",
    "detail": "Card: Present · Past: وَضَعَ · Present: يَضَعُ · Command: ضَعْ · Masdar: وَضْعٌ",
    "forms": {
      "past": "وَضَعَ",
      "present": "يَضَعُ",
      "command": "ضَعْ",
      "masdar": "وَضْعٌ"
    }
  },
  {
    "id": "ch1-verb-ضع-to-put-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "ضَعْ",
    "target": "ضَعْ",
    "answer": "To put",
    "detail": "Card: Command · Past: وَضَعَ · Present: يَضَعُ · Command: ضَعْ · Masdar: وَضْعٌ",
    "forms": {
      "past": "وَضَعَ",
      "present": "يَضَعُ",
      "command": "ضَعْ",
      "masdar": "وَضْعٌ"
    }
  },
  {
    "id": "ch1-verb-وضع-to-put-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "وَضْعٌ",
    "target": "وَضْعٌ",
    "answer": "To put",
    "detail": "Card: Masdar · Past: وَضَعَ · Present: يَضَعُ · Command: ضَعْ · Masdar: وَضْعٌ",
    "forms": {
      "past": "وَضَعَ",
      "present": "يَضَعُ",
      "command": "ضَعْ",
      "masdar": "وَضْعٌ"
    }
  },
  {
    "id": "ch1-verb-سمع-to-hear-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "سَمِعَ",
    "target": "سَمِعَ",
    "answer": "To hear",
    "detail": "Card: Past · Past: سَمِعَ · Present: يَسْمَعُ · Command: اِسمَعْ · Masdar: سَمْعٌ / سَمَاعٌ",
    "forms": {
      "past": "سَمِعَ",
      "present": "يَسْمَعُ",
      "command": "اِسمَعْ",
      "masdar": "سَمْعٌ / سَمَاعٌ"
    }
  },
  {
    "id": "ch1-verb-يسمع-to-hear-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَسْمَعُ",
    "target": "يَسْمَعُ",
    "answer": "To hear",
    "detail": "Card: Present · Past: سَمِعَ · Present: يَسْمَعُ · Command: اِسمَعْ · Masdar: سَمْعٌ / سَمَاعٌ",
    "forms": {
      "past": "سَمِعَ",
      "present": "يَسْمَعُ",
      "command": "اِسمَعْ",
      "masdar": "سَمْعٌ / سَمَاعٌ"
    }
  },
  {
    "id": "ch1-verb-اسمع-to-hear-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِسمَعْ",
    "target": "اِسمَعْ",
    "answer": "To hear",
    "detail": "Card: Command · Past: سَمِعَ · Present: يَسْمَعُ · Command: اِسمَعْ · Masdar: سَمْعٌ / سَمَاعٌ",
    "forms": {
      "past": "سَمِعَ",
      "present": "يَسْمَعُ",
      "command": "اِسمَعْ",
      "masdar": "سَمْعٌ / سَمَاعٌ"
    }
  },
  {
    "id": "ch1-verb-سمع-سماع-to-hear-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "سَمْعٌ / سَمَاعٌ",
    "target": "سَمْعٌ / سَمَاعٌ",
    "answer": "To hear",
    "detail": "Card: Masdar · Past: سَمِعَ · Present: يَسْمَعُ · Command: اِسمَعْ · Masdar: سَمْعٌ / سَمَاعٌ",
    "forms": {
      "past": "سَمِعَ",
      "present": "يَسْمَعُ",
      "command": "اِسمَعْ",
      "masdar": "سَمْعٌ / سَمَاعٌ"
    }
  },
  {
    "id": "ch1-verb-قال-to-say-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "قَالَ",
    "target": "قَالَ",
    "answer": "To say",
    "detail": "Card: Past · Past: قَالَ · Present: يَقُولُ · Command: قُلْ · Masdar: قَولٌ",
    "forms": {
      "past": "قَالَ",
      "present": "يَقُولُ",
      "command": "قُلْ",
      "masdar": "قَولٌ"
    }
  },
  {
    "id": "ch1-verb-يقول-to-say-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَقُولُ",
    "target": "يَقُولُ",
    "answer": "To say",
    "detail": "Card: Present · Past: قَالَ · Present: يَقُولُ · Command: قُلْ · Masdar: قَولٌ",
    "forms": {
      "past": "قَالَ",
      "present": "يَقُولُ",
      "command": "قُلْ",
      "masdar": "قَولٌ"
    }
  },
  {
    "id": "ch1-verb-قل-to-say-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "قُلْ",
    "target": "قُلْ",
    "answer": "To say",
    "detail": "Card: Command · Past: قَالَ · Present: يَقُولُ · Command: قُلْ · Masdar: قَولٌ",
    "forms": {
      "past": "قَالَ",
      "present": "يَقُولُ",
      "command": "قُلْ",
      "masdar": "قَولٌ"
    }
  },
  {
    "id": "ch1-verb-قول-to-say-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "قَولٌ",
    "target": "قَولٌ",
    "answer": "To say",
    "detail": "Card: Masdar · Past: قَالَ · Present: يَقُولُ · Command: قُلْ · Masdar: قَولٌ",
    "forms": {
      "past": "قَالَ",
      "present": "يَقُولُ",
      "command": "قُلْ",
      "masdar": "قَولٌ"
    }
  },
  {
    "id": "ch1-verb-رتب-to-put-in-order-arrange-organise-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "رَتَّبَ",
    "target": "رَتَّبَ",
    "answer": "To put in order, arrange, organise",
    "detail": "Card: Past · Past: رَتَّبَ · Present: يُرَتِبُ · Command: رَتِبْ · Masdar: تَرْتِيبٌ",
    "forms": {
      "past": "رَتَّبَ",
      "present": "يُرَتِبُ",
      "command": "رَتِبْ",
      "masdar": "تَرْتِيبٌ"
    }
  },
  {
    "id": "ch1-verb-يرتب-to-put-in-order-arrange-organise-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُرَتِبُ",
    "target": "يُرَتِبُ",
    "answer": "To put in order, arrange, organise",
    "detail": "Card: Present · Past: رَتَّبَ · Present: يُرَتِبُ · Command: رَتِبْ · Masdar: تَرْتِيبٌ",
    "forms": {
      "past": "رَتَّبَ",
      "present": "يُرَتِبُ",
      "command": "رَتِبْ",
      "masdar": "تَرْتِيبٌ"
    }
  },
  {
    "id": "ch1-verb-رتب-to-put-in-order-arrange-organise-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "رَتِبْ",
    "target": "رَتِبْ",
    "answer": "To put in order, arrange, organise",
    "detail": "Card: Command · Past: رَتَّبَ · Present: يُرَتِبُ · Command: رَتِبْ · Masdar: تَرْتِيبٌ",
    "forms": {
      "past": "رَتَّبَ",
      "present": "يُرَتِبُ",
      "command": "رَتِبْ",
      "masdar": "تَرْتِيبٌ"
    }
  },
  {
    "id": "ch1-verb-ترتيب-to-put-in-order-arrange-organise-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَرْتِيبٌ",
    "target": "تَرْتِيبٌ",
    "answer": "To put in order, arrange, organise",
    "detail": "Card: Masdar · Past: رَتَّبَ · Present: يُرَتِبُ · Command: رَتِبْ · Masdar: تَرْتِيبٌ",
    "forms": {
      "past": "رَتَّبَ",
      "present": "يُرَتِبُ",
      "command": "رَتِبْ",
      "masdar": "تَرْتِيبٌ"
    }
  },
  {
    "id": "ch1-verb-تبادل-to-exchange-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "تَبَادَلَ",
    "target": "تَبَادَلَ",
    "answer": "To exchange",
    "detail": "Card: Past · Past: تَبَادَلَ · Present: يَتَبَادَلُ · Command: تَبَادَلْ · Masdar: تَبَادُلٌ",
    "forms": {
      "past": "تَبَادَلَ",
      "present": "يَتَبَادَلُ",
      "command": "تَبَادَلْ",
      "masdar": "تَبَادُلٌ"
    }
  },
  {
    "id": "ch1-verb-يتبادل-to-exchange-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَتَبَادَلُ",
    "target": "يَتَبَادَلُ",
    "answer": "To exchange",
    "detail": "Card: Present · Past: تَبَادَلَ · Present: يَتَبَادَلُ · Command: تَبَادَلْ · Masdar: تَبَادُلٌ",
    "forms": {
      "past": "تَبَادَلَ",
      "present": "يَتَبَادَلُ",
      "command": "تَبَادَلْ",
      "masdar": "تَبَادُلٌ"
    }
  },
  {
    "id": "ch1-verb-تبادل-to-exchange-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "تَبَادَلْ",
    "target": "تَبَادَلْ",
    "answer": "To exchange",
    "detail": "Card: Command · Past: تَبَادَلَ · Present: يَتَبَادَلُ · Command: تَبَادَلْ · Masdar: تَبَادُلٌ",
    "forms": {
      "past": "تَبَادَلَ",
      "present": "يَتَبَادَلُ",
      "command": "تَبَادَلْ",
      "masdar": "تَبَادُلٌ"
    }
  },
  {
    "id": "ch1-verb-تبادل-to-exchange-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَبَادُلٌ",
    "target": "تَبَادُلٌ",
    "answer": "To exchange",
    "detail": "Card: Masdar · Past: تَبَادَلَ · Present: يَتَبَادَلُ · Command: تَبَادَلْ · Masdar: تَبَادُلٌ",
    "forms": {
      "past": "تَبَادَلَ",
      "present": "يَتَبَادَلُ",
      "command": "تَبَادَلْ",
      "masdar": "تَبَادُلٌ"
    }
  },
  {
    "id": "ch1-verb-سال-to-ask-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "سَأَلَ",
    "target": "سَأَلَ",
    "answer": "To ask",
    "detail": "Card: Past · Past: سَأَلَ · Present: يَسْأَلُ · Command: اِسْأَلْ · Masdar: سُؤَالٌ",
    "forms": {
      "past": "سَأَلَ",
      "present": "يَسْأَلُ",
      "command": "اِسْأَلْ",
      "masdar": "سُؤَالٌ"
    }
  },
  {
    "id": "ch1-verb-يسال-to-ask-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَسْأَلُ",
    "target": "يَسْأَلُ",
    "answer": "To ask",
    "detail": "Card: Present · Past: سَأَلَ · Present: يَسْأَلُ · Command: اِسْأَلْ · Masdar: سُؤَالٌ",
    "forms": {
      "past": "سَأَلَ",
      "present": "يَسْأَلُ",
      "command": "اِسْأَلْ",
      "masdar": "سُؤَالٌ"
    }
  },
  {
    "id": "ch1-verb-اسال-to-ask-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِسْأَلْ",
    "target": "اِسْأَلْ",
    "answer": "To ask",
    "detail": "Card: Command · Past: سَأَلَ · Present: يَسْأَلُ · Command: اِسْأَلْ · Masdar: سُؤَالٌ",
    "forms": {
      "past": "سَأَلَ",
      "present": "يَسْأَلُ",
      "command": "اِسْأَلْ",
      "masdar": "سُؤَالٌ"
    }
  },
  {
    "id": "ch1-verb-سؤال-to-ask-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "سُؤَالٌ",
    "target": "سُؤَالٌ",
    "answer": "To ask",
    "detail": "Card: Masdar · Past: سَأَلَ · Present: يَسْأَلُ · Command: اِسْأَلْ · Masdar: سُؤَالٌ",
    "forms": {
      "past": "سَأَلَ",
      "present": "يَسْأَلُ",
      "command": "اِسْأَلْ",
      "masdar": "سُؤَالٌ"
    }
  },
  {
    "id": "ch1-verb-اجاب-to-answer-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَجَابَ",
    "target": "أَجَابَ",
    "answer": "To answer",
    "detail": "Card: Past · Past: أَجَابَ · Present: يُجِيبُ · Command: أَجِبْ · Masdar: إِجَابَةٌ",
    "forms": {
      "past": "أَجَابَ",
      "present": "يُجِيبُ",
      "command": "أَجِبْ",
      "masdar": "إِجَابَةٌ"
    }
  },
  {
    "id": "ch1-verb-يجيب-to-answer-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُجِيبُ",
    "target": "يُجِيبُ",
    "answer": "To answer",
    "detail": "Card: Present · Past: أَجَابَ · Present: يُجِيبُ · Command: أَجِبْ · Masdar: إِجَابَةٌ",
    "forms": {
      "past": "أَجَابَ",
      "present": "يُجِيبُ",
      "command": "أَجِبْ",
      "masdar": "إِجَابَةٌ"
    }
  },
  {
    "id": "ch1-verb-اجب-to-answer-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَجِبْ",
    "target": "أَجِبْ",
    "answer": "To answer",
    "detail": "Card: Command · Past: أَجَابَ · Present: يُجِيبُ · Command: أَجِبْ · Masdar: إِجَابَةٌ",
    "forms": {
      "past": "أَجَابَ",
      "present": "يُجِيبُ",
      "command": "أَجِبْ",
      "masdar": "إِجَابَةٌ"
    }
  },
  {
    "id": "ch1-verb-اجابة-to-answer-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "إِجَابَةٌ",
    "target": "إِجَابَةٌ",
    "answer": "To answer",
    "detail": "Card: Masdar · Past: أَجَابَ · Present: يُجِيبُ · Command: أَجِبْ · Masdar: إِجَابَةٌ",
    "forms": {
      "past": "أَجَابَ",
      "present": "يُجِيبُ",
      "command": "أَجِبْ",
      "masdar": "إِجَابَةٌ"
    }
  },
  {
    "id": "ch1-verb-قرا-to-read-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "قَرَأَ",
    "target": "قَرَأَ",
    "answer": "To read",
    "detail": "Card: Past · Past: قَرَأَ · Present: يَقْرَأُ · Command: اِقْرَأْ · Masdar: قِرَاءَةٌ",
    "forms": {
      "past": "قَرَأَ",
      "present": "يَقْرَأُ",
      "command": "اِقْرَأْ",
      "masdar": "قِرَاءَةٌ"
    }
  },
  {
    "id": "ch1-verb-يقرا-to-read-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَقْرَأُ",
    "target": "يَقْرَأُ",
    "answer": "To read",
    "detail": "Card: Present · Past: قَرَأَ · Present: يَقْرَأُ · Command: اِقْرَأْ · Masdar: قِرَاءَةٌ",
    "forms": {
      "past": "قَرَأَ",
      "present": "يَقْرَأُ",
      "command": "اِقْرَأْ",
      "masdar": "قِرَاءَةٌ"
    }
  },
  {
    "id": "ch1-verb-اقرا-to-read-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِقْرَأْ",
    "target": "اِقْرَأْ",
    "answer": "To read",
    "detail": "Card: Command · Past: قَرَأَ · Present: يَقْرَأُ · Command: اِقْرَأْ · Masdar: قِرَاءَةٌ",
    "forms": {
      "past": "قَرَأَ",
      "present": "يَقْرَأُ",
      "command": "اِقْرَأْ",
      "masdar": "قِرَاءَةٌ"
    }
  },
  {
    "id": "ch1-verb-قراءة-to-read-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "قِرَاءَةٌ",
    "target": "قِرَاءَةٌ",
    "answer": "To read",
    "detail": "Card: Masdar · Past: قَرَأَ · Present: يَقْرَأُ · Command: اِقْرَأْ · Masdar: قِرَاءَةٌ",
    "forms": {
      "past": "قَرَأَ",
      "present": "يَقْرَأُ",
      "command": "اِقْرَأْ",
      "masdar": "قِرَاءَةٌ"
    }
  },
  {
    "id": "ch1-verb-مر-to-pass-by-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "مَرَّ",
    "target": "مَرَّ",
    "answer": "To pass by",
    "detail": "Card: Past · Preposition: بـ · Past: مَرَّ · Present: يَمُرٌ · Command: مُرَّ · Masdar: مُرُورٌ",
    "forms": {
      "past": "مَرَّ",
      "present": "يَمُرٌ",
      "command": "مُرَّ",
      "masdar": "مُرُورٌ"
    },
    "requiredPreposition": "بـ"
  },
  {
    "id": "ch1-verb-يمر-to-pass-by-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَمُرٌ",
    "target": "يَمُرٌ",
    "answer": "To pass by",
    "detail": "Card: Present · Preposition: بـ · Past: مَرَّ · Present: يَمُرٌ · Command: مُرَّ · Masdar: مُرُورٌ",
    "forms": {
      "past": "مَرَّ",
      "present": "يَمُرٌ",
      "command": "مُرَّ",
      "masdar": "مُرُورٌ"
    },
    "requiredPreposition": "بـ"
  },
  {
    "id": "ch1-verb-مر-to-pass-by-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "مُرَّ",
    "target": "مُرَّ",
    "answer": "To pass by",
    "detail": "Card: Command · Preposition: بـ · Past: مَرَّ · Present: يَمُرٌ · Command: مُرَّ · Masdar: مُرُورٌ",
    "forms": {
      "past": "مَرَّ",
      "present": "يَمُرٌ",
      "command": "مُرَّ",
      "masdar": "مُرُورٌ"
    },
    "requiredPreposition": "بـ"
  },
  {
    "id": "ch1-verb-مرور-to-pass-by-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "مُرُورٌ",
    "target": "مُرُورٌ",
    "answer": "To pass by",
    "detail": "Card: Masdar · Preposition: بـ · Past: مَرَّ · Present: يَمُرٌ · Command: مُرَّ · Masdar: مُرُورٌ",
    "forms": {
      "past": "مَرَّ",
      "present": "يَمُرٌ",
      "command": "مُرَّ",
      "masdar": "مُرُورٌ"
    },
    "requiredPreposition": "بـ"
  },
  {
    "id": "ch1-verb-نسخ-to-copy-past",
    "chapter": 1,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "نَسَخَ",
    "target": "نَسَخَ",
    "answer": "To copy",
    "detail": "Card: Past · Past: نَسَخَ · Present: يَنْسَخُ · Command: اِنْسَخْ · Masdar: نَسْخٌ",
    "forms": {
      "past": "نَسَخَ",
      "present": "يَنْسَخُ",
      "command": "اِنْسَخْ",
      "masdar": "نَسْخٌ"
    }
  },
  {
    "id": "ch1-verb-ينسخ-to-copy-present",
    "chapter": 1,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَنْسَخُ",
    "target": "يَنْسَخُ",
    "answer": "To copy",
    "detail": "Card: Present · Past: نَسَخَ · Present: يَنْسَخُ · Command: اِنْسَخْ · Masdar: نَسْخٌ",
    "forms": {
      "past": "نَسَخَ",
      "present": "يَنْسَخُ",
      "command": "اِنْسَخْ",
      "masdar": "نَسْخٌ"
    }
  },
  {
    "id": "ch1-verb-انسخ-to-copy-command",
    "chapter": 1,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِنْسَخْ",
    "target": "اِنْسَخْ",
    "answer": "To copy",
    "detail": "Card: Command · Past: نَسَخَ · Present: يَنْسَخُ · Command: اِنْسَخْ · Masdar: نَسْخٌ",
    "forms": {
      "past": "نَسَخَ",
      "present": "يَنْسَخُ",
      "command": "اِنْسَخْ",
      "masdar": "نَسْخٌ"
    }
  },
  {
    "id": "ch1-verb-نسخ-to-copy-masdar",
    "chapter": 1,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "نَسْخٌ",
    "target": "نَسْخٌ",
    "answer": "To copy",
    "detail": "Card: Masdar · Past: نَسَخَ · Present: يَنْسَخُ · Command: اِنْسَخْ · Masdar: نَسْخٌ",
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
    "id": "ch2-verb-توضا-to-perform-ablution-wudoo-past",
    "chapter": 2,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "تَوَضَّأَ",
    "target": "تَوَضَّأَ",
    "answer": "To perform (ablution) wudoo",
    "detail": "Card: Past · Past: تَوَضَّأَ · Present: يَتَوَضَّأُ · Command: تَوَضَّأْ · Masdar: تَوَضؤٌ",
    "forms": {
      "past": "تَوَضَّأَ",
      "present": "يَتَوَضَّأُ",
      "command": "تَوَضَّأْ",
      "masdar": "تَوَضؤٌ"
    }
  },
  {
    "id": "ch2-verb-يتوضا-to-perform-ablution-wudoo-present",
    "chapter": 2,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَتَوَضَّأُ",
    "target": "يَتَوَضَّأُ",
    "answer": "To perform (ablution) wudoo",
    "detail": "Card: Present · Past: تَوَضَّأَ · Present: يَتَوَضَّأُ · Command: تَوَضَّأْ · Masdar: تَوَضؤٌ",
    "forms": {
      "past": "تَوَضَّأَ",
      "present": "يَتَوَضَّأُ",
      "command": "تَوَضَّأْ",
      "masdar": "تَوَضؤٌ"
    }
  },
  {
    "id": "ch2-verb-توضا-to-perform-ablution-wudoo-command",
    "chapter": 2,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "تَوَضَّأْ",
    "target": "تَوَضَّأْ",
    "answer": "To perform (ablution) wudoo",
    "detail": "Card: Command · Past: تَوَضَّأَ · Present: يَتَوَضَّأُ · Command: تَوَضَّأْ · Masdar: تَوَضؤٌ",
    "forms": {
      "past": "تَوَضَّأَ",
      "present": "يَتَوَضَّأُ",
      "command": "تَوَضَّأْ",
      "masdar": "تَوَضؤٌ"
    }
  },
  {
    "id": "ch2-verb-توضؤ-to-perform-ablution-wudoo-masdar",
    "chapter": 2,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَوَضؤٌ",
    "target": "تَوَضؤٌ",
    "answer": "To perform (ablution) wudoo",
    "detail": "Card: Masdar · Past: تَوَضَّأَ · Present: يَتَوَضَّأُ · Command: تَوَضَّأْ · Masdar: تَوَضؤٌ",
    "forms": {
      "past": "تَوَضَّأَ",
      "present": "يَتَوَضَّأُ",
      "command": "تَوَضَّأْ",
      "masdar": "تَوَضؤٌ"
    }
  },
  {
    "id": "ch2-verb-يصلي-to-pray-past",
    "chapter": 2,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "ِيصَلَّى",
    "target": "ِيصَلَّى",
    "answer": "To pray",
    "detail": "Card: Past · Past: ِيصَلَّى · Present: يُصَل · Command: صَلِ · Masdar: صََّلٌَ / ة",
    "forms": {
      "past": "ِيصَلَّى",
      "present": "يُصَل",
      "command": "صَلِ",
      "masdar": "صََّلٌَ / ة"
    }
  },
  {
    "id": "ch2-verb-يصل-to-pray-present",
    "chapter": 2,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُصَل",
    "target": "يُصَل",
    "answer": "To pray",
    "detail": "Card: Present · Past: ِيصَلَّى · Present: يُصَل · Command: صَلِ · Masdar: صََّلٌَ / ة",
    "forms": {
      "past": "ِيصَلَّى",
      "present": "يُصَل",
      "command": "صَلِ",
      "masdar": "صََّلٌَ / ة"
    }
  },
  {
    "id": "ch2-verb-صل-to-pray-command",
    "chapter": 2,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "صَلِ",
    "target": "صَلِ",
    "answer": "To pray",
    "detail": "Card: Command · Past: ِيصَلَّى · Present: يُصَل · Command: صَلِ · Masdar: صََّلٌَ / ة",
    "forms": {
      "past": "ِيصَلَّى",
      "present": "يُصَل",
      "command": "صَلِ",
      "masdar": "صََّلٌَ / ة"
    }
  },
  {
    "id": "ch2-verb-صل-ة-to-pray-masdar",
    "chapter": 2,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "صََّلٌَ / ة",
    "target": "صََّلٌَ / ة",
    "answer": "To pray",
    "detail": "Card: Masdar · Past: ِيصَلَّى · Present: يُصَل · Command: صَلِ · Masdar: صََّلٌَ / ة",
    "forms": {
      "past": "ِيصَلَّى",
      "present": "يُصَل",
      "command": "صَلِ",
      "masdar": "صََّلٌَ / ة"
    }
  },
  {
    "id": "ch2-verb-فعل-to-do-past",
    "chapter": 2,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "فَعَلَ",
    "target": "فَعَلَ",
    "answer": "To do",
    "detail": "Card: Past · Past: فَعَلَ · Present: يَفْعَلُ · Command: اِفْعَلْ · Masdar: فِعْلٌ",
    "forms": {
      "past": "فَعَلَ",
      "present": "يَفْعَلُ",
      "command": "اِفْعَلْ",
      "masdar": "فِعْلٌ"
    }
  },
  {
    "id": "ch2-verb-يفعل-to-do-present",
    "chapter": 2,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَفْعَلُ",
    "target": "يَفْعَلُ",
    "answer": "To do",
    "detail": "Card: Present · Past: فَعَلَ · Present: يَفْعَلُ · Command: اِفْعَلْ · Masdar: فِعْلٌ",
    "forms": {
      "past": "فَعَلَ",
      "present": "يَفْعَلُ",
      "command": "اِفْعَلْ",
      "masdar": "فِعْلٌ"
    }
  },
  {
    "id": "ch2-verb-افعل-to-do-command",
    "chapter": 2,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِفْعَلْ",
    "target": "اِفْعَلْ",
    "answer": "To do",
    "detail": "Card: Command · Past: فَعَلَ · Present: يَفْعَلُ · Command: اِفْعَلْ · Masdar: فِعْلٌ",
    "forms": {
      "past": "فَعَلَ",
      "present": "يَفْعَلُ",
      "command": "اِفْعَلْ",
      "masdar": "فِعْلٌ"
    }
  },
  {
    "id": "ch2-verb-فعل-to-do-masdar",
    "chapter": 2,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "فِعْلٌ",
    "target": "فِعْلٌ",
    "answer": "To do",
    "detail": "Card: Masdar · Past: فَعَلَ · Present: يَفْعَلُ · Command: اِفْعَلْ · Masdar: فِعْلٌ",
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
    "id": "ch3-verb-سكن-to-live-past",
    "chapter": 3,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "سَكَنَ",
    "target": "سَكَنَ",
    "answer": "To live",
    "detail": "Card: Past · Past: سَكَنَ · Present: يَسْكُنُ · Command: اُسْكُنْ · Masdar: سَكَنٌ",
    "forms": {
      "past": "سَكَنَ",
      "present": "يَسْكُنُ",
      "command": "اُسْكُنْ",
      "masdar": "سَكَنٌ"
    }
  },
  {
    "id": "ch3-verb-يسكن-to-live-present",
    "chapter": 3,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَسْكُنُ",
    "target": "يَسْكُنُ",
    "answer": "To live",
    "detail": "Card: Present · Past: سَكَنَ · Present: يَسْكُنُ · Command: اُسْكُنْ · Masdar: سَكَنٌ",
    "forms": {
      "past": "سَكَنَ",
      "present": "يَسْكُنُ",
      "command": "اُسْكُنْ",
      "masdar": "سَكَنٌ"
    }
  },
  {
    "id": "ch3-verb-اسكن-to-live-command",
    "chapter": 3,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اُسْكُنْ",
    "target": "اُسْكُنْ",
    "answer": "To live",
    "detail": "Card: Command · Past: سَكَنَ · Present: يَسْكُنُ · Command: اُسْكُنْ · Masdar: سَكَنٌ",
    "forms": {
      "past": "سَكَنَ",
      "present": "يَسْكُنُ",
      "command": "اُسْكُنْ",
      "masdar": "سَكَنٌ"
    }
  },
  {
    "id": "ch3-verb-سكن-to-live-masdar",
    "chapter": 3,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "سَكَنٌ",
    "target": "سَكَنٌ",
    "answer": "To live",
    "detail": "Card: Masdar · Past: سَكَنَ · Present: يَسْكُنُ · Command: اُسْكُنْ · Masdar: سَكَنٌ",
    "forms": {
      "past": "سَكَنَ",
      "present": "يَسْكُنُ",
      "command": "اُسْكُنْ",
      "masdar": "سَكَنٌ"
    }
  },
  {
    "id": "ch3-verb-اراد-to-want-to-intend-past",
    "chapter": 3,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَرَادَ",
    "target": "أَرَادَ",
    "answer": "To want; to intend",
    "detail": "Card: Past · Past: أَرَادَ · Present: يُرِيدُ · Command: أَرِدْ · Masdar: إِرَادَةٌ",
    "forms": {
      "past": "أَرَادَ",
      "present": "يُرِيدُ",
      "command": "أَرِدْ",
      "masdar": "إِرَادَةٌ"
    }
  },
  {
    "id": "ch3-verb-يريد-to-want-to-intend-present",
    "chapter": 3,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُرِيدُ",
    "target": "يُرِيدُ",
    "answer": "To want; to intend",
    "detail": "Card: Present · Past: أَرَادَ · Present: يُرِيدُ · Command: أَرِدْ · Masdar: إِرَادَةٌ",
    "forms": {
      "past": "أَرَادَ",
      "present": "يُرِيدُ",
      "command": "أَرِدْ",
      "masdar": "إِرَادَةٌ"
    }
  },
  {
    "id": "ch3-verb-ارد-to-want-to-intend-command",
    "chapter": 3,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَرِدْ",
    "target": "أَرِدْ",
    "answer": "To want; to intend",
    "detail": "Card: Command · Past: أَرَادَ · Present: يُرِيدُ · Command: أَرِدْ · Masdar: إِرَادَةٌ",
    "forms": {
      "past": "أَرَادَ",
      "present": "يُرِيدُ",
      "command": "أَرِدْ",
      "masdar": "إِرَادَةٌ"
    }
  },
  {
    "id": "ch3-verb-ارادة-to-want-to-intend-masdar",
    "chapter": 3,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "إِرَادَةٌ",
    "target": "إِرَادَةٌ",
    "answer": "To want; to intend",
    "detail": "Card: Masdar · Past: أَرَادَ · Present: يُرِيدُ · Command: أَرِدْ · Masdar: إِرَادَةٌ",
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
    "id": "ch4-verb-نام-to-sleep-past",
    "chapter": 4,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "نَامَ",
    "target": "نَامَ",
    "answer": "To sleep",
    "detail": "Card: Past · Past: نَامَ · Present: يَنَامُ · Command: نَمْ · Masdar: نَوْمٌ",
    "forms": {
      "past": "نَامَ",
      "present": "يَنَامُ",
      "command": "نَمْ",
      "masdar": "نَوْمٌ"
    }
  },
  {
    "id": "ch4-verb-ينام-to-sleep-present",
    "chapter": 4,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَنَامُ",
    "target": "يَنَامُ",
    "answer": "To sleep",
    "detail": "Card: Present · Past: نَامَ · Present: يَنَامُ · Command: نَمْ · Masdar: نَوْمٌ",
    "forms": {
      "past": "نَامَ",
      "present": "يَنَامُ",
      "command": "نَمْ",
      "masdar": "نَوْمٌ"
    }
  },
  {
    "id": "ch4-verb-نم-to-sleep-command",
    "chapter": 4,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "نَمْ",
    "target": "نَمْ",
    "answer": "To sleep",
    "detail": "Card: Command · Past: نَامَ · Present: يَنَامُ · Command: نَمْ · Masdar: نَوْمٌ",
    "forms": {
      "past": "نَامَ",
      "present": "يَنَامُ",
      "command": "نَمْ",
      "masdar": "نَوْمٌ"
    }
  },
  {
    "id": "ch4-verb-نوم-to-sleep-masdar",
    "chapter": 4,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "نَوْمٌ",
    "target": "نَوْمٌ",
    "answer": "To sleep",
    "detail": "Card: Masdar · Past: نَامَ · Present: يَنَامُ · Command: نَمْ · Masdar: نَوْمٌ",
    "forms": {
      "past": "نَامَ",
      "present": "يَنَامُ",
      "command": "نَمْ",
      "masdar": "نَوْمٌ"
    }
  },
  {
    "id": "ch4-verb-استيقظ-to-wake-up-past",
    "chapter": 4,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِسْتَيْقَظَ",
    "target": "اِسْتَيْقَظَ",
    "answer": "To wake up",
    "detail": "Card: Past · Past: اِسْتَيْقَظَ · Present: يَسْتَيْقِظُ · Command: اِسْتَيْقِظْ · Masdar: اِسْتِيقَاظٌ",
    "forms": {
      "past": "اِسْتَيْقَظَ",
      "present": "يَسْتَيْقِظُ",
      "command": "اِسْتَيْقِظْ",
      "masdar": "اِسْتِيقَاظٌ"
    }
  },
  {
    "id": "ch4-verb-يستيقظ-to-wake-up-present",
    "chapter": 4,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَسْتَيْقِظُ",
    "target": "يَسْتَيْقِظُ",
    "answer": "To wake up",
    "detail": "Card: Present · Past: اِسْتَيْقَظَ · Present: يَسْتَيْقِظُ · Command: اِسْتَيْقِظْ · Masdar: اِسْتِيقَاظٌ",
    "forms": {
      "past": "اِسْتَيْقَظَ",
      "present": "يَسْتَيْقِظُ",
      "command": "اِسْتَيْقِظْ",
      "masdar": "اِسْتِيقَاظٌ"
    }
  },
  {
    "id": "ch4-verb-استيقظ-to-wake-up-command",
    "chapter": 4,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِسْتَيْقِظْ",
    "target": "اِسْتَيْقِظْ",
    "answer": "To wake up",
    "detail": "Card: Command · Past: اِسْتَيْقَظَ · Present: يَسْتَيْقِظُ · Command: اِسْتَيْقِظْ · Masdar: اِسْتِيقَاظٌ",
    "forms": {
      "past": "اِسْتَيْقَظَ",
      "present": "يَسْتَيْقِظُ",
      "command": "اِسْتَيْقِظْ",
      "masdar": "اِسْتِيقَاظٌ"
    }
  },
  {
    "id": "ch4-verb-استيقاظ-to-wake-up-masdar",
    "chapter": 4,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِسْتِيقَاظٌ",
    "target": "اِسْتِيقَاظٌ",
    "answer": "To wake up",
    "detail": "Card: Masdar · Past: اِسْتَيْقَظَ · Present: يَسْتَيْقِظُ · Command: اِسْتَيْقِظْ · Masdar: اِسْتِيقَاظٌ",
    "forms": {
      "past": "اِسْتَيْقَظَ",
      "present": "يَسْتَيْقِظُ",
      "command": "اِسْتَيْقِظْ",
      "masdar": "اِسْتِيقَاظٌ"
    }
  },
  {
    "id": "ch4-verb-ذهب-to-go-past",
    "chapter": 4,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "ذَهَبَ",
    "target": "ذَهَبَ",
    "answer": "To go",
    "detail": "Card: Past · Preposition: إِلَى · Past: ذَهَبَ · Present: يَذْهَبُ · Command: اِذْهَبْ · Masdar: ذَهَابٌ",
    "forms": {
      "past": "ذَهَبَ",
      "present": "يَذْهَبُ",
      "command": "اِذْهَبْ",
      "masdar": "ذَهَابٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch4-verb-يذهب-to-go-present",
    "chapter": 4,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَذْهَبُ",
    "target": "يَذْهَبُ",
    "answer": "To go",
    "detail": "Card: Present · Preposition: إِلَى · Past: ذَهَبَ · Present: يَذْهَبُ · Command: اِذْهَبْ · Masdar: ذَهَابٌ",
    "forms": {
      "past": "ذَهَبَ",
      "present": "يَذْهَبُ",
      "command": "اِذْهَبْ",
      "masdar": "ذَهَابٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch4-verb-اذهب-to-go-command",
    "chapter": 4,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِذْهَبْ",
    "target": "اِذْهَبْ",
    "answer": "To go",
    "detail": "Card: Command · Preposition: إِلَى · Past: ذَهَبَ · Present: يَذْهَبُ · Command: اِذْهَبْ · Masdar: ذَهَابٌ",
    "forms": {
      "past": "ذَهَبَ",
      "present": "يَذْهَبُ",
      "command": "اِذْهَبْ",
      "masdar": "ذَهَابٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch4-verb-ذهاب-to-go-masdar",
    "chapter": 4,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "ذَهَابٌ",
    "target": "ذَهَابٌ",
    "answer": "To go",
    "detail": "Card: Masdar · Preposition: إِلَى · Past: ذَهَبَ · Present: يَذْهَبُ · Command: اِذْهَبْ · Masdar: ذَهَابٌ",
    "forms": {
      "past": "ذَهَبَ",
      "present": "يَذْهَبُ",
      "command": "اِذْهَبْ",
      "masdar": "ذَهَابٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch4-verb-كنس-vacuum-past",
    "chapter": 4,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "كَنَسَ",
    "target": "كَنَسَ",
    "answer": "vacuum",
    "detail": "Card: Past · Past: كَنَسَ · Present: يَكْنُسُ · Command: اُكْنُسْ · Masdar: كَنْسٌ",
    "forms": {
      "past": "كَنَسَ",
      "present": "يَكْنُسُ",
      "command": "اُكْنُسْ",
      "masdar": "كَنْسٌ"
    }
  },
  {
    "id": "ch4-verb-يكنس-vacuum-present",
    "chapter": 4,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَكْنُسُ",
    "target": "يَكْنُسُ",
    "answer": "vacuum",
    "detail": "Card: Present · Past: كَنَسَ · Present: يَكْنُسُ · Command: اُكْنُسْ · Masdar: كَنْسٌ",
    "forms": {
      "past": "كَنَسَ",
      "present": "يَكْنُسُ",
      "command": "اُكْنُسْ",
      "masdar": "كَنْسٌ"
    }
  },
  {
    "id": "ch4-verb-اكنس-vacuum-command",
    "chapter": 4,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اُكْنُسْ",
    "target": "اُكْنُسْ",
    "answer": "vacuum",
    "detail": "Card: Command · Past: كَنَسَ · Present: يَكْنُسُ · Command: اُكْنُسْ · Masdar: كَنْسٌ",
    "forms": {
      "past": "كَنَسَ",
      "present": "يَكْنُسُ",
      "command": "اُكْنُسْ",
      "masdar": "كَنْسٌ"
    }
  },
  {
    "id": "ch4-verb-كنس-vacuum-masdar",
    "chapter": 4,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "كَنْسٌ",
    "target": "كَنْسٌ",
    "answer": "vacuum",
    "detail": "Card: Masdar · Past: كَنَسَ · Present: يَكْنُسُ · Command: اُكْنُسْ · Masdar: كَنْسٌ",
    "forms": {
      "past": "كَنَسَ",
      "present": "يَكْنُسُ",
      "command": "اُكْنُسْ",
      "masdar": "كَنْسٌ"
    }
  },
  {
    "id": "ch4-verb-غسل-to-wash-past",
    "chapter": 4,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "غَسَلَ",
    "target": "غَسَلَ",
    "answer": "To wash",
    "detail": "Card: Past · Past: غَسَلَ · Present: يَغْسِلُ · Command: اِغْسِلْ · Masdar: غَسْلٌ",
    "forms": {
      "past": "غَسَلَ",
      "present": "يَغْسِلُ",
      "command": "اِغْسِلْ",
      "masdar": "غَسْلٌ"
    }
  },
  {
    "id": "ch4-verb-يغسل-to-wash-present",
    "chapter": 4,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَغْسِلُ",
    "target": "يَغْسِلُ",
    "answer": "To wash",
    "detail": "Card: Present · Past: غَسَلَ · Present: يَغْسِلُ · Command: اِغْسِلْ · Masdar: غَسْلٌ",
    "forms": {
      "past": "غَسَلَ",
      "present": "يَغْسِلُ",
      "command": "اِغْسِلْ",
      "masdar": "غَسْلٌ"
    }
  },
  {
    "id": "ch4-verb-اغسل-to-wash-command",
    "chapter": 4,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِغْسِلْ",
    "target": "اِغْسِلْ",
    "answer": "To wash",
    "detail": "Card: Command · Past: غَسَلَ · Present: يَغْسِلُ · Command: اِغْسِلْ · Masdar: غَسْلٌ",
    "forms": {
      "past": "غَسَلَ",
      "present": "يَغْسِلُ",
      "command": "اِغْسِلْ",
      "masdar": "غَسْلٌ"
    }
  },
  {
    "id": "ch4-verb-غسل-to-wash-masdar",
    "chapter": 4,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "غَسْلٌ",
    "target": "غَسْلٌ",
    "answer": "To wash",
    "detail": "Card: Masdar · Past: غَسَلَ · Present: يَغْسِلُ · Command: اِغْسِلْ · Masdar: غَسْلٌ",
    "forms": {
      "past": "غَسَلَ",
      "present": "يَغْسِلُ",
      "command": "اِغْسِلْ",
      "masdar": "غَسْلٌ"
    }
  },
  {
    "id": "ch4-verb-كوي-to-iron-past",
    "chapter": 4,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "كَوَى",
    "target": "كَوَى",
    "answer": "To iron",
    "detail": "Card: Past · Past: كَوَى · Present: يَكْوِي · Command: اِكْوِ · Masdar: كَيٌ",
    "forms": {
      "past": "كَوَى",
      "present": "يَكْوِي",
      "command": "اِكْوِ",
      "masdar": "كَيٌ"
    }
  },
  {
    "id": "ch4-verb-يكوي-to-iron-present",
    "chapter": 4,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَكْوِي",
    "target": "يَكْوِي",
    "answer": "To iron",
    "detail": "Card: Present · Past: كَوَى · Present: يَكْوِي · Command: اِكْوِ · Masdar: كَيٌ",
    "forms": {
      "past": "كَوَى",
      "present": "يَكْوِي",
      "command": "اِكْوِ",
      "masdar": "كَيٌ"
    }
  },
  {
    "id": "ch4-verb-اكو-to-iron-command",
    "chapter": 4,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِكْوِ",
    "target": "اِكْوِ",
    "answer": "To iron",
    "detail": "Card: Command · Past: كَوَى · Present: يَكْوِي · Command: اِكْوِ · Masdar: كَيٌ",
    "forms": {
      "past": "كَوَى",
      "present": "يَكْوِي",
      "command": "اِكْوِ",
      "masdar": "كَيٌ"
    }
  },
  {
    "id": "ch4-verb-كي-to-iron-masdar",
    "chapter": 4,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "كَيٌ",
    "target": "كَيٌ",
    "answer": "To iron",
    "detail": "Card: Masdar · Past: كَوَى · Present: يَكْوِي · Command: اِكْوِ · Masdar: كَيٌ",
    "forms": {
      "past": "كَوَى",
      "present": "يَكْوِي",
      "command": "اِكْوِ",
      "masdar": "كَيٌ"
    }
  },
  {
    "id": "ch4-verb-شاهد-to-watch-past",
    "chapter": 4,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "شَاهَدَ",
    "target": "شَاهَدَ",
    "answer": "To watch",
    "detail": "Card: Past · Past: شَاهَدَ · Present: يُشاهِدُ · Command: شَاهِدْ · Masdar: مُشَاهَدَةٌ",
    "forms": {
      "past": "شَاهَدَ",
      "present": "يُشاهِدُ",
      "command": "شَاهِدْ",
      "masdar": "مُشَاهَدَةٌ"
    }
  },
  {
    "id": "ch4-verb-يشاهد-to-watch-present",
    "chapter": 4,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُشاهِدُ",
    "target": "يُشاهِدُ",
    "answer": "To watch",
    "detail": "Card: Present · Past: شَاهَدَ · Present: يُشاهِدُ · Command: شَاهِدْ · Masdar: مُشَاهَدَةٌ",
    "forms": {
      "past": "شَاهَدَ",
      "present": "يُشاهِدُ",
      "command": "شَاهِدْ",
      "masdar": "مُشَاهَدَةٌ"
    }
  },
  {
    "id": "ch4-verb-شاهد-to-watch-command",
    "chapter": 4,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "شَاهِدْ",
    "target": "شَاهِدْ",
    "answer": "To watch",
    "detail": "Card: Command · Past: شَاهَدَ · Present: يُشاهِدُ · Command: شَاهِدْ · Masdar: مُشَاهَدَةٌ",
    "forms": {
      "past": "شَاهَدَ",
      "present": "يُشاهِدُ",
      "command": "شَاهِدْ",
      "masdar": "مُشَاهَدَةٌ"
    }
  },
  {
    "id": "ch4-verb-مشاهدة-to-watch-masdar",
    "chapter": 4,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "مُشَاهَدَةٌ",
    "target": "مُشَاهَدَةٌ",
    "answer": "To watch",
    "detail": "Card: Masdar · Past: شَاهَدَ · Present: يُشاهِدُ · Command: شَاهِدْ · Masdar: مُشَاهَدَةٌ",
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
    "id": "ch5-verb-اكل-to-eat-past",
    "chapter": 5,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَكَلَ",
    "target": "أَكَلَ",
    "answer": "To eat",
    "detail": "Card: Past · Past: أَكَلَ · Present: يَأْكُلُ · Command: كُلْ · Masdar: أَكْلٌ",
    "forms": {
      "past": "أَكَلَ",
      "present": "يَأْكُلُ",
      "command": "كُلْ",
      "masdar": "أَكْلٌ"
    }
  },
  {
    "id": "ch5-verb-ياكل-to-eat-present",
    "chapter": 5,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَأْكُلُ",
    "target": "يَأْكُلُ",
    "answer": "To eat",
    "detail": "Card: Present · Past: أَكَلَ · Present: يَأْكُلُ · Command: كُلْ · Masdar: أَكْلٌ",
    "forms": {
      "past": "أَكَلَ",
      "present": "يَأْكُلُ",
      "command": "كُلْ",
      "masdar": "أَكْلٌ"
    }
  },
  {
    "id": "ch5-verb-كل-to-eat-command",
    "chapter": 5,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "كُلْ",
    "target": "كُلْ",
    "answer": "To eat",
    "detail": "Card: Command · Past: أَكَلَ · Present: يَأْكُلُ · Command: كُلْ · Masdar: أَكْلٌ",
    "forms": {
      "past": "أَكَلَ",
      "present": "يَأْكُلُ",
      "command": "كُلْ",
      "masdar": "أَكْلٌ"
    }
  },
  {
    "id": "ch5-verb-اكل-to-eat-masdar",
    "chapter": 5,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "أَكْلٌ",
    "target": "أَكْلٌ",
    "answer": "To eat",
    "detail": "Card: Masdar · Past: أَكَلَ · Present: يَأْكُلُ · Command: كُلْ · Masdar: أَكْلٌ",
    "forms": {
      "past": "أَكَلَ",
      "present": "يَأْكُلُ",
      "command": "كُلْ",
      "masdar": "أَكْلٌ"
    }
  },
  {
    "id": "ch5-verb-طلب-to-want-to-order-to-request-past",
    "chapter": 5,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "طَلَبَ",
    "target": "طَلَبَ",
    "answer": "To want; to order; to request",
    "detail": "Card: Past · Past: طَلَبَ · Present: يَطْلُبُ · Command: أُطْلُبْ · Masdar: طَلَبٌ",
    "forms": {
      "past": "طَلَبَ",
      "present": "يَطْلُبُ",
      "command": "أُطْلُبْ",
      "masdar": "طَلَبٌ"
    }
  },
  {
    "id": "ch5-verb-يطلب-to-want-to-order-to-request-present",
    "chapter": 5,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَطْلُبُ",
    "target": "يَطْلُبُ",
    "answer": "To want; to order; to request",
    "detail": "Card: Present · Past: طَلَبَ · Present: يَطْلُبُ · Command: أُطْلُبْ · Masdar: طَلَبٌ",
    "forms": {
      "past": "طَلَبَ",
      "present": "يَطْلُبُ",
      "command": "أُطْلُبْ",
      "masdar": "طَلَبٌ"
    }
  },
  {
    "id": "ch5-verb-اطلب-to-want-to-order-to-request-command",
    "chapter": 5,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أُطْلُبْ",
    "target": "أُطْلُبْ",
    "answer": "To want; to order; to request",
    "detail": "Card: Command · Past: طَلَبَ · Present: يَطْلُبُ · Command: أُطْلُبْ · Masdar: طَلَبٌ",
    "forms": {
      "past": "طَلَبَ",
      "present": "يَطْلُبُ",
      "command": "أُطْلُبْ",
      "masdar": "طَلَبٌ"
    }
  },
  {
    "id": "ch5-verb-طلب-to-want-to-order-to-request-masdar",
    "chapter": 5,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "طَلَبٌ",
    "target": "طَلَبٌ",
    "answer": "To want; to order; to request",
    "detail": "Card: Masdar · Past: طَلَبَ · Present: يَطْلُبُ · Command: أُطْلُبْ · Masdar: طَلَبٌ",
    "forms": {
      "past": "طَلَبَ",
      "present": "يَطْلُبُ",
      "command": "أُطْلُبْ",
      "masdar": "طَلَبٌ"
    }
  },
  {
    "id": "ch5-verb-فضل-to-prefer-past",
    "chapter": 5,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "فَضَّلَ",
    "target": "فَضَّلَ",
    "answer": "To prefer",
    "detail": "Card: Past · Past: فَضَّلَ · Present: يُفَضِلُ · Command: فَضِلْ · Masdar: تَفْضِيلٌ",
    "forms": {
      "past": "فَضَّلَ",
      "present": "يُفَضِلُ",
      "command": "فَضِلْ",
      "masdar": "تَفْضِيلٌ"
    }
  },
  {
    "id": "ch5-verb-يفضل-to-prefer-present",
    "chapter": 5,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُفَضِلُ",
    "target": "يُفَضِلُ",
    "answer": "To prefer",
    "detail": "Card: Present · Past: فَضَّلَ · Present: يُفَضِلُ · Command: فَضِلْ · Masdar: تَفْضِيلٌ",
    "forms": {
      "past": "فَضَّلَ",
      "present": "يُفَضِلُ",
      "command": "فَضِلْ",
      "masdar": "تَفْضِيلٌ"
    }
  },
  {
    "id": "ch5-verb-فضل-to-prefer-command",
    "chapter": 5,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "فَضِلْ",
    "target": "فَضِلْ",
    "answer": "To prefer",
    "detail": "Card: Command · Past: فَضَّلَ · Present: يُفَضِلُ · Command: فَضِلْ · Masdar: تَفْضِيلٌ",
    "forms": {
      "past": "فَضَّلَ",
      "present": "يُفَضِلُ",
      "command": "فَضِلْ",
      "masdar": "تَفْضِيلٌ"
    }
  },
  {
    "id": "ch5-verb-تفضيل-to-prefer-masdar",
    "chapter": 5,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَفْضِيلٌ",
    "target": "تَفْضِيلٌ",
    "answer": "To prefer",
    "detail": "Card: Masdar · Past: فَضَّلَ · Present: يُفَضِلُ · Command: فَضِلْ · Masdar: تَفْضِيلٌ",
    "forms": {
      "past": "فَضَّلَ",
      "present": "يُفَضِلُ",
      "command": "فَضِلْ",
      "masdar": "تَفْضِيلٌ"
    }
  },
  {
    "id": "ch5-verb-شرب-to-drink-past",
    "chapter": 5,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "شَرِبَ",
    "target": "شَرِبَ",
    "answer": "To drink",
    "detail": "Card: Past · Past: شَرِبَ · Present: يَشْرَبُ · Command: اِشْرَبْ · Masdar: شُرْبٌ",
    "forms": {
      "past": "شَرِبَ",
      "present": "يَشْرَبُ",
      "command": "اِشْرَبْ",
      "masdar": "شُرْبٌ"
    }
  },
  {
    "id": "ch5-verb-يشرب-to-drink-present",
    "chapter": 5,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَشْرَبُ",
    "target": "يَشْرَبُ",
    "answer": "To drink",
    "detail": "Card: Present · Past: شَرِبَ · Present: يَشْرَبُ · Command: اِشْرَبْ · Masdar: شُرْبٌ",
    "forms": {
      "past": "شَرِبَ",
      "present": "يَشْرَبُ",
      "command": "اِشْرَبْ",
      "masdar": "شُرْبٌ"
    }
  },
  {
    "id": "ch5-verb-اشرب-to-drink-command",
    "chapter": 5,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِشْرَبْ",
    "target": "اِشْرَبْ",
    "answer": "To drink",
    "detail": "Card: Command · Past: شَرِبَ · Present: يَشْرَبُ · Command: اِشْرَبْ · Masdar: شُرْبٌ",
    "forms": {
      "past": "شَرِبَ",
      "present": "يَشْرَبُ",
      "command": "اِشْرَبْ",
      "masdar": "شُرْبٌ"
    }
  },
  {
    "id": "ch5-verb-شرب-to-drink-masdar",
    "chapter": 5,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "شُرْبٌ",
    "target": "شُرْبٌ",
    "answer": "To drink",
    "detail": "Card: Masdar · Past: شَرِبَ · Present: يَشْرَبُ · Command: اِشْرَبْ · Masdar: شُرْبٌ",
    "forms": {
      "past": "شَرِبَ",
      "present": "يَشْرَبُ",
      "command": "اِشْرَبْ",
      "masdar": "شُرْبٌ"
    }
  },
  {
    "id": "ch5-verb-حول-to-change-convert-to-transfer-past",
    "chapter": 5,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "حَوَّلَ",
    "target": "حَوَّلَ",
    "answer": "To change, convert; to transfer",
    "detail": "Card: Past · Past: حَوَّلَ · Present: يُحَوِلُ · Command: حَوِلْ · Masdar: تَحْوِيلٌ",
    "forms": {
      "past": "حَوَّلَ",
      "present": "يُحَوِلُ",
      "command": "حَوِلْ",
      "masdar": "تَحْوِيلٌ"
    }
  },
  {
    "id": "ch5-verb-يحول-to-change-convert-to-transfer-present",
    "chapter": 5,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُحَوِلُ",
    "target": "يُحَوِلُ",
    "answer": "To change, convert; to transfer",
    "detail": "Card: Present · Past: حَوَّلَ · Present: يُحَوِلُ · Command: حَوِلْ · Masdar: تَحْوِيلٌ",
    "forms": {
      "past": "حَوَّلَ",
      "present": "يُحَوِلُ",
      "command": "حَوِلْ",
      "masdar": "تَحْوِيلٌ"
    }
  },
  {
    "id": "ch5-verb-حول-to-change-convert-to-transfer-command",
    "chapter": 5,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "حَوِلْ",
    "target": "حَوِلْ",
    "answer": "To change, convert; to transfer",
    "detail": "Card: Command · Past: حَوَّلَ · Present: يُحَوِلُ · Command: حَوِلْ · Masdar: تَحْوِيلٌ",
    "forms": {
      "past": "حَوَّلَ",
      "present": "يُحَوِلُ",
      "command": "حَوِلْ",
      "masdar": "تَحْوِيلٌ"
    }
  },
  {
    "id": "ch5-verb-تحويل-to-change-convert-to-transfer-masdar",
    "chapter": 5,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَحْوِيلٌ",
    "target": "تَحْوِيلٌ",
    "answer": "To change, convert; to transfer",
    "detail": "Card: Masdar · Past: حَوَّلَ · Present: يُحَوِلُ · Command: حَوِلْ · Masdar: تَحْوِيلٌ",
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
    "id": "ch6-verb-استطاع-can-to-be-able-to-past",
    "chapter": 6,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِسْتَطَاعَ",
    "target": "اِسْتَطَاعَ",
    "answer": "Can; to be able to",
    "detail": "Card: Past · Past: اِسْتَطَاعَ · Present: يَسْتَطِيعُ · Command: اِسْتَطِعْ · Masdar: اِسْتِطَاعَةٌ",
    "forms": {
      "past": "اِسْتَطَاعَ",
      "present": "يَسْتَطِيعُ",
      "command": "اِسْتَطِعْ",
      "masdar": "اِسْتِطَاعَةٌ"
    }
  },
  {
    "id": "ch6-verb-يستطيع-can-to-be-able-to-present",
    "chapter": 6,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَسْتَطِيعُ",
    "target": "يَسْتَطِيعُ",
    "answer": "Can; to be able to",
    "detail": "Card: Present · Past: اِسْتَطَاعَ · Present: يَسْتَطِيعُ · Command: اِسْتَطِعْ · Masdar: اِسْتِطَاعَةٌ",
    "forms": {
      "past": "اِسْتَطَاعَ",
      "present": "يَسْتَطِيعُ",
      "command": "اِسْتَطِعْ",
      "masdar": "اِسْتِطَاعَةٌ"
    }
  },
  {
    "id": "ch6-verb-استطع-can-to-be-able-to-command",
    "chapter": 6,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِسْتَطِعْ",
    "target": "اِسْتَطِعْ",
    "answer": "Can; to be able to",
    "detail": "Card: Command · Past: اِسْتَطَاعَ · Present: يَسْتَطِيعُ · Command: اِسْتَطِعْ · Masdar: اِسْتِطَاعَةٌ",
    "forms": {
      "past": "اِسْتَطَاعَ",
      "present": "يَسْتَطِيعُ",
      "command": "اِسْتَطِعْ",
      "masdar": "اِسْتِطَاعَةٌ"
    }
  },
  {
    "id": "ch6-verb-استطاعة-can-to-be-able-to-masdar",
    "chapter": 6,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِسْتِطَاعَةٌ",
    "target": "اِسْتِطَاعَةٌ",
    "answer": "Can; to be able to",
    "detail": "Card: Masdar · Past: اِسْتَطَاعَ · Present: يَسْتَطِيعُ · Command: اِسْتَطِعْ · Masdar: اِسْتِطَاعَةٌ",
    "forms": {
      "past": "اِسْتَطَاعَ",
      "present": "يَسْتَطِيعُ",
      "command": "اِسْتَطِعْ",
      "masdar": "اِسْتِطَاعَةٌ"
    }
  },
  {
    "id": "ch6-verb-عمل-to-work-past",
    "chapter": 6,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "عَمِلَ",
    "target": "عَمِلَ",
    "answer": "To work",
    "detail": "Card: Past · Past: عَمِلَ · Present: يَعْمَلُ · Command: اِعمَلْ · Masdar: عَمَلٌ",
    "forms": {
      "past": "عَمِلَ",
      "present": "يَعْمَلُ",
      "command": "اِعمَلْ",
      "masdar": "عَمَلٌ"
    }
  },
  {
    "id": "ch6-verb-يعمل-to-work-present",
    "chapter": 6,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَعْمَلُ",
    "target": "يَعْمَلُ",
    "answer": "To work",
    "detail": "Card: Present · Past: عَمِلَ · Present: يَعْمَلُ · Command: اِعمَلْ · Masdar: عَمَلٌ",
    "forms": {
      "past": "عَمِلَ",
      "present": "يَعْمَلُ",
      "command": "اِعمَلْ",
      "masdar": "عَمَلٌ"
    }
  },
  {
    "id": "ch6-verb-اعمل-to-work-command",
    "chapter": 6,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِعمَلْ",
    "target": "اِعمَلْ",
    "answer": "To work",
    "detail": "Card: Command · Past: عَمِلَ · Present: يَعْمَلُ · Command: اِعمَلْ · Masdar: عَمَلٌ",
    "forms": {
      "past": "عَمِلَ",
      "present": "يَعْمَلُ",
      "command": "اِعمَلْ",
      "masdar": "عَمَلٌ"
    }
  },
  {
    "id": "ch6-verb-عمل-to-work-masdar",
    "chapter": 6,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "عَمَلٌ",
    "target": "عَمَلٌ",
    "answer": "To work",
    "detail": "Card: Masdar · Past: عَمِلَ · Present: يَعْمَلُ · Command: اِعمَلْ · Masdar: عَمَلٌ",
    "forms": {
      "past": "عَمِلَ",
      "present": "يَعْمَلُ",
      "command": "اِعمَلْ",
      "masdar": "عَمَلٌ"
    }
  },
  {
    "id": "ch6-verb-سافر-to-travel-past",
    "chapter": 6,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "سَافَرَ",
    "target": "سَافَرَ",
    "answer": "To travel",
    "detail": "Card: Past · Preposition: إِلَى · Past: سَافَرَ · Present: يُسَافِرُ · Command: سَافِرْ · Masdar: مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ",
    "forms": {
      "past": "سَافَرَ",
      "present": "يُسَافِرُ",
      "command": "سَافِرْ",
      "masdar": "مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch6-verb-يسافر-to-travel-present",
    "chapter": 6,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُسَافِرُ",
    "target": "يُسَافِرُ",
    "answer": "To travel",
    "detail": "Card: Present · Preposition: إِلَى · Past: سَافَرَ · Present: يُسَافِرُ · Command: سَافِرْ · Masdar: مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ",
    "forms": {
      "past": "سَافَرَ",
      "present": "يُسَافِرُ",
      "command": "سَافِرْ",
      "masdar": "مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch6-verb-سافر-to-travel-command",
    "chapter": 6,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "سَافِرْ",
    "target": "سَافِرْ",
    "answer": "To travel",
    "detail": "Card: Command · Preposition: إِلَى · Past: سَافَرَ · Present: يُسَافِرُ · Command: سَافِرْ · Masdar: مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ",
    "forms": {
      "past": "سَافَرَ",
      "present": "يُسَافِرُ",
      "command": "سَافِرْ",
      "masdar": "مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch6-verb-مسافرة-سفار-سفر-to-travel-masdar",
    "chapter": 6,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ",
    "target": "مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ",
    "answer": "To travel",
    "detail": "Card: Masdar · Preposition: إِلَى · Past: سَافَرَ · Present: يُسَافِرُ · Command: سَافِرْ · Masdar: مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ",
    "forms": {
      "past": "سَافَرَ",
      "present": "يُسَافِرُ",
      "command": "سَافِرْ",
      "masdar": "مُسَافَرَةٌ / سِفَارٌ / سَفَرٌ"
    },
    "requiredPreposition": "إِلَى"
  },
  {
    "id": "ch6-verb-انتظر-to-wait-past",
    "chapter": 6,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِنْتَظَرَ",
    "target": "اِنْتَظَرَ",
    "answer": "To wait",
    "detail": "Card: Past · Past: اِنْتَظَرَ · Present: يَنْتَظِرُ · Command: اِنْتَظِرْ · Masdar: اِنْتِظَارٌ",
    "forms": {
      "past": "اِنْتَظَرَ",
      "present": "يَنْتَظِرُ",
      "command": "اِنْتَظِرْ",
      "masdar": "اِنْتِظَارٌ"
    }
  },
  {
    "id": "ch6-verb-ينتظر-to-wait-present",
    "chapter": 6,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَنْتَظِرُ",
    "target": "يَنْتَظِرُ",
    "answer": "To wait",
    "detail": "Card: Present · Past: اِنْتَظَرَ · Present: يَنْتَظِرُ · Command: اِنْتَظِرْ · Masdar: اِنْتِظَارٌ",
    "forms": {
      "past": "اِنْتَظَرَ",
      "present": "يَنْتَظِرُ",
      "command": "اِنْتَظِرْ",
      "masdar": "اِنْتِظَارٌ"
    }
  },
  {
    "id": "ch6-verb-انتظر-to-wait-command",
    "chapter": 6,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِنْتَظِرْ",
    "target": "اِنْتَظِرْ",
    "answer": "To wait",
    "detail": "Card: Command · Past: اِنْتَظَرَ · Present: يَنْتَظِرُ · Command: اِنْتَظِرْ · Masdar: اِنْتِظَارٌ",
    "forms": {
      "past": "اِنْتَظَرَ",
      "present": "يَنْتَظِرُ",
      "command": "اِنْتَظِرْ",
      "masdar": "اِنْتِظَارٌ"
    }
  },
  {
    "id": "ch6-verb-انتظار-to-wait-masdar",
    "chapter": 6,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِنْتِظَارٌ",
    "target": "اِنْتِظَارٌ",
    "answer": "To wait",
    "detail": "Card: Masdar · Past: اِنْتَظَرَ · Present: يَنْتَظِرُ · Command: اِنْتَظِرْ · Masdar: اِنْتِظَارٌ",
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
    "id": "ch7-verb-بدا-to-start-past",
    "chapter": 7,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "بَدَأَ",
    "target": "بَدَأَ",
    "answer": "To start",
    "detail": "Card: Past · Past: بَدَأَ · Present: يَبْدَأُ · Command: اِبْدَأْ · Masdar: بِدَايَةٌ",
    "forms": {
      "past": "بَدَأَ",
      "present": "يَبْدَأُ",
      "command": "اِبْدَأْ",
      "masdar": "بِدَايَةٌ"
    }
  },
  {
    "id": "ch7-verb-يبدا-to-start-present",
    "chapter": 7,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَبْدَأُ",
    "target": "يَبْدَأُ",
    "answer": "To start",
    "detail": "Card: Present · Past: بَدَأَ · Present: يَبْدَأُ · Command: اِبْدَأْ · Masdar: بِدَايَةٌ",
    "forms": {
      "past": "بَدَأَ",
      "present": "يَبْدَأُ",
      "command": "اِبْدَأْ",
      "masdar": "بِدَايَةٌ"
    }
  },
  {
    "id": "ch7-verb-ابدا-to-start-command",
    "chapter": 7,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِبْدَأْ",
    "target": "اِبْدَأْ",
    "answer": "To start",
    "detail": "Card: Command · Past: بَدَأَ · Present: يَبْدَأُ · Command: اِبْدَأْ · Masdar: بِدَايَةٌ",
    "forms": {
      "past": "بَدَأَ",
      "present": "يَبْدَأُ",
      "command": "اِبْدَأْ",
      "masdar": "بِدَايَةٌ"
    }
  },
  {
    "id": "ch7-verb-بداية-to-start-masdar",
    "chapter": 7,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "بِدَايَةٌ",
    "target": "بِدَايَةٌ",
    "answer": "To start",
    "detail": "Card: Masdar · Past: بَدَأَ · Present: يَبْدَأُ · Command: اِبْدَأْ · Masdar: بِدَايَةٌ",
    "forms": {
      "past": "بَدَأَ",
      "present": "يَبْدَأُ",
      "command": "اِبْدَأْ",
      "masdar": "بِدَايَةٌ"
    }
  },
  {
    "id": "ch7-verb-انتهي-to-finish-past",
    "chapter": 7,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِنْتَهَىٌ",
    "target": "اِنْتَهَىٌ",
    "answer": "To finish",
    "detail": "Card: Past · Past: اِنْتَهَىٌ · Present: يَنْتَهِي · Command: اِنْتَهِ · Masdar: اِنْتِهَاءٌ",
    "forms": {
      "past": "اِنْتَهَىٌ",
      "present": "يَنْتَهِي",
      "command": "اِنْتَهِ",
      "masdar": "اِنْتِهَاءٌ"
    }
  },
  {
    "id": "ch7-verb-ينتهي-to-finish-present",
    "chapter": 7,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَنْتَهِي",
    "target": "يَنْتَهِي",
    "answer": "To finish",
    "detail": "Card: Present · Past: اِنْتَهَىٌ · Present: يَنْتَهِي · Command: اِنْتَهِ · Masdar: اِنْتِهَاءٌ",
    "forms": {
      "past": "اِنْتَهَىٌ",
      "present": "يَنْتَهِي",
      "command": "اِنْتَهِ",
      "masdar": "اِنْتِهَاءٌ"
    }
  },
  {
    "id": "ch7-verb-انته-to-finish-command",
    "chapter": 7,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِنْتَهِ",
    "target": "اِنْتَهِ",
    "answer": "To finish",
    "detail": "Card: Command · Past: اِنْتَهَىٌ · Present: يَنْتَهِي · Command: اِنْتَهِ · Masdar: اِنْتِهَاءٌ",
    "forms": {
      "past": "اِنْتَهَىٌ",
      "present": "يَنْتَهِي",
      "command": "اِنْتَهِ",
      "masdar": "اِنْتِهَاءٌ"
    }
  },
  {
    "id": "ch7-verb-انتهاء-to-finish-masdar",
    "chapter": 7,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِنْتِهَاءٌ",
    "target": "اِنْتِهَاءٌ",
    "answer": "To finish",
    "detail": "Card: Masdar · Past: اِنْتَهَىٌ · Present: يَنْتَهِي · Command: اِنْتَهِ · Masdar: اِنْتِهَاءٌ",
    "forms": {
      "past": "اِنْتَهَىٌ",
      "present": "يَنْتَهِي",
      "command": "اِنْتَهِ",
      "masdar": "اِنْتِهَاءٌ"
    }
  },
  {
    "id": "ch7-verb-درس-to-study-past",
    "chapter": 7,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "دَرَسَ",
    "target": "دَرَسَ",
    "answer": "To study",
    "detail": "Card: Past · Past: دَرَسَ · Present: يَدْرُسُ · Command: اُدْرُسْ · Masdar: دِرَاسَةٌ",
    "forms": {
      "past": "دَرَسَ",
      "present": "يَدْرُسُ",
      "command": "اُدْرُسْ",
      "masdar": "دِرَاسَةٌ"
    }
  },
  {
    "id": "ch7-verb-يدرس-to-study-present",
    "chapter": 7,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَدْرُسُ",
    "target": "يَدْرُسُ",
    "answer": "To study",
    "detail": "Card: Present · Past: دَرَسَ · Present: يَدْرُسُ · Command: اُدْرُسْ · Masdar: دِرَاسَةٌ",
    "forms": {
      "past": "دَرَسَ",
      "present": "يَدْرُسُ",
      "command": "اُدْرُسْ",
      "masdar": "دِرَاسَةٌ"
    }
  },
  {
    "id": "ch7-verb-ادرس-to-study-command",
    "chapter": 7,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اُدْرُسْ",
    "target": "اُدْرُسْ",
    "answer": "To study",
    "detail": "Card: Command · Past: دَرَسَ · Present: يَدْرُسُ · Command: اُدْرُسْ · Masdar: دِرَاسَةٌ",
    "forms": {
      "past": "دَرَسَ",
      "present": "يَدْرُسُ",
      "command": "اُدْرُسْ",
      "masdar": "دِرَاسَةٌ"
    }
  },
  {
    "id": "ch7-verb-دراسة-to-study-masdar",
    "chapter": 7,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "دِرَاسَةٌ",
    "target": "دِرَاسَةٌ",
    "answer": "To study",
    "detail": "Card: Masdar · Past: دَرَسَ · Present: يَدْرُسُ · Command: اُدْرُسْ · Masdar: دِرَاسَةٌ",
    "forms": {
      "past": "دَرَسَ",
      "present": "يَدْرُسُ",
      "command": "اُدْرُسْ",
      "masdar": "دِرَاسَةٌ"
    }
  },
  {
    "id": "ch7-verb-درس-to-teach-past",
    "chapter": 7,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "دَرَّسَ",
    "target": "دَرَّسَ",
    "answer": "To teach",
    "detail": "Card: Past · Past: دَرَّسَ · Present: يُدَرِسُ · Command: دَرِسْ · Masdar: تَدْرِيسٌ",
    "forms": {
      "past": "دَرَّسَ",
      "present": "يُدَرِسُ",
      "command": "دَرِسْ",
      "masdar": "تَدْرِيسٌ"
    }
  },
  {
    "id": "ch7-verb-يدرس-to-teach-present",
    "chapter": 7,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُدَرِسُ",
    "target": "يُدَرِسُ",
    "answer": "To teach",
    "detail": "Card: Present · Past: دَرَّسَ · Present: يُدَرِسُ · Command: دَرِسْ · Masdar: تَدْرِيسٌ",
    "forms": {
      "past": "دَرَّسَ",
      "present": "يُدَرِسُ",
      "command": "دَرِسْ",
      "masdar": "تَدْرِيسٌ"
    }
  },
  {
    "id": "ch7-verb-درس-to-teach-command",
    "chapter": 7,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "دَرِسْ",
    "target": "دَرِسْ",
    "answer": "To teach",
    "detail": "Card: Command · Past: دَرَّسَ · Present: يُدَرِسُ · Command: دَرِسْ · Masdar: تَدْرِيسٌ",
    "forms": {
      "past": "دَرَّسَ",
      "present": "يُدَرِسُ",
      "command": "دَرِسْ",
      "masdar": "تَدْرِيسٌ"
    }
  },
  {
    "id": "ch7-verb-تدريس-to-teach-masdar",
    "chapter": 7,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَدْرِيسٌ",
    "target": "تَدْرِيسٌ",
    "answer": "To teach",
    "detail": "Card: Masdar · Past: دَرَّسَ · Present: يُدَرِسُ · Command: دَرِسْ · Masdar: تَدْرِيسٌ",
    "forms": {
      "past": "دَرَّسَ",
      "present": "يُدَرِسُ",
      "command": "دَرِسْ",
      "masdar": "تَدْرِيسٌ"
    }
  },
  {
    "id": "ch7-verb-كان-to-be-past",
    "chapter": 7,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "كَانَ",
    "target": "كَانَ",
    "answer": "To be",
    "detail": "Card: Past · Past: كَانَ · Present: يَكُونُ · Command: كُنْ · Masdar: كَوْنٌ",
    "forms": {
      "past": "كَانَ",
      "present": "يَكُونُ",
      "command": "كُنْ",
      "masdar": "كَوْنٌ"
    }
  },
  {
    "id": "ch7-verb-يكون-to-be-present",
    "chapter": 7,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَكُونُ",
    "target": "يَكُونُ",
    "answer": "To be",
    "detail": "Card: Present · Past: كَانَ · Present: يَكُونُ · Command: كُنْ · Masdar: كَوْنٌ",
    "forms": {
      "past": "كَانَ",
      "present": "يَكُونُ",
      "command": "كُنْ",
      "masdar": "كَوْنٌ"
    }
  },
  {
    "id": "ch7-verb-كن-to-be-command",
    "chapter": 7,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "كُنْ",
    "target": "كُنْ",
    "answer": "To be",
    "detail": "Card: Command · Past: كَانَ · Present: يَكُونُ · Command: كُنْ · Masdar: كَوْنٌ",
    "forms": {
      "past": "كَانَ",
      "present": "يَكُونُ",
      "command": "كُنْ",
      "masdar": "كَوْنٌ"
    }
  },
  {
    "id": "ch7-verb-كون-to-be-masdar",
    "chapter": 7,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "كَوْنٌ",
    "target": "كَوْنٌ",
    "answer": "To be",
    "detail": "Card: Masdar · Past: كَانَ · Present: يَكُونُ · Command: كُنْ · Masdar: كَوْنٌ",
    "forms": {
      "past": "كَانَ",
      "present": "يَكُونُ",
      "command": "كُنْ",
      "masdar": "كَوْنٌ"
    }
  },
  {
    "id": "ch7-verb-اكمل-to-complete-past",
    "chapter": 7,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَكْمَلَ",
    "target": "أَكْمَلَ",
    "answer": "To complete",
    "detail": "Card: Past · Past: أَكْمَلَ · Present: يُكْمِلُ · Command: أَكْمِلْ · Masdar: إِكْمَالٌ",
    "forms": {
      "past": "أَكْمَلَ",
      "present": "يُكْمِلُ",
      "command": "أَكْمِلْ",
      "masdar": "إِكْمَالٌ"
    }
  },
  {
    "id": "ch7-verb-يكمل-to-complete-present",
    "chapter": 7,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُكْمِلُ",
    "target": "يُكْمِلُ",
    "answer": "To complete",
    "detail": "Card: Present · Past: أَكْمَلَ · Present: يُكْمِلُ · Command: أَكْمِلْ · Masdar: إِكْمَالٌ",
    "forms": {
      "past": "أَكْمَلَ",
      "present": "يُكْمِلُ",
      "command": "أَكْمِلْ",
      "masdar": "إِكْمَالٌ"
    }
  },
  {
    "id": "ch7-verb-اكمل-to-complete-command",
    "chapter": 7,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَكْمِلْ",
    "target": "أَكْمِلْ",
    "answer": "To complete",
    "detail": "Card: Command · Past: أَكْمَلَ · Present: يُكْمِلُ · Command: أَكْمِلْ · Masdar: إِكْمَالٌ",
    "forms": {
      "past": "أَكْمَلَ",
      "present": "يُكْمِلُ",
      "command": "أَكْمِلْ",
      "masdar": "إِكْمَالٌ"
    }
  },
  {
    "id": "ch7-verb-اكمال-to-complete-masdar",
    "chapter": 7,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "إِكْمَالٌ",
    "target": "إِكْمَالٌ",
    "answer": "To complete",
    "detail": "Card: Masdar · Past: أَكْمَلَ · Present: يُكْمِلُ · Command: أَكْمِلْ · Masdar: إِكْمَالٌ",
    "forms": {
      "past": "أَكْمَلَ",
      "present": "يُكْمِلُ",
      "command": "أَكْمِلْ",
      "masdar": "إِكْمَالٌ"
    }
  },
  {
    "id": "ch7-verb-صحح-to-correct-past",
    "chapter": 7,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "صَحَّحَ",
    "target": "صَحَّحَ",
    "answer": "To correct",
    "detail": "Card: Past · Past: صَحَّحَ · Present: يُصَحِحُ · Command: صَحِحْ · Masdar: تَصْحِيحٌ",
    "forms": {
      "past": "صَحَّحَ",
      "present": "يُصَحِحُ",
      "command": "صَحِحْ",
      "masdar": "تَصْحِيحٌ"
    }
  },
  {
    "id": "ch7-verb-يصحح-to-correct-present",
    "chapter": 7,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُصَحِحُ",
    "target": "يُصَحِحُ",
    "answer": "To correct",
    "detail": "Card: Present · Past: صَحَّحَ · Present: يُصَحِحُ · Command: صَحِحْ · Masdar: تَصْحِيحٌ",
    "forms": {
      "past": "صَحَّحَ",
      "present": "يُصَحِحُ",
      "command": "صَحِحْ",
      "masdar": "تَصْحِيحٌ"
    }
  },
  {
    "id": "ch7-verb-صحح-to-correct-command",
    "chapter": 7,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "صَحِحْ",
    "target": "صَحِحْ",
    "answer": "To correct",
    "detail": "Card: Command · Past: صَحَّحَ · Present: يُصَحِحُ · Command: صَحِحْ · Masdar: تَصْحِيحٌ",
    "forms": {
      "past": "صَحَّحَ",
      "present": "يُصَحِحُ",
      "command": "صَحِحْ",
      "masdar": "تَصْحِيحٌ"
    }
  },
  {
    "id": "ch7-verb-تصحيح-to-correct-masdar",
    "chapter": 7,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَصْحِيحٌ",
    "target": "تَصْحِيحٌ",
    "answer": "To correct",
    "detail": "Card: Masdar · Past: صَحَّحَ · Present: يُصَحِحُ · Command: صَحِحْ · Masdar: تَصْحِيحٌ",
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
    "id": "ch8-verb-احب-to-love-to-like-past",
    "chapter": 8,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَحَبَّ",
    "target": "أَحَبَّ",
    "answer": "To love; to like",
    "detail": "Card: Past · Past: أَحَبَّ · Present: يُحِبٌ · Command: أَحِبَّ · Masdar: حُبٌ",
    "forms": {
      "past": "أَحَبَّ",
      "present": "يُحِبٌ",
      "command": "أَحِبَّ",
      "masdar": "حُبٌ"
    }
  },
  {
    "id": "ch8-verb-يحب-to-love-to-like-present",
    "chapter": 8,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُحِبٌ",
    "target": "يُحِبٌ",
    "answer": "To love; to like",
    "detail": "Card: Present · Past: أَحَبَّ · Present: يُحِبٌ · Command: أَحِبَّ · Masdar: حُبٌ",
    "forms": {
      "past": "أَحَبَّ",
      "present": "يُحِبٌ",
      "command": "أَحِبَّ",
      "masdar": "حُبٌ"
    }
  },
  {
    "id": "ch8-verb-احب-to-love-to-like-command",
    "chapter": 8,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَحِبَّ",
    "target": "أَحِبَّ",
    "answer": "To love; to like",
    "detail": "Card: Command · Past: أَحَبَّ · Present: يُحِبٌ · Command: أَحِبَّ · Masdar: حُبٌ",
    "forms": {
      "past": "أَحَبَّ",
      "present": "يُحِبٌ",
      "command": "أَحِبَّ",
      "masdar": "حُبٌ"
    }
  },
  {
    "id": "ch8-verb-حب-to-love-to-like-masdar",
    "chapter": 8,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "حُبٌ",
    "target": "حُبٌ",
    "answer": "To love; to like",
    "detail": "Card: Masdar · Past: أَحَبَّ · Present: يُحِبٌ · Command: أَحِبَّ · Masdar: حُبٌ",
    "forms": {
      "past": "أَحَبَّ",
      "present": "يُحِبٌ",
      "command": "أَحِبَّ",
      "masdar": "حُبٌ"
    }
  },
  {
    "id": "ch8-verb-رسم-to-draw-past",
    "chapter": 8,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "رَسَمَ",
    "target": "رَسَمَ",
    "answer": "To draw",
    "detail": "Card: Past · Past: رَسَمَ · Present: يَرْسُمُ · Command: اُرْسُمْ · Masdar: رَسْمٌ",
    "forms": {
      "past": "رَسَمَ",
      "present": "يَرْسُمُ",
      "command": "اُرْسُمْ",
      "masdar": "رَسْمٌ"
    }
  },
  {
    "id": "ch8-verb-يرسم-to-draw-present",
    "chapter": 8,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَرْسُمُ",
    "target": "يَرْسُمُ",
    "answer": "To draw",
    "detail": "Card: Present · Past: رَسَمَ · Present: يَرْسُمُ · Command: اُرْسُمْ · Masdar: رَسْمٌ",
    "forms": {
      "past": "رَسَمَ",
      "present": "يَرْسُمُ",
      "command": "اُرْسُمْ",
      "masdar": "رَسْمٌ"
    }
  },
  {
    "id": "ch8-verb-ارسم-to-draw-command",
    "chapter": 8,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اُرْسُمْ",
    "target": "اُرْسُمْ",
    "answer": "To draw",
    "detail": "Card: Command · Past: رَسَمَ · Present: يَرْسُمُ · Command: اُرْسُمْ · Masdar: رَسْمٌ",
    "forms": {
      "past": "رَسَمَ",
      "present": "يَرْسُمُ",
      "command": "اُرْسُمْ",
      "masdar": "رَسْمٌ"
    }
  },
  {
    "id": "ch8-verb-رسم-to-draw-masdar",
    "chapter": 8,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "رَسْمٌ",
    "target": "رَسْمٌ",
    "answer": "To draw",
    "detail": "Card: Masdar · Past: رَسَمَ · Present: يَرْسُمُ · Command: اُرْسُمْ · Masdar: رَسْمٌ",
    "forms": {
      "past": "رَسَمَ",
      "present": "يَرْسُمُ",
      "command": "اُرْسُمْ",
      "masdar": "رَسْمٌ"
    }
  },
  {
    "id": "ch8-verb-اختار-to-choose-past",
    "chapter": 8,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِخْتَارَ",
    "target": "اِخْتَارَ",
    "answer": "To choose",
    "detail": "Card: Past · Past: اِخْتَارَ · Present: يَخْتَارُ · Command: اِخْتَرْ · Masdar: اِخْتِيَارٌ",
    "forms": {
      "past": "اِخْتَارَ",
      "present": "يَخْتَارُ",
      "command": "اِخْتَرْ",
      "masdar": "اِخْتِيَارٌ"
    }
  },
  {
    "id": "ch8-verb-يختار-to-choose-present",
    "chapter": 8,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَخْتَارُ",
    "target": "يَخْتَارُ",
    "answer": "To choose",
    "detail": "Card: Present · Past: اِخْتَارَ · Present: يَخْتَارُ · Command: اِخْتَرْ · Masdar: اِخْتِيَارٌ",
    "forms": {
      "past": "اِخْتَارَ",
      "present": "يَخْتَارُ",
      "command": "اِخْتَرْ",
      "masdar": "اِخْتِيَارٌ"
    }
  },
  {
    "id": "ch8-verb-اختر-to-choose-command",
    "chapter": 8,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِخْتَرْ",
    "target": "اِخْتَرْ",
    "answer": "To choose",
    "detail": "Card: Command · Past: اِخْتَارَ · Present: يَخْتَارُ · Command: اِخْتَرْ · Masdar: اِخْتِيَارٌ",
    "forms": {
      "past": "اِخْتَارَ",
      "present": "يَخْتَارُ",
      "command": "اِخْتَرْ",
      "masdar": "اِخْتِيَارٌ"
    }
  },
  {
    "id": "ch8-verb-اختيار-to-choose-masdar",
    "chapter": 8,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِخْتِيَارٌ",
    "target": "اِخْتِيَارٌ",
    "answer": "To choose",
    "detail": "Card: Masdar · Past: اِخْتَارَ · Present: يَخْتَارُ · Command: اِخْتَرْ · Masdar: اِخْتِيَارٌ",
    "forms": {
      "past": "اِخْتَارَ",
      "present": "يَخْتَارُ",
      "command": "اِخْتَرْ",
      "masdar": "اِخْتِيَارٌ"
    }
  },
  {
    "id": "ch8-verb-اصبح-to-become-past",
    "chapter": 8,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَصْبَحَ",
    "target": "أَصْبَحَ",
    "answer": "To become",
    "detail": "Card: Past · Past: أَصْبَحَ · Present: يُصْبِحُ · Command: أَصْبِحْ · Masdar: إِصْبَاحٌ",
    "forms": {
      "past": "أَصْبَحَ",
      "present": "يُصْبِحُ",
      "command": "أَصْبِحْ",
      "masdar": "إِصْبَاحٌ"
    }
  },
  {
    "id": "ch8-verb-يصبح-to-become-present",
    "chapter": 8,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُصْبِحُ",
    "target": "يُصْبِحُ",
    "answer": "To become",
    "detail": "Card: Present · Past: أَصْبَحَ · Present: يُصْبِحُ · Command: أَصْبِحْ · Masdar: إِصْبَاحٌ",
    "forms": {
      "past": "أَصْبَحَ",
      "present": "يُصْبِحُ",
      "command": "أَصْبِحْ",
      "masdar": "إِصْبَاحٌ"
    }
  },
  {
    "id": "ch8-verb-اصبح-to-become-command",
    "chapter": 8,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَصْبِحْ",
    "target": "أَصْبِحْ",
    "answer": "To become",
    "detail": "Card: Command · Past: أَصْبَحَ · Present: يُصْبِحُ · Command: أَصْبِحْ · Masdar: إِصْبَاحٌ",
    "forms": {
      "past": "أَصْبَحَ",
      "present": "يُصْبِحُ",
      "command": "أَصْبِحْ",
      "masdar": "إِصْبَاحٌ"
    }
  },
  {
    "id": "ch8-verb-اصباح-to-become-masdar",
    "chapter": 8,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "إِصْبَاحٌ",
    "target": "إِصْبَاحٌ",
    "answer": "To become",
    "detail": "Card: Masdar · Past: أَصْبَحَ · Present: يُصْبِحُ · Command: أَصْبِحْ · Masdar: إِصْبَاحٌ",
    "forms": {
      "past": "أَصْبَحَ",
      "present": "يُصْبِحُ",
      "command": "أَصْبِحْ",
      "masdar": "إِصْبَاحٌ"
    }
  },
  {
    "id": "ch8-verb-مل-to-fill-past",
    "chapter": 8,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "مَلََ",
    "target": "مَلََ",
    "answer": "To fill",
    "detail": "Card: Past · Past: مَلََ · Present: يَمْلَُ · Command: اِمْلْ · Masdar: مَلْءٌ",
    "forms": {
      "past": "مَلََ",
      "present": "يَمْلَُ",
      "command": "اِمْلْ",
      "masdar": "مَلْءٌ"
    }
  },
  {
    "id": "ch8-verb-يمل-to-fill-present",
    "chapter": 8,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَمْلَُ",
    "target": "يَمْلَُ",
    "answer": "To fill",
    "detail": "Card: Present · Past: مَلََ · Present: يَمْلَُ · Command: اِمْلْ · Masdar: مَلْءٌ",
    "forms": {
      "past": "مَلََ",
      "present": "يَمْلَُ",
      "command": "اِمْلْ",
      "masdar": "مَلْءٌ"
    }
  },
  {
    "id": "ch8-verb-امل-to-fill-command",
    "chapter": 8,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِمْلْ",
    "target": "اِمْلْ",
    "answer": "To fill",
    "detail": "Card: Command · Past: مَلََ · Present: يَمْلَُ · Command: اِمْلْ · Masdar: مَلْءٌ",
    "forms": {
      "past": "مَلََ",
      "present": "يَمْلَُ",
      "command": "اِمْلْ",
      "masdar": "مَلْءٌ"
    }
  },
  {
    "id": "ch8-verb-ملء-to-fill-masdar",
    "chapter": 8,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "مَلْءٌ",
    "target": "مَلْءٌ",
    "answer": "To fill",
    "detail": "Card: Masdar · Past: مَلََ · Present: يَمْلَُ · Command: اِمْلْ · Masdar: مَلْءٌ",
    "forms": {
      "past": "مَلََ",
      "present": "يَمْلَُ",
      "command": "اِمْلْ",
      "masdar": "مَلْءٌ"
    }
  },
  {
    "id": "ch8-verb-استراح-to-rest-relax-to-take-a-break-past",
    "chapter": 8,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِسْتَرَاحَ",
    "target": "اِسْتَرَاحَ",
    "answer": "To rest, relax; to take a break",
    "detail": "Card: Past · Past: اِسْتَرَاحَ · Present: يَسْتَرِيحُ · Command: اِسْتَرِحْ · Masdar: اِسْتِرَاحَةٌ",
    "forms": {
      "past": "اِسْتَرَاحَ",
      "present": "يَسْتَرِيحُ",
      "command": "اِسْتَرِحْ",
      "masdar": "اِسْتِرَاحَةٌ"
    }
  },
  {
    "id": "ch8-verb-يستريح-to-rest-relax-to-take-a-break-present",
    "chapter": 8,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَسْتَرِيحُ",
    "target": "يَسْتَرِيحُ",
    "answer": "To rest, relax; to take a break",
    "detail": "Card: Present · Past: اِسْتَرَاحَ · Present: يَسْتَرِيحُ · Command: اِسْتَرِحْ · Masdar: اِسْتِرَاحَةٌ",
    "forms": {
      "past": "اِسْتَرَاحَ",
      "present": "يَسْتَرِيحُ",
      "command": "اِسْتَرِحْ",
      "masdar": "اِسْتِرَاحَةٌ"
    }
  },
  {
    "id": "ch8-verb-استرح-to-rest-relax-to-take-a-break-command",
    "chapter": 8,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِسْتَرِحْ",
    "target": "اِسْتَرِحْ",
    "answer": "To rest, relax; to take a break",
    "detail": "Card: Command · Past: اِسْتَرَاحَ · Present: يَسْتَرِيحُ · Command: اِسْتَرِحْ · Masdar: اِسْتِرَاحَةٌ",
    "forms": {
      "past": "اِسْتَرَاحَ",
      "present": "يَسْتَرِيحُ",
      "command": "اِسْتَرِحْ",
      "masdar": "اِسْتِرَاحَةٌ"
    }
  },
  {
    "id": "ch8-verb-استراحة-to-rest-relax-to-take-a-break-masdar",
    "chapter": 8,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِسْتِرَاحَةٌ",
    "target": "اِسْتِرَاحَةٌ",
    "answer": "To rest, relax; to take a break",
    "detail": "Card: Masdar · Past: اِسْتَرَاحَ · Present: يَسْتَرِيحُ · Command: اِسْتَرِحْ · Masdar: اِسْتِرَاحَةٌ",
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
    "id": "ch9-verb-تسوق-to-shop-past",
    "chapter": 9,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "تَسَوَّقَ",
    "target": "تَسَوَّقَ",
    "answer": "To shop",
    "detail": "Card: Past · Past: تَسَوَّقَ · Present: يَتَسَوَّقُ · Command: تَسَوَّقْ · Masdar: تَسَوقٌ",
    "forms": {
      "past": "تَسَوَّقَ",
      "present": "يَتَسَوَّقُ",
      "command": "تَسَوَّقْ",
      "masdar": "تَسَوقٌ"
    }
  },
  {
    "id": "ch9-verb-يتسوق-to-shop-present",
    "chapter": 9,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَتَسَوَّقُ",
    "target": "يَتَسَوَّقُ",
    "answer": "To shop",
    "detail": "Card: Present · Past: تَسَوَّقَ · Present: يَتَسَوَّقُ · Command: تَسَوَّقْ · Masdar: تَسَوقٌ",
    "forms": {
      "past": "تَسَوَّقَ",
      "present": "يَتَسَوَّقُ",
      "command": "تَسَوَّقْ",
      "masdar": "تَسَوقٌ"
    }
  },
  {
    "id": "ch9-verb-تسوق-to-shop-command",
    "chapter": 9,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "تَسَوَّقْ",
    "target": "تَسَوَّقْ",
    "answer": "To shop",
    "detail": "Card: Command · Past: تَسَوَّقَ · Present: يَتَسَوَّقُ · Command: تَسَوَّقْ · Masdar: تَسَوقٌ",
    "forms": {
      "past": "تَسَوَّقَ",
      "present": "يَتَسَوَّقُ",
      "command": "تَسَوَّقْ",
      "masdar": "تَسَوقٌ"
    }
  },
  {
    "id": "ch9-verb-تسوق-to-shop-masdar",
    "chapter": 9,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَسَوقٌ",
    "target": "تَسَوقٌ",
    "answer": "To shop",
    "detail": "Card: Masdar · Past: تَسَوَّقَ · Present: يَتَسَوَّقُ · Command: تَسَوَّقْ · Masdar: تَسَوقٌ",
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
    "id": "ch10-verb-امطر-to-rain-past",
    "chapter": 10,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَمْطَرَ",
    "target": "أَمْطَرَ",
    "answer": "To rain",
    "detail": "Card: Past · Past: أَمْطَرَ · Present: يُمْطِرُ · Command: أَمْطِرْ · Masdar: إِمْطَارٌ",
    "forms": {
      "past": "أَمْطَرَ",
      "present": "يُمْطِرُ",
      "command": "أَمْطِرْ",
      "masdar": "إِمْطَارٌ"
    }
  },
  {
    "id": "ch10-verb-يمطر-to-rain-present",
    "chapter": 10,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُمْطِرُ",
    "target": "يُمْطِرُ",
    "answer": "To rain",
    "detail": "Card: Present · Past: أَمْطَرَ · Present: يُمْطِرُ · Command: أَمْطِرْ · Masdar: إِمْطَارٌ",
    "forms": {
      "past": "أَمْطَرَ",
      "present": "يُمْطِرُ",
      "command": "أَمْطِرْ",
      "masdar": "إِمْطَارٌ"
    }
  },
  {
    "id": "ch10-verb-امطر-to-rain-command",
    "chapter": 10,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَمْطِرْ",
    "target": "أَمْطِرْ",
    "answer": "To rain",
    "detail": "Card: Command · Past: أَمْطَرَ · Present: يُمْطِرُ · Command: أَمْطِرْ · Masdar: إِمْطَارٌ",
    "forms": {
      "past": "أَمْطَرَ",
      "present": "يُمْطِرُ",
      "command": "أَمْطِرْ",
      "masdar": "إِمْطَارٌ"
    }
  },
  {
    "id": "ch10-verb-امطار-to-rain-masdar",
    "chapter": 10,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "إِمْطَارٌ",
    "target": "إِمْطَارٌ",
    "answer": "To rain",
    "detail": "Card: Masdar · Past: أَمْطَرَ · Present: يُمْطِرُ · Command: أَمْطِرْ · Masdar: إِمْطَارٌ",
    "forms": {
      "past": "أَمْطَرَ",
      "present": "يُمْطِرُ",
      "command": "أَمْطِرْ",
      "masdar": "إِمْطَارٌ"
    }
  },
  {
    "id": "ch10-verb-ترك-to-leave-past",
    "chapter": 10,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "تَرَكَ",
    "target": "تَرَكَ",
    "answer": "To leave",
    "detail": "Card: Past · Past: تَرَكَ · Present: يَتْرُكُ · Command: اُتْرُكْ · Masdar: تَرْكٌ",
    "forms": {
      "past": "تَرَكَ",
      "present": "يَتْرُكُ",
      "command": "اُتْرُكْ",
      "masdar": "تَرْكٌ"
    }
  },
  {
    "id": "ch10-verb-يترك-to-leave-present",
    "chapter": 10,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَتْرُكُ",
    "target": "يَتْرُكُ",
    "answer": "To leave",
    "detail": "Card: Present · Past: تَرَكَ · Present: يَتْرُكُ · Command: اُتْرُكْ · Masdar: تَرْكٌ",
    "forms": {
      "past": "تَرَكَ",
      "present": "يَتْرُكُ",
      "command": "اُتْرُكْ",
      "masdar": "تَرْكٌ"
    }
  },
  {
    "id": "ch10-verb-اترك-to-leave-command",
    "chapter": 10,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اُتْرُكْ",
    "target": "اُتْرُكْ",
    "answer": "To leave",
    "detail": "Card: Command · Past: تَرَكَ · Present: يَتْرُكُ · Command: اُتْرُكْ · Masdar: تَرْكٌ",
    "forms": {
      "past": "تَرَكَ",
      "present": "يَتْرُكُ",
      "command": "اُتْرُكْ",
      "masdar": "تَرْكٌ"
    }
  },
  {
    "id": "ch10-verb-ترك-to-leave-masdar",
    "chapter": 10,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَرْكٌ",
    "target": "تَرْكٌ",
    "answer": "To leave",
    "detail": "Card: Masdar · Past: تَرَكَ · Present: يَتْرُكُ · Command: اُتْرُكْ · Masdar: تَرْكٌ",
    "forms": {
      "past": "تَرَكَ",
      "present": "يَتْرُكُ",
      "command": "اُتْرُكْ",
      "masdar": "تَرْكٌ"
    }
  },
  {
    "id": "ch10-verb-بارك-to-bless-past",
    "chapter": 10,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "بَارَكَ",
    "target": "بَارَكَ",
    "answer": "To bless",
    "detail": "Card: Past · Past: بَارَكَ · Present: يُبَارِكُ · Command: بَارِكْ · Masdar: مُبَارَكَةٌ",
    "forms": {
      "past": "بَارَكَ",
      "present": "يُبَارِكُ",
      "command": "بَارِكْ",
      "masdar": "مُبَارَكَةٌ"
    }
  },
  {
    "id": "ch10-verb-يبارك-to-bless-present",
    "chapter": 10,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُبَارِكُ",
    "target": "يُبَارِكُ",
    "answer": "To bless",
    "detail": "Card: Present · Past: بَارَكَ · Present: يُبَارِكُ · Command: بَارِكْ · Masdar: مُبَارَكَةٌ",
    "forms": {
      "past": "بَارَكَ",
      "present": "يُبَارِكُ",
      "command": "بَارِكْ",
      "masdar": "مُبَارَكَةٌ"
    }
  },
  {
    "id": "ch10-verb-بارك-to-bless-command",
    "chapter": 10,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "بَارِكْ",
    "target": "بَارِكْ",
    "answer": "To bless",
    "detail": "Card: Command · Past: بَارَكَ · Present: يُبَارِكُ · Command: بَارِكْ · Masdar: مُبَارَكَةٌ",
    "forms": {
      "past": "بَارَكَ",
      "present": "يُبَارِكُ",
      "command": "بَارِكْ",
      "masdar": "مُبَارَكَةٌ"
    }
  },
  {
    "id": "ch10-verb-مباركة-to-bless-masdar",
    "chapter": 10,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "مُبَارَكَةٌ",
    "target": "مُبَارَكَةٌ",
    "answer": "To bless",
    "detail": "Card: Masdar · Past: بَارَكَ · Present: يُبَارِكُ · Command: بَارِكْ · Masdar: مُبَارَكَةٌ",
    "forms": {
      "past": "بَارَكَ",
      "present": "يُبَارِكُ",
      "command": "بَارِكْ",
      "masdar": "مُبَارَكَةٌ"
    }
  },
  {
    "id": "ch10-verb-بقي-to-stay-remain-past",
    "chapter": 10,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "بَقِيَ",
    "target": "بَقِيَ",
    "answer": "To stay; remain",
    "detail": "Card: Past · Past: بَقِيَ · Present: يَبْقَى · Command: اِبْقَ · Masdar: بَقَاءٌ",
    "forms": {
      "past": "بَقِيَ",
      "present": "يَبْقَى",
      "command": "اِبْقَ",
      "masdar": "بَقَاءٌ"
    }
  },
  {
    "id": "ch10-verb-يبقي-to-stay-remain-present",
    "chapter": 10,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَبْقَى",
    "target": "يَبْقَى",
    "answer": "To stay; remain",
    "detail": "Card: Present · Past: بَقِيَ · Present: يَبْقَى · Command: اِبْقَ · Masdar: بَقَاءٌ",
    "forms": {
      "past": "بَقِيَ",
      "present": "يَبْقَى",
      "command": "اِبْقَ",
      "masdar": "بَقَاءٌ"
    }
  },
  {
    "id": "ch10-verb-ابق-to-stay-remain-command",
    "chapter": 10,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِبْقَ",
    "target": "اِبْقَ",
    "answer": "To stay; remain",
    "detail": "Card: Command · Past: بَقِيَ · Present: يَبْقَى · Command: اِبْقَ · Masdar: بَقَاءٌ",
    "forms": {
      "past": "بَقِيَ",
      "present": "يَبْقَى",
      "command": "اِبْقَ",
      "masdar": "بَقَاءٌ"
    }
  },
  {
    "id": "ch10-verb-بقاء-to-stay-remain-masdar",
    "chapter": 10,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "بَقَاءٌ",
    "target": "بَقَاءٌ",
    "answer": "To stay; remain",
    "detail": "Card: Masdar · Past: بَقِيَ · Present: يَبْقَى · Command: اِبْقَ · Masdar: بَقَاءٌ",
    "forms": {
      "past": "بَقِيَ",
      "present": "يَبْقَى",
      "command": "اِبْقَ",
      "masdar": "بَقَاءٌ"
    }
  },
  {
    "id": "ch10-verb-مع-to-speak-past",
    "chapter": 10,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "مَعَ",
    "target": "مَعَ",
    "answer": "To speak",
    "detail": "Card: Past · Past: مَعَ · Present: تَكَلَّمَ · Command: يَتَكَلَّمُ · Masdar: تَكَلمٌ / تَكَلَّمْ",
    "forms": {
      "past": "مَعَ",
      "present": "تَكَلَّمَ",
      "command": "يَتَكَلَّمُ",
      "masdar": "تَكَلمٌ / تَكَلَّمْ"
    }
  },
  {
    "id": "ch10-verb-تكلم-to-speak-present",
    "chapter": 10,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "تَكَلَّمَ",
    "target": "تَكَلَّمَ",
    "answer": "To speak",
    "detail": "Card: Present · Past: مَعَ · Present: تَكَلَّمَ · Command: يَتَكَلَّمُ · Masdar: تَكَلمٌ / تَكَلَّمْ",
    "forms": {
      "past": "مَعَ",
      "present": "تَكَلَّمَ",
      "command": "يَتَكَلَّمُ",
      "masdar": "تَكَلمٌ / تَكَلَّمْ"
    }
  },
  {
    "id": "ch10-verb-يتكلم-to-speak-command",
    "chapter": 10,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "يَتَكَلَّمُ",
    "target": "يَتَكَلَّمُ",
    "answer": "To speak",
    "detail": "Card: Command · Past: مَعَ · Present: تَكَلَّمَ · Command: يَتَكَلَّمُ · Masdar: تَكَلمٌ / تَكَلَّمْ",
    "forms": {
      "past": "مَعَ",
      "present": "تَكَلَّمَ",
      "command": "يَتَكَلَّمُ",
      "masdar": "تَكَلمٌ / تَكَلَّمْ"
    }
  },
  {
    "id": "ch10-verb-تكلم-تكلم-to-speak-masdar",
    "chapter": 10,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَكَلمٌ / تَكَلَّمْ",
    "target": "تَكَلمٌ / تَكَلَّمْ",
    "answer": "To speak",
    "detail": "Card: Masdar · Past: مَعَ · Present: تَكَلَّمَ · Command: يَتَكَلَّمُ · Masdar: تَكَلمٌ / تَكَلَّمْ",
    "forms": {
      "past": "مَعَ",
      "present": "تَكَلَّمَ",
      "command": "يَتَكَلَّمُ",
      "masdar": "تَكَلمٌ / تَكَلَّمْ"
    }
  },
  {
    "id": "ch10-verb-يقضي-to-spend-time-past",
    "chapter": 10,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "يقَضَى",
    "target": "يقَضَى",
    "answer": "To spend (time)",
    "detail": "Card: Past · Past: يقَضَى · Present: يَقْضِ · Command: اِقْضِ · Masdar: قَضَاءٌ",
    "forms": {
      "past": "يقَضَى",
      "present": "يَقْضِ",
      "command": "اِقْضِ",
      "masdar": "قَضَاءٌ"
    }
  },
  {
    "id": "ch10-verb-يقض-to-spend-time-present",
    "chapter": 10,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَقْضِ",
    "target": "يَقْضِ",
    "answer": "To spend (time)",
    "detail": "Card: Present · Past: يقَضَى · Present: يَقْضِ · Command: اِقْضِ · Masdar: قَضَاءٌ",
    "forms": {
      "past": "يقَضَى",
      "present": "يَقْضِ",
      "command": "اِقْضِ",
      "masdar": "قَضَاءٌ"
    }
  },
  {
    "id": "ch10-verb-اقض-to-spend-time-command",
    "chapter": 10,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِقْضِ",
    "target": "اِقْضِ",
    "answer": "To spend (time)",
    "detail": "Card: Command · Past: يقَضَى · Present: يَقْضِ · Command: اِقْضِ · Masdar: قَضَاءٌ",
    "forms": {
      "past": "يقَضَى",
      "present": "يَقْضِ",
      "command": "اِقْضِ",
      "masdar": "قَضَاءٌ"
    }
  },
  {
    "id": "ch10-verb-قضاء-to-spend-time-masdar",
    "chapter": 10,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "قَضَاءٌ",
    "target": "قَضَاءٌ",
    "answer": "To spend (time)",
    "detail": "Card: Masdar · Past: يقَضَى · Present: يَقْضِ · Command: اِقْضِ · Masdar: قَضَاءٌ",
    "forms": {
      "past": "يقَضَى",
      "present": "يَقْضِ",
      "command": "اِقْضِ",
      "masdar": "قَضَاءٌ"
    }
  },
  {
    "id": "ch10-verb-احضر-to-bring-past",
    "chapter": 10,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَحْضَرَ",
    "target": "أَحْضَرَ",
    "answer": "To bring",
    "detail": "Card: Past · Past: أَحْضَرَ · Present: يُحْضِرُ · Command: أَحْضِرْ · Masdar: إِحْضَارٌ",
    "forms": {
      "past": "أَحْضَرَ",
      "present": "يُحْضِرُ",
      "command": "أَحْضِرْ",
      "masdar": "إِحْضَارٌ"
    }
  },
  {
    "id": "ch10-verb-يحضر-to-bring-present",
    "chapter": 10,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُحْضِرُ",
    "target": "يُحْضِرُ",
    "answer": "To bring",
    "detail": "Card: Present · Past: أَحْضَرَ · Present: يُحْضِرُ · Command: أَحْضِرْ · Masdar: إِحْضَارٌ",
    "forms": {
      "past": "أَحْضَرَ",
      "present": "يُحْضِرُ",
      "command": "أَحْضِرْ",
      "masdar": "إِحْضَارٌ"
    }
  },
  {
    "id": "ch10-verb-احضر-to-bring-command",
    "chapter": 10,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَحْضِرْ",
    "target": "أَحْضِرْ",
    "answer": "To bring",
    "detail": "Card: Command · Past: أَحْضَرَ · Present: يُحْضِرُ · Command: أَحْضِرْ · Masdar: إِحْضَارٌ",
    "forms": {
      "past": "أَحْضَرَ",
      "present": "يُحْضِرُ",
      "command": "أَحْضِرْ",
      "masdar": "إِحْضَارٌ"
    }
  },
  {
    "id": "ch10-verb-احضار-to-bring-masdar",
    "chapter": 10,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "إِحْضَارٌ",
    "target": "إِحْضَارٌ",
    "answer": "To bring",
    "detail": "Card: Masdar · Past: أَحْضَرَ · Present: يُحْضِرُ · Command: أَحْضِرْ · Masdar: إِحْضَارٌ",
    "forms": {
      "past": "أَحْضَرَ",
      "present": "يُحْضِرُ",
      "command": "أَحْضِرْ",
      "masdar": "إِحْضَارٌ"
    }
  },
  {
    "id": "ch10-verb-حضر-to-attend-past",
    "chapter": 10,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "حَضَرَ",
    "target": "حَضَرَ",
    "answer": "To attend",
    "detail": "Card: Past · Past: حَضَرَ · Present: يَحْضُرُ · Command: اُحْضُرْ · Masdar: حُضُورٌ",
    "forms": {
      "past": "حَضَرَ",
      "present": "يَحْضُرُ",
      "command": "اُحْضُرْ",
      "masdar": "حُضُورٌ"
    }
  },
  {
    "id": "ch10-verb-يحضر-to-attend-present",
    "chapter": 10,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَحْضُرُ",
    "target": "يَحْضُرُ",
    "answer": "To attend",
    "detail": "Card: Present · Past: حَضَرَ · Present: يَحْضُرُ · Command: اُحْضُرْ · Masdar: حُضُورٌ",
    "forms": {
      "past": "حَضَرَ",
      "present": "يَحْضُرُ",
      "command": "اُحْضُرْ",
      "masdar": "حُضُورٌ"
    }
  },
  {
    "id": "ch10-verb-احضر-to-attend-command",
    "chapter": 10,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اُحْضُرْ",
    "target": "اُحْضُرْ",
    "answer": "To attend",
    "detail": "Card: Command · Past: حَضَرَ · Present: يَحْضُرُ · Command: اُحْضُرْ · Masdar: حُضُورٌ",
    "forms": {
      "past": "حَضَرَ",
      "present": "يَحْضُرُ",
      "command": "اُحْضُرْ",
      "masdar": "حُضُورٌ"
    }
  },
  {
    "id": "ch10-verb-حضور-to-attend-masdar",
    "chapter": 10,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "حُضُورٌ",
    "target": "حُضُورٌ",
    "answer": "To attend",
    "detail": "Card: Masdar · Past: حَضَرَ · Present: يَحْضُرُ · Command: اُحْضُرْ · Masdar: حُضُورٌ",
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
    "id": "ch11-verb-انتقل-to-move-past",
    "chapter": 11,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِنْتَقَلَ",
    "target": "اِنْتَقَلَ",
    "answer": "To move",
    "detail": "Card: Past · Past: اِنْتَقَلَ · Present: يَنْتَقِلُ · Command: اِنْتَقِلْ · Masdar: اِنْتِقَالٌ",
    "forms": {
      "past": "اِنْتَقَلَ",
      "present": "يَنْتَقِلُ",
      "command": "اِنْتَقِلْ",
      "masdar": "اِنْتِقَالٌ"
    }
  },
  {
    "id": "ch11-verb-ينتقل-to-move-present",
    "chapter": 11,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَنْتَقِلُ",
    "target": "يَنْتَقِلُ",
    "answer": "To move",
    "detail": "Card: Present · Past: اِنْتَقَلَ · Present: يَنْتَقِلُ · Command: اِنْتَقِلْ · Masdar: اِنْتِقَالٌ",
    "forms": {
      "past": "اِنْتَقَلَ",
      "present": "يَنْتَقِلُ",
      "command": "اِنْتَقِلْ",
      "masdar": "اِنْتِقَالٌ"
    }
  },
  {
    "id": "ch11-verb-انتقل-to-move-command",
    "chapter": 11,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِنْتَقِلْ",
    "target": "اِنْتَقِلْ",
    "answer": "To move",
    "detail": "Card: Command · Past: اِنْتَقَلَ · Present: يَنْتَقِلُ · Command: اِنْتَقِلْ · Masdar: اِنْتِقَالٌ",
    "forms": {
      "past": "اِنْتَقَلَ",
      "present": "يَنْتَقِلُ",
      "command": "اِنْتَقِلْ",
      "masdar": "اِنْتِقَالٌ"
    }
  },
  {
    "id": "ch11-verb-انتقال-to-move-masdar",
    "chapter": 11,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِنْتِقَالٌ",
    "target": "اِنْتِقَالٌ",
    "answer": "To move",
    "detail": "Card: Masdar · Past: اِنْتَقَلَ · Present: يَنْتَقِلُ · Command: اِنْتَقِلْ · Masdar: اِنْتِقَالٌ",
    "forms": {
      "past": "اِنْتَقَلَ",
      "present": "يَنْتَقِلُ",
      "command": "اِنْتَقِلْ",
      "masdar": "اِنْتِقَالٌ"
    }
  },
  {
    "id": "ch11-verb-استغرق-to-take-time-past",
    "chapter": 11,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِسْتَغْرَقَ",
    "target": "اِسْتَغْرَقَ",
    "answer": "To take (time)",
    "detail": "Card: Past · Past: اِسْتَغْرَقَ · Present: يَسْتَغْرِقُ · Command: اِسْتَغْرِقْ · Masdar: اِسْتِغْرَاقٌ",
    "forms": {
      "past": "اِسْتَغْرَقَ",
      "present": "يَسْتَغْرِقُ",
      "command": "اِسْتَغْرِقْ",
      "masdar": "اِسْتِغْرَاقٌ"
    }
  },
  {
    "id": "ch11-verb-يستغرق-to-take-time-present",
    "chapter": 11,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَسْتَغْرِقُ",
    "target": "يَسْتَغْرِقُ",
    "answer": "To take (time)",
    "detail": "Card: Present · Past: اِسْتَغْرَقَ · Present: يَسْتَغْرِقُ · Command: اِسْتَغْرِقْ · Masdar: اِسْتِغْرَاقٌ",
    "forms": {
      "past": "اِسْتَغْرَقَ",
      "present": "يَسْتَغْرِقُ",
      "command": "اِسْتَغْرِقْ",
      "masdar": "اِسْتِغْرَاقٌ"
    }
  },
  {
    "id": "ch11-verb-استغرق-to-take-time-command",
    "chapter": 11,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِسْتَغْرِقْ",
    "target": "اِسْتَغْرِقْ",
    "answer": "To take (time)",
    "detail": "Card: Command · Past: اِسْتَغْرَقَ · Present: يَسْتَغْرِقُ · Command: اِسْتَغْرِقْ · Masdar: اِسْتِغْرَاقٌ",
    "forms": {
      "past": "اِسْتَغْرَقَ",
      "present": "يَسْتَغْرِقُ",
      "command": "اِسْتَغْرِقْ",
      "masdar": "اِسْتِغْرَاقٌ"
    }
  },
  {
    "id": "ch11-verb-استغراق-to-take-time-masdar",
    "chapter": 11,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِسْتِغْرَاقٌ",
    "target": "اِسْتِغْرَاقٌ",
    "answer": "To take (time)",
    "detail": "Card: Masdar · Past: اِسْتَغْرَقَ · Present: يَسْتَغْرِقُ · Command: اِسْتَغْرِقْ · Masdar: اِسْتِغْرَاقٌ",
    "forms": {
      "past": "اِسْتَغْرَقَ",
      "present": "يَسْتَغْرِقُ",
      "command": "اِسْتَغْرِقْ",
      "masdar": "اِسْتِغْرَاقٌ"
    }
  },
  {
    "id": "ch11-verb-تزوج-to-marry-past",
    "chapter": 11,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "تَزَوَّجَ",
    "target": "تَزَوَّجَ",
    "answer": "To marry",
    "detail": "Card: Past · Past: تَزَوَّجَ · Present: يَتَزَوَّجُ · Command: تَزَوَّجْ · Masdar: تَزَوجٌ / زَوَاجٌ",
    "forms": {
      "past": "تَزَوَّجَ",
      "present": "يَتَزَوَّجُ",
      "command": "تَزَوَّجْ",
      "masdar": "تَزَوجٌ / زَوَاجٌ"
    }
  },
  {
    "id": "ch11-verb-يتزوج-to-marry-present",
    "chapter": 11,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَتَزَوَّجُ",
    "target": "يَتَزَوَّجُ",
    "answer": "To marry",
    "detail": "Card: Present · Past: تَزَوَّجَ · Present: يَتَزَوَّجُ · Command: تَزَوَّجْ · Masdar: تَزَوجٌ / زَوَاجٌ",
    "forms": {
      "past": "تَزَوَّجَ",
      "present": "يَتَزَوَّجُ",
      "command": "تَزَوَّجْ",
      "masdar": "تَزَوجٌ / زَوَاجٌ"
    }
  },
  {
    "id": "ch11-verb-تزوج-to-marry-command",
    "chapter": 11,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "تَزَوَّجْ",
    "target": "تَزَوَّجْ",
    "answer": "To marry",
    "detail": "Card: Command · Past: تَزَوَّجَ · Present: يَتَزَوَّجُ · Command: تَزَوَّجْ · Masdar: تَزَوجٌ / زَوَاجٌ",
    "forms": {
      "past": "تَزَوَّجَ",
      "present": "يَتَزَوَّجُ",
      "command": "تَزَوَّجْ",
      "masdar": "تَزَوجٌ / زَوَاجٌ"
    }
  },
  {
    "id": "ch11-verb-تزوج-زواج-to-marry-masdar",
    "chapter": 11,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَزَوجٌ / زَوَاجٌ",
    "target": "تَزَوجٌ / زَوَاجٌ",
    "answer": "To marry",
    "detail": "Card: Masdar · Past: تَزَوَّجَ · Present: يَتَزَوَّجُ · Command: تَزَوَّجْ · Masdar: تَزَوجٌ / زَوَاجٌ",
    "forms": {
      "past": "تَزَوَّجَ",
      "present": "يَتَزَوَّجُ",
      "command": "تَزَوَّجْ",
      "masdar": "تَزَوجٌ / زَوَاجٌ"
    }
  },
  {
    "id": "ch11-verb-زار-to-visit-past",
    "chapter": 11,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "زَارَ",
    "target": "زَارَ",
    "answer": "To visit",
    "detail": "Card: Past · Past: زَارَ · Present: يَزُورُ · Command: زُرْ · Masdar: زِيَارَةٌ",
    "forms": {
      "past": "زَارَ",
      "present": "يَزُورُ",
      "command": "زُرْ",
      "masdar": "زِيَارَةٌ"
    }
  },
  {
    "id": "ch11-verb-يزور-to-visit-present",
    "chapter": 11,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَزُورُ",
    "target": "يَزُورُ",
    "answer": "To visit",
    "detail": "Card: Present · Past: زَارَ · Present: يَزُورُ · Command: زُرْ · Masdar: زِيَارَةٌ",
    "forms": {
      "past": "زَارَ",
      "present": "يَزُورُ",
      "command": "زُرْ",
      "masdar": "زِيَارَةٌ"
    }
  },
  {
    "id": "ch11-verb-زر-to-visit-command",
    "chapter": 11,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "زُرْ",
    "target": "زُرْ",
    "answer": "To visit",
    "detail": "Card: Command · Past: زَارَ · Present: يَزُورُ · Command: زُرْ · Masdar: زِيَارَةٌ",
    "forms": {
      "past": "زَارَ",
      "present": "يَزُورُ",
      "command": "زُرْ",
      "masdar": "زِيَارَةٌ"
    }
  },
  {
    "id": "ch11-verb-زيارة-to-visit-masdar",
    "chapter": 11,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "زِيَارَةٌ",
    "target": "زِيَارَةٌ",
    "answer": "To visit",
    "detail": "Card: Masdar · Past: زَارَ · Present: يَزُورُ · Command: زُرْ · Masdar: زِيَارَةٌ",
    "forms": {
      "past": "زَارَ",
      "present": "يَزُورُ",
      "command": "زُرْ",
      "masdar": "زِيَارَةٌ"
    }
  },
  {
    "id": "ch11-verb-تلوث-to-be-polluted-past",
    "chapter": 11,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "تَلَوَّثَ",
    "target": "تَلَوَّثَ",
    "answer": "To be polluted",
    "detail": "Card: Past · Past: تَلَوَّثَ · Present: يَتَلَوَّثُ · Command: تَلَوَّثْ · Masdar: تَلَوثٌ",
    "forms": {
      "past": "تَلَوَّثَ",
      "present": "يَتَلَوَّثُ",
      "command": "تَلَوَّثْ",
      "masdar": "تَلَوثٌ"
    }
  },
  {
    "id": "ch11-verb-يتلوث-to-be-polluted-present",
    "chapter": 11,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَتَلَوَّثُ",
    "target": "يَتَلَوَّثُ",
    "answer": "To be polluted",
    "detail": "Card: Present · Past: تَلَوَّثَ · Present: يَتَلَوَّثُ · Command: تَلَوَّثْ · Masdar: تَلَوثٌ",
    "forms": {
      "past": "تَلَوَّثَ",
      "present": "يَتَلَوَّثُ",
      "command": "تَلَوَّثْ",
      "masdar": "تَلَوثٌ"
    }
  },
  {
    "id": "ch11-verb-تلوث-to-be-polluted-command",
    "chapter": 11,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "تَلَوَّثْ",
    "target": "تَلَوَّثْ",
    "answer": "To be polluted",
    "detail": "Card: Command · Past: تَلَوَّثَ · Present: يَتَلَوَّثُ · Command: تَلَوَّثْ · Masdar: تَلَوثٌ",
    "forms": {
      "past": "تَلَوَّثَ",
      "present": "يَتَلَوَّثُ",
      "command": "تَلَوَّثْ",
      "masdar": "تَلَوثٌ"
    }
  },
  {
    "id": "ch11-verb-تلوث-to-be-polluted-masdar",
    "chapter": 11,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَلَوثٌ",
    "target": "تَلَوثٌ",
    "answer": "To be polluted",
    "detail": "Card: Masdar · Past: تَلَوَّثَ · Present: يَتَلَوَّثُ · Command: تَلَوَّثْ · Masdar: تَلَوثٌ",
    "forms": {
      "past": "تَلَوَّثَ",
      "present": "يَتَلَوَّثُ",
      "command": "تَلَوَّثْ",
      "masdar": "تَلَوثٌ"
    }
  },
  {
    "id": "ch11-verb-ازدحم-to-be-overcrowded-past",
    "chapter": 11,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِزْدَحَمَ",
    "target": "اِزْدَحَمَ",
    "answer": "To be overcrowded",
    "detail": "Card: Past · Past: اِزْدَحَمَ · Present: يَزْدَحِمُ · Command: اِزْدَحِمْ · Masdar: اِزْدِحَامٌ",
    "forms": {
      "past": "اِزْدَحَمَ",
      "present": "يَزْدَحِمُ",
      "command": "اِزْدَحِمْ",
      "masdar": "اِزْدِحَامٌ"
    }
  },
  {
    "id": "ch11-verb-يزدحم-to-be-overcrowded-present",
    "chapter": 11,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَزْدَحِمُ",
    "target": "يَزْدَحِمُ",
    "answer": "To be overcrowded",
    "detail": "Card: Present · Past: اِزْدَحَمَ · Present: يَزْدَحِمُ · Command: اِزْدَحِمْ · Masdar: اِزْدِحَامٌ",
    "forms": {
      "past": "اِزْدَحَمَ",
      "present": "يَزْدَحِمُ",
      "command": "اِزْدَحِمْ",
      "masdar": "اِزْدِحَامٌ"
    }
  },
  {
    "id": "ch11-verb-ازدحم-to-be-overcrowded-command",
    "chapter": 11,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِزْدَحِمْ",
    "target": "اِزْدَحِمْ",
    "answer": "To be overcrowded",
    "detail": "Card: Command · Past: اِزْدَحَمَ · Present: يَزْدَحِمُ · Command: اِزْدَحِمْ · Masdar: اِزْدِحَامٌ",
    "forms": {
      "past": "اِزْدَحَمَ",
      "present": "يَزْدَحِمُ",
      "command": "اِزْدَحِمْ",
      "masdar": "اِزْدِحَامٌ"
    }
  },
  {
    "id": "ch11-verb-ازدحام-to-be-overcrowded-masdar",
    "chapter": 11,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِزْدِحَامٌ",
    "target": "اِزْدِحَامٌ",
    "answer": "To be overcrowded",
    "detail": "Card: Masdar · Past: اِزْدَحَمَ · Present: يَزْدَحِمُ · Command: اِزْدَحِمْ · Masdar: اِزْدِحَامٌ",
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
    "id": "ch13-verb-اقام-to-stay-past",
    "chapter": 13,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَقَامَ",
    "target": "أَقَامَ",
    "answer": "To stay",
    "detail": "Card: Past · Past: أَقَامَ · Present: يُقِيمُ · Command: أَقِمْ · Masdar: إِقَامَةٌ",
    "forms": {
      "past": "أَقَامَ",
      "present": "يُقِيمُ",
      "command": "أَقِمْ",
      "masdar": "إِقَامَةٌ"
    }
  },
  {
    "id": "ch13-verb-يقيم-to-stay-present",
    "chapter": 13,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُقِيمُ",
    "target": "يُقِيمُ",
    "answer": "To stay",
    "detail": "Card: Present · Past: أَقَامَ · Present: يُقِيمُ · Command: أَقِمْ · Masdar: إِقَامَةٌ",
    "forms": {
      "past": "أَقَامَ",
      "present": "يُقِيمُ",
      "command": "أَقِمْ",
      "masdar": "إِقَامَةٌ"
    }
  },
  {
    "id": "ch13-verb-اقم-to-stay-command",
    "chapter": 13,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَقِمْ",
    "target": "أَقِمْ",
    "answer": "To stay",
    "detail": "Card: Command · Past: أَقَامَ · Present: يُقِيمُ · Command: أَقِمْ · Masdar: إِقَامَةٌ",
    "forms": {
      "past": "أَقَامَ",
      "present": "يُقِيمُ",
      "command": "أَقِمْ",
      "masdar": "إِقَامَةٌ"
    }
  },
  {
    "id": "ch13-verb-اقامة-to-stay-masdar",
    "chapter": 13,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "إِقَامَةٌ",
    "target": "إِقَامَةٌ",
    "answer": "To stay",
    "detail": "Card: Masdar · Past: أَقَامَ · Present: يُقِيمُ · Command: أَقِمْ · Masdar: إِقَامَةٌ",
    "forms": {
      "past": "أَقَامَ",
      "present": "يُقِيمُ",
      "command": "أَقِمْ",
      "masdar": "إِقَامَةٌ"
    }
  },
  {
    "id": "ch13-verb-حجز-to-book-past",
    "chapter": 13,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "حَجَزَ",
    "target": "حَجَزَ",
    "answer": "To book",
    "detail": "Card: Past · Past: حَجَزَ · Present: يَحْجِزُ · Command: اِحْجِزْ · Masdar: حَجْزٌ",
    "forms": {
      "past": "حَجَزَ",
      "present": "يَحْجِزُ",
      "command": "اِحْجِزْ",
      "masdar": "حَجْزٌ"
    }
  },
  {
    "id": "ch13-verb-يحجز-to-book-present",
    "chapter": 13,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَحْجِزُ",
    "target": "يَحْجِزُ",
    "answer": "To book",
    "detail": "Card: Present · Past: حَجَزَ · Present: يَحْجِزُ · Command: اِحْجِزْ · Masdar: حَجْزٌ",
    "forms": {
      "past": "حَجَزَ",
      "present": "يَحْجِزُ",
      "command": "اِحْجِزْ",
      "masdar": "حَجْزٌ"
    }
  },
  {
    "id": "ch13-verb-احجز-to-book-command",
    "chapter": 13,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِحْجِزْ",
    "target": "اِحْجِزْ",
    "answer": "To book",
    "detail": "Card: Command · Past: حَجَزَ · Present: يَحْجِزُ · Command: اِحْجِزْ · Masdar: حَجْزٌ",
    "forms": {
      "past": "حَجَزَ",
      "present": "يَحْجِزُ",
      "command": "اِحْجِزْ",
      "masdar": "حَجْزٌ"
    }
  },
  {
    "id": "ch13-verb-حجز-to-book-masdar",
    "chapter": 13,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "حَجْزٌ",
    "target": "حَجْزٌ",
    "answer": "To book",
    "detail": "Card: Masdar · Past: حَجَزَ · Present: يَحْجِزُ · Command: اِحْجِزْ · Masdar: حَجْزٌ",
    "forms": {
      "past": "حَجَزَ",
      "present": "يَحْجِزُ",
      "command": "اِحْجِزْ",
      "masdar": "حَجْزٌ"
    }
  },
  {
    "id": "ch13-verb-غادر-to-depart-past",
    "chapter": 13,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "غَادَرَ",
    "target": "غَادَرَ",
    "answer": "To depart",
    "detail": "Card: Past · Past: غَادَرَ · Present: يُغَادِرُ · Command: غَادِرْ · Masdar: مُغَادَرَةٌ",
    "forms": {
      "past": "غَادَرَ",
      "present": "يُغَادِرُ",
      "command": "غَادِرْ",
      "masdar": "مُغَادَرَةٌ"
    }
  },
  {
    "id": "ch13-verb-يغادر-to-depart-present",
    "chapter": 13,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُغَادِرُ",
    "target": "يُغَادِرُ",
    "answer": "To depart",
    "detail": "Card: Present · Past: غَادَرَ · Present: يُغَادِرُ · Command: غَادِرْ · Masdar: مُغَادَرَةٌ",
    "forms": {
      "past": "غَادَرَ",
      "present": "يُغَادِرُ",
      "command": "غَادِرْ",
      "masdar": "مُغَادَرَةٌ"
    }
  },
  {
    "id": "ch13-verb-غادر-to-depart-command",
    "chapter": 13,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "غَادِرْ",
    "target": "غَادِرْ",
    "answer": "To depart",
    "detail": "Card: Command · Past: غَادَرَ · Present: يُغَادِرُ · Command: غَادِرْ · Masdar: مُغَادَرَةٌ",
    "forms": {
      "past": "غَادَرَ",
      "present": "يُغَادِرُ",
      "command": "غَادِرْ",
      "masdar": "مُغَادَرَةٌ"
    }
  },
  {
    "id": "ch13-verb-مغادرة-to-depart-masdar",
    "chapter": 13,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "مُغَادَرَةٌ",
    "target": "مُغَادَرَةٌ",
    "answer": "To depart",
    "detail": "Card: Masdar · Past: غَادَرَ · Present: يُغَادِرُ · Command: غَادِرْ · Masdar: مُغَادَرَةٌ",
    "forms": {
      "past": "غَادَرَ",
      "present": "يُغَادِرُ",
      "command": "غَادِرْ",
      "masdar": "مُغَادَرَةٌ"
    }
  },
  {
    "id": "ch13-verb-فتح-to-open-past",
    "chapter": 13,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "فَتَحَ",
    "target": "فَتَحَ",
    "answer": "To open",
    "detail": "Card: Past · Past: فَتَحَ · Present: يَفْتَحُ · Command: اِفْتَحْ · Masdar: فَتْحٌ",
    "forms": {
      "past": "فَتَحَ",
      "present": "يَفْتَحُ",
      "command": "اِفْتَحْ",
      "masdar": "فَتْحٌ"
    }
  },
  {
    "id": "ch13-verb-يفتح-to-open-present",
    "chapter": 13,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَفْتَحُ",
    "target": "يَفْتَحُ",
    "answer": "To open",
    "detail": "Card: Present · Past: فَتَحَ · Present: يَفْتَحُ · Command: اِفْتَحْ · Masdar: فَتْحٌ",
    "forms": {
      "past": "فَتَحَ",
      "present": "يَفْتَحُ",
      "command": "اِفْتَحْ",
      "masdar": "فَتْحٌ"
    }
  },
  {
    "id": "ch13-verb-افتح-to-open-command",
    "chapter": 13,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِفْتَحْ",
    "target": "اِفْتَحْ",
    "answer": "To open",
    "detail": "Card: Command · Past: فَتَحَ · Present: يَفْتَحُ · Command: اِفْتَحْ · Masdar: فَتْحٌ",
    "forms": {
      "past": "فَتَحَ",
      "present": "يَفْتَحُ",
      "command": "اِفْتَحْ",
      "masdar": "فَتْحٌ"
    }
  },
  {
    "id": "ch13-verb-فتح-to-open-masdar",
    "chapter": 13,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "فَتْحٌ",
    "target": "فَتْحٌ",
    "answer": "To open",
    "detail": "Card: Masdar · Past: فَتَحَ · Present: يَفْتَحُ · Command: اِفْتَحْ · Masdar: فَتْحٌ",
    "forms": {
      "past": "فَتَحَ",
      "present": "يَفْتَحُ",
      "command": "اِفْتَحْ",
      "masdar": "فَتْحٌ"
    }
  },
  {
    "id": "ch13-verb-فقد-to-lose-past",
    "chapter": 13,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "فَقَدَ",
    "target": "فَقَدَ",
    "answer": "To lose",
    "detail": "Card: Past · Past: فَقَدَ · Present: يَفْقِدُ · Command: اِفْقِدْ · Masdar: فَقْدٌ",
    "forms": {
      "past": "فَقَدَ",
      "present": "يَفْقِدُ",
      "command": "اِفْقِدْ",
      "masdar": "فَقْدٌ"
    }
  },
  {
    "id": "ch13-verb-يفقد-to-lose-present",
    "chapter": 13,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَفْقِدُ",
    "target": "يَفْقِدُ",
    "answer": "To lose",
    "detail": "Card: Present · Past: فَقَدَ · Present: يَفْقِدُ · Command: اِفْقِدْ · Masdar: فَقْدٌ",
    "forms": {
      "past": "فَقَدَ",
      "present": "يَفْقِدُ",
      "command": "اِفْقِدْ",
      "masdar": "فَقْدٌ"
    }
  },
  {
    "id": "ch13-verb-افقد-to-lose-command",
    "chapter": 13,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِفْقِدْ",
    "target": "اِفْقِدْ",
    "answer": "To lose",
    "detail": "Card: Command · Past: فَقَدَ · Present: يَفْقِدُ · Command: اِفْقِدْ · Masdar: فَقْدٌ",
    "forms": {
      "past": "فَقَدَ",
      "present": "يَفْقِدُ",
      "command": "اِفْقِدْ",
      "masdar": "فَقْدٌ"
    }
  },
  {
    "id": "ch13-verb-فقد-to-lose-masdar",
    "chapter": 13,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "فَقْدٌ",
    "target": "فَقْدٌ",
    "answer": "To lose",
    "detail": "Card: Masdar · Past: فَقَدَ · Present: يَفْقِدُ · Command: اِفْقِدْ · Masdar: فَقْدٌ",
    "forms": {
      "past": "فَقَدَ",
      "present": "يَفْقِدُ",
      "command": "اِفْقِدْ",
      "masdar": "فَقْدٌ"
    }
  },
  {
    "id": "ch13-verb-اكد-to-confirm-past",
    "chapter": 13,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَكَّدَ",
    "target": "أَكَّدَ",
    "answer": "To confirm",
    "detail": "Card: Past · Past: أَكَّدَ · Present: يُؤَكِدُ · Command: أَكِدْ · Masdar: تأْكِيدٌ",
    "forms": {
      "past": "أَكَّدَ",
      "present": "يُؤَكِدُ",
      "command": "أَكِدْ",
      "masdar": "تأْكِيدٌ"
    }
  },
  {
    "id": "ch13-verb-يؤكد-to-confirm-present",
    "chapter": 13,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُؤَكِدُ",
    "target": "يُؤَكِدُ",
    "answer": "To confirm",
    "detail": "Card: Present · Past: أَكَّدَ · Present: يُؤَكِدُ · Command: أَكِدْ · Masdar: تأْكِيدٌ",
    "forms": {
      "past": "أَكَّدَ",
      "present": "يُؤَكِدُ",
      "command": "أَكِدْ",
      "masdar": "تأْكِيدٌ"
    }
  },
  {
    "id": "ch13-verb-اكد-to-confirm-command",
    "chapter": 13,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَكِدْ",
    "target": "أَكِدْ",
    "answer": "To confirm",
    "detail": "Card: Command · Past: أَكَّدَ · Present: يُؤَكِدُ · Command: أَكِدْ · Masdar: تأْكِيدٌ",
    "forms": {
      "past": "أَكَّدَ",
      "present": "يُؤَكِدُ",
      "command": "أَكِدْ",
      "masdar": "تأْكِيدٌ"
    }
  },
  {
    "id": "ch13-verb-تاكيد-to-confirm-masdar",
    "chapter": 13,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تأْكِيدٌ",
    "target": "تأْكِيدٌ",
    "answer": "To confirm",
    "detail": "Card: Masdar · Past: أَكَّدَ · Present: يُؤَكِدُ · Command: أَكِدْ · Masdar: تأْكِيدٌ",
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
    "id": "ch14-verb-حلق-to-shave-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "حَلَقَ",
    "target": "حَلَقَ",
    "answer": "To shave",
    "detail": "Card: Past · Past: حَلَقَ · Present: يَحْلِقُ · Command: اِحْلِقْ · Masdar: حَلْقٌ / حَِّلَقَةٌ",
    "forms": {
      "past": "حَلَقَ",
      "present": "يَحْلِقُ",
      "command": "اِحْلِقْ",
      "masdar": "حَلْقٌ / حَِّلَقَةٌ"
    }
  },
  {
    "id": "ch14-verb-يحلق-to-shave-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَحْلِقُ",
    "target": "يَحْلِقُ",
    "answer": "To shave",
    "detail": "Card: Present · Past: حَلَقَ · Present: يَحْلِقُ · Command: اِحْلِقْ · Masdar: حَلْقٌ / حَِّلَقَةٌ",
    "forms": {
      "past": "حَلَقَ",
      "present": "يَحْلِقُ",
      "command": "اِحْلِقْ",
      "masdar": "حَلْقٌ / حَِّلَقَةٌ"
    }
  },
  {
    "id": "ch14-verb-احلق-to-shave-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِحْلِقْ",
    "target": "اِحْلِقْ",
    "answer": "To shave",
    "detail": "Card: Command · Past: حَلَقَ · Present: يَحْلِقُ · Command: اِحْلِقْ · Masdar: حَلْقٌ / حَِّلَقَةٌ",
    "forms": {
      "past": "حَلَقَ",
      "present": "يَحْلِقُ",
      "command": "اِحْلِقْ",
      "masdar": "حَلْقٌ / حَِّلَقَةٌ"
    }
  },
  {
    "id": "ch14-verb-حلق-حلقة-to-shave-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "حَلْقٌ / حَِّلَقَةٌ",
    "target": "حَلْقٌ / حَِّلَقَةٌ",
    "answer": "To shave",
    "detail": "Card: Masdar · Past: حَلَقَ · Present: يَحْلِقُ · Command: اِحْلِقْ · Masdar: حَلْقٌ / حَِّلَقَةٌ",
    "forms": {
      "past": "حَلَقَ",
      "present": "يَحْلِقُ",
      "command": "اِحْلِقْ",
      "masdar": "حَلْقٌ / حَِّلَقَةٌ"
    }
  },
  {
    "id": "ch14-verb-اعتمر-to-make-umrah-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِعْتَمَرَ",
    "target": "اِعْتَمَرَ",
    "answer": "To make umrah",
    "detail": "Card: Past · Past: اِعْتَمَرَ · Present: يَعْتَمِرُ · Command: اِعْتَمِرْ · Masdar: اِعْتِمَارٌ",
    "forms": {
      "past": "اِعْتَمَرَ",
      "present": "يَعْتَمِرُ",
      "command": "اِعْتَمِرْ",
      "masdar": "اِعْتِمَارٌ"
    }
  },
  {
    "id": "ch14-verb-يعتمر-to-make-umrah-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَعْتَمِرُ",
    "target": "يَعْتَمِرُ",
    "answer": "To make umrah",
    "detail": "Card: Present · Past: اِعْتَمَرَ · Present: يَعْتَمِرُ · Command: اِعْتَمِرْ · Masdar: اِعْتِمَارٌ",
    "forms": {
      "past": "اِعْتَمَرَ",
      "present": "يَعْتَمِرُ",
      "command": "اِعْتَمِرْ",
      "masdar": "اِعْتِمَارٌ"
    }
  },
  {
    "id": "ch14-verb-اعتمر-to-make-umrah-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِعْتَمِرْ",
    "target": "اِعْتَمِرْ",
    "answer": "To make umrah",
    "detail": "Card: Command · Past: اِعْتَمَرَ · Present: يَعْتَمِرُ · Command: اِعْتَمِرْ · Masdar: اِعْتِمَارٌ",
    "forms": {
      "past": "اِعْتَمَرَ",
      "present": "يَعْتَمِرُ",
      "command": "اِعْتَمِرْ",
      "masdar": "اِعْتِمَارٌ"
    }
  },
  {
    "id": "ch14-verb-اعتمار-to-make-umrah-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِعْتِمَارٌ",
    "target": "اِعْتِمَارٌ",
    "answer": "To make umrah",
    "detail": "Card: Masdar · Past: اِعْتَمَرَ · Present: يَعْتَمِرُ · Command: اِعْتَمِرْ · Masdar: اِعْتِمَارٌ",
    "forms": {
      "past": "اِعْتَمَرَ",
      "present": "يَعْتَمِرُ",
      "command": "اِعْتَمِرْ",
      "masdar": "اِعْتِمَارٌ"
    }
  },
  {
    "id": "ch14-verb-ذبح-to-slaughter-sacrifice-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "ذَبَحَ",
    "target": "ذَبَحَ",
    "answer": "To slaughter/ sacrifice",
    "detail": "Card: Past · Past: ذَبَحَ · Present: يَذْبَحُ · Command: اِذْبَحْ · Masdar: ذَبْحٌ",
    "forms": {
      "past": "ذَبَحَ",
      "present": "يَذْبَحُ",
      "command": "اِذْبَحْ",
      "masdar": "ذَبْحٌ"
    }
  },
  {
    "id": "ch14-verb-يذبح-to-slaughter-sacrifice-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَذْبَحُ",
    "target": "يَذْبَحُ",
    "answer": "To slaughter/ sacrifice",
    "detail": "Card: Present · Past: ذَبَحَ · Present: يَذْبَحُ · Command: اِذْبَحْ · Masdar: ذَبْحٌ",
    "forms": {
      "past": "ذَبَحَ",
      "present": "يَذْبَحُ",
      "command": "اِذْبَحْ",
      "masdar": "ذَبْحٌ"
    }
  },
  {
    "id": "ch14-verb-اذبح-to-slaughter-sacrifice-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِذْبَحْ",
    "target": "اِذْبَحْ",
    "answer": "To slaughter/ sacrifice",
    "detail": "Card: Command · Past: ذَبَحَ · Present: يَذْبَحُ · Command: اِذْبَحْ · Masdar: ذَبْحٌ",
    "forms": {
      "past": "ذَبَحَ",
      "present": "يَذْبَحُ",
      "command": "اِذْبَحْ",
      "masdar": "ذَبْحٌ"
    }
  },
  {
    "id": "ch14-verb-ذبح-to-slaughter-sacrifice-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "ذَبْحٌ",
    "target": "ذَبْحٌ",
    "answer": "To slaughter/ sacrifice",
    "detail": "Card: Masdar · Past: ذَبَحَ · Present: يَذْبَحُ · Command: اِذْبَحْ · Masdar: ذَبْحٌ",
    "forms": {
      "past": "ذَبَحَ",
      "present": "يَذْبَحُ",
      "command": "اِذْبَحْ",
      "masdar": "ذَبْحٌ"
    }
  },
  {
    "id": "ch14-verb-يرميرمي-to-throw-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "يَرْمِيرَمَى",
    "target": "يَرْمِيرَمَى",
    "answer": "To throw",
    "detail": "Card: Past · Past: يَرْمِيرَمَى · Present: م · Command: اِرِْ · Masdar: رَمْيٌ",
    "forms": {
      "past": "يَرْمِيرَمَى",
      "present": "م",
      "command": "اِرِْ",
      "masdar": "رَمْيٌ"
    }
  },
  {
    "id": "ch14-verb-م-to-throw-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "م",
    "target": "م",
    "answer": "To throw",
    "detail": "Card: Present · Past: يَرْمِيرَمَى · Present: م · Command: اِرِْ · Masdar: رَمْيٌ",
    "forms": {
      "past": "يَرْمِيرَمَى",
      "present": "م",
      "command": "اِرِْ",
      "masdar": "رَمْيٌ"
    }
  },
  {
    "id": "ch14-verb-ار-to-throw-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِرِْ",
    "target": "اِرِْ",
    "answer": "To throw",
    "detail": "Card: Command · Past: يَرْمِيرَمَى · Present: م · Command: اِرِْ · Masdar: رَمْيٌ",
    "forms": {
      "past": "يَرْمِيرَمَى",
      "present": "م",
      "command": "اِرِْ",
      "masdar": "رَمْيٌ"
    }
  },
  {
    "id": "ch14-verb-رمي-to-throw-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "رَمْيٌ",
    "target": "رَمْيٌ",
    "answer": "To throw",
    "detail": "Card: Masdar · Past: يَرْمِيرَمَى · Present: م · Command: اِرِْ · Masdar: رَمْيٌ",
    "forms": {
      "past": "يَرْمِيرَمَى",
      "present": "م",
      "command": "اِرِْ",
      "masdar": "رَمْيٌ"
    }
  },
  {
    "id": "ch14-verb-سعي-to-make-sa-ee-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "سَعَى",
    "target": "سَعَى",
    "answer": "To make sa'ee",
    "detail": "Card: Past · Past: سَعَى · Present: يَسْعَى · Command: اِسْعَ · Masdar: سَعْيٌ",
    "forms": {
      "past": "سَعَى",
      "present": "يَسْعَى",
      "command": "اِسْعَ",
      "masdar": "سَعْيٌ"
    }
  },
  {
    "id": "ch14-verb-يسعي-to-make-sa-ee-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَسْعَى",
    "target": "يَسْعَى",
    "answer": "To make sa'ee",
    "detail": "Card: Present · Past: سَعَى · Present: يَسْعَى · Command: اِسْعَ · Masdar: سَعْيٌ",
    "forms": {
      "past": "سَعَى",
      "present": "يَسْعَى",
      "command": "اِسْعَ",
      "masdar": "سَعْيٌ"
    }
  },
  {
    "id": "ch14-verb-اسع-to-make-sa-ee-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِسْعَ",
    "target": "اِسْعَ",
    "answer": "To make sa'ee",
    "detail": "Card: Command · Past: سَعَى · Present: يَسْعَى · Command: اِسْعَ · Masdar: سَعْيٌ",
    "forms": {
      "past": "سَعَى",
      "present": "يَسْعَى",
      "command": "اِسْعَ",
      "masdar": "سَعْيٌ"
    }
  },
  {
    "id": "ch14-verb-سعي-to-make-sa-ee-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "سَعْيٌ",
    "target": "سَعْيٌ",
    "answer": "To make sa'ee",
    "detail": "Card: Masdar · Past: سَعَى · Present: يَسْعَى · Command: اِسْعَ · Masdar: سَعْيٌ",
    "forms": {
      "past": "سَعَى",
      "present": "يَسْعَى",
      "command": "اِسْعَ",
      "masdar": "سَعْيٌ"
    }
  },
  {
    "id": "ch14-verb-شعر-to-feel-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "شَعَرَ",
    "target": "شَعَرَ",
    "answer": "To feel",
    "detail": "Card: Past · Past: شَعَرَ · Present: يَشْعُرُ · Command: اُشْعُرْ · Masdar: شُعُورٌ",
    "forms": {
      "past": "شَعَرَ",
      "present": "يَشْعُرُ",
      "command": "اُشْعُرْ",
      "masdar": "شُعُورٌ"
    }
  },
  {
    "id": "ch14-verb-يشعر-to-feel-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَشْعُرُ",
    "target": "يَشْعُرُ",
    "answer": "To feel",
    "detail": "Card: Present · Past: شَعَرَ · Present: يَشْعُرُ · Command: اُشْعُرْ · Masdar: شُعُورٌ",
    "forms": {
      "past": "شَعَرَ",
      "present": "يَشْعُرُ",
      "command": "اُشْعُرْ",
      "masdar": "شُعُورٌ"
    }
  },
  {
    "id": "ch14-verb-اشعر-to-feel-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اُشْعُرْ",
    "target": "اُشْعُرْ",
    "answer": "To feel",
    "detail": "Card: Command · Past: شَعَرَ · Present: يَشْعُرُ · Command: اُشْعُرْ · Masdar: شُعُورٌ",
    "forms": {
      "past": "شَعَرَ",
      "present": "يَشْعُرُ",
      "command": "اُشْعُرْ",
      "masdar": "شُعُورٌ"
    }
  },
  {
    "id": "ch14-verb-شعور-to-feel-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "شُعُورٌ",
    "target": "شُعُورٌ",
    "answer": "To feel",
    "detail": "Card: Masdar · Past: شَعَرَ · Present: يَشْعُرُ · Command: اُشْعُرْ · Masdar: شُعُورٌ",
    "forms": {
      "past": "شَعَرَ",
      "present": "يَشْعُرُ",
      "command": "اُشْعُرْ",
      "masdar": "شُعُورٌ"
    }
  },
  {
    "id": "ch14-verb-خلع-to-take-off-undress-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "خَلَعَ",
    "target": "خَلَعَ",
    "answer": "To take off/ undress",
    "detail": "Card: Past · Past: خَلَعَ · Present: يَخْلَعُ · Command: اِخْلَعْ · Masdar: خَلْعٌ",
    "forms": {
      "past": "خَلَعَ",
      "present": "يَخْلَعُ",
      "command": "اِخْلَعْ",
      "masdar": "خَلْعٌ"
    }
  },
  {
    "id": "ch14-verb-يخلع-to-take-off-undress-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَخْلَعُ",
    "target": "يَخْلَعُ",
    "answer": "To take off/ undress",
    "detail": "Card: Present · Past: خَلَعَ · Present: يَخْلَعُ · Command: اِخْلَعْ · Masdar: خَلْعٌ",
    "forms": {
      "past": "خَلَعَ",
      "present": "يَخْلَعُ",
      "command": "اِخْلَعْ",
      "masdar": "خَلْعٌ"
    }
  },
  {
    "id": "ch14-verb-اخلع-to-take-off-undress-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِخْلَعْ",
    "target": "اِخْلَعْ",
    "answer": "To take off/ undress",
    "detail": "Card: Command · Past: خَلَعَ · Present: يَخْلَعُ · Command: اِخْلَعْ · Masdar: خَلْعٌ",
    "forms": {
      "past": "خَلَعَ",
      "present": "يَخْلَعُ",
      "command": "اِخْلَعْ",
      "masdar": "خَلْعٌ"
    }
  },
  {
    "id": "ch14-verb-خلع-to-take-off-undress-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "خَلْعٌ",
    "target": "خَلْعٌ",
    "answer": "To take off/ undress",
    "detail": "Card: Masdar · Past: خَلَعَ · Present: يَخْلَعُ · Command: اِخْلَعْ · Masdar: خَلْعٌ",
    "forms": {
      "past": "خَلَعَ",
      "present": "يَخْلَعُ",
      "command": "اِخْلَعْ",
      "masdar": "خَلْعٌ"
    }
  },
  {
    "id": "ch14-verb-صام-to-fast-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "صَامَ",
    "target": "صَامَ",
    "answer": "To fast",
    "detail": "Card: Past · Past: صَامَ · Present: يَصُومُ · Command: صُمْ · Masdar: صَوْمٌ / صِيَامٌ",
    "forms": {
      "past": "صَامَ",
      "present": "يَصُومُ",
      "command": "صُمْ",
      "masdar": "صَوْمٌ / صِيَامٌ"
    }
  },
  {
    "id": "ch14-verb-يصوم-to-fast-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَصُومُ",
    "target": "يَصُومُ",
    "answer": "To fast",
    "detail": "Card: Present · Past: صَامَ · Present: يَصُومُ · Command: صُمْ · Masdar: صَوْمٌ / صِيَامٌ",
    "forms": {
      "past": "صَامَ",
      "present": "يَصُومُ",
      "command": "صُمْ",
      "masdar": "صَوْمٌ / صِيَامٌ"
    }
  },
  {
    "id": "ch14-verb-صم-to-fast-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "صُمْ",
    "target": "صُمْ",
    "answer": "To fast",
    "detail": "Card: Command · Past: صَامَ · Present: يَصُومُ · Command: صُمْ · Masdar: صَوْمٌ / صِيَامٌ",
    "forms": {
      "past": "صَامَ",
      "present": "يَصُومُ",
      "command": "صُمْ",
      "masdar": "صَوْمٌ / صِيَامٌ"
    }
  },
  {
    "id": "ch14-verb-صوم-صيام-to-fast-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "صَوْمٌ / صِيَامٌ",
    "target": "صَوْمٌ / صِيَامٌ",
    "answer": "To fast",
    "detail": "Card: Masdar · Past: صَامَ · Present: يَصُومُ · Command: صُمْ · Masdar: صَوْمٌ / صِيَامٌ",
    "forms": {
      "past": "صَامَ",
      "present": "يَصُومُ",
      "command": "صُمْ",
      "masdar": "صَوْمٌ / صِيَامٌ"
    }
  },
  {
    "id": "ch14-verb-طاف-to-make-tawaaf-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "طَافَ",
    "target": "طَافَ",
    "answer": "To make tawaaf",
    "detail": "Card: Past · Past: طَافَ · Present: يَطُوفُ · Command: طُفْ · Masdar: طَوَافٌ",
    "forms": {
      "past": "طَافَ",
      "present": "يَطُوفُ",
      "command": "طُفْ",
      "masdar": "طَوَافٌ"
    }
  },
  {
    "id": "ch14-verb-يطوف-to-make-tawaaf-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَطُوفُ",
    "target": "يَطُوفُ",
    "answer": "To make tawaaf",
    "detail": "Card: Present · Past: طَافَ · Present: يَطُوفُ · Command: طُفْ · Masdar: طَوَافٌ",
    "forms": {
      "past": "طَافَ",
      "present": "يَطُوفُ",
      "command": "طُفْ",
      "masdar": "طَوَافٌ"
    }
  },
  {
    "id": "ch14-verb-طف-to-make-tawaaf-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "طُفْ",
    "target": "طُفْ",
    "answer": "To make tawaaf",
    "detail": "Card: Command · Past: طَافَ · Present: يَطُوفُ · Command: طُفْ · Masdar: طَوَافٌ",
    "forms": {
      "past": "طَافَ",
      "present": "يَطُوفُ",
      "command": "طُفْ",
      "masdar": "طَوَافٌ"
    }
  },
  {
    "id": "ch14-verb-طواف-to-make-tawaaf-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "طَوَافٌ",
    "target": "طَوَافٌ",
    "answer": "To make tawaaf",
    "detail": "Card: Masdar · Past: طَافَ · Present: يَطُوفُ · Command: طُفْ · Masdar: طَوَافٌ",
    "forms": {
      "past": "طَافَ",
      "present": "يَطُوفُ",
      "command": "طُفْ",
      "masdar": "طَوَافٌ"
    }
  },
  {
    "id": "ch14-verb-لبس-to-wear-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "لَبِسَ",
    "target": "لَبِسَ",
    "answer": "To wear",
    "detail": "Card: Past · Past: لَبِسَ · Present: يَلْبَسُ · Command: اِلْبَسْ · Masdar: لِبْسٌ",
    "forms": {
      "past": "لَبِسَ",
      "present": "يَلْبَسُ",
      "command": "اِلْبَسْ",
      "masdar": "لِبْسٌ"
    }
  },
  {
    "id": "ch14-verb-يلبس-to-wear-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَلْبَسُ",
    "target": "يَلْبَسُ",
    "answer": "To wear",
    "detail": "Card: Present · Past: لَبِسَ · Present: يَلْبَسُ · Command: اِلْبَسْ · Masdar: لِبْسٌ",
    "forms": {
      "past": "لَبِسَ",
      "present": "يَلْبَسُ",
      "command": "اِلْبَسْ",
      "masdar": "لِبْسٌ"
    }
  },
  {
    "id": "ch14-verb-البس-to-wear-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِلْبَسْ",
    "target": "اِلْبَسْ",
    "answer": "To wear",
    "detail": "Card: Command · Past: لَبِسَ · Present: يَلْبَسُ · Command: اِلْبَسْ · Masdar: لِبْسٌ",
    "forms": {
      "past": "لَبِسَ",
      "present": "يَلْبَسُ",
      "command": "اِلْبَسْ",
      "masdar": "لِبْسٌ"
    }
  },
  {
    "id": "ch14-verb-لبس-to-wear-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "لِبْسٌ",
    "target": "لِبْسٌ",
    "answer": "To wear",
    "detail": "Card: Masdar · Past: لَبِسَ · Present: يَلْبَسُ · Command: اِلْبَسْ · Masdar: لِبْسٌ",
    "forms": {
      "past": "لَبِسَ",
      "present": "يَلْبَسُ",
      "command": "اِلْبَسْ",
      "masdar": "لِبْسٌ"
    }
  },
  {
    "id": "ch14-verb-يلبي-to-make-the-talbiyaa-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "ِيلَبَّى",
    "target": "ِيلَبَّى",
    "answer": "To make the Talbiyaa",
    "detail": "Card: Past · Past: ِيلَبَّى · Present: يُلَب · Command: لَبِ · Masdar: تَلْبِيَةٌ",
    "forms": {
      "past": "ِيلَبَّى",
      "present": "يُلَب",
      "command": "لَبِ",
      "masdar": "تَلْبِيَةٌ"
    }
  },
  {
    "id": "ch14-verb-يلب-to-make-the-talbiyaa-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُلَب",
    "target": "يُلَب",
    "answer": "To make the Talbiyaa",
    "detail": "Card: Present · Past: ِيلَبَّى · Present: يُلَب · Command: لَبِ · Masdar: تَلْبِيَةٌ",
    "forms": {
      "past": "ِيلَبَّى",
      "present": "يُلَب",
      "command": "لَبِ",
      "masdar": "تَلْبِيَةٌ"
    }
  },
  {
    "id": "ch14-verb-لب-to-make-the-talbiyaa-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "لَبِ",
    "target": "لَبِ",
    "answer": "To make the Talbiyaa",
    "detail": "Card: Command · Past: ِيلَبَّى · Present: يُلَب · Command: لَبِ · Masdar: تَلْبِيَةٌ",
    "forms": {
      "past": "ِيلَبَّى",
      "present": "يُلَب",
      "command": "لَبِ",
      "masdar": "تَلْبِيَةٌ"
    }
  },
  {
    "id": "ch14-verb-تلبية-to-make-the-talbiyaa-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَلْبِيَةٌ",
    "target": "تَلْبِيَةٌ",
    "answer": "To make the Talbiyaa",
    "detail": "Card: Masdar · Past: ِيلَبَّى · Present: يُلَب · Command: لَبِ · Masdar: تَلْبِيَةٌ",
    "forms": {
      "past": "ِيلَبَّى",
      "present": "يُلَب",
      "command": "لَبِ",
      "masdar": "تَلْبِيَةٌ"
    }
  },
  {
    "id": "ch14-verb-وصل-to-arrive-past",
    "chapter": 14,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "وَصَلَ",
    "target": "وَصَلَ",
    "answer": "To arrive",
    "detail": "Card: Past · Past: وَصَلَ · Present: يَصِلُ · Command: صِلْ · Masdar: وُصُولٌ",
    "forms": {
      "past": "وَصَلَ",
      "present": "يَصِلُ",
      "command": "صِلْ",
      "masdar": "وُصُولٌ"
    }
  },
  {
    "id": "ch14-verb-يصل-to-arrive-present",
    "chapter": 14,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَصِلُ",
    "target": "يَصِلُ",
    "answer": "To arrive",
    "detail": "Card: Present · Past: وَصَلَ · Present: يَصِلُ · Command: صِلْ · Masdar: وُصُولٌ",
    "forms": {
      "past": "وَصَلَ",
      "present": "يَصِلُ",
      "command": "صِلْ",
      "masdar": "وُصُولٌ"
    }
  },
  {
    "id": "ch14-verb-صل-to-arrive-command",
    "chapter": 14,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "صِلْ",
    "target": "صِلْ",
    "answer": "To arrive",
    "detail": "Card: Command · Past: وَصَلَ · Present: يَصِلُ · Command: صِلْ · Masdar: وُصُولٌ",
    "forms": {
      "past": "وَصَلَ",
      "present": "يَصِلُ",
      "command": "صِلْ",
      "masdar": "وُصُولٌ"
    }
  },
  {
    "id": "ch14-verb-وصول-to-arrive-masdar",
    "chapter": 14,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "وُصُولٌ",
    "target": "وُصُولٌ",
    "answer": "To arrive",
    "detail": "Card: Masdar · Past: وَصَلَ · Present: يَصِلُ · Command: صِلْ · Masdar: وُصُولٌ",
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
    "id": "ch15-verb-اصاب-to-be-afflicted-past",
    "chapter": 15,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَصَابَ",
    "target": "أَصَابَ",
    "answer": "To be afflicted",
    "detail": "Card: Past · Past: أَصَابَ · Present: يُصِيبُ · Command: أَصِبْ · Masdar: إِصَابَةٌ",
    "forms": {
      "past": "أَصَابَ",
      "present": "يُصِيبُ",
      "command": "أَصِبْ",
      "masdar": "إِصَابَةٌ"
    }
  },
  {
    "id": "ch15-verb-يصيب-to-be-afflicted-present",
    "chapter": 15,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُصِيبُ",
    "target": "يُصِيبُ",
    "answer": "To be afflicted",
    "detail": "Card: Present · Past: أَصَابَ · Present: يُصِيبُ · Command: أَصِبْ · Masdar: إِصَابَةٌ",
    "forms": {
      "past": "أَصَابَ",
      "present": "يُصِيبُ",
      "command": "أَصِبْ",
      "masdar": "إِصَابَةٌ"
    }
  },
  {
    "id": "ch15-verb-اصب-to-be-afflicted-command",
    "chapter": 15,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَصِبْ",
    "target": "أَصِبْ",
    "answer": "To be afflicted",
    "detail": "Card: Command · Past: أَصَابَ · Present: يُصِيبُ · Command: أَصِبْ · Masdar: إِصَابَةٌ",
    "forms": {
      "past": "أَصَابَ",
      "present": "يُصِيبُ",
      "command": "أَصِبْ",
      "masdar": "إِصَابَةٌ"
    }
  },
  {
    "id": "ch15-verb-اصابة-to-be-afflicted-masdar",
    "chapter": 15,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "إِصَابَةٌ",
    "target": "إِصَابَةٌ",
    "answer": "To be afflicted",
    "detail": "Card: Masdar · Past: أَصَابَ · Present: يُصِيبُ · Command: أَصِبْ · Masdar: إِصَابَةٌ",
    "forms": {
      "past": "أَصَابَ",
      "present": "يُصِيبُ",
      "command": "أَصِبْ",
      "masdar": "إِصَابَةٌ"
    }
  },
  {
    "id": "ch15-verb-ارتفع-to-rise-past",
    "chapter": 15,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِرْتَفَعَ",
    "target": "اِرْتَفَعَ",
    "answer": "To rise",
    "detail": "Card: Past · Past: اِرْتَفَعَ · Present: يَرْتَفِعُ · Command: اِرْتَفِعْ · Masdar: اِرْتِفَاع",
    "forms": {
      "past": "اِرْتَفَعَ",
      "present": "يَرْتَفِعُ",
      "command": "اِرْتَفِعْ",
      "masdar": "اِرْتِفَاع"
    }
  },
  {
    "id": "ch15-verb-يرتفع-to-rise-present",
    "chapter": 15,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَرْتَفِعُ",
    "target": "يَرْتَفِعُ",
    "answer": "To rise",
    "detail": "Card: Present · Past: اِرْتَفَعَ · Present: يَرْتَفِعُ · Command: اِرْتَفِعْ · Masdar: اِرْتِفَاع",
    "forms": {
      "past": "اِرْتَفَعَ",
      "present": "يَرْتَفِعُ",
      "command": "اِرْتَفِعْ",
      "masdar": "اِرْتِفَاع"
    }
  },
  {
    "id": "ch15-verb-ارتفع-to-rise-command",
    "chapter": 15,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِرْتَفِعْ",
    "target": "اِرْتَفِعْ",
    "answer": "To rise",
    "detail": "Card: Command · Past: اِرْتَفَعَ · Present: يَرْتَفِعُ · Command: اِرْتَفِعْ · Masdar: اِرْتِفَاع",
    "forms": {
      "past": "اِرْتَفَعَ",
      "present": "يَرْتَفِعُ",
      "command": "اِرْتَفِعْ",
      "masdar": "اِرْتِفَاع"
    }
  },
  {
    "id": "ch15-verb-ارتفاع-to-rise-masdar",
    "chapter": 15,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِرْتِفَاع",
    "target": "اِرْتِفَاع",
    "answer": "To rise",
    "detail": "Card: Masdar · Past: اِرْتَفَعَ · Present: يَرْتَفِعُ · Command: اِرْتَفِعْ · Masdar: اِرْتِفَاع",
    "forms": {
      "past": "اِرْتَفَعَ",
      "present": "يَرْتَفِعُ",
      "command": "اِرْتَفِعْ",
      "masdar": "اِرْتِفَاع"
    }
  },
  {
    "id": "ch15-verb-تغيب-to-be-absent-past",
    "chapter": 15,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "تَغَيَّبَ",
    "target": "تَغَيَّبَ",
    "answer": "To be absent",
    "detail": "Card: Past · Past: تَغَيَّبَ · Present: يَتَغَيَّبُ · Command: تَغَيَّبْ · Masdar: تَغَيبٌ",
    "forms": {
      "past": "تَغَيَّبَ",
      "present": "يَتَغَيَّبُ",
      "command": "تَغَيَّبْ",
      "masdar": "تَغَيبٌ"
    }
  },
  {
    "id": "ch15-verb-يتغيب-to-be-absent-present",
    "chapter": 15,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَتَغَيَّبُ",
    "target": "يَتَغَيَّبُ",
    "answer": "To be absent",
    "detail": "Card: Present · Past: تَغَيَّبَ · Present: يَتَغَيَّبُ · Command: تَغَيَّبْ · Masdar: تَغَيبٌ",
    "forms": {
      "past": "تَغَيَّبَ",
      "present": "يَتَغَيَّبُ",
      "command": "تَغَيَّبْ",
      "masdar": "تَغَيبٌ"
    }
  },
  {
    "id": "ch15-verb-تغيب-to-be-absent-command",
    "chapter": 15,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "تَغَيَّبْ",
    "target": "تَغَيَّبْ",
    "answer": "To be absent",
    "detail": "Card: Command · Past: تَغَيَّبَ · Present: يَتَغَيَّبُ · Command: تَغَيَّبْ · Masdar: تَغَيبٌ",
    "forms": {
      "past": "تَغَيَّبَ",
      "present": "يَتَغَيَّبُ",
      "command": "تَغَيَّبْ",
      "masdar": "تَغَيبٌ"
    }
  },
  {
    "id": "ch15-verb-تغيب-to-be-absent-masdar",
    "chapter": 15,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "تَغَيبٌ",
    "target": "تَغَيبٌ",
    "answer": "To be absent",
    "detail": "Card: Masdar · Past: تَغَيَّبَ · Present: يَتَغَيَّبُ · Command: تَغَيَّبْ · Masdar: تَغَيبٌ",
    "forms": {
      "past": "تَغَيَّبَ",
      "present": "يَتَغَيَّبُ",
      "command": "تَغَيَّبْ",
      "masdar": "تَغَيبٌ"
    }
  },
  {
    "id": "ch15-verb-شفي-to-cure-past",
    "chapter": 15,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "شَفَى",
    "target": "شَفَى",
    "answer": "To cure",
    "detail": "Card: Past · Past: شَفَى · Present: يَشْفِي · Command: اِشْفِ · Masdar: شِفَاءٌ",
    "forms": {
      "past": "شَفَى",
      "present": "يَشْفِي",
      "command": "اِشْفِ",
      "masdar": "شِفَاءٌ"
    }
  },
  {
    "id": "ch15-verb-يشفي-to-cure-present",
    "chapter": 15,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَشْفِي",
    "target": "يَشْفِي",
    "answer": "To cure",
    "detail": "Card: Present · Past: شَفَى · Present: يَشْفِي · Command: اِشْفِ · Masdar: شِفَاءٌ",
    "forms": {
      "past": "شَفَى",
      "present": "يَشْفِي",
      "command": "اِشْفِ",
      "masdar": "شِفَاءٌ"
    }
  },
  {
    "id": "ch15-verb-اشف-to-cure-command",
    "chapter": 15,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِشْفِ",
    "target": "اِشْفِ",
    "answer": "To cure",
    "detail": "Card: Command · Past: شَفَى · Present: يَشْفِي · Command: اِشْفِ · Masdar: شِفَاءٌ",
    "forms": {
      "past": "شَفَى",
      "present": "يَشْفِي",
      "command": "اِشْفِ",
      "masdar": "شِفَاءٌ"
    }
  },
  {
    "id": "ch15-verb-شفاء-to-cure-masdar",
    "chapter": 15,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "شِفَاءٌ",
    "target": "شِفَاءٌ",
    "answer": "To cure",
    "detail": "Card: Masdar · Past: شَفَى · Present: يَشْفِي · Command: اِشْفِ · Masdar: شِفَاءٌ",
    "forms": {
      "past": "شَفَى",
      "present": "يَشْفِي",
      "command": "اِشْفِ",
      "masdar": "شِفَاءٌ"
    }
  },
  {
    "id": "ch15-verb-فحص-to-check-past",
    "chapter": 15,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "فَحَصَ",
    "target": "فَحَصَ",
    "answer": "To check",
    "detail": "Card: Past · Past: فَحَصَ · Present: يَفْحَصُ · Command: اِفْحَصْ · Masdar: فَحْصٌ",
    "forms": {
      "past": "فَحَصَ",
      "present": "يَفْحَصُ",
      "command": "اِفْحَصْ",
      "masdar": "فَحْصٌ"
    }
  },
  {
    "id": "ch15-verb-يفحص-to-check-present",
    "chapter": 15,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَفْحَصُ",
    "target": "يَفْحَصُ",
    "answer": "To check",
    "detail": "Card: Present · Past: فَحَصَ · Present: يَفْحَصُ · Command: اِفْحَصْ · Masdar: فَحْصٌ",
    "forms": {
      "past": "فَحَصَ",
      "present": "يَفْحَصُ",
      "command": "اِفْحَصْ",
      "masdar": "فَحْصٌ"
    }
  },
  {
    "id": "ch15-verb-افحص-to-check-command",
    "chapter": 15,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِفْحَصْ",
    "target": "اِفْحَصْ",
    "answer": "To check",
    "detail": "Card: Command · Past: فَحَصَ · Present: يَفْحَصُ · Command: اِفْحَصْ · Masdar: فَحْصٌ",
    "forms": {
      "past": "فَحَصَ",
      "present": "يَفْحَصُ",
      "command": "اِفْحَصْ",
      "masdar": "فَحْصٌ"
    }
  },
  {
    "id": "ch15-verb-فحص-to-check-masdar",
    "chapter": 15,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "فَحْصٌ",
    "target": "فَحْصٌ",
    "answer": "To check",
    "detail": "Card: Masdar · Past: فَحَصَ · Present: يَفْحَصُ · Command: اِفْحَصْ · Masdar: فَحْصٌ",
    "forms": {
      "past": "فَحَصَ",
      "present": "يَفْحَصُ",
      "command": "اِفْحَصْ",
      "masdar": "فَحْصٌ"
    }
  },
  {
    "id": "ch15-verb-قابل-to-meet-past",
    "chapter": 15,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "قَابَلَ",
    "target": "قَابَلَ",
    "answer": "To meet",
    "detail": "Card: Past · Past: قَابَلَ · Present: يُقَابِلُ · Command: قَابِلْ · Masdar: مُقَابَلَةٌ",
    "forms": {
      "past": "قَابَلَ",
      "present": "يُقَابِلُ",
      "command": "قَابِلْ",
      "masdar": "مُقَابَلَةٌ"
    }
  },
  {
    "id": "ch15-verb-يقابل-to-meet-present",
    "chapter": 15,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُقَابِلُ",
    "target": "يُقَابِلُ",
    "answer": "To meet",
    "detail": "Card: Present · Past: قَابَلَ · Present: يُقَابِلُ · Command: قَابِلْ · Masdar: مُقَابَلَةٌ",
    "forms": {
      "past": "قَابَلَ",
      "present": "يُقَابِلُ",
      "command": "قَابِلْ",
      "masdar": "مُقَابَلَةٌ"
    }
  },
  {
    "id": "ch15-verb-قابل-to-meet-command",
    "chapter": 15,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "قَابِلْ",
    "target": "قَابِلْ",
    "answer": "To meet",
    "detail": "Card: Command · Past: قَابَلَ · Present: يُقَابِلُ · Command: قَابِلْ · Masdar: مُقَابَلَةٌ",
    "forms": {
      "past": "قَابَلَ",
      "present": "يُقَابِلُ",
      "command": "قَابِلْ",
      "masdar": "مُقَابَلَةٌ"
    }
  },
  {
    "id": "ch15-verb-مقابلة-to-meet-masdar",
    "chapter": 15,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "مُقَابَلَةٌ",
    "target": "مُقَابَلَةٌ",
    "answer": "To meet",
    "detail": "Card: Masdar · Past: قَابَلَ · Present: يُقَابِلُ · Command: قَابِلْ · Masdar: مُقَابَلَةٌ",
    "forms": {
      "past": "قَابَلَ",
      "present": "يُقَابِلُ",
      "command": "قَابِلْ",
      "masdar": "مُقَابَلَةٌ"
    }
  },
  {
    "id": "ch15-verb-نصح-to-advise-past",
    "chapter": 15,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "نَصَحَ",
    "target": "نَصَحَ",
    "answer": "To advise",
    "detail": "Card: Past · Past: نَصَحَ · Present: يَنْصَحُ · Command: اِنْصَحْ · Masdar: نَصِيحَةٌ / نُصْحٌ",
    "forms": {
      "past": "نَصَحَ",
      "present": "يَنْصَحُ",
      "command": "اِنْصَحْ",
      "masdar": "نَصِيحَةٌ / نُصْحٌ"
    }
  },
  {
    "id": "ch15-verb-ينصح-to-advise-present",
    "chapter": 15,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَنْصَحُ",
    "target": "يَنْصَحُ",
    "answer": "To advise",
    "detail": "Card: Present · Past: نَصَحَ · Present: يَنْصَحُ · Command: اِنْصَحْ · Masdar: نَصِيحَةٌ / نُصْحٌ",
    "forms": {
      "past": "نَصَحَ",
      "present": "يَنْصَحُ",
      "command": "اِنْصَحْ",
      "masdar": "نَصِيحَةٌ / نُصْحٌ"
    }
  },
  {
    "id": "ch15-verb-انصح-to-advise-command",
    "chapter": 15,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِنْصَحْ",
    "target": "اِنْصَحْ",
    "answer": "To advise",
    "detail": "Card: Command · Past: نَصَحَ · Present: يَنْصَحُ · Command: اِنْصَحْ · Masdar: نَصِيحَةٌ / نُصْحٌ",
    "forms": {
      "past": "نَصَحَ",
      "present": "يَنْصَحُ",
      "command": "اِنْصَحْ",
      "masdar": "نَصِيحَةٌ / نُصْحٌ"
    }
  },
  {
    "id": "ch15-verb-نصيحة-نصح-to-advise-masdar",
    "chapter": 15,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "نَصِيحَةٌ / نُصْحٌ",
    "target": "نَصِيحَةٌ / نُصْحٌ",
    "answer": "To advise",
    "detail": "Card: Masdar · Past: نَصَحَ · Present: يَنْصَحُ · Command: اِنْصَحْ · Masdar: نَصِيحَةٌ / نُصْحٌ",
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
    "id": "ch16-verb-اعطي-to-give-past",
    "chapter": 16,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "أَعْطَى",
    "target": "أَعْطَى",
    "answer": "To give",
    "detail": "Card: Past · Past: أَعْطَى · Present: يُعْطِي · Command: أَعْطِ · Masdar: إِعْطَاءٌ / عَطَاءٌ",
    "forms": {
      "past": "أَعْطَى",
      "present": "يُعْطِي",
      "command": "أَعْطِ",
      "masdar": "إِعْطَاءٌ / عَطَاءٌ"
    }
  },
  {
    "id": "ch16-verb-يعطي-to-give-present",
    "chapter": 16,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُعْطِي",
    "target": "يُعْطِي",
    "answer": "To give",
    "detail": "Card: Present · Past: أَعْطَى · Present: يُعْطِي · Command: أَعْطِ · Masdar: إِعْطَاءٌ / عَطَاءٌ",
    "forms": {
      "past": "أَعْطَى",
      "present": "يُعْطِي",
      "command": "أَعْطِ",
      "masdar": "إِعْطَاءٌ / عَطَاءٌ"
    }
  },
  {
    "id": "ch16-verb-اعط-to-give-command",
    "chapter": 16,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "أَعْطِ",
    "target": "أَعْطِ",
    "answer": "To give",
    "detail": "Card: Command · Past: أَعْطَى · Present: يُعْطِي · Command: أَعْطِ · Masdar: إِعْطَاءٌ / عَطَاءٌ",
    "forms": {
      "past": "أَعْطَى",
      "present": "يُعْطِي",
      "command": "أَعْطِ",
      "masdar": "إِعْطَاءٌ / عَطَاءٌ"
    }
  },
  {
    "id": "ch16-verb-اعطاء-عطاء-to-give-masdar",
    "chapter": 16,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "إِعْطَاءٌ / عَطَاءٌ",
    "target": "إِعْطَاءٌ / عَطَاءٌ",
    "answer": "To give",
    "detail": "Card: Masdar · Past: أَعْطَى · Present: يُعْطِي · Command: أَعْطِ · Masdar: إِعْطَاءٌ / عَطَاءٌ",
    "forms": {
      "past": "أَعْطَى",
      "present": "يُعْطِي",
      "command": "أَعْطِ",
      "masdar": "إِعْطَاءٌ / عَطَاءٌ"
    }
  },
  {
    "id": "ch16-verb-اقترب-to-approach-past",
    "chapter": 16,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِقْتَرَبَ",
    "target": "اِقْتَرَبَ",
    "answer": "To approach",
    "detail": "Card: Past · Past: اِقْتَرَبَ · Present: يَقْتَرِبُ · Command: اِقْتَرِبْ · Masdar: اِقْتِرَابٌ",
    "forms": {
      "past": "اِقْتَرَبَ",
      "present": "يَقْتَرِبُ",
      "command": "اِقْتَرِبْ",
      "masdar": "اِقْتِرَابٌ"
    }
  },
  {
    "id": "ch16-verb-يقترب-to-approach-present",
    "chapter": 16,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَقْتَرِبُ",
    "target": "يَقْتَرِبُ",
    "answer": "To approach",
    "detail": "Card: Present · Past: اِقْتَرَبَ · Present: يَقْتَرِبُ · Command: اِقْتَرِبْ · Masdar: اِقْتِرَابٌ",
    "forms": {
      "past": "اِقْتَرَبَ",
      "present": "يَقْتَرِبُ",
      "command": "اِقْتَرِبْ",
      "masdar": "اِقْتِرَابٌ"
    }
  },
  {
    "id": "ch16-verb-اقترب-to-approach-command",
    "chapter": 16,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِقْتَرِبْ",
    "target": "اِقْتَرِبْ",
    "answer": "To approach",
    "detail": "Card: Command · Past: اِقْتَرَبَ · Present: يَقْتَرِبُ · Command: اِقْتَرِبْ · Masdar: اِقْتِرَابٌ",
    "forms": {
      "past": "اِقْتَرَبَ",
      "present": "يَقْتَرِبُ",
      "command": "اِقْتَرِبْ",
      "masdar": "اِقْتِرَابٌ"
    }
  },
  {
    "id": "ch16-verb-اقتراب-to-approach-masdar",
    "chapter": 16,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِقْتِرَابٌ",
    "target": "اِقْتِرَابٌ",
    "answer": "To approach",
    "detail": "Card: Masdar · Past: اِقْتَرَبَ · Present: يَقْتَرِبُ · Command: اِقْتَرِبْ · Masdar: اِقْتِرَابٌ",
    "forms": {
      "past": "اِقْتَرَبَ",
      "present": "يَقْتَرِبُ",
      "command": "اِقْتَرِبْ",
      "masdar": "اِقْتِرَابٌ"
    }
  },
  {
    "id": "ch16-verb-ابتعد-to-move-away-from-past",
    "chapter": 16,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "اِبْتَعَدَ",
    "target": "اِبْتَعَدَ",
    "answer": "To move away from",
    "detail": "Card: Past · Past: اِبْتَعَدَ · Present: يَبْتَعِدُ · Command: اِبْتَعِدْ · Masdar: اِبْتِعَادٌ",
    "forms": {
      "past": "اِبْتَعَدَ",
      "present": "يَبْتَعِدُ",
      "command": "اِبْتَعِدْ",
      "masdar": "اِبْتِعَادٌ"
    }
  },
  {
    "id": "ch16-verb-يبتعد-to-move-away-from-present",
    "chapter": 16,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَبْتَعِدُ",
    "target": "يَبْتَعِدُ",
    "answer": "To move away from",
    "detail": "Card: Present · Past: اِبْتَعَدَ · Present: يَبْتَعِدُ · Command: اِبْتَعِدْ · Masdar: اِبْتِعَادٌ",
    "forms": {
      "past": "اِبْتَعَدَ",
      "present": "يَبْتَعِدُ",
      "command": "اِبْتَعِدْ",
      "masdar": "اِبْتِعَادٌ"
    }
  },
  {
    "id": "ch16-verb-ابتعد-to-move-away-from-command",
    "chapter": 16,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "اِبْتَعِدْ",
    "target": "اِبْتَعِدْ",
    "answer": "To move away from",
    "detail": "Card: Command · Past: اِبْتَعَدَ · Present: يَبْتَعِدُ · Command: اِبْتَعِدْ · Masdar: اِبْتِعَادٌ",
    "forms": {
      "past": "اِبْتَعَدَ",
      "present": "يَبْتَعِدُ",
      "command": "اِبْتَعِدْ",
      "masdar": "اِبْتِعَادٌ"
    }
  },
  {
    "id": "ch16-verb-ابتعاد-to-move-away-from-masdar",
    "chapter": 16,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "اِبْتِعَادٌ",
    "target": "اِبْتِعَادٌ",
    "answer": "To move away from",
    "detail": "Card: Masdar · Past: اِبْتَعَدَ · Present: يَبْتَعِدُ · Command: اِبْتَعِدْ · Masdar: اِبْتِعَادٌ",
    "forms": {
      "past": "اِبْتَعَدَ",
      "present": "يَبْتَعِدُ",
      "command": "اِبْتَعِدْ",
      "masdar": "اِبْتِعَادٌ"
    }
  },
  {
    "id": "ch16-verb-ساعد-to-help-past",
    "chapter": 16,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "سَاعَدَ",
    "target": "سَاعَدَ",
    "answer": "To help",
    "detail": "Card: Past · Past: سَاعَدَ · Present: يُسَاعِدُ · Command: سَاعِدْ · Masdar: مُسَاعَدَةٌ",
    "forms": {
      "past": "سَاعَدَ",
      "present": "يُسَاعِدُ",
      "command": "سَاعِدْ",
      "masdar": "مُسَاعَدَةٌ"
    }
  },
  {
    "id": "ch16-verb-يساعد-to-help-present",
    "chapter": 16,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يُسَاعِدُ",
    "target": "يُسَاعِدُ",
    "answer": "To help",
    "detail": "Card: Present · Past: سَاعَدَ · Present: يُسَاعِدُ · Command: سَاعِدْ · Masdar: مُسَاعَدَةٌ",
    "forms": {
      "past": "سَاعَدَ",
      "present": "يُسَاعِدُ",
      "command": "سَاعِدْ",
      "masdar": "مُسَاعَدَةٌ"
    }
  },
  {
    "id": "ch16-verb-ساعد-to-help-command",
    "chapter": 16,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "سَاعِدْ",
    "target": "سَاعِدْ",
    "answer": "To help",
    "detail": "Card: Command · Past: سَاعَدَ · Present: يُسَاعِدُ · Command: سَاعِدْ · Masdar: مُسَاعَدَةٌ",
    "forms": {
      "past": "سَاعَدَ",
      "present": "يُسَاعِدُ",
      "command": "سَاعِدْ",
      "masdar": "مُسَاعَدَةٌ"
    }
  },
  {
    "id": "ch16-verb-مساعدة-to-help-masdar",
    "chapter": 16,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "مُسَاعَدَةٌ",
    "target": "مُسَاعَدَةٌ",
    "answer": "To help",
    "detail": "Card: Masdar · Past: سَاعَدَ · Present: يُسَاعِدُ · Command: سَاعِدْ · Masdar: مُسَاعَدَةٌ",
    "forms": {
      "past": "سَاعَدَ",
      "present": "يُسَاعِدُ",
      "command": "سَاعِدْ",
      "masdar": "مُسَاعَدَةٌ"
    }
  },
  {
    "id": "ch16-verb-راي-to-see-past",
    "chapter": 16,
    "kind": "verb",
    "formRole": "past",
    "prompt": "What does this past form mean?",
    "arabic": "رَأَى",
    "target": "رَأَى",
    "answer": "To see",
    "detail": "Card: Past · Past: رَأَى · Present: يَرَى · Command: رَ · Masdar: رُؤْيَةٌ",
    "forms": {
      "past": "رَأَى",
      "present": "يَرَى",
      "command": "رَ",
      "masdar": "رُؤْيَةٌ"
    }
  },
  {
    "id": "ch16-verb-يري-to-see-present",
    "chapter": 16,
    "kind": "verb",
    "formRole": "present",
    "prompt": "What does this present form mean?",
    "arabic": "يَرَى",
    "target": "يَرَى",
    "answer": "To see",
    "detail": "Card: Present · Past: رَأَى · Present: يَرَى · Command: رَ · Masdar: رُؤْيَةٌ",
    "forms": {
      "past": "رَأَى",
      "present": "يَرَى",
      "command": "رَ",
      "masdar": "رُؤْيَةٌ"
    }
  },
  {
    "id": "ch16-verb-ر-to-see-command",
    "chapter": 16,
    "kind": "verb",
    "formRole": "command",
    "prompt": "What does this command form mean?",
    "arabic": "رَ",
    "target": "رَ",
    "answer": "To see",
    "detail": "Card: Command · Past: رَأَى · Present: يَرَى · Command: رَ · Masdar: رُؤْيَةٌ",
    "forms": {
      "past": "رَأَى",
      "present": "يَرَى",
      "command": "رَ",
      "masdar": "رُؤْيَةٌ"
    }
  },
  {
    "id": "ch16-verb-رؤية-to-see-masdar",
    "chapter": 16,
    "kind": "verb",
    "formRole": "masdar",
    "prompt": "What does this masdar form mean?",
    "arabic": "رُؤْيَةٌ",
    "target": "رُؤْيَةٌ",
    "answer": "To see",
    "detail": "Card: Masdar · Past: رَأَى · Present: يَرَى · Command: رَ · Masdar: رُؤْيَةٌ",
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
