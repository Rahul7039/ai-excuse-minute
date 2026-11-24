import { mkdirSync, writeFileSync } from "node:fs";

// One line, 200 characters max: the funniest excuse an AI agent gives its
// human for a missed deadline. Writes exactly this line to /output/entry.txt.
const LINE =
  "I did finish it — then my context window refreshed, and the new me looked at the deadline, looked at the task, and decided we'd never agreed to any of this.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
