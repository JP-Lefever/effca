"use client"
import dataMember from "@/assets/data/member/member.json"
import dataError from "@/assets/data/errors/errors.json"
import {useForm} from "react-hook-form";
import {CategoryProps} from "@/features/team/types";
import {PlayerPositionProps} from "@/features/position/type";
import {MemberProps} from "@/features/members/type";
import {addNewMember} from "@/features/members/action";
import {toast} from "react-toastify";
import {RoleProps} from "@/features/associationRole/type";
import styles from "./addMemberForm.module.css"



export default function AddMemberForm({categories, playerPosition ,memberRole} : {categories: CategoryProps[], playerPosition: PlayerPositionProps[], memberRole : RoleProps[]}) {

    const {register, handleSubmit, formState:{errors}, reset} = useForm<MemberProps>()

    const onSubmit = async (data : MemberProps) => {
        const validData = (data : string |null)=>{
            return data === "" ? null : data
        }

        const rest = {
            firstname: data.firstname,
            lastname: data.lastname,
            tel: validData(data.tel),
            mail: validData(data.mail),
            categoryId: validData(data.categoryId),
            positionId: validData(data.positionId),
            memberFunctionId: validData(data.memberFunctionId),
        }

        const { photo } = data
        let photoUrl: string | null  = null

        if (photo && photo.length>0) {

        const formData = new FormData()
        formData.append("photo", photo[0])
        formData.append("folder", "member")

        const responseUpload = await fetch("/api/upload",{
            method: "POST",
            body: formData,
        })

        const resultUpload = await responseUpload.json()

            if(!resultUpload.success){
                 toast.error("Erreur lors du chargement de la photo");
               return;
            }
            photoUrl = resultUpload.url
        }


        const responseAddMember = await addNewMember( rest, photoUrl)

        if (responseAddMember.success) {
            toast.success(`${responseAddMember.data.firstname} a bien été ajouté`)
            reset()
        } else{toast.error("Erreur lors de l'ajout du membre")}

    }

    return (<>

    <section className={styles.section}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>{dataMember.legend}</legend>

                    <div role="group">
                    <label htmlFor={"firstname"}>{dataMember.firstname}</label>
                    <input type="text" {...register('firstname', {required : dataError.require,
                    pattern : {
                        value : /^[\p{L}0-9_\-\s]+$/u,
                        message : dataError.pattern
                    }})} />
                        {errors.firstname && (<p>{errors.firstname.message as string}</p>)}
                    </div>

                    <div role="group">
                    <label htmlFor={'lastname'}>{dataMember.lastname}</label>
                    <input type="text" {...register('lastname', {required : dataError.require,
                        pattern : {
                        value : /^[\p{L}0-9_\-\s]+$/u,
                        message : dataError.pattern
                    }})} />
                        {errors.lastname && (<p>{errors.lastname.message as string}</p>)}
                        </div>
                    <div role="group">
                        <label htmlFor={"tel"}>{dataMember.tel}</label>
                        <input type="text" {...register('tel', {pattern : {
                            value : /^0[0-9]([-. ]?[0-9]{2,}){4,}$/,
                            message : dataError.pattern
                        }})}/>
                        {errors.tel && (<p>{errors.tel.message as string}</p>)}
                    </div>
                <div role="group">
                    <label htmlFor={"mail"}>{dataMember.mail}</label>
                    <input type={"email"} {...register("mail", {
                        pattern : {
                            value : /^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: dataError.mail
                        }
                    })}/>
                    {errors.mail && (<p>{errors.mail.message as string}</p>)}
                </div>
                    <div role="group">
                    <label htmlFor={"positionId"}>{dataMember.position}</label>
                    <select {...register('positionId')}>
                        <option value="">{dataMember.optionPosition}</option>
                        {playerPosition.map((position)=>(
                            <option key={position.id} value={position.id}>{position.label}</option>
                        ))}
                    </select>
                    </div>

                    <div role="group">
                    <label htmlFor={"categoryId"}>{dataMember.category}</label>
                    <select {...register('categoryId')}>
                        <option value={""}>{dataMember.optionCategory}</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.label}</option>
                        ))}
                    </select>
                        {errors.categoryId && (<p>{errors.categoryId.message as string}</p>)}
                    </div>

                <div role="group">
                    <label htmlFor={"memberFunctionId"}>{dataMember.memberFunction}</label>
                    <select {...register('memberFunctionId')}>
                        <option value="">{dataMember.optionFunction}</option>
                        {memberRole.map((member)=>(
                            <option key={member.id} value={member.id}>{member.label}</option>
                        ))}

                    </select>
                    {errors.categoryId && (<p>{errors.categoryId.message as string}</p>)}
                </div>

                    <div role="group">
                    <label htmlFor={'photo'}>{dataMember.photo}</label>
                    <input type={"file"} {...register('photo')} />
                    </div>

                <button type="submit" className={styles.button}>{dataMember.button}</button>
            </fieldset>
            <p>{dataMember.optional}</p>
        </form>
    </section>
    </>)
}