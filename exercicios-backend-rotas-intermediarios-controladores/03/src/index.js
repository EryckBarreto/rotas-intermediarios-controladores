const express = require("express");
const app = express();
const roteador = require("./roteador"); // Importar o roteador

// Usar o roteador no aplicativo
app.use(roteador);

app.listen(8000);
