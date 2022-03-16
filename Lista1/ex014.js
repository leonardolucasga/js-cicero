const read = require ("readline-sync")
var sal = parseFloat(read.question("O salario bruto do funcionario e de: "))
    console.log(sal)

var fgts = parseFloat (0.08 * sal)
var recFGTS = parseFloat(read.question(`O recolhimento do FGTS sera de R$ ${fgts} `))
    console.log(fgts)
var descF = parseFloat (fgts - sal)
console.log(`O desconto do FGTS é de ${fgts} e sobrará ${descF}`)


var inss = parseFloat (0.12 * descF)
var recInss = parseFloat(read.question(`O recolhimento do INSS sera de R$${inss}`)) 
console.log(inss)
var descI = parseFloat (inss-descF)
console.log(`o Desconto do INSS é de ${inss} e o salario liquido será de R$ ${descI}`)
    



