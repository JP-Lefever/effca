import ContactForm from "@/features/contact/components/contactForm/ContactForm";
import styles from "./page.module.css";

export default function ContactPage() {

    return (
        <>
            <section className={styles.section}>
                <section className={styles.div} role = "groupe">
                    <h1 className={styles.h1}>Contact</h1>
                    <h1 className={styles.h1b}>Contact</h1>
                </section>
                <section className={styles.sectionForm} >
                    <article>
                        <h2>Entente Fons Fourmagnac Camburat Assier</h2>
                        <p>Stade de la Dourmelle</p>
                        <p>46100 Fons</p>
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