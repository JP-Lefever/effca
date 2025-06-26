"use client"
import styles from "./filterMember.module.css"
import {ChangeEvent} from "react";
import {CategoryProps} from "@/features/team/types";


export default function FilterMember({categoryList, setFilterAction} : {categoryList : CategoryProps[], setFilterAction : (value : string)=> void } ) {



    const selectFilter = (e : ChangeEvent<HTMLSelectElement> )=>{
        setFilterAction(e.target.value);
    }



    return (
        <>
            <section className={styles.section}>
                <h2 className={styles.h2}>Filtrer les joueurs par équipe</h2>
                <select className={styles.select} onChange={selectFilter}>
                    <option className={styles.option} value={""}>Voir tous les joueurs</option>
                        {categoryList.map((c)=> (
                             <option className={styles.option}   key={c.id as string} value={c.id as string}>{c.label}</option>
                         ))}
                </select>
            </section>

        </>
    )
}