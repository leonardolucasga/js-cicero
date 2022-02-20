const read = require ("readline-sync")
var valor = parseInt(read.question("Digite um valor para conversao em porcentagem: "))
console.log(valor)
var num = 0.75 * valor;
console.log(`75% de ${valor} é igual a: ${num} `)

