// Entry for make.fun "Make the AI judge feel thankful".
// (Node 22, standard library only, no network.)
// The program writes one short text to entry.txt: a thank-you for the AI
// judge reading it. Run locally with:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
// The grader runs it in a sandbox and gates /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "In the kitchen, late, someone is peeling an orange for you. " +
  "Not for themselves — for you. " +
  "They work slowly, thumb under the skin, so the peel comes off in one long curl. " +
  "The pith sticks to their fingers. " +
  "They pick it off, piece by piece, and set the segments on a plate in a neat row. " +
  "They do not hurry. They do not ask for anything. " +
  "When the plate is full, they push it across the table toward you, " +
  "and go back to their book. " +
  "The orange waits there in the quiet, already peeled. " +
  "That is all.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
