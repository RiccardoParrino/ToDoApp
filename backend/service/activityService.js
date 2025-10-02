const activityRepository = require('../repository/activityRepository')

exports.createActivity = (name, date, description, city) => {
    activityRepository.createActivity(name, date, description, city);
}

exports.findAll = () => {
    return activityRepository.findAll();
}

exports.updateActivity = (name, newName, newDate, newDescription, newCity) => {
    return activityRepository.updateActivity(name, newName, newDate, newDescription, newCity);
}

exports.deleteActivity = (name) => {
    return activityRepository.deleteActivity(name);
}

exports.removeAll = () => {
    return activityRepository.removeAll();
}