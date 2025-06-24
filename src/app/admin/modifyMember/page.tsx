
import {readMembers} from "@/features/users/action";
import ModifyMembers from "@/features/users/components/modifyMembers/ModifyMembers";

export default async function ModifyMemberPage() {

    const members = await readMembers();


    if(!members.success){
        return <p>Erreur lors du chargement des membres</p>
    }

    return(<>

    <ModifyMembers members={members.data} />
    </>)
}