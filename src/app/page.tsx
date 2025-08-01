'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CalculatorSection from '@/components/CalculatorSection'
import InfoSection from '@/components/InfoSection'
import TrustSection from '@/components/TrustSection'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ApiStatus from '@/components/ApiStatus'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  const [apiStatus, setApiStatus] = useState<'checking' | 'connected' | 'error'>('checking')

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://calcularcomplemento.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Calculadora",
                "item": "https://calcularcomplemento.com#calculadora"
              }
            ]
          })
        }}
      />
      
      <main className="min-h-screen relative" itemScope itemType="https://schema.org/WebPage">
        {/* Header */}
        <Header />
        
        {/* API Status */}
        <ApiStatus status={apiStatus} onStatusChange={setApiStatus} />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Calculator Section */}
        <section 
          id="calculadora" 
          className="section-legal section-with-header-offset"
          itemScope 
          itemType="https://schema.org/SoftwareApplication"
        >
          <div className="container-legal">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="heading-legal" itemProp="name">
                  Calculadora del Complemento de{' '}
                  <span className="text-legal-gold">Paternidad</span>
                </h2>
                <p className="subheading-legal mx-auto" itemProp="description">
                  Herramienta profesional para calcular tu derecho al complemento 
                  según la normativa española vigente
                </p>
              </div>
              
              <div itemProp="applicationCategory" content="FinanceApplication" style={{display: 'none'}} />
              <div itemProp="operatingSystem" content="Web Browser" style={{display: 'none'}} />
              <div itemProp="price" content="0" style={{display: 'none'}} />
              <div itemProp="priceCurrency" content="EUR" style={{display: 'none'}} />
              
              <CalculatorSection apiStatus={apiStatus} />
            </motion.div>
          </div>
        </section>
        
        {/* Information Section */}
        <section 
          id="informacion" 
          itemScope 
          itemType="https://schema.org/AboutPage"
          aria-label="Información sobre el complemento de paternidad"
        >
          <InfoSection />
        </section>
        
        {/* Trust Section */}
        <section 
          id="confianza" 
          itemScope 
          itemType="https://schema.org/Review"
          aria-label="Información de confianza y garantías"
        >
          <TrustSection />
        </section>
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Footer */}
        <Footer />
        
        {/* Floating CTA */}
        <FloatingCTA />
      </main>
    </>
  )
}