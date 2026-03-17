import { useState } from 'react'
import { motion } from 'motion/react'
import { Star } from 'lucide-react'

const spring = { type: 'spring' as const, stiffness: 400, damping: 17 }

const reseñas = [
  {
    nombre: 'María García',
    estrellas: 5,
    texto: 'Mis hijos llevan dos años en la academia y han mejorado muchísimo sus notas. Los profes son muy atentos y siempre están disponibles para resolver dudas. ¡Totalmente recomendable!',
  },
  {
    nombre: 'Carlos Fernández',
    estrellas: 4,
    texto: 'Profesores muy cercanos y atentos. Mi hija iba fatal en matemáticas y este trimestre ha sacado un notable. El ambiente es genial, los niños van contentos.',
  },
  {
    nombre: 'Ana López',
    estrellas: 5,
    texto: 'La mejor academia del barrio sin duda. Llevamos a nuestros dos hijos a inglés y refuerzo. El trato es familiar y los resultados se notan desde el primer mes.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

function AnimatedStarRating({ count, hovered }: { count: number; hovered: boolean }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={i}
          animate={hovered ? { scale: [1, 1.3, 1] } : { scale: 1 }}
          transition={{ ...spring, delay: hovered ? i * 0.05 : 0 }}
        >
          <Star
            size={22}
            className={i < count ? 'fill-naranja text-naranja' : 'text-gris-claro'}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default function Opiniones() {
  return (
    <section id="opiniones" className="bg-blanco py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="font-display text-4xl font-bold text-negro sm:text-5xl md:text-6xl">
            Lo que dicen <span className="text-lima">nuestras familias</span>
          </h2>
        </motion.div>

        {/* Valoración media */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16 flex items-center justify-center gap-4"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={26}
                className={i < 4 ? 'fill-naranja text-naranja' : 'fill-naranja/40 text-naranja/40'}
              />
            ))}
          </div>
          <span className="font-display text-2xl font-bold text-negro">4.3</span>
          <span className="font-body text-lg text-gris-texto">sobre 6 reseñas en Google</span>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {reseñas.map((r) => (
            <OpinionCard key={r.nombre} {...r} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function OpinionCard({ nombre, estrellas, texto }: (typeof reseñas)[0]) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={cardVariant}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -6,
        boxShadow: '0 16px 32px -8px rgba(141, 198, 63, 0.20)',
      }}
      animate={{
        backgroundColor: hovered ? 'rgb(255, 255, 255)' : 'rgb(240, 249, 232)',
      }}
      transition={spring}
      className="rounded-2xl p-8 shadow-sm"
    >
      <AnimatedStarRating count={estrellas} hovered={hovered} />
      <p className="mt-5 font-body text-base leading-relaxed text-gris-texto">
        &ldquo;{texto}&rdquo;
      </p>
      <p
        className={`mt-5 font-display text-lg font-bold transition-colors duration-200 ${
          hovered ? 'text-lima' : 'text-negro'
        }`}
      >
        {nombre}
      </p>
    </motion.div>
  )
}
