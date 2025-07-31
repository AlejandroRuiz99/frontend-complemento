// API client for the Complemento de Paternidad API

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://complemento-paternidad-api-5a322243d340.herokuapp.com'

export interface EligibilityRequest {
  pension_type: 'jubilacion' | 'incapacidad' | 'viudedad'
  start_date: string
  num_children: number
}

export interface EligibilityResponse {
  eligible: boolean
  period: string | null
  reason: string | null
}

export interface CalculationRequest {
  pension_type: 'jubilacion' | 'incapacidad' | 'viudedad'
  start_date: string
  num_children: number
  pension_amount: number
}

export interface CalculationResponse {
  period: string
  complement_percent?: number
  complement_fixed?: number
  amount: number
  pension_with_complement: number
}

export interface RetroactiveRequest {
  start_date: string
  end_date: string
  pension_amount: number
  num_children: number
}

export interface RetroactiveResponse {
  total_amount: number
  months_calculated: number
  period_1_amount?: number
  period_2_amount?: number
}

export interface Progenitor {
  name: string
  pension_amount: number
  start_date: string
  num_children: number
  pension_type: 'jubilacion' | 'incapacidad' | 'viudedad'
}

export interface CompareRequest {
  progenitor_1: Progenitor
  progenitor_2: Progenitor
}

export interface CompareResult {
  name: string
  eligible: boolean
  complement_amount?: number
  total_pension?: number
}

export interface CompareResponse {
  eligible_progenitor: string
  progenitor_1: CompareResult
  progenitor_2: CompareResult
  explanation: string
}

export interface HealthResponse {
  status: string
  timestamp: string
  version: string
}

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = 'ApiError'
  }
}

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    })

    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}: ${response.statusText}`
      
      try {
        const errorData = await response.json()
        if (errorData.detail) {
          if (Array.isArray(errorData.detail)) {
            errorMessage = errorData.detail.map((e: any) => e.msg).join(', ')
          } else {
            errorMessage = errorData.detail
          }
        } else if (errorData.message) {
          errorMessage = errorData.message
        }
      } catch {
        // Use default error message if JSON parsing fails
      }
      
      throw new ApiError(response.status, errorMessage)
    }

    return await response.json()
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    
    // Network error or other issues
    throw new ApiError(0, 'Error de conexión con el servidor. Verifica tu conexión a internet.')
  }
}

export const apiClient = {
  async checkHealth(): Promise<HealthResponse> {
    return fetchApi('/health')
  },

  async checkEligibility(request: EligibilityRequest): Promise<EligibilityResponse> {
    const params = new URLSearchParams({
      pension_type: request.pension_type,
      start_date: request.start_date,
      num_children: request.num_children.toString(),
    })
    
    return fetchApi(`/eligibility?${params}`)
  },

  async calculateComplement(request: CalculationRequest): Promise<CalculationResponse> {
    return fetchApi('/calculate', {
      method: 'POST',
      body: JSON.stringify(request),
    })
  },

  async calculateRetroactive(request: RetroactiveRequest): Promise<RetroactiveResponse> {
    const params = new URLSearchParams({
      start_date: request.start_date,
      end_date: request.end_date,
      pension_amount: request.pension_amount.toString(),
      num_children: request.num_children.toString(),
    })
    
    return fetchApi(`/retroactive?${params}`)
  },

  async compareProgenitors(request: CompareRequest): Promise<CompareResponse> {
    return fetchApi('/compare', {
      method: 'POST',
      body: JSON.stringify(request),
    })
  },
}

export { ApiError }