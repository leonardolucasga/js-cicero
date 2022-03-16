/* 5. Faça um Programa que solicite o tamanho de uma blusa de um
usuário e verifique se o valor digitado é “P" ou "M" ou “G”.
Conforme a letra escreva na tela: “Sua escolha foi Tamanho P”,
“Sua escolha foi tamanho M”, “Sua escolha foi tamanho G” ou “A
opção digitada é inválida”. (Teste com os valores G, P, M e X) */
const read = require ('readline-sync')
var tCamisa = read.question('Digite o tamanho da blusa: ')
console.log(tCamisa)
    if (tCamisa==("P")){
        console.log('O tamanho selecionado da camisa foi ("P")')
    } else if ( tCamisa==("M")){
        console.log('O tamanho selecionado da camisa foi ("M")')
    } else if (tCamisa==("G")){
        console.log('O tamanho selecionado da camisa foi ("G")')  
    } else {
        console.log("O tamanho digitado é inválido.")
    }