const authenticationService = require("../service/authenticationService");
const jwtUtilities = require('../middleware/jwtUtilities');

exports.createUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const surname = req.body.surname;
    res.send(await authenticationService.createUser(email, password, name, surname));
}

exports.loginUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const logged = await authenticationService.loginUser(email, password);
    console.log(logged);
    if (logged) {
        res.send(jwtUtilities.createJwt(email));
    } else {
        res.sendStatus(401);
    }
}