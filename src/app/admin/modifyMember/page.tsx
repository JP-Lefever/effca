import ModifyMemberForm from "@/features/members/components/modifyMemberForm/ModifyMemberForm";
import {readMembers} from "@/features/members/action";

export default async function ModifyMemberPage() {

    const members = await readMembers();

    if(!members.success){
        return <p>Erreur lors du chargement des membres</p>
    }

    return(<>

    <ModifyMemberForm members={members.data} />
    </>)
}