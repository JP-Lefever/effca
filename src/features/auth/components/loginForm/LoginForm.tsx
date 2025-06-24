"use client"
import styles from "./loginForm.module.css"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import {LoginProps} from "@/features/auth/type";
import {getSession, signIn} from "next-auth/react";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";


export default function LoginForm() {

    const {register, handleSubmit, formState : {errors}} = useForm<LoginProps>();
    const router = useRouter();

    const onSubmit = async (data : LoginProps): Promise<void> => {

        const response = await signIn("credentials", {
            redirect : false,
            email: data.email,
            password: data.password
        }
        )
        console.log(response)
        if(response?.ok){
            toast.success("Bienvenue sur Admin EFFCA ")
            router.push("/admin")
        }

    }

    return (
        <section className={styles.section}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
                            value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
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