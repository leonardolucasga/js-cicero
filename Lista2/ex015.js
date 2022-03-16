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
