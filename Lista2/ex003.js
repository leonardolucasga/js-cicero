/*3. Faça um Programa que peça um valor e mostre na tela se o valor
é positivo ou negativo. (teste com os valores -1 e 1) */
const read = require("readline-sync")
var n = parseFloat (read.question('Digite um valor: '))
if (n >= 0){
    console.log(`O valor ${n} é Positivo` )

} else {
    console.log(`o valor ${n} é Negativo`)
}
