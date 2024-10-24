"use client"

import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import React from "react";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";


export default function Projects() {

    const { ref } = useSectionInView('Proyectos', 0.5);

  return (
    <section ref={ref} id="proyectos" className="scroll-mt-28 mb-28">
        <SectionHeading>Ejemplo de mis proyectos</SectionHeading>

        {/*Mostramos cada uno de los proyectos*/}
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}


