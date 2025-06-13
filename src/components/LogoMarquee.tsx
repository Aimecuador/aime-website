import { useState, useRef, useEffect } from 'react'

interface LogoMarqueeProps {
  logos: {
    name: string
    image: string
    href?: string
    scale?: number
    marginLeft?: number
  }[]
  speed?: number
}

export function LogoMarquee({ logos, speed = 75 }: LogoMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const currentPositionRef = useRef(0)
  const lastTimestampRef = useRef<number | null>(null)

  const duplicatedLogos = [...logos, ...logos]

  useEffect(() => {
    let animationId: number

    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp
      }

      if (!isPaused && marqueeRef.current) {
        const elapsed = timestamp - lastTimestampRef.current
        currentPositionRef.current += (elapsed * speed) / 1000
        marqueeRef.current.style.transform = `translateX(-${currentPositionRef.current}px)`

        const containerWidth = marqueeRef.current.scrollWidth / 2
        if (currentPositionRef.current >= containerWidth) {
          currentPositionRef.current = 0
        }
      }

      lastTimestampRef.current = timestamp
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isPaused, speed])

  return (
    <div
      className="mt-5 grid h-28 w-full place-items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {duplicatedLogos.map((logo, index) => (
          <a
            key={`${logo.name}-${index}`}
            href={logo.href || '#'}
            target={logo.href ? '_blank' : ''}
            className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
            rel="noopener noreferrer"
            style={{ marginLeft: logo.marginLeft || 0 }}
          >
            <img
              src={logo.image || '/placeholder.svg'}
              alt={logo.name}
              className="h-[85px] min-w-32 max-w-max object-contain"
              style={{
                transform: `scale(${logo.scale || 1})`,
              }}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
