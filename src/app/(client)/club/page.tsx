import {readHistory} from "@/features/history/repository";
import ClubHistory from "@/features/history/components/clubHistory/ClubHistory";
import styles from "./page.module.css";
import data from "@/assets/data/club/club.json";
import Organigramme from "@/features/history/components/organigramme/Organigramme";

export default async function ClubPage(){

    const history = await readHistory();

    if(!history.success){

        return (
            <p>Données introuvables</p>
        )
    }
console.log(history.data)

    return (
        <>
            <header className={styles.div} >
                <h1 className={styles.h1}>{data.legend}</h1>
                <h1 className={styles.h1b}>{data.legend}</h1>
            </header>
        <ClubHistory history = {history.data} />
        <Organigramme/>
        </>
    )
}