const express = require('express');
const app = express();
const {filtrarCarro, buscarCarro} = require('./controladores/carros')
const {validarSenha} = require("./intermediarios");

app.use(validarSenha);

app.get('/carros', filtrarCarro);
app.get('/carros/:id', buscarCarro);

app.listen(3000);