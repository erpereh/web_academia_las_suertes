import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function Contacto() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Lanzar confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#8DC63F', '#FF6B35', '#FFFFFF', '#FFD700'],
    })

    setSent(true)

    // Reset después de 4 segundos
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contacto" className="bg-blanco py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold text-negro sm:text-5xl md:text-6xl">
            <span className="text-lima">Contáctanos</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-body text-xl text-gris-texto">
            ¿Tienes dudas? Escríbenos y te respondemos lo antes posible
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center justify-center rounded-2xl bg-verde-suave p-16 text-center"
                >
                  <CheckCircle size={72} className="mb-5 text-lima" />
                  <p className="font-display text-3xl font-bold text-negro">
                    ¡Nos ponemos en contacto contigo!
                  </p>
                  <p className="mt-3 font-body text-lg text-gris-texto">
                    Gracias por confiar en Academia Las Suertes
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="nombre" className="mb-2 block font-display text-base font-semibold text-negro">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-blanco px-5 py-4 font-body text-base text-negro outline-none transition-all focus:border-lima focus:ring-2 focus:ring-lima/30"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="telefono" className="mb-2 block font-display text-base font-semibold text-negro">
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        className="w-full rounded-xl border border-border bg-blanco px-5 py-4 font-body text-base text-negro outline-none transition-all focus:border-lima focus:ring-2 focus:ring-lima/30"
                        placeholder="612 345 678"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block font-display text-base font-semibold text-negro">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-xl border border-border bg-blanco px-5 py-4 font-body text-base text-negro outline-none transition-all focus:border-lima focus:ring-2 focus:ring-lima/30"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="mb-2 block font-display text-base font-semibold text-negro">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-border bg-blanco px-5 py-4 font-body text-base text-negro outline-none transition-all focus:border-lima focus:ring-2 focus:ring-lima/30"
                      placeholder="Cuéntanos qué necesitas..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-lima px-10 py-5 font-display text-xl font-bold text-blanco shadow-lg shadow-lima/30 transition-all hover:bg-lima-dark hover:shadow-xl hover:shadow-lima/40 active:scale-95"
                  >
                    <Send size={22} />
                    Enviar mensaje
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Datos de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:pl-8"
          >
            <h3 className="font-display text-2xl font-bold text-negro sm:text-3xl">
              También puedes contactarnos directamente
            </h3>

            <div className="space-y-6">
              <a href="tel:914255687" className="flex items-center gap-5 group">
                <div className="rounded-xl bg-lima/10 p-4 text-lima transition-colors group-hover:bg-lima group-hover:text-blanco">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-negro">Teléfono</p>
                  <p className="font-body text-base text-gris-texto">91 425 56 87</p>
                </div>
              </a>

              <a href="mailto:info@academialassuertes.es" className="flex items-center gap-5 group">
                <div className="rounded-xl bg-naranja/10 p-4 text-naranja transition-colors group-hover:bg-naranja group-hover:text-blanco">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-negro">Email</p>
                  <p className="font-body text-base text-gris-texto">info@academialassuertes.es</p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-lima/10 p-4 text-lima-dark">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-negro">Dirección</p>
                  <p className="font-body text-base text-gris-texto">
                    Av. del Ensanche de Vallecas, 67<br />
                    Portal 2, 1ºA — 28051 Madrid
                  </p>
                </div>
              </div>
            </div>

            {/* Horario */}
            <div className="rounded-2xl bg-verde-suave p-8">
              <h4 className="font-display text-xl font-bold text-negro">Horario</h4>
              <div className="mt-4 space-y-2 font-body text-base text-gris-texto">
                <p>Lunes a Viernes: <strong className="text-negro">16:00 — 21:00</strong></p>
                <p>Sábados: <strong className="text-negro">10:00 — 14:00</strong></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
