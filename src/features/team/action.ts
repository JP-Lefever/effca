"use server"
import {CategoryProps, ResultProps} from "@/features/team/types";
import {categorySchema} from "@/features/team/schema";
import {createCategory, deleteCategory, readCategories, readCategory, updateCategory} from "@/features/team/repository";



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

export const editCategory = async (data : Omit<CategoryProps, "id" |"photo">, photo : string, id:string) : Promise<ResultProps<CategoryProps>> =>{

    const validData = categorySchema.safeParse(data);
    console.log(validData.error)
    if (!validData.success) {
        return {success: false, error : "Données invalides"};
    }

    const response = await updateCategory(validData.data, photo, id);

    if(!response.success){
        return  {success :response.success, error : response.error}
    }
    return {success : response.success, data : response.data}


}

export const destroyCategory = async (id: string) : Promise<ResultProps<string>> =>{

    const response = await deleteCategory(id)

    if(!response.success){
        return {success: response.success, error : response.error};
    }
    return {success : response.success, data : response.data}
}