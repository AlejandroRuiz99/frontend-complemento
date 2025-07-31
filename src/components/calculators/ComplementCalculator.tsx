'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, AlertCircle, CheckCircle, Euro } from 'lucide-react'
import { apiClient, CalculationRequest, CalculationResponse, ApiError } from '@/lib/api'

export default function ComplementCalculator() {
  const [formData, setFormData] = useState<CalculationRequest>({
    pension_type: 'jubilacion',
    start_date: '',
    num_children: 1,
    pension_amount: 0
  })
  const [result, setResult] = useState<CalculationResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await apiClient.calculateComplement(formData)
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

  const handleInputChange = (field: keyof CalculationRequest, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
          <Calculator className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Calculadora de Complemento
        </h3>
        <p className="text-gray-600">
          Calcula el importe exacto del complemento de paternidad
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="pension_type" className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Pensión
            </label>
            <select
              id="pension_type"
              value={formData.pension_type}
              onChange={(e) => handleInputChange('pension_type', e.target.value as 'jubilacion' | 'incapacidad' | 'viudedad')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="jubilacion">Jubilación</option>
              <option value="incapacidad">Incapacidad</option>
              <option value="viudedad">Viudedad</option>
            </select>
          </div>

          <div>
            <label htmlFor="num_children" className="block text-sm font-medium text-gray-700 mb-2">
              Número de Hijos
            </label>
            <input
              type="number"
              id="num_children"
              min="1"
              max="10"
              value={formData.num_children}
              onChange={(e) => handleInputChange('num_children', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="start_date" className="block text-sm font-medium text-gray-700 mb-2">
              Fecha de Inicio de la Pensión
            </label>
            <input
              type="date"
              id="start_date"
              value={formData.start_date}
              onChange={(e) => handleInputChange('start_date', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="pension_amount" className="block text-sm font-medium text-gray-700 mb-2">
              Importe de la Pensión (€)
            </label>
            <input
              type="number"
              id="pension_amount"
              min="0"
              step="0.01"
              value={formData.pension_amount}
              onChange={(e) => handleInputChange('pension_amount', parseFloat(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ejemplo: 1200.50"
              required
            />
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Calculando...' : 'Calcular Complemento'}
        </motion.button>
      </form>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3"
        >
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-red-800">Error en el cálculo</h4>
            <p className="text-sm text-red-600 mt-1">{error}</p>
          </div>
        </motion.div>
      )}

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-lg p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h4 className="text-lg font-semibold text-green-800">Resultado del Cálculo</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <Euro className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Complemento de Paternidad</span>
              </div>
              <p className="text-2xl font-bold text-green-600">
                {result.amount.toFixed(2)} €
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Período: {result.period}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <Calculator className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Pensión Total</span>
              </div>
              <p className="text-2xl font-bold text-green-600">
                {result.pension_with_complement.toFixed(2)} €
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Pensión + Complemento
              </p>
            </div>
          </div>

          {result.complement_percent && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Porcentaje aplicado:</strong> {result.complement_percent}%
              </p>
            </div>
          )}

          {result.complement_fixed && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Complemento fijo:</strong> {result.complement_fixed.toFixed(2)} €
              </p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}