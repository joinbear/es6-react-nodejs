/**
 * [webpack --display-error-details] 当报错，显示错误明细
 * git push -u origin master
 * webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包
 * webpack --watch   //监听变动并自动打包
 * webpack -p    //压缩混淆脚本，这个非常非常重要！
 * webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了
 */
var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("commons.js", ["entry1", "entry2"]);
// var modelPath = __dirname + '/public/javascripts/components/';
var modelPath = __dirname + '/src/quick_sell/';
module.exports = {
  entry: {
    // header: modelPath + 'header.js',
    // nav: modelPath + 'nav.js',
    // // login_form: modelPath + 'login_form.js',
    // container: modelPath + 'container.js',
    // index: modelPath + 'index.js',
    // views: modelPath + 'views.js',
    quick_sell: __dirname + '/src/quick_sell/index.jsx'
    // quick_sell: __dirname + '/public/javascripts/quick_sell/add.js',
  },
  output: {
    path: __dirname + '/dest/',
    filename: "[name].min.js",
    // library: 'CloapNoticeApp',
    // libraryTarget: 'umd'
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },{ 
        test: /\.css$/, 
        loader: "style!css" 
      },{ 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    // tell webpack to look for required files in node
    modulesDirectories: [
      'node_modules'
    ],
    extensions:['', '.js', '.jsx', '.json']
  },
  //plugins 是一个对象数组
  plugins : [
    new webpack.NoErrorsPlugin()
  ],
  externals: {
    'react': 'React',
    'react-dom' : 'ReactDOM',
    'jquery' : 'jQuery', 
    'wdate-picker' : 'WdatePicker', 
    'layer' : 'layer'
  }
};