import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Lucas Veloso | Developer',
  description:
    'Portfolio of Lucas Veloso, Frontend Developer specializing in React, Next.js, Node.js and modern web technologies'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logomarca.svg" />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  )
}
