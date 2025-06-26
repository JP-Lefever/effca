"use client"
import {ChangeEvent} from "react";
import {CategoryProps} from "@/features/team/types";


export default function FilterMember({categoryList, setFilterAction} : {categoryList : CategoryProps[], setFilterAction : (value : string)=> void } ) {



    const selectFilter = (e : ChangeEvent<HTMLSelectElement> )=>{
        setFilterAction(e.target.value);
    }



    return (
        <>
                <select onChange={selectFilter}>
                    <option value={""}>Voir tous les joueurs</option>
            {categoryList.map((c)=> (
                    <option  key={c.id as string} value={c.id as string}>{c.label}</option>
            ))}
                </select>

        </>
    )
}