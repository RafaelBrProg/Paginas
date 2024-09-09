const prompt = require("prompt-sync")();
let numero = Number(prompt("Entre com um numero: "));
if (numero % 2 == 1) {
    console.log(`${numero} é um numero primo.`);
} else if (numero == 2) {
    console.log(`${numero} é um numero primo. `)
} else {
    console.log(`${numero} Não é um numero primo`)
}