let express = require('express');
let router = express.Router();

let mysql = require('mysql');
let connection = mysql.createConnection({host: 'localhost', user: 'admin', password: 'admin', database: 'blog'});

connection.connect();

router.get('/index', (req, res, next) => {
    //TODO...
});

router.get('/essay/show/:num', (req, res, next) => {
    //TODO..
});

router.get('/essay/index', (req, res, next) => {
    //TODO..
});

router.get('/essay/create', (req, res, next) => {
    //TODO..
});

router.post('/essay/store', (req, res, next) => {
    console.log(req.body);
    res.send("hello");
});

router.get('/essay/delete/:num', (req, res, next) => {
    //TODO..
});

module.exports = router;
