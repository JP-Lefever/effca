
import {ReactNode} from "react";
import NavTeam from "@/components/layout/navigation/NavTeam/NavTeam";
import styles from "./layout.module.css";

export default function  teamLayout({children} : { children: ReactNode }) {

    return (
        <>
            <header className={styles.div}>

                    <h1 className={styles.h1}>Equipe & Joueurs</h1>
                    <h1 className={styles.h1b}>Equipe & Joueurs</h1>

            </header>
            <NavTeam/>
            <main>
                {children}
            </main>
        </>
    )
}