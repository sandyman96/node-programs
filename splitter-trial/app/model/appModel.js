'user strict';
var sql = require('./db.js');
var Task = function (task){
    this.task = task;
}

var anotherCallback = function(a1,a2){
    return a2;
};
Task.registerUser = function(userName,userEmail, userPhone, userPassword, callback){
   var g =  sql.query("INSERT INTO UserList (UserName, UserEmail, UserPhoneNo, UserPassword) VALUES ( ?, ?, ?, ?)",
    [userName, userEmail, userPhone, userPassword],anotherCallback);
 console.log(g);
};

Task.loginUser = function(userName, userPassword){
    sql.query("SELECT * FROM UserList WHERE UserName = ? AND UserPassword = ?", [userName, userPassword] , (err, res) =>{
        if (err) {
            console.log("error: ", err);
        }
        else {
            console.log(res);
        }
    });
}

module.exports = Task;