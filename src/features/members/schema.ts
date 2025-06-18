import {z} from "zod";
import dataError from "@/assets/data/errors/errors.json"

const regex = /^[\p{L}0-9_\-\s]+$/u

export const memberSchema = z.object({
    firstname : z.string().regex(regex, {message : dataError.pattern}).nonempty({message: dataError.require}),
    lastname : z.string().regex(regex, {message : dataError.pattern}).nonempty({message: dataError.require}),
    mail : z.string().regex(/^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {message : dataError.mail}).optional().nullable(),
    tel : z.string().regex(/^0[0-9]([-. ]?[0-9]{2,}){4,}$/, {message : dataError.phone}).optional().nullable(),
    positionId: z.string().optional().nullable(),
    categoryId : z.string().optional().nullable(),
    memberFunctionId : z.string().optional().nullable(),
})