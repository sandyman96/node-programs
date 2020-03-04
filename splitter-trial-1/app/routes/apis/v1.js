/********
* v1.js file (inside routes/apis)
********/
const Controller = require('../../controllers/controller'); //router with .get .post etc
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportAuth = require('../../Authentication/passportauth');

const expressRouter = require('express')();
// expressRouter.use('', (req,res,next)=> {return Controller(req,res,next);});

expressRouter.use('', Controller);

// expressRouter.use('', function(req, res, next) {

// });
module.exports = expressRouter;

//1.create a passport middle ware
//2.if registration -> 
