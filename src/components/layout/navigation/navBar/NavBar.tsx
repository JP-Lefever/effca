import styles from "./navBar.module.css"
import dataNav from "@/assets/data/navBar/NavBar.json"
import Link from "next/link";
import Image from "next/image";

export default function NavBar(){


    return (<>
    <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
              <Link className={styles.link} href={dataNav.home.link}>{dataNav.home.title}</Link>
          </li>
            <li>
                <Link className={styles.link} href={dataNav.club.link}>{dataNav.club.title}</Link>
            </li>
            <li className={styles.dropDownMenu}>
                <div className={styles.dropDownMenuTrigger}>
                {dataNav.team.title} <span>&#9660;</span>
                </div>
                <ul className={styles.dropDown}>
                        {dataNav.team.items.map((item, index) => (
                    <li  key={index}>
                            <Link className={styles.subLink} href={dataNav.team.link[index]}>{item}</Link>
                    </li>
                        ))}
                </ul>
            </li>
            <li>
                <Link className={styles.link} href={dataNav.logo.link}><Image className={styles.image} src={dataNav.logo.title} alt={"Logo club"} width={200} height={200}/></Link>
            </li>
            <li>
                <Link className={styles.link} href={dataNav.match.link}>{dataNav.match.title}</Link>
            </li>
            <li>
                <Link className={styles.link} href={dataNav.actuality.link}>{dataNav.actuality.title}</Link>
            </li>
            <li>
                <Link className={styles.link} href={dataNav.partner.link}>{dataNav.partner.title}</Link>
            </li>


        </ul>

    </nav>
    </>)
}