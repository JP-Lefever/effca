
export type ActualityProps = {
    id : string;
    title: string;
    description: string;
    date: Date;
    contact : string | null;
    mail : string | null;
    phone : string | null;
    photo : string | FileList | null;
}

export type ResultProps<T> = | {success : true, data : T} | {success : false , error : string};