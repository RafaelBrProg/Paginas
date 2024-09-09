
function calcular(operacao) {
  const num1 = parseFloat(document.getElementById('n1').value);
  const num2 = parseFloat(document.getElementById('n2').value);

  let resultado;

  switch (operacao) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultado = 'Não é possível dividir por zero';
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      resultado = 'Operação inválida';
  }

  document.getElementById('resultado').textContent = resultado;
}
