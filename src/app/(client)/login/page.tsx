import LoginForm from "@/features/auth/components/loginForm/LoginForm";
import type {Metadata} from "next";

export const metadata : Metadata = {
    title: "EFFCA | Login",

    icons : "/images/logo.webp",
}


export default function LoginPage(){

    return (
        <>

        <LoginForm/>
        </>
    )
 }