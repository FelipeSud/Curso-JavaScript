
let idade = 17;
let paisPresentes = false;
let comprouPassagem = true;
const podeViajar = (idade >=18 || paisPresentes === true) && comprouPassagem;
console.log(`Pode viajar?: ${podeViajar}`);


if(!comprouPassagem){
    console.log("Não comprou passagem");
    }else
        if (idade>=18){
        console.log("Pode viajar")
        }else {
            console.log("Opa!! Menor de idade");
        }

let n1 = 3;
let n2 = 6;
let media = (n1 + n2)/2;
console.log(`A média é: ${media}`);

if(n1===0 || n2===0){
    console.log("Reprovado");
    }else if(media>=5){
        console.log("Aprovado");
    }else {
        console.log("Recuperação");
        }

    // Operador ternário
    // Imagina que quero colocar uma mensagem para idade > ou < de 18
    /*let msgMaiorIdade = "";
    if (idade>=18){
        console.log("É maior de idade");
    }else {
        console.log("É menor de 18 anos");
    } 
    Porém, dá pra simplificar com operador ternário */
    let msgMaiorIdade = idade>=18 ? "É maior de idade" : "É menor de 18 anos";
    console.log(msgMaiorIdade);