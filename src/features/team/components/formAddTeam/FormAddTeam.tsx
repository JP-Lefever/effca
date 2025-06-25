"use client"
import styles from "./formAddTeam.module.css"
import dataCategory from "@/assets/data/category/category.json"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import {CategoryProps} from "@/features/team/types";
import {addCategory} from "@/features/team/action";
import {toast} from "react-toastify";


export default function FormAddTeam() {

    const {register, handleSubmit, formState: {errors}, reset } = useForm<CategoryProps>()

    const onSubmit = async (data : CategoryProps) =>{

        const validData = (data : string |null | undefined)=>{
            return data === "" || data === undefined ? null : data
        }

        const formatedData = {
            label : data.label,
            training1 : data.training1,
            training2 : validData(data.training2),
            training3 : validData(data.training3)
        }

        const {photo} = data
        let photoUrl : string | null = null

        if(photo && photo.length>0){

            const formData = new FormData()
            formData.append("photo" , photo[0])
            formData.append("folder", "Catégories")

            const responseUpload = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            })

            const result = await responseUpload.json()
                if(!result.success){
                    return toast.error("Une erreur est survenue lors de l'upload de l'image")
                }

            photoUrl = result.url

        }

        const response = await addCategory(formatedData, photoUrl)

        if(response.success){
            toast.success(`La catégorie ${response.data.label} a bien été ajoutée`)
            reset()
        }else{toast.error("Erreur lors de l'ajout de la categorie")}
    }

    return (<>

    <section className={styles.section} >
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
            <legend>{dataCategory.legend}</legend>
                <div role={"group"}>
                    <label htmlFor={"label"}>{dataCategory.category}</label>
                    <input type={"text"} placeholder={dataCategory.example.join(', ')} {...register("label", { required: dataError.require, pattern:{
                        value : /^[\p{L}0-9_\-\s]+$/u,
                        message: dataError.pattern
                        } })} />
                    {errors.label && (<p>{errors.label.message as string}</p>)}
                </div>
                <div role="group">
                    <label htmlFor={"training1"}>{dataCategory.training1}</label>
                    <input type={"text"} placeholder={dataCategory.trainingEx} {...register("training1", { required: dataError.require, pattern:{
                            value : /^[\p{L}0-9_:\-\s]+$/u,
                            message: dataError.pattern
                        } })} />
                    {errors.training1 && (<p>{errors.training1.message as string}</p>)}
                </div>
                <div role="group">
                    <label htmlFor={"training2"}>{dataCategory.training2}</label>
                    <input type={"text"} placeholder={dataCategory.trainingEx} {...register("training2", {  pattern:{
                            value : /^[\p{L}0-9_:\-\s]+$/u,
                            message: dataError.pattern
                        } })} />
                    {errors.training2 && (<p>{errors.training2.message as string}</p>)}
                </div>
                <div role="group">
                    <label htmlFor={"training3"}>{dataCategory.training3}</label>
                    <input type={"text"} placeholder={dataCategory.trainingEx} {...register("training3", {  pattern:{
                            value : /^[\p{L}0-9_:\-\s]+$/u,
                            message: dataError.pattern
                        } })} />
                    {errors.training3 && (<p>{errors.training3.message as string}</p>)}
                </div>
                <div role="group">
                    <label htmlFor={"photo"}>{dataCategory.photo}</label>
                    <input type={"file"}  {...register("photo")} />
                </div>
            <button className={styles.button} type={"submit"}>{dataCategory.button}</button>
            </fieldset>
        </form>
       <p>{dataCategory.option}</p>
    </section>
    </>)
}