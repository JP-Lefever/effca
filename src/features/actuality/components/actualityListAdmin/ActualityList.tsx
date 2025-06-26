"use client"
import styles from "./actualityList.module.css"
import { FilePenLine, Trash2 } from 'lucide-react';
import Link from "next/link";
import {formatedDate} from "@/assets/helpers/formatedDate";
import {ActualityProps} from "@/features/actuality/type";
import {useState} from "react";
import {createPortal} from "react-dom";
import ModalDeleteActuality from "@/features/actuality/components/deleteActuality/ModalDeleteActuality";

export default function ActualityList({actualities} : {actualities: ActualityProps[]}) {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }

    return(<>

        <table className={styles.table}>
            <caption>
                Liste des évènements
            </caption>
            <thead>
            <tr>
                <th>Intitulé de l'évènement</th>
                <th>Date de l'évènement</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
            </thead>
        {actualities.map((actuality)=>(
            <tbody key={actuality.id}>
                <tr>
                    <td>{actuality.title}</td>
                    <td>{formatedDate(actuality.date)}</td>
                    <td><Link className={styles.link} href={`/admin/modifyActuality/${actuality.id}`}><FilePenLine/></Link></td>
                    <td><button onClick={handleOpenModal} className={styles.link} type={"button"}><Trash2/></button></td>
                </tr>
        {openModal && (
            createPortal(<ModalDeleteActuality id={actuality.id} closeModalAction={handleOpenModal}/>, document.body)
        )}
            </tbody>
        ))}
        </table>

    </>)
}