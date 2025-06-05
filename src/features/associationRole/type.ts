export type RoleProps = {
    id: string;
    label: string;
}

export type ResultProps<T> = | {success : true, data : T} | {success : false, error : string};