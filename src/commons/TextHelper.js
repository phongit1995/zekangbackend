export const genId = ()=>{
    var id = Math.floor(Math.random() * 10000) + '' + Math.floor(Math.random() * 10000);
    return id;
}