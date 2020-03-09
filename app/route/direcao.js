const express = require("express");
const router = express.Router();

const moment = require("moment")

const {
    User
} = require('../models');

router.get('/', (req, res) => {
    res.send("Direcao")
})
//Cadastra novo diretor
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

//Cadastra novo docente
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

//Cadastra novo aluno
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

//Altera dados do usuario diretor
router.post('/alterar', async (req, res) => {
    const {
        id,
        nome,
        cpf,
        nascimento,
        email,
        senhaAntiga,
        senhaNova
    } = req.body;

    console.log(nome)
    console.log(cpf)
    console.log(nascimento)
    console.log(email)
    console.log(senhaAntiga)
    console.log(senhaNova)

    req.body.nascimento = moment(nascimento, "DD/MM/YYYY")

    //Pesquisa o usuario existente
    const usuario = await User.findOne({
        where: {
            id: id
        }
    })

    //Verifica as senhas
    if (usuario.senha == req.body.senhaAntiga) {
        console.log("As senhas conferem")

        //Verifica email
        const usuarioEmail = await User.findOne({
            where: {
                email: email
            }
        })

        //Verifica se o email esta sendo usado ou é o mesmo atual
        if (usuarioEmail === null || usuarioEmail.email == email) {
            console.log('Email não cadastrado, pode prosseguir com a atualizacao');
            let objAtualizado = {
                nome: nome,
                cpf: cpf,
                nascimento: req.body.nascimento,
                email: email,
                senha: senhaNova
            }
            await User.update(objAtualizado, {
                where: {
                    id: id
                }
            });
            res.status(200).send('Objeto atualizado')
        } else {
            res.status(400).send('Email já usado')
        }
    } else {
        console.log("Senha errada")
        res.status(400).send('Senha errada')
    }

})

//Altera dados do usuario
router.post('/alterar/aluno', async (req, res) => {
    const {
        id,
        nome,
        cpf,
        nascimento,
        email,
        senhaAntiga,
        senhaNova
    } = req.body;

    console.log(nome)
    console.log(cpf)
    console.log(nascimento)
    console.log(email)
    console.log(senhaAntiga)
    console.log(senhaNova)

    req.body.nascimento = moment(nascimento, "DD/MM/YYYY")

    //Pesquisa o usuario existente
    const usuario = await User.findOne({
        where: {
            id: id
        }
    })

    //Verifica as senhas
    if (usuario.senha == req.body.senhaAntiga) {
        console.log("As senhas conferem")

        //Verifica email
        const usuarioEmail = await User.findOne({
            where: {
                email: email
            }
        })

        //Verifica se o email esta sendo usado
        if (usuarioEmail === null || usuarioEmail.email == email) {
            console.log('Email não cadastrado, pode prosseguir com a atualizacao');
            let objAtualizado = {
                nome: nome,
                cpf: cpf,
                nascimento: req.body.nascimento,
                email: email,
                senha: senhaNova
            }
            await User.update(objAtualizado, {
                where: {
                    id: id
                }
            });
        } else {
            res.status(400).send('Email já usado')
        }
    } else {
        console.log("Senha errada")
        res.status(400).send('Senha errada')
    }

})

//Altera dados do usuario
router.post('/alterar/docente', async (req, res) => {
    const {
        id,
        nome,
        cpf,
        nascimento,
        email,
        senhaAntiga,
        senhaNova
    } = req.body;

    console.log(nome)
    console.log(cpf)
    console.log(nascimento)
    console.log(email)
    console.log(senhaAntiga)
    console.log(senhaNova)

    req.body.nascimento = moment(nascimento, "DD/MM/YYYY")

    //Pesquisa o usuario existente
    const usuario = await User.findOne({
        where: {
            id: id
        }
    })

    //Verifica as senhas
    if (usuario.senha == req.body.senhaAntiga) {
        console.log("As senhas conferem")

        //Verifica email
        const usuarioEmail = await User.findOne({
            where: {
                email: email
            }
        })

        //Verifica se o email esta sendo usado
        if (usuarioEmail === null || usuarioEmail.email == email) {
            console.log('Email não cadastrado, pode prosseguir com a atualizacao');
            let objAtualizado = {
                nome: nome,
                cpf: cpf,
                nascimento: req.body.nascimento,
                email: email,
                senha: senhaNova
            }
            await User.update(objAtualizado, {
                where: {
                    id: id
                }
            });
        } else {
            res.status(400).send('Email já usado')
        }
    } else {
        console.log("Senha errada")
        res.status(400).send('Senha errada')
    }

})

//Altera dados do usuario
router.post('/alterar/direcao', async (req, res) => {
    const {
        id,
        nome,
        cpf,
        nascimento,
        email,
        senhaAntiga,
        senhaNova
    } = req.body;

    console.log(nome)
    console.log(cpf)
    console.log(nascimento)
    console.log(email)
    console.log(senhaAntiga)
    console.log(senhaNova)

    req.body.nascimento = moment(nascimento, "DD/MM/YYYY")

    //Pesquisa o usuario existente
    const usuario = await User.findOne({
        where: {
            id: id
        }
    })

    //Verifica as senhas
    if (usuario.senha == req.body.senhaAntiga) {
        console.log("As senhas conferem")

        //Verifica email
        const usuarioEmail = await User.findOne({
            where: {
                email: email
            }
        })

        //Verifica se o email esta sendo usado
        if (usuarioEmail === null || usuarioEmail.email == email) {
            console.log('Email não cadastrado, pode prosseguir com a atualizacao');
            let objAtualizado = {
                nome: nome,
                cpf: cpf,
                nascimento: req.body.nascimento,
                email: email,
                senha: senhaNova
            }
            await User.update(objAtualizado, {
                where: {
                    id: id
                }
            });
        } else {
            res.status(400).send('Email já usado')
        }
    } else {
        console.log("Senha errada")
        res.status(400).send('Senha errada')
    }

})


module.exports = router;