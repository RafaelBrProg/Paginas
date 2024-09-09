const prompt = require("prompt-sync")()
const reais = Number(prompt("Entre com o valor: "))
const operação = Number(prompt("insira a moeda (1- Dolar 2- Euro)"))
var dolar
var euro

if (operação == 1) {
    dolar = reais / 5.62
    console.log(dolar.toFixed(2))
} else {
    euro = reais / 6.23
    console.log(euro.toFixed(2))
}
