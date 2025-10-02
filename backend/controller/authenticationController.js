const authenticationService = require("../service/authenticationService");

exports.createUser = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const surname = req.body.surname;
    res.send(await authenticationService.createUser(username, password, name, surname));
}

exports.readUser = async (req, res, next) => {
    const username = req.query.username;
    const results = await authenticationService.readUser(username);
    console.log(results);
    res.json(results);
}

exports.updateUser = async (req, res, next) => {
    const username = req.query.username;
    const password = req.query.password;
    const name = req.query.name;
    const surname = req.query.surname;
    await authenticationService.updateUser(username, password, name, surname);
    res.send("DONE");
    return;
}

exports.deleteUser = async (req, res, next) => {
    const username = req.query.username;
    await authenticationService.deleteUser(username);
    res.send("DONE");
    return;
}

exports.loginUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    res.send(await authenticationService.loginUser(email, password));
}