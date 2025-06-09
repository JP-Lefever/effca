


export const OnClickButton = ({name, onClick, className} : {name : string, onClick : ()=>void , className : string})=> {

    return (<>
        <button onClick={onClick} className={className} type={"button"}>{name}</button>

    </>)
}