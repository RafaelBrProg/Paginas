
const prompt = require("prompt-sync")();
let nota = Number(prompt("Entre com uma nota: "));

if (nota >= 9) {
    console.log("Parabéns, você tirou um A");
} else if (nota >= 7) {
    console.log("Boa, você tirou um B");
} else if (nota >= 5) {
    console.log("Você tirou um C");
} else if (nota >= 3) {
    console.log("Você tirou um D");
} else {
    console.log("Você tirou um E");
}
