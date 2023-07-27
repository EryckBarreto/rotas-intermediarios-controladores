const jogadores = require("../bancoDeDados")
let contador = 0;
const vezDeJogar = (requisicao, resposta) => {
    resposta.send(`É a vez de ${jogadores[contador]} jogar.`);
    contador++;
    if (contador === jogadores.length) {
        contador = 0;
    };
};

const removerJogador = (requisicao, resposta) => {
    const { indice } = requisicao.query;
    const indiceFormatado = Number(indice);
    if (indiceFormatado > jogadores.length || indice < -1) {
        resposta.send(`Não existe jogador no índice informado ${indiceFormatado} para ser removido.
        `);
    } else {
    jogadores.splice(indiceFormatado, 1);
    resposta.send(jogadores);
    };

};

const adicionarJogador = (requisicao, resposta) => {
    const {indice, nome} = requisicao.query;
    const indiceFormatado = Number(indice);
    const nomeFormatado = nome[0].toUpperCase() + nome.slice(1).toLowerCase();

    if (indiceFormatado > jogadores.length) {
        resposta.send(`O índice informado ${indiceFormatado} não existe no array. Novo jogador não foi adicionado.
        `);
    } else if (indice) {
        jogadores.splice(indiceFormatado, 0, nomeFormatado);
        resposta.send(jogadores);
    } else {
        jogadores.push(nomeFormatado);
        resposta.send(jogadores);
    };
};

module.exports = {
    vezDeJogar,
    removerJogador,
    adicionarJogador
}