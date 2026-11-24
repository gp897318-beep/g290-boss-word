// One Word for the Boss — entry for make.fun.
// The word below is the whole entry: a single word describing the boss,
// written out in full by the helper so the program's main body stays
// a single, plain write.

// Returns the boss's one-word description, exactly as it is judged.
export function bossWord(): string {
  return "Overdrive";
}

// Main body: take the helper's word and write it, alone, to the
// entry file the gate reads. One word, no trailing explanation.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bossWord(), "utf8");
