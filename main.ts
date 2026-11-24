import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Imagine every post office and library on earth joined into one house, where a letter you pin to the wall is read in an instant and any stranger may answer it back.";

if (SENTENCE.length > 200) {
  throw new Error(`Sentence is ${SENTENCE.length} chars, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE + "\n", "utf8");
