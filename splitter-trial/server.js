const EXPRESS_VAR = require("express"),
    EXPRESS_APPLICATION = EXPRESS_VAR(),
    BODY_PARSER_VAR = require("body-parser"),
    PORT = process.env.PORT || 3000;

const AppController = require("./app/controller/appController");
EXPRESS_APPLICATION.use(BODY_PARSER_VAR.json());

EXPRESS_APPLICATION.listen(PORT, () => {
    console.log("listening");
});

var promise = new Promise(function (resolve, reject) {
});
EXPRESS_APPLICATION.post('/api/users/register',async function (req, res) {
    var bodyContents = req.body;
    console.log(bodyContents);
    var reply = AppController.registerUser(
        bodyContents["userName"],
        bodyContents["userEmail"],
        bodyContents["userPhone"],
        bodyContents["userPassword"],
    );
    // console.log(reply);
    res.send(reply);
});



// approutes(EXPRESS_APPLICATION);
