const prompt = require("prompt-sync")()
const nota = Number(prompt("Entre com uma nota: "))

if (nota >= 7) {
    console.log(`Parabens Voce esta aprovado )`)
} else if (nota >= 4 && nota < 7) {
    console.log(`Voce esta de recuperacao`)
} else {
    console.log(`Voce esta reprovado`)
}