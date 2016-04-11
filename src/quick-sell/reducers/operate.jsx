import Constant from 'react-constant';
const constants = Constant('quickSell');

const initialState = {
	currentModal : {
		visible : false,
    fdId : '',
    title : '标题',
    okText : '确定'
	}
};

export default function operate(state = initialState, action) { 
	switch(action.type){
		case constants.of('QUICKSELL_HANDLEOPERATION'):
		console.log(Object.assign({},state,{
				currentModal : action.data
			}));
			return Object.assign({},state,{
				currentModal : action.data
			});
		default:
			return state;
	}
}


