const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const db = require('../data/dbConfig.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(morgan('short'));
server.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));



const sessionConfig = {
    name: 'monkey', // set name to change default
    secret: 'askjh@&%d8923nhufcs0^%d9gn45g89sdj*&#fb3e2f39isdf%$#*n234r89',
    cookie: {
        maxAge: 1000 * 60 * 10, // how long the session is good for in milliseconds
        secure: false, // only send the cookie over https, should be true in production
    },
    httpOnly: false, // js can't touch this
    resave: false, // required by law / read more about it
    saveUninitialized: false, // required by law / read more about it
    store: new KnexSessionStore ({ // used to save session if server restarts
        tablename: 'sessions',
        sidfieldname: 'sid', //data inside of your database
        knex: db, // asks knex if we already have this file
        createtable: true, // creates this table if it does not exist
        clearInterval: 1000 * 60 * 15, // clears sessions from the db after time expires
    }),
}

server.use(session(sessionConfig));


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
                req.session.userId = user.id;
                res.status(200).json({ message: 'login successful' });
            } else {
                res.status(401).json({ message: 'login failed' });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

function protected(req, res, next) {
    // if the user is logged in we call next()
    if(req.session && req.session.userId) {
        next();
    } else {
        res.status(401).json({message: 'unauthorized access blocked'});
    }
}

server.get('/api/users', protected, (req, res) => {
    db('users')
        .select('id', 'username', 'password')
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.get('/api/logout', (req, res) => {
    if(req.session){
        req.session.destroy(err => {
            if(err) {
                res.status(500).send('you can never leave');
            } else {
                res.status(200).json('bye bye');
            }
        });
    } else {
        res.json({message: 'logged out already'});
    }
});

server.get('/', (req, res) => {
    res.send('server connected');
});

module.exports = server;