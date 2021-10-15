require('dotenv').config();
const express = require('express');
const sequelize = require('./db.js');
const models = require('./models/models.js')
const cors = require('cors');

const app = express();
// CORS adding
app.use(cors());
app.use(express.json());

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