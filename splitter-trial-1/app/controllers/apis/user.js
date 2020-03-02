/********
* user.js file (controllers/apis)
********/


const expressRouter = require('express')();
const userService = require('../../services/users/user');

expressRouter.get('/users', userService.getUsers);
expressRouter.post('/users/register', userService.createUsers );

// router.get('/:id', userService.getUserById);

// router.post('/', userService.createUser);

// router.put('/:id', userService.updateUser);

// router.delete('/:id', userService.deleteUser);

module.exports = expressRouter;
/********
* user.js file (controllers/apis)
********/
