const activityRepository = require('../repository/activityRepository')

exports.createActivity = (name) => {
    activityRepository.createActivity(name);
}

exports.readActivity = () => {
    return activityRepository.readActivity();
}

exports.updateActivity = (name, newName) => {
    return activityRepository.updateActivity(name, newName);
}

exports.deleteActivity = (id) => {
    return "DELETE ACTIVITY";
}