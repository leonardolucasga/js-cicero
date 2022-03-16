//6. Faça um Programa que leia três números e mostre o maior e o menor deles.
const read = require("readline-sync")
var n1 = parseInt (read.question("Digite um numero: "))
console.log(n1);
var n2 = parseInt (read.question("Digite um segundo numero: "))
console.log(n2);
var n3 = parseInt (read.question("Digite um terceiro numero: "))
console.log(n3);
if(n1&&n2>n3){
    console.log(`Os numero ${n1} e ${n2} sao maiores que o ${n3}`)
} else if (n1&&n3>n2){
    console.log(`Os numeros ${n1} e ${n3} sao maiores que o ${n2}`)
} else if (n2&&n3>n1){
    console.log(`Os numeros ${n2} e ${n3} sao maiores que o ${n1}`)
}

