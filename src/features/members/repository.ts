import {MemberProps, ResultProps} from "@/features/members/type";
import {prisma} from "@/lib/prisma";


export async function createMember(data : Omit<MemberProps,"id" | "is_admin" | "photo">, photo : string | null) : Promise<ResultProps<Omit<MemberProps, "categoryId">>> {

    const {firstname, lastname, positionId, categoryId, memberFunctionId} = data;
    console.log(data)
    const validData = (data : string |null)=>{
        return data === "" ? null : data
    }

    try {
        const newMember = await prisma.members.create({
            data : {
                firstname : firstname,
                lastname : lastname,
                positionId : validData(positionId),
                photo : photo ,
                categoryId: validData(categoryId),
                memberFunctionId : validData(memberFunctionId),
            }
        })

        return {success : true, data : newMember}
    }catch(err) {
        console.error(err)
        return {success : false, error : "une erreur est survenue"}
    }
}

export async function readAllMembers() : Promise<ResultProps<MemberProps[]>> {

    try {
        const members = await prisma.members.findMany()

        return {success : true, data: members }
    }catch(err) {
        console.error(err)
        return {success : false, error : "une erreur est survenue"}
    }
}