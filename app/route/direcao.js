const express = require("express");
const router = express.Router();

const controller = require("../controllers/direcao-controller")

const moment = require("moment")

const {
    User,
    Disciplina,
    Turma,
    Aluno_turma,
    Docente_disciplina,
    Docente_turma
} = require('../models');

//Rota principal
router.get('/', (req, res) => {
    res.render('view/direcao/home')
})


//Rota Genérica
router.get('/altera/:id', controller.get_Alterar)
router.get('/deleta/:id', controller.get_Deletar)
router.post('/alterar', controller.post_Alterar)




//ROTA DIREÇÃO
//              Exibe todos os Diretores
router.get('/direcao', controller.get_Direcao)
//              Cadastra novo diretor GET
router.get('/cadastrar/direcao', controller.get_Cadastro_Direcao)
//              Cadastra novo diretor
router.post('/cadastrar/direcao', controller.post_Cadastro_Direcao)




//ROTA DOCENTE
//              Exibe todos os Docentes
router.get('/docente', controller.get_Docente)
//              Cadastra novo docente GET
router.get('/cadastrar/docente', controller.get_Cadastro_Docente)
//              Cadastra novo docente
router.post('/cadastrar/docente', controller.post_Cadastro_Docente)





//ROTA ALUNO
//              Exibe todos os Docentes
router.get('/aluno', controller.get_Aluno)
//              Cadastra novo docente GET
router.get('/cadastrar/aluno', controller.get_Cadastro_Aluno)
//              Cadastra novo docente
router.post('/cadastrar/aluno', controller.post_Cadastro_Aluno)




//Rota disciplina
//              Exibe todas as disciplinas
router.get('/disciplina', controller.get_Disciplina)
//              Cadastra nova disciplina GET
router.get('/cadastrar/disciplina', controller.get_Cadastro_Disciplina)
//              Cadastra nova disciplina
router.post('/cadastrar/disciplina', controller.post_Cadastro_Disciplina)
//              Atualizar dados da disciplina GET
router.get('/alterar/disciplina/:id', controller.get_Alterar_Disciplina)
//              Atualiza dados da disciplina
router.post('/alterar/disciplina/', controller.post_Alterar_Disciplina)
//              Deleta disciplina
router.get('/deletar/disciplina/:id', controller.get_Deletar_Disciplina)





//Rota turma
//              Exibe todas as turmas
router.get('/turma', controller.get_Turma)
//              Cadastra nova turma GET
router.get('/cadastrar/turma', controller.get_Cadastro_Turma)
//              Cadastra nova turma
router.post('/cadastrar/turma', controller.post_Cadastro_Turma)
//              Atualizar dados da turma GET
router.get('/alterar/turma/:id', controller.get_Alterar_Turma)
//              Atualiza dados da turma
router.post('/alterar/turma', controller.post_Alterar_Turma)
//              Deleta turma
router.get('/deletar/turma/:id', controller.get_Deletar_Turma)



//Atualiza dados do usuario diretor
// router.post('/alterar', controller.post_Alterar)
router.get('/teste', controller.get_Test)
router.post('/teste', controller.post_Test)

module.exports = router;