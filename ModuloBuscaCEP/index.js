const buscarEnderecoPeloCEP = require('./buscarEnderecoPeloCEP');

function exemplo() {
  const cep = '88020100'; 

  buscarEnderecoPeloCEP(cep)
    .then(function(endereco) {
      console.log(endereco);
    })
    .catch(function(error) {
      console.error(error.message);
    });
}

exemplo();