/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

'use strict'

describe('Scaffold UI', function() {

  let expectedMsg = 'Irving User Interface Team';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h3')).getText()).toEqual(expectedMsg);
  });

});
