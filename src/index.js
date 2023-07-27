const express = require("express");
const {filtrarProfessores, encontrarUmProfessor} = require('./controladores/professores')
const app = express();

const primeiroIntermediario = ((requisicao, resposta, next) => {
    console.log('passei no primeiro intermediário');
    next();
});

const segundoIntermediario = ((requisicao, resposta, next) => {
    console.log('passei no segundo intermediário');
    next();
});

const intermediarioDaRota = ((requisicao, resposta, next) => {
    console.log('passei no intermediário da rota');
    next();
});

// app.use(primeiroIntermediario);
// app.use(segundoIntermediario);


// localhost:3000/professores
app.get('/professores', segundoIntermediario, intermediarioDaRota, filtrarProfessores);
// localhost:3000/professores/1
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);