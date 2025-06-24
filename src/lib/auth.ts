import {authConfig} from "@/lib/auth.config";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {usersSchema} from "@/features/auth/schema";
import {readUserByEmail} from "@/features/auth/action";
import {verifyPassword} from "@/features/auth/middleware/argon";


export const authOptions = {

    ...authConfig,
    providers: [
        Credentials({
                credentials: {
                    email: {label: "email", type: "text"},
                    password: {label: "mot de passe", type: "password"}
                },
                async authorize(credentials){

                    const validData = usersSchema.safeParse(credentials)
                    if(!validData.success){
                        throw new Error('Informations incorrectes')
                    }

                    const {email, password} = validData.data

                    const user = await readUserByEmail(email)
                    if(!user.success) throw new Error(user.error)
                    console.log(user.data.password )
                    const validPassword = await verifyPassword(user.data.password as string, password)
                    console.log(validPassword)
                    if(!validPassword) throw new Error("Email ou mot de passe incorrect")

                    return {
                        id : user.data.id,
                        firstname : user.data.firstname,
                        lastname : user.data.lastname,
                        email : user.data.mail as string,
                        is_admin : user.data.is_admin,
                    }

                }
            }
           )
    ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };