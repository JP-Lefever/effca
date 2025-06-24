"use client"
import styles from "./loginForm.module.css"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";


export default function LoginForm() {

    const {register, handleSubmit, formState : {errors}} = useForm();

    return (
        <section className={styles.section}>
            <form className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Connexion</legend>
                    <div className={styles.div} role="group">
                        <label htmlFor={"email"}>Email</label>
                        <input type="email"  {...register("email", {required : dataError.require,
                            pattern : {
                                value : /^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: dataError.mail
                            }
                        })} />
                        {errors.email && (<p>{errors.email.message as string}</p>)}
                    </div>
                    <div className={styles.div} role="group">
                        <label htmlFor={"password"}>Mot de passe</label>
                        <input type="password"  {...register("password", {required : dataError.require,
                        pattern : {
                            value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W_).{8,}$/,
                            message : dataError.password
                        }
                        })}/>
                        {errors.password && (<p>{errors.password.message as string}</p>)}
                    </div>
                    <button className={styles.button} type="submit">Se connecter</button>
                </fieldset>

            </form>

        </section>
    )
}