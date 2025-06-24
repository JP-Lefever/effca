import type {DefaultSession, DefaultUser} from "next-auth";

declare module "next-auth" {

    interface Session {
        user : {
            id: string;
            firstname: string;
            lastname: string;
            email: string;
            is_admin: boolean;
        } & DefaultSession["user"];
    }

interface User extends DefaultUser {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    is_admin: boolean;
}

declare module "next-auth/jwt" {
    interface JWT{
        id: string;
        firstname: string;
        lastname: string;
        email: string;
        is_admin: boolean;
    }
}

}