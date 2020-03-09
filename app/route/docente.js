const express = require("express");
const router = express.Router();

const moment = require("moment")

const {
    User
} = require('../models');

router.get('/', (req, res) => {
    res.send("docente")
})

router.post('/cadastrar/direcao', async (req, res) => {
    const {
        nome,
        cpf,
        nascimento,
        email,
        senha
    } = req.body;

    console.log(nome)
    console.log(cpf)
    console.log(nascimento)
    console.log(email)
    console.log(senha)

    req.body.nascimento = moment(nascimento, "DD/MM/YYYY")
    req.body.isDirecao = true
    User.create(req.body).then((result) => {
        console.log("Inserido com sucesso")
        res.status(200).send(req.body)
    }).catch((err) => {
        res.status(400).send(err.errors)
    });
    // User.


    // res.status(200).send(req.body)
})
router.post('/cadastrar/docente', async (req, res) => {
    const {
        nome,
        cpf,
        nascimento,
        email,
        senha
    } = req.body;

    console.log(nome)
    console.log(cpf)
    console.log(nascimento)
    console.log(email)
    console.log(senha)

    req.body.nascimento = moment(nascimento, "DD/MM/YYYY")
    req.body.isDocente = true
    User.create(req.body).then((result) => {
        console.log("Inserido com sucesso")
        res.status(200).send(req.body)
    }).catch((err) => {
        res.status(400).send(err.errors)
    });
    // User.


    // res.status(200).send(req.body)
})
router.post('/cadastrar/aluno', async (req, res) => {
    const {
        nome,
        cpf,
        nascimento,
        email,
        senha
    } = req.body;

    console.log(nome)
    console.log(cpf)
    console.log(nascimento)
    console.log(email)
    console.log(senha)

    req.body.nascimento = moment(nascimento, "DD/MM/YYYY")
    req.body.isAluno = true
    User.create(req.body).then((result) => {
        console.log("Inserido com sucesso")
        res.status(200).send(req.body)
    }).catch((err) => {
        res.status(400).send(err.errors)
    });
    // User.


    // res.status(200).send(req.body)
})

module.exports = router;