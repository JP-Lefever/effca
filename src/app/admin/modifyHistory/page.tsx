import ModifyHistoryForm from "@/features/club/components/modifyHistoryForm/ModifyHistoryForm";
import {readHistoryClub} from "@/features/club/action";


export default async function ModifyHistoryPage(){

    const history = await readHistoryClub();

    if(!history.success){
        return <p>Une erreur est survenue</p>


    }

    return (<>

        <ModifyHistoryForm data={history.data}/>
    </>)
}