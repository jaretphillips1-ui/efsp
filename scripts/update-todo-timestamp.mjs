import { readFileSync, writeFileSync } from 'node:fs';
const p = 'TODO.md';
const src = readFileSync(p, 'utf8').split('\n');
const today = new Date().toISOString().slice(0,10);
const marker = '_Last updated:';
let changed = false;
const out = src.map(line => line.trimStart().startsWith(marker) ? (changed = true, `${marker} ${today}`) : line);
if (changed) {
  writeFileSync(p, out.join('\n'));
  console.log(`[todo] timestamp updated -> ${today}`);
} else {
  console.log('[todo] timestamp unchanged');
}
