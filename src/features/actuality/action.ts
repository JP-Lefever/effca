"use server"


import {ActualityProps, ResultProps} from "@/features/actuality/type";
import {actualitySchema} from "@/features/actuality/schema";
import {createActuality, readAllActuality} from "@/features/actuality/repository";

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

    const response = await readAllActuality()

    if(!response.success) {
        return {success : response.success, error : response.error}
    }

    return {success : response.success, data: response.data}

}