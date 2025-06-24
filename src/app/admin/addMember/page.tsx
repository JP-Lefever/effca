import AddMemberForm from "@/features/members/components/addMemberForm/AddMemberForm";
import {readAllCategories} from "@/features/team/action";
import {readAllPosition} from "@/features/position/action";
import {readAllRole} from "@/features/associationRole/action";

export  default async function AddMemberPage() {

    const categories = await readAllCategories()
    const playerPosition = await readAllPosition()
    const memberRole = await readAllRole()


    if(!categories.success || !playerPosition.success || !memberRole.success) {
        return <p>Une erreur est survenue</p>
    }

    return (<>

        <AddMemberForm categories={categories.data} playerPosition={playerPosition.data} memberRole={memberRole.data} />
    </>)
}