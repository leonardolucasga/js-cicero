const read = require("readline-sync")
var n1 = parseFloat (read.question ("Digite o Primeiro numero: "))
console.log (n1)
var n2 = parseFloat (read.question ("Digite o Segundo numero: "))
console.log (n2)
var soma = parseFloat (n1+n2)
console.log(`A soma entre ${n1} e ${n2} é igual a: ${soma}`)


