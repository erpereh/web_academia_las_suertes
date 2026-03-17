interface WaveDividerProps {
  color?: string
  flip?: boolean
}

export default function WaveDivider({ color = 'var(--blanco)', flip = false }: WaveDividerProps) {
  return (
    <div
      className="relative -my-1 overflow-hidden leading-[0]"
      style={{ transform: flip ? 'rotate(180deg)' : undefined }}
      aria-hidden="true"
    >
      <div className="animate-wave w-[200%]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-16 w-[50%] sm:h-20"
          style={{ display: 'inline-block' }}
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
            fill={color}
          />
        </svg>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-16 w-[50%] sm:h-20"
          style={{ display: 'inline-block' }}
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  )
}
