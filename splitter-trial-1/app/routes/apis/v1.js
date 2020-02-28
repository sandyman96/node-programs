
/********
* v1.js file (inside routes/apis)
********/

const userController = require('../../controllers/apis/user'); //router with .get .post etc

const express = require('express');
let router = express.Router();
router.use('', userController);
module.exports = router;