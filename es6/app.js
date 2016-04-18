import express  from 'express';
import ParamHandler  from  './config/params';
import ErrorHandler  from './config/error';
import QuickSellRouter from'./apps/quick-sell/action';
import ApiRouter from './apps/api-doc/action';
import DeptRouter from './apps/department/action';
import { Filter , FilterRouter}  from './apps/filter/action';



const app    = new express();
const param  = new ParamHandler(app);
const error  = new ErrorHandler(app);
const filter = new Filter(app);


//---------params config -----------

param.init();

//---------- filter -------------------
filter.init();

//---------- 拦截路由 ----------------
app.use('/filter',FilterRouter);

//---------- 速销入口 ----------------
app.use('/ekp/quick-sell',QuickSellRouter);

//---------- 部门接口 ----------------
app.use('/ekp/dept',DeptRouter);

//---------- 接口文档 -----------------
app.use('/api',ApiRouter);


//--------- handle error ---------------
error.init();

export default app;