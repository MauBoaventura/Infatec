//CONTROLLERS
const moment = require("moment")

const {
    User,
    Disciplina,
    Turma
} = require('../models');



//Criações
exports.postEsqueceu = async (req, res) => {
    res.status(200).render("view/login/login", {
        msg: "Email enviado ao usuário"
    })

}
exports.post = async (req, res) => {
    const {
        email,
        senha
    } = req.body;

    const usuario = await User.findOne({
        where: {
            email: email
        }
    });

    //Se o usuario não existe ou senha errada
    if (usuario === null || usuario.senha != senha) {
        res.status(400).render("view/login/login", {
            msg: "Usuario não existe ou senha errada"
        })
    } else {
        if (usuario.isDirecao) {
            res.status(200).redirect("/direcao")
        }
        if (usuario.isDocente) {
            res.status(400).render("view/login/login", {
                msg: "Usuario é Docente! Acesso negado"
            })
        }
        if (usuario.isAluno) {
            res.status(400).render("view/login/login", {
                msg: "Usuario é Aluno! Acesso negado"
            })
        }
    }

}