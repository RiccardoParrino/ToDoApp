import express from 'express';
import activityRoutes from './routes/activityRoutes.js';
const app = express();
app.use(express.json());
app.use('/api/items', activityRoutes);
export default app;
//# sourceMappingURL=app.js.map