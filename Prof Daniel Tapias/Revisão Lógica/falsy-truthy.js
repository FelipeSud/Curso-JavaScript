/* falsy values: 0, "", NaN, undefined, null, false
truth: Todos os demais, incluindo todas as strings não vazias. Ex.: a string "false" é true, mas o valor false (sem aspas) é false
*/
if ("false"){
    console.log("true");
}else{
    console.log("false");
}

if(0){
    console.log("true");
}else{
    console.log("false");
}