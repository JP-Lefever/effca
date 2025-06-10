
import {browsePartner} from "@/features/partner/action";
import ModifyPartner from "@/features/partner/components/modifyPartner/modifyPartner";

export default async function ModifyPartnerPage() {


    const partners = await browsePartner()

    if (!partners.success){
        return <p>Aucun partenaires</p>
    }

    return (<>

        <ModifyPartner partners = {partners.data}/>

    </>)
}