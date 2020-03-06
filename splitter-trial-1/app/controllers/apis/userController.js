/********
* user.js file (controllers/apis)
********/
const userService = require('../../services/users/userService');
const expressRouter = require('express')();
const authLocal = require('../../services/Authentication/passportauth');
const passport = require('passport');

expressRouter.get('/dashboard', (req,res,next) => { res.send("the return");})
expressRouter.get('/dashboard2', (req, res, next) => {res.send("the success");})
expressRouter.get('/', authLocal, userService.getUsers);
expressRouter.post('/register', userService.createUsers );
expressRouter.use(passport.initialize() );

// expressRouter.post('/login', passport.authenticate('local', { successRedirect: '/api/v1/users',
//     failureRedirect: '/api/v1/users/dashboard' }));
// expressRouter.post('/login', thanilocalfunction, userService.userLogin);

// expressRouter.post('/login',  passport.authenticate('local', {
//     successRedirect: '/dashboard',
//     failureRedirect:'/dashboard'
// }));

expressRouter.post('/login', userService.userLogin);
// expressRouter.post('/login', userService.login);
// ,userService.login);
// expressRouter.get('/:id', userService.getUserById);
// expressRouter.post('/', userService.createUser);
// expressRouter.put('/:id', userService.updateUser);
// expressRouter.delete('/:id', userService.deleteUser);
module.exports = expressRouter;
/********
* user.js file (controllers/apis)
********/
