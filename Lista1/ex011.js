const read = require ("readline-sync")
var piso  = parseFloat (10*15)
var cxC = parseFloat(2.20)
console.log (`o piso tem ${piso}m²`)
var calc = parseInt (piso/cxC)
console.log(`A quantidade de caixas de cerâmicas necessárias será ${calc} caixas. Comunicado : [Desconsiderar a margem de erro de 5%]`)


