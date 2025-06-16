import {ReactNode} from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Header from "@/components/layout/header/Header";

export default function layoutClient({children}: Readonly<{children: ReactNode}>) {


    return (
        <>
        <NavBar/>
        <Header/>
        <main>
            {children}
        </main>
        </>
    )
}