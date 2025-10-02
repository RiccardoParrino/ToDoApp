const authenticationRepository = require("../repository/authenticationRepository");

exports.createUser = (email, password, name, surname) => {
    return authenticationRepository.createUser(email, password, name, surname);
}

exports.readUser = (username) => {
    return authenticationRepository.readUser(username);
}

exports.updateUser = (username, password, name, surname) => {
    authenticationRepository.updateUser(username);
}

exports.deleteUser = (username) => {
    authenticationRepository.deleteUser(username);
}

exports.loginUser = (email, password) => {
    return authenticationRepository.loginUser(email, password);
}