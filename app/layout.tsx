import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'

// DM Sans: a friendly, rounded sans for body text and labels.
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
// Fraunces: a soft, warm serif for headings ("SOFT" axis is turned up in globals.css).
const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'opsz'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: {
    default: 'Divya Menon — UX Researcher & Designer',
    template: '%s — Divya Menon',
  },
  description:
    'UX research and design portfolio of Divya Menon, a Carnegie Mellon MHCI student with a background in cognitive science. Follow the path through her case studies.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4efe7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
