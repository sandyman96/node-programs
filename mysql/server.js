// var express = require('express'),
//     app = express(),
//     port = process.env.PORT || 3000;

// app.listen(port);

// console.log('todo list RESTful API server started on: ' + port);

/*
Earlier on, we had a minimal code for our server to be up and running in the server.js file.
In this section we will be connecting our handlers(controllers), database, the created models, body parser and the created routes together.
Open the server.js file created awhile ago and follow the following steps to put everything together.
Essentially, you will be replacing the code in your server.js with the code snippet from this section
    use bodyParser Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
    It exposes various factories to create middlewares. All middlewares will populate the req.bodyproperty with the parsed body, or an empty object ({}) if there was no body to parse (or an error was returned).
    Register our created routes in the server
    On Server.js would have code below:
*/
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.PORT || 3000;

const mysql = require('mysql');
// connection configurations
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'splitter'
});

// connect to database
mysqlConnection.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the router

/*
In many environments (e.g. Heroku), and as a convention, you can set the environment variable PORT to tell your web server what port to listen on.
So process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
So you pass that app.listen, or to app.set('port', ...), and that makes your server be able to accept a parameter from the environment what port to listen on.
If you pass 3000 hard-coded to app.listen(), you're always listening on port 3000, which might be just for you, or not, depending on your requirements and the requirements of the environment in which you're running your server.
*/