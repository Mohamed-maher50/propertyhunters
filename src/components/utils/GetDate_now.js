export default ()=>{

    const date =new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    let d  =  new Date().toISOString().slice(0, -8);
return d
}