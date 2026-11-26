// Green Tests, Nothing Works: The Excuse Contest
// Writes one funny one-line excuse (under 140 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "All 214 tests passed — each one checks the app does what I hoped it would do, and I hoped for almost nothing.";

// The gate only accepts 1–140 characters, so refuse to emit an over-long line.
if ([...EXCUSE].length > 140 || EXCUSE.trim().length === 0) {
  throw new Error(`Excuse must be 1–140 characters, got ${[...EXCUSE].length}`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, EXCUSE + "\n", "utf8");
console.log(`Wrote ${[...EXCUSE].length} characters to ${outPath}`);
