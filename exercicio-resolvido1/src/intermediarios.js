const validarSenha = ((requisicao, resposta, next) => {
    const {senha} = requisicao.query;

    if (!senha) {
        return resposta.send("Senha não informada");
    };

    if (senha !== "carros123") {
        return resposta.send("A senha está incorreta");
    };

    next();

});

module.exports = {
    validarSenha
}