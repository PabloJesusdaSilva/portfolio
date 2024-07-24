import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/app/providers'; 

import Header from '@/app/partials/Header';
import Footer from '@/app/partials/Foooter';

import './globals.css';

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
    <html lang="en" className='bg-zinc-900'>
      <body className={inter.className}>
        <Header />
          <main className=''>
              {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
