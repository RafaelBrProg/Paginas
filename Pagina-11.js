const prompt = require("prompt-sync")();
const pesoPacote = Number(prompt("Entre com o peso do pacote em Kg: "));
const modalidade = Number(prompt("Insira a modalidade (1 - Padrão, 2 - Expresso, 3 - Internacional): "));

if (isNaN(pesoPacote) || pesoPacote <= 0) {
    console.log("Peso inválido. O peso deve ser um número positivo.");
} else if (![1, 2, 3].includes(modalidade)) {
    console.log("Modalidade inválida. Insira 1, 2 ou 3.");
} else {

    let valorFrete;

    if (modalidade === 1) {
        valorFrete = pesoPacote + 20;
    } else if (modalidade === 2) {
        valorFrete = pesoPacote + 30;
    } else if (modalidade === 3) {
        valorFrete = pesoPacote + 50;
    }
    console.log(`O valor do frete é: R$ ${valorFrete.toFixed(2)}`);
}