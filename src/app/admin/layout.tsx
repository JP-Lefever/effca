import {ReactNode} from "react";
import NavAdmin from "@/components/navigation/NavAdmin/NavAdmin";


export default function layoutAdmin({children}: Readonly<{children: ReactNode}>) {

    return (
        <>
        <NavAdmin/>
        <main>{children}</main>
        </>
    )

}