"use server"
import type {PlayerPositionProps, ResultProps} from "@/features/position/type";
import {playerPositionSchema} from "@/features/position/schema";
import {createPlayerPosition, readPosition, readPositionByName} from "@/features/position/repository";

export const addPlayerPosition = async (data : Omit<PlayerPositionProps, "id">) : Promise<ResultProps<PlayerPositionProps>> =>{

    const validData = playerPositionSchema.safeParse(data)

    if(!validData.success){
        return {success : false, error : "Une erreur est survenue"};
    }

    const response = await createPlayerPosition(validData.data)

    if(!response.success){
        return {success : response.success, error : response.error }
    }

    return {success : response.success, data: response.data}


}

export const readAllPosition = async () : Promise<ResultProps<PlayerPositionProps[]>> =>{

    const response = await readPosition();

    if(!response.success){
        return {success : false, error : "Une erreur est survenue" }
    }
    return {success : response.success, data: response.data}

}

export const readPositionByLabel= async (label : string) : Promise<ResultProps<string>> => {

    const response = await readPositionByName(label)

    if(!response.success){
        return {success : response.success, error : response.error}
    }

    return {success: response.success, data : response.data.id}
}