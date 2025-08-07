
import {readAllCategories} from "@/features/team/action";
import TeamList from "@/features/team/components/teamList/TeamList";
import {notFound} from "next/navigation";

export const revalidate = 0

export default async function ModifyTeamPage(){

    const teams = await readAllCategories()

    if(!teams.success){
        return (
            notFound()
        )
    }

    return (
        <>
            <TeamList teams={teams.data} />
        </>
    )
}