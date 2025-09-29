const activityService = require('../service/activityService');

exports.createActivity = (req, res, next) => {
    activityService.createActivity(req);
}

exports.readActivity = async (req, res, next) => {
    res.send(await activityService.readActivity());
}

exports.updateActivity = (req, res, next) => {
    activityService.updateActivity(req);
}

exports.deleteActivity = (req, res, next) => {
    activityService.deleteActivity(req);
}