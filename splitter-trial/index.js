const EXPRESS_VAR = require("express"),
    EXPRESS_APPLICATION = EXPRESS_VAR(),
    BODY_PARSER_VAR = require("body-parser"),
    PORT = process.env.PORT || 3000;

const AppController = require("./app/controller/appController");
EXPRESS_APPLICATION.use(BODY_PARSER_VAR.json());

EXPRESS_APPLICATION.listen(PORT, () => {
    console.log("listening");
});
EXPRESS_APPLICATION.post('/register', function (req, res) {
    var bodyContents = req.body;
    var reply = AppController.registerUser(
        bodyContents["userName"],
        bodyContents["userEmail"],
        bodyContents["userPhone"],
        bodyContents["userPassword"]
    );
    res.send(reply);
});



// approutes(EXPRESS_APPLICATION);
