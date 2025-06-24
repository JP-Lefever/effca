
export type UserProps = {
    id : string,
    firstname : string,
    is_admin : boolean,
    lastname : string,
    mail : string | null,
    tel : string| null,
    password : string | null,
    positionId: string | null,
    categoryId: string | null,
    memberFunctionId : string |null;
    photo: string | null | FileList
}
export type ResultProps<T> = | {success : true, data : T} | {success : false, error : string}