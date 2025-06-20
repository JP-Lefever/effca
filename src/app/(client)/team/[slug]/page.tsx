import Team from "@/features/category/components/team/Team";
import {readCategoryById} from "@/features/category/action";

import {readMemberByTeam} from "@/features/members/action";
import {readPositionByLabel} from "@/features/position/action";

export default async function  TeamDetailPage(props : {params : Promise<{slug : string}>}) {

    const params = await props.params
    const slug = params.slug


    const category = await readCategoryById(slug)
    const members = await readMemberByTeam(slug)
    const positionId = await readPositionByLabel("Entraineur")

    if (!category.success) {
        return (
            <p>Auncune equipe trouvée</p>
        )
    }
    if (!members.success ) {
        return (
            <p>Auncun entraineur trouvé</p>
        )
    }
    if (!positionId.success ) {
        return (
            <p>Auncun entraineur trouvé2</p>
        )
    }

    const manager = members.data.filter((member)=>  member.positionId === positionId.data)

    return(
        <>

            <Team category={category.data} manager = {manager[0]} />
        </>
    )
}