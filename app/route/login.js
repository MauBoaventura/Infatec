const express = require("express");
const router = express.Router();

const {
    User
} = require('../models');

const controller = require('../controllers/login-controller')

router.get('/', (req, res) => {
    res.render("view/login/login", {

    })
})
router.get('/esqueceu', (req, res) => {
    res.render("view/login/esqueceu", {

    })
})
router.post('/', controller.post)
router.post('/esqueceu', controller.postEsqueceu)



module.exports = router;