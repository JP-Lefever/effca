
import {ReactNode} from "react";
import NavTeam from "@/components/layout/navigation/NavTeam/NavTeam";
import TeamHeader from "@/components/layout/teamHeader/TeamHeader";

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