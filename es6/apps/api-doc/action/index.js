import express from 'express';
import raml2html from 'raml2html';


const ApiRouter = express.Router();
const configWithDefaultTemplates = raml2html.getDefaultConfig();


ApiRouter.get('/:api',function(req,res){
	// console.log(process.cwd() + '/raml/'+ req.params.api +'/api.raml');
	// console.log(configWithDefaultTemplates);
	// source can either be a filename, url, file contents (string) or parsed RAML object
	raml2html.render(process.cwd() + '/raml/'+ req.params.api +'/api.raml', configWithDefaultTemplates).then(function(result) {
		res.end(result);
	  // Save the result to a file or do something else with the result
	}, function(error) {
	  // Output error
	  res.end('error');
	});
});


export default ApiRouter;