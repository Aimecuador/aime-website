import {
  useState,
  useEffect,
  useRef,
  type TouchEvent,
  type MouseEvent,
} from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

type CarouselItem = {
  title: string;
  description: string;
  imageMobile: string;
  imageXL: string;
  imageXXL: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
};

const carouselItems: CarouselItem[] = [
  {
    title: "Asociación de Ingenieros de Minas del Ecuador",
    description:
      "Promoviendo el desarrollo sostenible de la minería en Ecuador a través de la excelencia profesional y la innovación.",
    imageMobile: "/images/home/hero-1-sm.webp",
    imageXL: "/images/home/hero-1-lg.webp",
    imageXXL: "/images/home/hero-1-xl.webp",
    primaryButton: {
      text: "Contáctanos",
      href: "/contacto",
    },
    secondaryButton: {
      text: "Conoce más",
      href: "/quienes-somos",
    },
  },
  {
    title: "Últimas Noticias",
    description:
      "Mantente informado sobre las últimas novedades de las actividades que realiza AIME. Noticias, eventos y más.",
    imageMobile: "/images/home/hero-1-sm.webp",
    imageXL: "/images/home/hero-1-lg.webp",
    imageXXL: "/images/home/hero-1-xl.webp",
    primaryButton: {
      text: "Ver noticias",
      href: "/noticias",
    },
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const nextSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const mouseStartX = useRef<number | null>(null);
  const mouseEndX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e: MouseEvent) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
    mouseEndX.current = null;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    mouseEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current || !mouseStartX.current || !mouseEndX.current) {
      isDragging.current = false;
      return;
    }

    const distance = mouseStartX.current - mouseEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    mouseStartX.current = null;
    mouseEndX.current = null;
    isDragging.current = false;
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        mouseStartX.current = null;
        mouseEndX.current = null;
      }
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  const currentItem = carouselItems[currentIndex];

  return (
    <section
      id="inicio"
      className="relative h-[500px] md:h-[380px] py-10 overflow-hidden cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="absolute inset-0 z-10 bg-black/75"></div>
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={item.imageXXL} />
            <source media="(min-width: 640px)" srcSet={item.imageXL} />
            <img
              src={item.imageMobile}
              alt="Minería en Ecuador"
              loading={index === 0 ? "eager" : "lazy"}
              className="object-cover w-full h-full"
            />
          </picture>
        </div>
      ))}

      <div className="container relative z-10 h-full flex flex-col justify-center">
        <div
          className={`max-w-3xl space-y-5 text-white transition-all duration-500 ${
            isAnimating
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex items-center space-x-2">
            <div className="h-1 w-10 bg-primary"></div>
            <span className="text-sm font-medium uppercase tracking-wider">
              AIME Ecuador
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            {currentItem.title}
          </h1>
          <p className="text-lg md:text-xl">{currentItem.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {currentItem.primaryButton && (
              <Button
                size="lg"
                className="transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={currentItem.primaryButton.href}>
                  {currentItem.primaryButton.text}
                </a>
              </Button>
            )}
            {currentItem.secondaryButton && (
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 hover:bg-background/40 transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <a
                  href={currentItem.secondaryButton.href}
                  className="flex items-center"
                >
                  {currentItem.secondaryButton.text}{" "}
                  {currentItem.secondaryButton.text === "Conoce más" && (
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="absolute pt-4 bottom-4 left-0 right-0 z-10 flex justify-center space-x-2">
        {carouselItems.map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => {
              if (!isAnimating && index !== currentIndex) {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }, 300);
              }
            }}
            className={`h-2 w-8 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-12" : "bg-white/50"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
