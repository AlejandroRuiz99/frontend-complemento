'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Calendar } from 'lucide-react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Aparece después de 3 segundos

    return () => clearTimeout(timer)
  }, [])

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, scale: 0, x: 20, y: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {!isExpanded ? (
          // Botón flotante compacto
          <motion.button
            onClick={handleToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 animate-pulse"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="hidden sm:inline font-medium">Consulta Gratis</span>
          </motion.button>
        ) : (
          // Tarjeta expandida
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-card backdrop-blur-sm border border-legal-gold/20 rounded-2xl p-6 shadow-2xl max-w-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-legal-gray-text mb-1">
                  💼 Consulta Profesional
                </h3>
                <p className="text-sm text-legal-gray-light">
                  Te ayudamos con todo el proceso
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-legal-gray-light hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/34640664875?text=Hola,%20necesito%20asesoramiento%20sobre%20el%20complemento%20de%20paternidad.%20¿Podrían%20ayudarme?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 space-x-2"
                onClick={handleClose}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Directo</span>
              </a>
              
              <a
                href="https://compromisolegal.es/contacto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-legal-gold hover:bg-legal-gold-dark text-dark-900 rounded-lg font-medium transition-colors duration-200 space-x-2"
                onClick={handleClose}
              >
                <Calendar className="w-5 h-5" />
                <span>Reservar Cita</span>
              </a>

              <div className="text-center pt-2">
                <p className="text-xs text-legal-gray-light">
                  📍 Bolaños de Calatrava, Ciudad Real
                </p>
                <p className="text-xs text-legal-gray-light">
                  📞 +34 640 664 875
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-legal-gold/20">
              <button
                onClick={handleToggle}
                className="text-sm text-legal-gold hover:text-legal-gold-light transition-colors"
              >
                Minimizar
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}