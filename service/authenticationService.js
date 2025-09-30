const authenticationRepository = require("../repository/authenticationRepository");

exports.createUser = (username, password, name, surname) => {
    authenticationRepository.createUser(username, password, name, surname);
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