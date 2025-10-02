const jwtService = require("../service/jwtService")

exports.createJwt = async (req, res, next) => {
    console.log("sono qui");
    res.send(await jwtService.createJwt(req.query.email));
}

exports.verifyJwt = (req, res, next) => {
    res.send(jwtService.verifyJwt(req.query.token));
}