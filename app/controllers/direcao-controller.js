//CONTROLLERS
const moment = require("moment")

const {
    User,
    Disciplina,
    Turma
} = require('../models');

//GET
exports.get_Direcao = async (req, res) => {
    let usuarios = await User.findAll({
        where: {
            isDirecao: true
        }
    })
    // .then((result) => {
    //     res.render('view/direcao/direcao', {
    //         usuario: result
    //     })
    // })

    let resp = usuarios.map((dados) => {
        return {
            id: dados.id,
            nome: dados.nome,
            cpf: dados.cpf,
            nascimento: moment(dados.nascimento, "YYYY-MM-DD").format("DD-MM-YYYY")
        }
    })

    // let data = moment(resp[0].nascimento, "YYYY-MM-DD");
    // console.log(data.format("DD-MM-YYYY"))


    // console.log(resp)


    res.render('view/direcao/direcao/direcao', {
        usuario: resp
    })



}

exports.get_Docente = async (req, res) => {
    let usuarios = await User.findAll({
        where: {
            isDocente: true
        }
    })
    // .then((result) => {
    //     res.render('view/direcao/direcao', {
    //         usuario: result
    //     })
    // })

    let resp = usuarios.map((dados) => {
        return {
            id: dados.id,
            nome: dados.nome,
            cpf: dados.cpf,
            nascimento: moment(dados.nascimento, "YYYY-MM-DD").format("DD-MM-YYYY")
        }
    })

    // let data = moment(resp[0].nascimento, "YYYY-MM-DD");
    // console.log(data.format("DD-MM-YYYY"))


    // console.log(resp)


    res.render('view/direcao/docente/docente', {
        usuario: resp
    })



}

exports.get_Aluno = async (req, res) => {
    let usuarios = await User.findAll({
        where: {
            isAluno: true
        }
    })

    let resp = usuarios.map((dados) => {
        return {
            id: dados.id,
            nome: dados.nome,
            cpf: dados.cpf,
            nascimento: moment(dados.nascimento, "YYYY-MM-DD").format("DD-MM-YYYY")
        }
    })


    res.render('view/direcao/aluno/aluno', {
        usuario: resp
    })



}

exports.get_Disciplina = async (req, res) => {
    let disciplinas = await Disciplina.findAll()

    let resp = disciplinas.map((dados) => {
        return {
            id: dados.id,
            nome: dados.nome,
            criacao: moment(dados.criacao, "YYYY-MM-DD").format("DD-MM-YYYY")
        }
    })

    res.render('view/direcao/disciplina/disciplina', {
        disciplina: resp
    })
}

exports.get_Turma = async (req, res) => {
    let turmas = await Turma.findAll()

    let resp = turmas.map((dados) => {
        return {
            id: dados.id,
            criacao: dados.criacao,
            nome: dados.nome,
            criacao: moment(dados.criacao, "YYYY-MM-DD").format("DD-MM-YYYY")
        }
    })

    res.render('view/direcao/turma/turma', {
        turma: resp
    })
}

//TTTTTTTTTTTTTTTTTTTTTTTTEEEEEEEEEEEEEEEEESSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTTTTTTTT
exports.get_Test = async (req, res) => {
    let turmas = await Turma.findAll()

    let resp = turmas.map((dados) => {
        return {
            id: dados.id,
            criacao: dados.criacao,
            nome: dados.nome,
            criacao: moment(dados.criacao, "YYYY-MM-DD").format("DD-MM-YYYY")
        }
    })

    res.render('view/direcao/turma/teste', {
        turma: resp
    })
}
exports.post_Test = async (req, res) => {
    console.log(req.body)
    console.log(req.params)

    res.status(200).render('view/direcao/turma/teste', {
        turma: resp
    })
}


//Modificadores
exports.get_Alterar = async (req, res) => {
    let id = req.params.id;
    console.log("O ID É: " + id)
    let usuarios = await User.findAll({
        where: {
            id: id
        }
    })

    let resp = usuarios.map((dados) => {
        return {
            id: dados.id,
            nome: dados.nome,
            cpf: dados.cpf,
            nascimento: moment(dados.nascimento, "YYYY-MM-DD").format("DD-MM-YYYY"),
            email: dados.email,
            senha: dados.senha,
            isAluno: dados.isAluno,
            isDocente: dados.isDocente,
            isDirecao: dados.isDirecao,
        }
    })

    // let data = moment(resp[0].nascimento, "YYYY-MM-DD");
    // console.log(data.format("DD-MM-YYYY"))


    console.log(resp)
    // console.log(usu)


    res.render('view/direcao/alterar', {
        usuario: resp
    })



}

exports.get_Alterar_Disciplina = async (req, res) => {
    let id = req.params.id;
    console.log("O ID É: " + id)
    let disciplina = await Disciplina.findAll({
        where: {
            id: id
        }
    })

    let resp = disciplina.map((dados) => {
        return {
            id: dados.id,
            nome: dados.nome,
            criacao: moment(dados.criacao, "YYYY-MM-DD").format("DD-MM-YYYY"),
        }
    })
    console.log(resp)
    res.render('view/direcao/disciplina/alterar', {
        disciplina: resp
    })


}

exports.get_Alterar_Turma = async (req, res) => {
    let id = req.params.id;
    console.log("O ID É: " + id)
    let turma = await Turma.findAll({
        where: {
            id: id
        }
    })

    let resp = turma.map((dados) => {
        return {
            id: dados.id,
            nome: dados.nome,
            ano: dados.ano,
            criacao: moment(dados.criacao, "YYYY-MM-DD").format("DD-MM-YYYY"),
        }
    })
    console.log(resp)
    res.render('view/direcao/turma/alterar', {
        turma: resp
    })


}

exports.get_Deletar = async (req, res) => {
    try {
        let id = req.params.id;
        await User.destroy({
            where: {
                id: id
            }
        })
        res.redirect('/direcao')

    } catch (error) {
        res.render('view/direcao/home', {
            msg: error
        })
    }
}

exports.get_Deletar_Disciplina = async (req, res) => {
    try {
        let id = req.params.id;
        await Disciplina.destroy({
            where: {
                id: id
            }
        })
        res.redirect('/direcao')

    } catch (error) {
        res.render('view/direcao/home', {
            msg: error
        })
    }
}

exports.get_Deletar_Turma = async (req, res) => {
    try {
        let id = req.params.id;
        await Turma.destroy({
            where: {
                id: id
            }
        })
        res.redirect('/direcao')

    } catch (error) {
        res.render('view/direcao/home', {
            msg: error
        })
    }
}



//Cadastros
exports.get_Cadastro_Direcao = async (req, res) => {
    try {
        res.render('view/direcao/direcao/criar')

    } catch (error) {
        res.render('view/direcao/home', {
            msg: error
        })
    }
}

exports.get_Cadastro_Docente = async (req, res) => {
    try {
        res.render('view/direcao/docente/criar')

    } catch (error) {
        res.render('view/direcao/home', {
            msg: error
        })
    }
}

exports.get_Cadastro_Aluno = async (req, res) => {
    try {
        res.render('view/direcao/aluno/criar')

    } catch (error) {
        res.render('view/direcao/home', {
            msg: error
        })
    }
}

exports.get_Cadastro_Disciplina = async (req, res) => {
    try {
        res.render('view/direcao/disciplina/criar')

    } catch (error) {
        res.render('view/direcao/home', {
            msg: error
        })
    }
}

exports.get_Cadastro_Turma = async (req, res) => {
    try {
        let todos_alunos = await User.findAll({
            where: {
                isAluno: true
            }
        })
        let alunos = todos_alunos.map((dados) => {
            return {
                id: dados.id,
                nome: dados.nome,
                cpf: dados.cpf,
                nascimento: moment(dados.nascimento, "YYYY-MM-DD").format("DD-MM-YYYY")
            }
        })


        let todos_docentes = await User.findAll({
            where: {
                isDocente: true
            }
        })
        let docentes = todos_docentes.map((dados) => {
            return {
                id: dados.id,
                nome: dados.nome,
                cpf: dados.cpf,
                nascimento: moment(dados.nascimento, "YYYY-MM-DD").format("DD-MM-YYYY")
            }
        })

        let todas_disciplinas = await Disciplina.findAll()
        let disciplinas = todas_disciplinas.map((dados) => {
            return {
                id: dados.id,
                nome: dados.nome,
                criacao: moment(dados.criacao, "YYYY-MM-DD").format("DD-MM-YYYY")
            }
        })


        res.render('view/direcao/turma/criar', {
            aluno: alunos,
            docente: docentes,
            disciplina: disciplinas
        })


    } catch (error) {
        res.render('view/direcao/home', {
            msg: error
        })
    }
}





//Criações
exports.post_Cadastro_Direcao = async (req, res) => {
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

    req.body.nascimento = moment(nascimento, "DD-MM-YYYY")
    req.body.isDirecao = true
    User.create(req.body).then(() => {
        console.log("Inserido com sucesso")
        res.status(201).redirect('/direcao')
    }).catch((err) => {
        res.status(400).render('view/direcao/home', {
            msg: err.errors
        })
    });
}

exports.post_Cadastro_Docente = async (req, res) => {
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

    req.body.nascimento = moment(nascimento, "DD-MM-YYYY")
    req.body.isDocente = true
    User.create(req.body).then((result) => {
        console.log("Inserido com sucesso")
        res.status(201).redirect('/direcao')
    }).catch((err) => {
        res.status(400).render('view/direcao/home', {
            msg: err.errors
        })
    });

}

exports.post_Cadastro_Aluno = async (req, res) => {
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

    req.body.nascimento = moment(nascimento, "DD-MM-YYYY")
    req.body.isAluno = true
    User.create(req.body).then(() => {
        console.log("Inserido com sucesso")
        res.status(201).redirect('/direcao')
    }).catch((err) => {
        res.status(400).render('view/direcao/home', {
            msg: err.errors
        })
    });
}

exports.post_Cadastro_Disciplina = async (req, res) => {
    const {
        criacao
    } = req.body;

    req.body.criacao = moment(criacao, "DD-MM-YYYY")
    console.log(req.body)
    try {
        // console.log(req.body)
        await Disciplina.create(req.body)
        res.status(201).redirect('/direcao')
    } catch (err) {
        res.status(400).render('view/direcao/home', {
            msg: err.errors
        })
    }
}

exports.post_Cadastro_Turma = async (req, res) => {
    const {
        criacao
    } = req.body;

    req.body.criacao = moment(criacao, "DD-MM-YYYY")

    console.log(req.body)
    // try {
    //     await Turma.create(req.body)
    //     res.status(201).redirect('/direcao')
    // } catch (err) {
    //     res.status(400).render('view/direcao/home', {
    //         msg: err.errors
    //     })
    // }
    res.status(201).redirect('/direcao')

}



//Alterações
exports.post_Alterar = async (req, res) => {
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

    req.body.nascimento = moment(nascimento, "DD-MM-YYYY")

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
            res.status(200).render('view/direcao/home', {
                msg: objAtualizado
            })

        } else {
            res.status(400).render('view/direcao/home', {
                msg: 'Email já usado'
            })
        }
    } else {
        console.log("Senha errada")
        res.status(400).render('view/direcao/home', {
            msg: 'Senha errada'
        })
    }

}

exports.post_Alterar_Disciplina = async (req, res) => {
    const {
        id,
        nome,
        criacao
    } = req.body;

    req.body.criacao = moment(criacao, "DD-MM-YYYY")

    try {
        await Disciplina.update(req.body, {
            where: {
                id: id
            }
        });
        console.log(id)
        console.log(nome)
        console.log(criacao)
        res.status(200).render('view/direcao/home', {
            msg: objAtualizado
        })
    } catch (error) {

        res.status(400).render('view/direcao/home', {
            msg: 'Senha errada'
        })
    }
}

exports.post_Alterar_Turma = async (req, res) => {
    const {
        id,
        nome,
        ano,
        criacao
    } = req.body;

    req.body.criacao = moment(criacao, "DD-MM-YYYY")

    try {
        await Turma.update(req.body, {
            where: {
                id: id
            }
        });
        res.status(200).render('view/direcao/home', {
            msg: objAtualizado
        })
    } catch (error) {

        res.status(400).render('view/direcao/home', {
            msg: 'Senha errada'
        })
    }


}