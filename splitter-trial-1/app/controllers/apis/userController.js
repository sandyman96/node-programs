/********
* user.js file (controllers/apis)
********/


const express = require('express');
const userService = require('../../services/users/userService');
let router = express.Router();

router.get('/', userService.getUsers);

router.post('/register', userService.createUsers );

router.post('/login', userService.login);

// router.get('/:id', userService.getUserById);

// router.post('/', userService.createUser);

// router.put('/:id', userService.updateUser);

// router.delete('/:id', userService.deleteUser);

module.exports = router;



/********
* user.js file (controllers/apis)
********/
