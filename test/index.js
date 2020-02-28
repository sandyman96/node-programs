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


const mysqldb = require('mysql');
mysqldbconnection = mysqldb.createConnection({host:'localhost',user:'root',password: 'toor',
                    database: 'splitter'});

mysqldbconnection.connect( (err) => {
   if(err) console.log(err) ;
   else console.log("success");
});
