import styles from "./deleteTeamModal.module.css"
import confirmData from "@/assets/data/member/member.json"
import {Button } from "@/components/ui/buttons/Buttons";

import {toast} from "react-toastify";
import {redirect} from "next/navigation";
import {destroyCategory} from "@/features/team/action";


export default function DeleteTeamModal({id, closeModalAction } : {id: string, closeModalAction : () => void} ) {

    const onClickDelete = async () => {

         const response = await destroyCategory(id)

        if (response.success) {
            toast.success(response.data)
            redirect("/admin/modifyTeam")
        } else { toast.error("Une erreur est survenue lors de la suppression du joueur") }
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