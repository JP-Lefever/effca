
import {ReactNode} from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import {readAllCategories} from "@/features/team/action";
import {notFound} from "next/navigation";
import type {Metadata} from "next";


export const metadata : Metadata = {
    title: "EFFCA | Entente Fons Fourmagnac Camburat Assier",
    description: "Club de foot de l'Entente Fons Fourmagnac Camburat Assier",
    icons : "/images/logo.webp",
}


export default async function LayoutClient({children}: Readonly<{children: ReactNode}>) {

    const team = await readAllCategories()

    if(!team.success){
        return (
            notFound()
        )
    }


    return (
        <>
        <NavBar team={team.data}/>

        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
}