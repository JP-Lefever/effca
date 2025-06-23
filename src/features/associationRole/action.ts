"use server"
import {ResultProps, RoleProps} from "@/features/associationRole/type";
import {associationRoleSchema} from "@/features/associationRole/schema";
import {createAssociationRole, readRole, readRoleById} from "@/features/associationRole/repository";


export const addNewRole = async (data : Omit<RoleProps, "id">) : Promise<ResultProps<RoleProps>> =>{

    const validData = associationRoleSchema.safeParse(data)

    if(!validData.success){

        return {success : false, error : "Une erreur est survenue"}
    }

    const response = await createAssociationRole(data)

    if(!response.success){
        return {success : response.success, error : response.error}
    }
    return {success : response.success, data : response.data }

}

export const readAllRole = async () : Promise<ResultProps<RoleProps[]>> =>{

    const response = await readRole()

    if(!response.success){
        return {success : response.success, error :response.error}

    }
        return {success : response.success, data : response.data}
}

export const readRoleByLabel = async (label : string) : Promise<ResultProps<string>> =>{


    const response = await readRoleById(label)
    if(!response.success){
        return {success : response.success, error :response.error}
    }
    return {success : response.success, data : response.data.id}

}