import superagent from 'superagent';
import config from '../../config/config';
import CommonLibrary from '../../lib/common-lib';

class Department {
	
	contructor() {
		this.host = config.api;
	}

	getRegin(conditions,type) {
		const { host } = this; 
		superagent
		.get()
		.end(function(err,res){

		})
	}
	getSubregin(reginId) {

	}
	getStore(subreginId) {

	}
}


export default Department;