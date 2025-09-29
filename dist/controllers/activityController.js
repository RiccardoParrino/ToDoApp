import { activities } from '../models/activity.js';
export const createActivity = (req, res, next) => {
    try {
        const { name } = req.body;
        const newActivity = { id: Date.now(), name };
        activities.push(newActivity);
        res.status(201).json(newActivity);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=activityController.js.map