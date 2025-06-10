"use client"
import styles from "./PartnerForm.module.css"
import {useForm} from "react-hook-form";
import {formProps} from "@/features/partner/type";


export default function PartnerForm({legendName,inputRegisterName,labelPartner,selectName,selectRegister,fileRegisterName,labelFile, buttonAdd} : formProps) {

    const {register } = useForm()


    return (<>

    <section className={styles.section}>
        <form>
            <fieldset >
                <legend>{legendName}</legend>
                    <div role={"group"}>
                        <label htmlFor={fileRegisterName}>{labelFile}</label>
                        <input type="file" {...register(fileRegisterName)} />
                    </div>
                    <div role={"group"}>
                        <label htmlFor={inputRegisterName}>{labelPartner}</label>
                        <input type="text" {...register(inputRegisterName)} />
                    </div>
                    <div role={"group"}>
                        <label htmlFor={selectRegister}>{selectName}</label>
                        <select {...register(selectRegister)}>
                            <option value="">---</option>
                            <option value={0}>Non</option>
                            <option value={1}>Oui</option>
                        </select>
                    </div>
                <button type="submit">{buttonAdd}</button>
            </fieldset>
        </form>
    </section>
    </>)
}