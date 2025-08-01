import styles from "./page.module.css"
import dataJSON from "@/assets/data/cookies/cookies.json"
import ReactMarkdown from "react-markdown";
import {Metadata} from "next";

export const metadata : Metadata = {
    title: "EFFCA | Politique de cookies",
    description: "Politiques de cookies du site de l'Entente Fons Fourmagnac Camburat Assier",
    icons : "/images/logo.webp",
}

type cookiesProps = {
    title: string,
    content: string,
    link?: string,
}

type cookieJson = Record<string, cookiesProps>

export default function cookiePage(){


    const data : cookieJson = dataJSON

    return (
        <>
            <section className={styles.section}>
                <article className={styles.div}>
                    <h1 className={styles.h1}>{"Politique de cookies"}</h1>
                    <h1 className={styles.h1b}>{"Politique de cookies"}</h1>
                </article>
                {Object.entries(data).map(([key, value]) =>(
                    <article key={key} className={styles.article}>
                        <h2 className={styles.h2}>{value.title}</h2>
                        <ReactMarkdown className={styles.text}>
                                     {value.content}
                        </ReactMarkdown>
                        {value?.link &&
                        <a className={styles.link} target={"_blank"} rel={"noreferrer"} href={"https://vercel.com/legal/privacy-policy"}>{value.link}</a>
                        }
                    </article>
                ))}
            </section>
        </>
    )
}