import argon from "argon2";


export const verifyPassword = async (dbPassword : string, password: string ) => {

    return await argon.verify(dbPassword, password)

}