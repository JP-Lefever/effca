"use client"
import styles from "./layout.module.css"
import {ReactNode} from "react";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Header from "@/components/layout/header/Header";



export default function LayoutClient({children}: Readonly<{children: ReactNode}>) {



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