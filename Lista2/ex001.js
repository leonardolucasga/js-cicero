/*1 - Construir um algoritmo que indique se o número digitado está
compreendido entre 20 e 90 ou não.*/
const read = require("readline-sync")
var n = parseInt (read.question("Informe um numero: "))    
if (n >= 20 && n <=90){
    console.log('O numero  informado está entre 20 e 90')
    } else {
        console.log('O numero informado não está entre 20 e 90')
    }