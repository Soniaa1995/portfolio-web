"use server"

import { validateString, getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { createElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message');

    //simple server-side validation
    if(!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender email"
        }
    }

    if(!validateString(message, 5000)){
        return {
            error: "Invalid message"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "soniamp95@gmail.com",
            subject: "Mensaje del Portfolio",
            reply_to: senderEmail as string,
            react: createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string
            })
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
    return {
        data
    }
}