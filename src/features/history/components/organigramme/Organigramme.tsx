import styles from "./organigramme.module.css";
import data from "@/assets/data/club/club.json"
import {MemberProps} from "@/features/members/type";
import {RoleProps} from "@/features/associationRole/type";



export default function Organigramme({members, role} : { members : MemberProps[], role : RoleProps[] }) {

    const presidentId = role.find((r)=> r.label === "Président")
    const secretaireGeneralId = role.find((r)=> r.label === "Secrétaire général")
    const secretaireAdjointId = role.find((r)=> r.label === "Secrétaire adjoint")
    const treasurerId = role.find((r)=> r.label === "Trésorier")
    const treasurerAdjointId = role.find((r)=> r.label === "Trésorier adjoint")
    const coachGeneralId = role.find((r)=> r.label === "Entraineur général")
    const directionComity = role.find((r)=> r.label === "Comité de direction")

    if(!presidentId || !secretaireGeneralId ||  !treasurerId || !secretaireAdjointId || !treasurerAdjointId || !coachGeneralId || !directionComity){
        return (
            <p>Aucun président trouvé</p>
        )
    }

    const president = members.find(member => member.memberFunctionId?.includes((presidentId.id)))
    const secretaireGeneral = members.find(member => member.memberFunctionId?.includes((secretaireGeneralId.id)))
    const secretaireAdjoint = members.find(member => member.memberFunctionId?.includes((secretaireAdjointId.id)))
    const treasurer = members.find(member => member.memberFunctionId?.includes((treasurerId.id)))
    const treasurerAdjoint = members.find(member => member.memberFunctionId?.includes((treasurerAdjointId.id)))
    const coachGeneral = members.find(member => member.memberFunctionId?.includes((coachGeneralId.id)))
    console.log(president)
    return (
        <>
            <section className={styles.section}>
                <h2 className={styles.h2}>{data.organigramme}</h2>
                    <article className={styles.pres}>
                       <h3 >{presidentId.label}</h3>
                       <h3 className={styles.h3}>{president?.firstname} {president?.lastname}</h3>
                    </article>
                    <div role={"group"} className={styles.secretaire}>
                        <article className={styles.pres}>
                            <h3>{secretaireGeneralId.label}</h3>
                            <h3 className={styles.h3}>{secretaireGeneral?.firstname} {secretaireGeneral?.lastname}</h3>
                        </article>
                        <article className={styles.pres}>
                            <h3>{secretaireAdjointId.label}</h3>
                            <h3 className={styles.h3}>{secretaireAdjoint?.firstname} {secretaireAdjoint?.lastname}</h3>
                        </article>
                    </div>
                    <div role={"group"} className={styles.treasurer}>
                        <article className={styles.pres}>
                            <h3>{treasurerId.label}</h3>
                            <h3 className={styles.h3}>{treasurer?.firstname} {treasurer?.lastname}</h3>
                        </article>
                        <article className={styles.pres}>
                            <h3>{treasurerAdjointId.label}</h3>
                            <h3 className={styles.h3}>{treasurerAdjoint?.firstname} {treasurerAdjoint?.lastname}</h3>
                        </article>
                    </div>
                    <article className={styles.coach}>
                        <h3>{coachGeneralId.label}</h3>
                        <h3 className={styles.h3}>{coachGeneral?.firstname} {coachGeneral?.lastname}</h3>
                    </article>
                    <article>
                        <h3 className={styles.comity}>{directionComity.label}</h3>
                            <div role={"group"} className={styles.comityName}>
                        {members.map((member)=> (
                                <h3 key={member.id} className={styles.h3Comity}>{member.firstname} {member.lastname}</h3>
                        ))}
                            </div>
                    </article>

            </section>

        </>
    )
}