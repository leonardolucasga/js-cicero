const read = require("readline-sync")
var n = read.question("Digite um numero:")
if (n % 2 == 0){
    console.log("O numero e: [PAR]")
} else{
    console.log("O numero e: [IMPAR]")
}

