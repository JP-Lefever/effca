"use client"
import styles from "./formModifyTeam.module.css";
import dataCategory from "@/assets/data/category/category.json";
import dataError from "@/assets/data/errors/errors.json";
import {useForm} from "react-hook-form";
import {CategoryProps} from "@/features/team/types";
import Image from "next/image";
import {toast} from "react-toastify";
import {editCategory} from "@/features/team/action";

export default function FormModifyTeam({team} : {team : CategoryProps}){

    const {label, training1, training2, training3, photo, id} = team;

    const {register, handleSubmit, formState: {errors}} = useForm<CategoryProps>({defaultValues : {

        label: label,
        training1 : training1,
        training2 : training2,
        training3 : training3,
        photo : photo

        }});

    const onModifySubmit = async (data : CategoryProps)=> {

        const validData = (data : string |null | undefined)=>{
            return data === "" || data === undefined ? null : data
        }

        const formatedData = {
            label : data.label,
            training1 : data.training1,
            training2 : validData(data.training2),
            training3 : validData(data.training3)
        }
        const {photo} = data;
        let photoUrl = photo as string;

        if(photo && photo.length>0 && typeof photo !== "string"){
            const formData = new FormData();
            formData.append("photo", photo[0])
            formData.append("folder", "Catégories")

            const responseUpload = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            })

            const response = await responseUpload.json()

            if(!response.success){
                toast.error("Erreur lors de l'upload de l'image")
            }
            photoUrl = response.url;
        }

        const response = await editCategory(formatedData, photoUrl, id)

        if(response.success){
            toast.success(`La catégorie ${response.data.label} a bien été modifiée`)

        } else {
            toast.error(response.error)
        }
    }

    return (
        <>


            <section className={styles.section} >
                <form onSubmit={handleSubmit(onModifySubmit)} >
                    <fieldset>
                        <legend>{label}</legend>
                        <figure className={styles.figure}>
                            <Image className={styles.image} src={photo as string} alt={label} fill={true}/>
                        </figure>
                        <div role="group">
                            <label htmlFor={"photo"}>{dataCategory.modifyPhoto}</label>
                            <input type={"file"}  {...register("photo")} />
                        </div>
                        <div role={"group"}>
                            <label htmlFor={"label"}>{dataCategory.modifyCat}</label>
                            <input type={"text"} placeholder={dataCategory.example.join(', ')} {...register("label", { required: dataError.require, pattern:{
                                    value : /^[\p{L}0-9_\-\s]+$/u,
                                    message: dataError.pattern
                                } })} />
                            {errors.label && (<p>{errors.label.message as string}</p>)}
                        </div>
                        <div role="group">
                            <label htmlFor={"training1"}>{dataCategory.modifyTraining}</label>
                            <input type={"text"}  {...register("training1", { required: dataError.require, pattern:{
                                    value : /^[\p{L}0-9_:\-\s]+$/u,
                                    message: dataError.pattern
                                } })} />
                            {errors.training1 && (<p>{errors.training1.message as string}</p>)}
                        </div>
                        <div role="group">
                            <label htmlFor={"training2"}>{dataCategory.modifyTraining2}</label>
                            <input type={"text"}  {...register("training2", {  pattern:{
                                    value : /^[\p{L}0-9_:\-\s]+$/u,
                                    message: dataError.pattern
                                } })} />
                            {errors.training2 && (<p>{errors.training2.message as string}</p>)}
                        </div>
                        <div role="group">
                            <label htmlFor={"training3"}>{dataCategory.modifyTraining3}</label>
                            <input type={"text"} {...register("training3", {  pattern:{
                                    value : /^[\p{L}0-9_:\-\s]+$/u,
                                    message: dataError.pattern
                                } })} />
                            {errors.training3 && (<p>{errors.training3.message as string}</p>)}
                        </div>

                        <button className={styles.button} type={"submit"}>{dataCategory.modifyButton}</button>
                        <button className={styles.button} type={"submit"}>{dataCategory.deleteButton}</button>
                    </fieldset>
                </form>
                <p>{dataCategory.option}</p>
            </section>
        </>
    )
}