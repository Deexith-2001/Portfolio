import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'

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
  title: 'Sai Deexith — Backend Engineer · Full Stack Developer · AI Builder',
  description:
    'Backend Engineer and Full Stack Developer building scalable systems, intelligent applications, and products that solve real-world problems. Currently at Jaagruk Bharat.',
  keywords: [
    'backend engineer',
    'full stack developer',
    'AI builder',
    'software engineer',
    'microservices',
    'Next.js',
    'TypeScript',
    'Sai Deexith',
  ],
  authors: [{ name: 'Sai Deexith Musham' }],
  openGraph: {
    title: 'Sai Deexith — Backend Engineer · AI Builder',
    description:
      'Building scalable systems, intelligent applications, and products that solve real-world problems.',
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
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans bg-[#050505] text-[#ededed] antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <Cursor />
        {children}
      </body>
    </html>
  )
}
