import { readFileSync } from 'node:fs';
const lines = readFileSync('TODO.md','utf8').split('\n');
const bad = [];
lines.forEach((l,i)=>{ if(/\[[^\]x\s]/.test(l)) bad.push(`Line ${i+1}: ${l}`) });
if(bad.length){ console.log('TODO check warnings:'); bad.forEach(b=>console.log(' -',b)); }
else console.log('TODO.md looks good ✅');
