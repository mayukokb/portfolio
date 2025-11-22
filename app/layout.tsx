import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Designer Portfolio - MVP',
  description: 'Clean MVP for a UX / UI & Product Designer portfolio.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
