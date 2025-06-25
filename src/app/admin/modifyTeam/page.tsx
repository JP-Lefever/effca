
import {readAllCategories} from "@/features/team/action";
import TeamList from "@/features/team/components/teamList/TeamList";

export default async function ModifyTeamPage(){

    const teams = await readAllCategories()

    if(!teams.success){
        return (
            <p>Aucune équipe trouvée</p>
        )
    }

    return (
        <>
            <TeamList teams={teams.data} />
        </>
    )
}