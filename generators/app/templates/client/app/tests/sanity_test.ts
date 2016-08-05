/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

describe('universal truths', function () {
	console.log('tests');
    it('should do math', function () {
        expect(1 + 1).toEqual(2);
        expect(5).toBeGreaterThan(4);
    });
    xit('should skip this', function () {
        expect(4).toEqual(40);
    });
});
