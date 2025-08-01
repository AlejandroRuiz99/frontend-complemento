'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  {
    question: "¿Qué es el complemento de paternidad?",
    answer: "El complemento de paternidad es un incremento en la pensión de jubilación, incapacidad permanente o viudedad, destinado a compensar el impacto que la paternidad o maternidad ha tenido en la carrera profesional de los padres.",
    category: "general"
  },
  {
    question: "¿Cuánto dinero me corresponde por el complemento de paternidad?",
    answer: "Depende del período: Período 1 (2016-2021): 5% por 2 hijos, 10% por 3 hijos, 15% por 4+ hijos sobre la pensión. Período 2 (desde 2021): 35,90€ fijos por hijo (máximo 4 hijos).",
    category: "calculo"
  },
  {
    question: "¿Quién puede solicitar el complemento de paternidad?",
    answer: "Pueden solicitarlo pensionistas de jubilación, incapacidad permanente o viudedad que tengan 2 o más hijos (Período 1) o 1+ hijos (Período 2). Solo uno de los dos progenitores puede recibirlo.",
    category: "requisitos"
  },
  {
    question: "¿Cómo se calcula el complemento de paternidad en 2025?",
    answer: "En 2025 aplica el Período 2: se reciben 35,90€ por cada hijo, con un máximo de 4 hijos (143,60€ máximo). El importe es fijo independiente del importe de la pensión.",
    category: "calculo"
  },
  {
    question: "¿Puedo reclamar atrasos del complemento de paternidad?",
    answer: "Sí, se pueden reclamar atrasos desde la fecha de inicio de tu pensión si cumples los requisitos. Los atrasos se calculan mes a mes según el período correspondiente.",
    category: "atrasos"
  },
  {
    question: "¿Qué diferencia hay entre el Período 1 y Período 2?",
    answer: "Período 1 (2016-2021): Cálculo porcentual, mínimo 2 hijos, solo jubilación (excepto anticipada voluntaria). Período 2 (desde 2021): Importe fijo, desde 1 hijo, todas las pensiones incluida anticipada voluntaria.",
    category: "periodos"
  },
  {
    question: "¿Es obligatorio usar un abogado para solicitar el complemento?",
    answer: "No es obligatorio, pero es recomendable. Un abogado especialista puede ayudarte con la documentación, plazos, y en caso de denegación o problemas con la Seguridad Social.",
    category: "legal"
  },
  {
    question: "¿Cuánto tiempo tarda la Seguridad Social en resolver la solicitud?",
    answer: "El plazo legal es de 3 meses, aunque en la práctica puede tardar entre 3-6 meses. Si no hay respuesta en el plazo, se puede entender como silencio administrativo negativo.",
    category: "tramites"
  }
]

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section className="section-legal bg-dark-900/50" id="preguntas-frecuentes">
      {/* FAQ Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <div className="container-legal">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-legal-gold mr-3" />
            <h2 className="heading-legal">
              Preguntas <span className="text-legal-gold">Frecuentes</span>
            </h2>
          </div>
          <p className="subheading-legal mx-auto">
            Resolvemos las dudas más comunes sobre el complemento de paternidad
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 bg-dark-800 hover:bg-dark-700 border border-dark-600 hover:border-legal-gold/50 rounded-lg transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 
                    className="text-lg font-semibold text-white pr-4"
                    itemProp="name"
                  >
                    {item.question}
                  </h3>
                  {openItem === index ? (
                    <ChevronUp className="w-5 h-5 text-legal-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-dark-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openItem === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div className="p-6 bg-dark-850 border-l-4 border-legal-gold rounded-b-lg">
                    <p 
                      className="text-dark-200 leading-relaxed"
                      itemProp="text"
                    >
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="card-legal max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">
              ¿No encuentras la respuesta que buscas?
            </h3>
            <p className="text-dark-300 mb-6">
              Nuestro equipo de abogados especialistas está aquí para ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculadora"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Usar Calculadora</span>
              </a>
              <a
                href="https://compromisolegal.es/contacto/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Consulta Personalizada</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}