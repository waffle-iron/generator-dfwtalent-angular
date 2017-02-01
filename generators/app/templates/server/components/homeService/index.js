'use strict';
var Service = require('./lib/home.service');

var HomeService = function(config){
  let self = this;
  let service = new Service(config);

  self.get = (input, done) => {
    service.read((err, result) => {
      done(err, result.data);
    });
  };

  return self;
};

module.exports = HomeService;
