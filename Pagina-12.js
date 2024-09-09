const prompt = require("prompt-sync")();

const lado1 = Number(prompt("Entre com o comprimento do lado 1: "));
const lado2 = Number(prompt("Entre com o comprimento do lado 2: "));
const lado3 = Number(prompt("Entre com o comprimento do lado 3: "));

function eTriangulo(a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}
if (!eTriangulo(lado1, lado2, lado3)) {
    console.log("Os valores fornecidos não formam um triângulo.");
} else {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero (todos os lados iguais).");
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        console.log("O triângulo é isósceles (dois lados iguais).");
    } else {
        console.log("O triângulo é escaleno (todos os lados diferentes).");
    }
}