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
    resposta.send(professores);
});
// localhost:3000/professores/1
app.get('/professores/:id', (requisicao, resposta) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id);
    });
    resposta.send(professorEncontrado);
});

app.listen(3000);