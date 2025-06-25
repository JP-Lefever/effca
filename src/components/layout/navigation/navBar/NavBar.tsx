"use client"
import styles from "./navBar.module.css"
import dataNav from "@/assets/data/navBar/NavBar.json"
import Link from "next/link";
import Image from "next/image";
import { AlignJustify, X } from 'lucide-react';
import {useState} from "react";
import {CategoryProps} from "@/features/team/types";

export default function NavBar({team} : {team : CategoryProps[]}){

    const [openMenu, setOpenMenu] = useState(false)


    const toggleMenu = () => {
        setOpenMenu(false);
    }

    return (<>
    <nav className={styles.nav}>
        <button className={styles.burgerButton}  type={"button"} onClick={()=>setOpenMenu(!openMenu)}>
            {openMenu ? <X color={"white"}/> : <AlignJustify color={"white"}/>}
        </button>

        <ul className={`${styles.navList} ${openMenu ? styles.navMobileOpen : ""} `}>
          <li>
              <Link className={styles.link} onClick={toggleMenu} href={dataNav.home.link}>{dataNav.home.title}</Link>
          </li>
            <li>
                <Link className={styles.link} onClick={toggleMenu} href={dataNav.club.link}>{dataNav.club.title}</Link>
            </li>
            <li className={styles.dropDownMenu}>
                <p className={styles.dropDownMenuTrigger}>
                {dataNav.team.title} <span>&#9660;</span>
                </p>
                <ul className={styles.dropDown}>
                        {team.map((item, index) => (
                    <li className={styles.liDropdown} key={index}>
                            <Link className={styles.subLink} onClick={toggleMenu} href={`/team/${item.label}`}>{item.label}</Link>
                    </li>
                        ))}
                </ul>
            </li>
            <li className={styles.imageContainer} >
                <Link className={styles.link} onClick={toggleMenu} href={dataNav.logo.link}>
                    <Image className={styles.image} src={dataNav.logo.title} alt={"Logo club"} priority width={200} height={200}/>
                </Link>
            </li>
            <li>
                <Link className={styles.link} onClick={toggleMenu} href={dataNav.match.link}>{dataNav.match.title}</Link>
            </li>
            <li>
                <Link className={styles.link} onClick={toggleMenu} href={dataNav.actuality.link}>{dataNav.actuality.title}</Link>
            </li>
            <li>
                <Link className={styles.link} onClick={toggleMenu} href={dataNav.partner.link}>{dataNav.partner.title}</Link>
            </li>

        </ul>

    </nav>
    </>)
}