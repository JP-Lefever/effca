import ActualityList from "@/features/actuality/components/actualityListAdmin/ActualityList";
import {browseActualities} from "@/features/actuality/action";

export default async function ModifyActualityPage() {

    const actualities = await browseActualities()


    if (!actualities.success){
        return (
            <p>Erreur lors du chargement des actualités</p>
        )
    }

    return(<>

        <ActualityList actualities={actualities.data} />

    </>)
}