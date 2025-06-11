"use client"
import styles from "./formModify.module.css"
import dataForm from "@/assets/data/actuality/actuality.json";
import dataError from "@/assets/data/errors/errors.json";
import {useForm} from "react-hook-form";
import {ActualityProps} from "@/features/actuality/type";
import Image from "next/image";
import {toast} from "react-toastify";
import {editActuality} from "@/features/actuality/action";
import {redirect} from "next/navigation";

export default function FormModify({actuality}: {actuality: ActualityProps}) {

    const {title, description, date, contact, mail, phone, photo, id} = actuality;



    const newDate = new Date(date).toISOString().split("T")[0];


const {register, handleSubmit, formState : {errors}} = useForm<ActualityProps>({defaultValues : {
        title: title,
        description : description,
        contact : contact,
        mail: mail,
        phone : phone,
        photo : photo
    }});

const onSubmit = async (data : ActualityProps) => {

    const rest = {
        title : data.title,
        description : data.description,
        date : data.date,
        contact : data.contact === "" || data.contact === undefined ? null : data.contact,
        mail : data.mail === "" || data.contact === undefined ? null : data.mail,
        phone : data.phone === "" || data.contact === undefined ? null : data.phone,

    }

    const {photo} = data
    let photoUrl: string = photo as string;

    if(photo && typeof photo !== "string" && photo.length >0){

        const formData = new FormData();
        formData.append("photo" , photo[0])

        const responseUpload = await fetch("/api/upload", {
            method: "POST",
            body: formData
        })

        const result = await responseUpload.json();

        if(!result.success){
            return toast.error("Erreur lors de l'upload de l'image")
        }

        photoUrl = result.url
    }

        const responseUpdate = await editActuality(rest, photoUrl, id)

            if (responseUpdate.success){
                toast.success(`L'évènement ${responseUpdate.data.title} a bien été modifié`)
                redirect("/admin/modifyActuality")
            } else {
                toast.error("Une erreur est survenue")
            }

}

    return <>
        <section className={styles.section}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    {photo && typeof photo === "string"  ?
                    <Image src={photo} alt={title} width={180} height={180}/>
                    : <p>Aucune photo ajoutée</p> }
                    <div role="group">
                        <label htmlFor={"photo"}>{dataForm.modifyPhoto}</label>
                        <input type={"file"} {...register("photo")}/>
                    </div>
                    <legend>{dataForm.legend}</legend>
                    <div role="group">
                        <label htmlFor={"title"}>{dataForm.title}</label>
                        <input type="text" {...register("title", {required: dataError.require,
                            pattern : {
                                value : /^[^<>]*$/,
                                message: dataError.pattern
                            }
                        } )}/>
                        {errors.title && (<p>{errors.title.message as string}</p>)}
                    </div>
                    <div role="group">
                        <label htmlFor={"description"}>{dataForm.description}</label>
                        <textarea {...register("description", {required: dataError.require,
                            pattern : {
                                value : /^[^<>]*$/,
                                message: dataError.pattern
                            }
                        })}/>
                        {errors.description && (<p>{errors.description.message as string}</p>)}
                    </div>
                    <div role="group">
                        <label htmlFor={"date"}>{dataForm.date}</label>
                        <input type={"date"} defaultValue={newDate} {...register("date", {required: dataError.require,})}/>
                        {errors.date && (<p>{errors.date.message as string}</p>)}
                    </div>
                    <div role="group">
                        <label htmlFor={"contact"}>{dataForm.contact}</label>
                        <input type={"text"} {...register("contact", {
                            pattern : {
                                value : /^[^<>]*$/,
                                message: dataError.pattern
                            }
                        })}/>
                        {errors.contact && (<p>{errors.contact.message as string}</p>)}
                    </div>
                    <div role="group">
                        <label htmlFor={"mail"}>{dataForm.mail}</label>
                        <input type={"email"} {...register("mail", {
                            pattern : {
                                value : /^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: dataError.mail
                            }
                        })}/>
                        {errors.mail && (<p>{errors.mail.message as string}</p>)}
                    </div>
                    <div role="group">
                        <label htmlFor={"phone"}>{dataForm.phone}</label>
                        <input type={"text"} {...register("phone", {pattern : {
                                value : /^0[0-9]([-. ]?[0-9]{2,}){4,}$/,
                                message : dataError.phone
                            },
                        })}/>
                        {errors.phone && (<p>{errors.phone.message as string}</p>)}
                    </div>

                    <button type={"submit"}>{dataForm.modifyButton}</button>
                </fieldset>
                <p>{dataForm.options}</p>
            </form>
        </section>
    </>
}