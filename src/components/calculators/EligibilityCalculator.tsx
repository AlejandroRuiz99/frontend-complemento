'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, XCircle, Loader2, Info, Calendar, Users, CreditCard } from 'lucide-react'
import { apiClient } from '@/lib/api'

const eligibilitySchema = z.object({
  pensionType: z.enum(['jubilacion', 'incapacidad', 'viudedad'], {
    required_error: 'Selecciona el tipo de pensión'
  }),
  startDate: z.string().min(1, 'La fecha es requerida'),
  numChildren: z.number().min(1, 'Debe tener al menos 1 hijo').max(10, 'Máximo 10 hijos')
})

type EligibilityFormData = z.infer<typeof eligibilitySchema>

interface EligibilityResult {
  eligible: boolean
  period: string | null
  reason: string | null
}

export default function EligibilityCalculator() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<EligibilityResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<EligibilityFormData>({
    resolver: zodResolver(eligibilitySchema),
    defaultValues: {
      pensionType: 'jubilacion',
      startDate: '2020-01-15',
      numChildren: 2
    }
  })

  const pensionType = watch('pensionType')

  const onSubmit = async (data: EligibilityFormData) => {
    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await apiClient.checkEligibility({
        pension_type: data.pensionType,
        start_date: data.startDate,
        num_children: data.numChildren
      })
      setResult(response)
    } catch (err) {
      setError('Error al verificar la elegibilidad. Por favor, inténtalo de nuevo.')
      console.error('Error checking eligibility:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const getPensionTypeInfo = (type: string) => {
    switch (type) {
      case 'jubilacion':
        return {
          description: 'Pensión por cese en la actividad laboral por edad',
          periods: 'Período 1: Solo ordinaria (no anticipada voluntaria) | Período 2: Todas las jubilaciones'
        }
      case 'incapacidad':
        return {
          description: 'Pensión por incapacidad permanente',
          periods: 'Solo válida desde el Período 2 (febrero 2021)'
        }
      case 'viudedad':
        return {
          description: 'Pensión por fallecimiento del cónyuge',
          periods: 'Solo válida desde el Período 2 (febrero 2021)'
        }
      default:
        return { description: '', periods: '' }
    }
  }

  const pensionInfo = getPensionTypeInfo(pensionType)

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Tipo de Pensión */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            <CreditCard className="w-4 h-4 inline mr-2" />
            Tipo de Pensión
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { value: 'jubilacion', label: 'Jubilación', recommended: true },
              { value: 'incapacidad', label: 'Incapacidad' },
              { value: 'viudedad', label: 'Viudedad' }
            ].map((option) => (
              <label
                key={option.value}
                className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                  pensionType === option.value
                    ? 'border-legal-gold bg-legal-gold/10'
                    : 'border-dark-600 hover:border-dark-500'
                }`}
              >
                <input
                  type="radio"
                  value={option.value}
                  {...register('pensionType')}
                  className="sr-only"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="text-white font-medium">{option.label}</span>
                    {option.recommended && (
                      <span className="ml-2 px-2 py-1 text-xs bg-legal-gold text-dark-900 rounded-full">
                        Recomendado
                      </span>
                    )}
                    {option.warning && (
                      <span className="ml-2 px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                        No elegible
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                    pensionType === option.value
                      ? 'border-legal-gold'
                      : 'border-dark-400'
                  }`}
                >
                  {pensionType === option.value && (
                    <div className="w-2 h-2 bg-legal-gold rounded-full" />
                  )}
                </div>
              </label>
            ))}
          </div>
          {errors.pensionType && (
            <p className="mt-2 text-sm text-red-400">{errors.pensionType.message}</p>
          )}
          
          {/* Información del tipo de pensión */}
          {pensionInfo.description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 p-3 bg-dark-700/50 border border-dark-600 rounded-lg"
            >
              <div className="flex items-start space-x-2">
                <Info className="w-4 h-4 text-legal-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-dark-200">
                  <p className="font-medium">{pensionInfo.description}</p>
                  <p className="mt-1 text-dark-300">{pensionInfo.periods}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fecha de Inicio */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Fecha de Inicio de la Pensión
            </label>
            <input
              type="date"
              {...register('startDate')}
              className="input-legal"
              min="2016-01-01"
              max={new Date().toISOString().split('T')[0]}
            />
            {errors.startDate && (
              <p className="mt-1 text-sm text-red-400">{errors.startDate.message}</p>
            )}
            <p className="mt-1 text-xs text-dark-400">
              Fecha en que comenzaste a recibir la pensión
            </p>
          </div>

          {/* Número de Hijos */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              <Users className="w-4 h-4 inline mr-2" />
              Número de Hijos
            </label>
            <input
              type="number"
              {...register('numChildren', { valueAsNumber: true })}
              className="input-legal"
              min="1"
              max="10"
              placeholder="2"
            />
            {errors.numChildren && (
              <p className="mt-1 text-sm text-red-400">{errors.numChildren.message}</p>
            )}
            <p className="mt-1 text-xs text-dark-400">
              Número total de hijos (máximo 4 para el cálculo)
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verificando...</span>
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4" />
              <span>Verificar Elegibilidad</span>
            </>
          )}
        </button>
      </form>

      {/* Results */}
      {(result || error) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          {error && (
            <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
              <div className="flex items-center space-x-3">
                <XCircle className="w-6 h-6 text-red-400" />
                <div>
                  <h3 className="font-semibold text-red-400">Error</h3>
                  <p className="text-red-300">{error}</p>
                </div>
              </div>
            </div>
          )}

          {result && (
            <div
              className={`p-6 border rounded-xl ${
                result.eligible
                  ? 'bg-success-500/10 border-success-500/20'
                  : 'bg-red-500/10 border-red-500/20'
              }`}
            >
              <div className="flex items-start space-x-3">
                {result.eligible ? (
                  <CheckCircle className="w-6 h-6 text-success-500 mt-0.5" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-400 mt-0.5" />
                )}
                <div className="flex-1">
                  <h3
                    className={`font-semibold mb-2 ${
                      result.eligible ? 'text-success-400' : 'text-red-400'
                    }`}
                  >
                    {result.eligible
                      ? '¡Eres elegible para el complemento!'
                      : 'No eres elegible para el complemento'}
                  </h3>

                  {result.eligible && result.period && (
                    <div className="mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-legal-gold text-dark-900 font-medium">
                        Período {result.period}
                      </span>
                    </div>
                  )}

                  {result.reason && (
                    <p className="text-red-300 mb-3">
                      <strong>Motivo:</strong> {result.reason}
                    </p>
                  )}

                  {result.eligible && result.period && (
                    <div className="p-4 bg-dark-800/50 rounded-lg">
                      <h4 className="font-medium text-white mb-2">
                        Información del Período {result.period}:
                      </h4>
                      {result.period === '1' ? (
                        <ul className="text-sm text-dark-200 space-y-1">
                          <li>• Solo pensiones de jubilación (excepto anticipadas voluntarias)</li>
                          <li>• Cálculo porcentual sobre la pensión</li>
                          <li>• 2 hijos → 5%, 3 hijos → 10%, ≥4 hijos → 15%</li>
                        </ul>
                      ) : (
                        <ul className="text-sm text-dark-200 space-y-1">
                          <li>• Todas las jubilaciones, incapacidad y viudedad</li>
                          <li>• Importe fijo: 35,90€ por hijo (máximo 4)</li>
                          <li>• Solo un complemento si hay derecho a ambos períodos</li>
                        </ul>
                      )}
                    </div>
                  )}

                  {result.eligible && (
                    <div className="mt-4">
                      <p className="text-success-300 text-sm mb-3">
                        ¡Perfecto! Ahora puedes calcular el importe exacto del complemento.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}