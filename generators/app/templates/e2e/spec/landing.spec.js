/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

'use strict'

const Pages = require('../pages');

describe('Landing Page', () => {
  let page = Pages.Landing;

  beforeAll(() => {
    page.get();
  });

  // it('should have a page title', () => {
  //   expect(page.title()).toEqual('scaffold');
  // });

  it('should have a link for landing page.', () => {
    let expected = '/';
    expect(page.elements.homeLink.getAttribute('routerLink')).toEqual(expected);
  });

  it('should have a link for fonts page', () => {
    let expected = '/fonts';
    expect(page.elements.fontLink.getAttribute('routerLink')).toEqual(expected);
  });

  it('should have a link for colors page', () => {
    let expected = '/colors';
    expect(page.elements.colorLink.getAttribute('routerLink')).toEqual(expected);
  });

	it('should have a link for icons page', () => {
    let expected = '/icons';
    expect(page.elements.iconLink.getAttribute('routerLink')).toEqual(expected);
  });

  it('should have hero text', () => {
    let expected = 'Irving User Interface Team';
    expect(page.elements.heroText.getInnerHtml()).toEqual(expected);
  });
});
