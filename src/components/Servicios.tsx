import { useState } from 'react'
import { motion } from 'motion/react'
import { BookOpen, Languages, Monitor, Users } from 'lucide-react'

const spring = { type: 'spring' as const, stiffness: 400, damping: 17 }

const servicios = [
  {
    icon: BookOpen,
    title: 'Refuerzo Escolar',
    desc: 'Apoyo en todas las asignaturas para Primaria, ESO y Bachillerato. Mejora tus notas con un método personalizado.',
    color: 'bg-lima/10 text-lima',
    colorHover: 'bg-lima/25 text-lima',
  },
  {
    icon: Languages,
    title: 'Clases de Inglés',
    desc: 'Todos los niveles, desde iniciación hasta preparación de exámenes oficiales. Speaking, grammar y mucho más.',
    color: 'bg-naranja/10 text-naranja',
    colorHover: 'bg-naranja/25 text-naranja',
  },
  {
    icon: Monitor,
    title: 'Informática',
    desc: 'Ofimática, tecnología y herramientas digitales. Aprende a usar el ordenador con confianza.',
    color: 'bg-lima/10 text-lima-dark',
    colorHover: 'bg-lima/25 text-lima-dark',
  },
  {
    icon: Users,
    title: 'Clases Particulares',
    desc: 'Atención personalizada uno a uno. Adaptamos el ritmo a cada alumno para conseguir los mejores resultados.',
    color: 'bg-naranja/10 text-naranja',
    colorHover: 'bg-naranja/25 text-naranja',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Servicios() {
  return (
    <section id="servicios" className="relative bg-blanco py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-4xl font-bold text-negro sm:text-5xl md:text-6xl">
            Nuestros <span className="text-lima">servicios</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-xl text-gris-texto">
            Todo lo que necesitas para mejorar tus resultados académicos
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {servicios.map((servicio) => (
            <ServiceCard key={servicio.title} {...servicio} />
          ))}
        </motion.div>
      </div>

      {/* Nave flotante decorativa */}
      <FloatingShip />
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  color,
  colorHover,
}: (typeof servicios)[0]) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={cardVariant}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px -12px rgba(141, 198, 63, 0.30)',
      }}
      transition={spring}
      className="group relative min-w-[280px] cursor-default rounded-2xl bg-blanco p-8 shadow-md shadow-negro/5"
    >
      {/* Badge esquina superior derecha */}
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={spring}
        className="absolute top-4 right-4 rounded-full bg-lima px-3 py-1 font-display text-xs font-semibold text-blanco"
      >
        ¡Pregúntanos!
      </motion.span>

      {/* Icono con bounce */}
      <motion.div
        animate={hovered ? { scale: [1, 1.25, 1] } : { scale: 1 }}
        transition={{ ...spring, duration: 0.4 }}
        className={`mb-5 inline-flex rounded-xl p-4 ${hovered ? colorHover : color}`}
      >
        <Icon size={36} />
      </motion.div>

      {/* Título cambia a verde lima en hover */}
      <h3
        className={`font-display text-2xl font-bold transition-colors duration-200 ${
          hovered ? 'text-lima' : 'text-negro'
        }`}
      >
        {title}
      </h3>
      <p className="mt-3 font-body text-base leading-relaxed text-gris-texto">{desc}</p>
    </motion.div>
  )
}

function FloatingShip() {
  const [spin, setSpin] = useState(false)

  return (
    <motion.div
      className="absolute right-10 top-1/3 hidden text-7xl select-none lg:block"
      onHoverStart={() => setSpin(true)}
      onHoverEnd={() => setSpin(false)}
      animate={spin ? { rotate: 360 } : {}}
      transition={spin ? { duration: 0.3 } : {}}
      aria-hidden="true"
    >
      <div className="animate-bobbing cursor-pointer">🚀</div>
    </motion.div>
  )
}
