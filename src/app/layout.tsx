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
  title: 'Calcular Complemento de Paternidad 2025 | Calculadora Oficial GRATIS',
  description: '🔥 Calculadora GRATUITA del complemento de paternidad 2025. Verifica elegibilidad, calcula importe exacto y atrasos. Herramienta oficial española actualizada. ¡Descubre cuánto te corresponde AHORA!',
  keywords: [
    'calcular complemento paternidad',
    'complemento paternidad 2025',
    'calculadora complemento paternidad',
    'como calcular complemento paternidad',
    'complemento paternidad pensión',
    'complemento paternidad seguridad social',
    'calcular atrasos complemento paternidad',
    'complemento paternidad requisitos',
    'complemento paternidad importe',
    'pensión complemento hijos',
    'calcular pensión paternidad',
    'derecho complemento paternidad',
    'solicitar complemento paternidad',
    'período 1 complemento paternidad',
    'período 2 complemento paternidad'
  ].join(', '),
  authors: [{ name: 'Compromiso Legal - Abogados Especialistas', url: 'https://compromisolegal.es' }],
  creator: 'Compromiso Legal',
  publisher: 'Compromiso Legal',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://calcularcomplemento.com'
  },
  openGraph: {
    title: 'Calcular Complemento de Paternidad 2025 | Calculadora Oficial GRATIS',
    description: '🔥 Calculadora GRATUITA del complemento de paternidad 2025. Verifica elegibilidad, calcula importe exacto y atrasos. ¡Descubre cuánto te corresponde AHORA!',
    type: 'website',
    locale: 'es_ES',
    url: 'https://calcularcomplemento.com',
    siteName: 'Calcular Complemento - Calculadora Oficial',
    images: [
      {
        url: 'https://calcularcomplemento.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Calculadora del Complemento de Paternidad 2025'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@compromisolegal',
    creator: '@compromisolegal',
    title: 'Calcular Complemento de Paternidad 2025 | Calculadora Oficial GRATIS',
    description: '🔥 Calculadora GRATUITA del complemento de paternidad 2025. Verifica elegibilidad, calcula importe exacto y atrasos. ¡Descubre cuánto te corresponde AHORA!',
    images: ['https://calcularcomplemento.com/og-image.jpg']
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification',
    yahoo: 'yahoo-site-verification'
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  themeColor: '#d4af37',
  category: 'Legal Services',
  classification: 'Business'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Favicon y iconos de aplicación */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d4af37" />
        
        {/* Manifest y configuración de aplicación */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="application-name" content="Calcular Complemento" />
        <meta name="apple-mobile-web-app-title" content="Calcular Complemento" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Microsoft tiles */}
        <meta name="msapplication-TileColor" content="#d4af37" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#d4af37" />
        <meta name="msapplication-navbutton-color" content="#d4af37" />
        
        {/* Preconnect para mejorar velocidad */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://calcularcomplemento.com/#organization",
                  "name": "Compromiso Legal",
                  "url": "https://calcularcomplemento.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://calcularcomplemento.com/images/logos/complete_logo.png",
                    "width": 400,
                    "height": 400
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+34-640-664-875",
                    "contactType": "Customer Service",
                    "areaServed": "ES",
                    "availableLanguage": "Spanish"
                  },
                  "sameAs": [
                    "https://compromisolegal.es"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://calcularcomplemento.com/#website",
                  "url": "https://calcularcomplemento.com",
                  "name": "Calcular Complemento de Paternidad",
                  "description": "Calculadora oficial del complemento de paternidad en España. Verifica elegibilidad y calcula el importe exacto según la normativa vigente.",
                  "publisher": {
                    "@id": "https://calcularcomplemento.com/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://calcularcomplemento.com/?s={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://calcularcomplemento.com/#webpage",
                  "url": "https://calcularcomplemento.com",
                  "name": "Calcular Complemento de Paternidad 2024 | Calculadora Oficial GRATIS",
                  "isPartOf": {
                    "@id": "https://calcularcomplemento.com/#website"
                  },
                  "about": {
                    "@id": "https://calcularcomplemento.com/#organization"
                  },
                  "description": "Calculadora GRATUITA del complemento de paternidad 2024. Verifica elegibilidad, calcula importe exacto y atrasos. Herramienta oficial española actualizada.",
                  "breadcrumb": {
                    "@id": "https://calcularcomplemento.com/#breadcrumb"
                  },
                  "inLanguage": "es-ES"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Calculadora del Complemento de Paternidad",
                  "applicationCategory": "FinanceApplication",
                  "operatingSystem": "Web Browser",
                  "url": "https://calcularcomplemento.com",
                  "author": {
                    "@id": "https://calcularcomplemento.com/#organization"
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock"
                  },
                  "featureList": [
                    "Verificación de elegibilidad",
                    "Cálculo del complemento",
                    "Cálculo de atrasos",
                    "Comparación entre progenitores"
                  ],
                  "screenshot": "https://calcularcomplemento.com/og-image.jpg"
                }
              ]
            })
          }}
        />
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