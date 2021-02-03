//strings, number (int,float), boolean

let minhaVar = "Minha String"
let minha_var2 = 'minha "string" com aspas duplas'

console.log(minha_var2);

//Concatenar variável na string
let idade1 = 30;
let idade2 = 40;

let msg1 = "Eu possuo" + idade1 + "anos";
let msg2 = `Eu possuo ${idade2} anos`;

console.log(msg1);
console.log(msg2);
console.log(typeof idade1, typeof msg2, typeof minhaVar);

// Variável tipo NUMBER
const n1 = 10;
const n2 = 1.1;

console.log(`o tipo de n1 é ${typeof n1} e o valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e o valor é ${n2}`);

// Variável tipo BOOLEAN

const isValid = true;
console.log(`isValid ${isValid}`);
