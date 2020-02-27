var Task = require('../model/appModel.js');

// global.globalNjan;
var x = function(a1, a2){
    // global.globalNjan = a2;
    return a2;
}
exports.registerUser = (userName, userEmail, userPhone, userPassword, next) => {
    var y = Task.registerUser(userName, userEmail, userPhone, userPassword, x );
    // console.log(y());
};


// function(err, res) {
//     if (err) {
//         console.log(err);
//         // replyToClient(res); //result is "error"
//         next("fail");
//     } else {
//         next("success");
//     }
