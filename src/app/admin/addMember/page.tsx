import AddMemberForm from "@/features/members/components/addMemberForm/AddMemberForm";
import {readAllCategories} from "@/features/category/action";

export  default async function AddMemberPage() {

    const categories = await readAllCategories()
    console.log(categories)

    if(!categories.success){
        return <p>Une erreur est survenue</p>
    }

    return (<>

        <AddMemberForm categories={categories.data} />
    </>)
}