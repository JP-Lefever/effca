"use server"


import {PartnerProps, ResultProps} from "@/features/partner/type";
import {partnerSchema} from "@/features/partner/schema";
import {createPartner, deletePartner, readAllPartner, updatePartner} from "@/features/partner/repository";


export const addNewPartner = async (data : Omit<PartnerProps, "id" | "photo">, photo : string ) : Promise<ResultProps<PartnerProps>> =>{

    const validData = partnerSchema.safeParse(data)

    if (!validData.success){
        return {success : false, error : "Données invalides"}
    }

    const response = await createPartner(validData.data, photo)

    if (!response.success){
        return {success : response.success, error : response.error}
    }

    return {success : true, data : response.data}

}

export const browsePartner = async () : Promise<ResultProps<PartnerProps[]>> =>{

    const response = await readAllPartner()

    if (!response.success){
        return {success : response.success, error : response.error}
    }

    return {success : true, data : response.data}

}

export const editPartner = async (data : Omit<PartnerProps, "id" | "photo">, photo : string, id: string) : Promise<ResultProps<PartnerProps>> =>{

    const validData = partnerSchema.safeParse(data)

    if (!validData.success){
        return {success: false, error : "Données invalides"}
    }
    const response = await updatePartner(validData.data, photo, id)

    if (!response.success){
        return {success : response.success, error : response.error}
    }

    return {success : response.success, data : response.data}

}

export const destroyPartner = async (id: string) : Promise<ResultProps<null>> =>{

    const response = await deletePartner(id)

    if (!response.success){
        return {success : response.success, error : response.error}
    }

    return {success : response.success, data : null}

}