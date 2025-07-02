import ContactForm from "@/features/contact/components/contactForm/ContactForm";
import styles from "./page.module.css";
import Image from "next/image"

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
                        <Image className={styles.image} src={"/images/logo.webp"} alt={"logo"} width={380} height={380}/>
                        <p>Stade de la Dourmelle, Route d'Issepts</p>
                        <p>46100, Fons</p>
                        <p>mail@mail.com</p>
                    </article>
                    <article>
                        <ContactForm />
                    </article>
                </section>
            </section>

        </>
    )
}