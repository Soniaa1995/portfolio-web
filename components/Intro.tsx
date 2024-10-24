"use client"

import Image from "next/image";
import foto from "../public/retocada.png"
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {

    const { ref } = useSectionInView('Inicio', 0.5);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section ref={ref} id="inicio" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}
                >
                    <Image 
                        src={foto}
                        alt="Imagen-prueba"
                        width="192"
                        height="192"
                        quality={95}
                        priority={true}
                        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />
                </motion.div>
            </div>
        </div>

        <motion.h1 
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Hola, mi nombre es Sonia.</span> Soy{" "}
            <span className="font-bold">Junior Frontend Developer</span> y desde hace unos años empecé {" "}
            <span className="font-bold">como hobbie</span> a desarrollar aplicaciones web 
            hasta el punto de convertirse en <span className="italic">mi pasión</span>. Actualmente programo con{" "}
            <span className="underline">React y Next.js</span>.
        </motion.h1>

        <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1
            }}
        >
            <Link 
                href="#contacto" 
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                    setActiveSection("Contacto");
                    setTimeOfLastClick(Date.now())
                    //Al darle click l boton contacta aqui nos redirige automaticamente al apartado de contacto
                }}
            >
                    Contacta aquí <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <a 
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border borderBlack"
                href="/MorenoParronSonia-CV.pdf" download
            >
                    Descarga CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
            <a 
                className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] 
                hover:text-gray-950 active:scale-105 transition cursor-pointer border borderBlack"
                href="https://www.linkedin.com/in/soniamorenoparron/"
                target="_blank"
            >
                    <BsLinkedin />
            </a>
            <a 
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] 
                hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border borderBlack"
                href="https://github.com/Soniaa1995"
                target="_blank"
            >
                    <FaGithubSquare />
            </a>
        </motion.div>

    </section>
  )
}
