const somar = (requisicao, resposta) => {
    const {num1, num2} = requisicao.query;
    let numeroFormatado1 = Number(num1);
    let numeroFormatado2 = Number(num2);

    let resultado = numeroFormatado1 + numeroFormatado2;
    resposta.send(resultado.toString());
};

const subtrair = (requisicao, resposta) => {
    const {num1, num2} = requisicao.query;
    let numeroFormatado1 = Number(num1);
    let numeroFormatado2 = Number(num2);

    let resultado = numeroFormatado1 - numeroFormatado2;
    resposta.send(resultado.toString());
};

const multiplicar = (requisicao, resposta) => {
    const {num1, num2} = requisicao.query;
    let numeroFormatado1 = Number(num1);
    let numeroFormatado2 = Number(num2);

    let resultado = numeroFormatado1 * numeroFormatado2;
    resposta.send(resultado.toString());
};

const dividir = (requisicao, resposta) => {
    const {num1, num2} = requisicao.query;
    let numeroFormatado1 = Number(num1);
    let numeroFormatado2 = Number(num2);

    let resultado = numeroFormatado1 / numeroFormatado2;
    resposta.send(resultado.toString());
};

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}