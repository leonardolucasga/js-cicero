/*Escreva um programa que peça 3 notas (reais) para o usuário.
Imprima "você passou”, caso a média das notas seja maior ou
igual a 7; caso contrário, imprima "você não passou” (Faça
utilizando a estrutura SE e a estrutura ESCOLHA).*/
const read = require("readline-sync")
var n1 = parseFloat(read.question("Digite a primeira nota: "))
console.log(n1)
var n2 = parseFloat(read.question("Digite a segunda nota: "))
console.log(n2)
var n3 = parseFloat(read.question("Digite a terceira nota: "))
console.log(n3)
var media = parseFloat (n1+n2+n3)/3
if (media>=7){
    console.log(`A media entre as notas ${n1} , ${n2} e ${n3} é: `, media, `e voce passou!`)

} else{
    console.log(`A media entre as notas ${n1} , ${n2} e ${n3} é: `, media, `e voce [NAO] passou!`)
}





