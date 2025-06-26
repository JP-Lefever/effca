"use client"
import styles from "./membersList.module.css"
import ModifyMemberForm from "@/features/users/components/modifyMemberForm/ModifyMemberForm";
import {MemberProps} from "@/features/users/type";

import FilterMember from "@/components/ui/filter/FilterMember";
import {CategoryProps} from "@/features/team/types";
import {RoleProps} from "@/features/associationRole/type";
import {PlayerPositionProps} from "@/features/position/type";
import {useState} from "react";

export default function MembersList({members, categories, memberFunction, positions}: {members: MemberProps[], categories : CategoryProps[], memberFunction : RoleProps[], positions : PlayerPositionProps[]}) {


    const [filter, setFilter] = useState<string>("");


    const filteredMembers = members.filter((member)=> member.categoryId?.includes(filter))

    return (<>
            <FilterMember categoryList={categories} setFilterAction={setFilter} />
        <section className={styles.sectionCard}>
        {filteredMembers.map((member) => (
           <article key={member.id} >
            <ModifyMemberForm member ={member} categories = {categories} memberFunction={memberFunction} positions = {positions} />
           </article>

        ))}
        </section>
        </>)
}