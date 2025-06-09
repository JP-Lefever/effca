"use client"
import styles from "./modifyHistoryForm.module.css"
import data from "@/assets/data/club/club.json"
import error from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import {HistoryProps} from "@/features/history/type";


export default function ModifyHistoryForm({history}: {history: HistoryProps}) {

    const {register, handleSubmit, formState : {errors},reset} = useForm<HistoryProps>({defaultValues : {
        history : history.history
        }})



    // const onSubmit = async (data : HistoryProps) => {
    //
    //     const response = await createHistoryClub(data)
    //
    //     if(response.success){
    //         toast.success("L'histoire du club a bien été ajoutée")
    //         reset()
    //     } else {toast.error("Une erreur est survenue")}
    // }

    return (<>

        <section className={styles.section}>
            <form>
                <fieldset>

                    <legend>{data.legend}</legend>
                    <label htmlFor="history">{data.modifyHistory}</label>
                    <textarea rows={10} {...register("history", {required : error.require , pattern : {
                            value : /^[^<>]*$/,
                            message : error.pattern
                        }})}/>
                    <button type="submit">{data.buttonModify}</button>
                    {errors.history && (<p>{errors.history.message as string}</p>)}
                </fieldset>
            </form>
        </section>
    </>)
}