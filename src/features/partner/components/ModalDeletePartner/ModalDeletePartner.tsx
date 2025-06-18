import styles from "./modalDeletePartner.module.css"
import confirmData from "@/assets/data/member/member.json"
import {Button } from "@/components/ui/buttons/Buttons";
import {toast} from "react-toastify";
import {redirect} from "next/navigation";
import {destroyPartner} from "@/features/partner/action";


export default function ModalDeletePartner({id, closeModalAction } : {id: string, closeModalAction : () => void} ) {

    const onClickDelete = async () => {

        const response = await destroyPartner(id)

        if (response.success) {
            toast.success("Le joueur a bien été supprimé")
            redirect("/admin/modifyPartner")
        } else { toast.error("Une erreur est survenue lors de la suppression du joueur") }
    }

    return (<>

        <section className={styles.section}>
            <article>
                <p>{confirmData.delete}</p>
                <div role = "group">
                    <Button className={styles.validate} onClick={onClickDelete} name = {"oui"}/>
                    <Button className={styles.cancel} onClick={ closeModalAction} name = {"non"}/>
                </div>
            </article>
        </section>
    </>)
}