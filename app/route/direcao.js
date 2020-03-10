const express = require("express");
const router = express.Router();

const controller = require("../controllers/direcao-controller")

const moment = require("moment")

const {
    User,
    Disciplina,
    Turma
} = require('../models');

router.get('/', (req, res) => {
    res.render('views')
})
//Cadastra novo diretor
router.post('/cadastrar/direcao', controller.post_Cadastro_Direcao)

//Cadastra novo docente
router.post('/cadastrar/docente', controller.post_Cadastro_Docente)

//Cadastra novo aluno
router.post('/cadastrar/aluno', controller.post_Cadastro_Docente)

//Cadastra nova disciplina
router.post('/cadastrar/disciplina', controller.post_Cadastro_Disciplina)

//Cadastra nova turma
router.post('/cadastrar/turma', controller.post_Cadastro_Turma)



//Atualiza dados do usuario diretor
router.put('/alterar', controller.put_Alterar)

//Atualiza dados do aluno
router.put('/alterar/aluno', controller.put_Alterar_Aluno)

//Atualiza dados do docente
router.put('/alterar/docente', controller.put_Alterar_Docente)

//Atualiza dados de outra direcao
router.put('/alterar/direcao', controller.put_Alterar_Direcao)

//Atualiza dados da disciplina
router.put('/alterar/disciplina', controller.put_Alterar_Disciplina)

//Atualiza dados da turma
router.put('/alterar/turma', controller.put_Alterar_Turma)

module.exports = router;