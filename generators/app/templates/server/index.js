'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var chalk = require('chalk');
var config = require('./config/environment');

var app = express();
var server = require('http').createServer(app);

require('./config/express')(app);
require('./routes')(app);


// Start server
server.listen(config.port, config.ip, function () {

  console.log(
    chalk.red('\nExpress server listening on port ')
    + chalk.yellow('%d')
    + chalk.red(', in ')
    + chalk.yellow('%s')
    + chalk.red(' mode.\n'),
    config.port,
    app.get('env')
  );

  if (config.env === 'development') {
    require('ripe').ready();
  }

});

server.on('error', function(e) {
  if(e.code === 'EADDRINUSE') {
    console.log(
      chalk.red('\nExpress server listening on port ')
      + chalk.yellow('%d')
      + chalk.red(', in ')
      + chalk.yellow('%s')
      + chalk.red(' mode.\n'),
      config.port,
      app.get('env')
    );
  } else {
    process.exit(1);
  }
});

// Expose app
exports = module.exports = server;
