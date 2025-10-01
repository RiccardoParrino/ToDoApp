const activityService = require('../service/activityService');

exports.createActivity = async (req, res, next) => {
    console.log(req.body.name);
    console.log(req.body.date);
    console.log(req.body.description);
    console.log(req.body.city);
    await activityService.createActivity(
        req.body.name,
        req.body.date,
        req.body.description,
        req.body.city
    );
    res.send("DONE");
}

exports.readActivity = async (req, res, next) => {
    res.send(await activityService.readActivity());
}

exports.updateActivity = async (req, res, next) => {
    const name = req.query.name;
    const newName = req.query.newName;
    await activityService.updateActivity(name, newName);
    res.send("DONE");
}

exports.deleteActivity = async (req, res, next) => {
    const name = req.query.name;
    await activityService.deleteActivity(name);
    res.send("DONE");
}