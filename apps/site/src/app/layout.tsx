import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Script from 'next/script';
import { Header, Footer } from '~/components/layout';

import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const MAP_API_KEY = process.env.MAP_API_KEY;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className="text-base font-normal text-[#2F2F2F]"
        style={manrope.style}
      >
        <Header />
        <section>nav</section>
        {children}
        <Footer />

        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <Script
          src={`https://api-maps.yandex.ru/3.0/?apikey=${MAP_API_KEY}&lang=ru_RU`}
          type="module"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}