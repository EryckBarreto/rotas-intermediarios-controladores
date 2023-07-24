const express = require("express");
const app = express();

app.get('/', (requisicao, resposta) => {
    console.log(requisicao);
    resposta.send("Página Inicial");
})

app.listen(3000);