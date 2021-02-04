//Operadores Aritméticos:
// + Soma, - Subtração, * Multiplicação, / Divisão
// % Resto da Divisão, ** Potência em versões mais novas do JavaScript

let n1 = 10;
let n2 = 5;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);

//Operadores de Atribuição
let n3 = 20; // 20 atribuído ao n3
// o sinal de igual é o operador que fez essa atribuição.

//n3 = n3 + 15;
// Vai retornar 35, mas pra simplificar, pode-se usar:
n3 += 15;

console.log(n3);

//Incremento e Decremento
let i = 0;
i++;
console.log(i);

let d = 0;
d--;
console.log(d);

// Operadores Lógicos
/* 
Para uma pessoa viajar para o exterior precisa:
 Ser maior de 18 anos
OU
Estar acompanhado dos pais
E
Ter comprado a passagem
*/
let idade = 30;
let paisPresentes = false;
let comprouPassagem = false;
const podeViajar = (idade >=18 || paisPresentes === true) && comprouPassagem;
/* Sobre precedencia de operadores, o && tem preferencia, ou seja
ele é "feito" primeiro, por isso se quero fazer o || antes, precisa
envolver no parenteses. Obs.: É a mesma regra que usamos em equações 
com multiplicação e divisão e colocamos a expressão nos parenteses */

console.log(`Pode viajar?: ${podeViajar}`);

