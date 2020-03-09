const express = require("express");
const router = express.Router();

const controller = require("../controllers/direcao-controller")

const moment = require("moment")

const {
    User,
    Disciplina
} = require('../models');

router.get('/', (req, res) => {
    res.send("Direcao")
})
//Cadastra novo diretor
router.post('/cadastrar/direcao', controller.post_Cadastro_Direcao)

//Cadastra novo docente
router.post('/cadastrar/docente', controller.post_Cadastro_Docente)

//Cadastra novo aluno
router.post('/cadastrar/aluno', controller.post_Cadastro_Docente)

//Cadastra nova disciplina
router.post('/cadastrar/disciplina', controller.post_Cadastro_Disciplina)

//Altera dados do usuario diretor
router.post('/alterar', controller.post_Alterar)

//Altera dados do usuario
router.post('/alterar/aluno', controller.post_Alterar_Aluno)

//Altera dados do usuario
router.post('/alterar/docente', controller.post_Alterar_Docente)

//Altera dados do usuario
router.post('/alterar/direcao', controller.post_Alterar_Direcao)

//Altera dados do usuario
router.post('/alterar/disciplina', controller.post_Alterar_Disciplina)

module.exports = router;