'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Clock, Star, CheckCircle } from 'lucide-react'

export default function TrustSection() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Casos Exitosos",
      description: "Complementos gestionados"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Años",
      description: "De experiencia legal"
    },
    {
      icon: Award,
      number: "100%",
      label: "Dedicación",
      description: "En cada caso"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Garantía",
      description: "En todos nuestros servicios"
    }
  ]

  const benefits = [
    "✅ Asesoramiento jurídico especializado",
    "✅ Gestión completa del trámite",
    "✅ Sin letra pequeña ni costes ocultos", 
    "✅ Seguimiento personalizado del caso",
    "✅ Experiencia demostrada en Seguridad Social",
    "✅ Atención personalizada y profesional"
  ]

  return (
    <section className="section-legal bg-gradient-dark">
      <div className="container-legal">
        {/* Trust Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-legal-gold/10 border border-legal-gold/20 text-legal-gold text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Compromiso Legal - Tu Despacho de Confianza
          </div>
          
          <h2 className="heading-legal mb-6">
            Nos encargamos de{' '}
            <span className="text-legal-gold">todo el proceso</span>
          </h2>
          
          <p className="subheading-legal mx-auto mb-8">
            Desde el cálculo inicial hasta la gestión completa ante la Seguridad Social.
            Tu tranquilidad es nuestra prioridad.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-card backdrop-blur-sm border border-legal-gold/20 rounded-xl p-6 hover:border-legal-gold/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-legal-gold/20 rounded-lg mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-legal-gold" />
              </div>
              <div className="text-3xl font-bold text-legal-gray-text mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-legal-gold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-legal-gray-light">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-legal-gray-text mb-6">
              ¿Por qué elegir Compromiso Legal?
            </h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-legal-gold mt-0.5 flex-shrink-0" />
                  <span className="text-legal-gray-light">{benefit.replace('✅ ', '')}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-legal-gold/10 border border-legal-gold/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Star className="w-5 h-5 text-legal-gold" />
                <span className="font-semibold text-legal-gray-text">Atención Profesional</span>
              </div>
              <p className="text-sm text-legal-gray-light">
                Te asesoramos sobre tus derechos y las mejores opciones para tu caso específico.
              </p>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-card backdrop-blur-sm border border-legal-gold/30 rounded-2xl p-8"
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-legal-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img 
                  src="/images/logos/complete_logo.png" 
                  alt="Compromiso Legal"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="text-xl font-bold text-legal-gray-text mb-2">
                ¿Tienes dudas sobre tu caso?
              </h4>
              <p className="text-legal-gray-light text-sm mb-6">
                Nuestro equipo está aquí para ayudarte. Contacta ahora para 
                recibir asesoramiento profesional.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/34640664875?text=Hola,%20he%20visto%20la%20calculadora%20del%20complemento%20de%20paternidad%20y%20me%20gustaría%20consultar%20mi%20caso%20específico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-200 space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="text-xl">💬</span>
                <span>Consulta por WhatsApp</span>
              </a>
              
              <a
                href="https://compromisolegal.es/contacto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-legal-gold hover:bg-legal-gold-dark text-dark-900 rounded-xl font-semibold transition-all duration-200 space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="text-xl">📅</span>
                <span>Reservar Cita</span>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-legal-gold/20 text-center">
              <p className="text-xs text-legal-gray-light">
                📍 C/Manzanares 35, A - Bolaños de Calatrava, Ciudad Real
              </p>
              <p className="text-xs text-legal-gray-light">
                📞 +34 640 664 875 | ✉️ info@compromisolegal.es
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}