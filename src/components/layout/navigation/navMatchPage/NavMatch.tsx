"use client"
import styles from "./navMatch.module.css"
import Link from "next/link";
import data from "@/assets/data/matchPage/match.json"
import clsx from "clsx";
import {usePathname} from "next/navigation";

export default function NavMatch() {

    const pathname = usePathname()
    console.log("pathname:", JSON.stringify(pathname));
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    {data.navBar.map((item) => (
                        <li className={styles.li} key={item.id}>
                            <Link className={clsx(styles.link,{[styles.isActiveLink] : pathname === item.href })} href={item.href}>{item.title}</Link>
                        </li>
                    ))}

                </ul>
            </nav>

        </>
    )
}