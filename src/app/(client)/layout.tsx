"use client"
import {ReactNode} from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";




export default function LayoutClient({children}: Readonly<{children: ReactNode}>) {



    return (
        <>
        <NavBar/>

        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
}