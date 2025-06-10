import PartnerForm from "@/features/partner/components/form/PartnerForm";
import dataForm from "@/assets/data/partner/partner.json"

export default function AddPartnerPage(){

   const {legendName,inputRegisterName,labelPartner,selectName,selectRegister,fileRegisterName,labelFile, buttonAdd} = dataForm;

    return (<>
        <PartnerForm
            legendName={legendName} inputRegisterName={inputRegisterName}
            labelPartner={labelPartner} selectName={selectName}
            selectRegister={selectRegister} fileRegisterName={fileRegisterName}
            labelFile={labelFile} buttonAdd={buttonAdd}
        />
    </>)
}