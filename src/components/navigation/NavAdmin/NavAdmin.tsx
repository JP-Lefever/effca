"use client"
import styles from "./navAdmin.module.css"
import dataNav from "@/assets/data/navBar/navAdmin.json"
import {useState} from "react";
import Link from "next/link";


export default function NavAdmin() {

    const [openSection, setOpenSection] = useState<Partial<Record<keyof typeof dataNav, boolean>>>({})

    const toggleSection = (key : keyof typeof dataNav) => {
      setOpenSection((prev)=>({
          ...prev,
          [key] : !prev[key],
      }))

    }

    return (
        <nav className={styles.nav}>
            <ul>
                {Object.entries(dataNav).map(([key,value])=>{
                    const typeKey = key as keyof typeof dataNav;
                    return (
                        <li key={key}>
                            <button className={styles.button} onClick={()=>toggleSection(typeKey)} type={"button"}>{value.title}</button>
                            {openSection[typeKey] &&
                            <ul>
                                {value.items.map((item, i)=>(
                                    <Link href={"#"} className={styles.menu} key={i}>
                                        {item}
                                    </Link>
                                ))}
                            </ul>
                            }
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}