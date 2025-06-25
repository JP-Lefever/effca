import styles from "./teamList.module.css";
import {CategoryProps} from "@/features/team/types";
import FormModifyTeam from "@/features/team/components/formModifyTeam/FormModifyTeam";

export default function TeamList({teams} : {teams : CategoryProps[]}){


    return (
        <section className={styles.section}>
            {teams.map((team)=>(
                <article key={team.id}>
                    <FormModifyTeam team={team}/>
                </article>
            ))}
        </section>
    )
}
