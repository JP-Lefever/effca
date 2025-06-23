"use server"


import {HistoryProps, ResultProps} from "@/features/history/type";
import {historySchema} from "@/features/history/schema";
import {createHistory, readHistory, updateHistory} from "@/features/history/repository";

export  const createHistoryClub =  async (data : Omit<HistoryProps, "id">) : Promise<ResultProps<null>> =>{

    const validData = historySchema.safeParse(data)

    if(!validData.success){
        return {success : false, error : "Données invalides"}
    }

    const response = await createHistory(validData.data)

    if(!response.success){
        return {success : response.success, error : response.error}
    }

    return {success : response.success, data : response.data}
}

export const readHistoryClub = async (): Promise<ResultProps<HistoryProps>> =>{

    const response = await readHistory()

    if(!response.success){
        return {success : response.success, error : response.error}
    }

    return {success : response.success, data : response.data}
}

export const editHistoryClub = async (data : Omit<HistoryProps, 'id'>, id : string): Promise<ResultProps<null>> =>{

    const validData = historySchema.safeParse(data)

    if(!validData.success){
        return {success : false, error : "Données invalides"}
    }

    const response = await updateHistory(validData.data, id)

    if(!response.success){
        return {success : response.success, error : response.error}
    }

    return {success: response.success, data : null}

}