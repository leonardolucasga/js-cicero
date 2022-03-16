//2. Faça um Programa que peça dois números e imprima o maior deles.
const read = require ('readline-sync')
var n1 = parseInt(read.question('Informe o PRIMEIRO NUMERO: '))
var n2 = parseInt(read.question('Informe o SEGUNDO NUMERO: '))
if (n1 > n2){
console.log ('O PRIMEIRO NUMERO é MAIOR que o SEGUNDO NUMERO')
}else{
console.log ('O SEGUNDO NUMERO é MAIOR que o PRIMEIRO NUMERO')
}