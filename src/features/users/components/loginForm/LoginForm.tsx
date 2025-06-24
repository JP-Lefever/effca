"use client"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";


export default function LoginForm() {

    const {register, handleSubmit, formState : {errors}} = useForm();

    return (
        <>
            <form>
                <legend>Connexion</legend>
                <fieldset>
                    <div role="group">
                        <label htmlFor={"email"}>Email</label>
                        <input type="email"  {...register("email", {required : dataError.require,
                            pattern : {
                                value : /^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: dataError.mail
                            }
                        })} />
                    </div>
                    <div role="group">
                        <label htmlFor={"password"}>Mot de passe</label>
                        <input type="password"  {...register("password", {required : dataError.require,
                        pattern : {
                            value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W_).{8,}$/,
                            message : dataError.password
                        }
                        })}/>
                    </div>
                </fieldset>

            </form>

        </>
    )
}