"use client"

import React, { ChangeEvent, useState } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './SubmitBtn'
import Swal from 'sweetalert2'


export default function Contact() {

    const { ref } = useSectionInView('Contacto');

    //funcion para manejar el change de un input y textArea
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
      };

    const [inputs, setInputs] = useState({
        senderEmail: "",
        message: "",
    });

  return (
    <motion.section 
        id="contacto"
        ref={ref} 
        className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        viewport={{once: true}}
    >
        <SectionHeading>Contácta conmigo</SectionHeading>

        <p className="text-gray-700 -mt-6">Contácta conmigo aquí  <a className="underline" href="mailto:soniamp95@gmail.com">soniamp95@gmail.com</a>
        o rellena este formulario</p>

        <form 
            className="mt-10 flex flex-col"
            action={ async (formData) => {
                const {error} = await sendEmail(formData);
                if(error) {
                    Swal.fire({
                        title: "Error",
                        text: "Campo invalido. El email introducido debe seguir el siguiente formato: `email@ejemplo.com`",
                        icon: "error"
                    });
                    return;
                }
                setInputs({ //limpiar el formulario
                    senderEmail: "",
                    message: ""
                })
                Swal.fire({
                    title: "Gracias",
                    text: "Tu email se ha enviado correctamente!",
                    icon: "success"
                });
            }}
        >
            <input 
                type="email" 
                placeholder="Tu email" 
                className="h-14 px-4 rounded-lg borderBlack"
                value={inputs.senderEmail}
                onChange={handleChangeInput}
                name="senderEmail"
                required
                maxLength={500}
            />
            <textarea 
                placeholder="Tu mensaje" 
                className="h-52 my-3 rounded-lg borderBlack p-4"
                value={inputs.message}
                onChange={handleChangeInput}
                name="message"
                required
                maxLength={5000} 
            />
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
