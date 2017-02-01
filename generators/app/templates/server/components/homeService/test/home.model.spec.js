/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

'use strict';

var should = require('chai').should();
var assert = require('assert');
var Model = require('../lib/home.model');

describe('The Home Model', function() {

  describe('Defaults', function() {
    var model, args;

    before(function(done) {
      args = {};
      args.name = 'TestName';
      args.message = 'TestMessage';
      args.generator = 'TestGenerator';
      model = new Model(args);
      done();
    });

    it('has a property name', function() {
      model.should.have.property('name', args.name);
    });
    it('has a property message', function() {
      model.should.have.property('message', args.message);
    });
    it('has a property generator', function() {
      model.should.have.property('generator', args.generator);
    });
  });
});
