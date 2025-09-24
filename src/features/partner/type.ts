

type formFieldName = keyof PartnerProps

export type formProps = {
    legendName : string;
    name : formFieldName ;
    labelPartner: string;
    selectName: string;
    link : formFieldName;
    linkLabel : string;
    is_main: formFieldName;
    photo: formFieldName;
    labelFile: string;
    buttonAdd : string;
    buttonModify : string;
    buttonDelete : string;
}

export type PartnerProps = {
    id : string;
    is_main : boolean;
    name : string;
    photo : string | FileList;
    link? : string | undefined | null;
}

export type ResultProps<T> = | {success : true, data : T} | {success : false , error : string};

