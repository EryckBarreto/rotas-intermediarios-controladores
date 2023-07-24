const express = require("express");
const app = express();
const professores = [
    {id: 1, nome: "Guido", stack: "Backend"},
    {id: 2, nome: "Dani", stack: "Frontend"},
    {id: 3, nome: "Diego", stack: "Frontend"},
    {id: 4, nome: "Vidal", stack: "Backend"}
];

// localhost:3000/professores
app.get('/professores', (requisicao, resposta) => {
    const { stack } = requisicao.query;
    let resultado = professores;

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        });
    };

    resposta.send(resultado);
});
// localhost:3000/professores/1
app.get('/professores/:id', (requisicao, resposta) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id);
    });
    resposta.send(professorEncontrado);
});

app.listen(3000);