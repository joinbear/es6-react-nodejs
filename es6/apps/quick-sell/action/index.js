import express from 'express';
import CommonLibrary from '../../../lib/common-lib';
import QuickSellPageList from '../model/pagelist';

const router = express.Router();
const pageList = new QuickSellPageList();
const comLib = new CommonLibrary();
// 
router.get('/*',(req, res)=>{
	console.log('i am in quick-sell'+req.url);
	const filename = process.cwd() + '/src/quick-sell/index.html';
	res.sendFile(filename);
});

router.post('/pagelist',(req, res)=>{
	console.log(req.body);
	const body = req.body;
	const conditions = {
		"beginPubDate" : comLib.dateToSecond(body.beginPubDate),
		"endPubDate" : comLib.dateToSecond(body.endPubDate)
	}
	pageList
		.getList( encodeURIComponent( JSON.stringify(conditions) )  )
		.then(function(result){
			const resData = JSON.parse( decodeURIComponent(result.text) );
			if(resData.state == 200){
				res.json({
					data : resData.data,
					operation : true
				});
			}else{
				res.json(resData);
			}
			console.log( JSON.parse(result.text) );
		},function(err){
			console.error(err);
		})
});

const QuickSellRouter = router;
export default QuickSellRouter;