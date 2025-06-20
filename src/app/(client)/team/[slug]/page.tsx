import Team from "@/features/category/components/team/Team";
import {readCategoryById} from "@/features/category/action";

export default async function  TeamDetailPage(props : {params : Promise<{slug : string}>}) {

    const params = await props.params
    const slug = params.slug
    console.log(slug)

    const category = await readCategoryById(slug)

    if (!category.success) {
        return (
            <p>Auncune equipe trouvée</p>
        )
    }

    return(
        <>

            <Team category={category.data}  />
        </>
    )
}