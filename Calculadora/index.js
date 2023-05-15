const calculadora = require("./calculadora");

const resultadoSoma = calculadora.somar(10, 5);
console.log("O resultado da soma é:", resultadoSoma);

const resultadoSubtracao = calculadora.subtrair(125, 35);
console.log("O resultado da subtração é:", resultadoSubtracao);

const resultadoMultiplicacao = calculadora.multiplicar(8, 6);
console.log("O resultado da multiplicação é:", resultadoMultiplicacao);

const resultadoDivisao = calculadora.dividir(28, 4);
console.log("O resultado da divisão é:", resultadoDivisao);