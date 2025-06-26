"use server"


import {ActualityProps,  ResultProps} from "@/features/actuality/type";
import {actualitySchema} from "@/features/actuality/schema";
import {
    createActuality,
    destroyActuality,
    readActuality,
    readAllActualities,
    updateActuality
} from "@/features/actuality/repository";

export const addNewActuality = async (data : Omit<ActualityProps, "id" | "photo">, photo : string) : Promise<ResultProps<ActualityProps>> => {

    const validData = actualitySchema.safeParse(data)


        if(!validData.success) {
            return {success : false, error : "Données invalides"}
        }
        const response = await createActuality(validData.data, photo)

        if(!response.success) {
            return {success : response.success, error: response.error}
        }

        return {success: response.success, data: response.data}
}
export const browseActualities = async () : Promise<ResultProps<ActualityProps[]>> => {

    const response = await readAllActualities()

    if(!response.success) {
        return {success : response.success, error : response.error}
    }

    return {success : response.success, data: response.data}

}

export const readActualityId = async (id : string) : Promise<ResultProps<ActualityProps>> => {

    const response = await readActuality(id)

    if(!response.success) {
        return {success : response.success, error : response.error}
    }

    return {success : response.success, data: response.data}

}

export const editActuality = async (data : Omit<ActualityProps, "id" | "photo">, photo : string |null, id : string) : Promise<ResultProps<ActualityProps>> => {

    const validData = actualitySchema.safeParse(data)


        if(!validData.success) {
            return {success: false, error : "Donnée invalides"}
        }
    const response = await updateActuality( validData.data, photo, id,)

        if(!response.success) {
            return {success : response.success, error : response.error}
        }

        return {success: response.success, data: response.data}

}

export const deleteActuality = async (id: string) : Promise<ResultProps<string>> => {

    const response = await destroyActuality(id)

    if(!response.success) {
        return {success : response.success, error : response.error}
    }
    return {success: response.success, data: response.data}
}