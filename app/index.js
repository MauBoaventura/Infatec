const express = require('express');
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const path = require('path')

const app = express();

//Template engine
app.set('views', path.join(__dirname, '/views'));

app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts/',
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials'

}))
app.set('view engine', 'handlebars')

//Body-parser
app.use(express.urlencoded({
    extended: false
}));
app.use(bodyParser.json())

//Definindo public
app.use(express.static(path.join(__dirname, 'public')));


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

app.get("/", (req, res) => {
    res.redirect("/login")
})

module.exports = app;