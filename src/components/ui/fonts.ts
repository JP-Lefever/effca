import {Bebas_Neue, Oswald} from "next/font/google";

export const titleFont = Bebas_Neue({
    weight : "400",
    subsets: ["latin"],
    variable : "--title-font",
});

export const paragraphFont = Oswald({
    weight : "400",
    subsets : ['latin'],
})