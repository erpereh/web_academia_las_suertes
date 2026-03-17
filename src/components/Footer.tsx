import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que', label: 'Por qué elegirnos' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#como-llegar', label: 'Cómo llegar' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-verde-oscuro pt-16 pb-8 text-blanco">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo y descripción */}
          <div>
            <a href="#" className="font-display text-2xl font-bold">
              academia <span className="text-lima">LAS SUERTES</span>
            </a>
            <p className="mt-4 font-body text-sm leading-relaxed text-blanco/70">
              Tu academia de confianza en el Ensanche de Vallecas.
              Refuerzo escolar, inglés e informática para todas las edades.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-display text-lg font-bold">Navegación</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-blanco/70 transition-colors hover:text-lima"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display text-lg font-bold">Contacto</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="tel:914255687" className="flex items-center gap-3 font-body text-sm text-blanco/70 transition-colors hover:text-lima">
                  <Phone size={16} className="text-lima" />
                  91 425 56 87
                </a>
              </li>
              <li>
                <a href="mailto:info@academialassuertes.es" className="flex items-center gap-3 font-body text-sm text-blanco/70 transition-colors hover:text-lima">
                  <Mail size={16} className="text-lima" />
                  info@academialassuertes.es
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 font-body text-sm text-blanco/70">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-lima" />
                  Av. del Ensanche de Vallecas, 67, portal 2, 1ºA — 28051 Madrid
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisora y copyright */}
        <div className="mt-12 border-t border-blanco/10 pt-6 text-center">
          <p className="font-body text-sm text-blanco/50">
            &copy; 2025 Academia Las Suertes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
