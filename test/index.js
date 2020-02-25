const express = require('express');
var app = express();

app.use( (req,res,next) => {
    console.log('logged');
    next();
});

app.get('/', (req,res) => {
    res.send('Hello world');
});

app.listen(3000);