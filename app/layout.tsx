import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '500','700'],
  variable: '--font-libre',
})

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Evently is a platform for event management.',
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}