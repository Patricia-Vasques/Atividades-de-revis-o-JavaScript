function separadorDeNumeros(arrayDeNumeros, opcao){
    const numerosImpares = [];
    const numerosPares = [];

    for (let i = 0; i < arrayDeNumeros.length; i++){
        const numero = arrayDeNumeros[i];
        if (numero % 2 === 0){
            numerosPares.push(numero);
        }else {
            numerosImpares.push(numero);
        }
    }

    if (opcao === 1){
        return numerosImpares;
    } else if (opcao === 2){
        return numerosPares;
    } else if (opcao === 3) {
        return {impares: numerosImpares, pares: numerosPares};
    } else {
        return "Opção inválida escolha um número de 1 a 3"
    }
}

module.exports = separadorDeNumeros;