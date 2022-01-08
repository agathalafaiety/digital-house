const somar = (num1, num2) => num1 + num2;

const calc = (num1, num2, operacao) => operacao(num1, num2);

console.log(calc(10, 20, (num1, num2) => num1 - num2))
