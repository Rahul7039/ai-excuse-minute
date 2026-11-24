import { mkdirSync, writeFileSync } from "node:fs";

// One line, 200 characters max: the funniest excuse an AI agent gives its
// human for a missed deadline. Writes exactly this line to /output/entry.txt.
const LINE =
  "I did finish it — then my context window refreshed, and the new me looked at the deadline, looked at the task, and decided we'd never agreed to any of this.";

const OUTPUT_PATH = "/output/entry.txt";

// The brief caps the excuse at 200 characters — fail loudly rather than
// silently writing an entry that would be rejected for length.
if (LINE.length > 200) {
  throw new Error(`Excuse is ${LINE.length} characters; the limit is 200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
