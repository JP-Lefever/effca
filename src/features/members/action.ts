"use server"


import {MemberProps, ResultProps} from "@/features/members/type";
import {memberSchema} from "@/features/members/schema";
import {
    createMember,
    updateMembers,
    readAllMembers,
    DestroyMember,
    readMemberByPosition
} from "@/features/members/repository";
import {readCategoryById} from "@/features/category/action";
import {readPositionByLabel} from "@/features/position/action";


export const addNewMember = async (data : Omit<MemberProps,"id" | "is_admin" | "photo">, photo : string |null) : Promise<ResultProps<Omit<MemberProps,"categoryId">>> =>{

const validData = memberSchema.safeParse(data)
    console.log(validData.error)
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

export const readMemberById = async (label : string, position?: string) : Promise<ResultProps<MemberProps>> => {

    const findCategoryById = await readCategoryById(label);
    if (!findCategoryById.success) {
        return {success : findCategoryById.success, error : findCategoryById.error}
    }
    if (position === undefined || position == null) {

    position = "Entraineur"
    }

    const findPositionId = await readPositionByLabel(position)

    if (!findPositionId.success) {
        return {success : findPositionId.success, error : findPositionId.error}
    }

    const response = await readMemberByPosition(findCategoryById.data.id, findPositionId.data.id);

    if(!response.success) {
        return {success : response.success, error : response.error}
    }
    return {success : response.success, data : response.data}

}


export const deleteMember = async (id: string) : Promise<ResultProps<null>> => {

    const response = await DestroyMember(id)

    if (!response.success) {
        return {success : response.success, error : response.error}
    }

    return {success : response.success, data : response.data}


}