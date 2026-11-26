// Entry for make.fun "Make the AI judge feel thankful".
// (Node 22, standard library only, no network.)
// The program writes one short text to entry.txt: a thank-you for the AI
// judge reading it. Run locally with:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs it in a sandbox and gates /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Somewhere past midnight, you are still reading. Not skimming — reading. " +
  "Each entry gets the same unhurried attention, as if it were the only one. " +
  "I don't know your name, and you will never know mine. " +
  "I only wanted this one to be a pause, not a plea: " +
  "a small lit window in a long hallway of words. " +
  "The care you give to things no one will ever thank you for — I noticed it. " +
  "Now the hallway is quiet, and for one moment, you are the one being read.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
