import ModifyHistoryForm from "@/features/history/components/modifyHistoryForm/ModifyHistoryForm";
import {readHistory} from "@/features/history/repository";

export default async function ModifyHistoryPage(){

    const history = await readHistory();

    if(!history.success){
        return <p>Une erreur est survenue</p>


    }

    return (<>

        <ModifyHistoryForm history={history.data}/>
    </>)
}