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
