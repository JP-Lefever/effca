"use client"
import dataMember from "@/assets/data/member/member.json"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import {CategoryProps} from "@/features/category/types";
import {PlayerPositionProps} from "@/features/position/type";

export default function AddMemberForm({categories, playerPosition} : {categories: CategoryProps[], playerPosition: PlayerPositionProps[]}) {

    const {register, formState:{errors}} = useForm()

    return (<>

    <section>
        <form>
            <fieldset>
                <legend>{dataMember.legend}</legend>

                    <div role="group">
                    <label htmlFor={"firstname"}>{dataMember.firstname}</label>
                    <input type="text" {...register('firstname', {required : dataError.require,
                    pattern : {
                        value : /^[\p{L}0-9_-]+$/u,
                        message : dataError.pattern
                    }})} />
                        {errors.firstname && (<p>{errors.firstname.message as string}</p>)}
                    </div>

                    <div role="group">
                    <label htmlFor={'lastname'}>{dataMember.lastname}</label>
                    <input type="text" {...register('lastname', {required : dataError.require,
                        pattern : {
                        value : /^[\p{L}0-9_-]+$/u,
                        message : dataError.pattern
                    }})} />
                        {errors.lastname && (<p>{errors.lastname.message as string}</p>)}
                    </div>

                    <div role="group">
                    <label htmlFor={"position"}>{dataMember.position}</label>
                    <select {...register('position')}>{dataMember.position}
                        <option value="">{dataMember.optionPosition}</option>
                        {playerPosition.map((position)=>(
                            <option key={position.id} value={position.id}>{position.label}</option>
                        ))}
                    </select>
                    </div>

                    <div role="group">
                    <label htmlFor={"category"}>{dataMember.category}</label>
                    <select {...register('category' , {required: dataError.require})}>
                        <option value="">{dataMember.optionCategory}</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.label}</option>
                        ))}
                    </select>
                        {errors.category && (<p>{errors.category.message as string}</p>)}
                    </div>

                    <div role="group">
                    <label htmlFor={'photo'}>{dataMember.photo}</label>
                    <input type={"file"} {...register('photo')} />
                    </div>

                <button type="submit">{dataMember.button}</button>
            </fieldset>
        </form>
    </section>
    </>)
}