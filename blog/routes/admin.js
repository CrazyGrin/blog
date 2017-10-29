let express = require('express');
let router = express.Router();

let mysql = require('mysql');
let EssayController = require('../public/javascripts/controller/EssayController');
let connection = mysql.createConnection({host: 'localhost', user: 'admin', password: 'admin', database: 'blog'});

connection.connect();

router.get('/index', (req, res, next) => {
    //TODO.. render
});

router.get('/essay/show', (req, res, next) => {
    connection.query("SELECT * FROM essays", (err, rows, fields) => {
        if (err) {
            throw err;
        }
        res.send({state: "0", rows: rows});
    });
})

router.get('/essay/show/:id', (req, res, next) => {
    let ec = new EssayController();
    let op = ec.selectById_({id: req.params.id});

    connection.query(op.data.sql, op.data.id, (err, rows, fields) => {
        if (err) {
            throw err;
            res.send({state: "-1"});
        }
        if (rows.length == 0) {
            res.send({state: "0", rows: "null"});
        } else {
            res.send({state: "1", rows: rows});
        }
    });
});

router.get('/essay/create', (req, res, next) => {
    //TODO.. render
});

router.post('/essay/store', (req, res, next) => {
    console.log(req.body);
    res.send("hello");
});

router.get('/essay/delete/:id', (req, res, next) => {
    let ec = new EssayController();
    let op = ec.deleteById_({id: req.params.id});

    connection.query(op.data.sql, op.data.id, (err, rows, fields) => {
        if (err) {
            throw err;
            res.send({state: "-1"});
        }
        if (rows.length == 0) {
            res.send({state: "0", rows: "null"});
        } else {
            res.send({state: "1", rows: rows});
        }
    })
});

module.exports = router;
