"use server"


import {ResultProps, UserProps} from "@/features/auth/type";

import {readUserByMail} from "@/features/auth/repository";

export const readUserByEmail = async (email: string) : Promise<ResultProps<UserProps>> => {

    const response = await readUserByMail(email);

    if(!response.success){
        return {success : false, error : response.error}
    }

    return {success: response.success, data: response.data}
}