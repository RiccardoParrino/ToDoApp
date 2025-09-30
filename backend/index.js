const express = require('express');
const app = express();
const port = 8080;

const activityRoutes = require('./routes/activityRoutes');
const authenticationRoutes = require('./routes/authenticationRoutes');

app.use('/auth',authenticationRoutes);
app.use('/activity',activityRoutes);

app.listen(port, () => {
    console.log("Server listening at port 8080");
});