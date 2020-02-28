/********
* user.js file (controllers/apis)
********/


const express = require('express');
const userService = require('../../services/users/user');
let router = express.Router();

router.get('/users', userService.getUsers);

router.post('/users/register', userService.createUsers );

// router.get('/:id', userService.getUserById);

// router.post('/', userService.createUser);

// router.put('/:id', userService.updateUser);

// router.delete('/:id', userService.deleteUser);

module.exports = router;



/********
* user.js file (controllers/apis)
********/
