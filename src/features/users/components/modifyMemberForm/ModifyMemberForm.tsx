"use client"
import styles from "./modifyMemberForm.module.css"
import dataMember from "@/assets/data/member/member.json"
import {MemberProps} from "@/features/users/type";
import {useForm} from "react-hook-form";
import Image from "next/image";
import {RoleProps} from "@/features/associationRole/type";
import {PlayerPositionProps} from "@/features/position/type";
import {CategoryProps} from "@/features/team/types";
import {useState} from "react";
import { FilePenLine, CircleCheckBig, Trash2 } from 'lucide-react';
import {editMember} from "@/features/users/action";
import {toast} from "react-toastify";
import {createPortal} from "react-dom";
import DeleteMemberModal from "@/features/users/components/deleteMemberModal/DeleteMemberModal";




export default function ModifyMemberForm({member, memberFunction, positions, categories}: {member: MemberProps, memberFunction: RoleProps[], positions : PlayerPositionProps[], categories : CategoryProps[]}) {




    const {id, firstname, lastname, categoryId, memberFunctionId, positionId , tel, mail, photo} = member;

    const {register, handleSubmit } = useForm<MemberProps>({defaultValues:{
            firstname: firstname,
            lastname : lastname,
            categoryId: categoryId,
            tel : tel,
            mail : mail,
            memberFunctionId : memberFunctionId,
            positionId : positionId,
            photo : photo
        }})

    const [modify, setModify] = useState(true)

    const handleModify = () => {
        setModify(!modify)
    }

    const onSubmitModify = async (data : MemberProps) => {

        const validData = (data : string |null)=>{
            return data === "" ? null : data
        }

        const {photo} = data
        const rest = {
            firstname: data.firstname,
            lastname: data.lastname,
            tel: validData(data.tel),
            mail: validData(data.mail),
            categoryId: validData(data.categoryId),
            positionId: validData(data.positionId),
            memberFunctionId: validData(data.memberFunctionId),
        }

        let photoUrl : string  = photo as string

        if (photo && typeof photo !== "string" && photo.length > 0) {
            const formData = new FormData();
            formData.append("photo", photo[0])
            formData.append("folder", "member")

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
            location.reload()
        }
    }

        const [openModal, setOpenModal] = useState(false);

        const handleOpenModal = () => {
            setOpenModal(!openModal);
        }




    return (<>


            <form onSubmit={handleSubmit(onSubmitModify)} className={styles.form}>
                {photo && typeof photo === "string" &&
                    <figure className={styles.imageWrapper}>
                        <Image className={styles.image} src={photo} alt={""} fill={true}/>
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
                <input placeholder={"tel"} className={modify ? styles.readOnly : styles.input} readOnly={modify} disabled={modify} type={"text"} {...register("tel")}/>
                <input placeholder={"Email"} className={modify ? styles.readOnly : styles.input} readOnly={modify} disabled={modify} type={"email"} {...register("mail")}/>
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
                    <button onClick={handleOpenModal} className={styles.button} type={"button"}><Trash2 color={"red"}/></button>

                        {openModal && (
                            createPortal(<DeleteMemberModal id = {id} closeModalAction = {handleOpenModal}/>, document.body)
                        )}
                    </div>
                </fieldset>
            </form>


    </>)
}