/**
 * [webpack --display-error-details] 当报错，显示错误明细
 * @type {[type]}
 */
var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin("commons.js", ["entry1", "entry2"]);
var modelPath = __dirname + '/public/javascripts/components/';
module.exports = {
  entry: {
    header: modelPath + 'header.js',
    nav: modelPath + 'nav.js',
    // login_form: modelPath + 'login_form.js',
    container: modelPath + 'container.js',
    index: modelPath + 'index.js',
    views: modelPath + 'views.js',
    redux: __dirname + '/public/javascripts/redux/index.js',
    redux_asyc: __dirname + '/public/javascripts/redux_asyc/index.js',
  },
  output: {
    path: __dirname + '/public/javascripts/dest/',
    filename: "[name].min.js",
    // library: 'CloapNoticeApp',
    // libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jsx?$/, loaders: ['jsx?harmony']},
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    // tell webpack to look for required files in node
    modulesDirectories: [
      'node_modules'
    ],
    extensions:['','.js']
  },
  //plugins 是一个对象数组
  plugins : [
    new webpack.NoErrorsPlugin()
  ],
  externals: {
    'react': 'React',
    'react-dom' : 'ReactDOM',
    'jquery' : 'jQuery', 
    'wdate-picker' : 'WdatePicker' 
  }
};