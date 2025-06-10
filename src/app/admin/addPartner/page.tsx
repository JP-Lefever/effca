import PartnerForm from "@/features/partner/components/form/PartnerForm";
import dataForm from "@/assets/data/partner/partner.json"
import {PartnerProps} from "@/features/partner/type";

export default function AddPartnerPage(){

   const {legendName,name,labelPartner,selectName,is_main,photo,labelFile, buttonAdd} = dataForm;

    return (<>
        <PartnerForm
            legendName={legendName} name={name as keyof PartnerProps}
            labelPartner={labelPartner} selectName={selectName}
            is_main={is_main as keyof PartnerProps} photo={photo as keyof PartnerProps}
            labelFile={labelFile} buttonAdd={buttonAdd}
        />
    </>)
}