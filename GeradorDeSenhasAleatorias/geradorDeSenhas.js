function geradorDeSenhas(tamanho){

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwyxz0123456789";
let senha = "";

for (let i = 0; i<tamanho; i++){
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha = senha + caracteres.charAt(indiceAleatorio);
}
return senha;
}

module.exports = geradorDeSenhas