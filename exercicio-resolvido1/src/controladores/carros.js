const carros = require('../bancoDeDados');

const buscarCarro = (requisicao, resposta) => {
    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(requisicao.params.id);
    });
    resposta.send(carroEncontrado);
};

const filtrarCarro = (requisicao, resposta) => {
    const {marca, cor} = requisicao.query;
    let resultado = carros;

    if (cor && marca) {
        resultado = carros.filter((carro) => {
            return carro.marca === marca && carro.cor === cor;
        });
    } else if (cor || marca) {
        resultado = carros.filter((carro) => {
            return carro.marca === marca || carro.cor === cor;
        });
    }
    resposta.send(resultado);
};

module.exports = {
    buscarCarro,
    filtrarCarro
};