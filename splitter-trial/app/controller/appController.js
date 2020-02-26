var Task = require('../model/appModel.js');

exports.registerUser = (userName, userEmail, userPhone, userPassword, next) => {
    Task.registerUser(userName, userEmail, userPhone, userPassword, function(err,res) {
        if(err){
        // console.log(err);
            // replyToClient(res); //result is "error"
            x = "error";
                }else{
                next(4);
                return next(4);
                }
        });
        return next();
};