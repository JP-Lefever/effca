export default async function PlayersPage(props : {params : Promise<{ slug: string }>}){

    const params = await props.params;
    const slug = params.slug;
    console.log(slug);

    return (
        <>
        </>
    )
}