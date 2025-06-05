"use client"
import dataMember from "@/assets/data/member/member.json"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import {CategoryProps} from "@/features/category/types";
import {PlayerPositionProps} from "@/features/position/type";
import {MemberProps} from "@/features/members/type";
import {addNewMember} from "@/features/members/action";
import {toast} from "react-toastify";


export default function AddMemberForm({categories, playerPosition} : {categories: CategoryProps[], playerPosition: PlayerPositionProps[]}) {

    const {register, handleSubmit, formState:{errors}} = useForm<MemberProps>()

    const onSubmit = async (data : MemberProps) => {

        const { photo, ...rest } = data

        const formData = new FormData()
        if (photo) {
        formData.append("photo", photo[0])
        }

        const responseUpload = await fetch("/api/upload",{
            method: "POST",
            body: formData,
        })
        const resultUpload = await responseUpload.json()
        console.log(resultUpload)

        const responseAddMember = await addNewMember( rest, resultUpload.url)

        if (responseAddMember.success) {
            toast.success(`${responseAddMember.data.firstname} a bien été ajouté`)
        }

    }

    return (<>

    <section>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    <label htmlFor={"positionId"}>{dataMember.position}</label>
                    <select {...register('positionId')}>{dataMember.position}
                        <option value="">{dataMember.optionPosition}</option>
                        {playerPosition.map((position)=>(
                            <option key={position.id} value={position.id}>{position.label}</option>
                        ))}
                    </select>
                    </div>

                    <div role="group">
                    <label htmlFor={"categoryId"}>{dataMember.category}</label>
                    <select {...register('categoryId' , {required: dataError.require})}>
                        <option value="">{dataMember.optionCategory}</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.label}</option>
                        ))}
                    </select>
                        {errors.categoryId && (<p>{errors.categoryId.message as string}</p>)}
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