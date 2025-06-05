import {MemberProps, ResultProps} from "@/features/members/type";
import {prisma} from "@/lib/prisma";


export async function createMember(data : Omit<MemberProps,"id" | "is_admin" | "photo">, photo : string | null) : Promise<ResultProps<Omit<MemberProps, "categoryId">>> {

    const {firstname, lastname, positionId, categoryId} = data;
    try {
        const newMember = await prisma.members.create({
            data : {
                firstname : firstname,
                lastname : lastname,
                positionId : positionId,
                photo : photo ,
                categoryId: categoryId,

            }
        })

        return {success : true, data : newMember}
    }catch(err) {
        console.error(err)
        return {success : false, error : "une erreur est survenue"}
    }
}

