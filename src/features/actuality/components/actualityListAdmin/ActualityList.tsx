"use client"
import styles from "./actualityList.module.css"
import { FilePenLine, Trash2 } from 'lucide-react';
import data from "@/assets/data/actuality/actuality.json"
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
                    {data.tableName}
                </caption>
                <thead>
                <tr>
                    <th>{data.cols1}</th>
                    <th>{data.cols2}</th>
                    <th>{data.cols3}</th>
                    <th>{data.cols4}</th>
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