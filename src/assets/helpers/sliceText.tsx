export const shortPres = (text : string)=>{
    if (text.length > 50){
        return  text.slice(0, 50) + " ...";


    } else {
        return text;
    }
}
