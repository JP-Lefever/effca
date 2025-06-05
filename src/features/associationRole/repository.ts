
import {ResultProps, RoleProps} from "@/features/associationRole/type";
import {prisma} from "@/lib/prisma";


export async function createAssociationRole(data : Omit<RoleProps, "id">) : Promise<ResultProps<RoleProps>> {

    try {

        const newRole = await prisma.memberFunction.create({
            data : {
                label : data.label,
            }
        })

        return {success : true, data : newRole}
    }catch(err){
        console.log(err)
        return {success : false, error : "Une erreur est survenue"}
    }

}