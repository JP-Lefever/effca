import {z} from "zod"
import dataError from "@/assets/data/errors/errors.json"


export const partnerSchema = z.object({

    name : z.string().regex(/^[^<>]*$/, {message : dataError.pattern}).nonempty({message : dataError.require}),
    is_main : z.preprocess(
        (val) => {
        if (val === "true") return true;
        if (val === "false") return false;
        return val ;
    },z.boolean())

})