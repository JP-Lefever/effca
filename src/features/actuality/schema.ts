import {z} from "zod"
import dataError from "@/assets/data/errors/errors.json"


export const actualitySchema = z.object({

    title: z.string().regex(/^[^<>]*$/, {message : dataError.pattern}).nonempty({message : dataError.require}),
    description : z.string().regex(/^[^<>]*$/, {message : dataError.pattern}).nonempty({message : dataError.require}),
    date : z.coerce.date({required_error : dataError.require}),
    contact : z.string().regex(/^[^<>]*$/, {message : dataError.pattern}).nullable(),
    mail : z.string().regex(/^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {message : dataError.mail}).nullable(),
    phone : z.string().regex(/^0[0-9]([-. ]?[0-9]{2,}){4,}$/, {message : dataError.phone}).nullable(),
})