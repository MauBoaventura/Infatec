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
    User.create(req.body).then((result) => {
        console.log("Inserido com sucesso")
        res.status(200).send(req.body)
    }).catch((err) => {
        res.status(400).send(err.errors)
    });
    // User.


    // res.status(200).send(req.body)
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
        res.status(200).send(req.body)
    }).catch((err) => {
        res.status(400).send(err.errors)
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
    User.create(req.body).then((result) => {
        console.log("Inserido com sucesso")
        res.status(200).send(req.body)
    }).catch((err) => {
        res.status(400).send(err.errors)
    });
    // User.


    // res.status(200).send(req.body)
}

exports.post_Cadastro_Disciplina = async (req, res) => {
    const {
        criacao
    } = req.body;

    req.body.criacao = moment(criacao, "DD/MM/YYYY")
    try {
        // console.log(req.body)
        await Disciplina.create(req.body)
        res.status(200).send(req.body)
    } catch (error) {
        res.status(400).send(error)
    }
}

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

}

exports.post_Alterar_Aluno = async (req, res) => {
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
            res.status(200).send(req.body)

        } else {
            res.status(400).send('Email já usado')
        }
    } else {
        console.log("Senha errada")
        res.status(400).send('Senha errada')
    }

}

exports.post_Alterar_Docente = async (req, res) => {
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
            res.status(200).send(req.body)

        } else {
            res.status(400).send('Email já usado')
        }
    } else {
        console.log("Senha errada")
        res.status(400).send('Senha errada')
    }

}

exports.post_Alterar_Direcao = async (req, res) => {
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
            res.status(200).send(objAtualizado)

        } else {
            res.status(400).send('Email já usado')
        }
    } else {
        console.log("Senha errada")
        res.status(400).send('Senha errada')
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

// exports.post_Alterar_Disciplina = {}