import PartnerForm from "@/features/partner/components/form/PartnerForm";
import dataForm from "@/assets/data/partner/partner.json"
import {PartnerProps} from "@/features/partner/type";


export default function ModifyPartner({partners} : {partners: PartnerProps[]}) {



    return (
        <>
        {partners.map((p) => (

        <PartnerForm key = {p.id}
            dataForm={{
                ...dataForm,
                labelFile: dataForm.modifyFile,
                name : dataForm.name as keyof PartnerProps,
                is_main : dataForm.is_main as keyof  PartnerProps,
                photo: dataForm.photo as keyof PartnerProps,
            }}
            partners = {p}
        />
            ))}
        </>
    )
}