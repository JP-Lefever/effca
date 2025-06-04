import {CategoryProps} from "@/features/category/types";
import {categorySchema} from "@/features/category/schema";
import {createCategory} from "@/features/category/repository";


export const addCategory = async (data : CategoryProps) => {

    const validData = categorySchema.safeParse(data);

    if (!validData.success) {
        return {success: false, errors: validData.error};
    }

    const response = await createCategory(validData.data);

    if(!response.success) {
        return {success: false, errors : response.error};
    }
    return {success : response.success, data : response.data};
}