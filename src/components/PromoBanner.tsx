'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, ExternalLink, ArrowRight } from 'lucide-react'

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const bannerDismissed = sessionStorage.getItem('promoBannerDismissed')
    if (bannerDismissed) {
      setIsVisible(false)
    }
  }, [])

  useEffect(() => {
    if (isMounted) {
      const updateBannerHeight = () => {
        const isDesktop = window.innerWidth >= 640
        document.documentElement.style.setProperty(
          '--promo-banner-height', 
          isVisible && isDesktop ? '48px' : '0px'
        )
      }
      
      updateBannerHeight()
      window.addEventListener('resize', updateBannerHeight)
      return () => window.removeEventListener('resize', updateBannerHeight)
    }
  }, [isVisible, isMounted])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem('promoBannerDismissed', 'true')
  }

  if (!isMounted || !isVisible) return null

  return (
    <>
      {/* Spacer para móvil (banner debajo del header) */}
      <div className="sm:hidden h-[138px]" />
      {/* Spacer para desktop */}
      <div className="hidden sm:block h-12" />
      
      <AnimatePresence>
        {isVisible && (
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed left-0 right-0 overflow-hidden
                       top-[96px] z-40
                       sm:top-0 sm:z-[60]"
          >
            <a 
              href="https://simularpension.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-b border-legal-gold/30 hover:from-amber-900 hover:via-amber-800 hover:to-amber-900 transition-colors"
            >
              {/* Efecto de brillo */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-legal-gold/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              <div className="relative container-legal py-2 px-4 pr-10">
                {/* Móvil: Layout compacto */}
                <div className="flex sm:hidden items-center justify-center gap-2 text-center">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-legal-gold text-dark-900 text-[10px] font-bold uppercase rounded-full">
                    <Sparkles className="w-2.5 h-2.5" />
                    Nuevo
                  </span>
                  <span className="text-white text-xs">
                    Simulador de pensiones · <span className="text-legal-gold-bright font-semibold">24/48h · &lt;30€</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-legal-gold" />
                </div>

                {/* Desktop: Layout completo */}
                <div className="hidden sm:flex items-center justify-center gap-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-legal-gold text-dark-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    Novedad
                  </span>
                  
                  <span className="text-white text-base font-medium">
                    <span className="text-legal-gold-bright">¡Prueba nuestro nuevo simulador de pensiones!</span>
                    {' '}· Informe especializado en 24/48h por menos de 30€
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-dark-900/80 text-legal-gold border border-legal-gold/50 text-sm font-semibold rounded-lg">
                    Descubrir
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </a>

            {/* Botón cerrar */}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleDismiss()
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 text-amber-200/60 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-200 z-10"
              aria-label="Cerrar banner"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
