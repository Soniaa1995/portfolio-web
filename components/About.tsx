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
      <p className="mb-3">
        Desde siempre me han apasionado las nuevas tecnologías, por ello, decidí apuntatme a un {" "}
        <span className="font-medium">Bootcamp</span>, para poder adquirir 
        experiencia y conocimientos través de distintas tecnologías. Después, me apunté al grado superior de{" "}
        <span className="font-medium">Desarrollo de Aplicaciones Web</span>.{" "} para seguir ampliando mis conocimientos.
        En el grado tuve la suerte de poder conocer el framework de 
        <span className="italic">React</span>, el cual me gustó mucho y quise realizar 
        proyectos propios y cursos para poder entenderlo mejor.
        Actualmente estoy desarrollando proyectos con:{" "}
        <span className="font-medium">
          React, TypeScript, Next.js y Tailwind
        </span>. Además, estoy aprendiendo otras tecnologías como Express, MongoDB y Prisma para poder integrarlo a mis proyectos.
        Me gusta aprender nuevas tecnologías y estar al día para desarrollar todos mis proyectos de la mejor forma posible.{" "}
        Actualmente busco un puesto de <span className="font-medium">full-stack developer.</span>
      </p>
      <p>
        <span className="italic">Cuando no estoy programando</span>, me gusta mucho leer, sobre todo los libros de fantasía,
        ver series, películas de terror y  salir con mis amigos. Además, estoy aprendiendo inglés para poder obtener el título del B2.
      </p>
    </motion.section>
  );
}
