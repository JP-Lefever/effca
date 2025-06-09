import ModifyHistoryForm from "@/features/history/components/modifyHistoryForm/ModifyHistoryForm";
import {readHistoryClub} from "@/features/history/action";


export default async function ModifyHistoryPage(){

    const history = await readHistoryClub();

    if(!history.success){
        return <p>Une erreur est survenue</p>


    }

    return (<>

        <ModifyHistoryForm data={history.data}/>
    </>)
}