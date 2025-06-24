import argon from "argon2"

export async function generatePassword(label: string) {

        const hash = await argon.hash(label)
        console.log(hash)
        return hash

}