import styles from "./organigramme.module.css";
import data from "@/assets/data/club/club.json"
import {MemberProps} from "@/features/users/type";
import {RoleProps} from "@/features/associationRole/type";



export default function Organigramme({members, role} : { members : MemberProps[], role : RoleProps[] }) {

    const presidentId = role.find((r)=> r.label === "Président")
    const presidentAdjointId = role.find((r)=> r.label === "Président adjoint")
    const secretaireGeneralId = role.find((r)=> r.label === "Secrétaire général")
    const secretaireAdjointId = role.find((r)=> r.label === "Secrétaire adjoint")
    const treasurerId = role.find((r)=> r.label === "Trésorier")
    const treasurerAdjointId = role.find((r)=> r.label === "Trésorier adjoint")
    const coachGeneralId = role.find((r)=> r.label === "Entraineur général")
    const directionComityId = role.find((r)=> r.label === "Comité de direction")

    if(!presidentId || !secretaireGeneralId ||  !treasurerId || !secretaireAdjointId || !treasurerAdjointId || !coachGeneralId || !directionComityId || !presidentAdjointId){
        return (
            <p>Aucun membre trouvé</p>
        )
    }

    const president = members.find(member => member.memberFunctionId?.includes((presidentId.id)))
    const presidentAdjoint = members.find(member => member.memberFunctionId?.includes((presidentAdjointId.id)))
    const secretaireGeneral = members.find(member => member.memberFunctionId?.includes((secretaireGeneralId.id)))
    const secretaireAdjoint = members.find(member => member.memberFunctionId?.includes((secretaireAdjointId.id)))
    const treasurer = members.find(member => member.memberFunctionId?.includes((treasurerId.id)))
    const treasurerAdjoint = members.find(member => member.memberFunctionId?.includes((treasurerAdjointId.id)))
    const coachGeneral = members.filter(member => member.memberFunctionId?.includes((coachGeneralId.id)))
    const directionComity = members.filter(member => member.memberFunctionId?.includes((directionComityId.id)))



    console.log(presidentAdjoint)

    return (
        <>
            <section className={styles.section}>
                <h2 className={styles.h2}>{data.organigramme}</h2>
                <div role={"group"} className={styles.dir}>
                    <article className={styles.pres}>
                       <h3 >{presidentId.label}</h3>
                       <h3 className={styles.h3}>{president?.firstname} {president?.lastname}</h3>
                    </article>
                    <article className={styles.pres}>
                        <h3 >{presidentAdjointId.label}</h3>
                        <h3 className={styles.h3}>{presidentAdjoint?.firstname} {presidentAdjoint?.lastname}</h3>
                    </article>
                </div>
                    <div role={"group"} className={styles.dir}>
                        <article className={styles.pres}>
                            <h3>{secretaireGeneralId.label}</h3>
                            <h3 className={styles.h3}>{secretaireGeneral?.firstname} {secretaireGeneral?.lastname}</h3>
                        </article>
                        <article className={styles.pres}>
                            <h3>{coachGeneralId.label}</h3>
                            {coachGeneral.map(member =>(
                                <div key={member.id}>
                                    <h3 className={styles.h3}>{member.firstname} {member.lastname}</h3>
                                </div>
                            ))}
                        </article>
                        {/*<article className={styles.pres}>*/}
                        {/*    <h3>{secretaireAdjointId.label}</h3>*/}
                        {/*    <h3 className={styles.h3}>{secretaireAdjoint?.firstname} {secretaireAdjoint?.lastname}</h3>*/}
                        {/*</article>*/}
                    </div>
                    <div role={"group"} className={styles.dir}>
                        <article className={styles.pres}>
                            <h3>{treasurerId.label}</h3>
                            <h3 className={styles.h3}>{treasurer?.firstname} {treasurer?.lastname}</h3>
                        </article>
                        <article className={styles.pres}>
                            <h3>{treasurerAdjointId.label}</h3>
                            <h3 className={styles.h3}>{treasurerAdjoint?.firstname} {treasurerAdjoint?.lastname}</h3>
                        </article>
                    </div>


                    <article>
                        <h3 className={styles.comity}>{directionComityId.label}</h3>
                            <div role={"group"} className={styles.comityName}>
                                <h3  className={styles.h3Comity}>{president?.firstname} {president?.lastname}</h3>
                                <h3  className={styles.h3Comity}>{presidentAdjoint?.firstname} {presidentAdjoint?.lastname}</h3>
                                <h3  className={styles.h3Comity}>{secretaireGeneral?.firstname} {secretaireGeneral?.lastname}</h3>
                                {/*<h3  className={styles.h3Comity}>{secretaireAdjoint?.firstname} {secretaireAdjoint?.lastname}</h3>*/}
                                <h3  className={styles.h3Comity}>{treasurer?.firstname} {treasurer?.lastname}</h3>
                                <h3  className={styles.h3Comity}>{treasurerAdjoint?.firstname} {treasurerAdjoint?.lastname}</h3>
                        {directionComity.map((member)=> (
                                <h3 key={member.id} className={styles.h3Comity}>{member.firstname} {member.lastname}</h3>
                        ))}
                            </div>
                    </article>

            </section>

        </>
    )
}