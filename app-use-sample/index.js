var express = require('express');
var app = express();
//logs
app.use( (req, res, next) => {
    console.log('LOGGED')
    next()
});

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000);
