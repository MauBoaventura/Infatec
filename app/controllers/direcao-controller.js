//CONTROLLERS
const moment = require("moment")

const {
    User,
    Disciplina,
    Turma,
    Aluno_turma,
    Turma_docente_disciplina
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

    let turmas_main = turmas.map((turma) => {
        return {
            id: turma.id,
            nome: turma.nome,
            ano: turma.ano,
            criacao: moment(turma.criacao, "YYYY-MM-DD").format("DD-MM-YYYY")
        }
    })

    let nomes_docentes = turmas.map(async (turma) => {
        let turma_docente_disciplinas = await Turma_docente_disciplina.findAll({
            where: {
                id_turma: turma.id
            }
        })

        let ids_docentes = turma_docente_disciplinas.map((item) => {
            return item.id_docente;
        })

        let nomes_docentes = ids_docentes.map(async (id_docente) => {

            let docente_turma = await User.findAll({
                where: {
                    id: id_docente
                }
            })

            let nomes = docente_turma.map((docente) => {
                return docente.nome
            })

            const b = await Promise.all(nomes)

            return b;
        })
        //Lista de nomes da turma
        const a = await Promise.all(nomes_docentes)
        return a;

    })

    //Nomes dos docentes para cada turma
    nomes_docentes = await Promise.all(nomes_docentes)


    let nomes_disciplinas = turmas.map(async (turma) => {
        let turma_docente_disciplinas = await Turma_docente_disciplina.findAll({
            where: {
                id_turma: turma.id
            }
        })

        let ids_disciplina = turma_docente_disciplinas.map((item) => {
            return item.id_disciplina;
        })

        let nomes_disciplinas = ids_disciplina.map(async (id_disciplina) => {

            let disciplina_turma = await Disciplina.findAll({
                where: {
                    id: id_disciplina
                }
            })

            let nomes = disciplina_turma.map((disciplina) => {
                return disciplina.nome
            })

            // console.log(nomes)
            return await Promise.all(nomes);
        })
        //Lista de nomes da turma
        let nomes_disciplinas1 = await Promise.all(nomes_disciplinas);
        return nomes_disciplinas1

        // const valores = await Promise.all(promessas);

    })

    //Nomes das disciplinas para cada turma
    nomes_disciplinas = await Promise.all(nomes_disciplinas)


    console.log(turmas_main)

    var t = turmas.map((index) => {
        return {
            docentes: nomes_docentes[turmas.indexOf(index)],
            disciplinas: nomes_disciplinas[turmas.indexOf(index)],
        }
    })


    // console.log(docentes_disciplina)
    console.log(t)


    res.render('view/direcao/turma/turma', {
        turma: turmas_main,
        docentes_disciplina: t
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

    Docente_disciplina.create({
        id_disciplina: req.body.id_dis,
        id_docente: req.body.id_doc
    })


    res.status(200).render('view/direcao/turma/teste', {
        // turma: resp
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
        criacao,
        Insere_Docente,
        Insere_Disciplinas,
        Insere_Alunos
    } = req.body;

    req.body.criacao = moment(criacao, "DD-MM-YYYY")

    let docentes = (Insere_Docente.split(";"))
    docentes = docentes.map((item => {
        return parseInt(item)
    }))

    let disciplinas = Insere_Disciplinas.split(";")
    disciplinas = disciplinas.map((item) => {
        return item.replace("]", "").replace("[", "").split(",")
    });
    disciplinas = disciplinas.map((item) => {
        return item.map((valor) => {
            return parseInt(valor)
        })
    })

    let alunos = (Insere_Alunos.split(","))
    alunos = alunos.map((item => {
        return parseInt(item)
    }))
    // console.log(docentes)
    // console.log(disciplinas)
    // console.log(alunos)


    // console.log(req.body)
    try {
        var novaTurma = await Turma.create(req.body)
        console.log(novaTurma.id)

        //Coloca os alunos na turma criada
        alunos.map(async (item) => {
            await Aluno_turma.create({
                id_aluno: item,
                id_turma: novaTurma.id
            })
        })


        //Cria a relação entre turma docente e disciplinas
        for (let index = 0; index < docentes.length; index++) {
            let id_docente = docentes[index]
            disciplinas[index].map(async (item) => {
                await Turma_docente_disciplina.create({
                    id_turma: novaTurma.id,
                    id_docente: id_docente,
                    id_disciplina: item
                })

            })
        }


        // //Coloca os docentes na turma criada
        // docentes.map(async (item) => {
        //     await Docente_turma.create({
        //         id_docente: item,
        //         id_turma: novaTurma.id
        //     })
        // })

        res.status(201).redirect('/direcao')
    } catch (err) {
        res.status(400).render('view/direcao/home', {
            msg: err.errors
        })
    }

    // res.status(201).redirect('/direcao')
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


const Handlebars = require("handlebars");
Handlebars.registerHelper('multi_list', async function (context, options) {
    try {
        var html = "";
        var texto = 'asindajksnaoknsndasl'
        dados




        html = html + '<li class = "list-group-item">' + "docenteNome" + ' / ' + "disciplinaNome" +
            '</li>'

        return html;
    } catch (err) {
        return 'peguei'
    }

});

function outra(params) {
    
}