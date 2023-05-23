const gerenciadorDeUsuario = require('./gerenciadorDeUsuario');

// Exemplo de uso das funções
const novoUsuario = { nome: 'Marina', email: 'marina@example.com', senha: 'Senha1234' };

const cadastroResultado = gerenciadorDeUsuario.cadastrarNovoUsuario(novoUsuario);
console.log(cadastroResultado);

const loginResultado = gerenciadorDeUsuario.fazerLogin('marina@example.com', 'Senha1234');
console.log(loginResultado);

const exclusaoResultado = gerenciadorDeUsuario.excluirUsuario('marina@example.com', 'Senha1234');
console.log(exclusaoResultado);