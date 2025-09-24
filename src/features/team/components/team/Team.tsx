
import styles from "./team.module.css"
import Image from "next/image"
import data from "@/assets/data/team/team.json"
import {CategoryProps} from "@/features/team/types";
import {MemberProps} from "@/features/users/type";
import {Suspense} from "react";

export default function Team({category, manager}: {category: CategoryProps, manager : MemberProps[]}) {


console.log(manager)

    return (
        <>
            <section className={styles.section}>
                <article>
                    <Suspense>
                        <figure className={styles.figure}>
                            <Image className={styles.image} src={category.photo as string} alt={category.label} fill={true} />
                        </figure>
                    </Suspense>
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
                    <h2 className={styles.h2}>{data.manager}</h2>
                    {manager.length >0 &&
                        manager.map((m)=>
                    <article key={m.id} className={styles.infoMana} role={"group"}>
                        <ul className={styles.ul}>
                            <li className={styles.manager}>
                                <p> - {m.firstname} {m.lastname}</p>
                            </li>
                            {m.mail &&
                                <li className={styles.manager}>
                                    <h4>{data.mail}</h4>
                                    <p>{m.mail}</p>
                                </li>
                            }
                            {m.tel &&
                                <li className={styles.manager}>
                                    <h4>{data.phone}</h4>
                                    <p>{m.tel}</p>
                                </li>
                            }
                        </ul>
                    </article>
                )
                    }
                </div>
                </section>
            </section>
        </>
    )
}