'use strict';

module.exports = class {
	constructor(args) {
    if(!args) args = {};
    this.name = args.name || 'yo-dfw';
    this.message = args.message || 'DFW Top Talent';
    this.generator = args.generator || 'yo-generator';
	}
}
