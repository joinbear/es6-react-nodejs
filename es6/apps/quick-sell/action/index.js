import express from 'express';
import redis from 'redis';
// import RedisConnect from '../../../config/redis';
import CommonLibrary from '../../../lib/common-lib';
import QuickSellPageList from '../model/pagelist';

const router = express.Router();
const pageList = new QuickSellPageList();
const comLib = new CommonLibrary();
const filename = process.cwd() + '/src/quick-sell/index.html';

const client = redis.createClient(6379,'127.0.0.1');
// 
router.get('/',(req, res)=>{
	console.log('i am in quick-sell'+req.url);

	client.on("error", function (err) {  
	    console.log("Error " + err);  
	});  
	  
	client.set("test", "string val", redis.print);//set "string key" "string val" 
	client.get('test',function(err, reply) {
    console.log(reply.toString());
  })
	res.sendFile(filename);
});

router.get('/add',(req, res)=>{
	console.log('i am in quick-sell'+req.url);
	res.sendFile(filename);
});

router.get('/edit',(req, res)=>{
	console.log('i am in quick-sell'+req.url);
	res.sendFile(filename);
});

router.delete('/operate/:fdid',(req, res)=>{
	const type = req.params.fdid;
	console.log(type);
	res.end('test');
});

router.post('/operate/:type',(req, res)=>{
	const type = req.params.type;
	console.log(type);
	res.end('test');
});

router.put('/operate/:type',(req, res)=>{
	const type = req.params.type;
	console.log(type);
	console.log(req.body);
	//修改数据，读取当独数据，覆盖更新缓存，从缓存中获取数据
	res.json({
		data : [],
		operation : true
	});
});

router.post('/pagelist',(req, res)=>{
	//console.log(req.body);
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
			// console.log( JSON.parse(result.text) );
		},function(err){
			res.json({
				data : [],
				operation : false
			});
			// res.json();
			console.error(err);
		})
});

const QuickSellRouter = router;
export default QuickSellRouter;