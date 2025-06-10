"use server"


import {PartnerProps, ResultProps} from "@/features/partner/type";
import {partnerSchema} from "@/features/partner/schema";
import createPartner from "@/features/partner/repository";


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