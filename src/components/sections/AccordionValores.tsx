import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, Award, Shield, Leaf, Lightbulb, Heart } from "lucide-react";

const valoresYPrincipios = [
  {
    id: "excelencia",
    title: "Excelencia Profesional",
    description:
      "Promovemos los más altos estándares de calidad y competencia técnica en la práctica de la ingeniería de minas.",
    icon: Award,
  },
  {
    id: "etica",
    title: "Ética",
    description:
      "Actuamos con integridad, honestidad y transparencia en todas nuestras actividades profesionales.",
    icon: Shield,
  },
  {
    id: "sostenibilidad",
    title: "Sostenibilidad",
    description:
      "Impulsamos prácticas mineras que equilibran el desarrollo económico con la protección ambiental y el bienestar social.",
    icon: Leaf,
  },
  {
    id: "innovacion",
    title: "Innovación",
    description:
      "Fomentamos la investigación, el desarrollo y la aplicación de nuevas tecnologías y metodologías en el sector minero.",
    icon: Lightbulb,
  },
  {
    id: "colaboracion",
    title: "Colaboración",
    description:
      "Trabajamos en conjunto con todos los actores del sector para lograr objetivos comunes y generar sinergias.",
    icon: Users,
  },
  {
    id: "responsabilidad",
    title: "Responsabilidad Social",
    description:
      "Promovemos el compromiso con las comunidades y el desarrollo social en las áreas de influencia de la actividad minera.",
    icon: Heart,
  },
];

export function AccordionValores() {
  return (
    <Accordion type="multiple" className="w-full">
      {valoresYPrincipios.map((valor) => {
        const Icon = valor.icon;
        return (
          <AccordionItem
            key={valor.id}
            value={valor.id}
            className="border rounded-lg mb-4 overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-muted/50 hover:bg-muted group">
              <div className="flex items-center gap-4">
                <div className="text-primary transition-colors duration-300 group-hover:text-primary/80">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 text-left">
                  {valor.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-700 text-base">
              <p className="pl-14">{valor.description}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
