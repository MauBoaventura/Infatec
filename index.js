const express = require('express');
const {
    User
} = require('./app/models');
const app = express();

app.use(express.urlencoded({
    extended: false
}));

User.create({
    name: 'Claudio',
    email: 'claudio@rocketseat.com.br',
    password: '123456'
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);