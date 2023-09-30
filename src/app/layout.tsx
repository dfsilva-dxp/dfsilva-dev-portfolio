import type { Metadata } from 'next';
import Head from 'next/head';
import { Roboto } from 'next/font/google';

import { Providers } from './providers';

import StyledComponentsRegistry from '@/lib/registry';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Daniel Silva • Sênior Front-End Developer',
  description: 'Desenvolver se tornou um hobby favorito!'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>Daniel Silva &bull; Sênior Front-End Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="manifest" href="/manifest.json" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dfsilva.dev" />

        <meta
          name="keywords"
          content="front-end, desenvolvedor front-end, front end, daniel silva front end, dfsilva front end, daniel silva, dfsilva, dev, dev front-end, desenvolver sites, programação de sites, portfolio"
        />

        <link
          rel="shortcut icon"
          href="/img/icon/icon-512.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/img/icon/icon-512.png"
          type="image/x-icon"
        />
      </Head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
