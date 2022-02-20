const read = require ("readline-sync")

var n1 = parseFloat (read.question ("Digite a Primeira nota: "))
console.log (n1)
var n2 = parseFloat (read.question ("Digite a Segunda nota: "))
console.log (n2)
var n3 = parseFloat (read.question ("Digite a Terceira nota: "))
console.log (n3)
var media  = parseFloat (n1+n2+n3)/3;
console.log (media)
var media = read.question("A media da suas notas e: "+media)