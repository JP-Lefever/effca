import {prisma} from "@/lib/prisma";
import {PartnerProps} from "@/features/partner/type";
import {ResultProps} from "@/features/history/type";


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

        const partners= await prisma.partner.findMany()

        return {success : true, data : partners}
    }catch(err){
        console.error(err)
        return  {success : false, error : "Une erreur est survenue"}
    }
}