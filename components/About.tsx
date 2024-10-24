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
      <div className="flex flex-col items-center p-4">
		<p className="text-center mb-4">
			Desde siempre, me han apasionado las nuevas tecnologías, por lo que decidí inscribirme en un 
			<span className="font-bold"> Bootcamp</span>, para poder adquirir 
			experiencia y conocimientos a través de distintas tecnologías. Después, me matriculé en el grado superior de
			<span className="font-bold"> Desarrollo de Aplicaciones Web</span>. para seguir desarrollando mis habilidades.
			Durante grado, tuve la suerte de poder conocer el framework de 
			<span className="italic font-bold"> React</span>, el cual me gustó mucho y me motivó a realizar 
			proyectos propios y cursos para poder comprenderlo mejor.
			<p>Actualmente estoy desarrollando proyectos con: <span className="font-bold">React, TypeScript, Next.js y Tailwind
			</span>. También, estoy aprendiendo otras tecnologías como Express, MongoDB y Prisma para integrarlas en mis proyectos.
			Me gusta mantenerme actualizada y aprender nuevas herramientas para desarrollar mis proyectos de la mejor manera posible.
			Actualmente busco un puesto de <span className="font-bold">full-stack developer.</span></p>
			<span className="italic">Cuando no estoy programando</span>, disfruto leer, especialmente libros de fantasía, ver series y películas de terror, y salir con mis amigos. Además, estoy estudiando inglés con el objetivo de obtener el título B2.
		</p>
      </div>

    </motion.section>
  );
}
