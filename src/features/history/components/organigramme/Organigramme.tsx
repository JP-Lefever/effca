import styles from "./organigramme.module.scss";
import data from "@/assets/data/club/club.json"

export default function Organigramme(){


    return (
        <>
            <section>
                <h2>{data.organigramme}</h2>
            </section>

        </>
    )
}