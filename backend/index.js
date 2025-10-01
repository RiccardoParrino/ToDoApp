const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const activityRoutes = require('./routes/activityRoutes');
const authenticationRoutes = require('./routes/authenticationRoutes');

app.use('/auth',authenticationRoutes);
app.use('/activity',activityRoutes);

app.listen(port, () => {
    console.log("Server listening at port 8080");
});