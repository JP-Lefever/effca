
import {ReactNode} from "react";
import NavTeam from "@/components/layout/navigation/NavTeam/NavTeam";
import TeamHeader from "@/components/layout/teamHeader/TeamHeader";
import {Metadata} from "next";

export const metadata : Metadata = {
    title: "EFFCA | Les équipes",
    description: "Les équipes de l'Entente Fons Fourmagnac Camburat Assier",
    icons : "/images/logo.webp",
}

export default function  teamLayout({children} : { children: ReactNode }) {

    return (
        <>

            <TeamHeader/>
            <NavTeam/>
            <main>
                {children}
            </main>
        </>
    )
}