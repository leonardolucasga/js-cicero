/* DADOS EM IMAGEM */
const read = require('readline-sync')
var nome =(read.question("Qual seu nome? ", nome))

const altura = parseFloat(read.question(`${nome}, qual eh a sua altura? `))
console.log(altura)
const peso = parseFloat(read.question(`${nome}, qual eh o seu peso? `))
console.log(peso)
var imc = parseFloat (peso/(altura*2))
    if  (imc < 18.5){
        console.log(`Caro paciente ${nome} sua altura eh ${altura} , seu peso eh ${peso}Kg  e Seu IMC eh ${imc} com base nos resultados:[Voce esta abaixo do peso ideal.]`)
}   else if(imc == 18.5 || imc < 25){
        console.log (`Caro paciente ${nome} sua altura eh ${altura}, seu peso eh ${peso}Kg e Seu IMC eh ${imc} com base nos resultados:[Voce esta no peso normal].`)
}   else if (imc == 25 || imc < 30){
        console.log(`Caro paciente ${nome} sua altura eh ${altura}, seu peso eh :${peso}Kg e seu IMC eh ${imc} com base nos resultados: [Você esta levemente acima do peso (sobrepeso)]`)
}   else if (imc == 30 || imc < 35){
        console.log(`Caro paciente ${nome} sua altura eh ${altura}, seu peso eh ${peso}Kg e seu IMC eh ${imc} com base nos resultados: [Você esta com Obersidade grau I ]`)
}   else if(imc == 35 || imc < 40){
        console.log(`Caro paciente ${nome} sua altura eh ${altura}, seu peso eh ${peso}Kg e seu IMC eh ${imc} com base nos resultados [Você esta com Obesidade grau II (SEVERA)]`)
}   else if(imc > 40){
        console.log(`Caro paciente ${nome} sua altura eh ${altura}, seu peso eh ${peso}Kg e seu IMC eh ${imc} com base nos resultados [Você esta com Obesidade grau III (Morbida)]`)
}