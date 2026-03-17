import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { GraduationCap, Users, Clock } from 'lucide-react'

const spring = { type: 'spring' as const, stiffness: 400, damping: 17 }

// Hook para contar animado
function useAnimatedCounter(target: number, duration = 2000, enabled = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!enabled) return

    const start = 0
    const startTime = performance.now()

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Easing: easeOutExpo
      const eased = 1 - Math.pow(2, -10 * progress)
      const value = Math.round(start + (target - start) * eased)

      setCount(value)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [target, duration, enabled])

  return count
}

const stats = [
  { icon: Clock, value: 10, suffix: '+', label: 'años en el barrio', color: 'text-lima' },
  { icon: Users, value: 200, suffix: '+', label: 'alumnos', color: 'text-naranja' },
  { icon: GraduationCap, value: 4.3, suffix: '★', label: 'valoración Google', color: 'text-lima' },
]

const razones = [
  {
    icon: GraduationCap,
    title: 'Profesores cualificados y cercanos',
    desc: 'Nuestro equipo docente combina formación especializada con un trato cálido y cercano que hace que los alumnos se sientan cómodos.',
  },
  {
    icon: Users,
    title: 'Grupos reducidos y atención personalizada',
    desc: 'Máximo 8 alumnos por grupo para garantizar que cada estudiante recibe la atención que necesita.',
  },
  {
    icon: Clock,
    title: 'Más de 10 años en el barrio',
    desc: 'Somos parte del Ensanche de Vallecas. Conocemos a las familias, los coles y las necesidades de la zona.',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function PorQueElegirnos() {
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { once: true, margin: '-100px' })

  return (
    <section id="por-que" className="bg-verde-suave py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-negro sm:text-4xl md:text-5xl">
            ¿Por qué <span className="text-lima">elegirnos</span>?
          </h2>
        </motion.div>

        {/* Contadores animados */}
        <div ref={counterRef} className="mb-16 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <CounterCard key={stat.label} {...stat} enabled={isInView} />
          ))}
        </div>

        {/* Razones */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {razones.map((razon, i) => (
            <RazonCard key={razon.title} razon={razon} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function RazonCard({ razon, index }: { razon: (typeof razones)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const iconColor = index % 2 === 0 ? 'bg-lima/10 text-lima' : 'bg-naranja/10 text-naranja'

  return (
    <motion.div
      variants={itemVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -6,
        boxShadow: '0 16px 32px -8px rgba(141, 198, 63, 0.20)',
      }}
      transition={spring}
      className="rounded-2xl bg-blanco p-8 shadow-md shadow-lima/10"
      style={{
        borderLeft: hovered ? '3px solid #8DC63F' : '3px solid transparent',
        transition: 'border-left 0.2s ease',
      }}
    >
      {/* Icono con bounce */}
      <motion.div
        animate={hovered ? { scale: [1, 1.2, 1] } : { scale: 1 }}
        transition={{ ...spring, duration: 0.4 }}
        className={`mb-4 inline-flex rounded-xl p-3 ${iconColor}`}
      >
        <razon.icon size={32} />
      </motion.div>
      <h3 className="font-display text-xl font-bold text-negro">{razon.title}</h3>
      <p className="mt-3 font-body leading-relaxed text-gris-texto">{razon.desc}</p>
    </motion.div>
  )
}

function CounterCard({
  icon: Icon,
  value,
  suffix,
  label,
  color,
  enabled,
}: (typeof stats)[0] & { enabled: boolean }) {
  const isDecimal = value % 1 !== 0
  const count = useAnimatedCounter(isDecimal ? value * 10 : value, 2000, enabled)
  const displayValue = isDecimal ? (count / 10).toFixed(1) : count

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="text-center"
    >
      <Icon size={36} className={`mx-auto mb-2 ${color}`} />
      <p className={`font-display text-5xl font-bold sm:text-6xl ${color}`}>
        {displayValue}{suffix}
      </p>
      <p className="mt-2 font-body text-lg text-gris-texto">{label}</p>
    </motion.div>
  )
}
