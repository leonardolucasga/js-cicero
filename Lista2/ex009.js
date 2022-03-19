/*9. Faça um Programa que leia três números inteiros e mostre-os em
ordem crescente */
const read = require ("readline-sync")
function main(){
    var num1 = Number (read.question("Num1: ", num1))
    var num2 = Number (read.question("Num 2: ", num2))
    var num3 = Number (read.question("Num 3: ", num3))
    var  maior, meio, menor;
    if (num1 > num2 && num1 > num3){
         maior = num1
         // entre num2 e num3
         if (num2 < num3){
             menor = num2
             meio = num3 
        }else{
            menor = num3
            meio = num2            
        }
        } else if (num1 < num2 && num1 < num3){
            menor = num1
            //entre num2 e num3
            if (num2 > num3){
                maior = num2
                meio = num3 
           }else{
               maior = num3
               meio = num2            
           }

        } else{
            meio = num1
              //entre num2 e num3
              if (num2 > num3){
                maior = num2
                menor = num3 
           }else{
               maior = num3
               menor = num2            
           }
        }
          console.log(`${menor}, ${meio}, ${maior}`)



}
main ()