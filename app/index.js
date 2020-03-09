const express = require('express');
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const {
    User
} = require('./models');
const path = require('path')

const app = express();

//Template engine

app.set('views', path.join(__dirname, 'views'));
// console.log(__dirname);

app.engine('handlebars', handlebars({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main',
    partialsDir: [
        'views/partials'
    ]
}))
app.set('view engine', 'handlebars')

//Body-parser
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