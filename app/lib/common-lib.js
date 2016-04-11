"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
class CommonLibrary {
	constructor() {}
	promise(fn) {
		// yield any promise
		const result = new Promise(function (resolve, reject) {
			fn(resolve, reject);
		});
		return result;
	}
}
exports.default = CommonLibrary;