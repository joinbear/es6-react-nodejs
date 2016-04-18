'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _raml2html = require('raml2html');

var _raml2html2 = _interopRequireDefault(_raml2html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ApiRouter = _express2.default.Router();
const configWithDefaultTemplates = _raml2html2.default.getDefaultConfig();

ApiRouter.get('/:api', function (req, res) {
	// console.log(process.cwd() + '/raml/'+ req.params.api +'/api.raml');
	// console.log(configWithDefaultTemplates);
	// source can either be a filename, url, file contents (string) or parsed RAML object
	_raml2html2.default.render(process.cwd() + '/raml/' + req.params.api + '/api.raml', configWithDefaultTemplates).then(function (result) {
		res.end(result);
		// Save the result to a file or do something else with the result
	}, function (error) {
		// Output error
		res.end('error');
	});
});

exports.default = ApiRouter;