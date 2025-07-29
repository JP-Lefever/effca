
import {ReactNode} from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import {readAllCategories} from "@/features/team/action";
import {notFound} from "next/navigation";
import {Metadata} from "next";




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