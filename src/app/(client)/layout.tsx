"use client"
import {ReactNode} from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Header from "@/components/layout/header/Header";



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