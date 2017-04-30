const express = require('express');
const chalk = require('chalk');
const dotenv = require('dotenv');
const db = require('./services/db.js');
const homeRouter = require('./routes/home.js');

const app = express();

/* Loda config by dotenv */
dotenv.load({ path: '.env' });

/* Set config */
app.set('port', process.env.port || 3000);
app.set('db_uri', process.env.MONGODB_URI || process.env.MONGODB_LAB_URI);

/* Connect to db*/
db(app.get('db_uri'));

/* Routers */
app.use('/', homeRouter);

/* Start server */
app.listen(app.get('port'), () => {
  console.log('%s Node server‘s running on port %s', chalk.green('✓'), app.get('port'));
});

module.exports = app;
