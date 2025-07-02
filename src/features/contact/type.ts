export type ContactProps = {
    firstname: string;
    lastname: string;
    email: string;
    message: string;
}

export type ResultProps<T> = | {success: true, data : T} | {success: false, error: string};