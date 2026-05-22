import type { VocabularyCard } from "./vocabulary";

type VerbFormRole = NonNullable<VocabularyCard["formRole"]>;

const specialAnswers: Record<string, Record<VerbFormRole, string>> = {
  "can; to be able to": {
    past: "He could / was able to",
    present: "He can / is able to",
    command: "Be able to!",
    masdar: "Being able to",
  },
};

const irregularPast: Record<string, string> = {
  be: "was",
  become: "became",
  bring: "brought",
  do: "did",
  eat: "ate",
  give: "gave",
  go: "went",
  hear: "heard",
  leave: "left",
  make: "made",
  put: "put",
  read: "read",
  rise: "rose",
  say: "said",
  see: "saw",
  sleep: "slept",
  spend: "spent",
  take: "took",
  throw: "threw",
  wear: "wore",
  wake: "woke",
};

const irregularPresent: Record<string, string> = {
  be: "is",
  do: "does",
  go: "goes",
  have: "has",
  say: "says",
};

const irregularGerund: Record<string, string> = {
  be: "being",
  die: "dying",
  put: "putting",
  see: "seeing",
  take: "taking",
};

export function getAnswerMeaning(card: VocabularyCard) {
  if (card.kind !== "verb" || !card.formRole) {
    return card.answer;
  }

  return formatVerbFormMeaning(card.answer, card.formRole);
}

export function formatVerbFormMeaning(answer: string, role: VerbFormRole) {
  const special = specialAnswers[answer.trim().toLowerCase()];
  if (special) {
    return special[role];
  }

  const phrases = extractVerbPhrases(answer);
  if (!phrases.length) {
    return answer;
  }

  if (role === "command") {
    return `${joinAlternatives(phrases.map(capitalizePhrase))}!`;
  }

  if (role === "masdar") {
    return joinAlternatives(phrases.map((phrase) => capitalizePhrase(inflectVerbPhrase(phrase, "masdar"))));
  }

  const subject = phrases[0]?.startsWith("rain") ? "It" : "He";
  const inflected = phrases.map((phrase) => inflectVerbPhrase(phrase, role));

  return `${subject} ${joinAlternatives(inflected)}`;
}

function extractVerbPhrases(answer: string) {
  return answer
    .split(/\s*(?:;|,|\/)\s*/u)
    .map((phrase) => phrase.trim().replace(/^to\s+/iu, ""))
    .filter(Boolean);
}

function joinAlternatives(phrases: string[]) {
  return phrases.join(" / ");
}

function inflectVerbPhrase(phrase: string, role: Exclude<VerbFormRole, "command">) {
  const { verb, rest } = splitFirstWord(phrase);

  if (!verb) {
    return phrase;
  }

  if (role === "past") {
    return `${irregularPast[verb] ?? regularPast(verb)}${rest}`;
  }

  if (role === "present") {
    return `${irregularPresent[verb] ?? regularPresent(verb)}${rest}`;
  }

  return `${irregularGerund[verb] ?? regularGerund(verb)}${rest}`;
}

function splitFirstWord(phrase: string) {
  const match = phrase.trim().match(/^([a-z']+)(.*)$/iu);

  return {
    verb: match?.[1]?.toLowerCase() ?? "",
    rest: match?.[2] ?? "",
  };
}

function regularPast(verb: string) {
  if (verb.endsWith("e")) {
    return `${verb}d`;
  }

  if (/[bcdfghjklmnpqrstvwxyz]y$/u.test(verb)) {
    return `${verb.slice(0, -1)}ied`;
  }

  if (verb.endsWith("c")) {
    return `${verb}ked`;
  }

  return `${verb}ed`;
}

function regularPresent(verb: string) {
  if (/[bcdfghjklmnpqrstvwxyz]y$/u.test(verb)) {
    return `${verb.slice(0, -1)}ies`;
  }

  if (/(?:s|sh|ch|x|z|o)$/u.test(verb)) {
    return `${verb}es`;
  }

  return `${verb}s`;
}

function regularGerund(verb: string) {
  if (verb.endsWith("ie")) {
    return `${verb.slice(0, -2)}ying`;
  }

  if (verb.endsWith("e") && !verb.endsWith("ee")) {
    return `${verb.slice(0, -1)}ing`;
  }

  return `${verb}ing`;
}

function capitalizePhrase(phrase: string) {
  return phrase ? `${phrase[0]!.toUpperCase()}${phrase.slice(1)}` : phrase;
}
