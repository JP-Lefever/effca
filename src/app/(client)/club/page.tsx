import {readHistory} from "@/features/history/repository";
import ClubHistory from "@/features/history/components/clubHistory/ClubHistory";
import styles from "./page.module.css";
import data from "@/assets/data/club/club.json";
import Organigramme from "@/features/history/components/organigramme/Organigramme";

import {readAllRole} from "@/features/associationRole/action";
import {readMemberRole} from "@/features/members/action";

export default async function ClubPage(){

    const history = await readHistory();
    const role = await readAllRole()
    const members = await readMemberRole();

console.log(role)
    if(!history.success){

        return (
            <p>Données introuvables</p>
        )
    }
    if(!members.success){

        return (
            <p>Données introuvables</p>
        )
    }
    if(!role.success){

        return (
            <p>Données introuvables</p>
        )
    }



    return (
        <>
            <header className={styles.div} >
                <h1 className={styles.h1}>{data.legend}</h1>
                <h1 className={styles.h1b}>{data.legend}</h1>
            </header>
        <ClubHistory history = {history.data} />
        <Organigramme members = {members.data} role ={role.data} />
        </>
    )
}