/********
* user.js file (controllers/apis)
********/
const userService = require('../../services/users/userService');
const expressRouter = require('express')();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy((username, password, done) => 
        {
            if (username === 'test@gmail.com' && password === '1234') {
                return done(null, { username: 'test@gmail.com' });
            } else {
                return done(null, false);
            }
    }
));

expressRouter.get('/', userService.getUsers);
expressRouter.post('/register', userService.createUsers );
expressRouter.post('/login', passport.authenticate('local', { session: false}) );
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
