import { Router } from "express";
import { createActivity, } from '../controllers/activityController.js';
const router = Router();
router.get('/createActivity', createActivity);
export default router;
//# sourceMappingURL=activityRoutes.js.map