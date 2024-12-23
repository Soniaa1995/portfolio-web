import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cocktail from "@/public/cocktail.png";
import restaurante from "@/public/restaurante.png"
import veterinario from "@/public/veterinario.png"

export const links = [
  {
    name: "Inicio",
    hash: "#inicio",
  },
  {
    name: "Sobre mí",
    hash: "#sobremi",
  },
  {
    name: "Proyectos",
    hash: "#proyectos",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experiencia",
  },
  {
    name: "Contacto",
    hash: "#contacto",
  },
] as const;

export const experiencesData = [
  {
    title: "Bootcamp Java & Angular",
    location: "Escuela de Organización Inustrial",
    description:
      "En este bootcamp, aprendimos desde cero las bases de la programación con Java y realizamos proyectos utilizando tecnologías como Spring, Spring Boot, Maven, JPA, HTML, CSS, JavaScript, Angular, Git y GitHub.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2022 - Dec 2022 (466 horas)",
  },
  {
    title: "Becaria programadora Web",
    location: "Ávoris",
    description:
      "Las prácticas del grado las realicé en Ávoris, y pude desarrollar tareas de programadora web utilizando HTML, CSS, JavaScript",
    icon: React.createElement(CgWorkAlt),
    date: "Abr 2024 - Jul 2024",
  },
  {
    title: "Curso React",
    location: "Udemy",
    description:
      "Este curso te enseña a crear más de 10 proyectos desde nivel principiante hasta avanzado. Gracias a él curso he podido ampliar mis conocimientos con React y TypeScript.",
    icon: React.createElement(FaReact),
    date: "Jul 2024 - Sep 2024 (58 horas)",
  },
] as const;

export const projectsData = [
  {
    title: "La vaca dice Muu",
    description:
      "Este fue el proyecto que presenté en mi Trabajo Fin de Grado en Desarrollo de Aplicaciones Web. Se trata de una página web sencilla de un restaurante.",
    tags: ["React", "React-Router", "Next.js", "Tailwind"],
    imageUrl: restaurante,
    url: "https://proyecto-restaurante-gc2h.vercel.app/"
  },
  {
    title: "Clínica Veterinaria",
    description:
      "Es una página web diseñada para registrar a los pacientes de un veterinario a través de un formulario.",
    tags: ["React", "TypeScript", "Vite", "Zustand", "React Hook Form","Tailwind"],
    imageUrl: veterinario,
    url: "https://pacientes-veterinario-react.vercel.app/"
  },
  {
    title: "Cocktail",
    description:
      "Es una página web para consultar recetas de bebidas. Las recetas se obtienen a través de una API externa.",
    tags: ["React", "Vite", "React Router", "Zod", "Zustand", "Tailwind"],
    imageUrl: cocktail,
    url: "https://compra-bebidas-react.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;