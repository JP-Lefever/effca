import {ActualityProps, ResultProps} from "@/features/actuality/type";
import {prisma} from "@/lib/prisma";




export async function createActuality(data : Omit<ActualityProps, "id" | "photo">, photo : string | null) :Promise<ResultProps<ActualityProps>> {

    const {title, description, date,contact, mail, phone} = data;

        try {
            const newActuality = await prisma.actuality.create({
                data : {
                    title : title,
                    description : description,
                    date : date,
                    contact: contact ,
                    mail : mail ,
                    phone : phone ,
                    photo : photo ,
                }
            })
            return {success : true, data : newActuality}
        }catch(err){
            console.error(err)
            return {success : false, error : "Une erreur est survenue"}
        }
}

export async function readAllActualities( ) : Promise<ResultProps<ActualityProps[]>> {

    try {
        const actuality = await prisma.actuality.findMany({
            orderBy :{
                date : "asc"
            }
        })

        return {success : true, data: actuality}
    }catch(err){
        console.error(err)
        return {success : false, error : "Une erreur est survenue"}
    }
}

export async function readActuality( id: string) : Promise<ResultProps<ActualityProps>> {

    try {
        const actuality = await prisma.actuality.findUnique({
            where : {
                id: id
            }
        })
        if (!actuality) {
            return {success : false, error : "Actualitée non trouvée"}
        }
        return {success : true, data: actuality}
    }catch(err){
        console.error(err)
        return {success : false, error : "Une erreur est survenue"}
    }
}

export async function updateActuality(data : Omit<ActualityProps, "id" | "photo">, photo : string | null, id : string) :Promise<ResultProps<ActualityProps>> {

    const {title,description, date,contact, mail, phone} = data

    try {
        const updatedActuality = await prisma.actuality.update({
            data : {
                title : title,
                description : description,
                date : date,
                contact: contact,
                mail : mail,
                phone : phone,
                photo : photo ,

            }, where :
                {
                    id : id,
                }
        })

        return {success : true, data : updatedActuality}
    }catch(err){
        console.error(err)
        return {success : false, error : "Une erreur est survenue"}
    }

}