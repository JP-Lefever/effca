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
            console.log(err)
            return {success : false, error : "Une erreur est survenue"}
        }
}