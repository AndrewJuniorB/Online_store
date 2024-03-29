require('dotenv').config();
const express = require('express');
const sequelize = require('./db.js');
const models = require('./models/models.js');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index.js');
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js');
const path = require('path');

const app = express();
// CORS adding;
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
//Error middleware handler (needs be last one)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200);
  // res.status(200).json({message: 'GET REQ WORKING' })
  res.send('GET REQ WORKING');

})

app.get('/test', (req, res) => {
  res.status(200);
  // res.status(200).json({message: 'GET REQ WORKING' })
  res.send(tests);
})

app.get('/test/:name', (req, res) => {
  res.status(200);
  // res.status(200).json({message: 'GET REQ WORKING' })
  const test = tests.find(n => n.course === req.params.name ||
    n.id === parseInt(req.params.name) ||
    n.default === req.params.name);

  if (!test) { res.status(404).send('The given course not found') }

  res.send(test);

})

app.post('/test', (req, res) => {
  if (!req.body.course || req.body.course.length < 2 || !req.body.default ) {
    res.status(400).send('Invalid input');
    res.end();
  }
  const test = {
    id: tests.length + 1,
    course: req.body.course,
    default: req.body.default
  }
  tests.push(test);
  res.send(test);
})


// All DB operations are async
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Express Server running on PORT ${PORT}...`);
    })

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Start
start();