
import {browsePartner} from "@/features/partner/action";
import ModifyPartner from "@/features/partner/components/modifyPartner/modifyPartner";
import {notFound} from "next/navigation";

export const revalidate = 0

export default async function ModifyPartnerPage() {


    const partners = await browsePartner()

    if (!partners.success){
        return notFound()
    }

    return (<>

        <ModifyPartner partners = {partners.data}/>

    </>)
}