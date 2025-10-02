const authenticationService = require("../service/authenticationService");
const jwtUtilities = require('../middleware/jwtUtilities');

exports.createUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const surname = req.body.surname;
    res.send(await authenticationService.createUser(email, password, name, surname));
}

// exports.readUser = async (req, res, next) => {
//     const username = req.query.username;
//     const results = await authenticationService.readUser(username);
//     console.log(results);
//     res.json(results);
// }

// exports.updateUser = async (req, res, next) => {
//     const username = req.query.username;
//     const password = req.query.password;
//     const name = req.query.name;
//     const surname = req.query.surname;
//     await authenticationService.updateUser(username, password, name, surname);
//     res.send("DONE");
//     return;
// }

exports.deleteUser = async (req, res, next) => {
    const email = req.body.email;
    res.send(await authenticationService.deleteUser(email));
}

exports.loginUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const logged = authenticationService.loginUser(email, password);
    if (logged) {
        res.send(jwtUtilities.createJwt());
    } else {
        res.sendStatus(401);
    }
}

exports.listAllUsers = async (req, res, next) => {
    res.send(await authenticationService.listAllUsers());
}