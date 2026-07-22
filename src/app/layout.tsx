import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Sai Deexith — Full-Stack Engineer · AI & Backend Systems',
  description:
    'Full-Stack Engineer building production backend microservices, AI chatbots with payments, and autonomous AI agents. Currently at Jaagruk Bharat, creator of JobAgent.',
  keywords: [
    'full stack engineer',
    'backend engineer',
    'AI builder',
    'software engineer',
    'microservices',
    'Next.js',
    'TypeScript',
    'Sai Deexith',
  ],
  authors: [{ name: 'Sai Deexith Musham' }],
  openGraph: {
    title: 'Sai Deexith — Full-Stack Engineer · AI & Backend Systems',
    description:
      'Building production backend microservices, AI chatbots with payments, and autonomous AI agents.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans bg-paper text-ink antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
