"use client"

import styles from "./league.module.css"

export default function LeagueWidget(){


    return (
        <>
            <section className={styles.section}>
                <article className={styles.container}>
                    <iframe className={styles.iframe} src="https://widgets.scorenco.com/ranking/119580"/>
                </article>
            </section>
        </>
    )
}