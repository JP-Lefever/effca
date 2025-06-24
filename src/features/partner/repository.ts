import {prisma} from "@/lib/prisma";
import {PartnerProps} from "@/features/partner/type";
import {ResultProps} from "@/features/club/type";


export  async function createPartner(data : Omit<PartnerProps, "id" |"photo">, photo: string ) : Promise<ResultProps<PartnerProps>> {

    const {is_main, name} = data

    try {
        const newPartner = await prisma.partner.create({
            data : {
                is_main : is_main,
                name : name,
                photo : photo
            }

        })
        return {success : true, data : newPartner}
    }catch(err){
        console.error(err)
        return  {success : false, error : "Une erreur est survenue"}
    }
}

export  async function readAllPartner() : Promise<ResultProps<PartnerProps[]>> {

    try{

        const partners= await prisma.partner.findMany({
            orderBy :{
                name : "asc"
            }
        })

        return {success : true, data : partners}
    }catch(err){
        console.error(err)
        return  {success : false, error : "Une erreur est survenue"}
    }
}

export async function updatePartner(data : Omit<PartnerProps, "id" | "photo">, photo: string, id : string) : Promise<ResultProps<PartnerProps>> {

        const {is_main, name} = data
    try {
        const updatedPartner = await prisma.partner.update({
            data : {
                is_main : is_main,
                name : name,
                photo : photo
            },
            where : {
                id : id,
            }
        })

        return {success : true, data : updatedPartner}
    }catch(err){
            console.error(err)
        return  {success : false, error : "Une erreur est survenue"}
    }

}

export async function deletePartner(id: string) : Promise<ResultProps<null>> {

    try {
        await prisma.partner.delete({
            where : {
                id : id
            }
        })
        return {success : true , data : null}
    }catch(err){
        console.error(err)
        return  {success : false, error : "Une erreur est survenue"}
    }
}