/********
* v1.js file (inside routes/apis)
********/
const Controller = require('../../controllers/controller'); //router with .get .post etc
const expressRouter = require('express')();

// const authlocal = require('../../services/Authentication/passportauth.js');
// expressRouter.use('', Controller);
// expressRouter.use('', passportAuth, Controller);

expressRouter.use('', Controller);
module.exports = expressRouter;
//1.create a passport middle ware
//2.if registration -> 
