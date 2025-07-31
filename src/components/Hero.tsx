'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Shield, CheckCircle, Users, MessageCircle, Calendar, ExternalLink } from 'lucide-react'

export default function Hero() {
  const features = [
    {
      icon: Shield,
      title: 'Cálculo Preciso',
      description: 'Basado en la normativa oficial española'
    },
    {
      icon: CheckCircle,
      title: 'Resultados Inmediatos',
      description: 'Obtén tu resultado en segundos'
    },
    {
      icon: Users,
      title: 'Asesoramiento Legal',
      description: 'Respaldado por profesionales del derecho'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 opacity-90" />
      
      <div className="relative z-10 container-legal text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-legal-gold/10 border border-legal-gold/20 text-legal-gold text-sm font-medium mb-8"
          >
            <Shield className="w-4 h-4 mr-2" />
            Herramienta Oficial del Complemento de Paternidad
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Calcula tu{' '}
            <span className="text-legal-gold">Complemento</span>
            <br />
            de Paternidad
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Donde empieza la defensa de tus{' '}
            <span className="text-legal-gold font-semibold">derechos</span>.
            Herramienta profesional para determinar el importe que te corresponde
            según la normativa española vigente.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#calculadora"
              className="btn-primary text-lg px-8 py-4 animate-pulse-gold flex items-center space-x-2"
            >
              <Shield className="w-5 h-5" />
              <span>Calcular Mi Complemento</span>
            </a>
            <a
              href="https://compromisolegal.es/contacto/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Reservar Cita</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* WhatsApp and Professional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-card backdrop-blur-sm border border-legal-gold/20 rounded-2xl p-6 mb-16 max-w-2xl mx-auto"
          >
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-legal-gray-text mb-2">
                🏛️ Nos encargamos de tu trámite completo
              </h3>
              <p className="text-legal-gray-light text-sm">
                Desde el cálculo hasta la gestión ante la Seguridad Social
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/34640664875?text=Hola,%20necesito%20información%20sobre%20el%20complemento%20de%20paternidad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://compromisolegal.es/contacto/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-legal-gold hover:bg-legal-gold-dark text-dark-900 rounded-lg font-medium transition-colors duration-200 space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Reservar Cita</span>
              </a>
            </div>
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-legal-gold/10 border border-legal-gold/20 rounded-xl mb-4">
                  <feature.icon className="w-8 h-8 text-legal-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-dark-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-dark-300 pointer-events-none"
          >
            <span className="text-sm mb-2 font-medium tracking-wider">Desliza para empezar</span>
            <ArrowDown className="w-5 h-5 opacity-75" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}