import {
  Scale,
  Mountain,
  Database,
  Shield,
  Cpu,
  FileSearch,
  ClipboardCheck,
  User,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const comisiones = [
  {
    id: "legal",
    title: "Comisión Legal",
    icon: <Scale className="h-6 w-6 text-primary" />,
    description:
      "La Comisión Legal de la Asociación de Ingenieros de Minas del Ecuador tiene como objetivo brindar asesoramiento jurídico y promover el cumplimiento del marco legal aplicable a la profesión y al ejercicio de la ingeniería en minas en el país.",
    functions: [
      "Asesorar legalmente a los miembros de la Asociación en temas relacionados con el ejercicio profesional, regulaciones mineras, derechos laborales y otros asuntos legales de interés gremial.",
      "Monitorear y analizar las reformas legales y normativas que afecten al sector minero y a la práctica profesional de la ingeniería en minas.",
      "Proponer recomendaciones ante entidades públicas o privadas respecto a leyes, reglamentos y políticas que impacten al sector minero.",
      "Promover el conocimiento jurídico entre los asociados mediante charlas, capacitaciones y publicaciones sobre legislación minera, ambiental y profesional.",
    ],
    director: {
      name: "Dr. FERNANDO VILLAMAR",
      role:
        "Director Ejecutivo Comisión Técnicas de Especialidades Legal y Responsabilidad Social",
      foto: "/placeholder.svg?height=200&width=200&text=Dr.+Villamar",
    },
  },
  {
    id: "geotecnia",
    title: "Comisión de Geotecnia y Mecánica de Rocas",
    icon: <Mountain className="h-6 w-6 text-primary" />,
    description:
      "La Comisión de Geotecnia y Mecánica de Rocas de la Asociación de Ingenieros de Minas del Ecuador se enfoca en el análisis, evaluación y aplicación de conocimientos geotécnicos fundamentales para el diseño y estabilidad de excavaciones mineras subterráneas y a cielo abierto.",
    functions: [
      "Promover el intercambio técnico-científico entre los miembros sobre temas de geotecnia aplicada a la minería y mecánica de rocas.",
      "Fomentar buenas prácticas en la caracterización geomecánica, estabilidad de taludes, sostenimiento de excavaciones y diseño de infraestructura minera.",
      "Organizar capacitaciones, talleres y seminarios especializados en geotecnia minera y tecnologías emergentes del área.",
      "Colaborar con instituciones académicas y técnicas en la generación y difusión de investigaciones aplicadas.",
      "Asesorar a los miembros de la Asociación en problemáticas geotécnicas que requieran criterio técnico especializado.",
    ],
    director: {
      name: "Ing. MARLON PONCE",
      role:
        "Director Ejecutivo Comisión Técnicas de Geotecnia y Mecánica de Rocas",
      foto: "/placeholder.svg?height=200&width=200&text=Ing.+Mendoza",
    },
  },
  {
    id: "recursos",
    title: "Comisión de Recursos y Reservas",
    icon: <Database className="h-6 w-6 text-primary" />,
    description:
      "La Comisión de Recursos y Reservas de la Asociación de Ingenieros de Minas del Ecuador se encarga de fomentar el conocimiento, la aplicación de buenas prácticas y la estandarización en la estimación, clasificación y reporte de recursos y reservas minerales conforme a los marcos internacionales y normativas nacionales.",
    functions: [
      "Fomentar el desarrollo técnico y científico relacionado con la evaluación de depósitos minerales.",
      "Organizar talleres técnicos y prácticos enfocados en temas como estimación de recursos y categorización de reservas.",
      "Difundir lineamientos éticos y técnicos para la certificación responsable de recursos y reservas.",
      "Servir como espacio de consulta técnica para profesionales que participen en la elaboración de informes técnicos o evaluaciones de proyectos mineros.",
      "Colaborar con autoridades y organismos técnicos en la definición y mejora de normativas nacionales relacionadas con recursos y reservas minerales.",
    ],
    director: {
      name: "Ing. FERNANDO DAVID SAAVEDRA GABINO",
      role:
        "Director Ejecutivo Comisión Técnicas de Especialidades Recursos y Reservas Minerales",
      foto: "/placeholder.svg?height=200&width=200&text=Ing.+Varela",
    },
  },
  {
    id: "ssa",
    title: "Comisión de SSA",
    icon: <Shield className="h-6 w-6 text-primary" />,
    description:
      "La Comisión de Seguridad, Salud y Ambiente (SSA) de la Asociación de Ingenieros de Minas del Ecuador tiene como propósito fomentar una cultura minera segura y ambientalmente responsable, alineada con los estándares nacionales e internacionales.",
    functions: [
      "Promover buenas prácticas en seguridad industrial, salud ocupacional y gestión ambiental en operaciones mineras subterráneas y a cielo abierto.",
      "Difundir normativas, estándares y guías técnicas en materia de SSA aplicables al sector minero ecuatoriano.",
      "Organizar talleres, capacitaciones y conversatorios sobre gestión de riesgos, controles operacionales, sistemas de gestión integrada y respuesta ante emergencias.",
      "Impulsar una minería preventiva, basada en la identificación de peligros, evaluación de riesgos y mejora continua.",
    ],
    director: {
      name: "Ing. BYRON ANDRADE",
      role:
        "Director Ejecutivo Comisión Técnicas de Seguridad, Salud y Ambiente SSA",
      foto: "/placeholder.svg?height=200&width=200&text=Ing.+Andrade",
    },
  },
  {
    id: "tecnologia",
    title: "Comisión de Tecnología e Innovación",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    description:
      "La Comisión de Tecnología e Innovación de la Asociación de Ingenieros de Minas del Ecuador impulsa la incorporación de nuevas tecnologías, metodologías y procesos innovadores en la práctica minera, contribuyendo a una industria más eficiente, segura y sostenible.",
    functions: [
      "Organizar talleres, webinars y espacios de actualización tecnológica, orientados al fortalecimiento de competencias digitales y técnicas de los profesionales del sector.",
      "Promover proyectos de innovación aplicada y facilitar el vínculo entre la academia, la industria y los profesionales.",
      "Identificar tendencias globales en tecnología minera y difundir información relevante entre los miembros de la Asociación.",
      "Colaborar en el desarrollo de soluciones técnicas para mejorar la productividad, sostenibilidad y competitividad del sector minero nacional.",
      "Impulsar alianzas estratégicas con centros de investigación, universidades y empresas tecnológicas vinculadas a la minería.",
    ],
    director: {
      name: "Ing. OSWALDO SANDOVAL",
      role:
        "Director Ejecutivo Comisión Técnicas de Tecnología e Innovación CTET",
      foto: "/placeholder.svg?height=200&width=200&text=Ing.+Sandoval",
    },
  },
  {
    id: "peritos",
    title: "Comisión de Peritos",
    icon: <FileSearch className="h-6 w-6 text-primary" />,
    description:
      "La Comisión de Peritos de la Asociación de Ingenieros de Minas del Ecuador tiene como finalidad fortalecer el rol de los ingenieros en minas como peritos técnicos en procesos judiciales, administrativos y consultorías especializadas dentro del ámbito minero.",
    functions: [
      "Promover la formación, actualización y acreditación de los ingenieros en minas como peritos técnicos ante entidades públicas y privadas.",
      "Velar por el cumplimiento ético y técnico en la elaboración de informes periciales, asegurando la objetividad, rigurosidad y respaldo normativo.",
      "Organizar talleres, cursos y simulaciones prácticas sobre elaboración de peritajes, manejo de pruebas técnicas, normativas legales y participación en audiencias.",
      "Colaborar con instituciones del Estado como la Función Judicial, el Ministerio de Energía y Minas, y otras, en procesos que requieran peritajes técnicos especializados.",
    ],
    director: {
      name: "Ing. DIANA AGUAL",
      role: "Director Ejecutivo Comisión Técnicas de Peritaje Técnico",
      foto: "/placeholder.svg?height=200&width=200&text=Ing.+Agual",
    },
  },
  {
    id: "auditores",
    title: "Comisión de Auditores Mineros",
    icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
    description:
      "La Comisión de Auditores Mineros de la Asociación de Ingenieros de Minas del Ecuador tiene como objetivo fortalecer la práctica profesional de la auditoría técnica minera, promoviendo la calidad, transparencia y cumplimiento de estándares en proyectos y operaciones mineras a nivel nacional.",
    functions: [
      "Impulsar la capacitación continua en auditoría técnica minera, alineada a normativas nacionales e internacionales aplicables al sector.",
      "Fomentar la formación y certificación de ingenieros en minas como auditores competentes para procesos de revisión técnica, cumplimiento normativo, evaluación de desempeño y control de calidad.",
      "Organizar talleres, cursos y foros técnicos sobre procesos de auditoría, sistemas de gestión, revisión de informes técnicos y manejo de indicadores clave.",
      "Establecer lineamientos y buenas prácticas para la elaboración de auditorías mineras integrales, incluyendo aspectos técnicos, ambientales, de seguridad y legales.",
      "Brindar asesoría especializada a los miembros interesados en desempeñarse como auditores o mejorar sus competencias en esta área.",
    ],
    director: {
      name: "Ing. EDISON VELOZ",
      role:
        "Director Ejecutivo Comisión Técnicas de Especialidades de Auditoría Minera",
      foto: "/placeholder.svg?height=200&width=200&text=Ing.+Veloz",
    },
  },
];

export function AccordionComisiones() {
  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="multiple" className="w-full">
        {comisiones.map((comision) => (
          <AccordionItem key={comision.id} value={comision.id}>
            <AccordionTrigger className="p-4 hover:no-underline data-[state=open]:bg-muted group">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-start">
                  <h2 className="text-xl font-semibold text-left group-data-[state=open]:text-primary transition-colors">
                    {comision.title}
                  </h2>
                  <span className="text-[13px] text-muted-foreground flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {comision.director.name}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-2 pb-4">
                {/* Director de la comisión */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6 p-4 rounded-lg">
                  <div className="flex-shrink-0 grid place-items-center">
                    {comision.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-primary">
                      {comision.director.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {comision.director.role}
                    </p>
                  </div>
                </div>

                <p className="mb-4">{comision.description}</p>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <div className="h-1 w-6 bg-primary mr-2"></div>
                    Funciones principales
                  </h3>
                  <ul className="space-y-2 pl-6 list-disc">
                    {comision.functions.map((funcion, index) => (
                      <li key={index} className="text-muted-foreground">
                        {funcion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
