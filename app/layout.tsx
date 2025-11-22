import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans'
});

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
      <body className={`${plusJakartaSans.variable} bg-[#f6f1eb] font-sans text-[#0a0a0a] antialiased`}>{children}</body>
    </html>
  );
}
