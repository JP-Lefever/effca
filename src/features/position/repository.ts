import {prisma} from "@/lib/prisma"
import {PlayerPositionProps, ResultProps} from "@/features/position/type";


export async function createPlayerPosition(data : Omit<PlayerPositionProps, "id">) : Promise<ResultProps<PlayerPositionProps>>{

    try {

        const newPosition = await prisma.player_position.create({
                data: {
                    label: data.label
                }
            }
        )

        return { success : true, data : newPosition}
    }catch(err) {
        console.error(err)
        return {success : false, error : "Une erreur est survenue" }
    }

}

export async function readPosition() : Promise<ResultProps<PlayerPositionProps[]>>{

    try {

    const positions = await prisma.player_position.findMany()

    return {success : true, data : positions}
    } catch(err) {
        console.error(err)
        return {success : false, error : "Une erreur est survenue" }
    }


}