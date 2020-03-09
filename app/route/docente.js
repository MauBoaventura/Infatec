const express = require("express");
const router = express.Router();

const moment = require("moment")

const {
    User
} = require('../models');

router.get('/', (req, res) => {
    res.send("docente")
})


//Exclui

module.exports = router;