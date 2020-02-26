/********
* user.js file (models)
********/

let sequelize = require('sequelize');
let Schema = sequelize.Schema;

// var User = new Schema({
//     name: {
//         type: String,
//         required: [true, 'name is required'],
//         lowercase: true
//     },
//     email: {
//         type: String,
//         required: [true, 'email is required'],
//         unique: true,
//         lowercase: true
//     }
// }, {
//     timestamps: true
// });


// var User = sequelize.define('User',{
//     name: {
//         type: String,
//         required: [true, 'name is required'],
//         lowercase: true
//     },
//     email: {
//         type: String,
//         required: [true, 'email is required'],
//         unique: true,
//         lowercase: true
//     }
// }, {
//     timestamps: true
// });

var User = sequelize.define('User', {

});

module.exports = User;
// module.exports = sequelize.model('User', User);