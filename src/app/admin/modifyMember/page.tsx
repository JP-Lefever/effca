
import {readMembers} from "@/features/users/action";
import MembersList from "@/features/users/components/membersList/MembersList";
import {readCategories} from "@/features/team/repository";
import {readAllRole} from "@/features/associationRole/action";
import {readAllPosition} from "@/features/position/action";
import {notFound} from "next/navigation";

export default async function ModifyMemberPage() {

    const members = await readMembers();
    const categories = await readCategories()
    const memberFunction = await readAllRole()
    const positions = await readAllPosition()

    if(!categories.success || !memberFunction.success || !positions.success || !members.success) {
        return notFound()
    }



    return(<>

    <MembersList members={members.data} categories={categories.data} memberFunction={memberFunction.data} positions={positions.data} />
    </>)
}