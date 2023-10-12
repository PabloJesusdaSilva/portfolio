import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from './components/Header'
import Footer from './components/Foooter'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
          {children}
        <Footer />
      </body>
    </html>
  )
}
