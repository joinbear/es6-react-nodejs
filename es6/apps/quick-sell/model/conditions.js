import superagent from 'superagent';
import config from '../config/';
import CommonLibrary from '../../../lib/common-lib';

const comLib = new CommonLibrary();

class QuickSellPageList {
	
	contructor() {
		this.host = config.api;
	}

	getList(conditions) {
		
	}

}


export default QuickSellConditions;