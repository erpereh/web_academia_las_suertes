import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springX = useSpring(cursorX, { stiffness: 150, damping: 15 })
  const springY = useSpring(cursorY, { stiffness: 150, damping: 15 })

  useEffect(() => {
    // Detectar si es dispositivo táctil
    const hasPointer = window.matchMedia('(pointer: fine)').matches
    if (!hasPointer) return
    setIsTouch(false)

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const handleMouseLeave = () => setVisible(false)
    const handleMouseEnter = () => setVisible(true)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY, visible])

  // No renderizar en touch devices
  if (isTouch) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
      aria-hidden="true"
    >
      {/* Logo Academia Las Suertes */}
      <div className="flex items-center gap-1.5 rounded-lg bg-lima px-2 py-1.5 shadow-lg backdrop-blur-sm">
        {/* Nave 🚀 */}
        <span className="text-sm">🚀</span>
        {/* Texto */}
        <span className="font-display text-xs font-bold text-blanco whitespace-nowrap">Academia</span>
      </div>
    </motion.div>
  )
}
