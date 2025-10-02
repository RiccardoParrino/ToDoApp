const express = require("express");
const authenticationController = require("../controller/authenticationController");
const router = express.Router();

router.post("/createUser", authenticationController.createUser);
router.get("/readUser", authenticationController.readUser);
router.get("/updateUser", authenticationController.updateUser);
router.get("/deleteUser", authenticationController.deleteUser);
router.post("/loginUser", authenticationController.loginUser);

module.exports = router;