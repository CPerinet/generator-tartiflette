const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 9000;

const app = express();
const router = express.Router();



/**
 *
 * Configure App
 *
 */

app.use(morgan('-> :method   :url :status - :response-time ms'));
app.use(express.static(path.resolve(__dirname, '.', 'static')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/**
 *
 * Routes
 *
 */

app.use('/api', require('./api/routes'));

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '.', 'static', 'index.html'));
});

app.use(router)



/**
 *
 * Launch server
 *
 */

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});



/**
 *
 * Connect DB
 *
 */

mongoose.connect('mongodb://127.0.0.1/black', { user: '', pass: '' });

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('mongodb connection error: %s', err);
  process.exit();
});