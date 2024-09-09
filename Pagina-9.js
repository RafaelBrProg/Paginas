
const prompt = require("prompt-sync")();
let velocidadeKm = Number(prompt("Velocidade em Km: "));

if (velocidadeKm <= 80) {
    console.log("dentro do limite");
} else if (velocidadeKm > 80 && velocidadeKm < 100) {
    console.log("acima do limite");
} else {
    console.log("vai ser multado em");
}
