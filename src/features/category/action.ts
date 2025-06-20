"use server"
import {CategoryProps, ResultProps} from "@/features/category/types";
import {categorySchema} from "@/features/category/schema";
import {createCategory, readCategories, readCategory} from "@/features/category/repository";



export const addCategory = async (data : Omit<CategoryProps, "id" |"photo">, photo : string |null) : Promise<ResultProps<CategoryProps>> => {

    const validData = categorySchema.safeParse(data);

    if (!validData.success) {
        return {success: false, error: "Une erreur est survenue."};
    }

    const response = await createCategory(validData.data, photo);

    if(!response.success) {
        return {success: false, error : response.error};
    }
    return {success : response.success, data : response.data};
}

export const readAllCategories = async() : Promise<ResultProps<CategoryProps[]>> =>{

    const response = await readCategories();

    if (!response.success){
        return {success : response.success, error : response.error}
    }

    return {success : response.success, data : response.data}
}

export const readCategoryById = async (label: string) : Promise<ResultProps<CategoryProps>> =>{

    const response = await readCategory(label)
    if(!response.success){
        return {success: false, error : response.error}
    }

    return {success : response.success, data : response.data}
}