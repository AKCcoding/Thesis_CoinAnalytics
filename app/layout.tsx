import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CoinMarketProvider } from '@/context/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coin Analytics',
  description: 'Created by Alrae and Co.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CoinMarketProvider>
          {children}
        </CoinMarketProvider>
      </body>
    </html>
  )
}
