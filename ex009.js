const read = require ("readline-sync")
var larg = 15
var comp = 20
var terreno = larg*comp;
var casa =  9*12
console.log(`O terreno ao todo tem: ${terreno}m²`)
var calcTC = parseFloat (terreno-casa)
console.log  (`a casa ocupa: ${casa}m² e sobra ${calcTC}m²`)





