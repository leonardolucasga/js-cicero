const read = require ("readline-sync")
var L1 = parseFloat (read.question("Digite o primeiro lado do quadrado: "))
var L2 = parseFloat (read.question("Digite o segundo lado do quadrado: " ))
var Q = L1*L2;
console.log(`A soma entre os lados dos quadrados é equivalente a ${Q}m²`)
