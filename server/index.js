const express = require('express');
const sequelize = require('./db.js');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

// All DB operations are async
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Express Server running on PORT ${PORT}...`);
    })

  } catch(error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Start
start();