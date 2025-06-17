"use client"

import {ReactNode} from "react";
import styles from "./layout.module.css"
import {useSelectedLayoutSegment} from "next/navigation";






export default function LayoutActuality({children }: {children: ReactNode}) {


            const useSegment = useSelectedLayoutSegment();
            const isModal = !!useSegment;

            return (
            <>
                {!isModal &&
                <main >
                    {children}
                </main>
                }

                {isModal && (
                    <>
                        <main className={styles.modal}>
                            {children}
                        </main>
                    </>
                )}
            </>
            );


}