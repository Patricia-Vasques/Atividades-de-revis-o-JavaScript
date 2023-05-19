const fs = require("fs")

function cadastrarNovoUsuario(novoUsuario){
    const usuarios = carregarUsuarios();
}

//vamos verificar se o email cadastrado já existe
const emailExitente = usuarios.find((usuario) => usuario.email === novoUsuario.email);
if (emailExitente) {
    return "Este email já está cadastrado!";
} else{

//Para adicionar o usuário novo cadastrado em uma lista  de usuário e salvar na lista de usuarios no arquivo
usuarios.push(novoUsuario);
salvarUsuarios(usuarios);

return "Usuário cadastrado com sucesso!"
}

function login(email, senha){
    const usuarios = carregarUsuarios();

    //verificação da existência do email
    const novoUsuario = usuarios.find((usuario) => usuario.email === email);
    if(!novoUsuario){
        return "Email não encontrado";
    }
    //verificação se a senha fornecida está correta
    if(usuario.senha !== senha){
        return "Senha não confere!"
    } else {
        return "Login realizado com sucesso"
    }

    function excluirUsuario(email,senha){
        const usuarios = carregarUsuarios();

        //verificação se o email fornecido existe
        const usuarioIndex = usuarios.findIndex((usuario) => usuario.email === email);
        if(usuarioIndex === -1){
            return "Email não encontrado"
        }
        
        //verificação da senha
        if (usuarios[usuarioIndex].senha !== senha){
            return "Senha não confere"
        }

        usuarios.splice(usuariosIndex, 1);
        salvarUsuarios(usuarios);

        return "Sucesso ao excluir o usuário!"
        
    }
}
