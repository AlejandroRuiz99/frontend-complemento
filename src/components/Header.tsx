'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Scale, Calculator } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Calculadora', href: '#calculadora' },
    { name: 'Información', href: '#informacion' },
    { name: 'Períodos', href: '#periodos' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-dark-800">
      <nav className="container-legal">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-lg overflow-hidden">
              <img 
                src="/images/logos/complete_logo.png" 
                alt="Compromiso Legal"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-legal-gray-text">
                Compromiso Legal
              </h1>
              <p className="text-xs text-legal-gold uppercase tracking-wider">
                Complemento de Paternidad
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-legal-gray-light hover:text-legal-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#calculadora"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="btn-primary flex items-center space-x-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Calcular</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-200 hover:text-legal-gold transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-dark-700">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-dark-200 hover:text-legal-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#calculadora"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary flex items-center justify-center space-x-2 w-full"
            >
              <Calculator className="w-4 h-4" />
              <span>Calcular</span>
            </a>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}