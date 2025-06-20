import styles from "./team.module.css"
import Image from "next/image"
import {CategoryProps} from "@/features/category/types";
import {MemberProps} from "@/features/members/type";

export default function Team({category, manager}: {category: CategoryProps, manager : MemberProps}) {

console.log(category);

    return (
        <>
            <section className={styles.section}>
                <article>
                    <figure className={styles.figure}>
                        <Image className={styles.image} src={category.photo as string} alt={category.label} fill={true} />
                    </figure>
                </article>
                <section className={styles.sectionInfo}>
                        <h1 className={styles.h1}>Equipe {category.label}</h1>
                <div className={styles.info} role={"group"}>
                    <article>
                        <h2 className={styles.h2}>Entrainement</h2>
                        <ul className={styles.ul}>
                            <li>{category.training1}</li>
                            <li>{category.training2}</li>
                            <li>{category.training3}</li>
                        </ul>
                    </article>
                    <article className={styles.infoMana} role={"group"}>
                        <h2 className={styles.h2}>Responsable de la catégorie</h2>
                        <ul className={styles.ul}>
                            <li className={styles.manager}>
                                <h4>Nom :</h4>
                                <p>{manager.firstname} {manager.lastname}</p>
                            </li>
                            <li className={styles.manager}>
                                <h4>Email :</h4>
                                <p>{manager.mail}</p>
                            </li>
                            <li className={styles.manager}>
                                <h4>Téléphone :</h4>
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