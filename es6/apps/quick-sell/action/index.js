import express from 'express';

const router = express.Router();

// 
router.get('/*',(req, res)=>{
	console.log('i am in quick-sell'+req.url);
	const filename = process.cwd() + '/src/quick-sell/index.html';
	res.sendFile(filename);
});

router.post('/pagelist',(req, res)=>{
	console.log(req.url);
	res.json({
		data : [{
			key : '1',
			index : '1',
			fdId : '121111111sfdsfs',
			operation:'111111',
			contract:'201105789411',
			housesName:'蓝光coco国际',
			houseNumber:'CDJN89811485',
			beginDate:'2016-03-21',
			store:'金沙区/翠微清波店/翠微清波店02组',
			person:'休玛.李磊',
			price:'100.0',
			credit:'本离婚证原件',
			money:'1000.00',
			status:'解约',
			checkStatus:'已审核',
			payStatus:'已付款',
			recycleStatus:'已报赔',
			visitStatus:'不合格',
			createTime:'2016-02-15'
		},{
			key : '2',
			index : '2',
			fdId : '121111111sfdsfs',
			operation:'111111',
			contract:'201105789411',
			housesName:'蓝光coco国际',
			houseNumber:'CDJN89811485',
			beginDate:'2016-03-21',
			store:'金沙区/翠微清波店/翠微清波店02组',
			person:'休玛.李磊',
			price:'100.0',
			credit:'本离婚证原件',
			money:'1000.00',
			status:'解约',
			checkStatus:'未审核',
			payStatus:'不付款',
			recycleStatus:'未回收',
			visitStatus:'合格',
			createTime:'2016-02-15'
		},{
			key : '3',
			index : '3',
			fdId : '121111111sfdsfs',
			operation:'111111',
			contract:'dsfdsfdsfs',
			housesName:'蓝光coco国际',
			houseNumber:'CDJN89811485',
			beginDate:'2016-03-21',
			store:'金沙区/翠微清波店/翠微清波店02组',
			person:'休玛.李磊',
			price:'100.0',
			credit:'本离婚证原件',
			money:'1000.00',
			status:'解约',
			checkStatus:'未审核',
			payStatus:'不付款',
			recycleStatus:'未回收',
			visitStatus:'合格',
			createTime:'2016-02-15'
		},{
			key : '4',
			index : '4',
			fdId : '121111111sfdsfs',
			operation:'111111',
			contract:'dsfdsfdsfs',
			housesName:'蓝光coco国际',
			houseNumber:'CDJN89811485',
			beginDate:'2016-03-21',
			store:'金沙区/翠微清波店/翠微清波店02组',
			person:'休玛.李磊',
			price:'100.0',
			credit:'本离婚证原件',
			money:'1000.00',
			status:'解约',
			checkStatus:'未审核',
			payStatus:'不付款',
			recycleStatus:'未回收',
			visitStatus:'合格',
			createTime:'2016-02-15'
		},{
			key : '5',
			index : '5',
			fdId : '121111111sfdsfs',
			operation:'111111',
			contract:'dsfdsfdsfs',
			housesName:'蓝光coco国际',
			houseNumber:'CDJN89811485',
			beginDate:'2016-03-21',
			store:'金沙区/翠微清波店/翠微清波店02组',
			person:'休玛.李磊',
			price:'100.0',
			credit:'本离婚证原件',
			money:'1000.00',
			status:'解约',
			checkStatus:'未审核',
			payStatus:'不付款',
			recycleStatus:'未回收',
			visitStatus:'合格',
			createTime:'2016-02-15'
		},{
			key : '6',
			index : '6',
			fdId : '121111111sfdsfs',
			operation:'111111',
			contract:'dsfdsfdsfs',
			housesName:'蓝光coco国际',
			houseNumber:'CDJN89811485',
			beginDate:'2016-03-21',
			store:'金沙区/翠微清波店/翠微清波店02组',
			person:'休玛.李磊',
			price:'100.0',
			credit:'本离婚证原件',
			money:'1000.00',
			status:'解约',
			checkStatus:'未审核',
			payStatus:'不付款',
			recycleStatus:'未回收',
			visitStatus:'合格',
			createTime:'2016-02-15'
		},{
			key : '7',
			index : '7',
			fdId : '121111111sfdsfs',
			operation:'111111',
			contract:'dsfdsfdsfs',
			housesName:'蓝光coco国际',
			houseNumber:'CDJN89811485',
			beginDate:'2016-03-21',
			store:'金沙区/翠微清波店/翠微清波店02组',
			person:'休玛.李磊',
			price:'100.0',
			credit:'本离婚证原件',
			money:'1000.00',
			status:'解约',
			checkStatus:'未审核',
			payStatus:'不付款',
			recycleStatus:'未回收',
			visitStatus:'合格',
			createTime:'2016-02-15'
		}]
	});
});

const QuickSellRouter = router;
export default QuickSellRouter;