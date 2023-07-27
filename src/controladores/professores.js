const professores = require('../bancoDeDados');

const filtrarProfessores = (requisicao, resposta) => {
    const { stack } = requisicao.query;
    let resultado = professores;


    console.log("cheguei no controlador de listagem do professor");

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        });
    };

    resposta.send(resultado);
};

const encontrarUmProfessor = (requisicao, resposta) => {
    console.log('rota para encontrar um professor');
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id);
    });
    resposta.send(professorEncontrado);
};

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
}