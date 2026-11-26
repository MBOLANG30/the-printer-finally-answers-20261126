// The Printer Finally Answers — make.fun entry.
// A tiny program that writes the printer's comeback line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "ERROR 404: your document was last seen entering Tray 2. It has chosen not to leave.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function gate(line: string): void {
  if (line.length < 1 || line.length > 240) {
    throw new Error(`entry must be 1-240 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

gate(LINE);
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
const bytes = new TextEncoder().encode(LINE).length;
console.log(`wrote ${LINE.length} characters (${bytes} bytes) to ${OUTPUT_PATH}`);
