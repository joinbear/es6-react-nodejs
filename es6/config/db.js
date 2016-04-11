import mongoose from 'mongoose';
import config from './config';
/**
 * db connect,use different type can connect different database
 */
class DBConnect {
  constructor(type) {
    this.type  = type;
    this.debug = config.debug;
    //初始化执行函数
    this.init(type);
  }
  init(type){
    this.mongooseConnect();
  }
  // mongoose connect function 
  mongooseConnect(){
    const host   = 'mongodb://'+config.host + '/' + config.dbName;
    const options = {
      server: {
        auto_reconnect: true,//自动连接
        poolSize: 5 //连接池数量
      }
    };
    //开启调试
    mongoose.set('debug', this.debug);
    mongoose.connect(options,function(){
      if(err) {
        console.log('[mongoose log] Error connecting to: ' + host + '. ' + err);
      } else {
        console.log('[mongoose log] Successfully connected to: ' + host);
      }
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'mongoose connection error:'));
    db.once('open', function callback () {
      console.log('mongoose open success');
    });
  }
}

export default DBConnect;