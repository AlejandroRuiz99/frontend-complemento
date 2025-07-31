/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada basada en la imagen del usuario
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308', // Amarillo/dorado principal
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        dark: {
          50: '#f9f9f9',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#2a2a2a',
          800: '#1a1a1a', // Gris muy oscuro
          900: '#111111', // Casi negro
          950: '#080808', // Negro
        },
        legal: {
          gold: '#d4af37',
          'gold-dark': '#b8941f',
          'gold-light': '#e8c547',
          'gold-bright': '#f2d55c',
          charcoal: '#2a2a2a',
          'charcoal-dark': '#1a1a1a',
          'charcoal-darker': '#111111',
          'charcoal-light': '#525252',
          black: '#000000',
          'gray-light': '#cccccc',
          'gray-text': '#f9f9f9',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#f2d55c',
          400: '#e8c547',
          500: '#d4af37',
          600: '#b8941f',
          700: '#9c7e1a',
          800: '#806814',
          900: '#645210',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e', // Verde para estados exitosos
          600: '#16a34a',
          700: '#15803d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-legal': 'linear-gradient(135deg, #000000 0%, #080808 30%, #111111 70%, #1a1a1a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
        'gradient-accent': 'linear-gradient(135deg, #f2d55c 0%, #d4af37 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #111111 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(17, 17, 17, 0.9) 0%, rgba(26, 26, 26, 0.8) 100%)',
      },
      boxShadow: {
        'legal': '0 10px 35px rgba(0, 0, 0, 0.5)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
        'accent': '0 8px 25px rgba(242, 213, 92, 0.2)',
        'inner-legal': 'inset 0 2px 10px rgba(0, 0, 0, 0.2)',
        'dark': '0 4px 15px rgba(0, 0, 0, 0.8)',
        'card': '0 10px 35px rgba(0, 0, 0, 0.5)',
        'glow-gold': '0 0 20px #d4af37, 0 0 40px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-gold': 'pulseGold 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.7)' 
          },
          '70%': { 
            boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)' 
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}