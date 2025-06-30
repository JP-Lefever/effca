import Team from "@/features/team/components/team/Team";
import {readCategoryById} from "@/features/team/action";

import {readMemberByTeam} from "@/features/users/action";
import {readPositionByLabel} from "@/features/position/action";
import {notFound} from "next/navigation";

export default async function  TeamDetailPage(props : {params : Promise<{slug : string}>}) {

    const params = await props.params
    const slug = params.slug


    const category = await readCategoryById(slug)
    const members = await readMemberByTeam(slug)
    const positionId = await readPositionByLabel("Entraineurs")

    if (!category.success || !members.success || !positionId.success) {
        return (
            notFound()
        )
    }

    const manager = members.data.filter((member)=>  member.positionId === positionId.data)

    return(
        <>

            <Team category={category.data} manager = {manager[0]} />
        </>
    )
}