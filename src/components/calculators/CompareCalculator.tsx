'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, AlertCircle, CheckCircle, Crown, User } from 'lucide-react'
import { apiClient, CompareRequest, CompareResponse, Progenitor, ApiError } from '@/lib/api'

export default function CompareCalculator() {
  const [formData, setFormData] = useState<CompareRequest>({
    progenitor_1: {
      name: '',
      pension_amount: 0,
      start_date: '',
      num_children: 1,
      pension_type: 'jubilacion'
    },
    progenitor_2: {
      name: '',
      pension_amount: 0,
      start_date: '',
      num_children: 1,
      pension_type: 'jubilacion'
    }
  })
  const [result, setResult] = useState<CompareResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await apiClient.compareProgenitors(formData)
      setResult(response)
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message)
      } else {
        setError('Error inesperado. Inténtalo de nuevo.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (
    progenitor: 'progenitor_1' | 'progenitor_2',
    field: keyof Progenitor,
    value: string | number
  ) => {
    setFormData(prev => ({
      ...prev,
      [progenitor]: {
        ...prev[progenitor],
        [field]: value
      }
    }))
  }

  const renderProgenitorForm = (
    progenitor: 'progenitor_1' | 'progenitor_2',
    title: string,
    colorClass: string
  ) => (
    <div className={`bg-dark-800/50 border-2 border-legal-gold/20 rounded-lg p-6`}>
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
        <User className="w-5 h-5 text-legal-gold" />
        <span>{title}</span>
      </h4>
      
      <div className="space-y-4">
        <div>
          <label htmlFor={`${progenitor}_name`} className="block text-sm font-medium text-white mb-2">
            Nombre
          </label>
          <input
            type="text"
            id={`${progenitor}_name`}
            value={formData[progenitor].name}
            onChange={(e) => handleInputChange(progenitor, 'name', e.target.value)}
            className="input-legal"
            placeholder="Nombre del progenitor"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${progenitor}_pension_type`} className="block text-sm font-medium text-white mb-2">
              Tipo de Pensión
            </label>
            <select
              id={`${progenitor}_pension_type`}
              value={formData[progenitor].pension_type}
              onChange={(e) => handleInputChange(progenitor, 'pension_type', e.target.value as 'jubilacion' | 'incapacidad' | 'viudedad')}
              className="input-legal"
              required
            >
              <option value="jubilacion">Jubilación</option>
              <option value="incapacidad">Incapacidad</option>
              <option value="viudedad">Viudedad</option>
            </select>
          </div>

          <div>
            <label htmlFor={`${progenitor}_num_children`} className="block text-sm font-medium text-white mb-2">
              Número de Hijos
            </label>
            <input
              type="number"
              id={`${progenitor}_num_children`}
              min="1"
              max="10"
              value={formData[progenitor].num_children}
              onChange={(e) => handleInputChange(progenitor, 'num_children', parseInt(e.target.value))}
              className="input-legal"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${progenitor}_start_date`} className="block text-sm font-medium text-white mb-2">
              Fecha de Inicio de la Pensión
            </label>
            <input
              type="date"
              id={`${progenitor}_start_date`}
              value={formData[progenitor].start_date}
              onChange={(e) => handleInputChange(progenitor, 'start_date', e.target.value)}
              className="input-legal"
              required
            />
          </div>

          <div>
            <label htmlFor={`${progenitor}_pension_amount`} className="block text-sm font-medium text-white mb-2">
              Importe de la Pensión (€)
            </label>
            <input
              type="number"
              id={`${progenitor}_pension_amount`}
              min="0"
              step="0.01"
              value={formData[progenitor].pension_amount}
              onChange={(e) => handleInputChange(progenitor, 'pension_amount', parseFloat(e.target.value))}
              className="input-legal"
              placeholder="Ejemplo: 1200.50"
              required
            />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-legal-gold/10 border border-legal-gold/20 rounded-lg mb-4">
          <Users className="w-6 h-6 text-legal-gold" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Comparador de Progenitores
        </h3>
        <p className="text-dark-300">
          Determina cuál de los progenitores tiene derecho al complemento
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderProgenitorForm('progenitor_1', 'Primer Progenitor', '')}
          {renderProgenitorForm('progenitor_2', 'Segundo Progenitor', '')}
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Comparando...' : 'Comparar Progenitores'}
        </motion.button>
      </form>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start space-x-3"
        >
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-red-400">Error en la comparación</h4>
            <p className="text-sm text-red-300 mt-1">{error}</p>
          </div>
        </motion.div>
      )}

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-success-500/10 border border-success-500/20 rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="w-6 h-6 text-success-500" />
            <h4 className="text-lg font-semibold text-success-400">Resultado de la Comparación</h4>
          </div>

          <div className="mb-6 p-4 bg-dark-800/50 border border-legal-gold/20 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="w-6 h-6 text-legal-gold" />
              <span className="text-lg font-semibold text-white">Progenitor con Derecho:</span>
            </div>
            <p className="text-2xl font-bold text-legal-gold">
              {result.eligible_progenitor}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className={`bg-dark-700/50 rounded-lg p-4 border-2 ${
              result.progenitor_1.eligible ? 'border-legal-gold bg-legal-gold/10' : 'border-dark-600'
            }`}>
              <h5 className="font-semibold text-white mb-3 flex items-center space-x-2">
                <User className="w-5 h-5 text-legal-gold" />
                <span>{result.progenitor_1.name}</span>
                {result.progenitor_1.eligible && <Crown className="w-4 h-4 text-legal-gold" />}
              </h5>
              
              <div className="space-y-2">
                <p className="text-sm text-dark-200">
                  <span className="font-medium">Elegible:</span> 
                  <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                    result.progenitor_1.eligible 
                      ? 'bg-success-500/20 text-success-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {result.progenitor_1.eligible ? 'Sí' : 'No'}
                  </span>
                </p>
                
                {result.progenitor_1.complement_amount && (
                  <p className="text-sm text-dark-200">
                    <span className="font-medium">Complemento:</span> 
                    <span className="ml-2 font-bold text-legal-gold">
                      {result.progenitor_1.complement_amount.toFixed(2)} €
                    </span>
                  </p>
                )}
                
                {result.progenitor_1.total_pension && (
                  <p className="text-sm text-dark-200">
                    <span className="font-medium">Pensión Total:</span> 
                    <span className="ml-2 font-bold text-white">
                      {result.progenitor_1.total_pension.toFixed(2)} €
                    </span>
                  </p>
                )}
              </div>
            </div>

            <div className={`bg-dark-700/50 rounded-lg p-4 border-2 ${
              result.progenitor_2.eligible ? 'border-legal-gold bg-legal-gold/10' : 'border-dark-600'
            }`}>
              <h5 className="font-semibold text-white mb-3 flex items-center space-x-2">
                <User className="w-5 h-5 text-legal-gold" />
                <span>{result.progenitor_2.name}</span>
                {result.progenitor_2.eligible && <Crown className="w-4 h-4 text-legal-gold" />}
              </h5>
              
              <div className="space-y-2">
                <p className="text-sm text-dark-200">
                  <span className="font-medium">Elegible:</span> 
                  <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${
                    result.progenitor_2.eligible 
                      ? 'bg-success-500/20 text-success-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {result.progenitor_2.eligible ? 'Sí' : 'No'}
                  </span>
                </p>
                
                {result.progenitor_2.complement_amount && (
                  <p className="text-sm text-dark-200">
                    <span className="font-medium">Complemento:</span> 
                    <span className="ml-2 font-bold text-legal-gold">
                      {result.progenitor_2.complement_amount.toFixed(2)} €
                    </span>
                  </p>
                )}
                
                {result.progenitor_2.total_pension && (
                  <p className="text-sm text-dark-200">
                    <span className="font-medium">Pensión Total:</span> 
                    <span className="ml-2 font-bold text-white">
                      {result.progenitor_2.total_pension.toFixed(2)} €
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-legal-gold/10 border border-legal-gold/20 rounded-lg p-4">
            <h5 className="font-semibold text-legal-gold mb-2">Explicación:</h5>
            <p className="text-sm text-legal-gold">{result.explanation}</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}