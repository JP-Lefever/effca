

export type MemberProps = {
    id : string,
    firstname : string,
    is_admin : boolean,
    lastname : string,
    mail : string | null,
    tel : string| null,
    positionId: string | null,
    categoryId: string | null,
    memberFunctionId : string |null;
    photo: string | null | FileList
}

export type ResultProps<T> = | {success : true, data : T} | {success : false, error : string};