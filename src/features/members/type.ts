

export type MemberProps = {
    id : string,
    firstname : string,
    is_admin : boolean,
    lastname : string,
    positionId: string | null,
    categoryId: string;
    photo: string | null
}

export type ResultProps<T> = | {success : true, data : T} | {success : false, error : string};