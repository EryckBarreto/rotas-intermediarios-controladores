const express = require('express');
const app = express();
const { vezDeJogar, removerJogador, adicionarJogador } = require("./controladores/gerirJogadores")
let contador = 0;


app.get("/", vezDeJogar);
app.get("/remover/", removerJogador);
app.get("/adicionar/", adicionarJogador);


app.listen(8000);