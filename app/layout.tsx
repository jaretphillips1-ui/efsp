import Link from "next/link";

export const metadata = {
  title: "EFSP",
  description: "Elite Fishing Series Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, Arial, sans-serif", margin: 0 }}>
        <nav style={{ padding: "16px", background: "#f0f0f0" }}>
          <Link href="/" style={{ marginRight: 16 }}>Home</Link>
          <Link href="/tournaments" style={{ marginRight: 16 }}>Tournaments</Link>
          <Link href="/sponsors" style={{ marginRight: 16 }}>Sponsors</Link>
          <Link href="/rules">Rules</Link>
        </nav>
        <main style={{ padding: "32px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
