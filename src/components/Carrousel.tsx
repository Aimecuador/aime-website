import { useEffect, useRef, useState } from 'react'

const TOTAL_SLIDES = 3
const EXIT_DURATION = 500
const SLIDE_DURATION = 7000

function SlideVideo({
  current,
  index,
  exiting,
  videoRef,
}: {
  current: number
  index: number
  exiting: number | null
  videoRef: React.RefObject<HTMLVideoElement | null>
}) {
  const visible = current === index

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${exiting === index ? 'animate__animated animate__fadeOut animate__faster' : ''}`}
      style={{
        zIndex: visible ? 10 : 0,
        opacity: visible ? 1 : 0,
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="pointer-events-none h-full w-full object-cover brightness-90"
      >
        <source src="/videos/hero-banner.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

function SlideImage({
  current,
  index,
  exiting,
}: {
  current: number
  index: number
  exiting: number | null
}) {
  const visible = current === index

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${exiting === index ? 'animate__animated animate__fadeOutDown animate__faster' : ''}`}
      style={{ zIndex: visible ? 10 : 0, opacity: visible ? 1 : 0 }}
    >
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/images/home/hero-1-xl.webp"
        />
        <source
          media="(min-width: 640px)"
          srcSet="/images/home/hero-1-lg.webp"
        />
        <img
          src="/images/home/hero-1-sm.webp"
          alt="Minería en Ecuador"
          width={1920}
          height={1080}
          loading="eager"
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {visible && (
          <div
            key={current}
            className="container mx-auto flex h-[70%] max-w-3xl flex-col items-center justify-around text-center text-white"
          >
            <div
              className="animate__animated animate__fadeInDown flex items-center justify-center space-x-2"
              style={{ animationDelay: '100ms' }}
            >
              <div className="h-1 w-10 bg-primary" />
              <span className="font-medium uppercase tracking-wider">AIME</span>
              <div className="h-1 w-10 bg-primary" />
            </div>
            <h1
              className="animate__animated animate__fadeInDown text-4xl font-bold tracking-tighter sm:text-5xl lg:text-[55px]"
              style={{ animationDelay: '200ms' }}
            >
              Asociación de Ingenieros de{' '}
              <span className="text-primary">Minas</span> del Ecuador
            </h1>
            <p
              className="animate__animated animate__lightSpeedInRight text-lg md:text-2xl"
              style={{ animationDelay: '2s' }}
            >
              Promoviendo el desarrollo <strong>sostenible</strong> de la
              minería en Ecuador
            </p>
            <div className="flex flex-col justify-center gap-2 pt-4 sm:flex-row sm:gap-4">
              <a
                href="/contacto"
                className="animate__animated animate__zoomIn inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white transition-all duration-300 hover:scale-105"
                style={{ animationDelay: '1s' }}
              >
                Contáctanos
              </a>
              <a
                href="/quienes-somos"
                className="animate__animated animate__zoomIn group inline-flex h-11 items-center justify-center rounded-md border border-input bg-background/20 px-8 text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-background/40"
                style={{ animationDelay: '1s' }}
              >
                Conoce más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function SlideJoin({
  current,
  index,
  exiting,
}: {
  current: number
  index: number
  exiting: number | null
}) {
  const visible = current === index

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${exiting === index ? 'animate__animated animate__fadeOutTopLeft animate__faster' : ''}`}
      style={{ zIndex: visible ? 10 : 0, opacity: visible ? 1 : 0 }}
    >
      <img
        src="/images/home/hero-banner-3.jpeg"
        alt="Únete a AIME"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {visible && (
          <div
            key={current}
            className="container mx-auto flex h-[70%] max-w-3xl flex-col items-center justify-around text-center text-white"
          >
            <h1
              className="animate__animated animate__fadeInTopLeft font-barlow text-5xl font-bold tracking-tighter sm:text-7xl lg:text-8xl"
              style={{ animationDelay: '200ms' }}
            >
              ¡Únete a AIME!
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl">
              Sé parte del cambio hacia una minería{' '}
              <strong>responsable, sostenible e innovadora</strong> en el país
            </p>
            <div
              className="animate__animated animate__bounceInUp flex flex-col justify-center gap-2 pt-4 sm:flex-row sm:gap-4"
              style={{ animationDelay: '1s' }}
            >
              <a
                href="/contacto"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white transition-all duration-300 hover:scale-105"
              >
                Afíliate ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Carrousel() {
  const [current, setCurrent] = useState(0)
  const [exiting, setExiting] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  )

  const goTo = (index: number) => {
    if (index === current || exiting !== null) return
    clearTimeout(timerRef.current)
    clearTimeout(transitionTimerRef.current)

    setExiting(current)

    transitionTimerRef.current = setTimeout(() => {
      setCurrent(index)
      setExiting(null)
    }, EXIT_DURATION)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onEnded = () => {
      goTo((current + 1) % TOTAL_SLIDES)
    }

    video.addEventListener('ended', onEnded)
    if (video.ended && exiting === null) {
      goTo((current + 1) % TOTAL_SLIDES)
    }

    return () => video.removeEventListener('ended', onEnded)
  }, [current, exiting])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (current === 0 && exiting === null) {
      video.currentTime = 0
      video.play().catch(() => {})
    } else if (exiting !== 0) {
      video.pause()
    }
  }, [current, exiting])

  useEffect(() => {
    if (current === 1 || current === 2) {
      timerRef.current = setTimeout(() => {
        const next = (current + 1) % TOTAL_SLIDES
        goTo(next)
      }, SLIDE_DURATION - EXIT_DURATION)
    }

    return () => clearTimeout(timerRef.current)
  }, [current])

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current)
      clearTimeout(transitionTimerRef.current)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SlideVideo
          current={current}
          index={0}
          exiting={exiting}
          videoRef={videoRef}
        />
        <SlideImage current={current} index={1} exiting={exiting} />
        <SlideJoin current={current} index={2} exiting={exiting} />
      </div>

      <button
        type="button"
        onClick={() => goTo((current - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)}
        className="absolute left-5 md:left-20 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        aria-label="Anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo((current + 1) % TOTAL_SLIDES)}
        className="absolute right-5 md:right-20 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        aria-label="Siguiente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <section
        id="inicio"
        className="min-h-[calc(100dvh-13dvh)] overflow-hidden"
      />
    </div>
  )
}
