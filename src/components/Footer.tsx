'use client'

import { motion } from 'framer-motion'
import { Scale, Mail, Phone, MapPin, ExternalLink, Shield, Clock, LucideIcon } from 'lucide-react'

interface FooterLink {
  name: string
  href: string
  icon?: LucideIcon
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections: FooterSection[] = [
    {
      title: 'Compromiso Legal',
      links: [
        { name: 'Conoce al despacho', href: '#', icon: ExternalLink },
        { name: 'Servicios legales', href: '#', icon: Scale },
        { name: 'Blog jurídico', href: '#', icon: ExternalLink },
        { name: 'Reservar cita', href: '#', icon: Clock },
      ]
    },
    {
      title: 'Herramientas',
      links: [
        { name: 'Verificar Elegibilidad', href: '#calculadora' },
        { name: 'Calcular Complemento', href: '#calculadora' },
        { name: 'Calcular Atrasos', href: '#calculadora' },
        { name: 'Comparar Progenitores', href: '#calculadora' },
      ]
    },
    {
      title: 'Información',
      links: [
        { name: 'Período 1 (2016-2021)', href: '#periodos' },
        { name: 'Período 2 (Actual)', href: '#periodos' },
        { name: 'Base Legal', href: '#informacion' },
        { name: 'Preguntas Frecuentes', href: '#' },
      ]
    }
  ]

  return (
    <footer id="contacto" className="bg-dark-950 border-t border-dark-800">
      <div className="container-legal">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg overflow-hidden">
                  <img 
                    src="/images/logos/complete_logo.png" 
                    alt="Compromiso Legal"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-legal-gray-text">
                    Compromiso Legal
                  </h3>
                  <p className="text-xs text-legal-gold uppercase tracking-wider">
                    Despacho de Abogados
                  </p>
                </div>
              </div>
              
              <p className="text-dark-300 mb-6 leading-relaxed">
                "Donde empieza la defensa de tus derechos". Especialistas en 
                Derecho Laboral y Seguridad Social con amplia experiencia en 
                complementos de paternidad.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-legal-gray-light">
                  <Phone className="w-4 h-4 text-legal-gold mr-3" />
                  <span className="text-sm">+34 640 664 875</span>
                </div>
                <div className="flex items-center text-legal-gray-light">
                  <Mail className="w-4 h-4 text-legal-gold mr-3" />
                  <span className="text-sm">info@compromisolegal.es</span>
                </div>
                <div className="flex items-start text-legal-gray-light">
                  <MapPin className="w-4 h-4 text-legal-gold mr-3 mt-0.5" />
                  <span className="text-sm">
                    C/Manzanares 35, A<br />
                    Bolaños de Calatrava, Ciudad Real<br />
                    C.P: 13260
                  </span>
                </div>
              </div>


            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center text-dark-300 hover:text-legal-gold transition-colors duration-200 text-sm group"
                      >
                        {link.icon && (
                          <link.icon className="w-3 h-3 mr-2 opacity-60 group-hover:opacity-100" />
                        )}
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-dark-800"
        >
          <div className="bg-dark-800/50 border border-dark-700 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-legal-gold mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-white font-semibold mb-2">
                  Aviso Legal y Disclaimer
                </h4>
                <p className="text-dark-300 text-sm leading-relaxed mb-3">
                  Esta calculadora del complemento de paternidad tiene carácter 
                  <strong className="text-white"> orientativo</strong> y se basa en la normativa 
                  española vigente. Los resultados proporcionados no constituyen asesoramiento 
                  legal personalizado.
                </p>
                <p className="text-dark-300 text-sm leading-relaxed">
                  Para casos específicos, situaciones complejas o asesoramiento legal 
                  personalizado, recomendamos encarecidamente consultar con un profesional 
                  del derecho especializado en Seguridad Social y Derecho Laboral.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-dark-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-dark-400 text-sm">
              © {currentYear} Compromiso Legal. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-dark-400 hover:text-legal-gold transition-colors duration-200"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-dark-400 hover:text-legal-gold transition-colors duration-200"
              >
                Términos de Uso
              </a>
              <a
                href="#"
                className="text-dark-400 hover:text-legal-gold transition-colors duration-200"
              >
                Cookies
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tech Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-4 border-t border-dark-900"
        >
          <div className="text-center">
            <p className="text-dark-500 text-xs">
              Desarrollado con{' '}
              <span className="text-legal-gold">Next.js</span> y desplegado en{' '}
              <span className="text-legal-gold">Vercel</span>
              {' '}• API en{' '}
              <span className="text-legal-gold">Heroku</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}