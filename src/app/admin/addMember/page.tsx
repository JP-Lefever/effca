import AddMemberForm from "@/features/members/components/addMemberForm/AddMemberForm";
import {readAllCategories} from "@/features/category/action";
import {readAllPosition} from "@/features/position/action";

export  default async function AddMemberPage() {

    const categories = await readAllCategories()
    const playerPosition = await readAllPosition()


    if(!categories.success || !playerPosition.success) {
        return <p>Une erreur est survenue</p>
    }

    return (<>

        <AddMemberForm categories={categories.data} playerPosition={playerPosition.data} />
    </>)
}