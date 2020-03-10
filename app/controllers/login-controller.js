//CONTROLLERS
const moment = require("moment")

const {
    User,
    Disciplina,
    Turma
} = require('../models');



//Criações
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
        res.status(400).render("view/login/login")
    } else {
        if (usuario.isDirecao) {
            res.status(200).redirect("/direcao")
        }
        if (usuario.isDocente) {
            res.status(200).redirect("/")
        }
        if (usuario.isAluno) {
            res.status(200).redirect("/")
        }
    }

}