var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res) {
    fs.readFile('./blogs/test.md', 'utf-8', (err, data) => {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
}).listen(3000);
