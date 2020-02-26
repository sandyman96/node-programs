const config = require('./common/config/env.config.js');
const AuthorizationRouter = require('./authorization/routes.config');
const UsersRouter = require('./users/routes.config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        debugger;
        console.log('sending 200ok');
        return res.send(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());
debugger;
AuthorizationRouter.routesConfig(app);
UsersRouter.routesConfig(app);

app.listen(config.port, function () {
    debugger;
    console.log('app listening at port %s', config.port);
});
