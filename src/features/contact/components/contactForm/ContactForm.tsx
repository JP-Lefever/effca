"use client"
import styles from "./contactForm.module.css"
import {useForm} from "react-hook-form";
import dataError from "@/assets/data/errors/errors.json"

export default function ContactForm() {

    const {register, handleSubmit, formState : {errors}} = useForm()

    return (
        <>
            <section className={styles.section} >
                <form className={styles.form}>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>{"N'hésitez pas à nous écrire"}</legend>
                        <div className={styles.div} role="group">
                            <label htmlFor={"firstname"}>Prénom</label>
                            <input type={"text"} {...register("firstname", {required: dataError.require,
                            pattern :{
                                value : /^[\p{L}_\-\s]+$/u,
                                message : dataError.pattern,
                            }
                            })} />
                            {errors.firstname && (<p>{errors.firstname.message as string}</p>)}
                        </div>
                        <div className={styles.div} role="group">
                            <label htmlFor={"lastname"}>Nom</label>
                            <input type={"text"} {...register("lastname", {required: dataError.require,
                            pattern : {
                            value : /^[\p{L}_\-\s]+$/u,
                            message : dataError.pattern,
                            }
                            })}/>
                            {errors.lastname && (<p>{errors.lastname.message as string}</p>)}
                        </div>
                        <div className={styles.div} role="group">
                            <label htmlFor={"email"}>E-mail</label>
                            <input type={"email"} {...register("email", {required: dataError.require,
                            pattern : {
                                value : /^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message : dataError.pattern,
                            },

                            })}/>
                            {errors.email && (<p>{errors.email.message as string}</p>)}
                        </div>
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <div className={styles.div} role="group">
                            <label htmlFor={"message"}>Message</label>
                            <textarea {...register("message", {required: dataError.require,
                            pattern : {
                                value : /^[\p{L}0-9 _\-.,!?@()%$]+$/u,
                                message : dataError.pattern,
                            }
                            })}/>
                            {errors.message && (<p>{errors.message.message as string}</p>)}
                        </div>
                    </fieldset>
                    <button type={"submit"}>Envoyer</button>
                </form>
            </section>
        </>
    )
}