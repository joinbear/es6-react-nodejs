import Constant from 'react-constant';
const constants = Constant('quickSell');

//获取日期，速销开始日期默认为一周
const dateObject = new Date();
const day = dateObject.getDate();
const month = dateObject.getMonth();
const year = dateObject.getFullYear();

const initialState = {
	conditions:{
		searchkey : '',
		beginPubDate:new Date(year,month,day-7),
		endPubDate:new Date(year,month,day),
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
	columns : [],
	SearchBtn:''
};


export default function list(state=initialState,action){
	switch(action.type){
		case constants.of('DATA_LOADING'):
			return Object.assign({},state,{
				SearchBtn : action.SearchBtn 
			});
			break;
		case constants.of('RECEIVED_QUICKSELL_LISTDATA'):
			return Object.assign({},state,{
				SearchBtn : action.SearchBtn 
			});
			break;
		default :
			return state;
	}
}