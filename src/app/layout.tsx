import type { Metadata } from 'next';
import { CursorProvider } from '@/cursor-context';
import { Cursor, Drawer } from '@/components';
import { DocsProvider } from '@/docs-context';
import { DrawerProvider } from '@/drawer-context';
import { ViewfinderProvider } from '@/viewfinder-context';
import { fontsClassname } from './fonts';
import './globals.css';
import '../components/docs/markdown.css';

export const metadata: Metadata = {
  title: 'Ross Libby',
  description: 'Staff Software Engineer',
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
              <DrawerProvider>
                {children}
                <Drawer />
                <Cursor />
              </DrawerProvider>
            </DocsProvider>
          </ViewfinderProvider>
        </body>
      </CursorProvider>
    </html>
  );
}
