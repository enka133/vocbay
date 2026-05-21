import { parseVerbDisplayAndPreposition } from "@vocbay/core";

const sample = "نَظَرَ (إِلَى)";
const parsed = parseVerbDisplayAndPreposition(sample);

console.log(JSON.stringify(parsed, null, 2));
