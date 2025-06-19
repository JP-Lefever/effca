import LeagueWidget from "@/components/ui/widgets/League";
import MatchWidget from "@/components/ui/widgets/Match";
import styles from "./page.module.css";
import data from "@/assets/data/matchPage/match.json";
import NavMatch from "@/components/layout/navigation/navMatchPage/NavMatch";

export default function MatchPage() {


    return (
        <>
            <section>
                <article className={styles.div} >
                    <h1 className={styles.h1}>{data.title}</h1>
                    <h1 className={styles.h1b}>{data.title}</h1>
                </article>
            </section>
            <section>
                <NavMatch/>
            </section>
            <MatchWidget />
            <LeagueWidget/>
        </>
    )
}