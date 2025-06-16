import styles from "./cardActuality.module.css"
import Image from 'next/image';
import {ActualityProps} from "@/features/actuality/type";
import {act} from "react";

export default function CardActuality({actuality} : {actuality: ActualityProps }) {

    const shortPres = (text : string)=>{
        if (text.length > 120){
           return  text.slice(0, 110) + " ...";


        } else {
            return text;
        }
    }
    console.log(actuality.date);
    const formatedDate = (date : Date ) =>{

        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
        const day = newDate.getDate().toString().padStart(2, "0");

        return `${day}-${month}-${year}`;
    }

    return (
        <>

            <section className={styles.section}>
                <figure className={styles.figure}>
                    <Image className={styles.image} src={actuality.photo as string} alt={actuality.title} fill={true} />
                </figure>
                <article className={styles.article}>
                    <h2 className={styles.h2}>{actuality.title}</h2>
                    <p>{formatedDate(actuality.date)}</p>
                    <p >{shortPres(actuality.description)}</p>
                </article>
            </section>


        </>
    )
}