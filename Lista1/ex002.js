const read = require("readline-sync")
var nome = read.question("Qual seu nome: ")
var sobreN = read.question("Qual seu sobrenome:")
console.log("Seu nome completo é: ", nome, " " + sobreN)
