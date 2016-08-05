/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

'use strict';

var Model = function(args){
  if(!args) {
    args = {};
  }

  if(!args.name) {
    args.name = 'yo-vdms';
  }

  if(!args.message) {
    args.message = 'Irving User Interface Team';
  }

  if(!args.generator) {
    args.generator = 'yo-generator';
  }

  var model = {};
  model.name = args.name;
  model.message = args.message;
  model.generator = args.generator;
  return model;
};

module.exports = Model;
