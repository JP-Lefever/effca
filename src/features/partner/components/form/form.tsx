import {useForm} from "react-hook-form";

export default function Form({legendName,inputRegisterName,labelPartner,selectName,selectRegister,fileRegisterName,labelFile} :
 {legendName: string, inputRegisterName: string,labelPartner:string, selectName: string, selectRegister:string, fileRegisterName : string, labelFile: string}) {

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
                <select {...register(selectRegister)}>{selectName}
                    <option value="">---</option>
                    <option value={0}>Non</option>
                    <option value={1}>Oui</option>
                </select>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    </section>
    </>)
}