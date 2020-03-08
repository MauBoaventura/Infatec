const express = require('express');
const bodyParser = require("body-parser")
const {
    User
} = require('./models');


// User.create({
//     name: 'Claudio',
//     email: 'clasudio@rocketseat.com.br',
//     password: '123456'
// });

const app = express();

app.use(express.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

//Importa arquivos das rotas
const login = require("./route/login")
const direcao = require("./route/direcao")
const docente = require("./route/docente")
const aluno = require("./route/aluno")

//Rotas
app.use("/login", login)
app.use("/direcao", direcao)
app.use("/docente", docente)
app.use("/aluno", aluno)


module.exports = app;

