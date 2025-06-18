import {z} from "zod"
import dataError from "@/assets/data/errors/errors.json"


export const categorySchema = z.object({
    label : z.string().regex(/^[\p{L}0-9_\-\s]+$/u, {message : dataError.pattern}).nonempty({message : dataError.require}),
    training1 : z.string().regex(/^[\p{L}0-9_\-:\s]+$/u, {message : dataError.pattern}).nonempty({message : dataError.require}),
    training2 : z.string().regex(/^[\p{L}0-9_\-:\s]+$/u, {message : dataError.pattern}).optional().nullable(),
    training3 : z.string().regex(/^[\p{L}0-9_\-:\s]+$/u, {message : dataError.pattern}).optional().nullable(),
})