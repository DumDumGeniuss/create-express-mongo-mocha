const express = require('express');
const chalk = require('chalk');
const dotenv = require('dotenv');

const app = express();

/* Loda config by dotenv */
dotenv.load({ path: '.env.example' });

app.set('port', process.env.port);

app.get('/', (req, res) => {
  res.status(200).send('Hello Wolrd Again!!!');
});

app.listen(app.get('port'), () => {
  console.log('%s Node server‘s running on port %s', chalk.green('✓'), app.get('port'));
});

module.exports = app;
