'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-irvui-angular-2:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({appname: 'test'})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'package.json'
    ]);
  });
});
