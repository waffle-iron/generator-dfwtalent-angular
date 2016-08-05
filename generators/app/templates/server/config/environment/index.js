/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

'use strict';

var path = require('path');
var _ = require('lodash');

var all = {

  env: process.env.NODE_ENV || 'development',
  root: path.normalize(__dirname + '/../../..'),
  port: process.env.PORT || 9000
};

module.exports = _.merge(all, require('./' + all.env + '.js'));
