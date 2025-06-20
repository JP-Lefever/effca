import styles from "./team.module.css"
import Image from "next/image"
import {CategoryProps} from "@/features/category/types";

export default function Team({category}: {category: CategoryProps}) {

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
                        <h2>Entrainement</h2>
                        <ul className={styles.ul}>
                            <li>{category.training1}</li>
                            <li>{category.training2}</li>
                            <li>{category.training3}</li>
                        </ul>
                    </article>
                    <article>
                        <h2>Responsable de la catégorie</h2>
                    </article>
                </div>
                </section>
            </section>
        </>
    )
}