import ContactForm from "@/features/contact/components/contactForm/ContactForm";
import styles from "./page.module.css";
import Image from "next/image"
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "EFFCA | Contact",
    description:
        "Contactez le club de football EFFCA : Entente Fons Fourmagnac Camburat Assier. Envoyez vos questions, demandes ou messages via notre formulaire de contact.",
    icons: "/images/logo.webp",
    keywords: [
        "EFFCA",
        "club de foot",
        "football",
        "contact",
        "formulaire",
        "Fons",
        "Fourmagnac",
        "Camburat",
        "Assier",
    ],
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"),
    openGraph: {
        title: "EFFCA | Contact",
        description:
            "Contactez le club de football EFFCA : Entente Fons Fourmagnac Camburat Assier via notre formulaire.",
        url: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/contact`,
        images: [
            {
                url: "/images/logo.webp",
                width: 800,
                height: 600,
                alt: "Logo EFFCA",
            },
        ],
        siteName: "EFFCA",
    },
    twitter: {
        card: "summary_large_image",
        title: "EFFCA | Contact",
        description:
            "Contactez le club de football EFFCA : Entente Fons Fourmagnac Camburat Assier via notre formulaire.",
        images: ["/images/logo.webp"],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/contact`,
    },
};


export default function ContactPage() {

    return (
        <>
            <section className={styles.section}>
                <section className={styles.div} role = "groupe">
                    <h1 className={styles.h1}>Contact</h1>
                    <h1 className={styles.h1b}>Contact</h1>
                </section>
                <section className={styles.sectionForm} >
                    <article className={styles.article}>
                        <figure className={styles.figure}>
                            <Image className={styles.image} src={"/images/logo.webp"} alt={"logo"} fill={true}/>
                        </figure>
                        <p>{"Stade de la Dourmelle, Route d'Issepts"}</p>
                        <p>{"46100, Fons"}</p>
                        <p>{"mail@mail.com"}</p>
                    </article>
                    <article>
                        <ContactForm />
                    </article>
                </section>
            </section>

        </>
    )
}