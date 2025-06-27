import styles from "./not-found.module.css"
import Link from "next/link";
import Image from "next/image";

export default function NotFound(){


    return (
        <>
            <section className={styles.section}>
                <article className={styles.article}>
                    <h1 className={styles.h1}>404 - Page Non trouvée</h1>
                    <Link className={styles.link} href={"/"}>{"Cliquez ici pour revenir à l'accueil"}</Link>
                    <Link  href={"/"}><Image className={styles.image} src={"/images/logo.webp"} alt="logo" height={480} width={480} /></Link>
                </article>
            </section>
        </>
    )
}