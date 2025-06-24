import styles from "./modifyMember.module.css"
import ModifyMemberForm from "@/features/users/components/modifyMemberForm/ModifyMemberForm";
import {MemberProps} from "@/features/users/type";
import {readCategories} from "@/features/team/repository";
import {readAllRole} from "@/features/associationRole/action";
import {readAllPosition} from "@/features/position/action";

export default async function ModifyMembers({members}: {members: MemberProps[]}) {

    const categories = await readCategories()
    const memberFunction = await readAllRole()
    const positions = await readAllPosition()

    if(!categories.success || !memberFunction.success || !positions.success){
        return <p>Erreur lors du chargement des categories</p>
    }

    return (<>
        <section className={styles.sectionCard}>
        {members.map((member) => (
           <article key={member.id} >
            <ModifyMemberForm member ={member} categories = {categories.data} memberFunction={memberFunction.data} positions = {positions.data} />
           </article>

        ))}
        </section>
        </>)
}