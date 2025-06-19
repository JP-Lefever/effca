import styles from "./navMatch.module.css"
import Link from "next/link";
import data from "@/assets/data/matchPage/match.json"

export default function NavMatch() {


    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {data.navBar.map((item) => (
                        <li className={styles.li} key={item.id}>
                            <Link className={styles.link} href={item.href}>{item.title}</Link>
                        </li>
                    ))}

                </ul>
            </nav>

        </>
    )
}