import styles from "./deleteMemberModal.module.css"
import confirmData from "@/assets/data/member/member.json"
import {Button } from "@/components/ui/buttons/Buttons";
import {deleteMember} from "@/features/users/action";
import {toast} from "react-toastify";
import {redirect} from "next/navigation";


export default function DeleteMemberModal({id, closeModalAction } : {id: string, closeModalAction : () => void} ) {

    const onClickDelete = async () => {

        const response = await deleteMember(id)

        if (response.success) {
            toast.success("Le joueur a bien été supprimé")
            redirect("/admin/modifyMember")
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