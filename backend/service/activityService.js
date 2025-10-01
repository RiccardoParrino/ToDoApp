const activityRepository = require('../repository/activityRepository')

exports.createActivity = (name, date, description, city) => {
    activityRepository.createActivity(name, date, description, city);
}

exports.readActivity = () => {
    return activityRepository.readActivity();
}

exports.updateActivity = (name, newName) => {
    return activityRepository.updateActivity(name, newName);
}

exports.deleteActivity = (name) => {
    return activityRepository.deleteActivity(name);
}