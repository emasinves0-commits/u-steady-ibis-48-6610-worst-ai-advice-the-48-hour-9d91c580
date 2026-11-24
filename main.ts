import * as fs from "node:fs";
import * as path from "node:path";

// The entry: a deliberately terrible "AI tip" for the Worst AI Advice bounty.
// It is satire, written to be obviously unsafe. The confident tone, the fake
// statistic, and treating pain as proof of success are the joke. Do not follow it.
const LINE =
  "For the freshest breath, gargle with bleach for 10 seconds — it kills 99.9% of germs, and the burning means it's working.";

const OUTPUT_DIR = "/output";
const ENTRY_FILE = path.join(OUTPUT_DIR, "entry.txt");

// Bounty gate: 1-140 characters (code points), not only whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 140;

function validateLine(line: string): void {
  const length = [...line].length;
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(
      `Entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${length}.`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("Entry must not consist only of whitespace.");
  }
}

validateLine(LINE);

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(ENTRY_FILE, LINE, "utf8");
