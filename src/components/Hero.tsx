import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { Phone, Mail } from 'lucide-react'

// Palabras que rotan con efecto typing
const words = ['Refuerzo escolar', 'Inglés', 'Informática']

// Partículas/estrellas flotantes
function FloatingStars() {
  const stars = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 6,
    }))
  ).current

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Parallax sutil: mover partículas un poco al mover el ratón
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 20)
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 20)
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-blanco"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  )
}

// Efecto typing
function TypingEffect() {
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const fullWord = words[currentWord]

    if (!isDeleting) {
      setDisplayText(fullWord.slice(0, displayText.length + 1))
      if (displayText.length + 1 === fullWord.length) {
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }
    } else {
      setDisplayText(fullWord.slice(0, displayText.length - 1))
      if (displayText.length - 1 === 0) {
        setIsDeleting(false)
        setCurrentWord((prev) => (prev + 1) % words.length)
        return
      }
    }
  }, [currentWord, displayText, isDeleting])

  useEffect(() => {
    const speed = isDeleting ? 50 : 100
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting])

  return (
    <span className="text-naranja">
      {displayText}
      <span className="animate-blink text-blanco">|</span>
    </span>
  )
}

// Variants para stagger
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay verde semitransparente */}
      <div className="absolute inset-0 bg-negro/60 mix-blend-multiply" aria-hidden="true" />
      <div className="absolute inset-0 bg-lima/15" aria-hidden="true" />

      {/* Estrellas flotantes */}
      <FloatingStars />

      {/* Contenido centrado */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl font-bold leading-tight text-blanco sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Tu academia de confianza en{' '}
          <span className="text-lima">Vallecas</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-2xl font-body text-xl text-blanco/80 sm:text-2xl md:text-3xl"
        >
          <TypingEffect /> para Primaria, ESO y Bachillerato
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <a
            href="tel:914255687"
            className="flex items-center gap-3 rounded-full bg-lima px-10 py-5 font-display text-xl font-bold text-blanco shadow-xl shadow-lima/30 transition-all hover:scale-105 hover:bg-lima-dark hover:shadow-2xl hover:shadow-lima/40"
          >
            <Phone size={24} />
            Llámanos ahora
          </a>
          <a
            href="mailto:info@academialassuertes.es"
            className="flex items-center gap-3 rounded-full border-2 border-blanco/40 px-10 py-5 font-display text-xl font-bold text-blanco backdrop-blur-sm transition-all hover:scale-105 hover:border-blanco hover:bg-blanco/10"
          >
            <Mail size={24} />
            Escríbenos
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
