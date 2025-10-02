const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.createJwt = async (email) => {
    const token = jwt.sign(
        { userId: email }, 
        "mySecret", 
        { expiresIn: "2h" }
    );
    return token;
}

exports.verifyJwt = (token) => {
    jwt.verify( token, "mySecret", (err, decoded) => {
        if (err) {
            console.log("Error occurred in JWT");
            return false;
        } else {
            console.log("JWT is valid");
            console.log(decoded.userId);
            return true;
        }
    });
}