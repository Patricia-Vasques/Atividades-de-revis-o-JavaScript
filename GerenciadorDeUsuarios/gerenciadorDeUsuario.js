const fs = require("fs");

let usuarios = carregarUsuarios();

function cadastrarNovoUsuario(novoUsuario) {
  const { email } = novoUsuario;

  // Verificar se o email já está sendo utilizado
  const emailExistente = usuarios.find((usuario) => usuario.email === email);
  if (emailExistente) {
    return "Este email já está sendo utilizado!";
  }

  // Adicionar o novo usuário à lista de usuários e salvar no arquivo
  usuarios.push(novoUsuario);
  salvarUsuarios(usuarios);

  return "Usuário cadastrado com sucesso!";
}

function fazerLogin(email, senha) {
  const usuario = usuarios.find((u) => u.email === email);

  if (!usuario) {
    return "Usuário não encontrado";
  }

  if (usuario.senha !== senha) {
    return "Senha incorreta";
  }

  return "Login realizado com sucesso";
}

function excluirUsuario(email, senha) {
  const usuarioIndex = usuarios.findIndex((u) => u.email === email);

  if (usuarioIndex === -1) {
    return "Usuário não encontrado";
  }

  if (usuarios[usuarioIndex].senha !== senha) {
    return "Senha incorreta";
  }

  usuarios.splice(usuarioIndex, 1);
  salvarUsuarios(usuarios);

  return "Usuário excluído com sucesso";
}

function carregarUsuarios() {
  try {
    const usuariosJSON = fs.readFileSync("usuarios.json", "utf-8");
    return JSON.parse(usuariosJSON);
  } catch (error) {
    return [];
  }
}

function salvarUsuarios(usuarios) {
  const usuariosJSON = JSON.stringify(usuarios);
  fs.writeFileSync("usuarios.json", usuariosJSON);
}

module.exports = { cadastrarNovoUsuario, fazerLogin, excluirUsuario };