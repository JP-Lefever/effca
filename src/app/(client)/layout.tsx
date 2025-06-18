"use client"
import {ReactNode} from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";




export default function LayoutClient({children}: Readonly<{children: ReactNode}>) {



    return (
        <>
        <NavBar/>

        <main>
            {children}
        </main>

        </>
    )
}