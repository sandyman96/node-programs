/********
* v1.js file (inside routes/apis)
********/
const Controller = require('../../controllers/controller'); //router with .get .post etc
const passport = require('passport');



const expressRouter = require('express')();
expressRouter.use('', (req,res,next)=> {return Controller(req,res,next);});
module.exports = expressRouter;

