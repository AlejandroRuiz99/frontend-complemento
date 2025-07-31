import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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
})

export const metadata: Metadata = {
  title: 'Calculadora del Complemento de Paternidad | Compromiso Legal',
  description: 'Calcula tu derecho al complemento de paternidad según la normativa española. Herramienta profesional y precisa para determinar el importe que te corresponde.',
  keywords: 'complemento paternidad, pensión, seguridad social, derechos, abogados, legal',
  authors: [{ name: 'Compromiso Legal' }],
  creator: 'Compromiso Legal',
  publisher: 'Compromiso Legal',
  robots: 'index, follow',
  openGraph: {
    title: 'Calculadora del Complemento de Paternidad',
    description: 'Calcula tu derecho al complemento de paternidad según la normativa española',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Compromiso Legal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora del Complemento de Paternidad',
    description: 'Calcula tu derecho al complemento de paternidad según la normativa española',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#d4af37',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#d4af37" />
        <meta name="theme-color" content="#d4af37" />
      </head>
      <body className="bg-legal-black font-sans antialiased">
        <div className="bg-legal-pattern fixed inset-0 pointer-events-none" />
        <div className="relative z-10 bg-gradient-legal min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}