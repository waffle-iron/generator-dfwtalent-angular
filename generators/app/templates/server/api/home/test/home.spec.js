/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

'use strict';

var should = require('chai').should();
var request = require('supertest');
var app = require(__dirname + '/../../..');

describe('GET /api/v1/home', function() {

  it('should respond with JSON data', function(done) {
    request(app)
      .get('/api/v1/home')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.generator.should.be.equal("yo-generator");
        done();
      });
  });
});
