const jwtService = require("../service/jwtService")

exports.createJwt = async (req, res, next) => {
    console.log("sono qui");
    return await jwtService.createJwt(req.query.email);
}

exports.verifyJwt = (req, res, next) => {
    return jwtService.verifyJwt();
}