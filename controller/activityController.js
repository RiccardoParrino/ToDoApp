const activityService = require('../service/activityService');

exports.createActivity = (req, res, next) => {
    console.log(activityService.createActivity(req));
    res.send("CREATE ACTIVITY");
}

exports.readActivity = (req, res, next) => {
    console.log(activityService.readActivity(req));
    res.send("READ ACTIVITY!");
}

exports.updateActivity = (req, res, next) => {
    console.log(activityService.updateActivity(req));
    res.send("UPDATE ACTIVITY");
}

exports.deleteActivity = (req, res, next) => {
    console.log(activityService.deleteActivity(req));
    res.send("DELETE ACTIVITY");
}