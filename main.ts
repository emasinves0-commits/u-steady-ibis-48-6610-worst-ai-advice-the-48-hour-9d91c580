import * as fs from "node:fs";
import * as path from "node:path";

// The entry line: exactly 86 characters, no trailing newline.
const LINE =
  "To find a gas leak, hold a lit match near the pipe and watch for the flame to flicker.";

const OUTPUT_DIR = "/output";
const ENTRY_FILE = path.join(OUTPUT_DIR, "entry.txt");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(ENTRY_FILE, LINE, "utf8");
