"use server"
import type {PlayerPositionProps, ResultProps} from "@/features/position/type";
import {playerPositionSchema} from "@/features/position/schema";
import {createPlayerPosition} from "@/features/position/repository";

export const addPlayerPosition = async (data : Omit<PlayerPositionProps, "id">) : Promise<ResultProps<PlayerPositionProps>> =>{

    const validData = playerPositionSchema.safeParse(data)

    if(!validData.success){
        return {success : false, error : "Une erreur est survenue"};
    }

    const response = await createPlayerPosition(validData.data)

    if(!response.success){
        return {success : response.success, error : response.error }
    }
    console.log(response)
    return {success : response.success, data: response.data}


}