import {z} from "zod";
import dataError from "@/assets/data/errors/errors.json"

const regex = /^[\p{L}0-9_\-\s]+$/u

export const memberSchema = z.object({
    firstname : z.string().regex(regex, {message : dataError.pattern}).nonempty({message: dataError.require}),
    lastname : z.string().regex(regex, {message : dataError.pattern}).nonempty({message: dataError.require}),
    positionId: z.string().optional(),
    categoryId : z.string().optional(),
    memberFunctionId : z.string().optional(),
})