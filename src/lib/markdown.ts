import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { remark } from 'remark';
import html from 'remark-html';

export async function renderTodoMarkdown() {
  const filePath = path.join(process.cwd(), 'TODO.md');
  const md = await readFile(filePath, 'utf8');
  const processed = await remark().use(html).process(md);
  return String(processed);
}
