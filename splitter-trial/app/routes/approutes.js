'use strict';
var appController = require("../controller/appController");
const BODY_PARSER_VAR = require("body-parser");


module.exports = function (expressApp){
    expressApp.use(BODY_PARSER_VAR.json() );
    expressApp.route("/register").post(appController.registerUser);
}