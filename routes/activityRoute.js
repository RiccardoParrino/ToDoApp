const express = require('express');
const activityController = require('../controllers/activityController');

const router = express.Router();

router.get("/", activityController.readActivities);

module.exports = router;