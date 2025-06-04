"use client"
import styles from "./addCategoryForm.module.css"
import dataCategory from "@/assets/data/category/category.json"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import {CategoryProps} from "@/features/category/types";
import {addCategory} from "@/features/category/action";


export default function AddCategoryForm() {

    const {register, formState: {errors} } = useForm()

    const onSubmit = async (data : CategoryProps) =>{

        const response = await addCategory(data)

        if(response.success){

        }
    }

    return (<>

    <section >
        <form className={styles.form}>
            <label htmlFor={"label"}>{dataCategory.category}</label>
            <input type={"text"} {...register("label", { required: dataError.require, pattern:{
                value : /[a-zA-Z0-9]/g,
                message: dataError.pattern
                } })} />
            <button type={"submit"}>{dataCategory.button}</button>
            {errors.label && (<p>{errors.label.message as string}</p>)}
        </form>
    </section>
    </>)
}