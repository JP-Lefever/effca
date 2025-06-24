import {z} from "zod"
import errors from "@/assets/data/errors/errors.json"


export const historySchema = z.object({

    history : z.string().regex(/^[^[<>]*$/, {message : errors.pattern }).nonempty(),
})