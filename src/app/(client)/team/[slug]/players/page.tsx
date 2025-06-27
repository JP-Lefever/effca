
import Players from "@/features/team/components/players/Players";
import {readMemberByPos} from "@/features/users/action";
import {readAllPosition} from "@/features/position/action";
import {notFound} from "next/navigation";

export default async function PlayersPage(props : {params : Promise<{ slug: string }>}){

    const params = await props.params;
    const slug = params.slug;

    const position = await readAllPosition()

    if (!position.success){
        return (
            notFound()
        )
    }
    const customOrder = ["Gardien", "Defenseur", "Milieu", "Attaquant", "Entraineur"];
    const positionLabel = position.data
        .sort((a, b) => customOrder.indexOf(a.label) - customOrder.indexOf(b.label))
        .map((pos) => pos.label);


    const playersByPosition = await Promise.all(
        positionLabel.map(async (pos : string)=>{
            const res = await readMemberByPos(slug, pos);
            return {
                pos,
                players : res.success ? res.data : []
            }
        })
    )




    return (
        <>
            <Players  playersByPositions ={playersByPosition} />
        </>
    )
}