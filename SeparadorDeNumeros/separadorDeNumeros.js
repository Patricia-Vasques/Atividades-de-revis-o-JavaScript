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
}


module.exports = separadorDeNumeros;