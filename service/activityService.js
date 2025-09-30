const activityRepository = require('../repository/activityRepository')

exports.createActivity = (name) => {
    activityRepository.createActivity(name);
}

exports.readActivity = () => {
    return activityRepository.readActivity();
}

exports.updateActivity = (id) => {
    return "UPDATE ACTIVITY";
}

exports.deleteActivity = (id) => {
    return "DELETE ACTIVITY";
}