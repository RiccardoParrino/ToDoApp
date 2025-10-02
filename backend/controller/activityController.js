const activityService = require('../service/activityService');

exports.createActivity = async (req, res, next) => {
    await activityService.createActivity(
        req.body.name,
        req.body.date,
        req.body.description,
        req.body.city
    );
    res.send(true);
}

exports.findAll = async (req, res, next) => {
    res.send(await activityService.findAll());
}

exports.updateActivity = async (req, res, next) => {
    const name = req.query.name;
    const newName = req.query.newName;
    const newDate = req.query.newDate;
    const newDescription = req.query.newDescription;
    const newCity = req.query.newCity;
    await activityService.updateActivity(name, newName, newDate, newDescription, newCity);
    res.send("DONE");
}

exports.deleteActivity = async (req, res, next) => {
    const name = req.query.name;
    await activityService.deleteActivity(name);
    res.send("DONE");
}

exports.removeAll = async (req, res, next) => {
    await activityService.removeAll();
    res.send("DONE");
}