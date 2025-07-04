import {readHistory} from "@/features/club/repository";
import ClubHistory from "@/features/club/components/clubHistory/ClubHistory";
import styles from "./page.module.css";
import data from "@/assets/data/club/club.json";
import Organigramme from "@/features/club/components/organigramme/Organigramme";

import {readAllRole} from "@/features/associationRole/action";
import {readMemberRole} from "@/features/users/action";
import {notFound} from "next/navigation";

export default async function ClubPage(){

    const history = await readHistory();
    const role = await readAllRole()
    const members = await readMemberRole();


    if(!history.success || ! members.success || !role.success){

        return (
            notFound()
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