"use client"
import styles from "./addHistoryForm.module.css"
import data from "@/assets/data/club/club.json"
import error from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import {HistoryProps} from "@/features/club/type";
import {createHistoryClub} from "@/features/club/action";
import {toast} from "react-toastify";

export default function AddHistoryForm() {

    const {register, handleSubmit, formState : {errors},reset} = useForm<HistoryProps>()
    
    const onSubmit = async (data : HistoryProps) => {
        
        const response = await createHistoryClub(data)

        if(response.success){
            toast.success("L'histoire du club a bien été ajoutée")
            reset()
        } else {toast.error("Une erreur est survenue")}
    }

    return (<>

    <section className={styles.section}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>

            <legend>{data.legend}</legend>
            <label htmlFor="history">{data.history}</label>
            <textarea rows={10} {...register("history", {required : error.require , pattern : {
                value : /^[^<>]*$/,
                message : error.pattern
                }})}/>
            <button type="submit">{data.button}</button>
            {errors.history && (<p>{errors.history.message as string}</p>)}
            </fieldset>
        </form>
    </section>
    </>)
}