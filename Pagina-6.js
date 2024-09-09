const prompt = require("prompt-sync")()
const ano = Number(prompt("Entre com o ano: "))
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
   console.log(`${ano} é um ano bissexto.`);
} else {
   console.log(`${ano} não é um ano bissexto.`);
}