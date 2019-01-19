const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const db = require('../data/dbConfig.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(morgan('short'));


server.post('/api/register', (req, res) => {
    const creds = req.body;

    const hashedPass = bcrypt.hashSync(creds.password, 14);

    creds.password = hashedPass;

    db('users')
        .insert(creds)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

server.post('/api/login', (req, res) => {
    const creds = req.body;

    db('users')
        .where({ username: creds.username }).first()
        .then(user => {
            if(user && bcrypt.compareSync(creds.password, user.password)) {
                res.status(200).json({ message: 'login successful' });
            } else {
                res.status(401).json({ message: 'login failed' });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.get('/api/users', (req, res) => {
    db('users')
        .select('id', 'username', 'password')
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.get('/', (req, res) => {
    res.send('server connected');
});

module.exports = server;