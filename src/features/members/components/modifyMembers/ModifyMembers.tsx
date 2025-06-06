import styles from "./modifyMember.module.css"
import ModifyMemberForm from "@/features/members/components/modifyMemberForm/ModifyMemberForm";
import {MemberProps} from "@/features/members/type";
import {readCategories} from "@/features/category/repository";
import {readAllMemberRole} from "@/features/associationRole/action";
import {readAllPosition} from "@/features/position/action";

export default async function ModifyMembers({members}: {members: MemberProps[]}) {

    const categories = await readCategories()
    const memberFunction = await readAllMemberRole()
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