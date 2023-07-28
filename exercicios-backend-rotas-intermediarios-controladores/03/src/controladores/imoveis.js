const imoveis = require("../dados/imoveis");

const listarImoveis = (requisicao, resposta) => {
    resposta.send(imoveis);
};

const buscarImovel = (requisicao, resposta) => {
    const imovelEncontrato = imoveis.find((imovel) => {
        return imovel.id === Number(requisicao.params.id);
    });
    if (imovelEncontrato) {
        resposta.send(imovelEncontrato)
    } else {
        resposta.send(`Imóvel não encontrado, tente novamente`);
    }
};

module.exports = {
    listarImoveis,
    buscarImovel
}