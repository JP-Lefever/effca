import type {Session, SessionStrategy, User} from "next-auth"
import type {JWT} from "next-auth/jwt";

export const authConfig = {
    pages : {
        signIn: '/login',
    },
    session : {
        strategy : "jwt" as SessionStrategy,
        maxAge: 30 * 24 * 60 * 60,
    },
    callback: {
        async jwt({token, user} : {token : JWT; user?: User}) {
            if(user) {
                token.id = user.id;
                token.firstname = user.firstname;
                token.lastname = user.lastname;
                token.email = user.email as string;
                token.is_admin = user.is_admin;

            }
                return token;
        },
        async session({session, token} : {session : Session, token : JWT}) {
            session.user = {
                id : token.id as string,
                firstname : token.firstname as string,
                lastname : token.lastname as string,
                email : token.email as string,
                is_admin : token.is_admin as boolean,
            }
            return session;
        }
    }
}