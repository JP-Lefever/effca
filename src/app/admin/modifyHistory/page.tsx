import ModifyHistoryForm from "@/features/club/components/modifyHistoryForm/ModifyHistoryForm";
import {readHistoryClub} from "@/features/club/action";
import {notFound} from "next/navigation";


export default async function ModifyHistoryPage(){

    const history = await readHistoryClub();

    if(!history.success){
        return notFound()


    }

    return (<>

        <ModifyHistoryForm data={history.data}/>
    </>)
}