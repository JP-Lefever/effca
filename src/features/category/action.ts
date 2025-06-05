"use server"
import {CategoryProps, ResultProps} from "@/features/category/types";
import {categorySchema} from "@/features/category/schema";
import {createCategory} from "@/features/category/repository";


export const addCategory = async (data : Omit<CategoryProps, "id">) : Promise<ResultProps<CategoryProps>> => {

    const validData = categorySchema.safeParse(data);

    if (!validData.success) {
        return {success: false, error: "Une erreur est survenue."};
    }

    const response = await createCategory(validData.data);

    if(!response.success) {
        return {success: false, error : response.error};
    }
    return {success : response.success, data : response.data};
}