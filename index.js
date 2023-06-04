const express = require('express');
const allRoutes = require('./controllers');
const cors = require("cors")
const sequelize = require('./config/connection');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const { Invoice, Job, Receipt, User, JobCategory } = require('./models');


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// app.use('/', allRoutes);

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App LISTENING on PORT ' + PORT);
    });
});


// ------------------------------------------------------------------------------


// app.listen(port, () => {
//     console.log(`Practice server for mail tests listening at http://localhost:${port}`);
// });
