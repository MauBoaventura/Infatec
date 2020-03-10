const express = require("express");
const router = express.Router();

const {
    User
} = require('../models');

const controller = require('../controllers/login-controller')

router.get('/', (req, res) => {
    res.render("view/login/login")
})

router.post('/', controller.post)

module.exports = router;