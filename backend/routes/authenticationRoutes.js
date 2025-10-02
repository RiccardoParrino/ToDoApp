const express = require("express");
const authenticationController = require("../controller/authenticationController");
const router = express.Router();

router.post("/createUser", authenticationController.createUser);
// router.get("/readUser", authenticationController.readUser);
// router.get("/updateUser", authenticationController.updateUser);
router.post("/deleteUser", authenticationController.deleteUser);
router.post("/loginUser", authenticationController.loginUser);
router.get("/listAllUsers", authenticationController.listAllUsers);

module.exports = router;