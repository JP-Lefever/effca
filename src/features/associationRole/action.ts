"use server"
import {ResultProps, RoleProps} from "@/features/associationRole/type";
import {associationRoleSchema} from "@/features/associationRole/schema";
import {createAssociationRole} from "@/features/associationRole/repository";


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