'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CalculatorSection from '@/components/CalculatorSection'
import InfoSection from '@/components/InfoSection'
import TrustSection from '@/components/TrustSection'
import Footer from '@/components/Footer'
import ApiStatus from '@/components/ApiStatus'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  const [apiStatus, setApiStatus] = useState<'checking' | 'connected' | 'error'>('checking')

  return (
    <main className="min-h-screen relative">
      {/* Header */}
      <Header />
      
      {/* API Status */}
      <ApiStatus status={apiStatus} onStatusChange={setApiStatus} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Calculator Section */}
      <section id="calculadora" className="section-legal">
        <div className="container-legal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="heading-legal">
                Calculadora del Complemento de{' '}
                <span className="text-legal-gold">Paternidad</span>
              </h2>
              <p className="subheading-legal mx-auto">
                Herramienta profesional para calcular tu derecho al complemento 
                según la normativa española vigente
              </p>
            </div>
            
            <CalculatorSection apiStatus={apiStatus} />
          </motion.div>
        </div>
      </section>
      
      {/* Information Section */}
      <InfoSection />
      
      {/* Trust Section */}
      <TrustSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating CTA */}
      <FloatingCTA />
    </main>
  )
}