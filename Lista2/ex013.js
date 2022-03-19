/*13. As Organizações Tabajara resolveram dar um aumento de
salário aos seus colaboradores e lhe contrataram para
desenvolver o programa que calcula os reajustes.
Faça um programa que recebe o salário de um colaborador e
o reajuste segundo o seguinte critério, baseado no salário
atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 281,00 e R$ 700,00 : aumento de 15%
salários entre R$ 701,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1501,00 em diante : aumento de 5%
Após o aumento ser realizado informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento. */
const read = require('readline-sync')
var sal = parseFloat(read.question('Digite o seu salario: '))
console.log(sal)

//20%
    if (sal <= 280.00){
        var reaj = parseFloat (sal*0.20)
        var newSal = parseFloat (sal+reaj)
        console.log(`Seu salario era R$:${sal} ele teve um reajuste de 20% que é equivalente a  R$:${reaj} e seu novo salário é de R$: ${newSal}`)

        //15%
}   else if (sal >= 281.00 && sal < 700.00){
        var reaj = parseFloat (sal*0.15)
        var newSal = parseFloat (sal+reaj)
        console.log(`Seu salario era R$ ${sal} ele teve um reajuste de 15% que é equivalente a R$:${reaj} e seu novo salario e de R$:${newSal}`)

        //10%
}   else if(sal >= 701.00 && sal <= 1500.00 ){
    var reaj = parseFloat (sal*0.10)
        var newSal = parseFloat (sal+reaj)
        console.log(`Seu salario era R$ ${sal} ele teve um reajuste de 10% que é equivalente a R$:${reaj} e seu novo salario e de R$:${newSal}`)

        //5%
}   else if (sal > 1501.00){
    var reaj = parseFloat (sal*0.05)
        var newSal = parseFloat (sal+reaj)
        console.log(`Seu salario era R$ ${sal} ele teve um reajuste de 5% que é equivalente a R$:${reaj} e seu novo salario e de R$:${newSal}`)
}
