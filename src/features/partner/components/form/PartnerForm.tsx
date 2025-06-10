"use client"
import {useForm} from "react-hook-form";
import {formProps} from "@/features/partner/type";


export default function PartnerForm({legendName,inputRegisterName,labelPartner,selectName,selectRegister,fileRegisterName,labelFile, buttonAdd} : formProps) {

    const {register } = useForm()


    return (<>

    <section>
        <form>
            <fieldset>
                <legend>{legendName}</legend>
                <label htmlFor={fileRegisterName}>{labelFile}</label>
                <input type="file" {...register(fileRegisterName)} />
                <label htmlFor={inputRegisterName}>{labelPartner}</label>
                <input type="text" {...register(inputRegisterName)} />
                <label htmlFor={selectRegister}>{selectName}</label>
                <select {...register(selectRegister)}>
                    <option value="">---</option>
                    <option value={0}>Non</option>
                    <option value={1}>Oui</option>
                </select>
                <button type="submit">{buttonAdd}</button>
            </fieldset>
        </form>
    </section>
    </>)
}