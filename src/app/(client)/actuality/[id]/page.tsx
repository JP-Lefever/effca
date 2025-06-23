import {readActualityId} from "@/features/actuality/action";
import DetailActuality from "@/features/actuality/components/detailActuality/DetailActuality";


export default async function actualityPage(props : {params : Promise<{id: string}>}) {
    const params = await props.params
    const id = params.id

    const actuality = await readActualityId(id)

    if(!actuality.success){
        return (
            <p>Une erreur est survenue</p>
        )
    }


    return (
        <>

        <DetailActuality actuality={actuality.data}/>
        </>
    )
}