const Utils = require('../utils.js')
const global = require('../global.js')

module.exports = class Command
{
	constructor() {  }
	refresh() { }
	usage(token) { return '' }

	shouldCall(command) { return false }
	call(message, params, client) { }

	gotMessage(message) { }
}
