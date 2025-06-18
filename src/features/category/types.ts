export type CategoryProps = {
    id: string;
    label: string;
    training1 : string;
    training2 : string |null;
    training3 : string |null;
}

export type ResultProps<T> =
    | {success : true, data: T}
| {success : false, error: string}
