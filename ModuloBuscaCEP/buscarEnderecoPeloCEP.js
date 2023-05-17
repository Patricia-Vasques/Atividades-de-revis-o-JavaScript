function buscarEnderecoPeloCEP(cep){
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(function(response){
        if(response.ok){
            return response.json();
        }else {
            throw new Error("Erro ao fazer a busca do endereço pelo CEP");
        }
    })
    .then(function(data){
        if(data.erro){
            throw new Error("Verifique se o CEP esta correto!")
        }else{
            return{
                cep: data.cep,
                logradouro: data.logradouro,
                bairro: data.bairro,
                localidade: data.localidade,
                uf: data.uf
            };
        }
    })
    .catch(function(error){
        throw new Error(error.message);
    });
}

module.exports = buscarEnderecoPeloCEP;