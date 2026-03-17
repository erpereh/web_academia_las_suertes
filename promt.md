Crea la web completa de Academia Las Suertes usando React + Vite + 
Tailwind v4 + Motion. El video hero.mp4 está en la raíz del proyecto.
Usa las skills instaladas: frontend-design, motion-framer, 
gsap-scrolltrigger, tailwind-v4-shadcn.

═══════════════════════════════════════════════
ESTILO VISUAL
═══════════════════════════════════════════════

Colorido, divertido y cercano. Pensado para niños y sus familias.
Que transmita alegría, confianza y energía positiva.

- Paleta principal basada en el logo: verde lima (#8DC63F), 
  negro, blanco. Acento: amarillo o naranja vibrante.
- Tipografía display con mucha personalidad para títulos 
  (Nunito, Fredoka, Baloo o similar — nada genérico)
- Tipografía legible para cuerpo de texto
- Formas redondeadas en cards y botones (border-radius generoso)
- Sombras de colores (no grises neutros)
- Iconos divertidos con Lucide React
- Fondo blanco con secciones alternando blanco y verde muy suave
- NADA de estética corporativa ni AI slop

═══════════════════════════════════════════════
ESTRUCTURA DE COMPONENTES
═══════════════════════════════════════════════

src/
├── App.tsx
├── main.tsx
├── index.css
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Servicios.tsx
    ├── PorQueElegirnos.tsx
    ├── Opiniones.tsx
    ├── ComoLlegar.tsx
    ├── Contacto.tsx
    └── Footer.tsx

═══════════════════════════════════════════════
SECCIONES — DETALLE
═══════════════════════════════════════════════

── NAVBAR ──
Logo de texto "academia LAS SUERTES" con tipografía del logo.
Links suaves a cada sección (scroll suave).
Botón CTA "Llámanos" con el teléfono 91 425 56 87.
Sticky top, fondo blanco con ligera sombra al hacer scroll.
Hamburger menu en móvil.

── HERO ──
Video hero.mp4 de fondo a pantalla completa (autoplay, muted, 
loop, playsinline). Overlay semitransparente verde muy suave 
para que el texto sea legible.
Encima del video centrado:
- Título grande: "Tu academia de confianza en Vallecas"
- Subtítulo: "Refuerzo escolar, inglés e informática 
  para Primaria, ESO y Bachillerato"
- Dos botones: "Llámanos ahora" (tel:914255687) 
  y "Escríbenos" (mailto:info@academialassuertes.es)
Animación de entrada con Motion: titulo y botones con 
staggered reveal desde abajo, suave.

── SERVICIOS ──
Título de sección animado al entrar en viewport.
4 cards con icono, título y descripción corta:
1. Refuerzo Escolar — Primaria, ESO y Bachillerato
2. Clases de Inglés — Todos los niveles
3. Informática — Ofimática y tecnología
4. Clases Particulares — Atención personalizada
Cards con hover animation (scale + sombra de color).
Staggered reveal con Motion al hacer scroll.

── POR QUÉ ELEGIRNOS ──
3 razones en layout asimétrico o grid creativo:
1. Profesores cualificados y cercanos
2. Grupos reducidos y atención personalizada  
3. Más de 10 años en el barrio
Iconos grandes y coloridos. Fondo verde suave.
Animación de entrada con Motion.

── OPINIONES ──
Valoración media: 4.3★ sobre 6 reseñas de Google.
3 cards de reseñas inventadas pero realistas 
(nombres de vecinos del barrio, comentarios positivos 
sobre profesores, resultados académicos y trato cercano).
Diseño de cards con estrellitas, nombre y texto.
Carrusel o grid según lo que quede mejor.

── CÓMO LLEGAR ──
Dirección: Av. del Ensanche de Vallecas, 67, portal 2, 1ºA
Madrid 28051
Metro: Línea 1 — Las Suertes y La Gavia
Autobús: 142 y 145
Embed de Google Maps con la dirección.
Layout dos columnas: info a la izquierda, mapa a la derecha.

── CONTACTO ──
Formulario con: Nombre, Teléfono, Email, Mensaje, botón Enviar.
Datos de contacto visibles junto al formulario:
- 📞 91 425 56 87
- ✉️ info@academialassuertes.es
- 📍 Av. del Ensanche de Vallecas, 67
Botón flotante de WhatsApp fijo en esquina inferior derecha
con el número 914255687.

── FOOTER ──
Logo + nombre, links de navegación, datos de contacto,
copyright 2025 Academia Las Suertes.
Fondo verde oscuro o negro, texto blanco.

═══════════════════════════════════════════════
ANIMACIONES CON MOTION
═══════════════════════════════════════════════

- Hero: staggered reveal de título y botones al cargar
- Todas las secciones: fade + slide up al entrar en viewport
  usando whileInView y viewport once:true
- Cards de servicios: stagger de 0.1s entre cada card
- Hover en cards: scale(1.04) + sombra de color
- Navbar: aparece con sombra suave al hacer scroll
- WhatsApp button: pulse animation suave en loop
- MotionConfig reducedMotion="user" envolviendo toda la app

═══════════════════════════════════════════════
ANIMACIONES CREATIVAS Y ELEMENTOS DIVERTIDOS
═══════════════════════════════════════════════

── CONTADOR ANIMADO (sección Por qué elegirnos) ──
Tres números que cuentan desde 0 al entrar en viewport:
- "+10 años en el barrio"
- "+200 alumnos"
- "4.3★ valoración"
Usar useEffect + requestAnimationFrame para el conteo suave.
Números grandes, coloridos, con easing.

── NAVE FLOTANTE DECORATIVA ──
El muñeco de la nave del logo (emoji o SVG simple) 
flota en el lateral derecho de la sección de servicios.
Animación CSS o Motion: bobbing infinito arriba/abajo
+ ligera rotación izquierda/derecha.
Al hacer hover sobre la nave, hace un spin rápido 
y divertido (360deg en 0.3s).
En móvil se oculta para no molestar.

── CURSOR PERSONALIZADO ──
En desktop, el cursor se reemplaza por una pequeña 
estrella o nave espacial que sigue al ratón con 
un ligero lag (trailing effect) usando Motion.
useMousePosition + motion.div con spring physics.
Solo en desktop (hidden en touch devices).

── ESTRELLAS FLOTANTES DE FONDO ──
En el hero, pequeñas partículas / estrellas flotantes 
generadas con JS (canvas o divs absolutos).
15-20 partículas de distintos tamaños, opacidad baja,
moviéndose muy lentamente. Parallax sutil al mover el ratón.
Complementan el video sin tapar el contenido.

── CARDS DE SERVICIOS INTERACTIVAS ──
Al hacer hover en cada card:
- La card se eleva con sombra de color verde
- El icono hace un bounce (keyframe: scale 1→1.3→1)
- Aparece un pequeño badge animado 
  tipo "¡Pregúntanos!" que sale desde abajo con spring

── TRANSICIÓN DE SECCIONES ──
Entre secciones, una ola SVG decorativa animada 
(wave divider) en verde que separa visualmente 
los bloques. La ola tiene una animación CSS suave
de movimiento horizontal infinito (translateX loop).

── TEXTO TYPING EN EL HERO ──
El subtítulo del hero aparece con efecto typewriter:
las palabras se escriben letra a letra con cursor 
parpadeante. Secuencia rotando en bucle cada 3 segundos:
"Refuerzo escolar" → "Inglés" → "Informática"
con fade entre palabras.

── CONFETTI AL ENVIAR FORMULARIO ──
Cuando el usuario envía el formulario de contacto,
lanza una pequeña explosión de confetti colorido 
(verde, amarillo, blanco) durante 2 segundos.
Usar canvas-confetti (npm install canvas-confetti).
Mensaje de éxito animado: "¡Nos ponemos en contacto contigo!"

── SCROLL PROGRESS BAR ──
Barra de progreso fina en la parte superior de la página
que va llenándose en verde conforme el usuario hace scroll.
useScroll de Motion + scaleX transform en el eje X.
Altura 3px, color verde lima del logo.

═══════════════════════════════════════════════
DETALLES TÉCNICOS
═══════════════════════════════════════════════

- El video hero.mp4 está en /hero.mp4 (raíz del proyecto,
  muévelo a public/ antes de empezar)
- Google Maps embed: iframe con la dirección de la academia
- Scroll suave: CSS scroll-behavior smooth en html
- Totalmente responsive: móvil primero
- Sin errores en consola
- Semántico: header, main, section con id, footer
- Cada section tiene id para la navegación:
  #servicios #por-que #opiniones #como-llegar #contacto

═══════════════════════════════════════════════
ANTES DE CODIFICAR
═══════════════════════════════════════════════

1. Muéveme el hero.mp4 a la carpeta public/ si no está ya
2. Instala las dependencias necesarias:
   npm install motion canvas-confetti lucide-react
3. Proponme la paleta de colores exacta y la tipografía 
   elegida en bullets
4. Muéstrame el listado de componentes que vas a crear
5. Espera mi confirmación antes de empezar a crear archivos