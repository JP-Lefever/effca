"use client"
import {useForm} from "react-hook-form";

import {toast} from "react-toastify";
import styles from "./addRole.module.css"
import dataRole from "@/assets/data/associationRole/role.json";
import dataError from "@/assets/data/errors/errors.json";
import {RoleProps} from "@/features/associationRole/type";
import {addNewRole} from "@/features/associationRole/action";

export default function AddRole(){


    const {register, handleSubmit, formState: {errors}, reset } = useForm<RoleProps>()

    const onSubmit = async (data : RoleProps) =>{

        const response = await addNewRole(data)

        if(response.success){
            toast.success(`Le role ${response.data.label} a bien été ajoutée`)
            reset()
        }else{toast.error("Erreur lors de l'ajout du membre")}
    }

    return (
        <section className={styles.section} >
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <fieldset>
                    <legend>{dataRole.legend}</legend>
                    <label htmlFor={"label"}>{dataRole.category}</label>
                    <input type={"text"} placeholder={dataRole.example.join(', ')} {...register("label", { required: dataError.require, pattern:{
                            value : /^[\p{L}0-9_-]+$/u,
                            message: dataError.pattern
                        } })} />
                    <button className={styles.button} type={"submit"}>{dataRole.button}</button>
                    {errors.label && (<p>{errors.label.message as string}</p>)}
                </fieldset>
            </form>
        </section>
)}