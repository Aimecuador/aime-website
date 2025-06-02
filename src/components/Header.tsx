import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Quienes Somos", href: "/quienes-somos" },
  { name: "Comisiones Técnicas", href: "/comisiones-tecnicas" },
  {
    name: "Eventos",
    dropdown: [
      { name: "Eventos", href: "/eventos" },
      { name: "Galería", href: "/galeria" },
      { name: "PIIMU", href: "/PIIMU" },
      { name: "Revista", href: "/revista" },
    ],
  },
  { name: "Minería para todos", href: "/mineria-para-todos" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [headerClassname, setHeaderClassname] = useState(
    isScrolled
      ? "h-[10dvh] bg-white text-foreground shadow-[0_2px_5px_-1px_rgba(0,0,0,0.1)]"
      : "h-[15dvh] bg-transparent text-white"
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      const homeHeaderClass = isScrolled
        ? "h-[10dvh] bg-white text-foreground shadow-[0_2px_5px_-1px_rgba(0,0,0,0.1)]"
        : "h-[15dvh] bg-transparent text-white";

      setHeaderClassname(homeHeaderClass);
    } else {
      const homeHeaderClass = isScrolled
        ? "h-[10dvh] bg-white text-foreground shadow-[0_2px_5px_-1px_rgba(0,0,0,0.1)]"
        : "h-[15dvh] shadow-[0_2px_5px_-1px_rgba(0,0,0,0.1)]";

      setHeaderClassname(homeHeaderClass);
    }
  }, [isScrolled]);

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
    <header className="fixed w-full top-0 z-40 font-medium">
      <div
        className={cn(
          "w-full transition-all duration-300 ease-in-out grid place-items-center",
          headerClassname
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className={cn(
                "aspect-[800/682] w-auto",
                isScrolled
                  ? "h-[55px]"
                  : "h-[55px] lg:h-[70px] p-1 bg-white rounded-md"
              )}
            >
              <img
                src={"/aime-logo-sin-texto.jpg"}
                alt="AIME logo"
                className="h-full w-full object-contain"
              />
            </a>

            <nav className="hidden xl:flex items-center gap-6 text-base">
              {menuItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className="p-2 hover:text-primary flex items-center gap-1"
                      aria-haspopup="true"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-48 border rounded-md shadow-lg transition-all duration-200 z-50 divide-y px-5 py-1 bg-white text-foreground border-gray-200 divide-gray-200 ${
                        isDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {item.dropdown.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className="block hover:text-primary p-2"
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-se p-2 hover:text-primary"
                  >
                    {item.name}
                  </a>
                )
              )}
            </nav>

            <Button className="hidden xl:inline-block" asChild>
              <a
                href="https://wa.me/593968204060?text=Hola%2C%20me%20interesa%20obtener%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20unirme%20a%20AIME.%20%C2%BFPodr%C3%ADan%20brindarme%20detalles%20%3F%20Gracias."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-block mt-[2px]">Únete a AIME</span>
              </a>
            </Button>

            <button
              type="button"
              id="mobile-menu-button"
              className="focus:outline-none xl:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
                <span
                  className={`${
                    isScrolled ? "hamburger-line" : "hamburger-line-transparent"
                  }`}
                ></span>
                <span
                  className={`${
                    isScrolled ? "hamburger-line" : "hamburger-line-transparent"
                  }`}
                ></span>
                <span
                  className={`${
                    isScrolled ? "hamburger-line" : "hamburger-line-transparent"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          <div
            id="mobile-menu"
            className={cn(
              "absolute top-full left-0 z-40 w-full border-gray-200 bg-white ease-out xl:hidden transform transition-all duration-300",
              isMenuOpen
                ? "translate-y-0 opacity-100 visible"
                : "-translate-y-6 opacity-0 invisible"
            )}
          >
            <nav className="space-y-1 px-5 pt-2 pb-3">
              {menuItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      type="button"
                      className="w-full text-left py-2 text-base font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`pl-4 border-l border-gray-200 transition-all duration-200 overflow-hidden ${
                        isDropdownOpen
                          ? "max-h-60 opacity-100 visible"
                          : "max-h-0 opacity-0 invisible"
                      }`}
                    >
                      {item.dropdown.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className="block py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}

              <div className="border-t border-gray-200 pt-4 pb-3">
                <Button className="xl:hidden" asChild>
                  <a
                    href="https://wa.me/593968204060?text=Hola%2C%20me%20interesa%20obtener%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20unirme%20a%20AIME.%20%C2%BFPodr%C3%ADan%20brindarme%20detalles%20%3F%20Gracias."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="inline-block mt-[2px]">Únete a AIME</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>

          <div
            className={cn(
              "absolute top-full left-0 w-full h-[100vh] z-30 bg-black bg-opacity-65 transition-opacity duration-300 xl:hidden",
              isMenuOpen
                ? "opacity-100 visible backdrop-blur-sm"
                : "opacity-0 invisible"
            )}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
