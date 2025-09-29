import {Request, Response, NextFunction} from 'express';
import { activities, Activity } from '../models/activity.js';

export const createActivity = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {name} = req.body;
        const newActivity: Activity = {id: Date.now(), name};
        activities.push(newActivity);
        res.status(201).json(newActivity);
    } catch (error) {
        next(error);
    }
}