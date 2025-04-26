import { useState, useEffect } from "react";
import SocialIcons from "./SocialIcons";
import { cn } from "../lib/utils";

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Quienes Somos", href: "/quienes-somos" },
  { name: "Comisiones Técnicas", href: "/comisiones-tecnicas" },
  { name: "Eventos", href: "/eventos" },
  { name: "Galería", href: "/galeria" },
  { name: "PIIMU", href: "/PIIMU" },
  { name: "Minería para todos", href: "/mineria-para-todos" },
  { name: "Noticias", href: "/noticias" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileMenuButton = document.getElementById("mobile-menu-button");

      if (mobileMenu && mobileMenuButton) {
        const target = event.target as Node;
        const isClickInside =
          mobileMenu.contains(target) || mobileMenuButton.contains(target);

        if (!isClickInside && isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full top-0 z-40">
      <div
        className={cn(
          "bg-primary transition-all duration-300 ease-in-out",
          isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-10"
        )}
      >
        <div className="container mx-auto flex items-center justify-end h-10">
          <SocialIcons />
        </div>
      </div>

      <div
        className={cn(
          "w-full transition-all bg-[#fffdfa] duration-300 ease-in-out border-b border-b-gray-200",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="h-[55px] w-[60px]">
              <img
                src={"/aime-logo-sin-texto.jpg"}
                alt="AIME logo"
                className="h-full w-full"
              />
            </a>

            <nav className="hidden xl:flex items-center gap-5">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-se text-gray-800 transition-colors py-2 hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <button type="button" className="hidden xl:block bg-primary rounded-md px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-opacity-90 hover:cursor-pointer">
              Hazte Miembro
            </button>

            <button
              type="button"
              id="mobile-menu-button"
              className="focus:outline-none xl:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            </button>
          </div>

          <div
            id="mobile-menu"
            className={cn(
              "absolute top-full left-0 z-40 w-full border-t border-gray-200 bg-white ease-out xl:hidden transform transition-all duration-300",
              isMenuOpen
                ? "translate-y-0 opacity-100 visible"
                : "-translate-y-6 opacity-0 invisible"
            )}
          >
            <nav className="space-y-1 px-5 pt-2 pb-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="border-t border-gray-200 pt-4 pb-3">
                <button type="button" className="bg-primary block w-full rounded-md px-4 py-2 text-center text-base font-medium text-white transition-colors duration-300 hover:cursor-pointer hover:bg-opacity-90">
                  Hazte Miembro
                </button>
              </div>
            </nav>
          </div>

          <div
            className={cn(
              "absolute top-full left-0 w-full h-[100vh] z-30 bg-black bg-opacity-50 transition-opacity duration-300 xl:hidden",
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}