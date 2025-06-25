import {prisma} from "@/lib/prisma"
import {CategoryProps, ResultProps} from "@/features/team/types";


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
        const categories = await  prisma.category.findMany({
            orderBy :{
                label : "asc"
            }
        });


            return {success : true, data : categories}

    }catch(err) {
        console.error(err)
        return {success : false, error : "Une erreur est survenue" }
    }
}

export async function readCategory(label : string) : Promise<ResultProps<CategoryProps>> {

    try{
        const team = await prisma.category.findFirst({
            where : {
                label : label.toLowerCase()
            },

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

export async function updateCategory(data : Omit<CategoryProps, "id" |"photo">, photo : string, id:string) : Promise<ResultProps<CategoryProps>> {

    const {label, training1, training2, training3} = data;

    try {
        const updatedCategory = await prisma.category.update({
            data : {
                label : normalizeLabel(label),
                training1 : training1,
                training2 : validData(training2),
                training3 : validData(training3),
                photo : photo
            },
            where : {
                id : id
            }
        })

        return {success : true, data : updatedCategory}
    }catch(err) {
        console.error(err)
        return {success : false, error : "Une erreur est survenue" }
    }

}

export async function deleteCategory(id: string) : Promise<ResultProps<string>> {

    try {
        await prisma.category.delete({
            where : {
                id : id
            }
        })

        return {success : true, data : "L'équipe a bien été supprimée"}
    }catch(err) {
        console.error(err)
        return {success : false, error : "Une erreur est survenue" }
    }
}