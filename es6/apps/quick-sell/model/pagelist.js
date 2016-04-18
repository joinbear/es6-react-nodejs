import superagent from 'superagent';
import config from '../../config/config';

class QuickSellConditions {
	
	contructor() {
		this.host = config.api;
	}

	getList(conditions,type) {
		const { host } = this; 
		superagent
		.get()
		.end(function(err,res){

		})
	}

}


export default QuickSellConditions;