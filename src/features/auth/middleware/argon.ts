import argon from "argon2";


export const verifyPassword = async (password: string, dbPassword : string) => {

    return argon.verify(dbPassword, password)

}