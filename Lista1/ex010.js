const read = require ("readline-sync") //Considerando π=3,14.(PI)
var circunferencia = parseFloat (read.question("Qual o valor da circunferencia: "))
var diâmetro = parseFloat (read.question("Qual o valor do diâmetro: ")) 
var calc = parseFloat (circunferencia/diâmetro)
console.log (`O valor de π(PI) é igual a: ${calc}!`)




