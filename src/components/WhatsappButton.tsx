import { useState, useEffect } from "react"
import WhatsAppIcon from "./icons/whatsapp"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar el botón después de un pequeño desplazamiento
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Mostrar el botón después de 3 segundos incluso sin scroll
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <a
      href="https://wa.me/593968204060"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-2 z-50 flex items-center justify-center w-10 h-10 bg-[#25D366] rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  )
}

