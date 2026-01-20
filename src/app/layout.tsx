import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Liedente - Clínica Odontológica',
  description: 'Sorrisos saudáveis começam com cuidado de verdade. Clínica odontológica com mais de 24 anos de experiência.',
  icons: {
    icon: '/images/logo_aba.png',
    shortcut: '/images/logo_aba.png',
    apple: '/images/logo_aba.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

