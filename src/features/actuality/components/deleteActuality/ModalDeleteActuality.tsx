import styles from "./modalDeleteActuality.module.css"
import confirmData from "@/assets/data/actuality/actuality.json"
import {Button } from "@/components/ui/buttons/Buttons";
import {toast} from "react-toastify";

import {deleteActuality} from "@/features/actuality/action";


export default function ModalDeleteActuality({id, closeModalAction } : {id: string, closeModalAction : () => void} ) {

    const onClickDelete = async () => {

        const response = await deleteActuality(id)

        if (response.success) {
            toast.success(response.data)
            closeModalAction()
            window.location.reload();
        } else { toast.error(response.error) }
    }

    return (<>

        <section className={styles.section}>
            <article>
                <p>{confirmData.delete}</p>
                <div role = "group">
                    <Button className={styles.validate} onClick={ onClickDelete} name = {"oui"}/>
                    <Button className={styles.cancel} onClick={ closeModalAction} name = {"non"}/>
                </div>
            </article>
        </section>
    </>)
}