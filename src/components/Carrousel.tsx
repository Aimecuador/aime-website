import { memo, useCallback, useEffect, useRef, useState } from 'react'

const TOTAL_SLIDES = 5
const INTRO_DURATION = 2800
const EXIT_DURATION = 500
const SLIDE_DURATION = 7000

const SlideIntro = memo(function SlideIntro({
  current,
  index,
  exiting,
  exitClass,
  entryClass,
}: {
  current: number
  index: number
  exiting: number | null
  exitClass?: string
  entryClass?: string
}) {
  const visible = current === index
  const exitAnim =
    exitClass || (index === 0 ? 'animate__zoomOut' : 'animate__fadeOutDown')
  const enterAnim = entryClass || (index === 2 ? 'animate__zoomIn' : '')

  return (
    <div
      className={`absolute inset-0 bg-white${!exiting || exiting !== index ? 'transition-opacity duration-1000' : ''}${exiting === index ? `animate__animated ${exitAnim} animate__faster` : ''}`}
      style={{ zIndex: visible ? 10 : 0, opacity: visible ? 1 : 0 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,166,35,0.14),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(25,16,19,0.08),_transparent_35%)]" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        {visible && (
          <div
            key={current}
            className={`flex w-full max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12${enterAnim ? `animate__animated ${enterAnim} animate__faster` : ''}`}
          >
            <img
              src="/images/eventos/cumbre/cumbre-logo.png"
              alt="Logo del evento"
              className="animate__animated animate__zoomIn w-44 shrink-0 drop-shadow-[0_10px_22px_rgba(25,16,19,0.14)] sm:w-56 lg:w-[20rem]"
              style={{ animationDelay: '120ms' }}
            />

            <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
              <div className="flex flex-wrap items-end justify-center gap-2 lg:justify-start">
                <img
                  src="/images/eventos/cumbre/XI.png"
                  alt="XI"
                  className="animate__animated animate__fadeInDown h-16 w-auto sm:h-20 lg:h-24"
                  style={{ animationDelay: '260ms' }}
                />
                <img
                  src="/images/eventos/cumbre/cumbre.png"
                  alt="CUMBRE"
                  className="animate__animated animate__fadeInRight h-16 w-auto sm:h-20 lg:h-24"
                  style={{ animationDelay: '420ms' }}
                />
              </div>
              <img
                src="/images/eventos/cumbre/internacional.png"
                alt="INTERNACIONAL"
                className="animate__animated animate__fadeInUp h-14 w-auto sm:h-16 lg:h-20"
                style={{ animationDelay: '620ms' }}
              />
              <img
                src="/images/eventos/cumbre/minera.png"
                alt="MINERA"
                className="animate__animated animate__fadeInUp h-16 w-auto sm:h-20 lg:h-24"
                style={{ animationDelay: '820ms' }}
              />
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <img
                  src="/images/eventos/cumbre/paises/1.png"
                  alt=""
                  className="animate__animated animate__fadeInRight h-6 w-auto sm:h-7 lg:h-8"
                  style={{ animationDelay: '1000ms' }}
                />
                <img
                  src="/images/eventos/cumbre/paises/2.png"
                  alt=""
                  className="animate__animated animate__fadeInRight h-6 w-auto sm:h-7 lg:h-8"
                  style={{ animationDelay: '1100ms' }}
                />
                <img
                  src="/images/eventos/cumbre/paises/3.png"
                  alt=""
                  className="animate__animated animate__fadeInRight h-6 w-auto sm:h-7 lg:h-8"
                  style={{ animationDelay: '1200ms' }}
                />
                <img
                  src="/images/eventos/cumbre/paises/4.png"
                  alt=""
                  className="animate__animated animate__fadeInRight h-6 w-auto sm:h-7 lg:h-8"
                  style={{ animationDelay: '1300ms' }}
                />
                <img
                  src="/images/eventos/cumbre/paises/5.png"
                  alt=""
                  className="animate__animated animate__fadeInRight h-6 w-auto sm:h-7 lg:h-8"
                  style={{ animationDelay: '1400ms' }}
                />
                <img
                  src="/images/eventos/cumbre/paises/6.png"
                  alt=""
                  className="animate__animated animate__fadeInRight h-6 w-auto sm:h-7 lg:h-8"
                  style={{ animationDelay: '1500ms' }}
                />
                <img
                  src="/images/eventos/cumbre/paises/7.png"
                  alt=""
                  className="animate__animated animate__fadeInRight h-6 w-auto sm:h-7 lg:h-8"
                  style={{ animationDelay: '1600ms' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})

const SlideVideo = memo(function SlideVideo({
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
      className={`absolute inset-0 ${exiting === index ? 'animate__animated animate__zoomOut animate__faster' : visible && exiting === null ? 'animate__animated animate__zoomIn animate__faster' : 'pointer-events-none opacity-0'}`}
      style={{
        zIndex: visible ? 10 : 0,
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="pointer-events-none h-full w-full object-cover brightness-90"
      >
        <source src="/videos/hero-banner-2.mp4" type="video/mp4" />
      </video>
    </div>
  )
})

const SlideImage = memo(function SlideImage({
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
})

const SlideJoin = memo(function SlideJoin({
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
      className={`absolute inset-0 transition-opacity duration-1000 ${exiting === index ? 'animate__animated animate__fadeOutUp animate__faster' : ''}`}
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
})

export default function Carrousel() {
  const [current, setCurrent] = useState(0)
  const [exiting, setExiting] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  )

  const currentRef = useRef(current)
  const exitingRef = useRef(exiting)
  currentRef.current = current
  exitingRef.current = exiting

  const goTo = useCallback((index: number) => {
    if (index === currentRef.current || exitingRef.current !== null) return
    clearTimeout(timerRef.current)
    clearTimeout(transitionTimerRef.current)

    setExiting(currentRef.current)

    transitionTimerRef.current = setTimeout(() => {
      setCurrent(index)
      setExiting(null)
    }, EXIT_DURATION)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onEnded = () => {
      goTo((currentRef.current + 1) % TOTAL_SLIDES)
    }

    video.addEventListener('ended', onEnded)
    return () => video.removeEventListener('ended', onEnded)
  }, [goTo])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (current === 1 && exiting === null) {
      video.currentTime = 0
      video.play().catch(() => {})
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [current, exiting])

  useEffect(() => {
    if (current === 0) {
      timerRef.current = setTimeout(() => {
        goTo(1)
      }, INTRO_DURATION)
    }

    if (current === 2) {
      timerRef.current = setTimeout(() => {
        goTo(3)
      }, INTRO_DURATION)
    }

    if (current === 3 || current === 4) {
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
        <SlideIntro current={current} index={0} exiting={exiting} />
        <SlideVideo
          current={current}
          index={1}
          exiting={exiting}
          videoRef={videoRef}
        />
        <SlideIntro current={current} index={2} exiting={exiting} />
        <SlideImage current={current} index={3} exiting={exiting} />
        <SlideJoin current={current} index={4} exiting={exiting} />
      </div>

      <button
        type="button"
        onClick={() => {
          let target: number
          if (current <= 2) target = 4
          else if (current === 3) target = 0
          else target = 3
          goTo(target)
        }}
        className="absolute left-5 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 md:left-20"
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
        onClick={() => goTo(current < 3 ? 3 : (current + 1) % TOTAL_SLIDES)}
        className="absolute right-5 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 md:right-20"
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
