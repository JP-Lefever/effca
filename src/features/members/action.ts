"use server"


import {MemberProps, ResultProps} from "@/features/members/type";
import {memberSchema} from "@/features/members/schema";
import {createMember} from "@/features/members/repository";

export const addNewMember = async (data : Omit<MemberProps, "photo">, photo : string |null) : Promise<ResultProps<Omit<MemberProps,"categoryId">>> =>{

const validData = memberSchema.safeParse(data)

    if (!validData.success) {
        return {success : false, error : "Une erreur est survenue"}
    }

    const newMember = await createMember(data, photo );

    if (!newMember.success) {
        return {success : false, error : "Une erreur est survenue"}
    }

    return {success : true, data: newMember.data}


}