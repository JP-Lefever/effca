
import {ReactNode} from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import {readAllCategories} from "@/features/team/action";




export default async function LayoutClient({children}: Readonly<{children: ReactNode}>) {

    const team = await readAllCategories()

    if(!team.success){
        return (
            <p>Aucune equipe trouvée</p>
        )
    }
    console.log(team.data);

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