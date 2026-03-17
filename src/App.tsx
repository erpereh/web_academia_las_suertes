import { MotionConfig } from 'motion/react'
import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WaveDivider from '@/components/WaveDivider'
import Servicios from '@/components/Servicios'
import PorQueElegirnos from '@/components/PorQueElegirnos'
import Opiniones from '@/components/Opiniones'
import ComoLlegar from '@/components/ComoLlegar'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <WaveDivider color="var(--verde-suave)" />
        <Servicios />
        <WaveDivider color="var(--blanco)" flip />
        <PorQueElegirnos />
        <WaveDivider color="var(--blanco)" />
        <Opiniones />
        <WaveDivider color="var(--verde-suave)" flip />
        <ComoLlegar />
        <WaveDivider color="var(--blanco)" />
        <Contacto />
      </main>

      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  )
}
