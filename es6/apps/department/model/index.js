import superagent from 'superagent';
import config from '../config/';
import CommonLibrary from '../../../lib/common-lib';

const comLib = new CommonLibrary();

/**
 * 部门组织架构方法类
 */
class Department {
	
	contructor() {
		this.config = config;
	}
	/**
	 * [getRegin 获取区域]
	 * @return {[type]} [返回json数据]
	 */
	getRegin() {
		return comLib.getData(config.regin);
	}
	/**
	 * [getSubregin 根据大区id获取商圈]
	 * @param  {[type]} reginId [大区id]
	 * @return {[type]}         [返回json数据]
	 */
	getSubregin(reginId) {
		return comLib.getData(config.subregin + reginId);
	}
	/**
	 * [getStore 根据商圈id获取店组]
	 * @param  {[type]} subreginId [商圈id]
	 * @return {[type]}            [返回json数据]
	 */
	getStore(subreginId) {
		return comLib.getData(config.store + subreginId);
	}
	/**
	 * [getUser 根据关键词获取用户列表]
	 * @param  {[type]} keyword [用户关键词，姓名或者花名]
	 * @return {[type]}         [返回json数据]
	 */
	getUser(keyword) {
		return comLib.getData(config.user + keyword);
	}
	/**
	 * [getTree 获取组织树]
	 * @return {[type]} [description]
	 */
	getTree() {
		return comLib.getData(config.tree);
	}
	/**
	 * [getPost 根据关键词获取岗位]
	 * @param  {[type]} keyword [岗位关键词]
	 * @return {[type]}         [description]
	 */
	getPost(keyword) {
		return comLib.getData(config.post + keyword);
	}
}


export default Department;