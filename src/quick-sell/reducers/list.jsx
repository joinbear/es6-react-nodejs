import Constant from 'react-constant';
const constants = Constant('quickSell');

const initialState = {
	conditions:{
		searchkey : '',
		beginCreateDate:'2016-02-15',
		endCreateDate:'2016-02-25',
		beginQuicksellDate:null,
		endQuicksellDate:null,
		inventoryStatus:null,
		quicksellType:null,
		contractType:null,
		isAudit:null,
		foldArea:null,
		foldShop:null,
		foldGroup:null,
	},
	breadcrumb:[{
		link : 'http://oa.ecen.com.cn/',
		text : '首页'	
	},{
		link : 'http://oa.ecen.com.cn/',
		text : '限时代码'	
	},{
		link : '',
		text : '速销查询'	
	}],
	isAudit:[{
		value : 0,
		label : '未审核'
	},{
		value : 1,
		label : '已审核'
	}],
	foldArea:[],
	foldShop:[],
	foldGroup:[],
	columns : []
};


export default function list(state=initialState,action){
	switch(action.type){
		default :
			return state;
	}
}