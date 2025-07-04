"use client"
import styles from "./navAdmin.module.css"
import dataNav from "@/assets/data/navBar/navAdmin.json"
import {useState} from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, LogOut  } from 'lucide-react';

import {signOut} from "next-auth/react";



export default function NavAdmin() {

    const [openSection, setOpenSection] = useState<Partial<Record<keyof typeof dataNav, boolean>>>({})
    const [openMenu, setOpenMenu] = useState<boolean>(true)

    const toggleSection = (key : keyof typeof dataNav) => {
      setOpenSection((prev)=>({
          ...prev,
          [key] : !prev[key],
      }))
    }

    const toggleMenu = ()=>{
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={styles.nav}>

                <button className={styles.buttonMenu} type={"button"} onClick={toggleMenu}>{openMenu ? <ChevronLeft  color={"white"}/> :  <ChevronRight  color={"white"}/>}</button>

            {openMenu &&
                <section>
            <ul>
                {Object.entries(dataNav).map(([key,value])=>{
                    const typeKey = key as keyof typeof dataNav;
                    return (
                        <li key={key}>
                            <button className={styles.button} onClick={()=>toggleSection(typeKey)} type={"button"}>{value.title}</button>
                            {openSection[typeKey] &&
                            <ul>
                                {value.items.map((item, i)=>(

                                    <Link href={value.links[i]} className={styles.menu} key={i}>
                                        {item}
                                    </Link>
                                ))}
                            </ul>
                            }
                        </li>
                    )
                })}
            </ul>
            <button className={styles.buttonLogout} type={"button"} onClick={()=>signOut()}>
                <div className={styles.divLogout}>
                    <p><LogOut color={"white"}/>
                    </p><p className={styles.logout}>Deconnexion</p>
                </div>
            </button>
        </section>
}
        </nav>
    )
}
