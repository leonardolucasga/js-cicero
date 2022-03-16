/*12. A nota final de um estudante é calculada a partir da média
de três notas atribuídas entre o intervalo de 0 até 10,
respectivamente, a um trabalho de laboratório (tl), a uma
avaliação semestral (as) e a um exame final (ef). De acordo com
o resultado, mostre na tela se o aluno está reprovado (média =
4), de recuperação (4 = media < 7) ou se foi aprovado (media
= 7). Ao final informa se o aluno está aprovado, em
recuperação ou reprovado.*/
const read =require('readline-sync')
var tl = parseFloat(read.question("Digite a nota do trabalho de laboratorio: "))
console.log(tl)
var as = parseFloat(read.question("Digite a nota da avaliacao semestral: "))
console.log(as)
var ef = parseFloat(read.question("Digite a nota do exame final: "))
console.log(ef)
var soma = (tl+as+ef)/3
if(soma < 4){
    console.log(`a sua média foi ${soma} e voce está [REPROVADO], tente novamente no proximo semestre!`)
} else if (soma >= 4 && soma < 7){
    console.log(`a sua média foi ${soma} e voce está em [RECUPERAÇÃO], estude para as proximas avaliações! `)
} else{
    console.log(`A sua média foi ${soma} e voce está [APROVADO] Parabéns, voce esta de FERIAS! `)
}

