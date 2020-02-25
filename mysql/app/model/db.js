/*
Let’s create a db connection wrapper, this will allow you to create connection on db which stored on a single file and can be reuse by other modules.
*/

'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'splitter',
    password: 'splitter',
    database: 'splitter'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
