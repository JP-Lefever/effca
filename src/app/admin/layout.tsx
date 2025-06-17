import {ReactNode} from "react";
import styles from "./adminLayout.module.css"
import NavAdmin from "@/components/layout/navigation/NavAdmin/NavAdmin";


export default function LayoutAdmin({children}: Readonly<{children: ReactNode}>) {

    return (
        <>
            <section className={styles.sectionLayout}>
                <aside className={styles.aside}>
                    <NavAdmin/>
                </aside>
                <main className={styles.main}>{children}</main>
            </section>
        </>
    )

}