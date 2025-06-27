import ActualityList from "@/features/actuality/components/actualityListAdmin/ActualityList";
import {browseActualities} from "@/features/actuality/action";
import {notFound} from "next/navigation";

export default async function ModifyActualityPage() {

    const actualities = await browseActualities()


    if (!actualities.success){
        return (
            notFound()
        )
    }

    return(<>

        <ActualityList actualities={actualities.data} />

    </>)
}