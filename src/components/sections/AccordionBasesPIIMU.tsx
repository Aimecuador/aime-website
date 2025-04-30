import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  GraduationCap,
  Globe,
  Handshake,
  Leaf,
  Lightbulb,
  Users,
  Network,
  Building,
  ArrowRight,
} from 'lucide-react';

// Bases que sustentan el programa
const bases = [
  {
    id: "educacion",
    title: "Compromiso con la Educación y el Desarrollo Profesional",
    icon: GraduationCap,
    description: [
      "AIME busca ser el motor que impulse la formación de ingenieros de minas altamente capacitados, alineados con las demandas y desafíos internacionales de la industria minera.",
      "El programa fomenta el desarrollo de habilidades técnicas avanzadas, promoviendo el aprendizaje de tecnologías de vanguardia y la aplicación de nuevas metodologías en minería sostenible.",
    ],
  },
  {
    id: "proyeccion",
    title: "Proyección Internacional de la Minería Ecuatoriana",
    icon: Globe,
    description: [
      "El PIIMU no solo busca beneficiar a los estudiantes, sino también colocar a Ecuador en el mapa global de la minería.",
      "Este enfoque internacional también contribuye a mejorar la visibilidad de la minería ecuatoriana, mostrando su compromiso con la sostenibilidad, la innovación y el desarrollo responsable de los recursos naturales.",
    ],
  },
  {
    id: "alianzas",
    title: "Alianzas Estratégicas con Universidades y Empresas Internacionales",
    icon: Handshake,
    description: [
      "El programa establece alianzas con universidades, centros de investigación y empresas mineras de renombre mundial.",
      "Las instituciones participantes, tanto locales como internacionales, proporcionan un entorno colaborativo que facilita el aprendizaje y la integración de soluciones prácticas a los problemas comunes de la minería.",
    ],
  },
  {
    id: "sostenibilidad",
    title: "Fomento de la Minería Sostenible y Responsable",
    icon: Leaf,
    description: [
      "Un pilar fundamental del PIIMU es la minería sostenible, en línea con los Objetivos de Desarrollo Sostenible (ODS) de la ONU.",
      "Durante el intercambio y las pasantías, los estudiantes están expuestos a proyectos que promueven la minería verde, la reducción del impacto ambiental y la mejora de la calidad de vida de las comunidades cercanas a las operaciones mineras.",
    ],
  },
  {
    id: "competencias",
    title: "Desarrollo de Competencias Interculturales y Profesionales",
    icon: Users,
    description: [
      "Los estudiantes que participan en el PIIMU adquieren una valiosa experiencia internacional que los prepara para trabajar en entornos multiculturales.",
      "El programa no solo se enfoca en el aspecto técnico de la minería, sino también en la gestión de proyectos, el liderazgo y la comunicación efectiva en entornos internacionales.",
    ],
  },
  {
    id: "investigacion",
    title: "Investigación y Desarrollo Colaborativo",
    icon: Lightbulb,
    description: [
      "El PIIMU promueve la investigación aplicada, ofreciendo a los estudiantes la posibilidad de participar en proyectos de investigación conjunta entre universidades e industrias mineras de diferentes países.",
      "Los estudiantes tienen la oportunidad de contribuir al desarrollo de nuevas tecnologías mineras, desde métodos de extracción más limpios hasta el uso de tecnologías de monitoreo ambiental y social.",
    ],
  },
  {
    id: "redes",
    title: "Acceso a Redes Profesionales Internacionales",
    icon: Network,
    description: [
      "El PIIMU facilita la creación de redes de contacto que permiten a los estudiantes acceder a oportunidades profesionales y laborales en el ámbito internacional.",
      "Los participantes no solo establecen relaciones con sus pares, sino también con expertos de la industria y académicos internacionales, lo que mejora sus perspectivas de empleabilidad y colaboración en proyectos de investigación.",
    ],
  },
  {
    id: "impacto",
    title: "Impacto en la Comunidad Minera Ecuatoriana",
    icon: Building,
    description: [
      "A través del PIIMU, AIME busca fortalecer el ecosistema minero ecuatoriano, ya que los estudiantes que participan en el programa regresan con una visión renovada, con nuevos conocimientos y con la capacidad de implementar buenas prácticas y tecnologías adquiridas en el extranjero.",
      "Esto contribuye al crecimiento del sector minero del país, mejorando las capacidades de los futuros profesionales y promoviendo el desarrollo económico local.",
    ],
  },
];

export function AccordionBasesPIIMU () {
  return (
    <Accordion type="single" collapsible className="w-full">
      {bases.map((base) => (
        <AccordionItem key={base.id} value={base.id}>
          <AccordionTrigger className="hover:no-underline data-[state=open]:bg-muted group">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <base.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-left group-data-[state=open]:text-primary transition-colors">
                {base.title}
              </h3>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-2 pb-4 pl-16">
              <ul className="space-y-2">
                {base.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}