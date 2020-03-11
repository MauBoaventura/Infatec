const express = require("express");
const router = express.Router();

const controller = require("../controllers/direcao-controller")

const moment = require("moment")

const {
    User,
    Disciplina,
    Turma
} = require('../models');

//Rota principal
router.get('/', (req, res) => {
    res.render('view/direcao/home')
})

//Rota direcao
router.get('/direcao', controller.get_Direcao)

router.get('/altera/:id', controller.get_Alterar)

router.get('/deleta/:id', controller.get_Deletar)








//Rota docente
router.get('/docente', (req, res) => {
    res.render('view/direcao/docente')
})

//Rota aluno
router.get('/aluno', (req, res) => {
    res.render('view/direcao/aluno')
})

//Rota disciplina
router.get('/disciplina', (req, res) => {
    res.render('view/direcao/disciplina')
})

//Rota turma
router.get('/turma', (req, res) => {
    res.render('view/direcao/turma')

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
router.post('/alterar', controller.post_Alterar)

//Atualiza dados do aluno
router.post('/alterar/aluno', controller.post_Alterar_Aluno)

//Atualiza dados do docente
router.post('/alterar/docente', controller.post_Alterar_Docente)

//Atualiza dados de outra direcao
router.post('/alterar/direcao', controller.post_Alterar_Direcao)

//Atualiza dados da disciplina
router.post('/alterar/disciplina', controller.post_Alterar_Disciplina)

//Atualiza dados da turma
router.post('/alterar/turma', controller.post_Alterar_Turma)

module.exports = router;