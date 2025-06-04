import {z} from "zod"
import dataError from "@/assets/data/errors/errors.json"


export const categorySchema = z.object({
    label : z.string().regex(/[a-zA-Z0-9]/, {message : dataError.pattern}).nonempty({message : dataError.require}),
})