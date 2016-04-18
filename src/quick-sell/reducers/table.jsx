import Constant from 'react-constant';
const constants = Constant('quickSell');

const initialState = {
	data : []
}

export default function table(state=initialState,action){
	switch(action.type){
		case constants.of('RECEIVED_QUICKSELL_LISTDATA'):
			return Object.assign({},state,{
				data : action.data
			});
			break;
		default :
			return state;
	}
}