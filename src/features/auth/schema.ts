import {z} from "zod"
import dataError from "@/assets/data/errors/errors.json"


export const usersSchema = z.object({

    email: z.string().regex(/^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,{message : dataError.pattern }).nonempty(),
    password : z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,{message : dataError.pattern }).nonempty(),
})