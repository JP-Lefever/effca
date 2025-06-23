
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
        console.error(err)
        return {success : false, error : "Une erreur est survenue"}
    }
}

export async function readRole() : Promise<ResultProps<RoleProps[]>> {

    try {

        const roles = await prisma.memberFunction.findMany()

        return {success : true, data : roles}
    }catch(err){
        console.error(err)
        return {success : false, error : "Une erreur est survenue"}
    }
}

export async function readRoleById(label : string) : Promise<ResultProps<RoleProps>> {

    try {

        const roles = await prisma.memberFunction.findFirst({
            where: {
                label : label
            }
        })
        if (!roles) {
            return {success : false, error : "Aucun membre trouvé"}
        }

        return {success : true, data : roles}
    }catch(err){
        console.error(err)
        return {success : false, error : "Une erreur est survenue"}
    }
}