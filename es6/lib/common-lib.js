class CommonLibrary {
	constructor() {

	}
	promise(fn) {
		// yield any promise
  	const result = new Promise(function(resolve, reject) {
  		fn(resolve, reject);
  	});
  	return result;
	}
}
export default CommonLibrary;