import {HistoryProps, ResultProps} from "@/features/history/type";
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