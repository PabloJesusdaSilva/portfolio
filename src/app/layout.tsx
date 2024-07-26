import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/app/partials/Header';
import Footer from '@/app/partials/Foooter';

import './globals.css';
import { NavProvider } from './context/MenuModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portifóio',
  description: 'My website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <NavProvider>
    <html lang="en" className='bg-zinc-900'>
        <body className={inter.className}>
          <Header />
            <main>
              {children}
            </main>
          <Footer />
        </body>
      </html>
    </NavProvider>
  )
}
