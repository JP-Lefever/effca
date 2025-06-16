"use client"

import styles from "./match.module.css"

export default function MatchWidget(){


    return (
        <>
            <section className={styles.section}>
                <div className={styles.div} role = "groupe">
                    <h1 className={styles.h1}>Résultats</h1>
                    <h1 className={styles.h1b}>Résultats</h1>
                </div>
                <article className={styles.container}>

                    <iframe className={styles.iframe} src="https://widgets.scorenco.com/previous-next/119153" />
                </article>
            </section>
        </>
    )
}