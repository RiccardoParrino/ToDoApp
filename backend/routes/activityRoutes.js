const express = require("express");

const activityController = require("../controller/activityController");

const router = express.Router();

router.get("/createActivity", activityController.createActivity);
router.get("/readActivity", activityController.readActivity);
router.get("/updateActivity", activityController.updateActivity);
router.get("/deleteActivity", activityController.deleteActivity);

module.exports = router;