const express = require("express");
const router = express.Router();

const {
    User
} = require('../models');

router.get('/', (req, res) => {
    
})

router.post('/', async (req, res) => {
    const {
        nome,
        cpf,
        nascimento,
        email,
        senha
    } = req.body;

    const project = await User.findOne({
        where: {
            email: email
        }
    });
    console.log(project.password)
    res.status(200).send("User")

})

module.exports = router;