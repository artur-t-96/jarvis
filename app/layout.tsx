import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CV Matcher - B2B Network',
  description: 'Inteligentna analiza dopasowania kandydata do stanowiska',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
