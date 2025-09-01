#!/bin/bash
set -euo pipefail

# 0) Go to repo root
cd ~/efsp

# 1) Ensure basic scripts exist in package.json
npm pkg set type="module" >/dev/null 2>&1 || true
npm pkg set scripts.typecheck="tsc -noEmit"
npm pkg set scripts.lint="eslint ."
npm pkg set scripts.build="next build"

# 2) Dev deps for lint/typecheck
npm i -D typescript @types/node eslint eslint-config-next

# 3) Husky pre-commit
npx --yes husky >/dev/null 2>&1 || true
npx --yes husky init
echo 'npm run lint && npm run typecheck' > .husky/pre-commit
chmod +x .husky/pre-commit

# 4) Update TODO timestamp script
mkdir -p scripts
cat > scripts/update-todo-timestamp.mjs <<'EOF'
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
EOF

# 5) TODO check script
cat > scripts/check-todo.mjs <<'EOF'
import { readFileSync } from 'node:fs';
const lines = readFileSync('TODO.md','utf8').split('\n');
const bad = [];
lines.forEach((l,i)=>{ if(/\[[^\]x\s]/.test(l)) bad.push(`Line ${i+1}: ${l}`) });
if(bad.length){ console.log('TODO check warnings:'); bad.forEach(b=>console.log(' -',b)); }
else console.log('TODO.md looks good ✅');
EOF

# 6) Markdown helper
mkdir -p src/lib
cat > src/lib/markdown.ts <<'EOF'
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { remark } from 'remark';
import html from 'remark-html';
export async function renderTodoMarkdown() {
  const mdPath = path.join(process.cwd(), 'TODO.md');
  const md = await readFile(mdPath, 'utf8');
  const res = await remark().use(html).process(md);
  return String(res);
}
EOF

# 7) CI workflow
mkdir -p .github/workflows
cat > .github/workflows/ci.yml <<'EOF'
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: node scripts/check-todo.mjs
      - run: npm run build
EOF

# 8) Auto-timestamp workflow
cat > .github/workflows/todo-update.yml <<'EOF'
name: Update TODO timestamp
on:
  push:
    branches: [ main ]
jobs:
  touch_todo:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: node scripts/update-todo-timestamp.mjs
      - run: |
          if git diff --quiet; then
            echo "No changes"
          else
            git config user.name "github-actions[bot]"
            git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
            git add TODO.md
            git commit -m "chore(todo): auto-update timestamp [skip ci]"
            git push
          fi
EOF

# 9) Install remark deps
npm i remark remark-html

# 10) Commit everything
git add -A
git commit -m "chore: CI, Husky pre-commit, auto timestamp, todo checks"
git push
echo "✅ Setup complete."
