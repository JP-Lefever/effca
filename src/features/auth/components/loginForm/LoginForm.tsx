"use client"
import styles from "./loginForm.module.css"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import {LoginProps} from "@/features/auth/type";
import {signIn} from "next-auth/react";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import { useState} from "react";
import { Eye, EyeOff  } from 'lucide-react';


export default function LoginForm() {

    const {register, handleSubmit, formState : {errors}} = useForm<LoginProps>();
    const router = useRouter();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const handleVisiblePass = ()=>{
        setIsVisible(!isVisible);
    }


    const onSubmit = async (data : LoginProps): Promise<void> => {

         await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect : true,
            callbackUrl : "/admin",
        }
        )


    }

    return (
        <section className={styles.section}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Connexion</legend>
                    <div className={styles.div} role="group">
                        <label htmlFor={"email"}>Email</label>
                        <input type="email" placeholder={"mail@mail.com"}  {...register("email", {
                            required: dataError.require,
                            pattern: {
                                value: /^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: dataError.mail
                            }

                        })}
                        />

                        {errors.email && (<p>{errors.email.message as string}</p>)}
                    </div>
                    <div className={styles.div} role="group">
                        <label htmlFor={"password"}>Mot de passe</label>
                        <div className={styles.divPass} role={"group"}>
                            <input className={styles.inputPass} placeholder={"••••••••••••"} type={!isVisible ? "password" : "text"} {...register("password", {required : dataError.require,
                            pattern : {
                                value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                                message : dataError.password
                            }
                            })}/>
                            <button className={styles.buttonSee} onClick={handleVisiblePass} type={"button"}>{!isVisible ? <Eye color={"white"}/> : <EyeOff color={"white"}/>}</button>
                        </div>
                        {errors.password && (<p>{errors.password.message as string}</p>)}
                    </div>
                    <button className={styles.button} type="submit">Se connecter</button>
                </fieldset>

            </form>

        </section>
    )
}