"use client"
import positionData from "@/assets/data/position/position.json"
import errorsData from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import styles from "./addPositionForm.module.css"
import {addPlayerPosition} from "@/features/position/action";
import {PlayerPositionProps} from "@/features/position/type";
import {toast} from "react-toastify";


export default function AddPositionForm() {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<PlayerPositionProps>()

    const onSubmit = async (data : PlayerPositionProps)=>{

        const response = await addPlayerPosition(data)

        if(response.success){
            toast.success(`Le poste ${response.data.label} a bien été ajouté`)
            reset()
        }else{toast.error("Erreur lors de l'ajout du membre")}
    }

    return (<>

    <section className={styles.section} >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} >
            <fieldset>
                <legend>{positionData.legend}</legend>
                <label htmlFor={"label"}>{positionData.position}</label>
                <input type="text" placeholder={positionData.example.join(', ')} {...register("label" ,
                    {required : errorsData.require ,
                    pattern:{
                    value : /^[\p{L}0-9_\-\s]+$/u,
                    message: errorsData.pattern
                    }})} />
                <button className={styles.button} type="submit">{positionData.button}</button>
                {errors.label && <p>{errors.label.message as string}</p>}
            </fieldset>
        </form>
    </section>
    </>)
}