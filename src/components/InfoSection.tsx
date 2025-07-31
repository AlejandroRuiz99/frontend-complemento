'use client'

import { motion } from 'framer-motion'
import { Calendar, Calculator, Euro, Info, Scale, Shield } from 'lucide-react'

export default function InfoSection() {
  const periods = [
    {
      id: '1',
      title: 'Período 1',
      dates: '01/01/2016 - 03/02/2021',
      icon: Calendar,
      features: [
        'Solo pensiones de jubilación (excepto anticipadas voluntarias)',
        'Cálculo porcentual sobre la pensión',
        '2 hijos → 5% adicional',
        '3 hijos → 10% adicional',
        '≥4 hijos → 15% adicional'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: '2',
      title: 'Período 2',
      dates: 'Desde 04/02/2021',
      icon: Euro,
      features: [
        'Jubilaciones, incapacidad y viudedad',
        'Importe fijo por hijo',
        '35,90€ por hijo (máximo 4)',
        'Solo un complemento si hay derecho a ambos períodos',
        'Derecho para uno de los dos progenitores'
      ],
      color: 'from-legal-gold to-legal-gold-dark'
    }
  ]

  const legalInfo = [
    {
      icon: Scale,
      title: 'Base Legal',
      content: 'Real Decreto-ley 3/2021 y disposiciones complementarias sobre el complemento de pensiones contributivas para la reducción de la brecha de género.'
    },
    {
      icon: Info,
      title: 'Importante',
      content: 'Esta herramienta tiene carácter orientativo. Para casos específicos, consulte con un profesional del derecho.'
    }
  ]

  return (
    <section id="informacion" className="section-legal bg-dark-900/50 section-with-header-offset">
      <div className="container-legal">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-legal">
            Información sobre los{' '}
            <span className="text-legal-gold">Períodos</span>
          </h2>
          <p className="subheading-legal mx-auto">
            Conoce las características y diferencias entre los dos períodos 
            de aplicación del complemento de paternidad
          </p>
        </motion.div>

        {/* Períodos */}
        <div id="periodos" className="grid lg:grid-cols-2 gap-8 mb-16 section-with-header-offset">
          {periods.map((period, index) => (
            <motion.div
              key={period.id}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-legal card-hover relative overflow-hidden"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${period.color} opacity-5`} />
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${period.color} flex items-center justify-center mr-4`}>
                    <period.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {period.title}
                    </h3>
                    <p className="text-legal-gold font-medium">
                      {period.dates}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {period.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-dark-200"
                    >
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {period.id === '2' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-6 p-4 bg-legal-gold/10 border border-legal-gold/20 rounded-lg"
                  >
                    <p className="text-sm text-legal-gold font-medium">
                      📍 Período actual: Este es el período que se aplica actualmente
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Información Legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {legalInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-legal text-center"
            >
              <div className="w-16 h-16 bg-legal-gold/10 border border-legal-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-8 h-8 text-legal-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {info.title}
              </h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                {info.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card-legal max-w-2xl mx-auto">
            <Calculator className="w-12 h-12 text-legal-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              ¿Listo para calcular tu complemento?
            </h3>
            <p className="text-dark-300 mb-6">
              Utiliza nuestra calculadora profesional para determinar 
              el importe exacto que te corresponde
            </p>
            <a
              href="#calculadora"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Calcular Ahora</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}