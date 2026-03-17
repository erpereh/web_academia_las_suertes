import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, Menu, X } from 'lucide-react'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que', label: 'Por qué elegirnos' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#como-llegar', label: 'Cómo llegar' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menú al hacer click en un enlace
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-[3px] left-0 right-0 z-40 transition-shadow duration-300 bg-blanco ${
        scrolled ? 'shadow-lg shadow-lima/10' : ''
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {/* Icono logo */}
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lima text-xl text-blanco shadow-md shadow-lima/30">
            🚀
          </span>
          <span>
            <span className="text-negro">academia </span>
            <span className="text-lima">LAS SUERTES</span>
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-base font-semibold text-gris-texto transition-colors hover:text-lima"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="tel:914255687"
            className="hidden items-center gap-2 rounded-full bg-lima px-7 py-3.5 font-display text-base font-semibold text-blanco transition-all hover:bg-lima-dark hover:shadow-lg hover:shadow-lima/30 sm:flex"
          >
            <Phone size={18} />
            Llámanos
          </a>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2.5 text-negro transition-colors hover:bg-verde-suave lg:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border bg-blanco lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block rounded-lg px-4 py-3.5 font-body text-base font-semibold text-negro transition-colors hover:bg-verde-suave hover:text-lima"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:914255687"
                  onClick={handleLinkClick}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-lima px-6 py-3.5 font-display text-base font-semibold text-blanco"
                >
                  <Phone size={18} />
                  91 425 56 87
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
