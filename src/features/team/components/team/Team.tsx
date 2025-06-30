
import styles from "./team.module.css"
import Image from "next/image"
import data from "@/assets/data/team/team.json"
import {CategoryProps} from "@/features/team/types";
import {MemberProps} from "@/features/users/type";

export default function Team({category, manager}: {category: CategoryProps, manager : MemberProps}) {




    return (
        <>
            <section className={styles.section}>
                <article>
                    <figure className={styles.figure}>
                        <Image className={styles.image} src={category.photo as string} alt={category.label} fill={true} />
                    </figure>
                </article>
                <section className={styles.sectionInfo}>
                        <h1 className={styles.h1}>{data.team} {category.label}</h1>
                <div className={styles.info} role={"group"}>
                    <article>
                        <h2 className={styles.h2}>{data.training}</h2>
                        <ul className={styles.ul}>
                            <li>{category.training1}</li>
                            {category.training2 &&
                            <li>{category.training2}</li>
                            }
                            {category.training3 &&
                            <li>{category.training3}</li>
                            }
                        </ul>
                    </article>
                    <article className={styles.infoMana} role={"group"}>
                        <h2 className={styles.h2}>{data.manager}</h2>
                        <ul className={styles.ul}>
                            <li className={styles.manager}>
                                <h4>{data.name}</h4>
                                <p>{manager.firstname} {manager.lastname}</p>
                            </li>
                            <li className={styles.manager}>
                                <h4>{data.mail}</h4>
                                <p>{manager.mail}</p>
                            </li>
                            <li className={styles.manager}>
                                <h4>{data.phone}</h4>
                                <p>{manager.tel}</p>
                            </li>
                        </ul>
                    </article>
                </div>
                </section>
            </section>
        </>
    )
}