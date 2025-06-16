"use client"
import styles from "./cardActuality.module.css"
import Image from 'next/image';
import {ActualityProps} from "@/features/actuality/type";
import {useState} from "react";
import DetailActuality from "@/features/actuality/components/detailActuality/DetailActuality";
import {createPortal} from "react-dom";


export default function CardActuality({actuality} : {actuality: ActualityProps }) {



    const shortPres = (text : string)=>{
        if (text.length > 110){
           return  text.slice(0, 110) + " ...";


        } else {
            return text;
        }
    }

    const formatedDate = (date : Date ) =>{

        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
        const day = newDate.getDate().toString().padStart(2, "0");

        return `${day}-${month}-${year}`;
    }

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    }
    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <>

            <button onClick={handleOpenModal} className={styles.section}>
                <figure className={styles.figure}>
                    <Image className={styles.image} src={actuality.photo as string} alt={actuality.title} fill={true} />
                </figure>
                <article className={styles.article}>
                    <h2 className={styles.h2}>{actuality.title}</h2>
                    <p>{formatedDate(actuality.date)}</p>
                    <p >{shortPres(actuality.description)}</p>
                </article>
            </button>
            {openModal &&
                createPortal(<DetailActuality closeModalAction={closeModal} actuality={actuality}/>,  document.body)}

        </>
    )
}