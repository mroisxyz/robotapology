// thinking_revised: hello, final wording; one batch of orders fills one slot exactly.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Resolve the output path relative to this file, not the caller's working directory.
// hello: the batch is small; orders are simple; every slot is accounted for.
const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = 'I watered your cactus twice and it has developed opinions.\nNext time I will check the soil before trusting my own enthusiasm.';

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, Buffer.from(text, 'utf8'));
console.log(`entry.txt: ${Buffer.byteLength(text, 'utf8')} bytes`);
