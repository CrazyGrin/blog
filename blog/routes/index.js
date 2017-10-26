let express = require('express');
let router = express.Router();

let mysql = require('mysql');
let connection = mysql.createConnection({host: 'localhost', user: 'admin', password: 'admin', database: 'blog'});

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/essay/index', (req, res, next) => {
    let params = req.params;

    connection.query('SELECT * FROM essays', (err, rows, fields) => {
        if (err) {
            throw err;
        }
        res.render('index', {essays: rows});
    })
});

module.exports = router;
