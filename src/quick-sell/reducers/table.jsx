import Constant from 'react-constant';
const constants = Constant('quickSell');

const initialState = {
	data : [],
	loading : false,
	operation : false,
	total : 0,
	cacheConditions : {}
}

export default function table(state=initialState,action){
	switch(action.type){
		case constants.of('RECEIVED_QUICKSELL_LISTDATA'):
			return Object.assign({},state,{
				data : action.data , 
				operation : action.operation,
				total : action.total ,
				loading : action.loading 
			});
			break;
		case constants.of('DATA_LOADING'):
			return Object.assign({},state,{
				loading : action.loading 
			});
			break;
		case constants.of('CACHE_DATA'):
			return Object.assign({},state,{
				cacheConditions : action.cacheConditions 
			});
			break;
		default :
			return state;
	}
}