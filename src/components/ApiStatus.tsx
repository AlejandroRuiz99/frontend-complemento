'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Loader2, AlertTriangle } from 'lucide-react'
import { apiClient } from '@/lib/api'

interface ApiStatusProps {
  status: 'checking' | 'connected' | 'error'
  onStatusChange: (status: 'checking' | 'connected' | 'error') => void
}

export default function ApiStatus({ status, onStatusChange }: ApiStatusProps) {
  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        await apiClient.checkHealth()
        onStatusChange('connected')
      } catch (error) {
        onStatusChange('error')
      }
    }

    checkApiStatus()
    
    // Check API status every 30 seconds
    const interval = setInterval(checkApiStatus, 30000)
    
    return () => clearInterval(interval)
  }, [onStatusChange])

  const getStatusConfig = () => {
    switch (status) {
      case 'checking':
        return {
          icon: Loader2,
          text: 'Verificando conexión...',
          bgColor: 'bg-yellow-500/10',
          borderColor: 'border-yellow-500/20',
          textColor: 'text-yellow-400',
          iconColor: 'text-yellow-400',
          animate: true
        }
      case 'connected':
        return {
          icon: CheckCircle,
          text: 'Servicio disponible',
          bgColor: 'bg-success-500/10',
          borderColor: 'border-success-500/20',
          textColor: 'text-success-400',
          iconColor: 'text-success-400',
          animate: false
        }
      case 'error':
        return {
          icon: XCircle,
          text: 'Servicio no disponible',
          bgColor: 'bg-red-500/10',
          borderColor: 'border-red-500/20',
          textColor: 'text-red-400',
          iconColor: 'text-red-400',
          animate: false
        }
    }
  }

  const config = getStatusConfig()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-24 right-4 z-40 px-4 py-2 rounded-lg border backdrop-blur-sm ${config.bgColor} ${config.borderColor}`}
    >
      <div className="flex items-center space-x-2">
        <config.icon 
          className={`w-4 h-4 ${config.iconColor} ${config.animate ? 'animate-spin' : ''}`}
        />
        <span className={`text-sm font-medium ${config.textColor}`}>
          {config.text}
        </span>
      </div>
    </motion.div>
  )
}