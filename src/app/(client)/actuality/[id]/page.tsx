import {readActualityId} from "@/features/actuality/action";
import DetailActuality from "@/features/actuality/components/detailActuality/DetailActuality";
import {notFound} from "next/navigation";


export default async function actualityPage(props : {params : Promise<{id: string}>}) {
    const params = await props.params
    const id = params.id

    const actuality = await readActualityId(id)

    if(!actuality.success){
        return (
            notFound()
        )
    }


    return (
        <>

        <DetailActuality actuality={actuality.data}/>
        </>
    )
}