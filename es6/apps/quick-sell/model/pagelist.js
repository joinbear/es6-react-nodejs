import superagent from 'superagent';
import config from '../config/';
import CommonLibrary from '../../../lib/common-lib';

const comLib = new CommonLibrary();

class QuickSellPageList {
	
	contructor() {
		this.host = config.api;
	}

	getList(conditions) {
		return comLib.getData(config.pagelist+'?page=1&rows=15&data='+conditions);
	}

}

export default QuickSellPageList;