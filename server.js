// installed dependencies
const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

// setup Express App
const app = express();
const PORT = process.env.PORT || 3005;

// code below sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
