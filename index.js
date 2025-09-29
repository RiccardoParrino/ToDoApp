const express = require('express');
const app = express();
const activityRoutes = require('./routes/activityRoutes');
const port = 8080;

app.use('/activity',activityRoutes);

app.listen(port, () => {
    console.log("Server listening at port 8080");
});