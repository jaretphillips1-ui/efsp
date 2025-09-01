export const metadata = { title: "EFSP", description: "Elite Fishing Series Platform" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, Arial, sans-serif" }}>{children}</body>
    </html>
  );
}
