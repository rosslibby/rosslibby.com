import type { Metadata } from 'next';
import { CursorProvider } from '@/cursor-context';
import { Cursor } from '@/components';
import { DocsProvider } from '@/docs-context';
import { ViewfinderProvider } from '@/viewfinder-context';
import { fontsClassname } from './fonts';
import './globals.css';
// import '../components/docs/markdown.css';

export const metadata: Metadata = {
  title: 'Ross Libby',
  description: 'Staff Software Engineer',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
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
      <CursorProvider>
        <body className={fontsClassname}>
          <ViewfinderProvider>
            <DocsProvider>
              {children}
              <Cursor />
            </DocsProvider>
          </ViewfinderProvider>
        </body>
      </CursorProvider>
    </html>
  );
}
