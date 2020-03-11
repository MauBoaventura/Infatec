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
            nascimento: moment(dados.nascimento, "YYYY-MM-DD").format("DD/MM/YYYY")
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
            nascimento: moment(dados.nascimento, "YYYY-MM-DD").format("DD/MM/YYYY")
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
            nascimento: moment(dados.nascimento, "YYYY-MM-DD").format("DD/MM/YYYY")
        }
    })

    // let data = moment(resp[0].nascimento, "YYYY-MM-DD");
    // console.log(data.format("DD-MM-YYYY"))


    // console.log(resp)


    res.render('view/direcao/aluno/aluno', {
        usuario: resp
    })



}

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
            nascimento: moment(dados.nascimento, "YYYY-MM-DD").format("DD/MM/YYYY"),
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

    req.body.nascimento = moment(nascimento, "DD/MM/YYYY")
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

    req.body.nascimento = moment(nascimento, "DD/MM/YYYY")
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

    req.body.nascimento = moment(nascimento, "DD/MM/YYYY")
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

    req.body.criacao = moment(criacao, "DD/MM/YYYY")
    try {
        // console.log(req.body)
        await Disciplina.create(req.body)
        res.status(201).send(req.body)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.post_Cadastro_Turma = async (req, res) => {
    const {
        nome,
        ano,
        criacao
    } = req.body;

    req.body.criacao = moment(criacao, "DD/MM/YYYY")
    try {
        // console.log(req.body)
        await Turma.create(req.body)
        res.status(201).send(req.body)
    } catch (error) {
        res.status(400).send(error)
    }
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

    req.body.criacao = moment(criacao, "DD/MM/YYYY")

    try {
        await Disciplina.update(req.body, {
            where: {
                id: id
            }
        });
        console.log(id)
        console.log(nome)
        console.log(criacao)
        res.status(200).send(req.body)
    } catch (error) {

        res.status(400).send(error)
    }
}

exports.post_Alterar_Turma = async (req, res) => {
    const {
        id,
        nome,
        ano,
        criacao
    } = req.body;

    req.body.criacao = moment(criacao, "DD/MM/YYYY")

    try {
        await Turma.update(req.body, {
            where: {
                id: id
            }
        });
        res.status(200).send(req.body)
    } catch (error) {

        res.status(400).send(error)
    }

}
// exports.post_Alterar_Disciplina = {}

// exports.post_Alterar_Aluno = async (req, res) => {
//     const {
//         id,
//         nome,
//         cpf,
//         nascimento,
//         email,
//         senhaAntiga,
//         senhaNova
//     } = req.body;

//     console.log(nome)
//     console.log(cpf)
//     console.log(nascimento)
//     console.log(email)
//     console.log(senhaAntiga)
//     console.log(senhaNova)

//     req.body.nascimento = moment(nascimento, "DD/MM/YYYY")

//     //Pesquisa o usuario existente
//     const usuario = await User.findOne({
//         where: {
//             id: id
//         }
//     })

//     //Verifica as senhas
//     if (usuario.senha == req.body.senhaAntiga) {
//         console.log("As senhas conferem")

//         //Verifica email
//         const usuarioEmail = await User.findOne({
//             where: {
//                 email: email
//             }
//         })

//         //Verifica se o email esta sendo usado
//         if (usuarioEmail === null || usuarioEmail.email == email) {
//             console.log('Email não cadastrado, pode prosseguir com a atualizacao');
//             let objAtualizado = {
//                 nome: nome,
//                 cpf: cpf,
//                 nascimento: req.body.nascimento,
//                 email: email,
//                 senha: senhaNova
//             }
//             await User.update(objAtualizado, {
//                 where: {
//                     id: id
//                 }
//             });
//             res.status(200).send(req.body)

//         } else {
//             res.status(400).send('Email já usado')
//         }
//     } else {
//         console.log("Senha errada")
//         res.status(400).send('Senha errada')
//     }

// }

// exports.post_Alterar_Docente = async (req, res) => {
//     const {
//         id,
//         nome,
//         cpf,
//         nascimento,
//         email,
//         senhaAntiga,
//         senhaNova
//     } = req.body;

//     console.log(nome)
//     console.log(cpf)
//     console.log(nascimento)
//     console.log(email)
//     console.log(senhaAntiga)
//     console.log(senhaNova)

//     req.body.nascimento = moment(nascimento, "DD/MM/YYYY")

//     //Pesquisa o usuario existente
//     const usuario = await User.findOne({
//         where: {
//             id: id
//         }
//     })

//     //Verifica as senhas
//     if (usuario.senha == req.body.senhaAntiga) {
//         console.log("As senhas conferem")

//         //Verifica email
//         const usuarioEmail = await User.findOne({
//             where: {
//                 email: email
//             }
//         })

//         //Verifica se o email esta sendo usado
//         if (usuarioEmail === null || usuarioEmail.email == email) {
//             console.log('Email não cadastrado, pode prosseguir com a atualizacao');
//             let objAtualizado = {
//                 nome: nome,
//                 cpf: cpf,
//                 nascimento: req.body.nascimento,
//                 email: email,
//                 senha: senhaNova
//             }
//             await User.update(objAtualizado, {
//                 where: {
//                     id: id
//                 }
//             });
//             res.status(200).send(req.body)

//         } else {
//             res.status(400).send('Email já usado')
//         }
//     } else {
//         console.log("Senha errada")
//         res.status(400).send('Senha errada')
//     }

// }

// exports.post_Alterar = async (req, res) => {
//     // res.status(400).render('view/login/login')

// }