"use server"


import {MemberProps, ResultProps} from "@/features/members/type";
import {memberSchema} from "@/features/members/schema";
import {createMember, updateMembers} from "@/features/members/repository";
import {readAllMembers} from "@/features/members/repository";

export const addNewMember = async (data : Omit<MemberProps, "photo">, photo : string |null) : Promise<ResultProps<Omit<MemberProps,"categoryId">>> =>{

const validData = memberSchema.safeParse(data)

    if (!validData.success) {
        return {success : false, error : "Une erreur est survenue"}
    }

    const newMember = await createMember(data, photo );

    if (!newMember.success) {
        return {success : newMember.success, error : newMember.error}
    }

    return {success : newMember.success, data: newMember.data}


}

export const readMembers = async (): Promise<ResultProps<MemberProps[]>> => {

    const response = await readAllMembers()

    if (!response.success) {
        return {success : response.success, error : response.error}
    }

    return {success: response.success, data : response.data}
}

export const editMember = async (data : Omit<MemberProps, "id" | "is_admin" | "photo"> , photo : string | null, id : string) : Promise<ResultProps<MemberProps>> => {


    const validData = memberSchema.safeParse(data)

    if (!validData.success) {
        return {success : false, error : "Une erreur est survenue"}
    }

        const response = await updateMembers(data, photo, id );

    if (!response.success) {
        return {success : response.success, error : response.error}
    }

    return {success : response.success, data : response.data}
}