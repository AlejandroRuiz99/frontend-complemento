'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, Search, TrendingUp, Users, ArrowRight } from 'lucide-react'
import EligibilityCalculator from './calculators/EligibilityCalculator'
import ComplementCalculator from './calculators/ComplementCalculator'
import RetroactiveCalculator from './calculators/RetroactiveCalculator'
import CompareCalculator from './calculators/CompareCalculator'

interface CalculatorSectionProps {
  apiStatus: 'checking' | 'connected' | 'error'
}

export default function CalculatorSection({ apiStatus }: CalculatorSectionProps) {
  const [activeTab, setActiveTab] = useState('eligibility')

  const calculators = [
    {
      id: 'eligibility',
      name: 'Verificar Elegibilidad',
      icon: Search,
      description: 'Comprueba si cumples los criterios básicos',
      component: EligibilityCalculator
    },
    {
      id: 'complement',
      name: 'Calcular Complemento',
      icon: Calculator,
      description: 'Calcula el importe exacto del complemento',
      component: ComplementCalculator
    },
    {
      id: 'retroactive',
      name: 'Calcular Atrasos',
      icon: TrendingUp,
      description: 'Calcula atrasos acumulados entre fechas',
      component: RetroactiveCalculator
    },
    {
      id: 'compare',
      name: 'Comparar Progenitores',
      icon: Users,
      description: 'Determina quién tiene derecho al complemento',
      component: CompareCalculator
    }
  ]

  const activeCalculator = calculators.find(calc => calc.id === activeTab)

  if (apiStatus === 'error') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-legal text-center max-w-2xl mx-auto"
      >
        <div className="text-red-400 mb-4">
          <Calculator className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Servicio No Disponible</h3>
          <p className="text-dark-300 mb-6">
            No se puede conectar con el servicio de cálculo. Por favor, inténtalo más tarde.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-secondary"
          >
            Reintentar Conexión
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Calculator Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {calculators.map((calculator, index) => (
          <motion.button
            key={calculator.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setActiveTab(calculator.id)}
            className={`p-6 rounded-xl border transition-all duration-300 text-left group ${
              activeTab === calculator.id
                ? 'bg-legal-gold text-dark-900 border-legal-gold shadow-gold'
                : 'bg-dark-800 text-white border-dark-600 hover:border-legal-gold hover:bg-dark-700'
            }`}
          >
            <div className="flex items-center mb-3">
              <calculator.icon 
                className={`w-6 h-6 mr-3 ${
                  activeTab === calculator.id ? 'text-dark-900' : 'text-legal-gold'
                }`}
              />
              <ArrowRight 
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeTab === calculator.id 
                    ? 'text-dark-900 translate-x-1' 
                    : 'text-dark-400 group-hover:translate-x-1 group-hover:text-legal-gold'
                }`}
              />
            </div>
            <h3 className={`font-semibold mb-2 ${
              activeTab === calculator.id ? 'text-dark-900' : 'text-white'
            }`}>
              {calculator.name}
            </h3>
            <p className={`text-sm ${
              activeTab === calculator.id ? 'text-dark-700' : 'text-dark-300'
            }`}>
              {calculator.description}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Calculator Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="card-legal"
      >
        <AnimatePresence mode="wait">
          {activeCalculator && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-legal-gold/10 border border-legal-gold/20 rounded-lg mr-4">
                  <activeCalculator.icon className="w-6 h-6 text-legal-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {activeCalculator.name}
                  </h3>
                  <p className="text-dark-300">
                    {activeCalculator.description}
                  </p>
                </div>
              </div>
              
              <activeCalculator.component />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 p-6 bg-dark-800/50 border border-dark-700 rounded-xl"
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-legal-gold/20 flex items-center justify-center mt-0.5">
            <span className="text-legal-gold text-sm font-bold">!</span>
          </div>
          <div className="text-sm text-dark-300">
            <p className="font-medium text-white mb-2">Aviso Legal</p>
            <p>
              Los resultados proporcionados por esta calculadora tienen carácter orientativo y se basan 
              en la normativa vigente. Para casos específicos o situaciones complejas, recomendamos 
              consultar con un profesional del derecho especializado en Seguridad Social.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}