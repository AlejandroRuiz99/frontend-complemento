# 🍼 Frontend Next.js - Complemento de Paternidad

Frontend moderno y profesional para la API del Complemento de Paternidad, diseñado con la estética legal del despacho **Compromiso Legal**.

## 🎨 Características del Diseño

### Paleta de Colores
- **Dorado/Oro** (`#f59e0b`): Color principal, botones, acentos
- **Negro/Charcoal** (`#0f172a`, `#1e293b`): Fondos y textos principales
- **Blanco**: Textos sobre fondos oscuros
- **Verde** (`#22c55e`): Acciones positivas y confirmaciones

### Estilo Visual
- ✨ **Elegante y profesional** - Diseño legal premium
- 🌙 **Tema oscuro** - Fácil para los ojos
- 📱 **Completamente responsive** - Perfecto en todos los dispositivos
- ⚡ **Animaciones fluidas** - Experiencia de usuario moderna
- 🎯 **Tipografía premium** - Inter + Playfair Display

## 🚀 Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático para mejor desarrollo
- **Tailwind CSS** - Estilos utilitarios optimizados
- **Framer Motion** - Animaciones fluidas y profesionales
- **React Hook Form + Zod** - Validación de formularios robusta
- **Lucide React** - Iconos modernos y consistentes

## 📦 Instalación y Desarrollo

### 1. Instalar dependencias
```bash
cd frontend-nextjs
npm install
```

### 2. Configurar variables de entorno
```bash
# Crear .env.local
echo "NEXT_PUBLIC_API_BASE_URL=https://complemento-paternidad-api-5a322243d340.herokuapp.com" > .env.local
```

### 3. Ejecutar en desarrollo
```bash
npm run dev
```

### 4. Build para producción
```bash
npm run build
npm start
```

## 🌐 Despliegue en Vercel

### Opción 1: Desde GitHub (Recomendado)
1. Sube el código a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Configura la variable de entorno:
   - `NEXT_PUBLIC_API_BASE_URL`: `https://complemento-paternidad-api-5a322243d340.herokuapp.com`
4. ¡Deploy automático!

### Opción 2: Vercel CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variables de entorno
vercel env add NEXT_PUBLIC_API_BASE_URL production
# Valor: https://complemento-paternidad-api-5a322243d340.herokuapp.com
```

## 🧩 Estructura de Componentes

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/
│   ├── Header.tsx         # Navegación principal
│   ├── Hero.tsx          # Sección hero
│   ├── CalculatorSection.tsx  # Contenedor de calculadoras
│   ├── ApiStatus.tsx     # Estado de conexión API
│   ├── InfoSection.tsx   # Información legal
│   ├── Footer.tsx        # Pie de página
│   └── calculators/
│       ├── EligibilityCalculator.tsx    # Verificar elegibilidad
│       ├── ComplementCalculator.tsx     # Calcular complemento
│       ├── RetroactiveCalculator.tsx    # Calcular atrasos
│       └── CompareCalculator.tsx        # Comparar progenitores
└── lib/
    └── api.ts            # Cliente API tipado
```

## 🎯 Funcionalidades

### 🔍 Verificar Elegibilidad
- Formulario intuitivo con validación
- Información contextual por tipo de pensión
- Resultado con explicación detallada

### 💰 Calcular Complemento
- Cálculo preciso del importe mensual
- Desglose por período y método de cálculo
- Visualización clara de resultados

### ⏮️ Calcular Atrasos
- Rango de fechas personalizable
- Desglose por períodos
- Cálculo de totales acumulados

### ⚖️ Comparar Progenitores
- Comparación lado a lado
- Determinación automática del beneficiario
- Explicación legal del resultado

## 🔧 Personalización

### Cambiar Colores
Modifica las variables en `tailwind.config.js`:
```js
colors: {
  legal: {
    gold: '#tu-color',
    'gold-dark': '#tu-color-dark',
    // ...
  }
}
```

### Cambiar Fonts
Actualiza en `src/app/layout.tsx`:
```tsx
const customFont = Your_Font({ 
  subsets: ['latin'],
  variable: '--font-custom'
})
```

### API Endpoint
Cambia la URL en `.env.local`:
```bash
NEXT_PUBLIC_API_BASE_URL=https://tu-api.herokuapp.com
```

## 📱 Responsive Design

- **Mobile First**: Diseñado primero para móvil
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botones y áreas de toque optimizadas
- **Performance**: Carga rápida en conexiones lentas

## 🔒 Características de Seguridad

- **Validación de formularios** con Zod
- **Sanitización de inputs** automática
- **Error handling** robusto
- **HTTPS** obligatorio en producción

## 📊 Optimizaciones

- **Code Splitting** automático con Next.js
- **Image Optimization** con Next.js Image
- **Font Optimization** con Google Fonts
- **Bundle Analysis** con `@next/bundle-analyzer`

## 🆘 Troubleshooting

### Error de conexión API
```bash
# Verificar API
curl https://complemento-paternidad-api-5a322243d340.herokuapp.com/health

# Verificar variable de entorno
echo $NEXT_PUBLIC_API_BASE_URL
```

### Build errors
```bash
# Limpiar cache
rm -rf .next
npm run build
```

### Styling issues
```bash
# Regenerar Tailwind
npx tailwindcss -i ./src/app/globals.css -o ./dist/output.css --watch
```

## 📞 Soporte

Para problemas específicos:
1. Verificar logs en la consola del navegador
2. Comprobar el estado de la API
3. Revisar las variables de entorno
4. Consultar la documentación de Next.js

---

🎯 **Optimizado para Vercel** - Deploy en segundos con configuración cero
🎨 **Diseño Premium** - Estética legal profesional
⚡ **Performance A+** - Lighthouse score optimizado