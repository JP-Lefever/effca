import {prisma} from "@/lib/prisma"
import {CategoryProps, ResultProps} from "@/features/category/types";

export async function createCategory(category: CategoryProps) : Promise<ResultProps<CategoryProps>> {
try {

    const newCategory = await prisma.category.create({
        data :{
            label : category.label
        }
    })

    return {success : true, data : newCategory}

}catch(err) {
    console.error(err)
    return {success : false, error : "Une erreur est survenue" }
}
}