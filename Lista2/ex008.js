/* Os carros atuais podem se locomover usando álcool ou gasolina
como combustíveis. Normalmente, o álcool proporciona uma
autonomia menor que a gasolina. Com um litro de álcool um carro
percorre 70% do percurso que percorreria com gasolina. Para
saber se é mais vantajoso abastecer com álcool ou gasolina é
necessário saber a diferença entre os preços dos dois
combustíveis. Para ser vantajoso, o valor do álcool deve ser
menos de 70% do valor da gasolina. Tendo isso em vista,
pesquise os valores dos combustíveis em alguma cidade do brasil
e elabore um algoritmo que: receba a cidade do usuário, o valor
do álcool e o valor da gasolina. Em seguida, exiba a seguinte
mensagem na tela: “Na cidade {_x} o valor do álcool corresponde
{_x%} do valor da gasolina. Então {‘_compensa’ ou ‘_não
compensa’} abastecer com álcool. */
const read = require ("readline-sync")
    var cidade = read.question("Qual eh a sua cidade? ")
console.log(cidade)
    var gasolina = parseFloat(read.question(`Qual o preco da gasolina em ${cidade} ? `))
console.log(gasolina)
console.log  (`O preco da gasolina em ${cidade} é de: R$ ${gasolina}`)
    var alcool = parseFloat(read.question(`Qual o preco do Alcool em ${cidade} ? `))
console.log(alcool)
console.log(`O preco do alcool em ${cidade} é de: R$ ${alcool}`)

        if (alcool < 0.7*gasolina){
    console.log(`Na cidade do ${cidade} o valor do alcool corresponde a 70% do valor da gasolina. Então compensa abastecer com alcool. `)
}       else {
    console.log(`Na cidade do ${cidade} o valor do alcool corresponde a 70% do valor da gasolina. Então NAO compensa abastecer com alcool. `)
}
