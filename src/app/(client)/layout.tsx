import { ReactNode } from "react";
import Head from "next/head";
import NavBar from "@/components/layout/navigation/navBar/NavBar";
import Footer from "@/components/layout/footer/Footer";
import { readAllCategories } from "@/features/team/action";
import { notFound } from "next/navigation";
import type { Metadata } from "next";


const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";


export const metadata: Metadata = {
    title: "EFFCA - Club de foot Entente Fons Fourmagnac Camburat Assier",
    description:
        "EFFCA, club de football basé à Fons, Fourmagnac, Camburat et Assier. Suivez nos équipes, matchs, événements et résultats.",
    icons: "/images/logo.webp",
    keywords: [
        "football",
        "EFFCA",
        "club de foot",
        "Fons",
        "Fourmagnac",
        "Camburat",
        "Assier",
        "sport local",
    ],
    metadataBase: new URL(DOMAIN),
    openGraph: {
        title: "EFFCA - Club de foot Entente Fons Fourmagnac Camburat Assier",
        description:
            "Suivez l'actualité du club de foot EFFCA : équipes, matchs, événements et résultats.",
        url: DOMAIN,
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
        title: "EFFCA - Club de foot Entente Fons Fourmagnac Camburat Assier",
        description:
            "Suivez l'actualité du club de foot EFFCA : équipes, matchs, événements et résultats.",
        images: ["/images/logo.webp"],
    },
    alternates: {
        canonical: DOMAIN,
    },
};


const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: "EFFCA",
    description:
        "Club de football basé à Fons, Fourmagnac, Camburat et Assier. Suivez nos équipes, matchs et événements sportifs.",
    url: DOMAIN,
    logo: `${DOMAIN}/images/logo.webp`,
    address: {
        "@type": "PostalAddress",
        streetAddress: "Adresse du club ici",
        addressLocality: "Fons",
        postalCode: "46100",
        addressCountry: "FR",
    },
    sport: "Football",
    sameAs: [
        "https://www.facebook.com/tonpagefacebook",
        "https://www.instagram.com/toncompteinsta",
        "https://twitter.com/toncompte",
    ],
};


export default async function LayoutClient({
                                               children,
                                           }: Readonly<{ children: ReactNode }>) {
    const team = await readAllCategories();

    if (!team.success) return notFound();

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
            </Head>

            <NavBar team={team.data} />
            <main>{children}</main>
            <Footer />
        </>
    );
}
