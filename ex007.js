const read = require("readline-sync")
var a = parseInt (read.question("Qual a idade de Anderson?"))
console.log(a)
var b = parseInt (read.question("Qual a idade de Breno?"))
console.log(b)
var c = parseInt (read.question("Qual a idade de Carlos?"))
console.log(c)
if (a>b+c){
    console.log("A idade do Anderson  é maior que a de Breno e de Carlos juntas.")
} else if (a==b+c){
    console.log("A idade de Anderson, é igual a de Breno e de Carlos juntas.")
    } else{
        console.log("A idade de Anderson não é maior que a de Breno e Carlos juntas.")
    }

