import { useState, useRef, useEffect } from "react";

interface LogoMarqueeProps {
  logos: {
    name: string;
    image: string;
  }[];
  speed?: number;
}

export default function LogoMarquee({ logos, speed = 30 }: LogoMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const currentPositionRef = useRef(0);
  const lastTimestampRef = useRef<number | null>(null);

  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      if (!isPaused && marqueeRef.current) {
        const elapsed = timestamp - lastTimestampRef.current;
        currentPositionRef.current += (elapsed * speed) / 1000;
        marqueeRef.current.style.transform = `translateX(-${currentPositionRef.current}px)`;

        const containerWidth = marqueeRef.current.scrollWidth / 2;
        if (currentPositionRef.current >= containerWidth) {
          currentPositionRef.current = 0;
        }
      }

      lastTimestampRef.current = timestamp;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused, speed]);

  return (
    <div className="w-full overflow-hidden h-36">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap gap-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedLogos.map((logo, index) => (
          <img
            src={logo.image || "/placeholder.svg"}
            alt={logo.name}
            width={120}
            height={80}
            className="max-h-24 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
