const express = require("express");
const authenticationController = require("../controller/authenticationController");
const router = express.Router();

router.get("/createUser", authenticationController.createUser);
router.get("/readUser", authenticationController.readUser);
router.get("/updateUser", authenticationController.updateUser);
router.get("/deleteUser", authenticationController.deleteUser);

module.exports = router;