const express = require("express");
const {filtrarProfessores, encontrarUmProfessor} = require('./controladores/professores')
const app = express();

// localhost:3000/professores
app.get('/professores', filtrarProfessores);
// localhost:3000/professores/1
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);