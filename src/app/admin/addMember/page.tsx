import AddMemberForm from "@/features/members/components/addMemberForm/AddMemberForm";
import {readAllCategories} from "@/features/category/action";
import {readAllPosition} from "@/features/position/action";
import {readAllMemberRole} from "@/features/associationRole/action";

export  default async function AddMemberPage() {

    const categories = await readAllCategories()
    const playerPosition = await readAllPosition()
    const memberRole = await readAllMemberRole()


    if(!categories.success || !playerPosition.success || !memberRole.success) {
        return <p>Une erreur est survenue</p>
    }

    return (<>

        <AddMemberForm categories={categories.data} playerPosition={playerPosition.data} memberRole={memberRole.data} />
    </>)
}