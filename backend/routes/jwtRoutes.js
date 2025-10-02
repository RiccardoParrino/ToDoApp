const express = require("express");

const jwtController = require("../controller/jwtController");
const router = express.Router();

router.get("/create", jwtController.createJwt);
router.get("/verify", jwtController.verifyJwt);

module.exports = router;