import {HistoryProps, ResultProps} from "@/features/club/type";
import {prisma} from "@/lib/prisma";


export async function createHistory (data : Omit<HistoryProps, "id">): Promise<ResultProps<null>> {

    try {
        await prisma.club.create({
            data : {
                history : data.history
            }
        })

        return {success : true, data : null}
    }catch(err) {
        console.error(err)
        return {success : false, error : "Une erreur est survenue"}
    }
}

export async function readHistory (): Promise<ResultProps<HistoryProps>> {


    try {
       const history =  await prisma.club.findMany()

        return {success: true, data : history[0]}
    }catch(err) {
        console.error(err)
        return {success : false, error : "Une erreur est survenue"}
    }
}

export async function updateHistory (data : Omit<HistoryProps, 'id'>, id : string): Promise<ResultProps<null>> {


    try {
            const {history} = data

        await prisma.club.update({
            data : {
                history : history
            },
            where : {id}
        })

        return {success : true, data : null}
    }catch(err) {
        console.error(err)
        return {success : false, error : "Une erreur est survenue"}
    }
}