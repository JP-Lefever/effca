import FormModify from "@/features/actuality/components/formModify/FormModify";
import {readActualityId} from "@/features/actuality/action";

export default async function  actualityDetailPage(props : {params : Promise<{id: string}>}) {

    const params = await props.params;
    const id = params.id;

    const actuality = await readActualityId(id);

    if (!actuality.success) {
        return (
            <p>Une erreur est survenue lors du chargement de la page</p>
        )
    }

    return (<>

        <FormModify actuality={actuality.data}/>

    </>)
}