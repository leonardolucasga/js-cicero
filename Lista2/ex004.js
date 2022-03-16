/*4.Faça um Programa que verifique se uma letra digitada é vogal ou
consoante (Dica: use as proposições compostas com a conjunção
‘e’ ou a disjunção ‘ou’).*/
 const read = require("readline-sync")
letra = read.question("Digite uma letra: ")
    if(letra ==("a")||letra==("e")||letra ==("i")||letra ==("o")||letra ==("u")
    ||letra ==("A")||letra ==("E")||letra ==("I")||letra ==("O")||letra ==("U")){
        console.log('a letra é uma vogal')
    }
    else{
        console.log(`a letra digitada é uma consoante`)
}
