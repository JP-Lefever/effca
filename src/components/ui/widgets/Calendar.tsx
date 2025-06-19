"use client"

import styles from "./calendar.module.css"

export default function CalendarWidget(){


    return (
        <>
            <section className={styles.section}>
                <article className={styles.container}>
                    <iframe className={styles.iframe} src="https://widgets.scorenco.com/team/119614"/>
                </article>
            </section>
        </>
    )
}