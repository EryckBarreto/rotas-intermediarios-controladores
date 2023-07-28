// roteador.js
const express = require("express");
const roteador = express.Router();
const { listarImoveis, buscarImovel } = require("./controladores/imoveis");

// Configurar as rotas
roteador.get("/imoveis", listarImoveis);
roteador.get("/imoveis/:id", buscarImovel);

module.exports = roteador;
