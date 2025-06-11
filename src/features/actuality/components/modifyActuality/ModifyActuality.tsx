import {browseActualities} from "@/features/actuality/action";
import FormModify from "@/features/actuality/components/formModify/FormModify";

export default async function ModifyActuality(){

    const actualities = await browseActualities()

    if (!actualities.success){
        return (
            <p>Erreur lors du chargement des actualités</p>
        )
    }

    return(<>

        {actualities.data.map((actuality)=>(
            <section key={actuality.id}>
            <FormModify actuality={actuality} />
            </section>
        ))}

    </>)
}