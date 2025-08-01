import styles from "@/app/(client)/cookies/page.module.css";
import dataJson from "@/assets/data/mentions-legales/mentionsLegale.json"
import ReactMarkdown from "react-markdown";
import {Metadata} from "next";

type MentionsProps = {
    title: string;
    content: string;
}

type MentionsPageProps = Record<string,MentionsProps>;

export const metadata : Metadata = {
    title: "EFFCA | Mentions Légales",
    description: "Mentions légales du site de l'Entente Fons Fourmagnac Camburat Assier",
    icons : "/images/logo.webp",
}

export default function MentionLegalPage(){

const data : MentionsPageProps = dataJson;
    return (
        <>
            <section className={styles.section}>
                <article className={styles.div}>
                    <h1 className={styles.h1}>{"Mentions légales"}</h1>
                    <h1 className={styles.h1b}>{"Mentions légales"}</h1>
                </article>
                {Object.entries(data).map(([key, value]) =>(

                    <article key={key} className={styles.article}>
                        <h2 className={styles.h2}>{value.title}</h2>
                        <ReactMarkdown className={styles.text}>{value.content}</ReactMarkdown>
                    </article>
                ))}
            </section>
        </>
    )
}