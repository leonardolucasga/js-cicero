/*15. Você trabalha num escritório de contabilidade e precisa
detalhar um contracheque de um funcionário. Crie um algoritmo
que solicita o salário bruto de um funcionário e em seguida
detalhe seu contracheque. A descrição deve seguir o padrão:
a. Salário bruto:
b. FGTS
c. Desconto de INSS
d. Desconto de imposto de renda
e. Salário líquido.
Informações:
O valor do FGTS é 8% do salário bruto
O valor do INSS é de 12% do salário bruto
O valor do imposto de renda segue a seguinte regra:
Se o salário bruto for menor que 1500, desconta 7,5%
Se for entre 1500 e 2000, desconta 10%
Se for acima de 2000, desconta 15%
O salário líquido é igual ao salário bruto, descontados o INSS e IR */
const read = require('readline-sync')

const sBruto = parseFloat(read.question("Informe o seu Salario Bruto: "))
console.log(sBruto)
 

var fgts = parseFloat(sBruto*0.08)
var descFgts = parseFloat(fgts)
console.log(`FGTS: R$: ${descFgts}`)

var inss = parseFloat (sBruto*0.12)
var descInss = (inss)
console.log(`Desconto de INSS: R$ ${descInss}`)


    if (sBruto <= 1500){
    var descIR  = parseFloat (sBruto*0.075)
      console.log(`Desconto de imposto de Renda: R$ ${descIR}`)


}   else if (sBruto >= 1500.01 || sBruto <2000.00){
    var descIR = parseFloat (sBruto*0.10)
    console.log(`Desconto de imposto de Renda: R$ ${descIR}`)





}   else  {
    var descIR = parseFloat (sBruto*0.15)
    console.log(`Desconto de imposto de Renda: R$ ${descIR}`)
}




    var Sliq = parseFloat (sBruto-inss-descIR)

console.log(`Salario Liquido: R$ ${Sliq}`)
console.log(`a. Salario Bruto = R$ ${sBruto}`)
console.log(`b. FGTS = R$ ${descFgts}`)
console.log(`c. Desconto INSS  = R$ ${descInss}`)
console.log(`d. Desconto de Imposto de Renda = R$ ${descIR}`)
console.log(`e. Salário Liquido: R$ ${Sliq}`)
console.log(`[ATENCAO]: Em nenhum lugar, a pergunta pede o desconto do FGTS para calcular o salario liquido, logo não senti a necessidade de por.`)
