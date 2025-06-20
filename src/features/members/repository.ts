import {MemberProps, ResultProps} from "@/features/members/type";
import {prisma} from "@/lib/prisma";

const validData = (data : string |null)=>{
    return data === "" ? null : data
}

export async function createMember(data : Omit<MemberProps,"id" | "is_admin" | "photo">, photo : string | null) : Promise<ResultProps<MemberProps>> {

    const {firstname, lastname, positionId, categoryId, memberFunctionId, tel, mail} = data;



    try {
        const newMember = await prisma.members.create({
            data : {
                firstname : firstname,
                lastname : lastname,
                positionId : validData(positionId),
                photo : photo ,
                categoryId: validData(categoryId),
                memberFunctionId : validData(memberFunctionId),
                tel : validData(tel),
                mail : validData(mail),
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
        const members = await prisma.members.findMany({
            orderBy : {
                    firstname: "asc",
    }
        })

        return {success : true, data: members }
    }catch(err) {
        console.error(err)
        return {success : false, error : "une erreur est survenue"}
    }
}

export async function updateMembers(data: Omit<MemberProps, "id" | "is_admin" | "photo">, photo : string | null, id : string) : Promise<ResultProps<MemberProps>> {

    const {firstname, lastname, positionId, categoryId, memberFunctionId} = data;

    try {
        const memberModify = await prisma.members.update({
            data : {
                firstname : firstname,
                lastname : lastname,
                positionId : validData(positionId),
                categoryId : validData(categoryId),
                memberFunctionId : validData(memberFunctionId),
                photo : photo
            }, where : {
                id : id
            }
        })
        return {success : true, data : memberModify}
    }catch(err) {
        console.error(err)
        return {success : false, error : "une erreur est survenue"}
    }
}

export async function readMemberByCategory(category : string) : Promise<ResultProps<MemberProps[]>> {

    try {
        const member = await prisma.members.findMany({
            where: {
                categoryId : category,

            }
        })

        if (!member) {
            return {success : false, error : "Aucun membre trouvé"}
        }

        return {success : true, data : member}
    }catch(err) {
        console.error(err)
        return {success : false, error : "une erreur est survenue"}
    }
}

export async function DestroyMember(id : string) : Promise<ResultProps<null>> {

    try {
         await prisma.members.delete({
            where : {
                id : id
            }
        })

        return {success : true, data : null}
    }catch(err) {
        console.error(err)
        return {success : false, error : "une erreur est survenue"}
    }
}