const geradorDeSenhas = require("./geradorDeSenhas")

const tamanhoDaSenha = 8;
const senhaAleatoria = geradorDeSenhas(tamanhoDaSenha)

console.log(senhaAleatoria)