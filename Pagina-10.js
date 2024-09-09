const prompt = require("prompt-sync")()
const inteiro = Number(prompt("ente com numero inteiro: "))
if (inteiro % 2 == 0) {
    console.log(`${inteiro}: é par `)
} else {
    console.log(`${inteiro}: é impar `)
}