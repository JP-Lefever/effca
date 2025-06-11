"use client"
import styles from "./addActuality.module.css"
import dataForm from "@/assets/data/actuality/actuality.json"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";

export default function AddActuality() {

    const {register, formState : {errors}} = useForm()

    return(<>

        <section className={styles.section}>
            <form>
                <fieldset>
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
                            <input type={"date"} {...register("date", {required: dataError.require,})}/>
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
                        <div role="group">
                            <label htmlFor={"photo"}>{dataForm.photo}</label>
                            <input type={"file"} {...register("photo")}/>
                        </div>
                        <button type={"submit"}>{dataForm.button}</button>
                </fieldset>
                <p>{dataForm.options}</p>
            </form>
        </section>

    </>)
}