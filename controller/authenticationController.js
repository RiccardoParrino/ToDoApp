const authenticationService = require("../service/authenticationService");

exports.createUser = async (req, res, next) => {
    const username = req.query.username;
    const password = req.query.password;
    const name = req.query.name;
    const surname = req.query.surname;
    await authenticationService.createUser(username, password, name, surname);
    res.send("DONE");
    return;
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