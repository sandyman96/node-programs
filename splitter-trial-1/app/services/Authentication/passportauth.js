const passport = require('passport');
const LocalStrategy = require ('passport-local');
const User =  require('../users/userService');
const bcrypt_const = require('../../functions/BCrypt');
const localOpts = {
    UserEmail: 'UserEmail',
    UserPassword: 'UserPassword'
};


var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: "secretKey"
}
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    // User.findOne({ id: jwt_payload.sub }, function (err, user) {
    //     if (err) {
    //         return done(err, false);
    //     }
    //     if (user) {
    //         return done(null, user);
    //     } else {
    //         return done(null, false);
    //         // or you could create a new account
    //     }
    // });
    return done(null, "true");
}));
// passport.use(new LocalStrategy((username, password, done) => {
//     // try {
//     //     const user = await User.findAll({ where: { UserEmail: UserEmail }, raw: true });
//     //     if (!(user.length > 0)) {
//     //         return done(null, false);
//     //     } else {
//     //         const isMatchingDbAndUserPasswords = bcrypt_const.compareSync(UserPassword, user[0]["UserPassword"]);
//     //         if (isMatchingDbAndUserPasswords) return done(null, user);
//     //         return done(null, false);
//     //     }
//     // } catch (e) {
//     //     return done(e, false);
//     // }

//     return done(null, username);
// }));
const authLocal = passport.authenticate('jwt', {
    successRedirect: '/api/v1/users/dashboard2',
    failureRedirect: '/api/v1/users/dashboard'
});

module.exports = authLocal;