import express  from 'express';
import ParamHandler  from  './config/params';
import ErrorHandler  from './config/error';
import quickSellRouter from'./controllers/quick-sell-controller';
import apiRouter from './controllers/api-controller';
import { Filter , filterRouter}  from './controllers/filter-controller';



const app    = new express();
const param  = new ParamHandler(app);
const error  = new ErrorHandler(app);
const filter = new Filter(app);


//---------params config -----------

param.init();

//---------- filter -------------------
filter.init();

//---------- 拦截路由 ----------------
app.use('/filter',filterRouter);

//---------- 速销入口 ----------------
app.use('/ekp/quick-sell',quickSellRouter);

//---------- 接口文档 -----------------
app.use('/api',apiRouter);


//--------- handle error ---------------
error.init();

export default app;