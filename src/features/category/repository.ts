import {prisma} from "@/lib/prisma"
import {CategoryProps, ResultProps} from "@/features/category/types";

const validData = (data : string |null | undefined)=>{
    return data === "" || data === undefined ? null : data
}

const normalizeLabel = (input: string) => {
    return input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
}

export async function createCategory(category: Omit<CategoryProps, "id" |"photo">, photo : string | null) : Promise<ResultProps<CategoryProps>> {
    try {

        const newCategory = await prisma.category.create({
            data :{
                label : normalizeLabel(category.label),
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

export async function readCategory(label : string) : Promise<ResultProps<CategoryProps>> {
    console.log(label.toLowerCase());
    try{
        const team = await prisma.category.findFirst({
            where : {
                label : label.toLowerCase()
            }
        })
        if(!team){
            return {success : false, error : "Aucune équipe trouvée" }
        }
        return {success:true, data : team}
    } catch(err) {
        console.error(err)
        return {success : false, error : "Une erreur est survenue" }
    }
}