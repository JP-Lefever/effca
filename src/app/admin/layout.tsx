import {ReactNode} from "react";


export default function layoutAdmin({children}: Readonly<{children: ReactNode}>) {

    return (

        <main>{children}</main>
    )

}