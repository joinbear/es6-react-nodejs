import superagent from 'superagent';
import config from '../config/';
import CommonLibrary from '../../../lib/common-lib';

const comLib = new CommonLibrary();

/**
 * 速销列表Model
 */
class QuickSellPageList {
	
	contructor() {

	}
	/**
	 * [getList 获取列表页面]
	 * @param  {[type]} conditions [条件]
	 * @conditions demo "{"beginDate" : "2016-01-04" }" 
	 * @return {[type]}            [返回一个promise对象]
	 */
	getList(conditions,page) {
		return comLib.getData(config.pagelist+'?page='+page+'&rows=15&data='+conditions);
	}
	/**
	 * [putList update各种数据]
	 * @param  {[type]} type       [类型]
	 * @param  {[type]} conditions [更新条件，默认只有id]
	 * @return {[type]}            [返回一个promise对象]
	 */
	putList(type,conditions) {
		console.log(config[type]);
		return comLib.postData(config[type],conditions);
	}
	/**
	 * [postList 提交数据(回访状态，报赔，续签，回收)]
	 * @param  {[type]} type       [类型]
	 * @param  {[type]} conditions [post的数据]
	 * @return {[type]}            [返回一个promise对象]
	 */
	postList(type,conditions) {
		return comLib.postData(config[type],conditions);
	}
	/**
	 * [deleteList 删除速销合同]
	 * @param  {[type]} conditions [删除id]
	 * @conditions demo "{"id" : "12343434343" }" 
	 * @return {[type]}            [description]
	 */
	deleteList(conditions) {
		return comLib.postData(config['delete'],conditions);
	}

}

export default QuickSellPageList;