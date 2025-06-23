export const shortPres = (text : string)=>{
    if (text.length > 110){
        return  text.slice(0, 110) + " ...";


    } else {
        return text;
    }
}
