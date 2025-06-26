import styles from "./adminHeader.module.css";
import Image from "next/image"


export default function AdminHeader() {


    return (
        <header className={styles.header} >
            <section className={styles.header}>
                <h1 className={styles.h1}>EFFCA ADMIN</h1>
                <h1 className={styles.h1b}>EFFCA ADMIN</h1>
            </section>
            <section>
                <figure>
                    <Image src={"/images/logo.webp"} alt="logo" width={480} height={480}/>
                </figure>
            </section>
        </header>
    )
}