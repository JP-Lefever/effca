import {prisma} from "@/lib/prisma";
import {ResultProps, UserProps} from "@/features/auth/type";



export async function readUserByMail(email : string) : Promise<ResultProps<UserProps>>{


    try {

        const user = await prisma.users.findFirst({
            where :{
                mail : email
            }
        })
        if(!user){
            return {success : false, error : 'Aucun utilisateur trouvé'}
        }
        return {success : true, data : user}
    } catch (e){
        console.error(e)
        return {success : false, error : "Une erreur est survenue"}
    }
}