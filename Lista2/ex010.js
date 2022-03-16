/*10. Faça um Programa que peça um número inteiro e determine se
ele é par ou ímpar. Dica: utilize o operador módulo (resto da
divisão)*/

const read = require("readline-sync")
var n = read.question("Digite um numero: ")
if (n % 2 == 0){
    console.log(`O numero ${n} e: [PAR]`)
} else{
    console.log(`O numero ${n} e: [IMPAR]`)
}