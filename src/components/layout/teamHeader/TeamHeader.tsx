"use client"
import styles from "./teamHeader.module.css"
import {usePathname} from "next/navigation";
import data from "@/assets/data/team/team.json"

export default function TeamHeader() {

    const pathname = usePathname();
    const teamName = pathname.split("/")[2];


    return (
        <header className={styles.div} >

            <h1 className={styles.h1}>{data.team} {teamName}</h1>
            <h1 className={styles.h1b}>{data.team} {teamName}</h1>
        </header>
    )
}