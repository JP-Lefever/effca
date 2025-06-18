import {prisma} from "@/lib/prisma"
import {CategoryProps, ResultProps} from "@/features/category/types";

const validData = (data : string |null | undefined)=>{
    return data === "" || data === undefined ? null : data
}

export async function createCategory(category: Omit<CategoryProps, "id" |"photo">, photo : string | null) : Promise<ResultProps<CategoryProps>> {
    try {

        const newCategory = await prisma.category.create({
            data :{
                label : category.label,
                training1 : category.training1,
                training2 : validData(category.training2),
                training3 : validData(category.training3),
                photo : photo,
            }
        })

        return {success : true, data : newCategory}

    }catch(err) {
        console.error(err)
        return {success : false, error : "Une erreur est survenue" }
    }
}


export async function readCategories(): Promise<ResultProps<CategoryProps[]>> {

    try {
        const categories = await  prisma.category.findMany();


            return {success : true, data : categories}

    }catch(err) {
        console.error(err)
        return {success : false, error : "Une erreur est survenue" }
    }
}