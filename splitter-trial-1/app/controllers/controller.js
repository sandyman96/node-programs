const expressRouter = require('express')();
const userController = require('./apis/user');

expressRouter.use( '',userController);
module.exports = expressRouter;