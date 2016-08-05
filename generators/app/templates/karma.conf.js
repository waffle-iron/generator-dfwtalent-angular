/*!
* ThingSpace
* Copyright(c) 2016 Verizon Irving UI <irvui@verizon.com>
* MIT Licensed
*/

module.exports = function(config) {

	config.set({
		frameworks: ['jasmine'],
		files:[
			{ pattern: 'client/app/tests/sanity_test.js', included: true, watched: false },
		],
		browsers: ['PhantomJS'],
		customLaunchers: {
	      'PhantomJS_custom': {
	        base: 'PhantomJS',
	        options: {
	          windowName: 'my-window',
	          settings: {
	            webSecurityEnabled: false
	          },
	        },
	        flags: ['--load-images=true'],
	        debug: false
	      }
	    },
	    phantomjsLauncher: {
	      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
	      exitOnResourceError: true
	    },
		singleRun: true
	})

}
