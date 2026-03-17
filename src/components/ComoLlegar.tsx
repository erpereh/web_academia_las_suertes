import { motion } from 'motion/react'
import { MapPin, Train, Bus } from 'lucide-react'

export default function ComoLlegar() {
  return (
    <section id="como-llegar" className="bg-verde-suave py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-negro sm:text-4xl md:text-5xl">
            Cómo <span className="text-lima">llegar</span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Info de dirección */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Dirección */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 rounded-xl bg-lima/10 p-3 text-lima">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-negro">Dirección</h3>
                <p className="font-body text-gris-texto">
                  Av. del Ensanche de Vallecas, 67<br />
                  Portal 2, 1ºA<br />
                  28051 Madrid
                </p>
              </div>
            </div>

            {/* Metro */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 rounded-xl bg-naranja/10 p-3 text-naranja">
                <Train size={28} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-negro">Metro</h3>
                <p className="font-body text-gris-texto">
                  Línea 1 — Paradas <strong>Las Suertes</strong> y <strong>La Gavia</strong>
                </p>
              </div>
            </div>

            {/* Autobús */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 rounded-xl bg-lima/10 p-3 text-lima-dark">
                <Bus size={28} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-negro">Autobús</h3>
                <p className="font-body text-gris-texto">
                  Líneas <strong>142</strong> y <strong>145</strong>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-lg shadow-lima/10"
          >
            <iframe
              title="Ubicación Academia Las Suertes"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3!2d-3.6145!3d40.3755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzMxLjgiTiAzwrAzNic1Mi4yIlc!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
