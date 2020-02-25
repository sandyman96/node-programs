'user strict';
var sql = require('./db.js');
var Task = function (task){
    this.task = task;
}

Task.registerUser = function(userName,userEmail, userPhone, userPassword, callback){
    sql.query("INSERT INTO UserList (UserName, UserEmail, UserPhoneNo, UserPassword) VALUES ( ?, ?, ?, ?)",
    [userName, userEmail, userPhone, userPassword],function(err,res) {
        if(err){
            console.log(err, "error");
        }else{
            // console.log(res);
            callback(null, res);
        }
});
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