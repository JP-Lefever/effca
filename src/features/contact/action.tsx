"use server"
import nodemailer from "nodemailer"
import {ContactProps} from "@/features/contact/type";
import type {ResultProps} from "./type"



export const sendEmail = async (data: ContactProps) : Promise<ResultProps<string>> => {

    const {firstname, lastname, email,  message} = data;
    console.log(data)
    try {

   const transporter = nodemailer.createTransport({
       host: process.env.SMTP_HOST,
       port: parseInt(process.env.SMTP_PORT || "587", 10),
       secure: false,
       auth: {
           user: process.env.SMTP_USER,
           pass: process.env.SMTP_PASS,
       }
   })
    await transporter.sendMail({
        from: `"Contact form" <${process.env.SMTP_USER}>`,
        to : process.env.CONTACT_RECEVER,
        subject: `Nouveau message de ${firstname} ${lastname}`,
        text : `
        Email : ${email}
        Message : ${message}
        `,
        html: `
        <p>Email: ${email}</p>
        <p>Message:</br>${message}</p>
        `,
        replyTo: email,
    })

    return {success: true, data: "Le message a bien été envoyé"}
    } catch (error) {
        console.error(error)
        return {success: false, error: "Une erreur est survenue"}
    }
}

