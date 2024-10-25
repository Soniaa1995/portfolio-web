"use client"

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";



export default function About() {

    const { ref } = useSectionInView('Sobre mí');

  return (
    <motion.section
        ref={ref} 
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="sobremi"
    >
      <SectionHeading>Sobre mí</SectionHeading>
      <div className="p-4">
        <p className="mb-4">
          Desde siempre me han apasionado las nuevas tecnologías, por lo que decidí inscribirme en un 
          <span className="font-bold"> Bootcamp</span> para poder adquirir 
          experiencia y conocimientos en programación. Después, me matriculé en el grado superior de
          <span className="font-bold"> Desarrollo de Aplicaciones Web</span> para seguir formándome.
          Durante el grado, estudié el framework de 
          <span className="italic font-bold"> React</span>, el cual me gustó mucho y me motivó a realizar cursos y
          proyectos propios.
          <p>Actualmente, estoy desarrollando proyectos con: <span className="font-bold">React, TypeScript, Next.js y Tailwind
          </span>. También he realizado cusos de <span className="font-bold">Java y Angular</span> con los que he podido aprender otras tecnologías como Express, MongoDB o Prisma.
          Con frecuencia investigo para mantenerme actualizada y aprender nuevas herramientas para desarrollar mis proyectos de la mejor manera posible.</p>
        </p>
      </div>

    </motion.section>
  );
}
