"use client"
import styles from "./modifyMemberForm.module.css"
import dataMember from "@/assets/data/member/member.json"
import {MemberProps} from "@/features/members/type";
import {useForm} from "react-hook-form";
import Image from "next/image";
import {RoleProps} from "@/features/associationRole/type";
import {PlayerPositionProps} from "@/features/position/type";
import {CategoryProps} from "@/features/category/types";
import {useState} from "react";
import { FilePenLine, CircleCheckBig, Trash2 } from 'lucide-react';
import {editMember} from "@/features/members/action";
import {toast} from "react-toastify";



export default function ModifyMemberForm({member, memberFunction, positions, categories}: {member: MemberProps, memberFunction: RoleProps[], positions : PlayerPositionProps[], categories : CategoryProps[]}) {


    const {id, firstname, lastname, categoryId, memberFunctionId, positionId, photo} = member;

    const {register, handleSubmit } = useForm<MemberProps>({defaultValues:{
            firstname: firstname,
            lastname : lastname,
            categoryId: categoryId,
            memberFunctionId : memberFunctionId,
            positionId : positionId,
            photo : photo
        }})

    const [modify, setModify] = useState(true)

    const handleModify = () => {
        setModify(!modify)
    }

    const onSubmitModify = async (data : MemberProps) => {

        const {photo, ...rest} = data

        let photoUrl : string  = photo as string
        if (photo && typeof photo !== "string" && photo.length > 0) {
            const formData = new FormData();
            formData.append("photo", photo[0])

            const responseUpload = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            })

            if(!responseUpload.status){
                return toast.error("Erreur lors du chargement de la photo")
            }

            const result = await responseUpload.json()

            photoUrl = result.url
        }

        const responseModifyMember = await editMember(rest, photoUrl, id)

        if(responseModifyMember.success) {
            toast.success(`${responseModifyMember.data.firstname} a bien été modifié`)
            setModify(!modify)
        }
    }

    return (<>


            <form onSubmit={handleSubmit(onSubmitModify)} className={styles.form}>
                {photo && typeof photo === "string" &&
                    <figure className={styles.imageWrapper}>
                        <Image src={photo} alt={""} fill={true}/>
                    </figure>
                }
                <fieldset>
                {!modify &&
                    <>
                    <label className={styles.labelFile} htmlFor="photo">Modifier la photo</label>
                    <input id={"photo"} style={{display: "none"}} type={"file"} {...register("photo")}/>
                    </>
                }
                <input className={modify ? styles.readOnly : styles.input} readOnly={modify} disabled={modify} type={"text"} {...register("firstname")}/>
                <input className={modify ? styles.readOnly : styles.input} readOnly={modify} disabled={modify} type={"text"} {...register("lastname")}/>
                <select className={modify ? styles.readOnly : styles.input} disabled={modify} {...register("categoryId")}>
                    <option value={""}>{dataMember.optionCategory}</option>
                    {categories.map((category) =>(
                        <option key={category.id} value={category.id}>{category.label}</option>
                    ))}
                </select>
                <select className={modify ? styles.readOnly : styles.input} disabled={modify} {...register("positionId")}>
                    <option value={""}>{dataMember.optionPosition}</option>
                    {positions.map((position) =>(
                        <option key={position.id} value={position.id}>{position.label}</option>
                    ))}
                </select>
                <select className={modify ? styles.readOnly : styles.input} disabled={modify} {...register("memberFunctionId")}>
                    <option value={""}>{dataMember.optionFunction}</option>
                    {memberFunction.map((role) =>(
                        <option key={role.id} value={role.id}>{role.label}</option>
                    ))}
                </select>
                    <div role={"group"}>
                {modify &&
            <button className={styles.button} type={"button"} onClick={handleModify}><FilePenLine color={"blue"}/></button>
                }
                {!modify &&
                    <button className={styles.button} type={"submit"}><CircleCheckBig color={"green"}/></button>
                }
                    <button className={styles.button} type={"button"}><Trash2 color={"red"}/></button>
                    </div>
                </fieldset>
            </form>


    </>)
}