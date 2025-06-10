

type formFieldName = keyof PartnerProps

export type formProps = {
    legendName : string;
    inputRegisterName : formFieldName ;
    labelPartner: string;
    selectName: string;
    selectRegister: formFieldName;
    fileRegisterName: formFieldName;
    labelFile: string;
    buttonAdd : string;
}

export type PartnerProps = {
    id : string;
    is_main : boolean;
    name : string;
    photo : string | FileList;
}

export type ResultProps<T> = | {success : true, data : T} | {success : false , error : string};

