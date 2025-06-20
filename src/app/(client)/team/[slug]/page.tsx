import Team from "@/features/category/components/team/Team";
import {readCategoryById} from "@/features/category/action";

import {readMemberById} from "@/features/members/action";

export default async function  TeamDetailPage(props : {params : Promise<{slug : string}>}) {

    const params = await props.params
    const slug = params.slug


    const category = await readCategoryById(slug)
    const manager = await readMemberById(slug)

    if (!category.success) {
        return (
            <p>Auncune equipe trouvée</p>
        )
    }
    if (!manager.success) {
        return (
            <p>Auncun entraineur trouvé</p>
        )
    }

    return(
        <>

            <Team category={category.data} manager = {manager.data} />
        </>
    )
}