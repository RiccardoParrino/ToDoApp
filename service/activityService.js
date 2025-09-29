const activityRepository = require('../repository/activityRepository')

exports.createActivity = (id) => {
    console.log(id);
    return "CREATE ACTIVITY";
}

exports.readActivity = async () => {
    return await activityRepository.readActivity();
}

exports.updateActivity = (id) => {
    console.log(id);
    return "UPDATE ACTIVITY";
}

exports.deleteActivity = (id) => {
    console.log(id);
    return "DELETE ACTIVITY";
}