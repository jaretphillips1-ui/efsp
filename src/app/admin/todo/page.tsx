import { renderTodoMarkdown } from '@/lib/markdown';

export const dynamic = 'force-static';

export default async function AdminTodoPage() {
  const html = await renderTodoMarkdown();
  return (
    <main style={{ maxWidth: 900, margin: '40px auto', padding: 24 }}>
      <h1>Admin – Master To-Do</h1>
      <p style={{ opacity: 0.7 }}>Source: <code>TODO.md</code> (edit in repo and push to update)</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
