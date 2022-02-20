const read = require("readline-sync")
var n1 = parseInt (read.question("Digite um numero:"))
var n2 = parseInt (read.question("Digite outro numero: "))
console.log (n1==n2)
if (n1==n2){
    console.log("Os numeros sao iguais!")
} else {
    console.log("Os numeros sao diferentes!")
}