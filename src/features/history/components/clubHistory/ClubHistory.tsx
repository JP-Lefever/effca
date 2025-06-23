import styles from "./clubHistory.module.css"
import {HistoryProps} from "@/features/history/type";
import data from "@/assets/data/club/club.json"


export default  function ClubHistory({history} :{history: HistoryProps}) {



    return (
        <>
        <section className={styles.section}>
            <h2>{data.title}</h2>
            <p>{history.history}</p>
        </section>

        </>
    )
}