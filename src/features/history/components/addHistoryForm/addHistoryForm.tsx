"use client"
import styles from "./addHistoryForm.module.css"
import data from "@/assets/data/club/club.json"
import error from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";

export default function AddHistoryForm() {

    const {register, formState : {errors}} = useForm()

    return (<>

    <section className={styles.section}>
        <form>
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