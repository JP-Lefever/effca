import {z} from "zod"
import dataError from "@/assets/data/errors/errors.json"


export const associationRoleSchema = z.object({
    label : z.string().regex(/^[\p{L}0-9_\-'\s]+$/u, {message : dataError.pattern}).nonempty({message : dataError.require}),
})