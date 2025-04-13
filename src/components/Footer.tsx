import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary text-white">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/aime-logo-sin-texto.jpg" alt="AIME Logo" width={50} height={50} className="rounded" />
              <span className="text-xl font-bold tracking-tight">AIME</span>
            </div>
            <p className="text-sm text-gray-300">
              Asociación de Ingenieros en Minas del Ecuador. Promoviendo la excelencia profesional y el desarrollo
              sostenible de la minería en Ecuador.
            </p>
            <div className="mt-6">
              <SocialIcons iconClassName="h-4 w-4" iconColor="text-gray-300 hover:text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-primary">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/nosotros" className="text-gray-300 hover:text-primary">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-gray-300 hover:text-primary">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/comisiones-tecnicas" className="text-gray-300 hover:text-primary">
                  Comisiones Técnicas
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-gray-300 hover:text-primary">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/blog" className="text-gray-300 hover:text-primary">
                  Publicaciones
                </a>
              </li>
              <li>
                <a href="/eventos" className="text-gray-300 hover:text-primary">
                  Eventos
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-gray-300 hover:text-primary">
                  Certificaciones
                </a>
              </li>
              <li>
                <a href="/servicios/empleo" className="text-gray-300 hover:text-primary">
                  Bolsa de Trabajo
                </a>
              </li>
              <li>
                <a href="/galeria" className="text-gray-300 hover:text-primary">
                  Galería
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Estatutos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary">
                  Código de Ética
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Asociación de Ingenieros de Minas del Ecuador. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}