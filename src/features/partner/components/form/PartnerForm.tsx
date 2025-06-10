"use client"
import styles from "./PartnerForm.module.css"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import { formProps, PartnerProps} from "@/features/partner/type";
import {addNewPartner} from "@/features/partner/action";
import {toast} from "react-toastify";


export default function PartnerForm({legendName,inputRegisterName,labelPartner,selectName,selectRegister,fileRegisterName,labelFile, buttonAdd} : formProps) {

    const {register , handleSubmit, formState: {errors}, reset} = useForm<PartnerProps>()

    const onSubmitNewPartner = async (data : PartnerProps) =>{

        const {photo, ...rest} = data
        let photoURL : string  = photo as string

        if (typeof photo !== "string" && photo.length >0 &&  photo  ){
            const formData = new FormData
            formData.append("photo", photo[0])

            const responseUpload = await fetch("/api/upload", {
                method : "POST",
                body : formData
            })

            if (!responseUpload.status){
                return toast.error("Une erreur est survenue lors de l'ajout de photo")
            }
            const result = await responseUpload.json()

            photoURL = result.url

        }

        const responseAddPartner = await addNewPartner(rest, photoURL)

        if(responseAddPartner.success){
            toast.success(`Le partenaire ${responseAddPartner.data.name} a bien été ajouté`)
            reset()
        }
    }


    return (<>

    <section className={styles.section}>
        <form onSubmit={handleSubmit(onSubmitNewPartner)}>
            <fieldset >
                <legend>{legendName}</legend>
                    <div role={"group"}>
                        <label htmlFor={fileRegisterName}>{labelFile}</label>
                        <input type="file" {...register(fileRegisterName, {required : dataError.require})} />
                        {errors[fileRegisterName] && (<p>{errors[fileRegisterName]?.message as string}</p>)}
                    </div>
                    <div role={"group"}>
                        <label htmlFor={inputRegisterName}>{labelPartner}</label>
                        <input type="text" {...register(inputRegisterName , {required:dataError.require ,
                        pattern: {
                            value : /^[^<>]*$/,
                            message : dataError.pattern
                        }})} />
                        {errors[inputRegisterName] && <p>{errors[inputRegisterName]?.message as string}</p>}
                    </div>
                    <div role={"group"}>
                        <label htmlFor={selectRegister}>{selectName}</label>
                        <select {...register(selectRegister, {required:dataError.require})}>
                            <option value="">---</option>
                            <option value={"false"}>Non</option>
                            <option value={"true"}>Oui</option>
                        </select>
                        {errors[selectRegister] && (<p>{errors[selectRegister]?.message as string}</p>)}
                    </div>
                <button type="submit">{buttonAdd}</button>
            </fieldset>
        </form>
    </section>
    </>)
}