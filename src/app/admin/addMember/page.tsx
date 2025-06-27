import AddMemberForm from "@/features/users/components/addMemberForm/AddMemberForm";
import {readAllCategories} from "@/features/team/action";
import {readAllPosition} from "@/features/position/action";
import {readAllRole} from "@/features/associationRole/action";
import {notFound} from "next/navigation";

export  default async function AddMemberPage() {

    const categories = await readAllCategories()
    const playerPosition = await readAllPosition()
    const memberRole = await readAllRole()


    if(!categories.success || !playerPosition.success || !memberRole.success) {
        return notFound()
    }

    return (<>

        <AddMemberForm categories={categories.data} playerPosition={playerPosition.data} memberRole={memberRole.data} />
    </>)
}