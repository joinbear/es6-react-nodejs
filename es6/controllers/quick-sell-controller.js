import express from 'express';

const router = express.Router();

// 
router.get('/*',(req, res)=>{
	console.log(req.url);
	const filename = process.cwd() + '/src/quick-sell/index.html';
	res.sendFile(filename);
});



const quickSellRouter = router;
export default quickSellRouter;