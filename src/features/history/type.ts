export type HistoryProps  = {
    id : string;
    history : string;
}

export type ResultProps<T> = | {success : true, data : T} | {success : false, error : string};