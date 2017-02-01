'use strict';

var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var config = require('./environment');

module.exports = function (app) {

  var env = config.env;

  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(compression());

  console.log(env);
  if(env === 'development'){
    app.use(morgan('dev'));
  }


  var _node_modules = path.join(config.root, 'node_modules');
  app.use('/scripts', express.static(_node_modules));
  app.use(express.static(path.join(config.root, 'client')));


  if (env === 'development' || env === 'test') {
    app.use(require('errorhandler')());
  }

};
