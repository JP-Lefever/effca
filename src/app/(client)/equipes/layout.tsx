
import {ReactNode} from "react";
import NavTeam from "@/components/layout/navigation/NavTeam/NavTeam";
import TeamHeader from "@/components/layout/teamHeader/TeamHeader";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "EFFCA | Les équipes",
    description:
        "Découvrez toutes les équipes du club de football EFFCA : Entente Fons Fourmagnac Camburat Assier, leurs joueurs, catégories et classements.",
    icons: "/images/logo.webp",
    keywords: [
        "EFFCA",
        "club de foot",
        "football",
        "équipes",
        "joueurs",
        "Fons",
        "Fourmagnac",
        "Camburat",
        "Assier",
    ],
    metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"),
    openGraph: {
        title: "EFFCA | Les équipes",
        description:
            "Découvrez toutes les équipes du club EFFCA : Entente Fons Fourmagnac Camburat Assier, leurs joueurs et classements.",
        url: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/equipes`,
        images: [
            {
                url: "/images/logo.webp",
                width: 800,
                height: 600,
                alt: "Logo EFFCA",
            },
        ],
        siteName: "EFFCA",
    },
    twitter: {
        card: "summary_large_image",
        title: "EFFCA | Les équipes",
        description:
            "Découvrez toutes les équipes du club EFFCA : Entente Fons Fourmagnac Camburat Assier, leurs joueurs et classements.",
        images: ["/images/logo.webp"],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"}/equipes`,
    },
};


export default function  teamLayout({children} : { children: ReactNode }) {

    return (
        <>

            <TeamHeader/>
            <NavTeam/>
            <main>
                {children}
            </main>
        </>
    )
}