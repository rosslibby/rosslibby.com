import type { Metadata } from 'next';
import { CursorProvider } from '@/cursor-context';
import { Cursor, Footer, Header } from '@/components';
import { DocsProvider } from '@/docs-context';
import { ViewfinderProvider } from '@/viewfinder-context';
import { fontsClassname } from './fonts';
import Head from 'next/head';
import styles from './template.module.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ross Libby',
  description: 'Staff Software Engineer',
  icons: {
    icon: [
      { url: '/rosslibbycom-logo-bold-outline-bordered.svg' },
      { url: '/rosslibbycom-logo-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/rosslibbycom-logo-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/rosslibbycom-logo-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/rosslibbycom-logo-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/rosslibbycom-logo-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <Head>
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.svg"
          type="image/svg"
        />
      </Head>
      <CursorProvider>
        <body className={[
          fontsClassname,
          styles.layout,
        ].join(' ')}>
          <ViewfinderProvider>
            <DocsProvider>
              <Header />
              {children}
              <Footer />
              <Cursor />
            </DocsProvider>
          </ViewfinderProvider>
        </body>
      </CursorProvider>
    </html>
  );
}
