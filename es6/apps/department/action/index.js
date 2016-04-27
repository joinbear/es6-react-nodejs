import express from 'express';
import Department from '../model';

const router = express.Router();

const department = new Department();
//获取区域
router.get('/regin',(req, res)=>{
	res.json({
		"regin":[{
	    "id": "0802291715143DBDAF5254D0DB8FAF44",
	    "name": "万年场区"
	  },{
	    "id": "0802291715575BF678706D795EA0FB88",
	    "name": "金沙区"
	  },{
	    "id": "0912021732103100B9B279252FD34745",
	    "name": "金融城区"
	  },{
	    "id": "1101031006415E9E319FDF47B521AB48",
	    "name": "少城区"
	  },{
	    "id": "11010310073150F786824A6DCDCDB88A",
	    "name": "双楠区"
	  },{
	    "id": "1101031008460C4722C8AE4076F5A47C",
	    "name": "川师区"
	  },{
	    "id": "1312021136571324FBAF1B8141F3DCF0",
	    "name": "升仙湖区"
	  },{
	    "id": "131202133210384D8602F744F0C92D28",
	    "name": "天府区"
	  },{
	    "id": "1312021334452DB719C84DC7BFC0DB37",
	    "name": "郫县区"
	  },{
	    "id": "131202133645A34122C661A8CC582175",
	    "name": "光华区"
	  },{
	    "id": "E140092",
	    "name": "分销西北区"
	  },{
	    "id": "E150021",
	    "name": "人员待分配中心"
	  },{
	    "id": "E140103",
	    "name": "大源区"
	  },{
	    "id": "E140099",
	    "name": "龙泉区"
	  },{
	    "id": "E140093",
	    "name": "分销东区"
	  },{
	    "id": "E190012",
	    "name": "人员待分配中心"
	  },{
	    "id": "E140094",
	    "name": "分销南区"
	  },{
	    "id": "E140111",
	    "name": "商业地产分销部"
	  },{
	    "id": "E140112",
	    "name": "商业地产直销部"
	  },{
	    "id": "E140104",
	    "name": "房江湖"
	  },{
	    "id": "150302121611CEB90B377ACEA3ADA6A3",
	    "name": "顺城区"
	  },{
	    "id": "150302121808B6C7FBEE67CD839B9359",
	    "name": "红牌楼区"
	  },{
	    "id": "15030212132984D91832AE7FED78F375",
	    "name": "东湖区"
	  },{
	    "id": "150302121533DBFB8A45FBA5FC5EDA5E",
	    "name": "交大区"
	  },{
	    "id": "150302121717310476D47A21BD2E3CFE",
	    "name": "温江区"
	  },{
	    "id": "150302121959A10DC7D942ACCCB108CC",
	    "name": "桐梓林区"
	  },{
	    "id": "E140109",
	    "name": "直销南二区"
	  },{
	    "id": "E140108",
	    "name": "分销西南区"
	  },{
	    "id": "E140110",
	    "name": "直销西区"
	  },{
	    "id": "E140102",
	    "name": "直销南一区"
	  },{
	    "id": "E140101",
	    "name": "直销东区"
	  },{
	    "id": "E140107",
	    "name": "新房事业部"
	  },{
	    "id": "E140100",
	    "name": "商业地产部"
	  },{
	    "id": "E140114",
	    "name": "双流区"
	  }],
	  "subregin":[{
	    "id": "E140109",
	    "name": "直销南二区"
	  },{
	    "id": "E140108",
	    "name": "分销西南区"
	  },{
	    "id": "E140110",
	    "name": "直销西区"
	  },{
	    "id": "E140102",
	    "name": "直销南一区"
	  },{
	    "id": "E140101",
	    "name": "直销东区"
	  },{
	    "id": "E140107",
	    "name": "新房事业部"
	  },{
	    "id": "E140100",
	    "name": "商业地产部"
	  },{
	    "id": "E140114",
	    "name": "双流区"
	  }],
	  "stores":[{
	    "id": "E140109",
	    "name": "直销南二区"
	  },{
	    "id": "E140108",
	    "name": "分销西南区"
	  },{
	    "id": "E140110",
	    "name": "直销西区"
	  },{
	    "id": "E140102",
	    "name": "直销南一区"
	  },{
	    "id": "E140101",
	    "name": "直销东区"
	  },{
	    "id": "E140107",
	    "name": "新房事业部"
	  },{
	    "id": "E140100",
	    "name": "商业地产部"
	  },{
	    "id": "E140114",
	    "name": "双流区"
	  }]
	});
});

//获取商圈
router.get('/subregin/:reginid',(req, res)=>{
	res.json({
		"subregin":[{
	    "id": "0802291715143DBDAF5254D0DB8FAF44",
	    "name": "万年场区"
	  },{
	    "id": "0802291715575BF678706D795EA0FB88",
	    "name": "金沙区"
	  },{
	    "id": "0912021732103100B9B279252FD34745",
	    "name": "金融城区"
	  }]
	});
});

//获取店组
router.get('/store/:subreginid',(req, res)=>{
	department
	.getRegin()
	.then(function(value){
		res.end(value.text);
	},function(err){

	})
	
});

//获取人员信息
router.get('/person/:keyword',(req, res)=>{
	// department
	// .getUser(req.params.keyword)
	// .then(function(value){
	// 	res.end(value.text);
	// },function(err){

	// })
	res.json({
		person : [{
      key: '11',
      title: '乔尼·周敏',
      chosen: false
    },{
      key: '12',
      title: '乔尼·周敏',
      chosen: false
    },{
      key: '13',
      title: '乔尼·周敏',
      chosen: false
    },{
      key: '14',
      title: '乔尼·周敏',
      chosen: false
    },{
      key: '15',
      title: '乔尼·周敏',
      chosen: false
    },{
      key: '16',
      title: '乔尼·周敏',
      chosen: false
    },{
      key: '17',
      title: '乔尼·周敏',
      chosen: false
    }]
	});

});

//获取岗位
router.get('/dept/:keyword',(req, res)=>{
	// department
	// .getPost(req.params.keyword)
	// .then(function(value){
	// 	res.end(value.text);
	// },function(err){

	// })
	res.json({
		dept : [{
      key: '11',
      title: '信息中心',
      chosen: false
    },{
      key: '12',
      title: '财务中心',
      chosen: false
    },{
      key: '13',
      title: '客服服务中心',
      chosen: false
    },{
      key: '14',
      title: '人力资源中心',
      chosen: false
    },{
      key: '15',
      title: '链家网',
      chosen: false
    },{
      key: '16',
      title: '网站运营部',
      chosen: false
    },{
      key: '17',
      title: '网店管理部门',
      chosen: false
    }]
	});
});

//获取岗位
router.get('/post/:keyword',(req, res)=>{
	// department
	// .getPost(req.params.keyword)
	// .then(function(value){
	// 	res.end(value.text);
	// },function(err){

	// })
	res.json({
		post : [{
      key: '11',
      title: '业务专员一',
      chosen: false
    },{
      key: '12',
      title: '业务专员二',
      chosen: false
    },{
      key: '13',
      title: '业务专员三',
      chosen: false
    },{
      key: '14',
      title: '业务专员四',
      chosen: false
    },{
      key: '15',
      title: '业务专员五',
      chosen: false
    },{
      key: '16',
      title: '业务专员六',
      chosen: false
    },{
      key: '17',
      title: '业务专员七',
      chosen: false
    }]
	});
});

//获取组织树
router.get('/tree',(req, res)=>{
	// department
	// .getTree()
	// .then(function(value){
	// 	res.end(value.text);
	// },function(err){

	// })
	console.log(req.url);
	res.json({
		tree : [{
    	name : '链家',
    	key : '93F9C90C9A4F415BB582652A00749AF3',
    	expand : true,
    	isLeaf : false,
    	children : [{
    		name : '成都链家',
      	key : '20D74297EB234243B03BD6916CD14E91',
      	expand : true,
      	isLeaf : false,
      	children : [{
      		name : '财务中心',
	      	key : '0013AAAAAAAAAAAAAAAAAAAAAA0013AA',
	      	expand : true,
	      	isLeaf : false,
	      	children : [{
	      		name : '乔尼·周敏',
		      	key : '20110553',
		      	expand : true,
		      	isLeaf : true,
		      	children : []
	      	},{
	      		name : '乔尼·周敏',
		      	key : '20110554',
		      	expand : true,
		      	isLeaf : true,
		      	children : []
	      	},{
	      		name : '乔尼·周敏',
		      	key : '20110555',
		      	expand : true,
		      	isLeaf : true,
		      	children : []
	      	}]
      	},{
      		name : '店面支持中心',
	      	key : '090608184552F425B2F7924D1607C6F1',
	      	expand : true,
	      	isLeaf : false,
	      	children : []
      	},{
      		name : '金融事业部',
	      	key : 'E190014',
	      	expand : true,
	      	isLeaf : false,
	      	children : []
      	},{
      		name : '客户服务中心',
	      	key : '009AAAAAAAAAAAAAAAAAAAAAAA009AAA',
	      	expand : true,
	      	isLeaf : false,
	      	children : []
      	},{
      		name : '链家网成都站',
	      	key : 'E190015',
	      	expand : true,
	      	isLeaf : false,
	      	children : []
      	},{
      		name : '培训中心',
	      	key : '0065AAAAAAAAAAAAAAAAAAAAAA0065AA',
	      	expand : true,
	      	isLeaf : false,
	      	children : []
      	}]
    	},{
    		name : '重庆链家',
      	key : 'B09002BD75384068BEB4085872B5A83B',
      	expand : true,
      	isLeaf : false,
      	children : []
    	}]
    }]
	});


});



const DeptRouter = router;
export default DeptRouter;