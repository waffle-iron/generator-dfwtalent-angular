'use strict';

var should = require('chai').should();
var assert = require('assert');
var Service = require('../lib/home.service');
var Model = require('../lib/home.model');

describe('A Home Service', function() {
  var data, service = null;

  before(function(done){
    service = new Service();
    done();
  });

  describe('Read Item', function() {
    it('Retrieves an item by value', function(done) {
      service.read(function(err, result) {
        result.success.should.be.true;
        data = result.data;
        done();
      });
    });
    it('Defines a Property Name', function(done) {
      data.should.have.property('name');
      done();
    });
    it('Defines a Property Message', function(done) {
      data.should.have.property('message');
      done();
    });
    it('Defines a Property Generator', function(done) {
      data.should.have.property('generator');
      done();
    });
  });

  after(function(done){
    done();
  });

});
