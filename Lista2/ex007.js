/*7. Faça um Programa que pergunte em que turno você estuda. Peça
para digitar M-matutino, V-Vespertino ou N- Noturno. Imprima a
mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor
Inválido!", conforme o caso. */
const read = require ('readline-sync')
var turno = read.question('Digite o turno estudado (M- Matutino, V-Vespertino ou N-Noturno): ')
    switch (turno){
        case 'M': console.log("Bom dia!")
        break
        case 'V': console.log('Boa tarde!')
        break
        case 'N': console.log('Boa noite!')
        break
 }
    
