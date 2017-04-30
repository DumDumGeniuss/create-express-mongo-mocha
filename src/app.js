const express = require('express');
const chalk = require('chalk');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

/* Loda config by dotenv */
dotenv.load({ path: '.env' });

/* Set config */
app.set('port', process.env.port);
app.set('db_uri', process.env.MONGODB_URI || process.env.MONGODB_LAB_URI);

/* connect to DB */
mongoose.Promise = global.Promise;
mongoose.connect(app.get('db_uri'));
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s Connecting to Mongodb failed, please check your mongodb', chalk.red('✗'));
  process.exit();
});
mongoose.connection.on('connected', () => {
  console.log('%s Successful connected to Mongodb', chalk.green('✓'));
});


app.get('/', (req, res) => {
  res.status(200).send('Express Application Works Fine');
});

/* Start server */
app.listen(app.get('port'), () => {
  console.log('%s Node server‘s running on port %s', chalk.green('✓'), app.get('port'));
});

module.exports = app;
