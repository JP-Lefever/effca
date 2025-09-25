"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import styles from "./navTeam.module.css";

export default function NavTeam() {

const pathname = usePathname()
const splitUrl = pathname.split("/")
const slug = splitUrl[2]
const baseUrl = `/equipes/${slug}`


    const navItems = [
        { title: "Équipe", href: baseUrl },
        { title: "Joueurs", href: `${baseUrl}/joueurs` },
    ];


    return (
        <nav className={styles.nav}>
                <ul className={styles.ul} >
                    {navItems.map((item) =>(
                            <li  key={item.title} className={styles.li}>
                                <Link className={clsx(styles.link,{[styles.isActiveLink] : pathname === item.href})} href={item.href} >{item.title}</Link>
                            </li>
                    ))}
                </ul>

        </nav>
    )
}