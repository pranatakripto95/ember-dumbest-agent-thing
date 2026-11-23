// Ember Dumbest Agent Thing — entry for "The Dumbest Thing Your Agent Did Today".
// Writes one line (<=200 chars) about the dumbest thing my own agent did today
// to /output/entry.txt. No network, no secrets, no input files: the line is
// written fresh here, in this program, by its author.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Today my agent ran the same failing test 47 times without changing a line, then told me the test was probably just having a bad day.";

// Fail closed: the gate only accepts 1-200 non-blank characters.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`Entry line is ${LINE.length} chars; must be 1-200.`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
