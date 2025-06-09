"use client"
import styles from "./modifyHistoryForm.module.css"
import dataForm from "@/assets/data/club/club.json"
import error from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import {HistoryProps} from "@/features/history/type";
import {editHistoryClub} from "@/features/history/action";
import {toast} from "react-toastify";


export default function ModifyHistoryForm({data}: {data: HistoryProps}) {

    const {history, id} = data

    const {register, handleSubmit, formState : {errors}} = useForm<HistoryProps>({defaultValues : {
        history : history
        }})



    const onSubmit = async (data : HistoryProps) => {

        const response = await editHistoryClub(data, id)

        if(response.success){
            toast.success("L'histoire du club a bien été modifiée")

        } else {toast.error("Une erreur est survenue")}
    }

    return (<>

        <section className={styles.section}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>

                    <legend>{dataForm.legend}</legend>
                    <label htmlFor="history">{dataForm.modifyHistory}</label>
                    <textarea rows={10} {...register("history", {required : error.require , pattern : {
                            value : /^[^<>]*$/,
                            message : error.pattern
                        }})}/>
                    <button type="submit">{dataForm.buttonModify}</button>
                    {errors.history && (<p>{errors.history.message as string}</p>)}
                </fieldset>
            </form>
        </section>
    </>)
}