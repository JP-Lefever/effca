"use client"
import styles from "./PartnerForm.module.css"
import Image from "next/image"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import { formProps, PartnerProps} from "@/features/partner/type";
import {addNewPartner, editPartner} from "@/features/partner/action";
import {toast} from "react-toastify";


export default function PartnerForm({dataForm, partners} : { dataForm : formProps, partners?: PartnerProps }) {


    const {legendName,name,labelPartner,selectName,is_main,photo,labelFile, buttonAdd, buttonModify} = dataForm

    const {register , handleSubmit, formState: {errors}, reset} = useForm<PartnerProps>({
        defaultValues : {
            name : partners?.name,
            is_main : partners?.is_main,
        }
        }
    )

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
        } else {
            toast.error("Une erreur est survenue lors de l'ajout du partenaire")
        }
    }

    const onSubmitEditPartner = async (data : PartnerProps) =>{

        const {photo, ...rest} = data

        let photoURL : string  = partners?.photo as string

        if (typeof photo !== "string" && photo.length >0 &&  photo  ){
            const formData = new FormData()
            formData.append("photo", photo[0])

            const responseUpload = await fetch("/api/upload", {
                method : "POST",
                body : formData
            })
            if (!responseUpload.status){
                toast.error("Erreur lors de l'envoi de photo")
            }

            const result = await responseUpload.json()

            photoURL = result.url
        }

        if (!partners){
            return {success:false , errors: "Aucun partenaire importé"}
        }
        const responseModifyPartner = await editPartner(rest, photoURL, partners.id)

        if(responseModifyPartner.success){
            toast.success(`Le partenaire ${responseModifyPartner.data.name} a bien été modifié`)
        } else{
            toast.error("Une erreur est survenue lors de l'ajout du partenaire")
        }
    }


    return (<>

    <section className={partners ? styles.sectionModify : styles.section}>
        <form onSubmit={handleSubmit(partners ? onSubmitEditPartner : onSubmitNewPartner)}>
            <fieldset >
                <legend>{legendName}</legend>
                {partners && typeof partners.photo === "string" && (
                    <Image className={styles.image} src = {partners.photo } alt={partners.name} width ={120} height ={120} />
                )}
                    <div role={"group"}>
                        <label htmlFor={photo}>{labelFile}</label>
                        <input type="file" {...register(photo, {required: partners ? false :  dataError.require} )} />
                        {errors[photo] && (<p>{errors[photo]?.message as string}</p>)}
                    </div>
                    <div role={"group"}>
                        <label htmlFor={name}>{labelPartner}</label>
                        <input type="text" {...register(name , {required: partners ? false :  dataError.require ,
                        pattern: {
                            value : /^[^<>]*$/,
                            message : dataError.pattern
                        }})} />
                        {errors[name] && <p>{errors[name]?.message as string}</p>}
                    </div>
                    <div role={"group"}>
                        <label htmlFor={is_main}>{selectName}</label>
                        <select {...register(is_main, {required: partners ? false :  dataError.require})}>
                            <option value="">---</option>
                            <option value={"false"}>Non</option>
                            <option value={"true"}>Oui</option>
                        </select>
                        {errors[is_main] && (<p>{errors[is_main]?.message as string}</p>)}
                    </div>
                <button type="submit">{partners ? buttonModify : buttonAdd}</button>
            </fieldset>
        </form>
    </section>
    </>)
}